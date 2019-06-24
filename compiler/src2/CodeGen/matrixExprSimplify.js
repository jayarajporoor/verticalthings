function transform(ast,ctx){
	for(var i in ast.modules){
		ctx.symtbl.enterNestedScope(i);
		fdefs(ast.modules[i].fdefs,ctx);
		ctx.symtbl.exitNestedScope();
	}
}

function fdefs(ast,ctx){
	for(var i = 0; i < ast.length ; i++){
		ctx.symtbl.enterNestedScope(ast[i].id);
		stmts(ast[i].body.stmts,ctx);
		for(var j=0;j<temp_ind;j++){
			ast[i].vars.push({type: {primitive: get_primitive_type("__t"+j,ctx), is_const: false}, defs: [{id: "__t"+j}]});
		}
		ctx.symtbl.exitNestedScope();
		temp_ind=0;
	}
}

function get_primitive_type(id,ctx){
	return ctx.symtbl.lookup(id).info.type.primitive;
}

function block(ast,ctx){
	// console.log(ast);
	if(typeof ast.stmts != 'undefined'){
		stmts(ast.stmts,ctx);
	}
}

					// console.log(ast[i].body);
function stmts(ast, ctx){
	for(var i=0;i<ast.length;i++){
		if(typeof ast[i].kind != 'undefined'){
			switch(ast[i].kind){
				case "assign":
					// console.log(ast[i]);
					var orig=assign(ast[i], ctx);
					if(block_stmts.length>0){
						ast[i]={kind: "block", stmts: block_stmts, orig: orig};
						block_stmts=[];
					}
					break;
				case "block":
					block(ast[i],ctx);
					break;
				case "for":
					block(ast[i].body,ctx);
					break;
				case "if":
					block(ast[i].if_body,ctx);
					if(typeof ast[i].else_body != 'undefined'){
						block(ast[i].else_body,ctx);
					}
					break;
				case "while":
					block(ast[i].body,ctx);
					break;
			}
		}
	}
}
					// console.log(ast[i]);
var change=0;

function assign(ast, ctx){
	// console.log(ast);
	var orig = astlib.deep_copy(ast);
	var expre;
	change =1;
	while(change === 1){
		change=0;
		// console.log(ast.expr);
	 	expre=expr(ast.expr, ctx, true);
	}
	if(block_stmts.length > 0){
		if(typeof ast.qid != 'undefined'){
			if(typeof ast.dim != 'undefined'){
				block_stmts.push({kind: "assign", id: ast.qid[0], expr: expre, dim: ast.dim});
			}
			else{
				block_stmts.push({kind: "assign", id: ast.qid[0], expr: expre});		
			}
		}
		else if(typeof ast.id != 'undefined'){
			var assign_stmt = JSON.parse(JSON.stringify(ast));
			assign_stmt.expr=expre;
			block_stmts.push(assign_stmt);
		}
	}
	return orig;
}

function is_varconst(ast){
	// console.log(ast);
	if(typeof ast === 'undefined')
		return false;
	if(typeof ast.id != 'undefined' || typeof ast.qid != 'undefined' || typeof ast.is_const != 'undefined')
		return true;
	return false;
}

function is_dim_resolved(ast,ctx){
	var dim = 0;
	if(typeof ast.dim != 'undefined'){
		dim=ast.dim.dim.length;
	}
	if(typeof ast.id === 'undefined'){
		if(typeof ctx.symtbl.lookup(ast.qid[0]).info.type.dim != 'undefined'){
			if(ctx.symtbl.lookup(ast.qid[0]).info.type.dim.dim.length > dim){
				return false;
			}
		}
	}
	else if(typeof ctx.symtbl.lookup(ast.id).info.type.dim != 'undefined'){
		if(ctx.symtbl.lookup(ast.id).info.type.dim.dim.length > dim)
			return false;
	}
	return true;
}

