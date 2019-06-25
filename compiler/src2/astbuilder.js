var SymbolTable = require("./symtbl.js");

var ctx = {};

function addSymbol(name, info){
	ctx.symtbl.addSymbolToCurrentScope(name, info);
}

function getSymbol(name){
	return ctx.symtbl.lookup(name);
}

function getId(node) {
	return node.Identifier() ? node.Identifier().getText() : null;
}

function getIConst(node) {
	return parseInt(node.IntegerConstant().getText());
}

function getFConst(node) {
	return parseFloat(node.FloatingConstant().getText());
}

function getCConst(node) {
	return node.CharacterConstant().getText();
}

function getBConst(node) {
	return (node.value.text === 'true') ? true : false;
}

function getNumConstAst(node){
	var ast = {src: src_info(node)};
	var iconst = node.IntegerConstant();
	var fconst = node.FloatingConstant();
	if(iconst)
	{
		ast.iconst = getIConst(node);
	}else
	if(fconst){
		ast.fconst = getFConst(node);
	}
	return ast;
}

function getExprConstAst(node) {
	var num = node.numConstant();
	var char = node.CharacterConstant();
	var bconst = node.booleanLiteral();
	var ast ={};
	if(num){
		ast = getNumConstAst(num);
	}else
	if(char){
		ast = {cconst: getCharConst(char)};
	}else
	if(bconst){
		ast = {bconst: getBConst(bconst)};
	}
	ast.src = src_info(node);
	return ast;
}

function getIdList(node) {
	var ids = node.Identifier();
	var res = [];
	for(var j=0;j<ids.length;j++) {
		res.push(ids[j].getText());
	}	
	return res;	
}


function astIntVal(val){
	//Identifier|IntegerConstant;
	var identifier = val.Identifier();
	var iconst = val.IntegerConstant();
	var ast = {src: src_info(val)};
	if(identifier){
		ast.id = getId(val);
	}else{
		ast.iconst = getIConst(iconst);
	}
	return ast;
}


function getDimensionSpec(dimSpec){
	var dim = [];
	var dimValue = dimSpec.dimValue();
	for(var i=0;i<dimValue.length;i++){
		var dimval = {};
		if(dimValue[i].IntegerConstant()){
			dimval.iconst = getIConst(dimValue[i]);
		}else
		if(dimValue[i].Identifier()){
			dimval.id = getId(dimValue[i]);
			var sym = getSymbol(dimval.id);//try to replace the ID with constant defined if available.
			if(sym && sym.info.value && sym.info.value.iconst){
				var dimlen = sym.info.value.iconst;
		  		delete dimval.id;
		  		dimval.iconst = dimlen;				
			}
		}
		dim.push(dimval);
	}
	return {dim: dim, is_ring: dimSpec.RING() ? true: false};
}

function getStringLiteral(s){
	return s.getText();
}

function getActualParams(params) {
	var param = params.actualParam();
	var res =[];
	for(var i=0;i < param.length;i++) {
		v={};
		var expr = param[i].expr();
		var strLiteral = param[i].StringLiteral();
		var id = param[i].Identifier();
		if(id){
			v.name = getId(param[i]);
		}

		if(expr){
			v.expr = getExprAst(expr);
		}else
		if(strLiteral)
		{
			v.sconst = getStringLiteral(strLiteral);
		}
		res.push(v);
	}
	return res;
}

function getFunctionCallAst(fcall){
	var ast = {};
	var qualIdentifier = fcall.qualIdentifier();
	var cppQualIdentifier = fcall.cppQualIdentifier();
	var actualParams = fcall.actualParams();
	if(qualIdentifier){
		ast.qid = getIdList(qualIdentifier);
		if(ast.qid.length === 1){
			ast.id = ast.qid[0];
		}
	}else
	if(cppQualIdentifier){
		ast.qidCpp = getIdList(cppQualIdentifier);
	}
	if(actualParams){
		ast.params = getActualParams(actualParams);
	}else{
		ast.params = [];
	}
	return {fcall: ast, src: src_info(fcall)};
}

