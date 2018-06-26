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

exports.find_default_flow = find_default_flow;
exports.find_fdef = find_fdef;
exports.find_flow = find_flow;
exports.vector_ops = ['push'];
