const assert = require('assert');
const ast_util = require("./ast_util.js");

var ltmap ={};
var full_ltmap = {};
var regions = [];

function compute_ltmap(duseq){
	var idx = 0;
	var idx_used;

	for(var i=0;i<duseq.length;i++){
		var du = duseq[i];
		idx_used = false;
		if(du.mem){
			for(var j=0;j < du.mem.length;j++){
				var m = du.mem[j];
				var scoped_name = ast_util.get_scoped_name(m);
				ltmap[scoped_name] = {mem: true, sym: m};
			}
		}
		if(du.undef){
			for(var j=0;j< du.undef.length;j++){
				var m = du.undef[j];
				var scoped_name = ast_util.get_scoped_name(m);				
				ltmap[scoped_name] = {undef: true, sym: m};
			}
		}

		//must process use before def, otherwise we will miss memness of situations like:
		//int [3] xx;  flow() {xxx = xxx + 3;}
		if(du.use){
			for(var j=0;j < du.use.length;j++){
				var m = du.use[j];
				var scoped_name = ast_util.get_scoped_name(m);				
				var lt = ltmap[scoped_name];
				if(lt){
					if(lt.mem){
						full_ltmap[scoped_name] = lt.sym;
						delete ltmap[scoped_name];
					}else{
						lt.end = idx;
						idx_used = true;
					}
				}
			}
		}

		if(du.def){
			for(var j=0;j < du.def.length;j++){
				var m = du.def[j];
				var scoped_name = ast_util.get_scoped_name(m);				
				var lt = ltmap[scoped_name];
				if(lt){
					lt.mem = false;
					lt.undef = false;
					if(typeof(lt.start) === 'undefined'){
						lt.start = idx;
						idx_used = true;
					}
					//unused definitions must be optimized away before allocator is called.
					//memory allocator won't ignore unused definitions.
					lt.end = idx;
					idx_used = true;				
				}
			}
		}

		if(idx_used) idx++;	
	}
}

function init_regions(){
	var max_lifetime = 0;
	for(id in ltmap){
		//initially create separate region for each object.
		var ltentry = ltmap[id];		
		var block = {lt_start: ltentry.start, lt_end: ltentry.end, size: ltentry.sym.info.size, lt_available: false,
								owners: [{sym: ltentry.sym}] };
		if(!block.size){
			console.log("LT entry with unknown size ", id, " cannot be automatically allocated.");
		}else{
			regions.push({blocks: [block], size: block.size});
			if(block.lt_end > max_lifetime){
				max_lifetime = block.lt_end;
			}
		}
	}	
	return max_lifetime;
}

function default_merge_policy(size_saving, candidate, target){
	var merge_threshold = 0.5;
	return size_saving/candidate.size > merge_threshold;	
}

function is_adjacent_and_non_overlapping(lt_end, lt_start, adjacency){
	return (lt_start > lt_end) && (lt_start <= (lt_end + adjacency));
}

function merge_regions(target_region, candidate_region, run_start, adjacency, commit){
	var merged_blocks = null;
	if(commit){
		merged_blocks = [];
	}
	var target = target_region.blocks; 
	var candidate = candidate_region.blocks;
	
	var tidx = run_start;
	var cidx = 0;
	var tblock = null;
	var cblock = null;
	var done = false;
	var size_saving = 0;
	while(!done){
		if(!tblock){
			if(tidx < target.length){
				tblock = target[tidx++];
			}else{
				done = true;
				break;
			}
		}
		if(!cblock){
			if(cidx < candidate.length){
				cblock = candidate[cidx++];
			}else{
				done = true;
				break;
			}
		}

		if( is_adjacent_and_non_overlapping(cblock.lt_end, tblock.lt_start, adjacency) || 
			is_adjacent_and_non_overlapping(tblock.lt_end, cblock.lt_start, adjacency) ){
			var merged_block = {  lt_start: Math.min(tblock.lt_start, tblock.lt_start), 
				 				  lt_end: Math.max(tblock.lt_end,cblock.lt_end), 
                        		  owners: tblock.owners.concat(cblock.owners) 
                        		};
            if(tblock.size > cblock.size){
				tblock.size = tblock.size - cblock.size;
				merged_block.size = cblock.size;
				size_saving += cblock.size;
				cblock = null;
            }else if(cblock.size > tblock.size){
				cblock.size = cblock.size - tblock.size;
				merged_block.size = tblock.size;
				size_saving += tblock.size;
				tblock = null;
            }else{
				merged_block.size = tblock.size;
				size_saving = tblock.size;
				tblock = cblock = null;
            }
            if(merged_blocks){
				merged_blocks.push(merged_block);
			}
			if(size_saving === 0) run_start = i;//we're just starting a merge-run.
		}else{
			if(merged_blocks) merged_blocks = [];
			size_saving = 0;
			run_start++;//start the run from the next index in the target region.
			t = run_start;
			c = 0;
			tblock = cblock = null;
		}
		assert(!tblock && !cblock);//nothing pending.
		if(merged_blocks){
			while(cidx < candidate.length){
				merged_blocks.push(candidate[cidx]);
				target_region.size += candidate[cidx].size;
				cidx++;				
			}
			target_region.blocks = merged_blocks;
		}		
	}
	return {size_saving: size_saving, run_start: run_start};

}

function optimize_regions(max_lifetime, merge_policy){
	var changed = false;
	do{
		changed = false;
		var adjacency = 1;		
		while(adjacency < max_lifetime) {

			for(var i=0;i<regions.length && !changed;i++){
				for(var j=0;j<regions.length && !changed;j++){
					if(i == j ) continue;
					var target_region = regions[i];
					var candidate_region = regions[j];
					var res = merge_regions(target_region, candidate_region, 0, adjacency, false);
					if(merge_policy(res.size_saving, candidate_region, target_region)){
						merge_regions(target_region, candidate_region, res.run_start, adjacency, true);
						regions.splice(j, 1);
						changed = true;
						break;
					}
				}
			}

			if(changed){
				break;
			}else{
				adjacency++;
			}
		}
	}while(changed);
}

function allocate_addresses(){
	var next_loc = 0;
	var address_assigned = {};
	var address_alloc = [];	

	for(var k in full_ltmap){
		var sym = full_ltmap[k];
		var addr = {sym: sym, loc: next_loc};
		address_alloc.push(addr);
		next_loc += sym.info.size;
	}

	for(var i=0;i<regions.length;i++){
		var blocks = regions[i].blocks;
		for(var j=0;j<blocks.length;j++){
			var block = blocks[j];
			var owners = block.owners;
			for(var k=0;k<owners.length;k++){
				var sym = owners[k].sym;
				var scoped_name = ast_util.get_scoped_name(sym);
				if(!address_assigned[scoped_name]){
					address_assigned[scoped_name] = true;
					var addr = {sym: sym, loc: next_loc};
					address_alloc.push(addr);
				}
			}
			next_loc += block.size;
		}
	}
	return address_alloc;
}

exports.transform = function(ast, ctx){
	if(!ctx.duseq){
		console.log("DUseq must be created prior to calling stdalloc.");
		return;
	}

	compute_ltmap(ctx.duseq);
	
//	console.log(full_ltmap);
//	console.log(ltmap);
	
	var max_lifetime = init_regions();

	optimize_regions(max_lifetime, default_merge_policy);
	var address_alloc = allocate_addresses();
//	console.log(regions);
	ctx.address_alloc = address_alloc;
};