function astDimensionExpr(dimexpr){
	var dim = [];
	var exprs = dimexpr.expr();
	for(var i=0;i<exprs.length;i++){
		dim.push(getExprAst(exprs[i]));
	}
	return {dim: dim};
}

function astArrayExpr(expr){
	var ast = {
		id: getId(expr),
		dim: astDimensionExpr(expr.dimensionExpr()),
		src: src_info(expr)
	};
	return ast;
}

function getCastExprAst(expr){
	//castExpr : castableType LP basicExpr RP;
	return {up: 'cast', type: astPrimitiveType(expr.castableType()), expr: getBasicExprAst(expr.basicExpr()), src: src_info(expr)};
}

function astAddressExpr(expr){
	//addressExpr: ADDRESSOF (arrayExpr | qualIdentifier);	
	var arrayExpr = expr.arrayExpr();
	var qualIdentifier = expr.qualIdentifier();
	var ast = null;
	if(arrayExpr){
		ast = astArrayExpr(arrayExpr);
	}else
	if(qualIdentifier){
		ast = {qid: getIdList(qualIdentifier)};
		if(ast.qid.length === 1){
			ast.id = ast.qid[0];
		}
	}

	ast.address_of = true;
	return ast;
}

function getBasicExprAst(expr){
    var ast = {src: src_info(expr)};
	var qualIdentifier = expr.qualIdentifier();
	var arrayExpr = expr.arrayExpr();
	var functionCall = expr.functionCall();
	var literal = expr.literal();
	var basicSubExpr = expr.basicExpr();
	var castExpr = expr.castExpr();
	var addrExpr = expr.addressExpr();

	var op = expr.op ? expr.op.text : null;
	var up = expr.up ? expr.up.text : null;//unary op

	if(addrExpr){
		return astAddressExpr(addrExpr);
	}else
	if(castExpr){
		return getCastExprAst(castExpr);
	}else
	if(qualIdentifier){
		ast = {qid: getIdList(qualIdentifier)};
		if(ast.qid.length === 1){
			ast.id = ast.qid[0];
		}
	}else
	if(arrayExpr){
		ast = astArrayExpr(arrayExpr);
	}else
	if(functionCall){
		ast = getFunctionCallAst(functionCall);
	}else
	if(literal){
		ast = astLiteral(literal);
	}else
	if(op){
		ast.op = op;
		ast.lexpr = getBasicExprAst(basicSubExpr[0]);
		ast.rexpr = getBasicExprAst(basicSubExpr[1]);
	}else
	if(up){
		ast.up = up;
		ast.expr = getBasicExprAst(basicSubExpr[0]);
	}else{
		ast = getBasicExprAst(basicSubExpr[0]);		
	}

	return ast;
}

function getRelExprAst(expr){
	   //basicExpr op=GT basicExpr |
	var basicExpr = expr.basicExpr();
	var relSubExpr = expr.relExpr();

	if(relSubExpr){
		return getRelExprAst(relSubExpr);
	}else {
		return {
			op : expr.op.text,
			lexpr: getBasicExprAst(basicExpr[0]),
			rexpr: getBasicExprAst(basicExpr[1]),
			src: src_info(expr)
		};
	}
}

function getSyncExprAst(expr){
	var ast = {src: src_info(expr)};
	var sync = null;
	
	if(expr.AWAIT()){
		sync = 'await';
	}else
	if(expr.SIGNAL()){
		sync = 'signal';
	}

	var functionCall = expr.functionCall();

	if(functionCall){
		 ast = getFunctionCallAst(functionCall);
		 ast.fcall.sync = sync;
	}else {
		ast.id = getId(expr);
		ast.sync = sync;
	}

	return ast;

}

function getTupleExprAst(expr){
	var ast = {src: src_info(expr)};
	ast.texpr = getActualParams(expr.tupleExpr().actualParams());
}

