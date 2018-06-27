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
		stmts(ast[i].body.stmts,ctx);
		// console.log(JSON.stringify(ast[i].body.stmts));
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
					var orig=assign(ast[i], ctx);
					// console.log(block_stmts.length);
					if(block_stmts.length>0){
						ast[i]={kind: "block", stmts: block_stmts, orig: orig};
						block_stmts=[];
					}
					// console.log(JSON.stringify(ast[i]));
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
	var expre=expr(ast.expr, ctx, true);
	// console.log(JSON.stringify(ast));
	// console.log("-----------------------------");
	// console.log(JSON.stringify(expre));
	if(block_stmts.length > 0){
		if(typeof ast.qid != 'undefined'){
			block_stmts.push({kind: "assign", id: ast.qid[0], expr: expre})
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
	// console.log(ast.id);
	if(typeof ctx.symtbl.lookup(ast.id).info.type.dim != 'undefined'){
		if(ctx.symtbl.lookup(ast.id).info.type.dim.dim.length > dim)
			return false;
	}
	return true;
}

function get_dim(ast,ctx){
	// console.log(ast);
	if(ast.op == "+"){
		if(typeof ast.lexpr.id != 'undefined'){
				return {dim : ctx.symtbl.lookup(ast.lexpr.id).info.type.dim, info:ctx.symtbl.lookup(ast.lexpr.id).info};
		}
		else
			return {dim:ctx.symtbl.lookup(ast.lexpr.qid[0]).info.type.dim , info: ctx.symtbl.lookup(ast.lexpr.qid[0]).info};
	}
	else if(ast.op == "*"){
		if(typeof ast.lexpr.id != 'undefined'){
				return { dim : [ctx.symtbl.lookup(ast.lexpr.id).info.type.dim.dim[0],ctx.symtbl.lookup(ast.rexpr.id).info.type.dim.dim[1]], info : ctx.symtbl.lookup(ast.lexpr.id).info};
		}
		else
			return {dim : [ctx.symtbl.lookup(ast.lexpr.qid[0]).info.type.dim[0],ctx.symtbl.lookup(ast.rexpr.qid[0]).info.type.dim[1]], info: ctx.symtbl.lookup(ast.lexpr.qid[0]).info};	
	}
}

function transform_expr(ast, ctx){
	var details = get_dim(ast, ctx);
	// console.log(details);
	details.info.type.dim.dim = details.dim;
	// console.log(JSON.stringify(ast));
	block_stmts.push({kind: "assign",id : "$t"+temp_ind,expr: JSON.parse(JSON.stringify(ast))});
	ctx.symtbl.addSymbolToCurrentScope("$t"+temp_ind , details.info);
	return {id : "$t"+temp_ind++};
}

function expr(ast, ctx, isRoot){
	// console.log(JSON.stringify(ast));
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
			var texpr = expr(ast.lexpr, ctx, false);
			if(texpr)
				ast.lexpr = texpr;
		}
		if(!rexpr_is_varconst){
			var texpr = expr(ast.rexpr, ctx, false);
			if(texpr){
				ast.rexpr = texpr;
			}
		}
	}
	return ast;
	console.log("----------------------------------");
	block_stmts.push({kind : "assign", id : " ", expr : ast});
	console.log(JSON.stringify(block_stmts[1]));

}

var astlib=require("./../ast_util.js");
var temp_ind=0;
var block_stmts=[];
exports.transform=transform;