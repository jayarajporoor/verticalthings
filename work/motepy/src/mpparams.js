module.exports = [
	  "-xast", __dirname + "/pseq.js"
	, "-xast", __dirname + "/alloc/duseq.js"
	, "-xast", __dirname + "/alloc/stdalloc.js"
	, "-xast", __dirname + "/optimizers/simplify_matrix_expr.js"
	, "-xast", __dirname + "/optimizers/loop_gen.js"
	, "-xast", __dirname + "/optimizers/loop_fusion.js"
	, "-xast", __dirname + "/code/codegen.js"
	, "-xast", __dirname + "/code/codepp.js"
];
