'use strict';

class SymbolTable{
  constructor(name, parent) {
  	this.name = name;
  	this.parent = parent;
  	this.symbols = {};
  	this.scopes = {};
  	this.current_scope = this;
  }
  

  lookup(name, kind, non_scoped, uses){//kind = 'vardef', 'fdef'
  	var scope = non_scoped ? this : this.current_scope;
    var scope_chain_mode = true;
    var uses_idx = 0;
    var root_scope = null;
  	do{
  		var sym = scope.symbols[name];
  		if(sym)
      {
        switch(kind)
        {
          case 'vardef': if(!sym.info.is_formal_param && !sym.info.type.is_func) return sym; break;
          case 'fdef' : if(sym.info.type.is_func) return sym; break;
          default: return sym; 
        }
  		}
      
      if (scope_chain_mode){
        if (!scope.parent){
          scope_chain_mode = false;
          root_scope = scope;
        }
        scope = scope.parent;
      }

      if (!scope_chain_mode && uses){
          scope = null;
          while (uses_idx < uses.length && !scope) {
            var use_scope_name = uses[uses_idx].name;

            scope = root_scope.scopes[use_scope_name];
            uses_idx++;
          }
      }

  	}while(scope);
  	
  	return null;
  }

  addSymbolToCurrentScope(name, syminfo) {
    var scope_names = this.getScopeNames();
    var scope = this.current_scope;

  	var sym = {name: name, info: syminfo, scope_names: scope_names};
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

  getScopeNames(){
    var scope_names = [];
    var scope = this.current_scope;
    do{
      scope_names.unshift(scope.name);//add to beginning of the array.
      scope = scope.parent;
    }while(scope && scope.parent);
    return scope_names;
  }
}

module.exports = SymbolTable;
