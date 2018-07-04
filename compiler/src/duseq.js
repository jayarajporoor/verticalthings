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

function seq_merge(seq_entry, use_syms, def_syms, undef_syms, use_found, def_found, undef_found){
  if(seq_entry.undef){
    for(var i=0;i<seq_entry.undef.length;i++){
        var m = seq_entry.undef[i];
        var scoped_name = ast_util.get_scoped_name(m);
        if(!undef_found[scoped_name]){
          undef_found[scoped_name] = true;
          undef_syms.push(m);
        }
    }
  }
  if(seq_entry.use){
    for(var i=0;i<seq_entry.use.length;i++){
        var m = seq_entry.use[i];
        var scoped_name = ast_util.get_scoped_name(m);
        if(!use_found[scoped_name]){
          use_found[scoped_name] = true;
          use_syms.push(m);
        }
    }
  }
  if(seq_entry.def){
    for(var i=0;i<seq_entry.def.length;i++){
        var m = seq_entry.def[i];
        var scoped_name = ast_util.get_scoped_name(m);
        if(!def_found[scoped_name]){
          def_found[scoped_name] = true;
          def_syms.push(m);
        }
    }
  }
}

function loop_merge(expr_seq, stmt_seq){
  var use_syms = [], def_syms = [], undef_syms = [];
  var use_found ={}, def_found = {}, undef_found = {};
  for(var i=0;i<expr_seq.length;i++){
    seq_merge(expr_seq[i], use_syms, def_syms, undef_syms, use_found, def_found, undef_found);
  }
  for(var i=0;i<stmt_seq.length;i++){
    seq_merge(stmt_seq[i], use_syms, def_syms, undef_syms, use_found, def_found, undef_found);
  }
  return [{use: use_syms, def: def_syms, undef: undef_syms}];
}

