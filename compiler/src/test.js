Parsing ../apps/icane/icane_test.vtl
Parsing ../apps/icane/normalize_mpu_ag.vtl
{
    "name": "icane_test",
    "uses": [],
    "vars": [],
    "pipeline": {
        "name": "icane_test",
        "block": [
            {
                "qname": [
                    "normalize_mpu_ag"
                ]
            }
        ]
    },
    "fdefs": [],
    "modules": {
        "normalize_mpu_ag": {
            "name": "normalize_mpu_ag",
            "uses": [],
            "vars": [
                {
                    "type": {
                        "primitive": "float",
                        "dim": {
                            "dim": [
                                {
                                    "iconst": 400
                                }
                            ],
                            "is_ring": true
                        }
                    },
                    "ids": [
                        "normAX",
                        "normAY",
                        "normAZ"
                    ],
                    "is_const": false
                },
                {
                    "type": {
                        "primitive": "float",
                        "dim": {
                            "dim": [
                                {
                                    "iconst": 400
                                }
                            ],
                            "is_ring": true
                        }
                    },
                    "ids": [
                        "normGX",
                        "normGY",
                        "normGZ"
                    ],
                    "is_const": false
                }
            ],
            "fdefs": [
                {
                    "flow": "default",
                    "id": "normalizeAG",
                    "params": [],
                    "vars": [],
                    "body": {
                        "stmts": [
                            {
                                "kind": "assign",
                                "qid": [
                                    "dst",
                                    "y"
                                ],
                                "expr": {
                                    "op": "cast",
                                    "type": {
                                        "primitive": "float"
                                    },
                                    "expr": {
                                        "op": "cast",
                                        "type": {
                                            "qid": [
                                                "v",
                                                "y"
                                            ]
                                        },
                                        "expr": {
                                            "up": "-",
                                            "expr": {
                                                "op": "cast",
                                                "type": {
                                                    "primitive": "float"
                                                },
                                                "expr": {
                                                    "qid": [
                                                        "vmin",
                                                        "y"
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        ],
                        "kind": "block"
                    }
                }
            ]
        }
    }
}
