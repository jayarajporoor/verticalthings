const util = require('util')
var fs = require('fs');
const path = require('path');
var antlr4 = require('antlr4/index');
var VTLexer = require(__dirname + '/../grammar/out/parser/VTLexer');
var VTParser = require(__dirname + '/../grammar/out/parser/VerticalThings');
var astBuilder = require("./astbuilder.js");
var SymbolTable = require("./symtbl.js");

var parseErrorListener = {};
var errors=0;
parseErrorListener.syntaxError = function(offendingToken, line, column, msg, err){
//	console.log('stx', line);
	errors++;
}
parseErrorListener.reportAttemptingFullContext = function(offendingToken, line, column, msg, err){
	//console.log('ctx', line);
	//errors++;
}
parseErrorListener.reportAmbiguity = function(offendingToken, line, column, msg, err){
	//console.log('amb', line);
	//errors++;
}

parseErrorListener.reportContextSensitivity = function(offendingToken, line, column, msg, err){
	//console.log(line, column);
}

function parse(srcpath, input) {
	console.log("Parsing " + srcpath);
    var chars = new antlr4.InputStream(input);
    var lexer = new VTLexer.VTLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new VTParser.VerticalThings(tokens);
    parser.buildParseTrees = true;
    parser.addErrorListener(parseErrorListener);
    errors=0;
    var tree = parser.module();
    if(errors > 0) {
    	console.log("Please fix the syntax errors in the module " + srcpath);
    	process.exit(1);
    }
    return tree;
}

function loadModule(ast, name, basepath, symtbl){
	var filepath = basepath + "/" + name + ".vt";
	var src;
	try{
		src = fs.readFileSync(filepath, 'utf8');
	}catch(e){
		console.log("Cannot load module ", name, ". File cannot be accessed: ", filepath);
		process.exit(1);
	}
	var tree = parse(filepath, src);
	symtbl.createNestedScope(name);
	var mod_ast = astBuilder.buildAst(tree, symtbl);
	if(mod_ast.name !== name){
		console.log("Module name ", mod_ast.name, " does not match the file name for ", filepath);
		process.exit(1);
	}else{
		ast.modules[name] = mod_ast;
		for(var j=0;j<mod_ast.uses.length;j++){
			loadModule(ast, mod_ast.uses[j].name, basepath, symtbl);
		}
	}
	symtbl.exitNestedScope();
}

function loadPipelineBlock(block, basepath, symtbl){
	for(var i=0;i<block.length;i++){
		var entry = block[i];
		if(entry.qname){
			var name = entry.qname[0];
			if(!ast.modules[name]) {
				loadModule(ast, name, basepath, symtbl);
			}
		}else{
			loadPipelineBlock(entry, basepath, symtbl);//this is a nested block
		}
	}
}

function loadPipeline(ast, basepath, symtbl) {
	var pipeline = ast.pipeline;
	if(!pipeline) {
		console.log("Pipeline definition not found.");
		process.exit(1);
	}
	loadPipelineBlock(ast.pipeline.block, basepath, symtbl);
}

if(process.argv.length <= 2) {
	console.log("Please provide the pipeline definition file name to be compiled.");
	process.exit(1);
}

var srcpath = process.argv[2];

var printAst = false;
var printSymtbl = false;
var printColor = false;
var printJson = false;

var ast_transforms = [];
var code_path = null;
var ctx_attr = null;
var config_path;

var mod_params = {};

for(var i=3;i<process.argv.length;i++){
	switch(process.argv[i]){
		case "-ast" :
			printAst = true;
		break;
		case "-symtbl":
			printSymtbl = true;
		break;
		case "-color":
			printColor = true;
		break;
		case "-json":
			printJson = true;
		break;
		case "-xast":
			if(process.argv[i+1]){
				ast_transforms.push(process.argv[i+1]);
				i++;
			}else{
				console.log("Please provide the AST transform module file path.");
			}
		break;
		case "-code":
			if(process.argv[i+1]){
				code_path = process.argv[i+1];
				i++;
			}else{
				code_path = "";
			}
		break;
		case "-ctx":
			if(process.argv[i+1]){
				ctx_attr = process.argv[i+1];
				i++;
			}else{
				ctx_attr = "";
			}			
		break;
		case "-config":
			if(process.argv[i+1]){
				config_path = process.argv[i+1];
				i++;
			}else{
				console.log("Please specify the configuration file after the -config parameter.");
			}					
		break;
		default:
			var arg = process.argv[i];
			var argval = true;
			var next_arg = process.argv[i+1];
			if(next_arg && next_arg[0] !== '-'){
				argval = next_arg;
				i++;
			}
			mod_params[arg] = argval;
		break;
	}
}

var input = fs.readFileSync(srcpath, 'utf8');
var tree = parse(srcpath, input);
var symtbl = new SymbolTable("<root>");
var ast = astBuilder.buildAst(tree, symtbl);

ast.modules = {};

loadPipeline(ast, path.dirname(srcpath), symtbl);

var transform_ctx = {symtbl: symtbl, params: mod_params, resources: {}};

if(config_path){
	transform_ctx.config = JSON.parse(fs.readFileSync(config_path));
}

for(var i=0;i<ast_transforms.length;i++){
	var xmod = require(ast_transforms[i]);
	if(!xmod.transform){
		console.log("The transform module ", ast_transforms[i], " do not have transform(ast, ctx) function defined.");
	}else{
		xmod.transform(ast, transform_ctx);
	}
}

function print_object(obj){
	if(printJson){
		console.log(JSON.stringify(obj, null, 4));
	}
	else{
		console.log(util.inspect(obj, false, 500, printColor));
	}	
}

if(printAst){
	print_object(ast);
}	

if(printSymtbl){
	console.log(util.inspect(symtbl, false, 500, printColor));
}

if(code_path !== null){
	if(!transform_ctx.code || transform_ctx.code.length === 0){
		console.log("Code not generated!");
	}else{
		var code_str = transform_ctx.code.join("\n");
		if(code_path === ""){
			console.log(code_str);
		}else{
			fs.writeFileSync(code_path, code_str);
		}
	}
}

if(ctx_attr !== null){
	if(ctx_attr === ""){
		print_object(transform_ctx);
	}else{
		print_object(transform_ctx[ctx_attr]);
	}
}