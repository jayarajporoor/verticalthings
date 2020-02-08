const ast_util = require("./ast_util.js");

var symtbl;
var pipeline_next_state = {};
var pipeline_states = [];
var strglobals = [];
var type_ids = {};
var main_channels = [];

var curr = {
	is_async: false,
	arec_varnames : [],
	arec_decl : [],
	inner_arec_decl : [],
	label_num: 0,
	toplevel_ast : null,
	mod_ast : null,
	allocated_arec_names : [],
	ret_tuple_name : null,
	mod_async: null,
	hdrbuf : null,
	tuple_defs: {},
	tuple_locals: {}
};//current context - must be explicitly cleared appropriately.

const PFUNC = "_";
const PVAR = "";
const SPTR = "_p";


function array_method_call(ast){
	var id = ast.qid[0];
	var fn = ast.qid[1];

	var sym = symtbl.lookup(id);	

	if(!sym){
		return null;
	}
	if(!sym.info.type.dim){
		return null;
	}
	var sym_pos;
	if(sym.info.type.dim.is_ring){
		sym_pos = symtbl.lookup("__pos_" + id);
	}
	switch(fn){
		case 'push': 
			if(!sym_pos || ast.params.length === 0) return null;
			var size = sym.info.type.dim.dim[0].iconst;

			var id_str = ast_util.get_scoped_name(sym, "_", PVAR);
			var pos_str = ast_util.get_scoped_name(sym_pos, "_", PVAR);
			var idx_expr_str  = pos_str + " = (" + pos_str + " + 1 == " + size + " ? 0: " + pos_str + " + 1)";
			var expr_str = expr(ast.params[0].expr);
			return  "(" + id_str + "[" + idx_expr_str + "] = " +  expr_str + ")";
		break;
	}
	return null;
}


const func_info = {
	PTR_TYPE : 0,
	PTR_TYPE_NAME: 1,
	FUNC_NAME: 2,
	AREC_NAME: 3,
	PARAM_NAMES: 4,
	VARSCOPE_NAME: 5,
	RETS_NULL_ARRAY: 6,
	F_AST: 7
};


function has_fdef(mod_ast, fname){
	for(f_ast of mod_ast.fdefs)
	{
		if(f_ast.id === fname)
		{
			return true
		}
	}
	return false
}

function get_func_info(qid, info_req){
	var ast;
	var mod_ast;
	var scoped_fname;
	var var_scope_name = "";
	if(qid.length > 1){
		mod_ast = curr.toplevel_ast.modules[qid[0]];
		fname = qid[1];
		scoped_fname = PFUNC + qid[0] + "_" + qid[1];
		var_scope_name = PVAR + qid[0] + "_" + qid[1];
	}else{
		
		if (curr.mod_async){
			mod_ast = curr.mod_async;
		}else{
			mod_ast = curr.mod_ast;
		}

		if(!has_fdef(mod_ast, qid[0])){
			for(use of curr.mod_ast.uses){
				check_ast = curr.toplevel_ast.modules[use.name]
				if (has_fdef(check_ast, qid[0])){
					mod_ast = check_ast;
					break;
				}
			}
		}

		fname = qid[0];		
		if(fname === 'event'){
			scoped_fname =  fname;
			var_scope_name = fname;
		}else{
	    	scoped_fname = PFUNC + mod_ast.name + "_" + fname;
	    	var_scope_name = PVAR + mod_ast.name + "_" + fname;
	    }
	}

	if(info_req === func_info.FUNC_NAME){
		return scoped_fname;
	}

	if(info_req === func_info.VARSCOPE_NAME){
		return var_scope_name;
	}

	if(info_req === func_info.AREC_NAME){
		return "_arec_" + scoped_fname;
	}

	if(info_req === func_info.AREC_TYPE){
		return "struct _arec_" + scoped_fname;
	}

	var typedef_name =  "_t_" + scoped_fname ;

	if(info_req === func_info.PTR_TYPE_NAME){
		return typedef_name;
	}

	for(f_ast of mod_ast.fdefs)
	{
		if(f_ast.id === fname)
		{
			ast = f_ast;
		}
	}
	if(!ast){
		return null;
	}

	if(info_req == func_info.F_AST){
		return ast;
	}

	if(info_req == func_info.RETS_NULL_ARRAY){
		var rets = [];

		var is_void = ast.type.primitive && ast.type.primitive === 'void';

   	    if(typeof ast.type != 'undefined' && !is_void){
			//TODO process tuple types.
			retType = stringify_type(ast.type);
			//ignore the type and just put a NULL as the argument
			rets.push("((" + retType.base + retType.dim + "*) 0UL)");
		}
		return rets;
	}

	if(info_req === func_info.PARAM_NAMES){
		var param_names = [];
		for(var param_ast of ast.params)
		{
			var scoped_param_name = var_scope_name + "_" + param_ast.id;
			param_names.push(scoped_param_name);
		}	
		return param_names;
	}

	var is_async = ast.is_async;

	var hdr="";
	var returnParamTypes = [];
	if(typeof ast.type != 'undefined'){
		//TODO process tuple types.
		retType = stringify_type(ast.type);
		if(is_async){
			returnParamTypes.push(retType);
			hdr= hdr+"void ";
		}else{
			var strRetType = retType.base + retType.dim;
			hdr = hdr + strRetType + " ";//CHG: replaced ast.type.primitive with ReturnType
		}
	}else{
		hdr= hdr+"void ";
	}
	var arec_name = "_arec_" + scoped_fname;

	hdr = hdr + "(*" + typedef_name + ")" + " (";
	var params=[];

	if(is_async){
		curr.is_async = true;
	}

	//NOTE: If can pass the scoped_fname as second param to fparam and then it will use
	//that to generate fully scoped param name instead of using current scope (as of now)
	//when using current scope, this will work only when invoked within fdef.

	for(var i in ast.params){
		params.push(fparam(ast.params[i]));
	}

	if(is_async){	
		params = ["struct " + arec_name + "* _this"];
	}

	for(var i=0;i<returnParamTypes.length;i++){
		var retType = returnParamTypes[i];
		var base = retType.base;
		if(retType.dim === ""){
			base += "* ";//pointer
		}
		params.push(base + " _ret" + i + retType.dim);
	}

	hdr = hdr+ params.join(", ");	
	hdr = hdr + ")";

	return ["struct " + arec_name, hdr];

}


