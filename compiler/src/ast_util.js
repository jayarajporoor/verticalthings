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
	sym_dim = sym_dim.dim;
	if(ast.dim){
		var ast_dim = ast.dim.dim;		
		var udim = [];
		for(var i=ast_dim.length;i<sym_dim.length;i++){
			udim.push(sym_dim[i]);
		}
		resolv.dim = udim;
	}else{
		resolv.dim = deep_copy(sym_dim);
	}
	resolv.id = id;	
	resolv.sym = sym;
	return resolv;
}

function get_scoped_name(sym, sep){
	sep = !sep ? "_" : sep;
	return sym.scope_names.join(sep) + sep + sym.name;
}

exports.find_default_flow = find_default_flow;
exports.find_fdef = find_fdef;
exports.find_flow = find_flow;
exports.vector_ops = ['push'];
exports.resolve_matrix_expr = resolve_matrix_expr;
exports.deep_copy = deep_copy;
exports.get_scoped_name = get_scoped_name;