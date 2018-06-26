'use strict';

class AliasTable{
  constructor(symtbl, parent) {
  	this.symtbl = symtbl.getCurrentScope();
  	this.parent = parent;
  	this.aliases = {};
  	this.current_scope = this;
  }
  
  enterFunctionCall(name, actualParams){
  	var fsym = this.symtbl.lookup(name, 'fdef');
  	if(!fsym){
  		console.log("AliasTable: Cannot find function symbol ", name, " in symtbl scope ", this.symtbl.current_scope.name);
  		return;
  	}
  	var child = new AliasTable(this.symtbl, this);
  	var formal_params = fsym.info.type.formal_params;
  	for(var i=0;i<actualParams.length && i < formal_params.length;i++){
  		var formal_param = formal_params[i];
  		var actual_param = actualParams[i];
  		var aliased_id = null;
  		if(actual_param.expr){
  			actual_param = actual_param.expr;
  		}
  		if(formal_param.type.dim){//this is an array passing.
  			aliased_id = actual_param.qid ? actual_param.qid[0] : actual_param.id;
  		}
  		child.aliases[formal_param.id] = {id: aliased_id};
  	}
  	child.symtbl = this.symtbl.getNestedScope(name);
  	this.current_scope = child;
  }

  exitFunctionCall(){
  	this.current_scope = this.current_scope.parent;
  }

  lookup_sym(name){  	
  	var curr_scope = this.current_scope;
  	var alias=null;
  	var alias_scope = curr_scope;
  	while(curr_scope.parent){
  		var alias = curr_scope.aliases[name];
  		if(alias){
  			if(alias.id){
  				name = alias.id;
  				alias_scope = curr_scope;
  			}else{
  				break;
  			}
  		}else{
  			break;
  		}
		curr_scope = curr_scope.parent;
  	}
  	return alias_scope.symtbl.lookup(name);
  }

}

module.exports = AliasTable;