function mod_async_fn(qid, info){
	if(!qid)
		return null;
	var mod_ast = null;
	var fname = "";

	if(qid.length > 1){
		mod_ast = curr.toplevel_ast.modules[qid[0]];
		fname = qid[1];
	}else{
		mod_ast = curr.mod_ast;
		fname = qid[0];						
	}
	mod_async = null;	
	if(fname === 'event'){
		info.is_event = true;
		mod_async = mod_ast;
	}
	
	is_async = (mod_ast && (mod_ast.asyncs.indexOf(fname) >= 0));
	if(is_async)
	{
		mod_async = mod_ast;
	}
	
	if(!is_async && qid.length == 1){
		for (use of mod_ast.uses){
			mod_ast = curr.toplevel_ast.modules[use.name];
			is_async = (mod_ast && (mod_ast.asyncs.indexOf(fname) >= 0));
			if (is_async){
				mod_async = mod_ast;
				break;
			}
		}
	}
	return mod_async;	
}

var builtin_functions = [];

function fcall(ast, retParams, is_async, info, name_only=false){
	var strs=[];
	var strFcall = "";
	var qid = ast.qid || ast.qidCpp;

	var sep = ast.qidCpp ? "::" : ".";

	var name;
	if(qid.length > 1){
		var str_amethod = (sep === ".") ? array_method_call(ast) : null;
		if(str_amethod){
			return str_amethod;
		}else{
			var sym = symtbl.lookup(qid[0], null, false, curr.mod_ast.uses);
			if(sym){
				name = ast_util.get_scoped_name(sym, "_", PVAR);
				for(var j=1;j<qid.length;j++){
					name += sep + qid[j];
				}
			}else{
				name = qid.join(sep);
			}
		}
	}else{
		if(builtin_functions.indexOf(qid[0]) >= 0){
			name = PFUNC + qid[0];
		}else{
			var sym = symtbl.lookup(qid[0], null, false, curr.mod_ast.uses);
			if(sym){
				name =  ast_util.get_scoped_name(sym, "_", PFUNC);
			}else{
				name = qid[0];
			}
		}
	}

	if (info){
		info.name = name
	}

	if(name_only){
		return null;
	}

	if(is_async){
		var arec_name = "_arec_" + name;

		var scoped_param_names = get_func_info(qid, func_info.PARAM_NAMES);

		if(info){
			info.arec_name = arec_name;
		}

		strs.push("_this->_arecs." + arec_name + "._state = 0");
		for(var i=0;i<ast.params.length;i++){
			var param = ast.params[i];
			var param_name  = scoped_param_names[i];
			var param_str = "_this->_arecs." + arec_name + "." + param_name + " = " + expr(param);
			strs.push(param_str);
			var paramid = param.expr.id || (param.expr.qid && param.expr.qid[0]);
			var param_sym = paramid && symtbl.lookup(paramid);
			if(param_sym && param_sym.info.type.dim && param_sym.info.type.dim.is_ring){
				var sym = symtbl.lookup("__pos_" + paramid);
				if(sym){
					var resolv = ast_util.resolve_matrix_expr(param.expr, symtbl);
					if(resolv.dim.length > 0){	
						var scoped_name = ast_util.get_scoped_name(sym, "_", PVAR);				
						strs.push("_this->_arecs." + arec_name + "." + scoped_name + " = " + 	get_arec_qualified_name(sym, "_", PVAR) );
					}
				}
			}
		}

		strFcall = name + "( &(_this->_arecs." + arec_name + ")";
		if(curr.allocated_arec_names.indexOf(arec_name) < 0){
			curr.inner_arec_decl.push("struct " + arec_name + " " + arec_name + ";")
			curr.allocated_arec_names.push(arec_name);
		}
	}else{
		strFcall = strFcall + name +"(";		
		for(var i=0;i<ast.params.length;i++){
			var param = ast.params[i];
			if(i > 0) strFcall += ", ";
			var param_str = expr(param);
			strFcall = strFcall + param_str;
			var paramid = param.expr.id || (param.expr.qid && param.expr.qid[0]);
			var param_sym = paramid && symtbl.lookup(paramid);
			if(param_sym && param_sym.info.type.dim && param_sym.info.type.dim.is_ring){
				var sym = symtbl.lookup("__pos_" + paramid);
				if(sym){
					var resolv = ast_util.resolve_matrix_expr(param.expr, symtbl);
					if(resolv.dim.length > 0){					
						strFcall = strFcall + ", " + ast_util.get_scoped_name(sym, "_", PVAR);
					}
				}
			}
		}
	}

	if(retParams){
		for(retParam of retParams){
			strFcall = strFcall + ", " + retParam;
		}
	}
	strFcall += ") ";
	strs.push(strFcall);
	return strs;
}


