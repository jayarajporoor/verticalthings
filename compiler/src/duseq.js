'use strict';

function array_push(target, obj){
	for(var i=0;i<obj.length;i++){
		target.push(obj[i]);
	}
}

function branch_merge(seq1, seq2){
	return seq1.concat(seq2);
}

class DUSeq{
  constructor() {
  	this.seq = [];
  }

  vardef(var, syms){
  	if(!var.type.dim){//if not array type, ignore.
  		return;
  	}
  	for(var i=0;i<var.ids;i++){
  		var sym = this.symtbl.lookup(var.ids[i]);
  		if(sym){
  			syms.push(sym);
  		}
  	}
  }

  vardefs(vardefs, is_mod){  	
  	var syms = [];
  	for(var i=0;i < vardefs.length;i++){
  		vardef(vardefs[i], syms);
  	}
  	var entry = is_mod ? {def: syms, kind: 'mem'} : {def: syms, kind: 'init'};
  	this.seq.push(entry);
  }

  expr(ast){

  }

  stmt(ast){
	var aggr_seq = [];
	switch(ast.kind){
		case 'block': 
			for(var i=0;i<ast.stmts.length;i++){
				var seq = this.stmt(ast.stmts[i]);
				array_push(aggr_seq, seq);
			}
		break;
		case 'if':
			var seq_if = this.stmt(ast.if_body);
			var seq_else = ast.else_body ? this.stmt(ast.else_body) : null;
			if(seq_else){
				aggr_seq = branch_merge(seq_if, seq_else);
			}else{
				aggr_seq = seq_if;
			}			
		break;
		case 'assign':
			aggr_seq  = [{def: ast.id, use: this.expr(ast.expr) }];
		break;
	}
	return aggr_seq;
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
  		this.symtbl.enterNestedScope(named_fdef.id);
	  	if(mod.vars){
	  		this.vardefs(mod.vars, true);
	  	}  		
  		this.fdef(named_fdef);
  		this.symtbl.exitNestedScope();
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
				this.symtbl.enterNestedScope(name);
				this.flow(mod, entry.qname);
				this.symtbl.exitNestedScope();
			}
		}else{
			this.build_pipeline_block(entry);//this is a nested block
		}
	}
  }

  build(ast, symtbl){
  	this.root_ast = ast;
  	symtbl.setRootScope();
  	this.symtbl = symtbl;
  	if(ast.pipeline){
  		this.pipeline_block(ast.pipeline.block);
  	}else{
  		console.log("DUSeq.build: No pipeline found");
  	}
  	return this.seq;
  }

}
