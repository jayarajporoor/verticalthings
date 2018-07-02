function loopGen(ast, ctx){
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
		ctx.symtbl.exitNestedScope();
	}
}

function block(ast,ctx){
	if(typeof ast.stmts != 'undefined'){
			stmts(ast.stmts,ctx);
	}
}

function stmts(ast, ctx){
	for(var i=0;i<ast.length;i++){
		if(typeof ast[i].kind != 'undefined'){
			switch(ast[i].kind){
				case "assign":
					ast[i] = assign(ast[i],ctx);
					break;
				case "block":
					block(ast[i],ctx);
					break;
				case "for":
					block(ast[i].body.stmts,ctx);
					break;
				case "if":
					block(ast[i].if_body,ctx);
					if(typeof ast[i].else_body !='undefined'){
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

function assign(ast, ctx){
	if(ast.expr.id != 'undefined'){

	}
	return addLoop(ast,ctx);
}

function is_varconst(ast){
	if(typeof ast.id != 'undefined' || typeof ast.qid != 'undefined' || typeof ast.iconst != 'undefined')
		return true;
	return false;
}

function checkIfLoopNeeded(ast,ctx){
	if(typeof ast.expr.id!='undefined'){
		var lvalue=astlib.resolve_matrix_expr(ast,ctx.symtbl);
		var rvalue=astlib.resolve_matrix_expr(ast.expr,ctx.symtbl);
		if(lvalue && rvalue){
			if(lvalue.dim.length==1 && rvalue.dim.length==1){
				var temp=astlib.deep_copy(ast);
				var range={from: {iconst: 0}, to: {iconst: lvalue.dim[0]}, is_inclusive: false};
				if(typeof temp.dim!='undefined' && temp.id.indexOf("__")!=0){
					temp.dim.dim.push({id: '__i'});
				}
				else if(temp.id.indexOf("__")!=0)
					temp.dim={dim: [{id: '__i'}]};
				if(typeof temp.expr.dim!='undefined' && temp.expr.id.indexOf("__")!=0)
					temp.expr.dim.dim.push({id: '__i'});
				else if(temp.expr.id.indexOf("__")!=0)
					temp.expr.dim={dim: [{id:'__i'}]};
				ast={kind: "for",ids: ['__i'], range: range, body: {kind: "block", stmts: [temp]}};
			}
			else if(lvalue.dim.length==2 && rvalue.dim.length==2){
				var temp= astlib.deep_copy(ast);
				var range1={from: {iconst:0}, to: {iconst: lvalue.dim[0].iconst}, is_inclusive: false};
				var range2={from: {iconst:0}, to: {iconst: lvalue.dim[1].iconst}, is_inclusive: false};
				if(typeof temp.dim!='undefined' && temp.id.indexOf("__")!=0){
					temp.dim.dim.push({id: '__i'});
					temp.dim.dim.push({id: '__j'});
				}
				else if(temp.id.indexOf("__")!=0)
					temp.dim={dim: [{id: '__i'},{id: '__j'}]};
				if(typeof temp.expr.dim!='undefined' && temp.expr.id.indexOf("__")!=0){
					temp.expr.dim.dim.push({id: '__i'});
					temp.expr.dim.dim.push({id: '__j'});
				}
				else if(temp.expr.id.indexOf("__")!=0)
					temp.expr.dim={dim: [{id:'__i'},{id: '__j'}]};
				ast = { kind: "for", ids: ['__i'], range: range1, body: { kind: "block", stmts: [{ kind: "for", ids: ['__j'], range: range2, body: { kind: "block", stmts: [temp] } } ] } };
			}
		}
	}
	else if(is_varconst(ast.expr.lexpr) && is_varconst(ast.expr.rexpr)){
		var Left = astlib.resolve_matrix_expr(ast.expr.lexpr,ctx.symtbl);
		var Right = astlib.resolve_matrix_expr(ast.expr.rexpr,ctx.symtbl);
		var lvalue= astlib.resolve_matrix_expr(ast,ctx.symtbl);
		if(ast.expr.op == '+' || ast.expr.op == '-' || ast.expr.op == '(*)'){
			if(ast.expr.op == "(*)")
				ast.expr.op = "*";
			if(Left && Right){
				if(Left.dim.length==1 && Right.dim.length==1){
					var temp=astlib.deep_copy(ast);
					var range = { from: {iconst: 0}
								, to: {iconst: Left.dim[0].iconst}
								, is_inclusive: false
								};
					if(typeof temp.expr.lexpr.dim!='undefined' && temp.expr.lexpr.id.indexOf("__")!=0){
						temp.expr.lexpr.dim.dim.push({id: '__i'});
					}
					else if(temp.expr.lexpr.id.indexOf("__")!=0)
						temp.expr.lexpr.dim={dim: [{id: '__i'}]};
					if(typeof temp.expr.rexpr.dim!='undefined' && temp.expr.rexpr.id.indexOf("__")!=0){
						temp.expr.rexpr.dim.dim.push({id: '__i'});
					}
					else if(temp.expr.rexpr.id.indexOf("__")!=0)
						temp.expr.rexpr.dim={dim: [{id: '__i'}]};
					if(typeof temp.dim!='undefined' && temp.id.indexOf("__")!=0)
						temp.dim.dim.push({id: '__i'});
					else if(temp.id.indexOf("__")!=0)
						temp.dim = {dim: [{id: '__i'}]};
					ast = {   kind: "for"
							, ids: ['__i']
							, range: range
							, body: {     stmts: [temp]
										, kind: "block"
									}
						};
				}
				else if(Left.dim.length==2 && Right.dim.length==2){
					var temp=JSON.parse(JSON.stringify(ast));
					var range1= { from: { iconst: 0 }
								, to: { iconst: Left.dim[0].iconst }
								, is_inclusive: false
								};
					var range2= { from: { iconst: 0 }
								, to: { iconst: Left.dim[1].iconst }
								, is_inclusive: false
								};
					if(typeof temp.expr.lexpr.dim!='undefined' && (temp.expr.lexpr.id.indexOf("__") != 0)){
						temp.expr.lexpr.dim.dim.push({id: '__i'});
						temp.expr.rexpr.dim.dim.push({id: '__j'});
					}
					else if(temp.expr.lexpr.id.indexOf("__") != 0)
						temp.expr.lexpr.dim={ dim: [ {id: '__i'}, {id: '__j'} ] };
					if(typeof temp.expr.rexpr.dim!='undefined' && (temp.expr.rexpr.id.indexOf("__") != 0)){
						temp.expr.rexpr.dim.dim.push({id: '__i'});
						temp.expr.rexpr.dim.dim.push({id: '__j'});
					}
					else if(temp.expr.rexpr.id.indexOf("__") != 0)
						temp.expr.rexpr.dim={dim: [{id: '__i'}, {id: '__j'}]};
					if(typeof temp.dim!='undefined' && temp.id.indexOf("__")!=0){
						temp.dim.dim.push({id: '__i'});
						temp.dim.dim.push({id: '__j'});
					}
					else if(temp.id.indexOf("__")!=0)
						temp.dim = {dim: [{id: '__i'},{id: '__j'}]};
					ast = {   kind: "for"
							, ids: ['__i']
							, range: range1
							, body: { 
								stmts: [{   kind: "for"
										  , ids: ['__j']
										  , range: range2
										  , body: {   stmts: [temp]
										  		    , kind: "block" 
										  		  }
										}]
							  , kind: "block"
							  }
						  };
				}
			}
		}
		else if(ast.expr.op == '*'){
			if(Left && Right){
				var temp=astlib.deep_copy(ast);
				if(Left.dim.length==1 && Right.dim.length==1){
					var range={from: {iconst: 0}, to: {iconst: Left.dim[0].iconst}, is_inclusive:false};
					if(typeof temp.expr.lexpr.dim!='undefined' && temp.expr.lexpr.id.indexOf("__")!=0){
						temp.expr.lexpr.dim.dim.push({id: '__i'});
					}
					else if(temp.expr.lexpr.id.indexOf("__")!=0)
						temp.expr.lexpr.dim={dim: [{id: '__i'}]};
					if(typeof temp.expr.rexpr.dim!='undefined' && temp.expr.rexpr.id.indexOf("__")!=0){
						temp.expr.rexpr.dim.dim.push({id: '__i'});
					}
					else if(temp.expr.rexpr.id.indexOf("__")!=0)
						temp.expr.rexpr.dim={dim: [{id: '__i'}]};
					ast = { kind: "block"
						  , stmts:  [ { kind: "assign"
									  , id: temp.id
									  , dim: temp.dim
									  , expr: {iconst: 0}
								      }
									, {	kind: "for"
									  , ids:['__i']
									  ,range: range
									  , body: { kind:"block"
									  		  , stmts: [ { kind: "assign"
									  			 		 , id: temp.id
									  			 		 , dim: temp.dim
									  			 		 , expr: { op: "+"
									  			 		 		 , lexpr: temp.expr
									  			 		 		 , rexpr: { id: temp.id, dim: temp.dim }
									  			 		 }
									  			 }
									  		   ]
									  		  }
									  }
									]
						  };
				}
				else if(Left.dim.length==1 && Right.dim.length==2){
					var range2={from: {iconst: 0}, to: {iconst: Left.dim[0].iconst}, is_inclusive: false};
					var range1={from: {iconst: 0}, to: {iconst: Right.dim[1].iconst}, is_inclusive: false};
					if(typeof temp.expr.lexpr.dim!='undefined' && temp.expr.lexpr.id.indexOf("__")!=0){
						temp.expr.lexpr.dim.dim.push({id: '__j'});
					}
					else if(temp.expr.lexpr.id.indexOf("__")!=0)
						temp.expr.lexpr.dim={dim: [{id: '__j'}]};
					if(typeof temp.expr.rexpr.dim!='undefined' && temp.expr.rexpr.id.indexOf("__")!=0){
						temp.expr.rexpr.dim.dim.push({id: '__j'});
						temp.expr.rexpr.dim.dim.push({id: '__i'});
					}
					else if(temp.expr.rexpr.id.indexOf("__")!=0)
						temp.expr.rexpr.dim={dim: [{id: '__j'}, {id: '__i'}]};
					if(typeof temp.dim!='undefined' && temp.id.indexOf("__")!=0)
						temp.dim.dim.push({id: '__i'});
					else if(temp.id.indexOf("__")!=0)
						temp.dim = {dim: [{id: '__i'}]};
					ast = { kind: "block", stmts: [ { kind: "for", ids: ['__i'], range: range1, body: { kind: "block", stmts: [ { kind: "assign", id: temp.id, expr: {iconst:0}, dim: temp.dim }, { kind: "for", ids: ['__j'], range: range2, body: { kind: "block", stmts: [ { kind: "assign", id: temp.id, expr: { op: "+", lexpr: temp.expr, rexpr: { id: temp.id, dim: temp.dim } }, dim: temp.dim } ] } } ] } } ] };
				}
				else if(Left.dim.length==2 && Right.dim.length==1){
					var range1={from: {iconst: 0}, to: {iconst: Left.dim[0].iconst}, is_inclusive: false};
					var range2={from: {iconst: 0}, to: {iconst: Right.dim[0].iconst}, is_inclusive: false};
					if(typeof temp.expr.lexpr.dim!='undefined' && temp.expr.lexpr.id.indexOf("__")!=0){
						temp.expr.lexpr.dim.dim.push({id: '__i'});
						temp.expr.lexpr.dim.dim.push({id: '__j'});
					}
					else if(temp.expr.lexpr.id.indexOf("__")!=0)
						temp.expr.lexpr.dim={dim: [{id: '__i'},{id: '__j'}]};
					if(typeof temp.expr.rexpr.dim!='undefined' && temp.expr.rexpr.id.indexOf("__")!=0){
						temp.expr.rexpr.dim.dim.push({id: '__j'});
					}
					else if(temp.expr.rexpr.id.indexOf("__")!=0)
						temp.expr.rexpr.dim={dim: [{id: '__j'}]};
					if(typeof temp.dim!='undefined' && temp.id.indexOf("__")!=0)
						temp.dim.dim.push({id: '__i'});
					else if(temp.id.indexOf("__")!=0)
						temp.dim = {dim: [{id: '__i'}]};
					ast = { kind: "block", stmts: [ { kind: "for", ids: ['__i'], range: range1, body: { kind: "block", stmts: [ { kind: "assign", id: temp.id, expr: {iconst:0}, dim: temp.dim }, { kind: "for", ids: ['__j'], range: range2, body: { kind: "block", stmts: [ { kind: "assign", id: temp.id, expr: { op: "+", lexpr: temp.expr, rexpr: { id: temp.id, dim: temp.dim} }, dim: temp.dim } ] } } ] } } ] };
				}
				else if(Left.dim.length==2 && Right.dim.length==2){
					var range1={from: {iconst: 0}, to: {iconst: Left.dim[0].iconst}, is_inclusive: false};
					var range2={from: {iconst: 0}, to: {iconst: Right.dim[1].iconst}, is_inclusive: false};
					var range3={from: {iconst: 0}, to: {iconst: Right.dim[0].iconst}, is_inclusive: false};
					if(typeof temp.expr.lexpr.dim!='undefined' && temp.expr.lexpr.id.indexOf("__")!=0){
						temp.expr.lexpr.dim.dim.push({id: '__i'});
						temp.expr.lexpr.dim.dim.push({id: '__k'});
					}
					else if(temp.expr.lexpr.id.indexOf("__")!=0)
						temp.expr.lexpr.dim={dim: [{id: '__i'},{id: '__k'}]};
					if(typeof temp.expr.rexpr.dim!='undefined' && temp.expr.rexpr.id.indexOf("__")!=0){
						temp.expr.rexpr.dim.dim.push({id: '__k'});
						temp.expr.rexpr.dim.dim.push({id: '__j'});
					}
					else if(temp.expr.rexpr.id.indexOf("__")!=0)
						temp.expr.rexpr.dim={dim: [{id: '__k'}, {id: '__j'}]};
					if(typeof temp.dim!='undefined' && temp.id.indexOf("__")!=0){
						temp.dim.dim.push({id: '__i'});
						temp.dim.dim.push({id: '__j'});
					}
					else if(temp.id.indexOf("__")!=0)
						temp.dim = {dim: [{id: '__i'},{id: '__j'}]};
					ast = { kind: "block", stmts: [ {kind: "for", ids: ['__i'], range: range1, body: { kind: "block", stmts: [ { kind: "for", ids: ['__j'], range: range2, body: { kind: "block", stmts: [ { kind: "assign", id: temp.id, dim: temp.dim, expr: {iconst:0}}, { kind: "for", ids: ['__k'], range: range3, body: { kind: "block", stmts: [ {kind: "assign", id: temp.id, dim: temp.dim, expr: { op: "+", lexpr: temp.expr, rexpr: {id: temp.id, dim: temp.dim } } } ] } } ] } } ] } } ] };
				}
			}
		}
	}
	return ast;
}

function addLoop(ast,ctx){
	return checkIfLoopNeeded(ast,ctx);
}

var astlib=require("./../ast_util.js");
exports.transform = loopGen;