function get_arec_qualified_name(sym){
	var scoped_name = ast_util.get_scoped_name(sym, "_", PVAR);
	if(curr.is_async){
		if(curr.arec_varnames.indexOf(scoped_name) >= 0){
			return "_this->" + scoped_name;
		}
	}	
	return scoped_name;
}

function expr(ast){
	// console.log(ast);
	var str="";
	var id = ast.id || (ast.qid && ast.qid[0]);	
	
	if(ast.tid){
		str = ast.tid;
	}else	
	if(typeof ast.op != 'undefined'){
		// console.log(ast);
		str = "("+expr(ast.lexpr) + ast.op + expr(ast.rexpr)+")";
	}else
	if(typeof ast.up !== 'undefined'){
		var exprstr = expr(ast.expr);
		switch(ast.up){
			case 'cast':
				str = "( (" + ast.type.primitive + ") (" + exprstr + ")" + ")";			
			break;
			default:
				str = "(" + ast.up + exprstr + ")" ;
			break;
		}
	}
	else if(id){
		var sym = null;
		if(ast.qid && ast.qid.length > 1){
			sym = symtbl.lookup(ast.qid[0]);
			if(sym){
				str = str + get_arec_qualified_name(sym, "_", PVAR);
				for(var j=1;j<ast.qid.length;j++){
					str += "." + ast.qid[j];
				}
			}else{
				str = str + ast.qid.join(".");
			}
		}else{
			sym = symtbl.lookup(id);
			if(sym && !sym.info.is_temp){
				str = str + get_arec_qualified_name(sym, "_", PVAR);			
			}else{
				str = str + id;//loop variables are not in symbol table now.
				if(!sym){
					vtbuild.warning("Symbol ", id , " not found");
				}
			}
		}
        if(typeof ast.dim != 'undefined'){
        	if(!sym){
        		vtbuild.error("The array symbol ", id, " not found in symbol table.");
        	}else{
				if(sym.info.type.dim.is_ring){//we only support 1D ring buffer for now.
					var sym_pos = symtbl.lookup("__pos_" + id);
					var size = sym.info.type.dim.dim[0].iconst;	
					var pos_str = ast_util.get_scoped_name(sym_pos, "_", PVAR);
					str=str + "[ ( (" + expr(ast.dim.dim[0]) + ") + " + pos_str + ") % " + size + "]";
				}else{
		            for(var i in ast.dim.dim){
		                str=str + "[" + expr(ast.dim.dim[i]) + "]";
		            }
	        	}
        	}	
        }
	}
	else if(ast.expr){
		str = expr(ast.expr);
	}	
	else if(typeof ast.iconst != 'undefined'){
		str = ast.iconst;
	}
	else if(typeof ast.bconst != 'undefined'){
		str = ast.bconst;
	}	
	else if(typeof ast.fconst != 'undefined'){
		str = ast.fconst;
	}else if(typeof ast.aconst !== 'undefined'){		
		str = "{ ";
		for(var i=0;i<ast.aconst.length;i++){
			if(i > 0) str += ", ";
			str += expr(ast.aconst[i]);
		}
		str += "} ";
	}
	else if(typeof ast.fcall != 'undefined'){
		strs = fcall(ast.fcall);
		//TODO: strs.length must always be 1 here, since async case is handled in assign stmt.
		str = strs[0];
	}else if(typeof ast.sconst !== 'undefined'){
		str = ast.sconst ;
	}else if (ast.texpr){
		var first = true;
		str = curr.ret_tuple_name + "(";
		var i = 0;
		for (tentry of ast.texpr) {
			estr = expr(tentry);
			etype = curr.ret_tuple_types[i];
			if (etype.indexOf("*") >= 0){
				estr = "&(" + estr + ")";
			}
			if (!first) {
				str = str + ", ";
			}
			first = false;
			str = str + estr;
			i++;
		}
		str = str + ") ";
	}

	if(ast.address_of){
		str = "&(" + str + ")";
	}

	return str;
}

function block(ast,str){
	str.push("{");
	if(typeof ast.stmts != 'undefined'){
		for(var i in ast.stmts){
			stmt(ast.stmts[i],str);
		}
	}
	str.push("}");
}

