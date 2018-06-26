function transform(ast,ctx){
	for(var i in ast.modules){
		ctx.symtbl.enterNestedScope(i);
		module(ast.modules[i],ctx);
		ctx.symtbl.exitNestedScope();
		// console.log(i);
	}
};

function module(ast,ctx){
	ctx.symtbl.enterNestedScope("lol");
	console.log(ctx.symtbl.lookup("a"));

}

exports.transform=transform;