function getToplevelExprAst(expr){
	var ast;
	var syncExpr = expr.syncExpr();
	var tupleExpr = expr.tupleExpr();
	var normalExpr = expr.expr();
	if(syncExpr){
		ast = getSyncExprAst(syncExpr);
	}else if(tupleExpr){
		ast = getTupleExprAst(tupleExpr);
	}else
	{
		ast  = getExprAst(normalExpr);
	}
	return ast;
}

function getExprAst(expr){
	var ast = {src: src_info(expr)};
	var basicExpr = expr.basicExpr();
	var relExpr = expr.relExpr();
	var subExpr = expr.expr();

	if(basicExpr){
		ast = getBasicExprAst(basicExpr);
	}else if(relExpr){
        ast = getRelExprAst(relExpr);
	}else
	if(subExpr) {
		if(expr.LNOT()){//(subExpr.length == 1): right now the only UP at expr-level is !
			ast.expr = getExprAst(subExpr[0]);
			ast.up = '!';
		}else
		if(subExpr.length==1){
			ast = getExprAst(subExpr[0]);
		}else{
			ast.lexpr = getExprAst(subExpr[0]);
			ast.rexpr = getExprAst(subExpr[1]);
			ast.op =  expr.op.text;
		}
	}
	return ast;
}


function astUsingSpec(usingSpec){
	var uses = [];
	for(var i=0;i<usingSpec.length;i++){
		uses.push({name: getId(usingSpec[i])});
	}
	return uses;
}

function astIncludeSpec(incSpec){
	var inc = [];

	for(var i=0;i<incSpec.length;i++){
		inc.push({name: getId(incSpec[i])});
	}

	return inc;
}

function astNumVal(numVal){
	var identifier = numVal.Identifier();
	var numConstant = numVal.numConstant();
	var ast ={};
	if(identifier){
		ast = {id: getId(numVal)};
	}else
	if(numConstant){
		ast = getNumConstAst(numConstant);
	}
	ast.src = src_info(numVal);
	return ast;
}

function astRangeType(rangeType){
	var numVal = rangeType.numVal();
	return {from: astNumVal(numVal[0]), to: astNumVal(numVal[1]), is_inclusive: rangeType.COLON()? true : false, src: src_info(rangeType)};
}

function astPrimitiveType(ptype){
	return {primitive: ptype.type.text,  src: src_info(ptype)};
}

function astTupleType(ttype){
	var type_list = [];
	var varTypes = ttype.varTypeList().varType();
	for(var i=0;i < varTypes.length;i++){
		type_list.push(astVarType(varTypes[i]));
	}
	return {
		ttype : type_list
	};
}

function astReturnType(returnType){
	var varType = returnType.varType();
	var tupleType = returnType.tupleType();

	return varType ? astVarType(varType) : astTupleType(tupleType);
}


function astFutureType(futureType){
	var ast = {};
	ast.future_qid = getIdList(futureType.qualIdentifier());
	return ast;
}

function astVarType(varType){
	//(qualIdentifier | cppQualIdentifier | rangeType | builtinType)	
	var qualIdentifier = varType.qualIdentifier();
	var cppQualIdentifier = varType.cppQualIdentifier();
	var rangeType = varType.rangeType();
	var primitiveType = varType.primitiveType();
	var futureType = varType.futureType();

	var ast = {};

	if(qualIdentifier){
		ast.qid = getIdList(qualIdentifier);
		if(ast.qid.length === 1){
			ast.id = ast.qid[0];
		}
	}else
	if(cppQualIdentifier){
		ast.qidCpp = getIdList(cppQualIdentifier);
	}else
	if(rangeType){
		ast.range = astRangeType(rangeType);
	}else
	if(primitiveType){
		ast = astPrimitiveType(primitiveType);
	}else
	if(futureType){
		ast = astFutureType(futureType);
	}

	var dimensionSpec = varType.dimensionSpec();  
	if(dimensionSpec){
		ast.dim = getDimensionSpec(dimensionSpec);
	}

	ast.src = src_info(varType);

	return ast;
}


function astArrayLiteral(alit){
    var entries = alit.expr();
    var ast = [];

    for(var i=0;i<entries.length;i++){
    	ast.push(getExprAst(entries[i]));
    }
    return ast;
}

