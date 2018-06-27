function find_default_flow(mod_ast){
	var fdefs = mod_ast.fdefs;
	for(var i=0;i<fdefs.length;i++){
		if(fdefs[i].flow === 'default')
		{
			return fdefs[i];
		}
	}
	return null;
}

function find_flow(mod_ast, name){
	
	if(!name){
		return find_default_flow(mod_ast);
	}

	var fdefs = mod_ast.fdefs;
	for(var i=0;i<fdefs.length;i++){
		if(fdefs[i].flow  && fdefs[i].id === name)
		{
			return fdefs[i];
		}
	}
	return null;
}

function find_fdef(mod_ast, fname){
	var fdefs = mod_ast.fdefs;
	for(var i=0;i<fdefs.length;i++){
		if(fdefs[i].id === fname)
		{
			return fdefs[i];
		}
	}
	return null;
}
function deep_copy(obj){
	if(!obj) return obj;
	return JSON.parse(JSON.stringify(obj));
}

function unresolved_dim(ast, symtbl){
	var sym_dim = symtbl.lookup(ast.id).info.type.dim;
	if(ast.dim){
		var udim = [];
		for(var i=ast.dim.length;i<sym_dim.length;i++){
			udim.push(deep_copy(sym_dim[i]));
		}
		return udim;
	}else{
		return deep_copy(sym_dim);
	}
}

exports.find_default_flow = find_default_flow;
exports.find_fdef = find_fdef;
exports.find_flow = find_flow;
exports.vector_ops = ['push'];
exports.unresolved_dim = unresolved_dim;
exports.deep_copy = deep_copy;