class DUSeq{
  constructor(ctx) {
    this.seq = [];
    this.ctx = ctx;
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

  effects(ast, qid, use_syms, def_syms, write_params){
      var effects_found = false;
      var mod_name = this.symtbl.getCurrentScope().parent.name;
      var uses = this.root_ast.modules[mod_name].uses;
      qid = qid.slice();//take a copy!
      if(qid.length > 1){
        var firstname = qid.shift();
      }
      var scoped_qname = qid.join("_");

      for(var i=0; uses && (i < uses.length);i++){
        var usename = uses[i].name;
        var mod_use = this.root_ast.modules[usename];
        var effects = mod_use.effectsMap[scoped_qname];
        if(effects){
          effects_found = true;
          for(var k=0;k<effects.length;k++){
            var effect = effects[k];
            switch(effect.kind){
              case 'write':                 
                var writeparam = ast.params[effect.expr.param].expr;
                var sym = this.dynscope.lookup_sym(writeparam && ast_util.get_var_id(writeparam) );
                if(sym && sym.info.type.dim){
                  def_syms.push(sym);
                }
                write_params.push(effect.expr.param);
              break;
              case 'acquire':
                if(effect.expr.params){
                  var effect_param_values = [];
                  for(var k=0;k<effect.expr.params.length;k++){
                    var eparam = effect.expr.params[k];
                    var param = typeof eparam.param !== 'undefined' ? ast.params[eparam.param].expr : eparam;
                    var val = param.iconst || param.fconst;//currently only considering params/constant values.
                    if(typeof val === 'undefined'){
                      val = this.dynscope.lookup_sym(param);
                      if(val){
                        val = val.info.value;
                      }
                    }
                    if(typeof val !== 'undefined'){
                      effect_param_values.push(val);
                    }
                  }
                  var effect_term_str = effect.expr.id + "(" +  effect_param_values.join(",") + ")";
                  if(!this.ctx.resources[effect_term_str]){
                    this.ctx.resources[effect_term_str] = [];
                  }
                  if(this.ctx.resources[effect_term_str].indexOf(mod_name) < 0){
                    this.ctx.resources[effect_term_str].push(mod_name);
                  }
                }
              break;
            }
          }
          //console.log("Effects for ", scoped_qname, effects);
        }
      }    
      return effects_found;
  }

  fcall(ast, use_syms, def_syms, seq){
      var fname = ast.qid[0];
      var qname= ast.qid[1];
      var is_flow = false;
      var qid_unresolved = null;

      if(qname){
        if(ast_util.vector_ops.indexOf(qname) >= 0){
          var sym = this.dynscope.lookup_sym(fname);
          use_syms.push(sym);
          def_syms.push(sym);
        }else{
          qid_unresolved = ast.qid;
        }
      }else{
        var mod_ast;
        if(fname === 'next'){
          if(this.pipeline_stack[0].next){//index 0 is top of the stack.
            mod_ast = this.root_ast.modules[this.pipeline_stack[0].next.qname[0]];
            is_flow = true;
          }else{
            vtbuild.warning("Next flow module not found for ", this.pipeline_stack[0].qname);
            return;
          }
        }else{
          mod_ast = this.root_ast.modules[this.pipeline_stack[0].qname[0]];
        }

        var fdef_ast=null;
        var mod_name = null;
        if(mod_ast){
          mod_name = mod_ast.name;
          if(fname === 'next'){
            fdef_ast = ast_util.find_flow(mod_ast, this.pipeline_stack[0].qname[1]);
          }else{
            fdef_ast = ast_util.find_fdef(mod_ast, fname);
          }
        }
        if(fdef_ast){
          var saved_scope_name = this.symtbl.getCurrentScope().name;
          var saved_mod_scope_name;
          this.symtbl.exitNestedScope();//of the caller          
          if(is_flow){
            saved_mod_scope_name = this.symtbl.getCurrentScope().name;
            this.symtbl.exitNestedScope();//of the caller module
            this.symtbl.enterNestedScope(mod_name); 
            this.vardefs(mod_ast.vars, seq, true);
            this.pipeline_stack.unshift(this.pipeline_stack[0].next);
            //console.log("Save and exit scope ", saved_mod_scope_name, " and enter ", mod_name);
          }          

          this.dynscope.enterFunctionCall(fdef_ast.id, ast.params);

          this.symtbl.enterNestedScope(fdef_ast.id);//of the calleee

          this.fdef(fdef_ast, seq);
          this.symtbl.exitNestedScope();//of the callee          

          if(is_flow){
            this.pipeline_stack.shift();//remove top of the stack.
            this.symtbl.exitNestedScope();
            this.symtbl.enterNestedScope(saved_mod_scope_name); 
            //console.log("Exit and re-enter ", saved_mod_scope_name, " ", this.symtbl.getCurrentScope().name);
          }
          this.symtbl.enterNestedScope(saved_scope_name);//of the caller
          this.dynscope.exitFunctionCall();                    
        }else{
          qid_unresolved = ast.qid;
        }
      }

      if(qid_unresolved){
        var write_params = [];

        var effects_found = this.effects(ast, qid_unresolved, use_syms, def_syms, write_params);

        for(var k=0;k<ast.params.length;k++){
          if(write_params.indexOf(k) < 0){
            var param = ast.params[k].expr;
            var sym = this.dynscope.lookup_sym(ast_util.get_var_id(param) );
            if(sym && sym.info.type.dim){
              use_syms.push(sym);
            }
          }
        }
        if(!effects_found){
          vtbuild.warning("Unresolved function name ", qid_unresolved, " in scope ", this.symtbl.getCurrentScope().name);
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
      case 'for':
      case 'while':
        var expr_seq = [];
        if(ast.expr){
          var use_syms = [], def_syms=[];
          this.expr(ast.expr, use_syms, def_syms, expr_seq);
          if(use_syms.length > 0 || def_syms.length > 0){
            expr_seq.unshift({use: use_syms, def: def_syms});
          }
        }
        var stmt_seq = this.stmt(ast.body);
        aggr_seq = loop_merge(expr_seq, stmt_seq);
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
          vtbuild.warning("Unresolved identifier ", id, " in scope ", this.symtbl.getCurrentScope().name);
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
      vtbuild.warning("DUSeq: Flow name", flow_name, "not found");
    }
  }

  enter_pipeline(entry){    
    this.pipeline_stack = [entry];
    var name = entry.qname[0];
    var mod = this.root_ast.modules[name];
    if(mod) {
      this.symtbl.enterNestedScope(name);
      this.flow(mod, entry.qname);
      this.symtbl.exitNestedScope();
    }
  }

  build(ast, symtbl){
    this.root_ast = ast;
    symtbl.setRootScope();
    this.symtbl = symtbl;
    this.mods_visited = {};
    this.dynscope = new DynScope(symtbl);
    if(ast.pipeline && ast.pipeline.block.length > 0){
      this.enter_pipeline(ast_util.first_pipeline_entry(ast));
    }else{
      vtbuild.warning("DUSeq.build: No/empty pipeline found");
    }
    return this.seq;
  }

}

exports.DUSeq = DUSeq;

exports.transform = function(ast, ctx){
  var duseq = new DUSeq(ctx);
  ctx.duseq = duseq.build(ast, ctx.symtbl);  
  if(ctx.params["-resources"]){
    for(var res in ctx.resources){
      var usage = ctx.resources[res];
      if(usage.length === 1){
        console.log("Resource capability ", res, " acquired by module: ", usage[0]);
      }else{
        console.log("Resource conflict! The resource capability ", res
                    , " is acquired by multiple modules. Modules: ", usage.join(","));
      }
    }
  }
};

exports.name = "duseq";