function astLiteral(literal){

    var exprConstant = literal.exprConstant ? literal.exprConstant() : null;//if astInitValue calls us we won't have exprConstant
    var stringLiteral = literal.StringLiteral();
    var arrayLiteral = literal.arrayLiteral();

    var ast = {};
    if(exprConstant){
    	ast = getExprConstAst(exprConstant);
    }else
    if(stringLiteral){
    	ast.sconst = getStringLiteral(stringLiteral);
    }else
    if(arrayLiteral){
    	ast.aconst  = astArrayLiteral(arrayLiteral);
    }

    ast.src = src_info(literal);

    return ast;
}


function astInitValue(initValue){
	//expr | StringLiteral | arrayLiteral;
	var expr = initValue.expr();
	var sliteral = initValue.StringLiteral();
	var arrayLiteral = initValue.arrayLiteral();
	if(expr){
		return getExprAst(expr);
	}else{
		return astLiteral(initValue);
	}
}

const primitive_sizes = {
	'int8_t': 1,
	'int16_t': 2,
	'int32_t': 3,
	'uint8_t': 1,
	'uint16_t': 2,
	'uint32_t': 3,	
	'int': 4,
	'float': 4,
	'char' : 1
};

function primitive_size(t){
	return primitive_sizes[t];
}

function computeDimensions(ast, val, varid){//varid is only for debug purpose.
	var dim = ast.type.dim.dim;
	var nested_val = val && val.aconst;
	var i;
	var size = 1;
	for(i=0;i<dim.length;i++){
		var dimval = dim[i];
		var dimsize = 0;
		if(dimval.id){
			var dimlen = nested_val && nested_val.length;
			var sym = null;
			if(!dimlen){
				sym = getSymbol(dimval.id);
				if(sym && sym.info.value && sym.info.value.iconst){
					dimlen = sym.info.value.iconst;
				}
			}
			//console.log(dimval.id, nested_val.length);
			if(!sym){
		  		addSymbol(dimval.id, { type: {primitive: 'int', is_const: true}
		  			                 , src: ast.src
		  			                 , value: {iconst: dimlen}
		  			                 , is_dim: true
		  			                 } );
	  		}
	  		delete dimval.id;
	  		dimval.iconst = dimlen;
		}
		if(dimval.iconst){
			dimsize = dimval.iconst;
		}
		size *= dimsize;
		nested_val = nested_val && nested_val[0].aconst;
	}
	size *= primitive_size(ast.type.primitive);
	return size;
}

function astVarDef(def){
  //varIdDef: Identifier (ASSIGN initValue)?;
  var varType = def.varType();
  var varIdDef  = def.varIdDef();
  var ast = {
  	type : astVarType(varType),
  	defs : [],
	src: src_info(def)  	
  };

  ast.type.is_const = def.CONST() ? true : false;

  for(var i=0;i<varIdDef.length;i++){
  	  var def = {id: getId(varIdDef[i])};
  	  var initValue = varIdDef[i].initValue();
	  if(initValue){
	  	def.init = astInitValue(initValue);
	  }
	  var syminfo = {type: ast.type, is_const: ast.is_const, src: ast.src, value: def.init};
	  if(ast.type.dim){
	  	var size = computeDimensions(ast, def.init, def.id);
	  	if(size){
	  		syminfo.size = size;
	  	}
	  }  
	  addSymbol(def.id, syminfo);
	  if(ast.type.dim && ast.type.dim.is_ring){
	  	var sym_ringpos = {type: {primitive: 'int'}, is_const: false, src: ast.src, value: {iconst: 0}};
	  	addSymbol("__pos_" + def.id, sym_ringpos);
	  }
	  ast.defs.push(def);
  }
  return ast;
}

