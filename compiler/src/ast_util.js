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
	if(!id){
		return null;
	}
	var sym = symtbl.lookup(id);
	if(!sym){
		return null;
	}
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

function get_scoped_name(sym, sep, pfx){
	if(!pfx) pfx = "";
	sep = !sep ? "_" : sep;
	return pfx + sym.scope_names.join(sep) + sep + sym.name;
}

function get_var_id(ast_node){
	if(ast_node.id){
		return ast_node.id;
	}else{
		return ast_node.qid && ast_node.qid[0];
	}
}

function first_pipeline_entry(root_ast){
    if(root_ast.pipeline && root_ast.pipeline.block.length > 0){
    	var entry = root_ast.pipeline.block[0];
    	while(entry[0]){
    		entry = entry[0];//go through the nested blocks till first element is a non-block.
    	}
    	return entry;
    }
    vtbuild.error("astutil.first_pipeline_entry: Empty pipeline found");
    return null;
}

function lookup_effect(root_ast, uses, qid, kind){
	if(!uses || uses.length === 0) return null;

	var fname = Array.isArray(qid) ? ( qid.length == 1 ? qid[0] : qid[1] ) : qid;

	for(var i=0;i< uses.length;i++){
		var mod_ast = root_ast.modules[uses[i].name];
		if(mod_ast && mod_ast.effectsMap){
			var effects = mod_ast.effectsMap[fname];
			if(!effects) continue;
			for(var j=0;j<effects.length;j++){
				var effect = effects[j];
				if(effect.kind === kind){
					return effect.expr;
				}
			}
		}else{
			vtbuild.warning("Module definition not found/improper for the used module ", uses[i]);
		}
	}

}

var vector_ops = ['push'];

exports.find_default_flow = find_default_flow;
exports.find_fdef = find_fdef;
exports.find_flow = find_flow;
exports.vector_ops = vector_ops;
exports.resolve_matrix_expr = resolve_matrix_expr;
exports.deep_copy = deep_copy;
exports.get_scoped_name = get_scoped_name;
exports.get_var_id = get_var_id;
exports.first_pipeline_entry = first_pipeline_entry;
exports.lookup_effect = lookup_effect;
