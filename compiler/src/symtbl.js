class SymbolTable{
  constructor(parent, name) {
  	this.name = name;
  	this.parent = parent;
  	this.symbols = {};
  	this.scopes = {};
  	this.current_scope = this;
  }
  // Method
  addSymbol(name, syminfo) {
  	var sym = {name: name, info: syminfo};
  	this.current_scope.symbols[name] = sym;
  	return sym;
  }

  createNestedScope(scopename){
  	//console.log("Create scope ", scopename, " under ", this.current_scope.name);
  	var stbl = new SymbolTable(this.current_scope, scopename);
  	this.scopes[scopename] = stbl;
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
  	while(this.current_scope !== this) this.current_scope = this.current_scope.parent;
  }
}

module.exports = SymbolTable;