function astFormalParam(param){
	//varType Identifier
	var ast= {
		is_const: param.CONST() ? true : false,
		type: astVarType(param.varType()),
		id: getId(param),
		src: src_info(param)		
	};
	addSymbol(ast.id, {type: ast.type, is_const: ast.is_const, src: ast.src, is_formal_param: true, src: ast.src} );	

	if(ast.type.dim && ast.type.dim.is_ring){
		var sym_ringpos = {type: {primitive: 'int'}, is_const: ast.is_const, is_formal_param: true, src: ast.src};
		addSymbol("__pos_" + ast.id, sym_ringpos);
	}

	return ast;
}

function astAssignStmt(stmt){
	//qualIdentifier dimensionSpec? ASSIGN expr
	var qualId = stmt.qualIdentifier();
	var tupleIds = stmt.tupleIds();
	var ast = {
		kind: 'assign',
		expr: getToplevelExprAst(stmt.toplevelExpr()),
		src: src_info(stmt)		
	};
	if(qualId){
		ast.qid = getIdList(qualId);
	}
	if(tupleIds){
		ast.tid = getIdList(tupleIds.identifierList());
	}

	if(ast.qid && ast.qid.length === 1){
		ast.id = ast.qid[0];
	}
	var dimExpr = stmt.dimensionExpr();
	if(dimExpr){
		ast.dim = astDimensionExpr(dimExpr);
	}	
	return ast;
}

function astForStmt(stmt){
	 //FOR identifierList IN rangeType stmtBlock
    var ast = {
    	kind: 'for',
    	ids: getIdList(stmt.identifierList()),
    	range: astRangeType(stmt.rangeType()),
    	body: astStmtBlock(stmt.stmtBlock()),
		src: src_info(stmt)    	
    };
    return ast;
}

function astWhileStmt(stmt){
	//:   WHILE LP expr RP stmtBlock
	var ast = {
		kind: 'while',
		expr: getExprAst(stmt.expr()),
		body: astStmtBlock(stmt.stmtBlock()),
		src: src_info(stmt)		
	};
	return ast;
}

function astIfStmt(stmt){
    //:   IF LP expr RP stmtBlock elseStmt?
    var ast = {
    	kind: 'if',
    	expr: getExprAst(stmt.expr()),
    	if_body: astStmtBlock(stmt.stmtBlock()),
		src: src_info(stmt)    	
    };
    var elseStmt = stmt.elseStmt();
    if(elseStmt){
    	//ELSE (stmtBlock | ifStmt)
    	if(elseStmt.ifStmt()){
    		ast.else_body = astIfStmt(elseStmt.ifStmt());
    	}else{
    		ast.else_body = astStmtBlock(elseStmt.stmtBlock());
    	}    	
    }
    return ast;
}

function astReturnStmt(stmt){
	//returnStmt: RETURN expr;
	return {
		kind: 'return',
		expr: getToplevelExprAst(stmt.expr()),
		src: src_info(stmt)
	};
}

function astAwaitStmt(stmt){
	var ast = {
		kind: 'await',
		expr: {qid : getIdList(stmt.qualIdentifier())}
	};

	if(ast.expr.qid.length === 1){
		ast.expr.id = ast.expr.qid[0];
	}
	return ast;
}

function astSignalStmt(stmt){
	var ast = {
		kind: 'signal',
		expr: {qid : getIdList(stmt.qualIdentifier())}
	};

	if(ast.expr.qid.length === 1){
		ast.expr.id = ast.expr.qid[0];
	}
	return ast;
}

function astStmt(stmt){
	//stmtBlock | ifStmt | forStmt | whileStmt | assignStmt SEMI | functionCall SEMI
	var stmtBlock = stmt.stmtBlock();
	var ifStmt = stmt.ifStmt();
	var whileStmt = stmt.whileStmt();
	var assignStmt = stmt.assignStmt();
	var functionCall = stmt.functionCall();
	var forStmt = stmt.forStmt();
	var retStmt = stmt.returnStmt();
	var awaitStmt = stmt.awaitStmt();
	var signalStmt = stmt.signalStmt();

	if(retStmt){
		return astReturnStmt(retStmt);
	}else
	if(stmtBlock){
		return astStmtBlock(stmtBlock);
	}else
	if(ifStmt){
		return astIfStmt(ifStmt);
	}else
	if(whileStmt){
		return astWhileStmt(whileStmt);		
	}else
	if(assignStmt){
		return astAssignStmt(assignStmt);
	}else
	if(functionCall){
		var ast = getFunctionCallAst(functionCall);
		ast.kind = 'fcall';
		return ast;
	}else
	if(forStmt){
		return astForStmt(forStmt);
	}else
	if(awaitStmt){
		return astAwaitStmt(awaitStmt);
	}else
	if(signalStmt){
		return astSignalStmt(signalStmt);
	}
}

