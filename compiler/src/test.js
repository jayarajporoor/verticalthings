Parsing test/test_pipeline.vt
Parsing test/test_mod.vt
Parsing test/arduino.vt
SymbolTable {
  name: 'test_pipeline',
  parent: undefined,
  symbols: {},
  scopes: 
   { test_mod: 
      SymbolTable {
        name: 'test_mod',
        parent: [Circular],
        symbols: 
         { buf: 
            { name: 'buf',
              info: 
               { type: 
                  { primitive: 'float',
                    src: { start: { line: 3, col: 0 }, end: { line: 3, col: 8 } },
                    dim: { dim: [ { iconst: 30 } ], is_ring: false },
                    is_const: false },
                 is_const: undefined,
                 src: { start: { line: 3, col: 0 }, end: { line: 3, col: 13 } },
                 value: undefined,
                 size: 120 },
              scope_names: [ 'test_mod' ] },
           mpu: 
            { name: 'mpu',
              info: 
               { type: 
                  { qid: [ 'MPU' ],
                    id: 'MPU',
                    src: { start: { line: 5, col: 0 }, end: { line: 5, col: 0 } },
                    is_const: false },
                 is_const: undefined,
                 src: { start: { line: 5, col: 0 }, end: { line: 5, col: 7 } },
                 value: undefined },
              scope_names: [ 'test_mod' ] },
           test_func: 
            { name: 'test_func',
              info: 
               { type: { is_func: true, ftype: undefined, formal_params: [] },
                 src: { start: { line: 7, col: 0 }, end: { line: 14, col: 0 } } },
              scope_names: [ 'test_mod' ] },
           temp: 
            { name: 'temp',
              info: 
               { type: 
                  { is_func: true,
                    ftype: 
                     { primitive: 'void',
                       src: { start: { line: 16, col: 0 }, end: { line: 16, col: 0 } } },
                    formal_params: [] },
                 src: { start: { line: 16, col: 0 }, end: { line: 25, col: 0 } } },
              scope_names: [ 'test_mod' ] } },
        scopes: 
         { test_func: 
            SymbolTable {
              name: 'test_func',
              parent: [Circular],
              symbols: 
               { sum: 
                  { name: 'sum',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 8, col: 4 }, end: { line: 8, col: 4 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 8, col: 4 }, end: { line: 8, col: 17 } },
                       value: undefined },
                    scope_names: [ 'test_mod', 'test_func' ] },
                 size: 
                  { name: 'size',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 8, col: 4 }, end: { line: 8, col: 4 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 8, col: 4 }, end: { line: 8, col: 17 } },
                       value: undefined },
                    scope_names: [ 'test_mod', 'test_func' ] } },
              scopes: {},
              current_scope: [Circular] },
           temp: 
            SymbolTable {
              name: 'temp',
              parent: [Circular],
              symbols: 
               { sum1: 
                  { name: 'sum1',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 17, col: 4 }, end: { line: 17, col: 4 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 17, col: 4 }, end: { line: 17, col: 12 } },
                       value: undefined },
                    scope_names: [ 'test_mod', 'temp' ] },
                 A: 
                  { name: 'A',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 18, col: 4 }, end: { line: 18, col: 10 } },
                          dim: { dim: [ { iconst: 20 } ], is_ring: false },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 18, col: 4 }, end: { line: 18, col: 13 } },
                       value: undefined,
                       size: 80 },
                    scope_names: [ 'test_mod', 'temp' ] },
                 B: 
                  { name: 'B',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 19, col: 4 }, end: { line: 19, col: 10 } },
                          dim: { dim: [ { iconst: 20 } ], is_ring: false },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 19, col: 4 }, end: { line: 19, col: 13 } },
                       value: undefined,
                       size: 80,
                       is_temp: true },
                    scope_names: [ 'test_mod', 'temp' ] },
                 C: 
                  { name: 'C',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 20, col: 4 }, end: { line: 20, col: 4 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 20, col: 4 }, end: { line: 20, col: 9 } },
                       value: undefined },
                    scope_names: [ 'test_mod', 'temp' ] },
                 __t0: 
                  { name: '__t0',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 19, col: 4 }, end: { line: 19, col: 10 } },
                          dim: { dim: [ { iconst: 20 } ], is_ring: false },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 19, col: 4 }, end: { line: 19, col: 13 } },
                       value: undefined,
                       size: 80,
                       is_temp: true },
                    scope_names: [ 'test_mod', 'temp' ] },
                 __t1: 
                  { name: '__t1',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 19, col: 4 }, end: { line: 19, col: 10 } },
                          dim: { dim: [ { iconst: 20 } ], is_ring: false },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 19, col: 4 }, end: { line: 19, col: 13 } },
                       value: undefined,
                       size: 80,
                       is_temp: true },
                    scope_names: [ 'test_mod', 'temp' ] },
                 __t2: 
                  { name: '__t2',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 19, col: 4 }, end: { line: 19, col: 10 } },
                          dim: { dim: [], is_ring: false },
                          is_const: false },
                       src: { start: { line: 19, col: 4 }, end: { line: 19, col: 13 } },
                       size: 80,
                       is_temp: true },
                    scope_names: [ 'test_mod', 'temp' ] } },
              scopes: {},
              current_scope: [Circular] } },
        current_scope: [Circular] },
     arduino: 
      SymbolTable {
        name: 'arduino',
        parent: [Circular],
        symbols: {},
        scopes: {},
        current_scope: [Circular] } },
  current_scope: [Circular],
  src: { start: { line: 2, col: 0 }, end: { line: 6, col: 0 } },
  uses: [],
  vars: [],
  pipeline: 
   { src: { start: { line: 4, col: 0 }, end: { line: 6, col: 0 } },
     name: 'test_pipeline',
     block: 
      [ { qname: [ 'test_mod', 'test_func' ] },
        src: { start: { line: 4, col: 22 }, end: { line: 6, col: 0 } } ],
     srcpath: 'test/test_pipeline.vt' },
  fdefs: [],
  modules: 
   { test_mod: 
      { fdefs: 
         [ { src: { start: { line: 7, col: 0 }, end: { line: 14, col: 0 } },
             flow: 'default',
             id: 'test_func',
             params: [],
             vars: 
              [ { type: 
                   { primitive: 'int',
                     src: { start: { line: 8, col: 4 }, end: { line: 8, col: 4 } },
                     is_const: false },
                  defs: [ { id: 'sum' }, { id: 'size' } ],
                  src: { start: { line: 8, col: 4 }, end: { line: 8, col: 17 } } } ],
             body: 
              { stmts: 
                 [ { fcall: 
                      { qid: [ 'pinPeripheral' ],
                        id: 'pinPeripheral',
                        params: 
                         [ { expr: 
                              { src: { start: { line: 9, col: 18 }, end: { line: 9, col: 18 } },
                                iconst: 3 } },
                           { expr: 
                              { src: { start: { line: 9, col: 20 }, end: { line: 9, col: 20 } },
                                iconst: 4 } } ] },
                     src: { start: { line: 9, col: 4 }, end: { line: 9, col: 21 } },
                     kind: 'fcall' },
                   { fcall: 
                      { qid: [ 'mpu', 'getFIFOBytes' ],
                        params: 
                         [ { expr: { qid: [ 'buf' ], id: 'buf' } },
                           { expr: { qid: [ 'size' ], id: 'size' } } ] },
                     src: { start: { line: 10, col: 1 }, end: { line: 10, col: 27 } },
                     kind: 'fcall' },
                   { kind: 'for',
                     ids: [ 'i' ],
                     range: 
                      { from: 
                         { src: { start: { line: 11, col: 14 }, end: { line: 11, col: 14 } },
                           iconst: 0 },
                        to: 
                         { src: { start: { line: 11, col: 16 }, end: { line: 11, col: 16 } },
                           iconst: 20 },
                        is_inclusive: false,
                        src: { start: { line: 11, col: 13 }, end: { line: 11, col: 18 } } },
                     body: 
                      { stmts: 
                         [ { fcall: { qid: [ 'temp' ], id: 'temp', params: [] },
                             src: { start: { line: 12, col: 8 }, end: { line: 12, col: 13 } },
                             kind: 'fcall' } ],
                        kind: 'block',
                        src: { start: { line: 11, col: 19 }, end: { line: 13, col: 4 } } },
                     src: { start: { line: 11, col: 4 }, end: { line: 13, col: 4 } } } ],
                kind: 'block',
                src: { start: { line: 7, col: 0 }, end: { line: 14, col: 0 } } } },
           { src: { start: { line: 16, col: 0 }, end: { line: 25, col: 0 } },
             type: 
              { primitive: 'void',
                src: { start: { line: 16, col: 0 }, end: { line: 16, col: 0 } } },
             id: 'temp',
             params: [],
             vars: 
              [ { type: 
                   { primitive: 'int',
                     src: { start: { line: 17, col: 4 }, end: { line: 17, col: 4 } },
                     is_const: false },
                  defs: [ { id: 'sum1' } ],
                  src: { start: { line: 17, col: 4 }, end: { line: 17, col: 12 } } },
                { type: 
                   { primitive: 'int',
                     src: { start: { line: 18, col: 4 }, end: { line: 18, col: 10 } },
                     dim: { dim: [ { iconst: 20 } ], is_ring: false },
                     is_const: false },
                  defs: [ { id: 'A' } ],
                  src: { start: { line: 18, col: 4 }, end: { line: 18, col: 13 } } },
                { type: 
                   { primitive: 'int',
                     src: { start: { line: 19, col: 4 }, end: { line: 19, col: 10 } },
                     dim: { dim: [ { iconst: 20 } ], is_ring: false },
                     is_const: false },
                  defs: [ { id: 'B' } ],
                  src: { start: { line: 19, col: 4 }, end: { line: 19, col: 13 } } },
                { type: 
                   { primitive: 'int',
                     src: { start: { line: 20, col: 4 }, end: { line: 20, col: 4 } },
                     is_const: false },
                  defs: [ { id: 'C' } ],
                  src: { start: { line: 20, col: 4 }, end: { line: 20, col: 9 } } },
                { type: { primitive: 'int', is_const: false },
                  defs: [ { id: '__t0' } ] },
                { type: { primitive: 'int', is_const: false },
                  defs: [ { id: '__t1' } ] },
                { type: { primitive: 'int', is_const: false },
                  defs: [ { id: '__t2' } ] } ],
             body: 
              { stmts: 
                 [ { kind: 'for',
                     ids: [ '__i' ],
                     range: { from: { iconst: 0 }, to: { iconst: 20 }, is_inclusive: false },
                     body: 
                      { kind: 'block',
                        stmts: 
                         [ { kind: 'assign',
                             qid: [ 'B' ],
                             expr: 
                              { src: { start: { line: 21, col: 8 }, end: { line: 21, col: 8 } },
                                iconst: 0 },
                             src: { start: { line: 21, col: 4 }, end: { line: 21, col: 8 } },
                             id: 'B',
                             dim: { dim: [ { id: '__i' } ] } } ] } },
                   { kind: 'assign',
                     qid: [ 'C' ],
                     expr: 
                      { src: { start: { line: 22, col: 7 }, end: { line: 22, col: 7 } },
                        iconst: 0 },
                     src: { start: { line: 22, col: 4 }, end: { line: 22, col: 7 } },
                     id: 'C' },
                   { kind: 'assign',
                     id: '__t2',
                     dim: undefined,
                     expr: { iconst: 0 } },
                   { kind: 'for',
                     ids: [ '__i' ],
                     range: { from: { iconst: 0 }, to: { iconst: 20 }, is_inclusive: false },
                     body: 
                      { kind: 'block',
                        stmts: 
                         [ { kind: 'assign',
                             qid: [ 'A' ],
                             expr: 
                              { src: { start: { line: 23, col: 8 }, end: { line: 23, col: 8 } },
                                iconst: 0 },
                             src: { start: { line: 23, col: 4 }, end: { line: 23, col: 8 } },
                             id: 'A',
                             dim: { dim: [ { id: '__i' } ] } },
                           { kind: 'assign',
                             id: '__t0',
                             expr: 
                              { src: { start: { line: 24, col: 9 }, end: { line: 24, col: 13 } },
                                op: '+',
                                lexpr: { qid: [ 'B' ], id: 'B', dim: { dim: [ { id: '__i' } ] } },
                                rexpr: { qid: [ 'A' ], id: 'A', dim: { dim: [ { id: '__i' } ] } } } },
                           { kind: 'assign',
                             id: '__t1',
                             expr: 
                              { src: { start: { line: 24, col: 17 }, end: { line: 24, col: 19 } },
                                op: '+',
                                lexpr: { qid: [ 'B' ], id: 'B', dim: { dim: [ { id: '__i' } ] } },
                                rexpr: { qid: [ 'A' ], id: 'A', dim: { dim: [ { id: '__i' } ] } } } },
                           { kind: 'assign',
                             id: '__t2',
                             dim: undefined,
                             expr: 
                              { op: '+',
                                lexpr: 
                                 { src: { start: { line: 24, col: 8 }, end: { line: 24, col: 20 } },
                                   op: '*',
                                   lexpr: { id: '__t0' },
                                   rexpr: { id: '__t1' } },
                                rexpr: { id: '__t2', dim: undefined } } } ] } },
                   { kind: 'assign', id: 'C', expr: { id: '__t2' } } ],
                kind: 'block',
                src: { start: { line: 16, col: 0 }, end: { line: 25, col: 0 } } } } ],
        vars: 
         [ { type: 
              { primitive: 'float',
                src: { start: { line: 3, col: 0 }, end: { line: 3, col: 8 } },
                dim: { dim: [ { iconst: 30 } ], is_ring: false },
                is_const: false },
             defs: [ { id: 'buf' } ],
             src: { start: { line: 3, col: 0 }, end: { line: 3, col: 13 } } },
           { type: 
              { qid: [ 'MPU' ],
                id: 'MPU',
                src: { start: { line: 5, col: 0 }, end: { line: 5, col: 0 } },
                is_const: false },
             defs: [ { id: 'mpu' } ],
             src: { start: { line: 5, col: 0 }, end: { line: 5, col: 7 } } } ],
        name: 'test_mod',
        src: { start: { line: 1, col: 0 }, end: { line: 25, col: 0 } },
        uses: [ { name: 'arduino' } ],
        srcpath: 'test/test_mod.vt' },
     arduino: 
      { fdefs: [],
        vars: [],
        name: 'arduino',
        src: { start: { line: 1, col: 0 }, end: { line: 9, col: 0 } },
        uses: [],
        effectsMap: 
         { pinPeripheral: 
            [ { kind: 'acquire',
                expr: 
                 { id: 'pin',
                   params: 
                    [ { param: 0 },
                      { src: { start: { line: 4, col: 37 }, end: { line: 4, col: 37 } },
                        iconst: 4 } ] } } ],
           getFIFOBytes: 
            [ { kind: 'write', expr: { param: 0 } },
              { kind: 'cpu',
                expr: 
                 { src: { start: { line: 7, col: 18 }, end: { line: 7, col: 18 } },
                   iconst: 1000 } },
              { kind: 'power',
                expr: 
                 { id: 'i2c',
                   params: 
                    [ { src: { start: { line: 7, col: 40 }, end: { line: 7, col: 40 } },
                        iconst: 0 } ] },
                ops: [ 'HIGH' ] } ] },
        srcpath: 'test/arduino.vt' } } }
Warnings: 
[ { text: 'Symbol  __i  not found' },
  { text: 'Symbol  __i  not found' },
  { text: 'Symbol  __i  not found' },
  { text: 'Symbol  __i  not found' },
  { text: 'Symbol  __i  not found' },
  { text: 'Symbol  __i  not found' } ]
