'use strict';

var DynScope = require("./dynscope.js");
var ast_util = require("./ast_util.js");

function array_push(target, obj){
  for(var i=0;i<obj.length;i++){
    target.push(obj[i]);
  }
}

function branch_merge(seq1, seq2){
  return seq1.concat(seq2);
}

class DUSeq{
  constructor() {
    this.seq = [];
  }

  vardef(vr, init_syms, noinit_syms){

    if(!vr.type.dim){//if not array type, ignore.
      return;
    }
    for(var i=0;i<vr.defs.length;i++){
      var sym = this.symtbl.lookup(vr.defs[i].id);
      if(sym){
        if(sym.has_init)
          init_syms.push(sym);
        else
          noinit_syms.push(sym);
      }else{
        console.log("Symbol not found for vardef ", vr.defs[i].id);
      }
    }
  }

  vardefs(vardefs, seq, is_mod){   
    var init_syms = [], noinit_syms=[];
    for(var i=0;i < vardefs.length;i++){
      this.vardef(vardefs[i], init_syms, noinit_syms);
    }

    var entry=null;
    if(is_mod){
      var syms = init_syms.concat(noinit_syms);
      if(syms.length > 0){
        entry = {mem: syms};
      }
    }else{
      if(init_syms.length > 0){
        entry = {def: syms, kind: 'init'};
      }
      if(noinit_syms.length > 0){
        if(!entry) entry = {};
        entry.undef = noinit_syms;
      }
    }
    if(entry){
      seq.push(entry);
    }
  }

  expr(ast, use_syms, def_syms, seq){    
    var id = ast.qid ? ast.qid[0] : ast.id;

    if(id){
      var sym = this.dynscope.lookup_sym(id);
      if(sym){
        if(sym.info.type.dim){
          use_syms.push(sym);
        }
      }
    }else{
      if(ast.expr){
        this.expr(ast.expr, use_syms, def_syms, seq);
      }
      if(ast.lexpr){
        this.expr(ast.lexpr, use_syms, def_syms, seq);
      }
      if(ast.rexpr){
        this.expr(ast.rexpr, use_syms, def_syms, seq);
      }

      if(ast.fcall){
        this.fcall(ast.fcall, use_syms, def_syms, seq);
      }
    }
  }

  fcall(ast, use_syms, def_syms, seq){
      var fname = ast.qid[0];
      var qname= ast.qid[1];
      if(qname){
        if(ast_util.vector_ops.indexOf(qname) >= 0){
          var sym = this.dynscope.lookup_sym(fname);
          use_syms.push(sym);
          def_syms.push(sym);
        }
      }else{
        var mod_ast;
        if(fname === 'next'){
          if(this.current_pipeline_entry.next){
            mod_ast = this.root_ast.modules[this.current_pipeline_entry.next.qname[0]];
          }else{
            console.log("Next flow module not found for ", this.current_pipeline_entry.qname);
            return;
          }
        }else{
          mod_ast = this.root_ast.modules[this.current_module];
        }
        var fdef_ast=null;
        var mod_name = null;
        if(mod_ast){
          mod_name = mod_ast.name;
          if(fname === 'next'){
            fdef_ast = ast_util.find_flow(mod_ast, this.current_pipeline_entry.qname[1]);
          }else{
            fdef_ast = ast_util.find_fdef(mod_ast, fname);
          }
        }
        if(fdef_ast){
          var saved_scope_name = this.symtbl.getCurrentScope().name;
          var saved_mod_scope_name;
          this.symtbl.exitNestedScope();//of the caller          
          if(mod_name){
            saved_mod_scope_name = this.symtbl.getCurrentScope().name;
            this.symtbl.exitNestedScope();//of the caller module
            this.symtbl.enterNestedScope(mod_name); 
            this.vardefs(mod_ast.vars, seq, true);
            //console.log("Save and exit scope ", saved_mod_scope_name, " and enter ", mod_name);
          }          
          this.dynscope.enterFunctionCall(fdef_ast.id, ast.params);

          this.symtbl.enterNestedScope(fdef_ast.id);//of the calleee
          this.fdef(fdef_ast, seq);
          this.symtbl.exitNestedScope();//of the callee          

          if(saved_mod_scope_name){
            this.symtbl.exitNestedScope();
            this.symtbl.enterNestedScope(saved_mod_scope_name); 
            //console.log("Exit and re-enter ", saved_mod_scope_name, " ", this.symtbl.getCurrentScope().name);
          }
          this.symtbl.enterNestedScope(saved_scope_name);//of the caller
          this.dynscope.exitFunctionCall();          
        }else{
          console.log("DUSeq: Fdef ast not found for: ", fname, "in module ", mod_name);
        }
      }
  }