function stmt_fcall(ast_fcall, strbuf, lvalue){
	var label = "";
	var strs = [];
	var info = {};

	var mod_async = mod_async_fn(ast_fcall.qid, info);
	curr.mod_async = mod_async;

	if(mod_async){
		var fcall_params = [];
		if(ast_fcall.sync === 'await'){
			if(info.is_event){
				console.log("ERROR: Cannot await on event() call");
				return;
			}

			tuple_tmp_var = null;			
			lvalue_tuple = null;
			if (lvalue){
				if (Array.isArray(lvalue) ) {
					f_ast = get_func_info(ast_fcall.qid, func_info.F_AST);
					tuple_name = get_tuple_name(f_ast.type.ttype);
					tuple_types = get_tuple_ref_types(f_ast.type.ttype);
					tuple_tmp_var = tuple_name + "_ret";
					if (!curr.tuple_locals[tuple_name]){
						curr.tuple_locals[tuple_name] = true
						curr.hdrbuf.push("struct " + tuple_name + " " + tuple_tmp_var + ";");						
					}
					lvalue_tuple = lvalue;
					lvalue = tuple_tmp_var;
				}

				fcall_params = [ "&(" + lvalue + ")"];
			}
			info = {};			
			strs = fcall(ast_fcall, fcall_params, true, info, false);
			for(i = 0; i< strs.length - 1;i++){
				strbuf.push(strs[i] + ";");
			}
			strExpr = strs[strs.length - 1];//last element is the actual function call.				
			label = get_next_label() + ":";
			strbuf.push(label);
			strbuf.push("_state = " + strExpr + ";");
			if (tuple_tmp_var) {
				var i = 0;
				for (e_lvalue of lvalue_tuple) {
					elem_ref_type = tuple_types[i];
					var_name = tuple_tmp_var + ".r" + i;
					if(elem_ref_type.indexOf("*") >= 0){
						elem_ref_type = elem_ref_type.replace("*", "&");
						var_name = "(*" + var_name + ")";
					}
					elem_type = elem_ref_type.replace("&", "");
			  		var sym = symtbl.addSymbolToCurrentScope(e_lvalue, { type: {primitive: elem_type, is_const: false}
			  			                 , src: {note: "Generated"}
			  			                 , value: null
			  			                 , is_dim: false
			  			                 } );
					var scoped_name = ast_util.get_scoped_name(sym, "_", PVAR);

					strbuf.push(elem_ref_type + " " + scoped_name + " = " + var_name + ";");
					i += 1;
				}
			}
			var stateCtrl = "if (_state > 0) {_this->_state = " + curr.label_num + "; return _this->_state;} ";
			strbuf.push(stateCtrl);
		}else{
			if(info.is_event && lvalue){
				strbuf.push(lvalue + "._parec = (void*)1;");
			}else{
				fcall_params = get_func_info(ast_fcall.qid, func_info.RETS_NULL_ARRAY);

				info = {};
				strs = fcall(ast_fcall, fcall_params, true, info);
				for(i = 0; i< strs.length;i++){
					strbuf.push(strs[i] + ";");
				}
				if(lvalue){
					//var assignFuture = lvalue + "= &(_this->" + info.arec_name + ");";
					var assignArecPtr = lvalue + "._parec = &(_this->_arecs." + info.arec_name + ");";
					var assignFnPtr = lvalue + "._pfn = (int (*)(void *, void *) )&" + info.name + ";"
					strbuf.push(assignArecPtr);
					strbuf.push(assignFnPtr);
				}
			}
		}
	}else{
		var tuple_tmp_var = null;
		var strs = fcall(ast_fcall);
		if (lvalue){
			if (Array.isArray(lvalue) ) {
				f_ast = get_func_info(ast_fcall.qid, func_info.F_AST);
				tuple_name = get_tuple_name(f_ast.type.ttype);
				tuple_types = get_tuple_ref_types(f_ast.type.ttype);
				tuple_tmp_var = tuple_name + "_ret";
				if (!curr.tuple_locals[tuple_name]){
					curr.tuple_locals[tuple_name] = true
					curr.hdrbuf.push("struct " + tuple_name + " " + tuple_tmp_var + ";");						
				}
				lvalue_tuple = lvalue;
				lvalue = tuple_tmp_var;
			}
		}

		if (strs.length > 0 && lvalue){
			strs[strs.length-1] = lvalue + " = " + strs[strs.length-1]
		}
		for(str of strs){
			strbuf.push(str + ";");
		}
		if (tuple_tmp_var) {
			var i = 0;
			for (e_lvalue of lvalue_tuple) {
				elem_ref_type = tuple_types[i];
				var_name = tuple_tmp_var + ".r" + i;
				if(elem_ref_type.indexOf("*") >= 0){
					elem_ref_type = elem_ref_type.replace("*", "&");
					var_name = "(*" + var_name + ")";
				}
				elem_type = elem_ref_type.replace("&", "");
		  		var sym = symtbl.addSymbolToCurrentScope(e_lvalue, { type: {primitive: elem_type, is_const: false}
		  			                 , src: {note: "Generated"}
		  			                 , value: null
		  			                 , is_dim: false
		  			                 } );
				var scoped_name = ast_util.get_scoped_name(sym, "_", PVAR);

				strbuf.push(elem_ref_type + " " + scoped_name + " = " + var_name + ";");
				i += 1;
			}
		}

	}	
	curr.mod_async = null;
}

