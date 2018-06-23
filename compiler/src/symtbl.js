class SymbolTable{
  constructor(parent) {
  	this.parent = parent;
  	this.symbols = {};
  	this.scopes = {};
  }
  // Method
  addSymbol(name, syminfo) {
  	var sym = {name: name, info: syminfo};
  	this.symbols[name] = sym;
  	return sym;
  }

  createScope(scopename){
  	var stbl = new SymbolTable(this);
  	this.scopes[scopename] = stbl;
  	return stbl;
  }

  getScope(scopename){
  	return this.scopes[scopename];
  }
}

module.exports = SymbolTable;