  stmt(ast){
    var aggr_seq = [];
    switch(ast.kind){
      case 'block': 
        for(var i=0;i<ast.stmts.length;i++){
          var seq = this.stmt(ast.stmts[i]);
          array_push(aggr_seq, seq);
        }
      break;
      case 'if':
        var seq_if = this.stmt(ast.if_body);
        var seq_else = ast.else_body ? this.stmt(ast.else_body) : null;
        if(seq_else){
          aggr_seq = branch_merge(seq_if, seq_else);
        }else{
          aggr_seq = seq_if;
        }     
      break;
      case 'fcall':
        var use_syms =[], def_syms = [];
        this.fcall(ast.fcall, use_syms, def_syms, aggr_seq);
        aggr_seq.unshift({use: use_syms, def: def_syms});//add to beginning.        
      break;
      case 'assign':
        var use_syms = [], def_syms=[];
        this.expr(ast.expr, use_syms, def_syms, aggr_seq);
        var id = ast.qid[0] || ast.id;
        var sym = this.dynscope.lookup_sym(id);
        if(sym){
          if(sym.info.type.dim){
            def_syms.push(sym);
          }
        }else{
          console.log("Symbol", id, "cannot be looked up");
        }
        aggr_seq.unshift({use: use_syms, def: def_syms});//add to beginning.
      break;
    }
    return aggr_seq;
  }

  fdef(ast, seq){
    if(ast.vars){
      this.vardefs(ast.vars, seq);
    }
    var stmt_seq = this.stmt(ast.body);
    array_push(seq, stmt_seq);
  }

  flow(mod, flow_name){
    var mod_name = flow_name[0];

    this.vardefs(mod.vars, this.seq, true);

    var fdef = ast_util.find_flow(mod, flow_name[1]);

    if(fdef){
      this.dynscope.enterFlow(fdef.id);
      this.symtbl.enterNestedScope(fdef.id);
      this.fdef(fdef, this.seq);
      this.symtbl.exitNestedScope();
      this.dynscope.exitFunctionCall();
    }else{
      console.log("DUSeq: Flow name", flow_name, "not found");
    }
  }

  pipeline_entry(entry){    
    this.current_pipeline_entry = entry;
    var name = entry.qname[0];
    var mod = this.root_ast.modules[name];
    this.current_module = name;
    if(mod) {
      this.symtbl.enterNestedScope(name);
      this.flow(mod, entry.qname);
      this.symtbl.exitNestedScope();
    }
  }

  pipeline(entry){
    this.pipeline_entry(entry);
  }

  build(ast, symtbl){
    this.root_ast = ast;
    symtbl.setRootScope();
    this.symtbl = symtbl;
    this.mods_visited = {};
    this.dynscope = new DynScope(symtbl);
    if(ast.pipeline && ast.pipeline.block.length > 0){
      this.pipeline(ast.pipeline.block[0]);
    }else{
      console.log("DUSeq.build: No/empty pipeline found");
    }
    return this.seq;
  }

}

exports.DUSeq = DUSeq;

exports.transform = function(ast, ctx){
  var duseq = new DUSeq();
  ctx.duseq = duseq.build(ast, ctx.symtbl);  
};
