'use strict';

class SymbolTable{
  constructor(name, parent) {
  	this.name = name;
  	this.parent = parent;
  	this.symbols = {};
  	this.scopes = {};
  	this.current_scope = this;
  }
  

  lookup(name, kind){//kind = 'vardef', 'fdef'
  	var scope = this.current_scope;
  	do{
  		var info = scope.symbols[name];
  		if(info){
        switch(kind){
          case 'vardef': if(!info.is_formal_param && !info.ftype) return info; break;
          case 'fdef' : if(info.ftype) return info; break;
          default: return info; 
        }
  		}
  		scope = scope.parent;
  	}while(scope.parent);
  	
  	return null;
  }

  addSymbolToCurrentScope(name, syminfo) {
  	var sym = {name: name, info: syminfo};
  	this.current_scope.symbols[name] = sym;
  	return sym;
  }

  removeSymbolFromCurrentScope(name){
    if(this.current_scope.symbols[name]){
      delete this.current_scope.symbols[name];
      return true;
    }
    return false;
  }

  createNestedScope(scopename){
  	//console.log("Create scope ", scopename, " under ", this.current_scope.name);
  	var stbl = new SymbolTable(scopename, this.current_scope);
  	this.current_scope.scopes[scopename] = stbl;
  	this.current_scope = stbl;
  	return stbl;
  }

  exitNestedScope(){
  	//console.log("Exit scope ", this.current_scope.name, " to ", this.current_scope.parent.name);
  	this.current_scope = this.current_scope.parent;
  	return this.current_scope;
  }

  enterNestedScope(scopename){
  	//console.log("Enter scope ", scopename, " from ", this.current_scope.name);
  	var scope = this.getNestedScope(scopename);
  	this.current_scope = scope;
  	return scope;
  }

  getNestedScope(scopename){
  	return this.current_scope.scopes[scopename];
  }

  setRootScope(){
  	while(this.current_scope.parent) this.current_scope = this.current_scope.parent;
  }

  getCurrentScope(){
    return this.current_scope;
  }
}

module.exports = SymbolTable;