function stmt_await_on_id(id_expr, lvalue, strbuf){
	var sym = symtbl.lookup(id_expr.id);
	var strExpr = expr(id_expr);
	//var scoped_name = ast_util.get_scoped_name(sym, "_", PVAR);
	//var fqid = sym.info.type.future_qid;
	if(strExpr)
	{
		var fcall = "";

		var tuple_name = null;
		var tuple_types = null;
		var tuple_tmp_var = null;
		if (lvalue && Array.isArray(lvalue) ) {
			tuple_name = get_tuple_name(sym.info.type.future_type.ttype);
			tuple_types = get_tuple_ref_types(sym.info.type.future_type.ttype);
			tuple_tmp_var = tuple_name + "_ret";
			if (!curr.tuple_locals[tuple_name]){
				curr.tuple_locals[tuple_name] = true
				curr.hdrbuf.push("struct " + tuple_name + " " + tuple_tmp_var + ";");						
			}
			lvalue_tuple = lvalue;
			lvalue = tuple_tmp_var;
		}

		if(sym.info.type.future_type === 'event')
		{
			fcall = "(int) " + strExpr + "._parec";
		}else
		{
			fcall = strExpr + "._pfn(" + strExpr + "._parec" 
			if (lvalue){
				fcall += ", (&" + lvalue + ") ";
			}

			fcall += ")";
		}

		label = get_next_label() + ":";		
		strbuf.push(label);
		strbuf.push("_state = " + fcall + ";");
		if (tuple_tmp_var) {
			var i = 0;
			for (e_lvalue of lvalue_tuple) {
				elem_ref_type = tuple_types[i];
				e_line = "";
				if (elem_ref_type.indexOf("*") >= 0){
					elem_ref_type = elem_ref_type.replace("*", "&");
					e_line =  "*(" + tuple_tmp_var + ".r" + i + ");";
				}
				else
					e_line = tuple_tmp_var + ".r" + i + ";";
				elem_type = elem_ref_type.replace("&", "");
		  		var sym = symtbl.addSymbolToCurrentScope(e_lvalue, { type: {primitive: elem_type, is_const: false}
		  			                 , src: {note: "Generated"}
		  			                 , value: null
		  			                 , is_dim: false
		  			                 } );
				var scoped_name = ast_util.get_scoped_name(sym, "_", PVAR);				
				e_line = elem_ref_type + " " + scoped_name + " = " + e_line;
				strbuf.push(e_line);
				i += 1;

			}
		}		
		var stateCtrl = "if (_state > 0) {_this->_state = " + curr.label_num + "; return _this->_state;} ";
		strbuf.push(stateCtrl);

	}else
	{
		console.log("ERROR: Couldn't find the future variable " + id_expr.id);
	}	
}

function stmt_signal(id_expr, strbuf){
	var sym = symtbl.lookup(id_expr.id);
	var strExpr = expr(id_expr);
	strbuf.push(strExpr + "._parec = (void *) 0;");
}

function stmt(ast,strbuf){
	switch(ast.kind){
		case "assign":
			var ast_fcall = ast.expr.fcall;
			var strExpr = "";
			var lvalue = expr(ast);
			if(ast_fcall){
				stmt_fcall(ast_fcall, strbuf, lvalue);
			}else
			if(ast.expr.sync === 'await' && ast.expr.id){
				stmt_await_on_id(ast.expr, lvalue, strbuf);
			}else
			{
				strExpr = expr(ast.expr);
				strbuf.push(lvalue + "=" + strExpr + ";");				
			}
			break;
		case "if":
			// console.log(ast);
			strbuf.push("if(" + expr(ast.expr) + ")");
			stmt(ast.if_body,strbuf);
			if(typeof ast.else_body !='undefined'){
				strbuf.push("else");
				stmt(ast.else_body, strbuf);
			}
			break;
		case "for":
			var idxstr = ast.ids[0];
			strbuf.push("for(int " + idxstr + "=" + expr(ast.range.from) + "; " + idxstr + "<" + expr(ast.range.to) + "; " + idxstr + "++)");
			stmt(ast.body,strbuf);
			break;
		case "while":
			strbuf.push("while(" + expr(ast.expr) + ")");
			stmt(ast.body,strbuf);
			break;
		case "return":
			var strRetExpr = expr(ast.expr);
			
			if(curr.is_async){
				if(strRetExpr !== ""){
					var label = get_next_label() + ":";
					strbuf.push(label);
					strbuf.push("if (_ret0 == NULL){");
					strbuf.push("_this->_state = "  + curr.label_num  + ";");
					strbuf.push("}");
					strbuf.push("else{")
					strbuf.push("*(_ret0) = " + strRetExpr  + ";");
					strbuf.push("}");
				}
				strbuf.push("return _this->_state; ");
			}else{
				strbuf.push("return " + strRetExpr + ";");
			}
			break;
		case "block":
			block(ast,strbuf);
			break;
		case "fcall":
			stmt_fcall(ast.fcall, strbuf, null);
		break;
		case 'await':
			stmt_await_on_id(ast.expr, null, strbuf);
		break;
		case 'signal':
			stmt_signal(ast.expr, strbuf);
		break;
	}

}

function get_tuple_name(ttype){
	var tuple_name = "_t_";
	var info = {tuple: true}
	for (tentry of ttype) {
		var s_tentry = stringify_type(tentry, info);
		if (tuple_name != ""){
			tuple_name += "_";
		}
		tuple_name += s_tentry.base.replace("*","");//remove the reference symbol.
		if (s_tentry.dim != ""){
			tuple_name += "_" + s_tentry.dim.replace("[", "_").replace("]", "");
		}
	}
	return tuple_name;
}

function get_tuple_ref_types(ttype){
	var tuple_types = [];
	var info = {tuple: true}
	for (tentry of ttype) {		
		var s_tentry = stringify_type(tentry, info);
		var type_name = s_tentry.base;
		if (type_name.indexOf("*") < 0){
			type_name += "& ";
		}
		tuple_types.push(type_name);
	}

	return tuple_types;
}