function get_dim(ast,ctx){
	var Left;
	var Right;
	if(typeof ast.id != 'undefined'){
		Left= astlib.resolve_matrix_expr(ast,ctx.symtbl);
		return {dim: Left.dim, info: astlib.deep_copy(ctx.symtbl.lookup(ast.id).info)};
	}
	else if(ast.op == "+" || ast.op == "-" || ast.op == "(*)"){
		if(typeof ast.lexpr.id != 'undefined'){
			Left = astlib.resolve_matrix_expr(ast.lexpr,ctx.symtbl);
			return {dim : Left.dim, info: ctx.symtbl.lookup(ast.lexpr.id).info};
		}
	}
	else if(ast.op == "*"){
		Left = astlib.resolve_matrix_expr(ast.lexpr,ctx.symtbl);
		Right = astlib.resolve_matrix_expr(ast.rexpr,ctx.symtbl);
		if(!Left && !Right){
			if(typeof ast.lexpr.id != 'undefined')
				return {dim: [], info: astlib.deep_copy(ctx.symtbl.lookup(ast.lexpr.id).info)};
		}
		else if(!Left && (Right.dim.length == 1 || Right.dim.length == 2)){
			if(typeof ast.rexpr.id != 'undefined')
				return {dim: Right.dim, info: astlib.deep_copy(ctx.symtbl.lookup(ast.rexpr.id).info)};
		}
		else if((Left.dim.length == 1 || Left.dim.length == 2) && !Right){
			if(typeof ast.lexpr.id != 'undefined')
				return {dim: Left.dim, info: astlib.deep_copy(ctx.symtbl.lookup(ast.lexpr.id).info)};
		}
		else if(Left.dim.length == 1 && Right.dim.length == 2){
			if(typeof ast.lexpr.id != 'undefined'){
				return {dim: [Right.dim[1]], info: astlib.deep_copy(ctx.symtbl.lookup(ast.lexpr.id).info)};
			}
		}
		else if(Left.dim.length == 2 && Right.dim.length == 1){
			if(typeof ast.rexpr.id != 'undefined'){
				return {dim: [Left.dim[0]], info: astlib.deep_copy(ctx.symtbl.lookup(ast.rexpr.id).info)};
			}
		}
		else if(Left.dim.length == 2 && Right.dim.length == 2){
			if(typeof ast.lexpr.id != 'undefined')
				return {dim: [Left.dim[0], Right.dim[1]], info: astlib.deep_copy(ctx.symtbl.lookup(ast.lexpr.id).info)};
		}
		else if(Left.dim.length == 1 && Right.dim.length == 1){
			if(typeof ast.lexpr.id != 'undefined')
				return {dim: [], info: astlib.deep_copy(ctx.symtbl.lookup(ast.lexpr.id).info)};
		}
	}
}

function transform_expr(ast, ctx){
	// console.log(ast);
	var details = astlib.deep_copy(get_dim(ast, ctx));
	details.info.type.dim.dim = astlib.deep_copy(details.dim);
	// console.log(details.info.type.dim);
	details.info.is_temp=true;
	block_stmts.push({kind: "assign",id : "__t"+temp_ind,expr: astlib.deep_copy(ast)});
	// console.log(block_stmts[block_stmts.length-1]);
	ctx.symtbl.addSymbolToCurrentScope("__t"+temp_ind , details.info);
	return {id : "__t"+temp_ind++};
}

function expr(ast, ctx, isRoot){
	// console.log(ast);
	if(typeof ast.bconst!='undefined' || typeof ast.fconst!='undefined' || typeof ast.up != 'undefined' || typeof ast.id != 'undefined' || typeof ast.iconst != 'undefined' || typeof ast.fcall != 'undefined'){
		return ast;
	}
	var lexpr_is_varconst = is_varconst(ast.lexpr);
	var rexpr_is_varconst = is_varconst(ast.rexpr);
	if(lexpr_is_varconst && rexpr_is_varconst){
		if(isRoot || (is_dim_resolved(ast.lexpr,ctx) && is_dim_resolved(ast.rexpr, ctx)))
		{
			if(isRoot && ast.op=='*')
			{
	// console.log(ast)	;
				return transform_expr(ast,ctx);
			}
			return ast;
		}
		else{
			change=1;
			return transform_expr(ast,ctx);
		}
	}
	else{
		if(!lexpr_is_varconst && ast.lexpr){
			var texpr = expr(ast.lexpr, ctx, false);
			if(texpr){
				ast.lexpr = texpr;
			}
		}
		if(!rexpr_is_varconst && ast.rexpr){
			var texpr = expr(ast.rexpr, ctx, false);
			if(texpr){
				ast.rexpr = texpr;
			}
		}
	}
	return ast;

}

var astlib=require("./../ast_util.js");
var temp_ind=0;
var block_stmts=[];
exports.transform=transform;