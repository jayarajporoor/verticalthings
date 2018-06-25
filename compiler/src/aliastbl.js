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
  		console.log("AliasTable: Cannot find function symbol ", name);
  		return;
  	}
  	var child = new AliasTable(this.symtbl, this);
  	var formal_params = fsym.type.formal_params;
  	for(var i=0;i<actualParams.length;i++){
  		child.aliases[formal_params.id] = actualParams[i];
  	}
  	child.symtbl = this.symtbl.getNestedScope(name);
  	this.current_scope = child;
  }

  exitFunctionCall(){
  	this.current_scope = this.current_scope.parent;
  }

  lookup_sym(name){
  	var curr_scope = this.current_scope;
  	while(curr_scope.parent){
  		if(curr_scope.aliases[name]){
  			var alias =  curr_scope.aliases[name];
  			return curr_scope.symtbl.lookup(name);
  		}
  	}
  	return null;
  }

}