function astStmtBlock(block){
	var blockStmts = block.stmt();
	var stmts = [];
	for(var i=0;i<blockStmts.length;i++){
		stmts.push(astStmt(blockStmts[i]));
	}
	return {stmts: stmts, kind: 'block', src: src_info(block)};
}

function astFuncDef(fdef){
	var ast = {};
	ast.src = src_info(fdef);	
	var returnType = fdef.returnType();
//	var flowType = fdef.flowType();

	if(returnType){
		ast.type = astReturnType(returnType);
	}
	if(fdef.ASYNC()){
		ast.is_async = true;
	}

	ast.id = getId(fdef);
	ast.params = [];

	addSymbol(ast.id, {type:{is_func: true, ftype: ast.type, formal_params: ast.params}, src:  ast.src})

	ctx.symtbl.createNestedScope(ast.id);

	var fparams = fdef.formalParams();
	if(fparams){
		fparams = fparams.formalParam();
		for(var i=0;i<fparams.length;i++){
			ast.params.push(astFormalParam(fparams[i]));
		}
	}
	var varDef = fdef.varDef();
	if(varDef){
		ast.vars = [];
		for(var i=0;i<varDef.length;i++){
			ast.vars.push(astVarDef(varDef[i]));
		}
	}
	ast.body = astStmtBlock(fdef);

	ctx.symtbl.exitNestedScope();

	return ast;
}

function get_token_info(tok){
	return {
		line: tok.line, 
		col: tok.column
	};
}

function src_info(node){
	var src =
	{
		start: get_token_info(node.start),
		end: get_token_info(node.stop)
	};
	return src;
}


function astModule(moduleDef, ast) {
	//ast.name = getId(moduleDef);
	ast.src = src_info(moduleDef);
	ast.asyncs = [];
	var usingSpec = moduleDef.usingSpec();

	if(usingSpec){
		ast.uses = astUsingSpec(usingSpec);
	}else{
		ast.uses = [];
	}
	var varDef = moduleDef.varDef();
	if(varDef){
		if(!ast.vars){
			ast.vars = [];
		}
		for(var i=0;i<varDef.length;i++){
			ast.vars.push(astVarDef(varDef[i]));
		}
	}
/*	var pipeline = moduleDef.pipelineDef();
	if(pipeline) {
		ast.pipeline = {};
		astPipeline(pipeline, ast.pipeline);
	}*/
	var funcDef = moduleDef.funcDef();
	if(funcDef){
		if(!ast.fdefs){
			ast.fdefs = [];
		}
		for(var i=0;i<funcDef.length;i++){
			var fdefAst = astFuncDef(funcDef[i]);
			ast.fdefs.push(fdefAst);
			if(fdefAst.is_async){
				ast.asyncs.push(fdefAst.id);
			}
		}
	}
	/*var effectsDef = moduleDef.effectsDef();
	if(effectsDef){
		ast.effectsMap = astEffectsDef(effectsDef);
	}*/
	ctx.mod_ast = null;
	return ast;
}

function buildAst(parseTree, mod_ast, symtbl) {
	ctx.symtbl = symtbl;
	astModule(parseTree, mod_ast);
	return mod_ast;
}

function getIncludes(moduleDef, symtbl) {
	ctx.symtbl = symtbl;	
	var incSpec = moduleDef.includeSpec();
	if(incSpec){
		return astIncludeSpec(incSpec);
	}

	return null;
}


exports.buildAst = buildAst;
exports.getIncludes = getIncludes;


