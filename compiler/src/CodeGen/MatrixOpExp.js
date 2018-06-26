module.exports = function(ast,ctx){
	module(ast.module,ctx);
	// console.log(modules);
}
function module(ast, ctx){
   for(var i in ast){
   		ctx.symtbl.enterNestedScope(ast.i);
   		fdefs(ast.i.fdefs,ctx);
   }
}
function fdefs(ast,ctx){
	for(var i in ast){
		ctx.symtbl.enterNestedScope(ast[i]);
		stmts(ast[i].body.stmts);
	}
}
function stmts(ast,ctx){
	for(var i in ast){
		if(ast[i].kind === "block")
			stmts(ast[i].stmts);
		else if(ast[i].kind === "assign")
			check(ast[i],ctx);
	}
}
function check(ast,ctx){
	
}