function stringify_type(ast, info=null){
	// console.log(ast);
	var base=ast.primitive;

	if(!base && ast.id){
		base = ast.id;
	}
	if(!base && ast.qid){
		base = ast.qid.join(".");
	}
	if(!base && ast.qidCpp){
		base = ast.qidCpp.join("::");
	}

	if(!base && ast.future_type){
		//OLD: var base = get_func_info(ast.future_qid, func_info.AREC_TYPE) + "* ";
		var base = "struct _future ";
	}

	var tuple_name, name, constr, constr_params, tuple_struct;
	if (ast.ttype){
		var i =0;
		tuple_name = get_tuple_name(ast.ttype);		
		name = tuple_name;
		constr =  tuple_name + "(";
		var d_constr = tuple_name + "() : ";
		var assign_op = "void operator = (const " + tuple_name + "& _obj) {";
		constr_params = "";
		tuple_struct = "";

		tuple_types = [];
		var tinfo = {tuple:true};
		for (tentry of ast.ttype) {
			s_tentry = stringify_type(tentry, tinfo);
			tuple_types.push(s_tentry.base);
			tstr = s_tentry.base + " r" + i + " " + s_tentry.dim ;
			pstr = s_tentry.base + " p" + i + " " + s_tentry.dim ;
			tuple_struct += ( tstr + "; ") ;
			if (i > 0) {
				constr += ", ";
				constr_params += ", ";
				d_constr += ", ";
			}
			constr += pstr;
			constr_params += " r" + i + "(p" + i + ")";
			d_constr += " r" + i + "( ("  + s_tentry.base + ") 0 )";
			//d_constr += " r" + i + "( *( ("  + s_tentry.base.replace("*","") + "*) 0UL ) )";
			assign_op += "r" + i + "= _obj.r" + i + "; ";
			i += 1;
		}
		if(info){
			info.tuple_types = tuple_types;
		}
		constr += ")";
		assign_op += "}; ";
		d_constr += "{};"
		tuple_struct = "struct " + tuple_name + "{" + tuple_struct + d_constr + " " + assign_op + " " + constr + ":" + constr_params + "{}; };";
		if (!curr.tuple_defs[tuple_name]){
			strglobals.push(tuple_struct);		
			curr.tuple_defs[tuple_name] = true;
		}
		base  = "struct " + tuple_name;
		dim = "";
	}

	var dim="";
	if(typeof ast.dim != 'undefined'){
		for(var i in ast.dim.dim){
			dim=dim+"["+expr(ast.dim.dim[i])+"]";
		}
	}
	if (ast.is_ref) {
		if (dim != ""){
			type_id = "_" + base + "_" + dim.replace("[", "_").replace("]", "")
			if (!(type_ids[type_id]) ) {
				type_ids[type_id] = true;
				if (dim != ""){
					strglobals.push("typedef " + base + " " + type_id + dim + ";");
				}else{
					strglobals.push("typedef " + base + " " + type_id + ";");
				}
			}
			if(info && info.tuple){
				base = type_id + "*" ;
			}else{
				base = type_id + "&";
			}
			dim = "";
		}else{
			base = base + "&";
		}
	}

	var chan = null;
	if (ast.chan_type) {
		chan = ast.id;
	}
	var astr = {base: base, dim: dim, is_ring: ast.dim && ast.dim.is_ring, is_ref: ast.is_ref, chan: chan, name: name};	

	return astr;
}

function vardef(ast)
{	
	var defs = [];
	var s="";

	if(typeof ast.type.is_static != 'undefined'){
		if(ast.type.is_static === true)
			s=s+"static ";
	}

	if(ast.type.dim && !ast.type.is_const){
		//for RAM arrays we do our own memory allocation. However, for ring bufs we need to add a vardef for
		//ring pos.
		if(ast.type.dim.is_ring){
			for(var i in ast.defs){
				var def = ast.defs[i];
				var sym = symtbl.lookup("__pos_" + def.id);
				var scoped_name = ast_util.get_scoped_name(sym, "_", PVAR);
				var str_ringpos = "int " + scoped_name + " = 0;";
				if(curr.is_async){
					curr.arec_varnames.push(scoped_name);
				}
				//strglobals.push(str_ringpos);
				defs.push(str_ringpos);
			}			
		}
		//return null;
	}
	// console.log(ast.type.is_const);
	if(typeof ast.type.is_const != 'undefined'){
		if(ast.type.is_const === true)
			s=s+"const ";
	}
	var type = stringify_type(ast.type);	

	s=s+type.base+" ";

	// console.log(s);
	var temp=[];
	for(var i=0;i<ast.defs.length;i++){
		var def = ast.defs[i];
		var sym = symtbl.lookup(def.id);
		var name = (!sym || sym.info.is_temp) ? def.id : get_current_scoped_name(def.id, PVAR);
		if(typeof def.init != 'undefined'){
			temp.push(name+type.dim+"="+expr(def.init));
		}
		else{
			temp.push(name+type.dim);
		}
		if(curr.is_async){
			curr.arec_varnames.push(name);
		}
	}
	s=s+temp.join(", ");
	defs.push(s);
	return defs;
}

function fparam(ast, scoped_fname, is_main=false){
	var s="";
	if(typeof ast.type.is_const != 'undefined')
	{
		if(ast.type.is_const === true)
			s=s+"const ";
	}
	var type=stringify_type(ast.type);
	var name = scoped_fname ? scoped_fname + "_" + ast.id : get_current_scoped_name(ast.id, PVAR);

	s = s + type.base + " " + name + type.dim;	

	if(typeof ast.init != 'undefined')
	{
		s = s + "=" + expr(ast.init);	
	}

	if(type.is_ring)
	{
		var ring_index = scoped_fname ? scoped_fname + "_" + ast.id : get_current_scoped_name("__pos_" + ast.id, PVAR);
		var str_ringpos = "int " + ring_index;		
		s = s + ", " + str_ringpos;		
	}

	if (is_main && type.chan) {
		main_channels.push( {chan: type.chan, param: ast.id})
	}

	return s;
}

