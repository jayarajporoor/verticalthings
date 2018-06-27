'use strict';

class DynScope{
  constructor(symtbl, parent, desc) {
    desc = desc || "<root>";
  	this.symtbl = symtbl;
  	this.parent = parent;
  	this.aliases = {};
    this.desc = desc;
  	this.current_scope = this;
  }

  enterFlow(name){
    var child = new DynScope(this.symtbl.getNestedScope(name), this, "Flow " + name);
    this.current_scope = child;
  }
  
  enterFunctionCall(name, actualParams){
  	var fsym = this.symtbl.lookup(name, 'fdef');
  	if(!fsym){
  		console.log("DynScope: Cannot find function symbol ", name, " in symtbl scope ", this.symtbl.current_scope.name);
  		return;
  	}
  	var child = new DynScope(this.symtbl.getNestedScope(name), this.current_scope, "Function call " + name);
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
  	this.current_scope = child;
  }

  exitFunctionCall(){
  	this.current_scope = this.current_scope.parent;
  }

  lookup_sym(name){  	
  	var curr_scope = this.current_scope;
  	var alias=null;
  	var dyn_scope = curr_scope;
  	while(curr_scope){
  		var alias = curr_scope.aliases[name];
  		if(alias){
  			if(alias.id){
  				name = alias.id;
  				dyn_scope = curr_scope.parent;
  			}else{
  				break;
  			}
  		}else{
  			break;
  		}
		  curr_scope = curr_scope.parent;
  	}
  	return dyn_scope.symtbl.lookup(name,null,true);
  }

}

module.exports = DynScope;
