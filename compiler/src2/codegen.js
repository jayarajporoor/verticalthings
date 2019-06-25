const ast_util = require("./ast_util.js");

var symtbl;
var pipeline_next_state = {};
var pipeline_states = [];
var strglobals = [];

var curr = {
	is_async: false,
	arec_names : [],
	arec_decl : [],
	label_num: 0
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


function fcall(ast, retParams){
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
			var sym = symtbl.lookup(qid[0]);
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
		var sym = symtbl.lookup(qid[0]);
		if(sym){
			name =  ast_util.get_scoped_name(sym, "_", PFUNC);
		}else{
			name = qid[0];
		}
	}
	if(ast.sync === 'await'){
		var arec_name = "arec_" + name;

		strs.push("this->" + arec_name + "._state = 0");
		for(var i=0;i<ast.params.length;i++){
			var param = ast.params[i];
			var param_name  = "param";//TODO - param name
			var param_str = "this->" + arec_name + "." + param_name + " = " + expr(param);
			strs.push(param_str);
			var paramid = param.expr.id || (param.expr.qid && param.expr.qid[0]);
			var param_sym = paramid && symtbl.lookup(paramid);
			if(param_sym && param_sym.info.type.dim && param_sym.info.type.dim.is_ring){
				var sym = symtbl.lookup("__pos_" + paramid);
				if(sym){
					var resolv = ast_util.resolve_matrix_expr(param.expr, symtbl);
					if(resolv.dim.length > 0){	
						var scoped_name = ast_util.get_scoped_name(sym, "_", PVAR);				
						strs.push("this->" + arec_name + "." + scoped_name + " = " + 	get_arec_qualified_name(sym, "_", PVAR) );
					}
				}
			}
		}

		strFcall = name + "( &(this->" + arec_name + ")";
		curr.arec_decl.push("struct " + arec_name + " " + arec_name + ";")
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

	for(retParam of retParams){
		strFcall = strFcall + ", " + retParam;
	}
	strFcall += ") ";
	strs.push(strFcall);

	return strs;
}


function get_arec_qualified_name(sym){
	var scoped_name = ast_util.get_scoped_name(sym, "_", PVAR);
	if(curr.is_async){
		if(curr.arec_names.indexOf(scoped_name) >= 0){
			return "this->" + scoped_name;
		}
	}	
	return scoped_name;
}

function expr(ast){
	// console.log(ast);
	var str="";
	var id = ast.id || (ast.qid && ast.qid[0]);	
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

function stmt(ast,strbuf){
	switch(ast.kind){
		case "assign":
			var ast_fcall = ast.expr.fcall;
			var strExpr = "";
			var label = "";
			var lvalue = expr(ast);

			if(ast_fcall && ast_fcall.sync === 'await'){
				strs = fcall(ast_fcall, [ "&(" + lvalue + ")"] );
				for(i = 0; i< strs.length - 1;i++){
					strbuf.push(strs[i] + ";");
				}
				strExpr = strs[strs.length - 1];//last element is the actual function call.				
				label = get_next_label() + ": ";
				strbuf.push(label + "_state = " + strExpr + ";");
				var stateCtrl = "if (_state > 0) {this->_state = " + curr.label_num + "; return this->_state;}";
				strbuf.push(stateCtrl);
			}else{
				strExpr = expr(ast.expr);
				strbuf.push(label + lvalue + "=" + strExpr + ";");				
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
			//TODO: tuple and array returns.
			if(curr.is_async){
				if(strRetExpr !== ""){
					strbuf.push("*(this->_ret0) = " + strRetExpr);
				}
				strbuf.push("return this->_state; ");
			}else{
				strbuf.push("return " + strRetExpr + ";");
			}
			break;
		case "block":
			block(ast,strbuf);
			break;
		case "fcall":
			var strs = fcall(ast.fcall) + ";" ;
			for(str of strs){
				strbuf.push(str);
			}
		break;
	}

}

function stringify_type(ast){
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

	var dim="";
	if(typeof ast.dim != 'undefined'){
		for(var i in ast.dim.dim){
			dim=dim+"["+expr(ast.dim.dim[i])+"]";
		}
	}	
	var astr = {base: base, dim: dim, is_ring: ast.dim && ast.dim.is_ring};	

	return astr;
}

function vardef(ast)
{	
	var defs = [];
	var s="";
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
					curr.arec_names.push(scoped_name);
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
	for(var i in ast.defs){
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
			curr.arec_names.push(name);
		}
	}
	s=s+temp.join(", ");
	defs.push(s);
	return defs;
}

function fparam(ast){
	var s="";
	if(typeof ast.type.is_const != 'undefined'){
		if(ast.type.is_const === true)
			s=s+"const ";
	}
	var type=stringify_type(ast.type);
	var name = get_current_scoped_name(ast.id, PVAR);

	s = s + type.base + " " + name + type.dim;	

	if(typeof ast.init != 'undefined'){
		s = s + "=" + expr(ast.init);	
	}

	if(type.is_ring){
		var str_ringpos = "int " + get_current_scoped_name("__pos_" + ast.id, PVAR);		
		s = s + ", " + str_ringpos;		
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
	var scoped_fname = get_current_scoped_name("", PFUNC);
	var arec_name = "arec_" + scoped_fname;

	hdr = hdr + scoped_fname + "(";//Note:we're already in function scope - so no need to add fname
	var params=[];

	if(is_async){
		curr.is_async = true;
	}

	for(var i in ast.params){
		params.push(fparam(ast.params[i]));
	}

	if(is_async){	
		curr.arec_decl.push("struct " + arec_name + "{");
		curr.arec_decl.push("int _state = 0;");
		for(var i in ast.params){
			curr.arec_decl.push(params[i] + ";");		
		}
		params = ["struct " + arec_name + "* this"];
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

	var body_strbuf = [];

	stmt(ast.body,body_strbuf);

	if(is_async){
		var activation_tbl = "__atbl = { "
		for(var i=0;i< curr.label_num;i++){
			if(i > 0)
				activation_tbl += ", ";
			activation_tbl += "&&" + get_label(i);
		}
		activation_tbl += " }";
		strbuf.push(activation_tbl + ";");

		//save and reset the state.
		strbuf.push("int _state = this->_state;");
		strbuf.push("this->_state = 0;");

		var jmp_cmd = "if (_state > 0 && _state < " + curr.label_num + ") goto *(_atbl[_state]);";
		
		strbuf.push(jmp_cmd);
		strbuf.push(get_label(0) + ": ");
	}

	for(str of body_strbuf){
		strbuf.push(str);
	}

    strbuf.push("}");
    symtbl.exitNestedScope();

	if(is_async){
		curr.arec_decl.push("}");
		for(var arec_decl_line of curr.arec_decl){
			strglobals.push(arec_decl_line);			
		}
	}

    curr.is_async = false;
    curr.arec_names = [];
    curr.arec_decl = [];
    curr.label_num = 0;
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
   

    for(var mod_name in ast.modules){
        symtbl.enterNestedScope(mod_name);    	
        var mod_ast = ast.modules[mod_name];
	
		strglobals.push("/*Module vars for " + mod_name + "*/");
		for(var i =0;i<mod_ast.vars.length;i++){
			var strdefs = vardef(mod_ast.vars[i]);
			for(strdef in strdefs){
				strglobals.push(strdef + ";");
			}
		}
		strglobals.push("/*End of module vars for " + mod_name + "*/");

        for(var i=0;i<mod_ast.fdefs.length;i++){
            fdef(mod_ast.fdefs[i], code);
        }
        symtbl.exitNestedScope();
    }

    if(strglobals.length > 0){
    	//add defines to the beginning of code.
		var splice_args = [0, 0].concat(strglobals);
		Array.prototype.splice.apply(code, splice_args);    
	}
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



