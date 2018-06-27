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

function resolve_matrix_expr(ast, symtbl){
	var resolv = {};
	var id = ast.id;
	if(ast.qid){
		id = ast.qid[0];
	}
	var sym = symtbl.lookup(id);
	var sym_dim = sym.info.type.dim;
	if(!sym_dim){
		return null;
	}

	if(ast.dim){
		var udim = [];
		for(var i=ast.dim.length;i<sym_dim.length;i++){
			udim.push(deep_copy(sym_dim[i]));
		}
		resolv.dim = udim;
	}else{
		resolv.dim = deep_copy(sym_dim);
	}
	resolv.id = id;	
	resolv.sym = sym;
	return resolv;
}

exports.find_default_flow = find_default_flow;
exports.find_fdef = find_fdef;
exports.find_flow = find_flow;
exports.vector_ops = ['push'];
exports.unresolved_dim = unresolved_dim;
exports.deep_copy = deep_copy;
