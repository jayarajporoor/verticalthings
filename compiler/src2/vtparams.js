module.exports = [
	  "-xast", __dirname + "/pseq.js"
	, "-xast", __dirname + "/duseq.js"
	, "-xast", __dirname + "/stdalloc.js"
	, "-xast", __dirname + "/CodeGen/matrixExprSimplify.js"	
	, "-xast", __dirname + "/CodeGen/loopGen.js"		
	, "-xast", __dirname + "/CodeGen/loopMerge.js"			
	, "-xast", __dirname + "/codegen.js"
	, "-xast", __dirname + "/codepp.js"	
];