function get_label(num){
	return "lstate_" + num;
}

function get_next_label(){
	curr.label_num++;	
	var str = get_label(curr.label_num);
	return str;
}

function fdef(ast,strbuf){

    symtbl.enterNestedScope(ast.id);  

	var fptr = get_func_info([ast.id], func_info.PTR_TYPE);
	if(fptr){		
		for(var i=0;i< fptr.length - 1;i++){
			strglobals.push(fptr[i] + ";");//forward struct declarations.
		}
		strglobals.push("typedef " + fptr[fptr.length - 1] + ";");
	}

	var scoped_fname = get_current_scoped_name("", PFUNC);
	
	curr.ret_tuple_name = null;

	var is_async = ast.is_async;

	var hdr="";
	var returnParamTypes = [];
	if(typeof ast.type != 'undefined'){
		//TODO process tuple types.
		tuple_info = {};
		retType = stringify_type(ast.type, tuple_info);
		if (ast.type.ttype){
			curr.ret_tuple_name = retType.name;
			curr.ret_tuple_types = tuple_info.tuple_types;
		}else{
			curr.ret_tuple_name = null;
			curr.ret_tuple_types = null;
		}
		if(is_async){
			if(retType.base !== 'void'){
				returnParamTypes.push(retType);
			}
			hdr= hdr+"int ";
		}else{
			var strRetType = retType.base + retType.dim;
			hdr = hdr + strRetType + " ";//CHG: replaced ast.type.primitive with ReturnType
		}
	}else{
		hdr= hdr+"void ";
	}
	var arec_name = "_arec_" + scoped_fname;

	hdr = hdr + scoped_fname + "(";//Note:we're already in function scope - so no need to add fname
	var params=[];

	if(is_async){
		curr.is_async = true;
	}

	is_main = false;
	if (ast.id == "main"){
		is_main = true;
	}
	for(var i in ast.params){
		params.push(fparam(ast.params[i], null, is_main));
	}

	if(is_async){	
		curr.arec_decl.push("struct " + arec_name + "{");
		curr.arec_decl.push("int _state = 0;");
		for(var i in ast.params){
			curr.arec_decl.push(params[i] + ";");
			var param_components = params[i].split(" ");		
			var param_name = param_components[param_components.length-1].trim();
			curr.arec_varnames.push(param_name);			
		}
		params = ["struct " + arec_name + "* _this"];
	}

	for(var i=0;i<returnParamTypes.length;i++){
		var retType = returnParamTypes[i];
		var base = retType.base;
		var paramStr = "";
		var retVarName = "_ret" + i;
		if(retType.dim === ""){
			paramStr = base + "* " + retVarName;
		}else{
			paramStr = base + "(*" + retVarName + ")" + retType.dim;
		}
		params.push(paramStr);
	}

	hdr = hdr+ params.join(", ");	
	hdr = hdr + ")";

	strbuf.push(hdr);

	strbuf.push("{");
	// str.push("__state = __" + states[0] + ";");
	// cur_ind=0;

	for(var i =0;i<ast.vars.length;i++){
		var strdefs = vardef(ast.vars[i]);
		for(strdef of strdefs){
			if(is_async){
				curr.arec_decl.push(strdef + ";");
			}else{
				strbuf.push(strdef + ";");
			}
		}
	}

	curr.hdrbuf = strbuf;
	curr.tuple_locals = {};

	var body_strbuf = [];

	stmt(ast.body,body_strbuf);

	curr.hdrbuf = null;

	if(is_async){
		var activation_tbl = "static const void * _atbl[] = { "
		for(var i=0;i<= curr.label_num;i++){
			if(i > 0)
				activation_tbl += ", ";
			activation_tbl += "&&" + get_label(i);
		}
		activation_tbl += " }";
		strbuf.push(activation_tbl + ";");

		//save and reset the state.
		strbuf.push("int _state = _this->_state;");
		strbuf.push("_this->_state = 0;");

		var jmp_cmd = "if (_state > 0 && _state <= " + curr.label_num + ") goto *(_atbl[_state]);";
		
		strbuf.push(jmp_cmd);
		strbuf.push(get_label(0) + ":");
	}

	for(str of body_strbuf){
		strbuf.push(str);
	}

	if(is_async){
		strbuf.push("return _this->_state;");
	}

    strbuf.push("}");
    symtbl.exitNestedScope();

	if(is_async){
		//curr.arec_decl.push("};");
		for(var arec_decl_line of curr.arec_decl){
			strglobals.push(arec_decl_line);			
		}
		if (curr.inner_arec_decl.length > 0){
			strglobals.push("union _inner_arecs {");
			for (var inner_arec_line of curr.inner_arec_decl){
				strglobals.push(inner_arec_line);
			}
			strglobals.push("_inner_arecs(){};");
			strglobals.push("}");
			strglobals.push("_arecs;");			
		}
		strglobals.push("};");
	}

    curr.is_async = false;
    curr.arec_varnames = [];
    curr.arec_decl = [];
    curr.inner_arec_decl = [];
    curr.label_num = 0;
    curr.allocated_arec_names = [];
    curr.ret_tuple_name = null;
}

function str_parray(elemtype, name, dimstr){
	return elemtype + " (*" + name + ")" + dimstr;
}

