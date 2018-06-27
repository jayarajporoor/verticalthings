
var block_stmts =[];

x = (a + b) + c;

t1 = a + b;

x= t1 + c;

assign(ast){
	ast.ifd;
	expr(ast.expr, true);
	if(block_stmts.length > 0){
	     push the ast.id, expr statemtn in block_stmts;
	     ast.kind = 'block';
	     ast.stmts = block_stmts;
	     ast.orig = {saved values};
	}
}

expr(ast, is_toplevel){
	var lexpr_is_atomic = is_atomic(ast.lexpr);
	var rexpr_is_atomic = is_atomic(ast.rexpr);
	if(lexpr_is_atomic && rexpr_is_atomic){
		if(is_toplevel || (is_dim_resolved(ast.lexpr) && is_dim_resolved(ast.rexpr))){
		   return;
		}else{
			return transform_expr(ast);
		}
	}else{
	   if(!lexpr_is_atomic){
	       var texpr = expr(ast.lexpr, false);
	       if(texpr){
	            ast.lexpr = texpr;
	       }
	   }
	   if(!rexpr_is_atomic){
	      var texpr = expr(ast.rexpr, false);
	      if(texpr){
	      	ast.rexpr = texpr;
	      }
	   }
	}
}

transform_expr(ast){
	block_stmts.push(...);
}
