function stdalloc(ctx){
	var duseq = ctx.duseq;

	var ltvec = [];
	var ltmap ={};
	var full_lt = [];
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
		if(idx_used) idx++;	
	}

	console.log(full_lt);
	console.log(ltmap);

}

exports.transform = function(ast, ctx){
	if(!ctx.duseq){
		console.log("DUseq must be created prior to calling stdalloc.");
		return;
	}

	stdalloc(ctx);
};
