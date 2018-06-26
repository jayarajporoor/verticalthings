'use strict';

var AliasTable = require("./aliastbl.js");
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
    for(var i=0;i<vr.defs;i++){
      var sym = this.symtbl.lookup(vr.defs[i].id);
      if(sym){
        if(sym.has_init)
          init_syms.push(sym);
        else
          noinit_syms.push(sym);
      }
    }
  }

  vardefs(vardefs, is_mod){   
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
        entry.undef = syms;
      }
    }
    if(entry){
      this.seq.push(entry);
    }
  }

  expr(ast, use_syms, def_syms){
    var id = ast.qid ? ast.qid[0] : null;

    if(id){
      var sym = this.aliastbl.lookup_sym(id);
      if(sym){
        if(sym.info.type.dim){
          use_syms.push(sym);
        }
      }
    }else{
      if(ast.expr){
        this.expr(ast.expr, use_syms, def_syms);
      }
      if(ast.lexpr){
        this.expr(ast.lexpr, use_syms, def_syms);
      }
      if(ast.rexpr){
        this.expr(ast.rexpr, use_syms, def_syms);
      }

      if(ast.fcall){
        this.fcall(ast.fcall, use_syms, def_syms);
      }
    }
  }

  fcall(ast, use_syms, def_syms){
      var fname = ast.qid[0];
      var qname= ast.qid[1];
      if(qname){
        if(ast_util.vector_ops.indexOf(qname) >= 0){
          var sym = this.aliastbl.lookup_sym(fname);
          use_syms.push(sym);
          def_syms.push(sym);
        }
      }else{
        var mod_ast;
        if(fname === 'next'){
          if(this.current_pipeline_entry.next){
            mod_ast = this.root_ast.modules[this.current_pipeline_entry.next.name];
          }else{
            console.log("Next flow module not found for ", this.current_pipeline_entry.qname);
            return;
          }
        }else{
          mod_ast = this.root_ast.modules[this.current_module];
        }
        var fdef_ast=null;
        var mod_name = "<unknown>";
        if(mod_ast){
          mod_name = mod_ast.name;
          if(fname === 'next'){
            fdef_ast = ast_util.find_flow(mod_ast, this.next_qname[1]);
          }else{
            fdef_ast = ast_util.find_fdef(mod_ast, fname);
          }
        }
        if(fdef_ast){
          this.aliastbl.enterFunctionCall(fname, ast.params);
          this.symtbl.enterNestedScope(fname);
          fdef(fdef_ast);
          this.symtbl.exitNestedScope();
          this.aliastbl.exitFunctionCall();          
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
        this.fcall(ast.fcall, use_syms, def_syms);
      break;
      case 'assign':
        var use_syms = [], def_syms=[];
        this.expr(ast.expr, use_syms, def_syms);
        var sym = this.aliastbl.lookup_sym(ast.qid[0]);
        if(sym){
          if(sym.info.type.dim){
            def_syms.push(sym);
          }
        }else{
          console.log("Symbol", ast.qid[0], "cannot be looked up");
        }
        aggr_seq  = [{use: use_syms, def: def_syms}];        
      break;
    }
    return aggr_seq;
  }

  fdef(ast){
    if(ast.vars){
      this.vardefs(ast.vars);
    }
    var seq = this.stmt(ast.body);
    array_push(this.seq, seq);
  }

  flow(mod, flow_name){
    if(!mod.fdefs) return;

    var fname = flow_name.length == 1? null : flow_name[1];
    var named_fdef = null;

    for(var i=0;i<mod.fdefs.length;i++){
      var fdef = mod.fdefs[i];
      if(fname){
        if(fdef.id === fname && fdef.flow){
          named_fdef = mod.fdefs[i];
        }
      }else{
        if(fdef.flow === 'default'){
          named_fdef = mod.fdefs[i];
        }
      }
    }

    if(named_fdef){
      this.symtbl.enterNestedScope(named_fdef.id);
      if(mod.vars){
        this.vardefs(mod.vars, true);
      }     
      this.fdef(named_fdef);
      this.symtbl.exitNestedScope();
    }else{
      console.log("DUSeq: Flow name", flow_name, "not found");
    }
  }

  pipeline_block(block){    
    for(var i=0;i<block.length;i++){
      var entry = block[i];
      if(entry.qname){
        this.current_pipeline_entry = entry;
        var name = entry.qname[0];
        var mod = this.root_ast.modules[name];
        this.current_module = name;
        if(mod) {
          this.symtbl.enterNestedScope(name);
          this.flow(mod, entry.qname);
          this.symtbl.exitNestedScope();
        }
      }else{
        this.pipeline_block(entry);//this is a nested block
      }
    }
  }

  build(ast, symtbl){
    this.root_ast = ast;
    symtbl.setRootScope();
    this.symtbl = symtbl;
    this.aliastbl = new AliasTable(symtbl);
    if(ast.pipeline){
      this.pipeline_block(ast.pipeline.block);
    }else{
      console.log("DUSeq.build: No pipeline found");
    }
    return this.seq;
  }

}

exports.DUSeq = DUSeq;

exports.transform = function(ast, ctx){
  var duseq = new DUSeq();
  ctx.duseq = duseq.build(ast, ctx.symtbl);  
};
