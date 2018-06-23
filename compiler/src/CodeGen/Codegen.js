var str = [
                {
                    "flow": "default",
                    "id": "temp",
                    "params": [
                        {
                            "is_const": false,
                            "type": {
                                "primitive": "int"
                            },
                            "id": "a"
                        },
                        {
                            "is_const": false,
                            "type": {
                                "primitive": "int",
                                "dim": {
                                    "dim": [
                                        {
                                            "id": "N"
                                        }
                                    ],
                                    "is_ring": false
                                }
                            },
                            "id": "b"
                        }
                    ],
                    "vars": [
                        {
                            "type": {
                                "primitive": "int"
                            },
                            "is_const": false,
                            "ids": [
                                {
                                    "id": "a",
                                    "init": {
                                        "iconst": 0
                                    }
                                },
                                {
                                    "id": "b",
                                    "init": {
                                        "iconst": 1
                                    }
                                }
                            ]
                        },
                        {
                            "type": {
                                "primitive": "int",
                                "dim": {
                                    "dim": [
                                        {
                                            "iconst": 10
                                        }
                                    ],
                                    "is_ring": false
                                }
                            },
                            "is_const": false,
                            "ids": [
                                {
                                    "id": "c"
                                }
                            ]
                        }
                    ],
                    "body": {
                        "stmts": [
                            {
                                "kind": "if",
                                "expr": {
                                    "lexpr": {
                                        "lexpr": {
                                            "qid": [
                                                "a"
                                            ]
                                        },
                                        "rexpr": {
                                            "iconst": 3
                                        },
                                        "op": "||"
                                    },
                                    "rexpr": {
                                        "lexpr": {
                                            "qid": [
                                                "a"
                                            ]
                                        },
                                        "rexpr": {
                                            "iconst": 0
                                        },
                                        "op": "||"
                                    },
                                    "op": "&&"
                                },
                                "if_body": {
                                    "stmts": [
                                        {
                                            "kind": "assign",
                                            "qid": [
                                                "a"
                                            ],
                                            "expr": {
                                                "op": "+",
                                                "lexpr": {
                                                    "qid": [
                                                        "a"
                                                    ]
                                                },
                                                "rexpr": {
                                                    "qid": [
                                                        "b"
                                                    ]
                                                }
                                            }
                                        }
                                    ],
                                    "kind": "block"
                                },
                                "else_body": {
                                    "kind": "if",
                                    "expr": {
                                        "lexpr": {
                                            "qid": [
                                                "a"
                                            ]
                                        },
                                        "rexpr": {
                                            "iconst": 2
                                        },
                                        "op": "||"
                                    },
                                    "if_body": {
                                        "stmts": [
                                            {
                                                "kind": "assign",
                                                "qid": [
                                                    "a"
                                                ],
                                                "expr": {
                                                    "op": "+",
                                                    "lexpr": {
                                                        "qid": [
                                                            "a"
                                                        ]
                                                    },
                                                    "rexpr": {
                                                        "qid": [
                                                            "b"
                                                        ]
                                                    }
                                                }
                                            }
                                        ],
                                        "kind": "block"
                                    }
                                }
                            },
                            {
                                "kind": "for",
                                "ids": [
                                    "i"
                                ],
                                "range": {
                                    "from": {
                                        "iconst": 0
                                    },
                                    "to": {
                                        "id": "n"
                                    },
                                    "is_inclusive": false
                                },
                                "body": {
                                    "stmts": [
                                        {
                                            "kind": "assign",
                                            "qid": [
                                                "a"
                                            ],
                                            "expr": {
                                                "op": "+",
                                                "lexpr": {
                                                    "qid": [
                                                        "a"
                                                    ]
                                                },
                                                "rexpr": {
                                                    "qid": [
                                                        "b"
                                                    ]
                                                }
                                            }
                                        }
                                    ],
                                    "kind": "block"
                                }
                            },
                            {
                                "kind": "while",
                                "expr": {
                                    "op": "<",
                                    "lexpr": {
                                        "qid": [
                                            "a"
                                        ]
                                    },
                                    "rexpr": {
                                        "qid": [
                                            "b"
                                        ]
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
                                                "op": "+",
                                                "lexpr": {
                                                    "qid": [
                                                        "a"
                                                    ]
                                                },
                                                "rexpr": {
                                                    "qid": [
                                                        "b"
                                                    ]
                                                }
                                            }
                                        }
                                    ],
                                    "kind": "block"
                                }
                            },
                            {
                                "fcall": {
                                    "qid": [
                                        "function_call"
                                    ],
                                    "params": [
                                        {
                                            "expr": {
                                                "qid": [
                                                    "a"
                                                ]
                                            }
                                        },
                                        {
                                            "expr": {
                                                "qid": [
                                                    "b"
                                                ]
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "kind": "assign",
                                "qid": [
                                    "a"
                                ],
                                "expr": {
                                    "op": "+",
                                    "lexpr": {
                                        "qid": [
                                            "a"
                                        ]
                                    },
                                    "rexpr": {
                                        "fcall": {
                                            "qid": [
                                                "function_call"
                                            ],
                                            "params": [
                                                {
                                                    "expr": {
                                                        "qid": [
                                                            "a"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "expr": {
                                                        "qid": [
                                                            "b"
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                }
                            },
                            {
                                "kind": "return",
                                "expr": {
                                    "op": "+",
                                    "lexpr": {
                                        "qid": [
                                            "a"
                                        ]
                                    },
                                    "rexpr": {
                                        "qid": [
                                            "b"
                                        ]
                                    }
                                }
                            }
                        ],
                        "kind": "block"
                    }
                }
            ]
function fcall(obj){
	var s="";
	s=s+obj.qid.join(".")+"(";
	for(var i in obj.params)
		s=s+expr(obj.params[i].expr)+", ";
	return (s.substring(0,s.length-2)+")");
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
	}
	else if(typeof obj.iconst != 'undefined'){
		str = obj.iconst;
	}
	else if(typeof obj.id != 'undefined'){
		str = obj.id;
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
				str.push(obj.qid.join(".") + "=" + expr(obj.expr) + ";");
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
				str.push("for(" + obj.ids[0] + "=" + expr(obj.range.from) + "; " + obj.ids[0] + "<" + expr(obj.range.to) + "; " + obj.ids[0] + "++)");
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
	for(var i in obj.ids){
		if(typeof obj.ids[i].init != 'undefined')
			temp.push(obj.ids[i].id+type.dim+"="+expr(obj.ids[i].init));
		else
			temp.push(obj.ids[i].id+type.dim);
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
	var s="";
	if(typeof obj.type != 'undefined'){
		s=s+obj.type+" ";
	}
	else
		s=s+"void ";
	s=s+obj.id+"(";
	var temp=[];
	for(var i in obj.params){
		temp.push(params(obj.params[i]));
	}
	s=s+temp.join(", ");
	s=s+")";
	str.push(s);

	str.push("{");

	for(var i in obj.vars){
		str.push(vars(obj.vars[i])+";");
	}
	stmts(obj.body,str);
}
var a=[];
fdefs(str[0],a);
console.log(a.join('\n'));
// console.log(expr(str));