var obj = {
    "name": "test_pipeline",
    "src": {
        "start": {
            "line": 1,
            "col": 0
        },
        "end": {
            "line": 6,
            "col": 1
        }
    },
    "uses": [],
    "vars": [],
    "pipeline": {
        "src": {
            "start": {
                "line": 3,
                "col": 0
            },
            "end": {
                "line": 6,
                "col": 1
            }
        },
        "name": "nandu",
        "block": [
            {
                "qname": [
                    "m1"
                ],
                "params": [
                    {
                        "expr": {
                            "bconst": true,
                            "src": {
                                "start": {
                                    "line": 4,
                                    "col": 4
                                },
                                "end": {
                                    "line": 4,
                                    "col": 4
                                }
                            }
                        }
                    }
                ]
            },
            {
                "qname": [
                    "m2"
                ]
            }
        ]
    },
    "fdefs": [],
    "modules": {
        "m1": {
            "name": "m1",
            "src": {
                "start": {
                    "line": 1,
                    "col": 0
                },
                "end": {
                    "line": 18,
                    "col": 0
                }
            },
            "uses": [],
            "vars": [],
            "fdefs": [
                {
                    "src": {
                        "start": {
                            "line": 3,
                            "col": 0
                        },
                        "end": {
                            "line": 12,
                            "col": 0
                        }
                    },
                    "flow": "default",
                    "id": "lol",
                    "params": [],
                    "vars": [
                        {
                            "type": {
                                "primitive": "int",
                                "src": {
                                    "start": {
                                        "line": 4,
                                        "col": 1
                                    },
                                    "end": {
                                        "line": 4,
                                        "col": 9
                                    }
                                },
                                "dim": {
                                    "dim": [
                                        {
                                            "iconst": 2
                                        },
                                        {
                                            "iconst": 2
                                        }
                                    ],
                                    "is_ring": false
                                }
                            },
                            "is_const": false,
                            "defs": [
                                {
                                    "id": "a",
                                    "init": {
                                        "src": {
                                            "start": {
                                                "line": 4,
                                                "col": 13
                                            },
                                            "end": {
                                                "line": 4,
                                                "col": 13
                                            }
                                        },
                                        "iconst": 0
                                    }
                                }
                            ],
                            "src": {
                                "start": {
                                    "line": 4,
                                    "col": 1
                                },
                                "end": {
                                    "line": 4,
                                    "col": 14
                                }
                            }
                        }
                    ],
                    "body": {
                        "stmts": [
                            {
                                "kind": "for",
                                "ids": [
                                    "i"
                                ],
                                "range": {
                                    "from": {
                                        "src": {
                                            "start": {
                                                "line": 5,
                                                "col": 11
                                            },
                                            "end": {
                                                "line": 5,
                                                "col": 11
                                            }
                                        },
                                        "iconst": 0
                                    },
                                    "to": {
                                        "src": {
                                            "start": {
                                                "line": 5,
                                                "col": 13
                                            },
                                            "end": {
                                                "line": 5,
                                                "col": 13
                                            }
                                        },
                                        "iconst": 2
                                    },
                                    "is_inclusive": false,
                                    "src": {
                                        "start": {
                                            "line": 5,
                                            "col": 10
                                        },
                                        "end": {
                                            "line": 5,
                                            "col": 14
                                        }
                                    }
                                },
                                "body": {
                                    "stmts": [
                                        {
                                            "kind": "for",
                                            "ids": [
                                                "j"
                                            ],
                                            "range": {
                                                "from": {
                                                    "src": {
                                                        "start": {
                                                            "line": 6,
                                                            "col": 12
                                                        },
                                                        "end": {
                                                            "line": 6,
                                                            "col": 12
                                                        }
                                                    },
                                                    "iconst": 0
                                                },
                                                "to": {
                                                    "src": {
                                                        "start": {
                                                            "line": 6,
                                                            "col": 14
                                                        },
                                                        "end": {
                                                            "line": 6,
                                                            "col": 14
                                                        }
                                                    },
                                                    "iconst": 2
                                                },
                                                "is_inclusive": false,
                                                "src": {
                                                    "start": {
                                                        "line": 6,
                                                        "col": 11
                                                    },
                                                    "end": {
                                                        "line": 6,
                                                        "col": 15
                                                    }
                                                }
                                            },
                                            "body": {
                                                "stmts": [
                                                    {
                                                        "kind": "assign",
                                                        "qid": [
                                                            "a"
                                                        ],
                                                        "expr": {
                                                            "src": {
                                                                "start": {
                                                                    "line": 7,
                                                                    "col": 11
                                                                },
                                                                "end": {
                                                                    "line": 7,
                                                                    "col": 25
                                                                }
                                                            },
                                                            "op": "+",
                                                            "lexpr": {
                                                                "id": "a",
                                                                "dim": {
                                                                    "dim": [
                                                                        {
                                                                            "id": "i"
                                                                        },
                                                                        {
                                                                            "id": "j"
                                                                        }
                                                                    ],
                                                                    "is_ring": false
                                                                },
                                                                "src": {
                                                                    "start": {
                                                                        "line": 7,
                                                                        "col": 11
                                                                    },
                                                                    "end": {
                                                                        "line": 7,
                                                                        "col": 17
                                                                    }
                                                                }
                                                            },
                                                            "rexpr": {
                                                                "id": "a",
                                                                "dim": {
                                                                    "dim": [
                                                                        {
                                                                            "id": "i"
                                                                        },
                                                                        {
                                                                            "id": "j"
                                                                        }
                                                                    ],
                                                                    "is_ring": false
                                                                },
                                                                "src": {
                                                                    "start": {
                                                                        "line": 7,
                                                                        "col": 19
                                                                    },
                                                                    "end": {
                                                                        "line": 7,
                                                                        "col": 25
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "src": {
                                                            "start": {
                                                                "line": 7,
                                                                "col": 3
                                                            },
                                                            "end": {
                                                                "line": 7,
                                                                "col": 25
                                                            }
                                                        },
                                                        "dim": {
                                                            "dim": [
                                                                {
                                                                    "id": "i"
                                                                },
                                                                {
                                                                    "id": "j"
                                                                }
                                                            ],
                                                            "is_ring": false
                                                        }
                                                    }
                                                ],
                                                "kind": "block",
                                                "src": {
                                                    "start": {
                                                        "line": 6,
                                                        "col": 16
                                                    },
                                                    "end": {
                                                        "line": 8,
                                                        "col": 2
                                                    }
                                                }
                                            },
                                            "src": {
                                                "start": {
                                                    "line": 6,
                                                    "col": 2
                                                },
                                                "end": {
                                                    "line": 8,
                                                    "col": 2
                                                }
                                            }
                                        }
                                    ],
                                    "kind": "block",
                                    "src": {
                                        "start": {
                                            "line": 5,
                                            "col": 15
                                        },
                                        "end": {
                                            "line": 9,
                                            "col": 1
                                        }
                                    }
                                },
                                "src": {
                                    "start": {
                                        "line": 5,
                                        "col": 1
                                    },
                                    "end": {
                                        "line": 9,
                                        "col": 1
                                    }
                                }
                            },
                            {
                                "fcall": {
                                    "qid": [
                                        "next"
                                    ],
                                    "params": []
                                },
                                "src": {
                                    "start": {
                                        "line": 11,
                                        "col": 1
                                    },
                                    "end": {
                                        "line": 11,
                                        "col": 6
                                    }
                                }
                            }
                        ],
                        "kind": "block",
                        "src": {
                            "start": {
                                "line": 3,
                                "col": 0
                            },
                            "end": {
                                "line": 12,
                                "col": 0
                            }
                        }
                    }
                },
                {
                    "src": {
                        "start": {
                            "line": 14,
                            "col": 0
                        },
                        "end": {
                            "line": 18,
                            "col": 0
                        }
                    },
                    "type": {
                        "primitive": "int",
                        "src": {
                            "start": {
                                "line": 14,
                                "col": 0
                            },
                            "end": {
                                "line": 14,
                                "col": 0
                            }
                        }
                    },
                    "id": "main",
                    "params": [],
                    "vars": [
                        {
                            "type": {
                                "primitive": "int",
                                "src": {
                                    "start": {
                                        "line": 15,
                                        "col": 1
                                    },
                                    "end": {
                                        "line": 15,
                                        "col": 1
                                    }
                                }
                            },
                            "is_const": false,
                            "defs": [
                                {
                                    "id": "c",
                                    "init": {
                                        "src": {
                                            "start": {
                                                "line": 15,
                                                "col": 7
                                            },
                                            "end": {
                                                "line": 15,
                                                "col": 7
                                            }
                                        },
                                        "iconst": 0
                                    }
                                }
                            ],
                            "src": {
                                "start": {
                                    "line": 15,
                                    "col": 1
                                },
                                "end": {
                                    "line": 15,
                                    "col": 8
                                }
                            }
                        }
                    ],
                    "body": {
                        "stmts": [
                            {
                                "kind": "assign",
                                "qid": [
                                    "c"
                                ],
                                "expr": {
                                    "src": {
                                        "start": {
                                            "line": 16,
                                            "col": 3
                                        },
                                        "end": {
                                            "line": 16,
                                            "col": 5
                                        }
                                    },
                                    "op": "+",
                                    "lexpr": {
                                        "qid": [
                                            "c"
                                        ]
                                    },
                                    "rexpr": {
                                        "src": {
                                            "start": {
                                                "line": 16,
                                                "col": 5
                                            },
                                            "end": {
                                                "line": 16,
                                                "col": 5
                                            }
                                        },
                                        "iconst": 1
                                    }
                                },
                                "src": {
                                    "start": {
                                        "line": 16,
                                        "col": 1
                                    },
                                    "end": {
                                        "line": 16,
                                        "col": 5
                                    }
                                }
                            },
                            {
                                "fcall": {
                                    "qid": [
                                        "next"
                                    ],
                                    "params": []
                                },
                                "src": {
                                    "start": {
                                        "line": 17,
                                        "col": 1
                                    },
                                    "end": {
                                        "line": 17,
                                        "col": 6
                                    }
                                }
                            }
                        ],
                        "kind": "block",
                        "src": {
                            "start": {
                                "line": 14,
                                "col": 0
                            },
                            "end": {
                                "line": 18,
                                "col": 0
                            }
                        }
                    }
                }
            ]
        },
        "m2": {
            "name": "m2",
            "src": {
                "start": {
                    "line": 1,
                    "col": 0
                },
                "end": {
                    "line": 6,
                    "col": 0
                }
            },
            "uses": [],
            "vars": [],
            "fdefs": [
                {
                    "src": {
                        "start": {
                            "line": 3,
                            "col": 0
                        },
                        "end": {
                            "line": 6,
                            "col": 0
                        }
                    },
                    "flow": "default",
                    "id": "hol",
                    "params": [],
                    "vars": [
                        {
                            "type": {
                                "primitive": "int",
                                "src": {
                                    "start": {
                                        "line": 4,
                                        "col": 1
                                    },
                                    "end": {
                                        "line": 4,
                                        "col": 1
                                    }
                                }
                            },
                            "is_const": false,
                            "defs": [
                                {
                                    "id": "b",
                                    "init": {
                                        "src": {
                                            "start": {
                                                "line": 4,
                                                "col": 7
                                            },
                                            "end": {
                                                "line": 4,
                                                "col": 7
                                            }
                                        },
                                        "iconst": 0
                                    }
                                }
                            ],
                            "src": {
                                "start": {
                                    "line": 4,
                                    "col": 1
                                },
                                "end": {
                                    "line": 4,
                                    "col": 8
                                }
                            }
                        }
                    ],
                    "body": {
                        "stmts": [
                            {
                                "kind": "assign",
                                "qid": [
                                    "b"
                                ],
                                "expr": {
                                    "src": {
                                        "start": {
                                            "line": 5,
                                            "col": 3
                                        },
                                        "end": {
                                            "line": 5,
                                            "col": 5
                                        }
                                    },
                                    "op": "+",
                                    "lexpr": {
                                        "qid": [
                                            "b"
                                        ]
                                    },
                                    "rexpr": {
                                        "src": {
                                            "start": {
                                                "line": 5,
                                                "col": 5
                                            },
                                            "end": {
                                                "line": 5,
                                                "col": 5
                                            }
                                        },
                                        "iconst": 1
                                    }
                                },
                                "src": {
                                    "start": {
                                        "line": 5,
                                        "col": 1
                                    },
                                    "end": {
                                        "line": 5,
                                        "col": 5
                                    }
                                }
                            }
                        ],
                        "kind": "block",
                        "src": {
                            "start": {
                                "line": 3,
                                "col": 0
                            },
                            "end": {
                                "line": 6,
                                "col": 0
                            }
                        }
                    }
                }
            ]
        }
    }
};

function fcall(obj){
	var s="";
	if(obj.qid.join("_") != "next"){
		s=s+obj.qid.join("_")+"(";
		for(var i in obj.params)
			s=s+expr(obj.params[i].expr)+", ";
		if(obj.params.length>0)
			return (s.substring(0,s.length-2)+")");
		else return s+")";
	}
	else
	{
		var ind=states.indexOf(cur_mod);
		ind++;
		if(ind<states.length){
			// cur_state=states[ind];
			return "__state = __"+states[ind];
		}
		else{
			// cur_state=states[0];
			return "__state = __"+states[0];
		}
	}
}

function expr(obj){
	// console.log(obj);
	var str="";
	if(typeof obj.op != 'undefined'){
		// console.log(obj);
		str = "("+expr(obj.lexpr) + obj.op + expr(obj.rexpr)+")";
	}
	else if(typeof obj.qid != 'undefined'){
		str = str + obj.qid.join(".");
        if(typeof obj.dim != 'undefined'){
            for(var i in obj.dim.dim){
                str=str + "[" + expr(obj.dim.dim[i]) + "]";
            }
        }
	}
	else if(typeof obj.iconst != 'undefined'){
		str = obj.iconst;
	}
	else if(typeof obj.id != 'undefined'){
		str = obj.id;
        if(typeof obj.dim != 'undefined'){
            for(var i in obj.dim.dim){
                str=str + "[" + expr(obj.dim.dim[i]) + "]";
            }
        }
	}
	else if(typeof obj.fcall != 'undefined'){
		str = fcall(obj.fcall);
	}
	return str;
}

function block(obj,str){
	str.push("{");
	if(typeof obj.stmts != 'undefined'){
		for(var i in obj.stmts){
			stmts(obj.stmts[i],str);
		}
	}
	str.push("}");
}

function stmts(obj,str){
	if(typeof obj.kind != 'undefined'){
		switch(obj.kind){
			case "assign":
				str.push(expr(obj) + "=" + expr(obj.expr) + ";");
				break;
			case "if":
				// console.log(obj);
				str.push("if(" + expr(obj.expr) + ")");
				stmts(obj.if_body,str);
				if(typeof obj.else_body !='undefined'){
					str.push("else");
					stmts(obj.else_body,str)
				}
				break;
			case "for":
				str.push("for(int " + obj.ids[0] + "=" + expr(obj.range.from) + "; " + obj.ids[0] + "<" + expr(obj.range.to) + "; " + obj.ids[0] + "++)");
				stmts(obj.body,str);
				break;
			case "while":
				str.push("while(" + expr(obj.expr) + ")");
				stmts(obj.body,str);
				break;
			case "return":
				str.push("return " + expr(obj.expr));
				break;
			case "block":
				block(obj,str);
				break;
		}
	}
	else if(typeof obj.fcall != 'undefined'){
		str.push(fcall(obj.fcall)+";");
	}
}

function type_resolve(obj){
	var primitive=obj.primitive;
	var dim="";
	if(typeof obj.dim != 'undefined')
		for(var i in obj.dim.dim){
			dim=dim+"["+expr(obj.dim.dim[i])+"]";
		}
	return {primitive: primitive, dim: dim};
}

function vars(obj){
	var s="";
	if(typeof obj.is_const != 'undefined'){
		if(obj.is_const === "true")
			s=s+"const ";
	}
	var type = type_resolve(obj.type);
	s=s+type.primitive+" ";
	// console.log(s);
	var temp=[];
	for(var i in obj.defs){
		if(typeof obj.defs[i].init != 'undefined')
			temp.push(obj.defs[i].id+type.dim+"="+expr(obj.defs[i].init));
		else
			temp.push(obj.defs[i].id+type.dim);
	}
	s=s+temp.join(", ");
	return s;
}

function params(obj){
	var s="";
	if(typeof obj.is_const != 'undefined'){
		if(obj.is_const=="true")
			s=s+"const ";
	}
	var type=type_resolve(obj.type);
	if(typeof obj.init != 'undefined')
		s=s+type.primitive+" "+obj.id+"="+expr(obj.init);	
	else
		s=s+type.primitive+" "+obj.id;	
	return s;
}

function fdefs(obj,str){
	// console.log(code);
	var s="";
	if(typeof obj.type != 'undefined'){
		s=s+obj.type.primitive+" ";
	}
	else
		s=s+"void ";
	s=s+"__"+cur_mod+obj.id+"(";
	var temp=[];
	for(var i in obj.params){
		temp.push(params(obj.params[i]));
	}
	s=s+temp.join(", ");
	s=s+")";
	str.push(s);

	str.push("{");
	// str.push("__state = __" + states[0] + ";");
	// cur_ind=0;

	for(var i in obj.vars){
		str.push(vars(obj.vars[i])+";");
	}
	stmts(obj.body,str);
    str.push("}");
}

function getDefaultFlow(obj){
	var s="";
	for(var i in obj){
		if(obj[i].flow === "default"){
			return obj[i].id;
		}
	}
}


var code=[];
var states=[];
for(var i in obj.pipeline.block){
	states.push(obj.pipeline.block[i].qname.join('_'));
}
code.push("enum __" + obj.pipeline.name + "{__" + states.join(", __") + "} __state = __" + states[0] + ";");
var cur_mod="";
for(var j in states){
	cur_mod=states[j];
	for(var i in obj.modules[cur_mod].fdefs){
	    fdefs(obj.modules[cur_mod].fdefs[i],code);
	}
}
cur_state=states[0];
code.push("void loop()");
code.push("{");
code.push("switch(__state)");
code.push("{");
for(var i in states){
	code.push("case __" + states[i] + ":");
	code.push("__state = __"+states[0]+";");
	if(obj.pipeline.block[i].qname.length > 1)
		code.push("__" + states[i] + "();");
	else{
		code.push("__" + states[i] + getDefaultFlow(obj.modules[states[i]].fdefs) + "();");
	}
	code.push("break;");
}
code.push("default :");
code.push("__state = __" + states[0] + ";");
code.push("}");
code.push("}");

code.push("void setup()");
code.push("{");
// Calling all inits
for(var i in states){
	// console.log(obj.modules[states[i]].fdefs.indexOf("init"));
	for(var j in obj.modules[states[i]].fdefs){
		if(obj.modules[states[i]].fdefs[j].id === "init")
			code.push("__"+states[i]+"init();");
	}
}
code.push("}");
console.log(code.join('\n'));