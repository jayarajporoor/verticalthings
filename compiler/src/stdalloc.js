var ltmap ={};
var full_lt = [];
var mem_blocks = [];

function compute_lt(duseq){
	var idx = 0;
	var idx_used;

	for(var i=0;i<duseq.length;i++){
		var du = duseq[i];
		idx_used = false;
		if(du.mem){
			for(var j=0;j < du.mem.length;j++){
				var m = du.mem[j];
				ltmap[m.name] = {mem: true, sym: m};
			}
		}
		if(du.undef){
			for(var j=0;j< du.undef.length;j++){
				var m = du.undef[j];
				ltmap[m.name] = {undef: true, sym: m};
			}
		}

		//must process use before def, otherwise we will miss memness of situations like:
		//int [3] xx;  flow() {xxx = xxx + 3;}
		if(du.use){
			for(var j=0;j < du.use.length;j++){
				var m = du.use[j];
				var lt = ltmap[m.name];
				if(lt){
					if(lt.mem){
						full_lt.push(lt.sym);
						delete ltmap[m.name];
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
				var lt = ltmap[m.name];
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

function init_mem_blocks(){
	for(id in ltmap){
		var ltentry = ltmap[id];		
		var block = {lt_end: ltentry.end, size: ltentry.sym.info.size, sym: ltentry.sym};
		if(!block.size){
			console.log("LT entry with unknown size ", id, " cannot be automatically allocated.");
		}else{
			var blocks = mem_blocks[ltentry.start];
			if(!blocks){
				mem_blocks[ltentry.start] = blocks = [];
			}
			blocks.push(block);
		}
	}	
}

function optimize_mem_blocks(){
	var changed = false;
	do{
		changed = false;
		var last_mem_block = mem_blocks.length - 1;
		var adjacency = 1;		
		while(adjacency < last_mem_block) {
			for(var i=0;i<mem_blocks.length && !changed;i++){
				var blocks = mem_blocks[i];
				if(!blocks || blocks.length === 0){
					continue;
				}else{
					for(var j=0;j<blocks.length && !changed;j++){
						var block = blocks[j];
						if(!block) continue;
						var cmp_index = block.lt_end + adjacency;
						if(cmp_index <= last_mem_block){
							var cmp_blocks = mem_blocks[cmp_index];
							
							if(!cmp_blocks) continue;

							for(var p=0;p<cmp_blocks.length;p++){
								var cmp_block = cmp_blocks[p];
								if(!cmp_block) continue;

								if(cmp_block.size > block.size){
									cmp_block.size -= block.size;
									block.lt_end = cmp_block.lt_end;
								}else{
									block.lt_end = cmp_index;
								}
								mem_blocks[cmp_index].push(cmp_block);
								cmp_blocks[p] = null;
								changed = true;
								break;
							}
						}
					}
				}
			}
			console.log(adjacency);
			adjacency++;
		}
	}while(changed);
}

exports.transform = function(ast, ctx){
	if(!ctx.duseq){
		console.log("DUseq must be created prior to calling stdalloc.");
		return;
	}

	compute_lt(ctx.duseq);
	//console.log(full_lt);
	//console.log(ltmap);
	init_mem_blocks();	
	optimize_mem_blocks();
	console.log(mem_blocks);
};
