'use strict';

function array_push(target, obj){
	for(var i=0;i<obj.length;i++){
		target.push(obj[i]);
	}
}

function branch_merge(seq1, seq2){

}

function stmt(ast){
	var aggr_seq = [];
	switch(ast.kind){
		case 'block': 
			for(var i=0;i<ast.stmts.length;i++){
				var seq = stmt(ast.stmts[i]);
				array_push(aggr_seq, seq);
			}
		break;
		case 'if':
			var seq_if = stmt(ast.if_body);
			var seq_else = ast.else_body ? stmt(ast.else_body) : null;
			if(seq_else){
				aggr_seq = branch_merge(seq_if, seq_else);
			}else{
				aggr_seq = seq_if;
			}
		break;
	}
	return aggr_seq;
}

class DUSeq{
  constructor() {
  	this.seq = [];
  }

  vardefs(vars){
  	this.seq.push({mem: vars.ids});
  }

  fdef(ast){
  	if(ast.vars){
  		this.vardefs(ast.vars);
  	}
  	var seq = stmt(ast.body);
  	array_push(this.seq, seq);
  }

  flow(mod, flow_name){
  	if(!mod.fdefs) return;

  	var fname = flow_name.length == 1: null : flow_name[1];
  	var named_fdef = null;

  	for(var i=0;i<mod.fdefs.length;i++){
  		var fdef = mod.fdefs[i];
  		if(fname){
  			if(fdef.id === fname && fdef.flow){
  				named_fdef = mod.fdefs[i];
  			}
  		}else{
  			if(fdef.flow === 'default'){
  				named_fdef = mod.fdefs[i];
  			}
  		}
  	}

  	if(named_fdef){
	  	if(mod.vars){
	  		this.vardefs(mod.vars);
	  	}  		
  		this.fdef(named_fdef);
  	}else{
  		console.log("DUSeq: Flow name", flow_name, "not found");
  	}
  }

  pipeline_block(block){
	for(var i=0;i<block.length;i++){
		var entry = block[i];
		if(entry.qname){
			var name = entry.qname[0];
			var mod = this.root_ast.modules[name];
			if(mod) {
				this.flow(mod, entry.qname);
			}
		}else{
			this.build_pipeline_block(entry);//this is a nested block
		}
	}
  }

  build(ast){
  	this.root_ast = ast;
  	if(ast.pipeline){
  		this.pipeline_block(ast.pipeline.block);
  	}else{
  		console.log("DUSeq.build: No pipeline found");
  	}
  	return this.seq;
  }

}
