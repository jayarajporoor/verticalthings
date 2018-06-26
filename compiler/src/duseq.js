'use strict';

var AliasTable = require("./aliastbl.js");

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

  vardef(vr, init_syms, noinit_syms){
  	if(!vr.type.dim){//if not array type, ignore.
  		return;
  	}
  	for(var i=0;i<vr.defs;i++){
  		var sym = this.symtbl.lookup(vr.defs[i].id);
  		if(sym){
  			if(sym.has_init)
  				init_syms.push(sym);
  			else
  				noinit_syms.push(sym);
  		}
  	}
  }

  vardefs(vardefs, is_mod){  	
  	var init_syms = []. noinit_syms=[];
  	for(var i=0;i < vardefs.length;i++){
  		vardef(vardefs[i], init_syms, noinit_syms);
  	}

  	var entry=null;
  	if(is_mod){
  		var syms = init_syms.concat(noinit_syms);
  		if(syms.length > 0){
  			entry = {mem: syms};
  		}
  	}else{
  		if(init_syms.length > 0){
  			entry = {def: syms, kind: 'init'};
  		}
  		if(noinit_syms.length > 0){
  			if(!entry) entry = {};
  			entry.undef = syms;
  		}
  	}
  	if(entry){
  		this.seq.push(entry);
  	}
  }

  expr(ast, syms){
  	var id = ast.qid ? ast.qid[0] : null;

  	if(id){
  		var sym = this.symtbl.lookup(id);
  		if(sym.type.dim){
  			syms.push(sym);
  		}
  	}else{
  		if(ast.expr){
  			expr(ast.expr, syms);
  		}
  		if(ast.lexpr){
  			expr(ast.lexpr, syms);
  		}
  		if(ast.rexpr){
  			expr(ast.rexpr, syms);
  		}

  		if(ast.fcall){
  			var fname = ast.fcall.qname[0];
  			this.aliastbl.enterFunctionCall(fname, ast.fcall.params);
  			//process function call.
  			this.aliastbl.exitFunctionCall();
  		}
  	}
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
			var syms = [];
			this.expr(ast.expr, syms);
			aggr_seq  = [{def: ast.id, use: syms }];
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
  	this.aliastbl = new AliasTable(symtbl);
  	if(ast.pipeline){
  		this.pipeline_block(ast.pipeline.block);
  	}else{
  		console.log("DUSeq.build: No pipeline found");
  	}
  	return this.seq;
  }

}
