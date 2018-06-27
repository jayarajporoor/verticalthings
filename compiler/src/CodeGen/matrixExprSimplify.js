function transform(ast,ctx){
	for(var i in ast.modules){
		ctx.symtbl.enterNestedScope(i);
		fdefs(ast.modules[i].fdefs,ctx);
		ctx.symtbl.exitNestedScope();
	}
};

function fdefs(ast,ctx){
	for(var i = 0; i < ast.length ; i++){
		ctx.symtbl.enterNestedScope(ast[i].id);
		// console.log(ast[i].body.stmts);
		stmts(ast[i].body.stmts,ctx);
		ctx.symtbl.exitNestedScope();
	}
}

function block(ast,ctx){
	if(typeof ast.stmts != 'undefined'){
		for(var i in ast.stmts){
			stmts(ast.stmts[i],ctx);
		}
	}
}

function stmts(ast, ctx){
	for(var i=0;i<ast.length;i++){
		if(typeof ast[i].kind != 'undefined'){
			switch(ast[i].kind){
				case "assign":
					assign(ast[i], ctx);
					break;
				case "block":
					block(ast[i],ctx);
					break;
			}
		}
	}
}

function assign(ast, ctx){
	var orig = astlib.deep_copy(ast);
	expr(ast.expr, ctx, true);
	if(block_stmts.length > 0){

	}
}

function is_varconst(ast){
	if(typeof ast.id != 'undefined' || typeof ast.qid != 'undefined' || typeof ast.is_const != 'undefined')
		return true;
	return false;
}

function is_dim_resolved(ast,ctx){
	if(typeof ast.id === 'undefined'){
		return true;
	}
	var dim = 0;
	if(typeof ast.dim != 'undefined'){
		dim=ast.dim.dim.length;
	}
	if(typeof ctx.symtbl.lookup(ast.id).info.type.dim != 'undefined'){
		if(ctx.symtbl.lookup(ast.id).info.type.dim.dim.length > dim)
			return false;
	}
	return true;
}

function get_dim(ast,ctx){
	if(ast.expr.op == "+"){
		if(typeof ast.expr.lexpr.id != 'undefined'){
				return ctx.symtbl.lookup(ast.expr.lexpr.id).info.type.dim;
		}
		else
			return ctx.symtbl.lookup(ast.expr.lexpr.qid[0]).info.type.dim;
	}
	else if(ast.expr.op == "*"){
		if(typeof ast.expr.lexpr.id != 'undefined'){
				return { dim : [ctx.symtbl.lookup(ast.expr.lexpr.id).info.type.dim.dim[0],ctx.symtbl.lookup(ast.expr.rexpr.id).info.type.dim.dim[1]], info : ctx.symtbl.lookup(ast.expr.lexpr.id).info};
		}
		else
			return {dim : [ctx.symtbl.lookup(ast.expr.lexpr.qid[0]).info.type.dim[0],ctx.symtbl.lookup(ast.expr.rexpr.qid[0]).info.type.dim[1]], info: ctx.symtbl.lookup(ast.expr.lexpr.qid[0]).info};	
	}
}

function transform_expr(ast, ctx){
	var details = get_dim(ast.expr, ctx);
	details.info.type.dim.dim = details.dim;
	block_stmts.push({kind : "assign", id : "$t"+temp_ind, expr : ast.expr});
	ctx.symtbl.addSymbolToCurrentScope("$t"+temp_ind , info);
	return {id : "$t"+temp_ind++};
}

function expr(ast, ctx, isRoot){
	if(typeof ast.op != 'undefined'){
		var lexpr_is_varconst = is_varconst(ast.lexpr);
		var rexpr_is_varconst = is_varconst(ast.rexpr);
	}
	if(lexpr_is_varconst && rexpr_is_varconst){
		if(isRoot || (is_dim_resolved(ast.lexpr,ctx) && is_dim_resolved(ast.rexpr, ctx)))
			return;
		else{
			return transform_expr(ast,ctx);
		}
	}
	else{
		if(!lexpr_is_varconst){
			var texpr = expr(ast.lexpr, false);
			if(texpr)
				ast.lexpr = texpr;
		}
		if(!rexpr_is_varconst){
			var texpr = expr(ast.rexpr, false);
			if(texpr){
				ast.rexpr = texpr;
			}
		}
	}

}

var astlib=require("./../ast_util.js");
var temp_ind=0;
var block_stmts=[];
exports.transform=transform;