function memdefs(mem){
	strglobals.push("/*Managed memory variables*/");
	var dword_size = mem.total_alloc_size;
	strglobals.push("uint32_t __vtmem[" +  dword_size + "];");
	for(var i=0;i<mem.alloc.length;i++){
		var alloc = mem.alloc[i];
		var scoped_name = ast_util.get_scoped_name(alloc.sym, "_", PVAR);
		var scoped_name_p =  scoped_name + SPTR;
		var stype = stringify_type(alloc.sym.info.type);
		var def = 	  str_parray(stype.base, scoped_name_p, stype.dim) 
					+ "= (" 
					+ str_parray(stype.base, "", stype.dim) 
					+ ") "
					+ "&__vtmem[" + alloc.loc + "];"
					;
		strglobals.push(def);
		def = "#define " + scoped_name + " (*" + scoped_name_p +")";
		strglobals.push(def);
	}
	strglobals.push("/*End of managed memory variables*/");
}

function get_current_scoped_name(n, pfx){
	if(Array.isArray(n)){
		if(n.length > 1){//this is already a scoped name. so don't add our scopes to it.
			return n.join(".");
		}else{
			n = n[0];
		}
	}
	if(!pfx){
		pfx = "";
	}
	var scope_names = symtbl.getScopeNames();
	if(!n || n === ""){//just return scoped name of the current scope stack.
		return pfx + scope_names.join("_");
	}else{
		return pfx + scope_names.join("_") + "_" + n;
	}
}


function boiler_plate(){
	strglobals.push("/********************************************************************************");
	strglobals.push("This code is automatically generated by the VerticalThings compiler. DO NOT EDIT!");
	strglobals.push("********************************************************************************/");
	strglobals.push("");
	strglobals.push("struct _arec_event {volatile int _state;};")
	strglobals.push("#define NULL ((void *)0UL)")
	strglobals.push("struct _future {void *_parec; int (*_pfn)(void *, void *);}; ")
}

function includes(cfg){
	if(cfg.stdincludes){
		for(var i=0;i<cfg.stdincludes.length;i++){
			strglobals.push("#include <" + cfg.stdincludes[i] + ">");
		}
	}
	if(cfg.pathincludes){
		for(var i=0;i<cfg.pathincludes.length;i++){
			strglobals.push("#include \"" + cfg.pathincludes[i] + "\"");
		}
	}
}

function code_gen(ast,ctx){
	// console.log("asdasd");

	boiler_plate();
	if(ctx.config && ctx.config.codegen){
		includes(ctx.config.codegen);
	}

	if(!ctx.code){
		ctx.code = [];
	}	
	var code = ctx.code;
	
	symtbl = ctx.symtbl;

	if(ctx.mem){
		memdefs(ctx.mem);
	}

	curr.toplevel_ast = ast;
   

    for(var mod_name in ast.modules){
        symtbl.enterNestedScope(mod_name);    	
        var mod_ast = ast.modules[mod_name];
        curr.mod_ast = mod_ast;
		
		if (mod_name != "sys"){
	        for(var i=0;i<mod_ast.fdefs.length;i++){
	            fdef(mod_ast.fdefs[i], code);
	        }
    	}

		strglobals.push("/*Module vars for " + mod_name + "*/");
		for(var i =0;i<mod_ast.vars.length;i++){
			var strdefs = vardef(mod_ast.vars[i]);
			for(strdef of strdefs){
				strglobals.push(strdef + ";");
			}
		}
		strglobals.push("/*End of module vars for " + mod_name + "*/");


        curr.mod_ast = null;
        symtbl.exitNestedScope();
    }


    if(strglobals.length > 0){
    	//add defines to the beginning of code.
		var splice_args = [0, 0].concat(strglobals);
		Array.prototype.splice.apply(code, splice_args);    
	}

	if (ctx.config && ctx.config.entry){
		if (!ctx.config.channels) {
			console.log("ERROR: Channel definitions not found in the config file.")
		}
		module_main = ctx.config.entry + "_main";
		code.push("/*Entry point - the 'C' main function*/");
		code.push("struct _arec__" + module_main + " _arec_main;")
		code.push("int main(){");
		code.push("int status = -1;");
		for (chan_info of main_channels) {
			if (ctx.config.channels && typeof(ctx.config.channels[chan_info.chan]) != 'undefined') {
				chan_num = ctx.config.channels[chan_info.chan];
				code.push("_arec_main." + module_main + "_" + chan_info.param + "=" + chan_num + ";");
			}else{
				console.log("ERROR: Undefined channel used as parameter to main function " + chan_info.chan)
			}
		}

		code.push("while (status != 0){")
		code.push("status = " + "_" + module_main + "(&_arec_main);");
		code.push("}")
		code.push("while (true);")
		code.push("return 0;");
		code.push("}");
	}

	curr.toplevel_ast = null;
    // console.log("CODE :");
    // console.log(code);
    // return code;
};

function set_symtbl(symtbl){
	symtbl = symtbl;
}

var cur_mod="";
var states=[];
// codeGen(ast,code);
exports.transform=code_gen;
exports.stmt=stmt;
exports.fdef=fdef;
exports.fparam=fparam;
exports.vardef=vardef;
exports.set_symtbl = set_symtbl;
exports.strglobals = strglobals;
exports.boiler_plate = boiler_plate;
exports.includes = includes;
exports.memdefs = memdefs;



