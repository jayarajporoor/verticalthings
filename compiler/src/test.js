Parsing ../apps/icane/icane_test.vtl
Parsing ../apps/icane/mpu_acq.vtl
Parsing ../apps/icane/normalize_mpu_ag.vtl
Parsing ../apps/icane/tlcfeaturizer.vtl
Parsing ../apps/icane/protonn.vtl
Parsing ../apps/icane/thresholding.vtl
Parsing ../apps/icane/majority_vote.vtl
Parsing ../apps/icane/toggle_led.vtl
Parsing ../apps/icane/ble_send.vtl
{ name: 'icane_test',
  src: { start: { line: 1, col: 0 }, end: { line: 15, col: 1 } },
  uses: [],
  vars: [],
  pipeline: 
   { src: { start: { line: 3, col: 0 }, end: { line: 15, col: 1 } },
     name: 'icane_test',
     block: 
      [ { qname: [ 'mpu_acq' ] },
        { qname: [ 'normalize_mpu_ag' ] },
        { qname: [ 'tlcfeaturizer' ] },
        { qname: [ 'protonn' ] },
        { qname: [ 'thresholding' ] },
        { qname: [ 'majority_vote' ],
          params: 
           [ { expr: 
                { src: { start: { line: 9, col: 15 }, end: { line: 9, col: 15 } },
                  iconst: 10 } } ] },
        [ { qname: [ 'toggle_led', 'on' ] },
          { qname: [ 'ble_send' ],
            params: 
             [ { name: 'timeout',
                 expr: 
                  { src: { start: { line: 12, col: 19 }, end: { line: 12, col: 19 } },
                    iconst: 3000 } } ] },
          { qname: [ 'toggle_led', 'off' ] },
          src: { start: { line: 10, col: 1 }, end: { line: 14, col: 1 } } ],
        src: { start: { line: 3, col: 20 }, end: { line: 15, col: 0 } } ] },
  fdefs: [],
  modules: 
   { mpu_acq: 
      { name: 'mpu_acq',
        src: { start: { line: 1, col: 0 }, end: { line: 52, col: 0 } },
        uses: [ { name: 'arduino' } ],
        vars: 
         [ { type: 
              { primitive: 'int',
                src: { start: { line: 5, col: 6 }, end: { line: 5, col: 6 } } },
             is_const: true,
             defs: 
              [ { id: 'N',
                  init: 
                   { src: { start: { line: 5, col: 14 }, end: { line: 5, col: 14 } },
                     iconst: 64 } } ],
             src: { start: { line: 5, col: 0 }, end: { line: 5, col: 16 } } },
           { type: 
              { qid: [ 'MPU6050' ],
                src: { start: { line: 7, col: 0 }, end: { line: 7, col: 0 } } },
             is_const: false,
             defs: [ { id: 'mpu1' } ],
             src: { start: { line: 7, col: 0 }, end: { line: 7, col: 12 } } },
           { type: 
              { primitive: 'int',
                src: { start: { line: 8, col: 0 }, end: { line: 8, col: 5 } },
                dim: { dim: [ { id: 'N' } ], is_ring: false } },
             is_const: false,
             defs: [ { id: 'fifoBuffer' } ],
             src: { start: { line: 8, col: 0 }, end: { line: 8, col: 17 } } } ],
        fdefs: 
         [ { src: { start: { line: 11, col: 0 }, end: { line: 26, col: 0 } },
             type: 
              { primitive: 'void',
                src: { start: { line: 11, col: 0 }, end: { line: 11, col: 0 } } },
             id: 'init',
             params: 
              [ { is_const: true,
                  type: 
                   { primitive: 'boolean',
                     src: { start: { line: 11, col: 16 }, end: { line: 11, col: 16 } } },
                  id: 'i2c_arduino',
                  src: { start: { line: 11, col: 10 }, end: { line: 11, col: 24 } } } ],
             vars: [],
             body: 
              { stmts: 
                 [ { kind: 'if',
                     expr: { qid: [ 'i2c_arduino' ] },
                     if_body: 
                      { stmts: 
                         [ { fcall: { qid: [ 'Wire', 'begin' ], params: [] },
                             src: { start: { line: 13, col: 4 }, end: { line: 13, col: 15 } } },
                           { fcall: 
                              { qid: [ 'Wire', 'setClock' ],
                                params: 
                                 [ { expr: 
                                      { src: { start: { line: 14, col: 18 }, end: { line: 14, col: 18 } },
                                        iconst: 400000 } } ] },
                             src: { start: { line: 14, col: 4 }, end: { line: 14, col: 24 } } } ],
                        kind: 'block',
                        src: { start: { line: 12, col: 17 }, end: { line: 15, col: 1 } } },
                     src: { start: { line: 12, col: 1 }, end: { line: 17, col: 1 } },
                     else_body: 
                      { stmts: 
                         [ { fcall: 
                              { qidCpp: [ 'FastWire', 'setup' ],
                                params: 
                                 [ { expr: 
                                      { src: { start: { line: 16, col: 20 }, end: { line: 16, col: 20 } },
                                        iconst: 400 } },
                                   { expr: 
                                      { bconst: true,
                                        src: { start: { line: 16, col: 25 }, end: { line: 16, col: 25 } } } } ] },
                             src: { start: { line: 16, col: 4 }, end: { line: 16, col: 29 } } } ],
                        kind: 'block',
                        src: { start: { line: 15, col: 6 }, end: { line: 17, col: 1 } } } },
                   { fcall: { qid: [ 'mpu1', 'init' ], params: [] },
                     src: { start: { line: 19, col: 1 }, end: { line: 19, col: 11 } } },
                   { fcall: { qid: [ 'mpu1', 'dmpInitialize' ], params: [] },
                     src: { start: { line: 21, col: 1 }, end: { line: 21, col: 20 } } },
                   { fcall: 
                      { qid: [ 'mpu1', 'setDMPEnabled' ],
                        params: 
                         [ { expr: 
                              { bconst: true,
                                src: { start: { line: 23, col: 20 }, end: { line: 23, col: 20 } } } } ] },
                     src: { start: { line: 23, col: 1 }, end: { line: 23, col: 24 } } },
                   { kind: 'assign',
                     qid: [ 'fifoPacketSize' ],
                     expr: 
                      { fcall: { qid: [ 'mpu1', 'dmpGetFIFOPacketSize' ], params: [] },
                        src: { start: { line: 25, col: 18 }, end: { line: 25, col: 44 } } },
                     src: { start: { line: 25, col: 1 }, end: { line: 25, col: 44 } } } ],
                kind: 'block',
                src: { start: { line: 11, col: 0 }, end: { line: 26, col: 0 } } } },
           { src: { start: { line: 28, col: 0 }, end: { line: 52, col: 0 } },
             flow: 'default',
             id: 'acq',
             params: [],
             vars: [],
             body: 
              { stmts: 
                 [ { kind: 'assign',
                     qid: [ 'mpuIntStatus' ],
                     expr: 
                      { fcall: { qid: [ 'mpu1', 'getIntStatus' ], params: [] },
                        src: { start: { line: 29, col: 16 }, end: { line: 29, col: 34 } } },
                     src: { start: { line: 29, col: 1 }, end: { line: 29, col: 34 } } },
                   { kind: 'if',
                     expr: 
                      { src: { start: { line: 31, col: 5 }, end: { line: 31, col: 43 } },
                        lexpr: 
                         { src: { start: { line: 31, col: 6 }, end: { line: 31, col: 21 } },
                           op: '&',
                           lexpr: { qid: [ 'mpuIntStatus' ] },
                           rexpr: 
                            { src: { start: { line: 31, col: 21 }, end: { line: 31, col: 21 } },
                              iconst: 16 } },
                        rexpr: 
                         { op: '==',
                           lexpr: { qid: [ 'fifoCount' ] },
                           rexpr: 
                            { src: { start: { line: 31, col: 43 }, end: { line: 31, col: 43 } },
                              iconst: 1024 },
                           src: { start: { line: 31, col: 30 }, end: { line: 31, col: 43 } } },
                        op: '||' },
                     if_body: 
                      { stmts: 
                         [ { fcall: 
                              { qid: [ 'debug_print' ],
                                params: 
                                 [ { expr: 
                                      { fcall: { qid: [ 'millis' ], params: [] },
                                        src: { start: { line: 36, col: 14 }, end: { line: 36, col: 21 } } } } ] },
                             src: { start: { line: 36, col: 2 }, end: { line: 36, col: 22 } } },
                           { fcall: 
                              { qid: [ 'debug_print' ],
                                params: [ { sconst: '": FIFO Overflow!"' } ] },
                             src: { start: { line: 37, col: 2 }, end: { line: 37, col: 32 } } },
                           { fcall: { qid: [ 'mpu1', 'resetFIFO' ], params: [] },
                             src: { start: { line: 38, col: 2 }, end: { line: 38, col: 17 } } },
                           { kind: 'assign',
                             qid: [ 'samplesAfterReset' ],
                             expr: 
                              { src: { start: { line: 39, col: 22 }, end: { line: 39, col: 22 } },
                                iconst: 0 },
                             src: { start: { line: 39, col: 2 }, end: { line: 39, col: 22 } } },
                           { kind: 'assign',
                             qid: [ 'numNewReadings' ],
                             expr: 
                              { src: { start: { line: 40, col: 19 }, end: { line: 40, col: 19 } },
                                iconst: 0 },
                             src: { start: { line: 40, col: 2 }, end: { line: 40, col: 19 } } } ],
                        kind: 'block',
                        src: { start: { line: 31, col: 48 }, end: { line: 43, col: 1 } } },
                     src: { start: { line: 31, col: 1 }, end: { line: 51, col: 1 } },
                     else_body: 
                      { kind: 'if',
                        expr: 
                         { src: { start: { line: 43, col: 13 }, end: { line: 43, col: 28 } },
                           op: '&',
                           lexpr: { qid: [ 'mpuIntStatus' ] },
                           rexpr: 
                            { src: { start: { line: 43, col: 28 }, end: { line: 43, col: 28 } },
                              iconst: 2 } },
                        if_body: 
                         { stmts: 
                            [ { kind: 'while',
                                expr: 
                                 { op: '<',
                                   lexpr: { qid: [ 'fifoCount' ] },
                                   rexpr: { qid: [ 'fifoPacketSize' ] },
                                   src: { start: { line: 44, col: 8 }, end: { line: 44, col: 20 } } },
                                body: 
                                 { stmts: 
                                    [ { kind: 'assign',
                                        qid: [ 'fifoCount' ],
                                        expr: 
                                         { fcall: { qid: [ 'mpu1', 'getFIFOCount' ], params: [] },
                                           src: { start: { line: 45, col: 16 }, end: { line: 45, col: 34 } } },
                                        src: { start: { line: 45, col: 4 }, end: { line: 45, col: 34 } } } ],
                                   kind: 'block',
                                   src: { start: { line: 44, col: 36 }, end: { line: 46, col: 2 } } },
                                src: { start: { line: 44, col: 2 }, end: { line: 46, col: 2 } } },
                              { kind: 'if',
                                expr: 
                                 { op: '>=',
                                   lexpr: { qid: [ 'fifoCount' ] },
                                   rexpr: { qid: [ 'fifoPacketSize' ] },
                                   src: { start: { line: 47, col: 5 }, end: { line: 47, col: 18 } } },
                                if_body: 
                                 { stmts: 
                                    [ { fcall: 
                                         { qid: [ 'mpu1', 'getFIFOBytes' ],
                                           params: 
                                            [ { expr: { qid: [ 'fifoBuffer' ] } },
                                              { expr: { qid: [ 'fifoPacketSize' ] } } ] },
                                        src: { start: { line: 48, col: 3 }, end: { line: 48, col: 47 } } },
                                      { fcall: 
                                         { qid: [ 'next' ],
                                           params: 
                                            [ { expr: { qid: [ 'mpu1' ] } },
                                              { expr: { qid: [ 'fifoBuffer' ] } } ] },
                                        src: { start: { line: 49, col: 3 }, end: { line: 49, col: 24 } } } ],
                                   kind: 'block',
                                   src: { start: { line: 47, col: 34 }, end: { line: 50, col: 2 } } },
                                src: { start: { line: 47, col: 2 }, end: { line: 50, col: 2 } } } ],
                           kind: 'block',
                           src: { start: { line: 43, col: 34 }, end: { line: 51, col: 1 } } },
                        src: { start: { line: 43, col: 8 }, end: { line: 51, col: 1 } } } } ],
                kind: 'block',
                src: { start: { line: 28, col: 0 }, end: { line: 52, col: 0 } } } } ] },
     normalize_mpu_ag: 
      { name: 'normalize_mpu_ag',
        src: { start: { line: 1, col: 0 }, end: { line: 66, col: 0 } },
        uses: [],
        vars: 
         [ { type: 
              { primitive: 'float',
                src: { start: { line: 4, col: 0 }, end: { line: 4, col: 14 } },
                dim: { dim: [ { iconst: 400 } ], is_ring: true } },
             is_const: false,
             defs: [ { id: 'normAX' }, { id: 'normAY' }, { id: 'normAZ' } ],
             src: { start: { line: 4, col: 0 }, end: { line: 4, col: 38 } } },
           { type: 
              { primitive: 'float',
                src: { start: { line: 5, col: 0 }, end: { line: 5, col: 14 } },
                dim: { dim: [ { iconst: 400 } ], is_ring: true } },
             is_const: false,
             defs: [ { id: 'normGX' }, { id: 'normGY' }, { id: 'normGZ' } ],
             src: { start: { line: 5, col: 0 }, end: { line: 5, col: 38 } } } ],
        fdefs: 
         [ { src: { start: { line: 7, col: 0 }, end: { line: 35, col: 0 } },
             flow: 'default',
             id: 'normalizeAG',
             params: 
              [ { is_const: false,
                  type: 
                   { qid: [ 'MPU6050' ],
                     src: { start: { line: 7, col: 25 }, end: { line: 7, col: 25 } } },
                  id: 'mpu',
                  src: { start: { line: 7, col: 25 }, end: { line: 7, col: 33 } } },
                { is_const: false,
                  type: 
                   { primitive: 'int',
                     src: { start: { line: 7, col: 38 }, end: { line: 7, col: 43 } },
                     dim: { dim: [ { id: 'N' } ], is_ring: false } },
                  id: 'fifoBuffer',
                  src: { start: { line: 7, col: 38 }, end: { line: 7, col: 45 } } } ],
             vars: 
              [ { type: 
                   { qid: [ 'VectorInt16' ],
                     src: { start: { line: 8, col: 1 }, end: { line: 8, col: 1 } } },
                  is_const: false,
                  defs: [ { id: 'acc__' }, { id: 'gyr__' } ],
                  src: { start: { line: 8, col: 1 }, end: { line: 8, col: 25 } } },
                { type: 
                   { qid: [ 'int16' ],
                     dim: { dim: [ { iconst: 3 } ], is_ring: false },
                     src: { start: { line: 9, col: 1 }, end: { line: 9, col: 8 } } },
                  is_const: false,
                  defs: [ { id: 'acc' } ],
                  src: { start: { line: 9, col: 1 }, end: { line: 9, col: 13 } } } ],
             body: 
              { stmts: 
                 [ { fcall: 
                      { qid: [ 'mpu1', 'dmpGetAccel' ],
                        params: 
                         [ { expr: { qid: [ 'acc__' ] } },
                           { expr: { qid: [ 'fifoBuffer' ] } } ] },
                     src: { start: { line: 10, col: 1 }, end: { line: 10, col: 35 } } },
                   { fcall: 
                      { qid: [ 'mpu1', 'dmpGetGyro' ],
                        params: 
                         [ { expr: { qid: [ 'gyr__' ] } },
                           { expr: { qid: [ 'fifoBuffer' ] } } ] },
                     src: { start: { line: 11, col: 1 }, end: { line: 11, col: 34 } } },
                   { kind: 'assign',
                     qid: [ 'acc', 'x' ],
                     expr: { qid: [ 'acc__', 'x' ] },
                     src: { start: { line: 13, col: 1 }, end: { line: 13, col: 15 } } },
                   { kind: 'assign',
                     qid: [ 'acc', 'y' ],
                     expr: { qid: [ 'acc__', 'y' ] },
                     src: { start: { line: 13, col: 18 }, end: { line: 13, col: 32 } } },
                   { kind: 'assign',
                     qid: [ 'acc', 'z' ],
                     expr: { qid: [ 'acc__', 'z' ] },
                     src: { start: { line: 13, col: 35 }, end: { line: 13, col: 49 } } },
                   { kind: 'assign',
                     qid: [ 'gyr', 'x' ],
                     expr: { qid: [ 'gyr__', 'x' ] },
                     src: { start: { line: 16, col: 1 }, end: { line: 16, col: 15 } } },
                   { kind: 'assign',
                     qid: [ 'gyr', 'y' ],
                     expr: { qid: [ 'gyr__', 'y' ] },
                     src: { start: { line: 16, col: 18 }, end: { line: 16, col: 33 } } },
                   { kind: 'assign',
                     qid: [ 'gyr', 'z' ],
                     expr: { qid: [ 'gyr__', 'z' ] },
                     src: { start: { line: 16, col: 36 }, end: { line: 16, col: 51 } } },
                   { fcall: 
                      { qid: [ 'minMaxNormalize' ],
                        params: 
                         [ { expr: { qid: [ 'acc' ] } },
                           { expr: { qid: [ 'minAcc' ] } },
                           { expr: { qid: [ 'maxAcc' ] } },
                           { expr: { qid: [ 'normAcc' ] } } ] },
                     src: { start: { line: 17, col: 1 }, end: { line: 17, col: 45 } } },
                   { fcall: 
                      { qid: [ 'minMaxNormalize' ],
                        params: 
                         [ { expr: { qid: [ 'gyr' ] } },
                           { expr: { qid: [ 'minGyr' ] } },
                           { expr: { qid: [ 'maxGyr' ] } },
                           { expr: { qid: [ 'normGyr' ] } } ] },
                     src: { start: { line: 18, col: 1 }, end: { line: 18, col: 45 } } },
                   { fcall: 
                      { qid: [ 'normAX', 'push' ],
                        params: [ { expr: { qid: [ 'normAcc', 'x' ] } } ] },
                     src: { start: { line: 19, col: 1 }, end: { line: 19, col: 22 } } },
                   { fcall: 
                      { qid: [ 'normAY', 'push' ],
                        params: [ { expr: { qid: [ 'normAcc', 'y' ] } } ] },
                     src: { start: { line: 20, col: 1 }, end: { line: 20, col: 22 } } },
                   { fcall: 
                      { qid: [ 'normAZ', 'push' ],
                        params: [ { expr: { qid: [ 'normAcc', 'z' ] } } ] },
                     src: { start: { line: 21, col: 1 }, end: { line: 21, col: 22 } } },
                   { fcall: 
                      { qid: [ 'normGX', 'push' ],
                        params: [ { expr: { qid: [ 'normGyr', 'x' ] } } ] },
                     src: { start: { line: 22, col: 1 }, end: { line: 22, col: 22 } } },
                   { fcall: 
                      { qid: [ 'normGY', 'push' ],
                        params: [ { expr: { qid: [ 'normGyr', 'y' ] } } ] },
                     src: { start: { line: 23, col: 1 }, end: { line: 23, col: 22 } } },
                   { fcall: 
                      { qid: [ 'normGZ', 'push' ],
                        params: [ { expr: { qid: [ 'normGyr', 'z' ] } } ] },
                     src: { start: { line: 24, col: 1 }, end: { line: 24, col: 22 } } },
                   { kind: 'assign',
                     qid: [ 'numNewReadings' ],
                     expr: 
                      { src: { start: { line: 25, col: 18 }, end: { line: 25, col: 35 } },
                        op: '+',
                        lexpr: { qid: [ 'numNewReadings' ] },
                        rexpr: 
                         { src: { start: { line: 25, col: 35 }, end: { line: 25, col: 35 } },
                           iconst: 1 } },
                     src: { start: { line: 25, col: 1 }, end: { line: 25, col: 35 } } },
                   { kind: 'assign',
                     qid: [ 'samplesAfterReset' ],
                     expr: 
                      { src: { start: { line: 26, col: 21 }, end: { line: 26, col: 41 } },
                        op: '+',
                        lexpr: { qid: [ 'samplesAfterReset' ] },
                        rexpr: 
                         { src: { start: { line: 26, col: 41 }, end: { line: 26, col: 41 } },
                           iconst: 1 } },
                     src: { start: { line: 26, col: 1 }, end: { line: 26, col: 41 } } },
                   { kind: 'if',
                     expr: 
                      { op: '<',
                        lexpr: { qid: [ 'samplesAfterReset' ] },
                        rexpr: 
                         { src: { start: { line: 27, col: 24 }, end: { line: 27, col: 24 } },
                           iconst: 250 },
                        src: { start: { line: 27, col: 4 }, end: { line: 27, col: 24 } } },
                     if_body: 
                      { stmts: 
                         [ { kind: 'if',
                             expr: 
                              { op: '==',
                                lexpr: { qid: [ 'numNewReadings' ] },
                                rexpr: { qid: [ 'STRIDE' ] },
                                src: { start: { line: 28, col: 5 }, end: { line: 28, col: 23 } } },
                             if_body: 
                              { stmts: 
                                 [ { kind: 'assign',
                                     qid: [ 'numNewReadings' ],
                                     expr: 
                                      { src: { start: { line: 29, col: 20 }, end: { line: 29, col: 20 } },
                                        iconst: 0 },
                                     src: { start: { line: 29, col: 3 }, end: { line: 29, col: 20 } } } ],
                                kind: 'block',
                                src: { start: { line: 28, col: 30 }, end: { line: 30, col: 2 } } },
                             src: { start: { line: 28, col: 2 }, end: { line: 30, col: 2 } } } ],
                        kind: 'block',
                        src: { start: { line: 27, col: 28 }, end: { line: 31, col: 1 } } },
                     src: { start: { line: 27, col: 1 }, end: { line: 34, col: 1 } },
                     else_body: 
                      { kind: 'if',
                        expr: 
                         { op: '==',
                           lexpr: { qid: [ 'numNewReadings' ] },
                           rexpr: { qid: [ 'STRIDE' ] },
                           src: { start: { line: 31, col: 11 }, end: { line: 31, col: 29 } } },
                        if_body: 
                         { stmts: 
                            [ { kind: 'assign',
                                qid: [ 'samplesAfterReset' ],
                                expr: 
                                 { src: { start: { line: 32, col: 22 }, end: { line: 32, col: 22 } },
                                   iconst: 401 },
                                src: { start: { line: 32, col: 2 }, end: { line: 32, col: 22 } } },
                              { fcall: 
                                 { qid: [ 'next' ],
                                   params: 
                                    [ { expr: { qid: [ 'normAX' ] } },
                                      { expr: { qid: [ 'normAY' ] } },
                                      { expr: { qid: [ 'normAZ' ] } },
                                      { expr: { qid: [ 'normGX' ] } },
                                      { expr: { qid: [ 'normGY' ] } },
                                      { expr: { qid: [ 'normGZ' ] } } ] },
                                src: { start: { line: 33, col: 2 }, end: { line: 33, col: 53 } } } ],
                           kind: 'block',
                           src: { start: { line: 31, col: 36 }, end: { line: 34, col: 1 } } },
                        src: { start: { line: 31, col: 8 }, end: { line: 34, col: 1 } } } } ],
                kind: 'block',
                src: { start: { line: 7, col: 0 }, end: { line: 35, col: 0 } } } },
           { src: { start: { line: 51, col: 0 }, end: { line: 66, col: 0 } },
             type: 
              { primitive: 'void',
                src: { start: { line: 51, col: 0 }, end: { line: 51, col: 0 } } },
             id: 'minMaxNormalize',
             params: 
              [ { is_const: true,
                  type: 
                   { qid: [ 'int16' ],
                     dim: { dim: [ { iconst: 3 } ], is_ring: false },
                     src: { start: { line: 52, col: 7 }, end: { line: 52, col: 14 } } },
                  id: 'v',
                  src: { start: { line: 52, col: 1 }, end: { line: 52, col: 16 } } },
                { is_const: true,
                  type: 
                   { qid: [ 'int16' ],
                     dim: { dim: [ { iconst: 3 } ], is_ring: false },
                     src: { start: { line: 53, col: 7 }, end: { line: 53, col: 14 } } },
                  id: 'vmin',
                  src: { start: { line: 53, col: 1 }, end: { line: 53, col: 16 } } },
                { is_const: true,
                  type: 
                   { qid: [ 'int16' ],
                     dim: { dim: [ { iconst: 3 } ], is_ring: false },
                     src: { start: { line: 54, col: 7 }, end: { line: 54, col: 14 } } },
                  id: 'vmax',
                  src: { start: { line: 54, col: 1 }, end: { line: 54, col: 16 } } },
                { is_const: false,
                  type: 
                   { primitive: 'float',
                     src: { start: { line: 55, col: 1 }, end: { line: 55, col: 8 } },
                     dim: { dim: [ { iconst: 3 } ], is_ring: false } },
                  id: 'dst',
                  src: { start: { line: 55, col: 1 }, end: { line: 55, col: 11 } } } ],
             vars: [],
             body: 
              { stmts: 
                 [ { kind: 'assign',
                     qid: [ 'dst', 'x' ],
                     expr: 
                      { src: { start: { line: 58, col: 9 }, end: { line: 58, col: 34 } },
                        op: '-',
                        lexpr: 
                         { op: 'cast',
                           type: 
                            { primitive: 'float',
                              src: { start: { line: 58, col: 9 }, end: { line: 58, col: 9 } } },
                           expr: { qid: [ 'v', 'x' ] },
                           src: { start: { line: 58, col: 9 }, end: { line: 58, col: 18 } } },
                        rexpr: 
                         { op: 'cast',
                           type: 
                            { primitive: 'float',
                              src: { start: { line: 58, col: 22 }, end: { line: 58, col: 22 } } },
                           expr: { qid: [ 'vmin', 'x' ] },
                           src: { start: { line: 58, col: 22 }, end: { line: 58, col: 34 } } } },
                     src: { start: { line: 58, col: 1 }, end: { line: 58, col: 34 } } },
                   { kind: 'assign',
                     qid: [ 'dst', 'x' ],
                     expr: 
                      { src: { start: { line: 59, col: 9 }, end: { line: 59, col: 47 } },
                        op: '/',
                        lexpr: { qid: [ 'dst', 'x' ] },
                        rexpr: 
                         { src: { start: { line: 59, col: 18 }, end: { line: 59, col: 46 } },
                           op: '-',
                           lexpr: 
                            { op: 'cast',
                              type: 
                               { primitive: 'float',
                                 src: { start: { line: 59, col: 18 }, end: { line: 59, col: 18 } } },
                              expr: { qid: [ 'vmax', 'x' ] },
                              src: { start: { line: 59, col: 18 }, end: { line: 59, col: 30 } } },
                           rexpr: 
                            { op: 'cast',
                              type: 
                               { primitive: 'float',
                                 src: { start: { line: 59, col: 34 }, end: { line: 59, col: 34 } } },
                              expr: { qid: [ 'vmin', 'x' ] },
                              src: { start: { line: 59, col: 34 }, end: { line: 59, col: 46 } } } } },
                     src: { start: { line: 59, col: 1 }, end: { line: 59, col: 47 } } },
                   { kind: 'assign',
                     qid: [ 'dst', 'y' ],
                     expr: 
                      { src: { start: { line: 61, col: 10 }, end: { line: 61, col: 35 } },
                        op: '-',
                        lexpr: 
                         { op: 'cast',
                           type: 
                            { primitive: 'float',
                              src: { start: { line: 61, col: 10 }, end: { line: 61, col: 10 } } },
                           expr: { qid: [ 'v', 'y' ] },
                           src: { start: { line: 61, col: 10 }, end: { line: 61, col: 19 } } },
                        rexpr: 
                         { op: 'cast',
                           type: 
                            { primitive: 'float',
                              src: { start: { line: 61, col: 23 }, end: { line: 61, col: 23 } } },
                           expr: { qid: [ 'vmin', 'y' ] },
                           src: { start: { line: 61, col: 23 }, end: { line: 61, col: 35 } } } },
                     src: { start: { line: 61, col: 1 }, end: { line: 61, col: 36 } } },
                   { kind: 'assign',
                     qid: [ 'dst', 'y' ],
                     expr: 
                      { src: { start: { line: 62, col: 9 }, end: { line: 62, col: 47 } },
                        op: '/',
                        lexpr: { qid: [ 'dst', 'y' ] },
                        rexpr: 
                         { src: { start: { line: 62, col: 18 }, end: { line: 62, col: 46 } },
                           op: '-',
                           lexpr: 
                            { op: 'cast',
                              type: 
                               { primitive: 'float',
                                 src: { start: { line: 62, col: 18 }, end: { line: 62, col: 18 } } },
                              expr: { qid: [ 'vmax', 'y' ] },
                              src: { start: { line: 62, col: 18 }, end: { line: 62, col: 30 } } },
                           rexpr: 
                            { op: 'cast',
                              type: 
                               { primitive: 'float',
                                 src: { start: { line: 62, col: 34 }, end: { line: 62, col: 34 } } },
                              expr: { qid: [ 'vmin', 'y' ] },
                              src: { start: { line: 62, col: 34 }, end: { line: 62, col: 46 } } } } },
                     src: { start: { line: 62, col: 1 }, end: { line: 62, col: 47 } } },
                   { kind: 'assign',
                     qid: [ 'dst', 'z' ],
                     expr: 
                      { src: { start: { line: 64, col: 10 }, end: { line: 64, col: 35 } },
                        op: '-',
                        lexpr: 
                         { op: 'cast',
                           type: 
                            { primitive: 'float',
                              src: { start: { line: 64, col: 10 }, end: { line: 64, col: 10 } } },
                           expr: { qid: [ 'v', 'z' ] },
                           src: { start: { line: 64, col: 10 }, end: { line: 64, col: 19 } } },
                        rexpr: 
                         { op: 'cast',
                           type: 
                            { primitive: 'float',
                              src: { start: { line: 64, col: 23 }, end: { line: 64, col: 23 } } },
                           expr: { qid: [ 'vmin', 'z' ] },
                           src: { start: { line: 64, col: 23 }, end: { line: 64, col: 35 } } } },
                     src: { start: { line: 64, col: 1 }, end: { line: 64, col: 36 } } },
                   { kind: 'assign',
                     qid: [ 'dst', 'z' ],
                     expr: 
                      { src: { start: { line: 65, col: 9 }, end: { line: 65, col: 47 } },
                        op: '/',
                        lexpr: { qid: [ 'dst', 'z' ] },
                        rexpr: 
                         { src: { start: { line: 65, col: 18 }, end: { line: 65, col: 46 } },
                           op: '-',
                           lexpr: 
                            { op: 'cast',
                              type: 
                               { primitive: 'float',
                                 src: { start: { line: 65, col: 18 }, end: { line: 65, col: 18 } } },
                              expr: { qid: [ 'vmax', 'z' ] },
                              src: { start: { line: 65, col: 18 }, end: { line: 65, col: 30 } } },
                           rexpr: 
                            { op: 'cast',
                              type: 
                               { primitive: 'float',
                                 src: { start: { line: 65, col: 34 }, end: { line: 65, col: 34 } } },
                              expr: { qid: [ 'vmin', 'z' ] },
                              src: { start: { line: 65, col: 34 }, end: { line: 65, col: 46 } } } } },
                     src: { start: { line: 65, col: 1 }, end: { line: 65, col: 47 } } } ],
                kind: 'block',
                src: { start: { line: 51, col: 0 }, end: { line: 66, col: 0 } } } } ] },
     tlcfeaturizer: 
      { name: 'tlcfeaturizer',
        src: { start: { line: 1, col: 0 }, end: { line: 52, col: 0 } },
        uses: [],
        vars: [],
        fdefs: 
         [ { src: { start: { line: 3, col: 0 }, end: { line: 43, col: 0 } },
             flow: 'default',
             id: 'featurize',
             params: 
              [ { is_const: false,
                  type: 
                   { primitive: 'float',
                     src: { start: { line: 3, col: 23 }, end: { line: 3, col: 30 } },
                     dim: { dim: [ { id: 'n' } ], is_ring: false } },
                  id: 'norm1',
                  src: { start: { line: 3, col: 23 }, end: { line: 3, col: 32 } } },
                { is_const: false,
                  type: 
                   { primitive: 'float',
                     src: { start: { line: 3, col: 39 }, end: { line: 3, col: 46 } },
                     dim: { dim: [ { id: 'n' } ], is_ring: false } },
                  id: 'norm2',
                  src: { start: { line: 3, col: 39 }, end: { line: 3, col: 48 } } },
                { is_const: false,
                  type: 
                   { primitive: 'float',
                     src: { start: { line: 3, col: 55 }, end: { line: 3, col: 62 } },
                     dim: { dim: [ { id: 'n' } ], is_ring: false } },
                  id: 'norm3',
                  src: { start: { line: 3, col: 55 }, end: { line: 3, col: 64 } } },
                { is_const: false,
                  type: 
                   { primitive: 'float',
                     src: { start: { line: 4, col: 6 }, end: { line: 4, col: 13 } },
                     dim: { dim: [ { id: 'n' } ], is_ring: false } },
                  id: 'norm4',
                  src: { start: { line: 4, col: 6 }, end: { line: 4, col: 15 } } },
                { is_const: false,
                  type: 
                   { primitive: 'float',
                     src: { start: { line: 4, col: 22 }, end: { line: 4, col: 29 } },
                     dim: { dim: [ { id: 'n' } ], is_ring: false } },
                  id: 'norm5',
                  src: { start: { line: 4, col: 22 }, end: { line: 4, col: 31 } } },
                { is_const: false,
                  type: 
                   { primitive: 'float',
                     src: { start: { line: 4, col: 38 }, end: { line: 4, col: 45 } },
                     dim: { dim: [ { id: 'n' } ], is_ring: false } },
                  id: 'norm6',
                  src: { start: { line: 4, col: 38 }, end: { line: 4, col: 47 } } } ],
             vars: 
              [ { type: 
                   { primitive: 'int',
                     src: { start: { line: 5, col: 1 }, end: { line: 5, col: 8 } },
                     dim: { dim: [ { id: 'xxx' } ], is_ring: false } },
                  is_const: false,
                  defs: [ { id: 'bucketDistribution' } ],
                  src: { start: { line: 5, col: 1 }, end: { line: 5, col: 28 } } } ],
             body: 
              { stmts: 
                 [ { kind: 'assign',
                     qid: [ 'bucketDistribution' ],
                     expr: 
                      { src: { start: { line: 10, col: 23 }, end: { line: 10, col: 24 } },
                        up: '-',
                        expr: 
                         { src: { start: { line: 10, col: 24 }, end: { line: 10, col: 24 } },
                           iconst: 1 } },
                     src: { start: { line: 10, col: 1 }, end: { line: 10, col: 24 } },
                     dim: { dim: [ { iconst: 0 } ], is_ring: false } },
                   { kind: 'assign',
                     qid: [ 'bucketDistribution' ],
                     expr: 
                      { src: { start: { line: 11, col: 23 }, end: { line: 11, col: 24 } },
                        up: '-',
                        expr: 
                         { src: { start: { line: 11, col: 24 }, end: { line: 11, col: 24 } },
                           iconst: 1 } },
                     src: { start: { line: 11, col: 1 }, end: { line: 11, col: 24 } },
                     dim: { dim: [ { iconst: 3 } ], is_ring: false } },
                   { kind: 'assign',
                     qid: [ 'bucketIndex' ],
                     expr: 
                      { src: { start: { line: 22, col: 13 }, end: { line: 22, col: 13 } },
                        iconst: 4 },
                     src: { start: { line: 22, col: 1 }, end: { line: 22, col: 13 } } },
                   { kind: 'if',
                     expr: 
                      { op: '!=',
                        lexpr: 
                         { fcall: 
                            { qid: [ 'getBucket' ],
                              params: 
                               [ { expr: { qid: [ 'ax' ] } },
                                 { expr: { qid: [ 'bucketDistribution' ] } } ] },
                           src: { start: { line: 24, col: 5 }, end: { line: 24, col: 37 } } },
                        rexpr: 
                         { src: { start: { line: 24, col: 41 }, end: { line: 24, col: 41 } },
                           iconst: 1 },
                        src: { start: { line: 24, col: 4 }, end: { line: 24, col: 41 } } },
                     if_body: 
                      { stmts: 
                         [ { fcall: { qid: [ 'DEBPRINT' ], params: [ { sconst: '"ERROR:1\\n"' } ] },
                             src: { start: { line: 24, col: 45 }, end: { line: 24, col: 65 } } } ],
                        kind: 'block',
                        src: { start: { line: 24, col: 43 }, end: { line: 24, col: 67 } } },
                     src: { start: { line: 24, col: 1 }, end: { line: 24, col: 67 } } },
                   { kind: 'if',
                     expr: 
                      { op: '!=',
                        lexpr: 
                         { fcall: 
                            { qid: [ 'getBucket' ],
                              params: 
                               [ { expr: { qid: [ 'ay' ] } },
                                 { expr: { qid: [ 'bucketDistribution' ] } } ] },
                           src: { start: { line: 26, col: 5 }, end: { line: 26, col: 37 } } },
                        rexpr: 
                         { src: { start: { line: 26, col: 41 }, end: { line: 26, col: 41 } },
                           iconst: 1 },
                        src: { start: { line: 26, col: 4 }, end: { line: 26, col: 41 } } },
                     if_body: 
                      { stmts: 
                         [ { fcall: { qid: [ 'DEBPRINT' ], params: [ { sconst: '"ERROR:1\\n"' } ] },
                             src: { start: { line: 26, col: 45 }, end: { line: 26, col: 65 } } } ],
                        kind: 'block',
                        src: { start: { line: 26, col: 44 }, end: { line: 26, col: 67 } } },
                     src: { start: { line: 26, col: 1 }, end: { line: 26, col: 67 } } },
                   { kind: 'if',
                     expr: 
                      { op: '!=',
                        lexpr: 
                         { fcall: 
                            { qid: [ 'getBucket' ],
                              params: 
                               [ { expr: { qid: [ 'az' ] } },
                                 { expr: { qid: [ 'bucketDistribution' ] } } ] },
                           src: { start: { line: 28, col: 5 }, end: { line: 28, col: 37 } } },
                        rexpr: 
                         { src: { start: { line: 28, col: 41 }, end: { line: 28, col: 41 } },
                           iconst: 1 },
                        src: { start: { line: 28, col: 4 }, end: { line: 28, col: 41 } } },
                     if_body: 
                      { stmts: 
                         [ { fcall: { qid: [ 'DEBPRINT' ], params: [ { sconst: '"ERROR:1\\n"' } ] },
                             src: { start: { line: 28, col: 45 }, end: { line: 28, col: 65 } } } ],
                        kind: 'block',
                        src: { start: { line: 28, col: 44 }, end: { line: 28, col: 67 } } },
                     src: { start: { line: 28, col: 1 }, end: { line: 28, col: 67 } } },
                   { kind: 'if',
                     expr: 
                      { op: '!=',
                        lexpr: 
                         { fcall: 
                            { qid: [ 'getBucket' ],
                              params: 
                               [ { expr: { qid: [ 'gx' ] } },
                                 { expr: { qid: [ 'bucketDistribution' ] } } ] },
                           src: { start: { line: 30, col: 5 }, end: { line: 30, col: 37 } } },
                        rexpr: 
                         { src: { start: { line: 30, col: 41 }, end: { line: 30, col: 41 } },
                           iconst: 1 },
                        src: { start: { line: 30, col: 4 }, end: { line: 30, col: 41 } } },
                     if_body: 
                      { stmts: 
                         [ { fcall: { qid: [ 'DEBPRINT' ], params: [ { sconst: '"ERROR:1\\n"' } ] },
                             src: { start: { line: 30, col: 45 }, end: { line: 30, col: 65 } } } ],
                        kind: 'block',
                        src: { start: { line: 30, col: 44 }, end: { line: 30, col: 67 } } },
                     src: { start: { line: 30, col: 1 }, end: { line: 30, col: 67 } } },
                   { kind: 'if',
                     expr: 
                      { op: '!=',
                        lexpr: 
                         { fcall: 
                            { qid: [ 'getBucket' ],
                              params: 
                               [ { expr: { qid: [ 'gy' ] } },
                                 { expr: { qid: [ 'bucketDistribution' ] } } ] },
                           src: { start: { line: 32, col: 5 }, end: { line: 32, col: 37 } } },
                        rexpr: 
                         { src: { start: { line: 32, col: 41 }, end: { line: 32, col: 41 } },
                           iconst: 1 },
                        src: { start: { line: 32, col: 4 }, end: { line: 32, col: 41 } } },
                     if_body: 
                      { stmts: 
                         [ { fcall: { qid: [ 'DEBPRINT' ], params: [ { sconst: '"ERROR:1\\n"' } ] },
                             src: { start: { line: 32, col: 45 }, end: { line: 32, col: 65 } } } ],
                        kind: 'block',
                        src: { start: { line: 32, col: 44 }, end: { line: 32, col: 67 } } },
                     src: { start: { line: 32, col: 1 }, end: { line: 32, col: 67 } } },
                   { kind: 'if',
                     expr: 
                      { op: '!=',
                        lexpr: 
                         { fcall: 
                            { qid: [ 'getBucket' ],
                              params: 
                               [ { expr: { qid: [ 'gz' ] } },
                                 { expr: { qid: [ 'bucketDistribution' ] } } ] },
                           src: { start: { line: 34, col: 5 }, end: { line: 34, col: 37 } } },
                        rexpr: 
                         { src: { start: { line: 34, col: 41 }, end: { line: 34, col: 41 } },
                           iconst: 1 },
                        src: { start: { line: 34, col: 4 }, end: { line: 34, col: 41 } } },
                     if_body: 
                      { stmts: 
                         [ { fcall: { qid: [ 'DEBPRINT' ], params: [ { sconst: '"ERROR:1\\n"' } ] },
                             src: { start: { line: 34, col: 45 }, end: { line: 34, col: 65 } } } ],
                        kind: 'block',
                        src: { start: { line: 34, col: 44 }, end: { line: 34, col: 67 } } },
                     src: { start: { line: 34, col: 1 }, end: { line: 34, col: 67 } } },
                   { fcall: 
                      { qid: [ 'next' ],
                        params: [ { expr: { qid: [ 'bucketDistribution' ] } } ] },
                     src: { start: { line: 42, col: 1 }, end: { line: 42, col: 24 } } } ],
                kind: 'block',
                src: { start: { line: 3, col: 0 }, end: { line: 43, col: 0 } } } },
           { src: { start: { line: 46, col: 0 }, end: { line: 52, col: 0 } },
             type: 
              { primitive: 'int',
                src: { start: { line: 46, col: 0 }, end: { line: 46, col: 0 } } },
             id: 'getBucket',
             params: 
              [ { is_const: false,
                  type: 
                   { primitive: 'float',
                     src: { start: { line: 46, col: 14 }, end: { line: 46, col: 23 } },
                     dim: { dim: [ { iconst: 400 } ], is_ring: false } },
                  id: 'sensorValue1D',
                  src: { start: { line: 46, col: 14 }, end: { line: 46, col: 25 } } },
                { is_const: false,
                  type: 
                   { primitive: 'int',
                     src: { start: { line: 46, col: 40 }, end: { line: 46, col: 45 } },
                     dim: { dim: [ { id: 'n' } ], is_ring: false } },
                  id: 'bucketDistribution',
                  src: { start: { line: 46, col: 40 }, end: { line: 46, col: 47 } } } ],
             vars: 
              [ { type: 
                   { primitive: 'int',
                     src: { start: { line: 49, col: 1 }, end: { line: 49, col: 1 } } },
                  is_const: false,
                  defs: 
                   [ { id: 'imax',
                       init: 
                        { src: { start: { line: 49, col: 12 }, end: { line: 49, col: 12 } },
                          iconst: 0 } },
                     { id: 'imin',
                       init: 
                        { src: { start: { line: 49, col: 22 }, end: { line: 49, col: 22 } },
                          iconst: 0 } },
                     { id: 'maxval',
                       init: 
                        { src: { start: { line: 49, col: 34 }, end: { line: 49, col: 34 } },
                          iconst: 0 } },
                     { id: 'minval',
                       init: 
                        { src: { start: { line: 49, col: 45 }, end: { line: 49, col: 45 } },
                          iconst: 0 } },
                     { id: 'maxcount',
                       init: 
                        { src: { start: { line: 49, col: 59 }, end: { line: 49, col: 59 } },
                          iconst: 0 } },
                     { id: 'mincount',
                       init: 
                        { src: { start: { line: 49, col: 73 }, end: { line: 49, col: 73 } },
                          iconst: 0 } },
                     { id: 'postemp',
                       init: 
                        { src: { start: { line: 49, col: 86 }, end: { line: 49, col: 86 } },
                          iconst: 0 } },
                     { id: 'negtemp',
                       init: 
                        { src: { start: { line: 49, col: 99 }, end: { line: 49, col: 99 } },
                          iconst: 0 } },
                     { id: 'bucketCount' } ],
                  src: { start: { line: 49, col: 1 }, end: { line: 49, col: 113 } } },
                { type: 
                   { qid: [ 'bool' ],
                     src: { start: { line: 51, col: 1 }, end: { line: 51, col: 1 } } },
                  is_const: false,
                  defs: 
                   [ { id: 'flagPos',
                       init: 
                        { bconst: true,
                          src: { start: { line: 51, col: 16 }, end: { line: 51, col: 16 } } } },
                     { id: 'flagNeg',
                       init: 
                        { bconst: true,
                          src: { start: { line: 51, col: 33 }, end: { line: 51, col: 33 } } } } ],
                  src: { start: { line: 51, col: 1 }, end: { line: 51, col: 38 } } } ],
             body: 
              { stmts: [],
                kind: 'block',
                src: { start: { line: 46, col: 0 }, end: { line: 52, col: 0 } } } } ] },
     protonn: 
      { name: 'protonn',
        src: { start: { line: 1, col: 0 }, end: { line: 38, col: 0 } },
        uses: [],
        vars: 
         [ { type: 
              { primitive: 'float',
                src: { start: { line: 3, col: 6 }, end: { line: 3, col: 16 } },
                dim: { dim: [ { id: 'M' }, { id: 'N' } ], is_ring: false } },
             is_const: true,
             defs: 
              [ { id: 'ldProjectionMatrix',
                  init: 
                   { aconst: 
                      [ { aconst: 
                           [ { src: { start: { line: 3, col: 40 }, end: { line: 3, col: 40 } },
                               iconst: 1 } ],
                          src: { start: { line: 3, col: 39 }, end: { line: 3, col: 41 } } },
                        { aconst: 
                           [ { src: { start: { line: 3, col: 44 }, end: { line: 3, col: 44 } },
                               iconst: 2 } ],
                          src: { start: { line: 3, col: 43 }, end: { line: 3, col: 45 } } } ],
                     src: { start: { line: 3, col: 38 }, end: { line: 3, col: 46 } } } } ],
             src: { start: { line: 3, col: 0 }, end: { line: 3, col: 47 } } },
           { type: 
              { primitive: 'float',
                src: { start: { line: 4, col: 6 }, end: { line: 4, col: 16 } },
                dim: { dim: [ { id: 'M' }, { id: 'N' } ], is_ring: false } },
             is_const: true,
             defs: 
              [ { id: 'prototypeMatrix',
                  init: 
                   { aconst: 
                      [ { aconst: 
                           [ { src: { start: { line: 4, col: 38 }, end: { line: 4, col: 38 } },
                               iconst: 2 } ],
                          src: { start: { line: 4, col: 37 }, end: { line: 4, col: 39 } } },
                        { aconst: 
                           [ { src: { start: { line: 4, col: 43 }, end: { line: 4, col: 43 } },
                               iconst: 1 } ],
                          src: { start: { line: 4, col: 42 }, end: { line: 4, col: 44 } } } ],
                     src: { start: { line: 4, col: 36 }, end: { line: 4, col: 45 } } } } ],
             src: { start: { line: 4, col: 0 }, end: { line: 4, col: 46 } } },
           { type: 
              { primitive: 'float',
                src: { start: { line: 5, col: 6 }, end: { line: 5, col: 16 } },
                dim: { dim: [ { id: 'M' }, { id: 'N' } ], is_ring: false } },
             is_const: true,
             defs: 
              [ { id: 'prototypeLabelMatrix',
                  init: 
                   { aconst: 
                      [ { aconst: 
                           [ { src: { start: { line: 5, col: 42 }, end: { line: 5, col: 42 } },
                               iconst: 1 } ],
                          src: { start: { line: 5, col: 41 }, end: { line: 5, col: 43 } } },
                        { aconst: 
                           [ { src: { start: { line: 5, col: 47 }, end: { line: 5, col: 47 } },
                               iconst: 2 } ],
                          src: { start: { line: 5, col: 46 }, end: { line: 5, col: 48 } } } ],
                     src: { start: { line: 5, col: 40 }, end: { line: 5, col: 49 } } } } ],
             src: { start: { line: 5, col: 0 }, end: { line: 5, col: 50 } } } ],
        fdefs: 
         [ { src: { start: { line: 9, col: 0 }, end: { line: 14, col: 0 } },
             type: 
              { primitive: 'float',
                src: { start: { line: 9, col: 0 }, end: { line: 9, col: 0 } } },
             id: 'gaussian',
             params: 
              [ { is_const: false,
                  type: 
                   { primitive: 'float',
                     src: { start: { line: 9, col: 15 }, end: { line: 9, col: 22 } },
                     dim: { dim: [ { id: 'n' } ], is_ring: false } },
                  id: 'x',
                  src: { start: { line: 9, col: 15 }, end: { line: 9, col: 24 } } },
                { is_const: false,
                  type: 
                   { primitive: 'float',
                     src: { start: { line: 9, col: 27 }, end: { line: 9, col: 34 } },
                     dim: { dim: [ { id: 'n' } ], is_ring: false } },
                  id: 'y',
                  src: { start: { line: 9, col: 27 }, end: { line: 9, col: 36 } } },
                { is_const: false,
                  type: 
                   { primitive: 'float',
                     src: { start: { line: 9, col: 39 }, end: { line: 9, col: 39 } } },
                  id: 'gamma',
                  src: { start: { line: 9, col: 39 }, end: { line: 9, col: 45 } } } ],
             vars: [],
             body: 
              { stmts: 
                 [ { kind: 'assign',
                     qid: [ 'sumSq' ],
                     expr: 
                      { fcall: 
                         { qid: [ 'reduce' ],
                           params: 
                            [ { expr: 
                                 { src: { start: { line: 10, col: 28 }, end: { line: 10, col: 33 } },
                                   op: '**',
                                   lexpr: { qid: [ '_' ] },
                                   rexpr: 
                                    { src: { start: { line: 10, col: 33 }, end: { line: 10, col: 33 } },
                                      iconst: 2 } } },
                              { expr: { qid: [ 'sum' ] } } ] },
                        src: { start: { line: 10, col: 10 }, end: { line: 10, col: 40 } } },
                     src: { start: { line: 10, col: 1 }, end: { line: 10, col: 40 } } },
                   { kind: 'assign',
                     qid: [ 'sumSq' ],
                     expr: 
                      { src: { start: { line: 11, col: 9 }, end: { line: 11, col: 24 } },
                        op: '*',
                        lexpr: 
                         { src: { start: { line: 11, col: 9 }, end: { line: 11, col: 18 } },
                           op: '*',
                           lexpr: 
                            { src: { start: { line: 11, col: 9 }, end: { line: 11, col: 12 } },
                              op: '*',
                              lexpr: 
                               { src: { start: { line: 11, col: 9 }, end: { line: 11, col: 10 } },
                                 up: '-',
                                 expr: 
                                  { src: { start: { line: 11, col: 10 }, end: { line: 11, col: 10 } },
                                    iconst: 1 } },
                              rexpr: { qid: [ 'gamma' ] } },
                           rexpr: { qid: [ 'gamma' ] } },
                        rexpr: { qid: [ 'sumSq' ] } },
                     src: { start: { line: 11, col: 1 }, end: { line: 11, col: 24 } } },
                   { kind: 'assign',
                     qid: [ 'sumSq' ],
                     expr: 
                      { fcall: { qid: [ 'exp' ], params: [ { expr: { qid: [ 'sumSq' ] } } ] },
                        src: { start: { line: 12, col: 9 }, end: { line: 12, col: 18 } } },
                     src: { start: { line: 12, col: 1 }, end: { line: 12, col: 18 } } },
                   { kind: 'return',
                     expr: { qid: [ 'sumSq' ] },
                     src: { start: { line: 13, col: 1 }, end: { line: 13, col: 8 } } } ],
                kind: 'block',
                src: { start: { line: 9, col: 0 }, end: { line: 14, col: 0 } } } },
           { src: { start: { line: 16, col: 0 }, end: { line: 18, col: 0 } },
             type: 
              { primitive: 'float',
                src: { start: { line: 16, col: 0 }, end: { line: 16, col: 0 } } },
             id: 'rho',
             params: 
              [ { is_const: false,
                  type: 
                   { primitive: 'float',
                     src: { start: { line: 16, col: 10 }, end: { line: 16, col: 17 } },
                     dim: { dim: [ { id: 'n' } ], is_ring: false } },
                  id: 'labelScores',
                  src: { start: { line: 16, col: 10 }, end: { line: 16, col: 19 } } } ],
             vars: [],
             body: 
              { stmts: 
                 [ { kind: 'return',
                     expr: 
                      { fcall: 
                         { qid: [ 'reduce' ],
                           params: 
                            [ { expr: { qid: [ 'labelScores' ] } },
                              { expr: { qid: [ 'maxIndex' ] } } ] },
                        src: { start: { line: 17, col: 8 }, end: { line: 17, col: 36 } } },
                     src: { start: { line: 17, col: 1 }, end: { line: 17, col: 36 } } } ],
                kind: 'block',
                src: { start: { line: 16, col: 0 }, end: { line: 18, col: 0 } } } },
           { src: { start: { line: 20, col: 0 }, end: { line: 38, col: 0 } },
             flow: 'default',
             id: 'predict',
             params: 
              [ { is_const: false,
                  type: 
                   { primitive: 'float',
                     src: { start: { line: 20, col: 21 }, end: { line: 20, col: 28 } },
                     dim: { dim: [ { id: 'N' } ], is_ring: false } },
                  id: 'x',
                  src: { start: { line: 20, col: 21 }, end: { line: 20, col: 30 } } } ],
             vars: 
              [ { type: 
                   { primitive: 'float',
                     src: { start: { line: 22, col: 1 }, end: { line: 22, col: 8 } },
                     dim: { dim: [ { id: 'N' } ], is_ring: false } },
                  is_const: false,
                  defs: [ { id: 'x_cap' } ],
                  src: { start: { line: 22, col: 1 }, end: { line: 22, col: 15 } } },
                { type: 
                   { primitive: 'float',
                     src: { start: { line: 23, col: 1 }, end: { line: 23, col: 8 } },
                     dim: { dim: [ { id: 'N' } ], is_ring: false } },
                  is_const: false,
                  defs: [ { id: 'y_cap' } ],
                  src: { start: { line: 23, col: 1 }, end: { line: 23, col: 15 } } },
                { type: 
                   { primitive: 'float',
                     src: { start: { line: 24, col: 1 }, end: { line: 24, col: 8 } },
                     dim: { dim: [ { id: 'N' } ], is_ring: false } },
                  is_const: false,
                  defs: [ { id: 'scores' } ],
                  src: { start: { line: 24, col: 1 }, end: { line: 24, col: 16 } } } ],
             body: 
              { stmts: 
                 [ { kind: 'assign',
                     qid: [ 'y_cap' ],
                     expr: 
                      { src: { start: { line: 26, col: 9 }, end: { line: 26, col: 9 } },
                        iconst: 0 },
                     src: { start: { line: 26, col: 1 }, end: { line: 26, col: 9 } } },
                   { kind: 'assign',
                     qid: [ 'x_cap' ],
                     expr: 
                      { src: { start: { line: 28, col: 10 }, end: { line: 28, col: 31 } },
                        op: '*',
                        lexpr: { qid: [ 'ldProjectionMatrix' ] },
                        rexpr: { qid: [ 'x' ] } },
                     src: { start: { line: 28, col: 2 }, end: { line: 28, col: 31 } } },
                   { kind: 'for',
                     ids: [ 'i' ],
                     range: 
                      { from: 
                         { src: { start: { line: 30, col: 11 }, end: { line: 30, col: 11 } },
                           iconst: 0 },
                        to: 
                         { id: 'M',
                           src: { start: { line: 30, col: 13 }, end: { line: 30, col: 13 } } },
                        is_inclusive: false,
                        src: { start: { line: 30, col: 10 }, end: { line: 30, col: 14 } } },
                     body: 
                      { stmts: 
                         [ { kind: 'assign',
                             qid: [ 'weight' ],
                             expr: 
                              { fcall: 
                                 { qid: [ 'gaussian' ],
                                   params: 
                                    [ { expr: { qid: [ 'x_cap' ] } },
                                      { expr: 
                                         { id: 'prototypeMatrix',
                                           dim: { dim: [ { id: 'i' } ], is_ring: false },
                                           src: { start: { line: 31, col: 27 }, end: { line: 31, col: 44 } } } },
                                      { expr: 
                                         { src: { start: { line: 31, col: 47 }, end: { line: 31, col: 47 } },
                                           fconst: 1 } } ] },
                                src: { start: { line: 31, col: 11 }, end: { line: 31, col: 50 } } },
                             src: { start: { line: 31, col: 2 }, end: { line: 31, col: 50 } } },
                           { kind: 'assign',
                             qid: [ 'y_cap' ],
                             expr: 
                              { src: { start: { line: 32, col: 10 }, end: { line: 32, col: 44 } },
                                op: '+',
                                lexpr: { qid: [ 'y_cap' ] },
                                rexpr: 
                                 { src: { start: { line: 32, col: 18 }, end: { line: 32, col: 44 } },
                                   op: '*',
                                   lexpr: 
                                    { id: 'prototypeLabelMatrix',
                                      dim: { dim: [ { id: 'i' } ], is_ring: false },
                                      src: { start: { line: 32, col: 18 }, end: { line: 32, col: 40 } } },
                                   rexpr: { qid: [ 'weight' ] } } },
                             src: { start: { line: 32, col: 2 }, end: { line: 32, col: 44 } } } ],
                        kind: 'block',
                        src: { start: { line: 30, col: 16 }, end: { line: 33, col: 1 } } },
                     src: { start: { line: 30, col: 1 }, end: { line: 33, col: 1 } } },
                   { kind: 'assign',
                     qid: [ 'scores' ],
                     expr: 
                      { src: { start: { line: 35, col: 13 }, end: { line: 35, col: 21 } },
                        op: '*',
                        lexpr: { qid: [ 'y_cap' ] },
                        rexpr: 
                         { src: { start: { line: 35, col: 21 }, end: { line: 35, col: 21 } },
                           iconst: 100000 } },
                     src: { start: { line: 35, col: 4 }, end: { line: 35, col: 21 } } },
                   { fcall: 
                      { qid: [ 'next' ],
                        params: 
                         [ { expr: { qid: [ 'scores' ] } },
                           { expr: { qid: [ 'y_cap' ] } } ] },
                     src: { start: { line: 37, col: 1 }, end: { line: 37, col: 24 } } } ],
                kind: 'block',
                src: { start: { line: 20, col: 0 }, end: { line: 38, col: 0 } } } } ] },
     thresholding: 
      { name: 'thresholding',
        src: { start: { line: 1, col: 0 }, end: { line: 12, col: 0 } },
        uses: [],
        vars: 
         [ { type: 
              { primitive: 'float',
                src: { start: { line: 4, col: 0 }, end: { line: 4, col: 7 } },
                dim: { dim: [ { id: 'N' } ], is_ring: false } },
             is_const: false,
             defs: 
              [ { id: 'scoreThreshold',
                  init: 
                   { aconst: 
                      [ { src: { start: { line: 4, col: 27 }, end: { line: 4, col: 27 } },
                          iconst: 0 },
                        { src: { start: { line: 4, col: 29 }, end: { line: 4, col: 29 } },
                          iconst: 0 },
                        { src: { start: { line: 4, col: 31 }, end: { line: 4, col: 31 } },
                          iconst: 0 },
                        { src: { start: { line: 4, col: 33 }, end: { line: 4, col: 33 } },
                          iconst: 90000 },
                        { src: { start: { line: 4, col: 39 }, end: { line: 4, col: 39 } },
                          iconst: 60000 },
                        { src: { start: { line: 4, col: 46 }, end: { line: 4, col: 46 } },
                          iconst: 70000 },
                        { src: { start: { line: 4, col: 52 }, end: { line: 4, col: 52 } },
                          iconst: 0 },
                        { src: { start: { line: 4, col: 55 }, end: { line: 4, col: 55 } },
                          iconst: 70000 },
                        { src: { start: { line: 4, col: 62 }, end: { line: 4, col: 62 } },
                          iconst: 0 },
                        { src: { start: { line: 4, col: 65 }, end: { line: 4, col: 65 } },
                          iconst: 45000 } ],
                     src: { start: { line: 4, col: 26 }, end: { line: 4, col: 70 } } } } ],
             src: { start: { line: 4, col: 0 }, end: { line: 4, col: 71 } } } ],
        fdefs: 
         [ { src: { start: { line: 6, col: 0 }, end: { line: 12, col: 0 } },
             flow: 'default',
             id: 'threshold',
             params: 
              [ { is_const: false,
                  type: 
                   { primitive: 'int',
                     src: { start: { line: 6, col: 23 }, end: { line: 6, col: 28 } },
                     dim: { dim: [ { id: 'n' } ], is_ring: false } },
                  id: 'scores',
                  src: { start: { line: 6, col: 23 }, end: { line: 6, col: 30 } } },
                { is_const: false,
                  type: 
                   { primitive: 'int',
                     src: { start: { line: 6, col: 38 }, end: { line: 6, col: 38 } } },
                  id: 'result',
                  src: { start: { line: 6, col: 38 }, end: { line: 6, col: 42 } } } ],
             vars: [],
             body: 
              { stmts: 
                 [ { kind: 'if',
                     expr: 
                      { op: '<',
                        lexpr: 
                         { id: 'scores',
                           dim: { dim: [ { id: 'result' } ], is_ring: false },
                           src: { start: { line: 8, col: 5 }, end: { line: 8, col: 18 } } },
                        rexpr: 
                         { id: 'scoreThreshold',
                           dim: { dim: [ { id: 'result' } ], is_ring: false },
                           src: { start: { line: 8, col: 20 }, end: { line: 8, col: 41 } } },
                        src: { start: { line: 8, col: 5 }, end: { line: 8, col: 41 } } },
                     if_body: 
                      { stmts: 
                         [ { kind: 'assign',
                             qid: [ 'result' ],
                             expr: 
                              { src: { start: { line: 9, col: 11 }, end: { line: 9, col: 11 } },
                                iconst: 1 },
                             src: { start: { line: 9, col: 2 }, end: { line: 9, col: 11 } } } ],
                        kind: 'block',
                        src: { start: { line: 8, col: 43 }, end: { line: 10, col: 1 } } },
                     src: { start: { line: 8, col: 1 }, end: { line: 10, col: 1 } } },
                   { fcall: { qid: [ 'next' ], params: [ { expr: { qid: [ 'result' ] } } ] },
                     src: { start: { line: 11, col: 1 }, end: { line: 11, col: 12 } } } ],
                kind: 'block',
                src: { start: { line: 6, col: 0 }, end: { line: 12, col: 0 } } } } ] },
     majority_vote: 
      { name: 'majority_vote',
        src: { start: { line: 1, col: 0 }, end: { line: 51, col: 0 } },
        uses: [],
        vars: [],
        fdefs: 
         [ { src: { start: { line: 3, col: 0 }, end: { line: 18, col: 0 } },
             id: 'init',
             params: 
              [ { is_const: false,
                  type: 
                   { primitive: 'int',
                     src: { start: { line: 3, col: 5 }, end: { line: 3, col: 5 } } },
                  id: 'maxLabelIndexIP',
                  src: { start: { line: 3, col: 5 }, end: { line: 3, col: 9 } } } ],
             vars: [],
             body: 
              { stmts: 
                 [ { kind: 'assign',
                     qid: [ 'initStatus' ],
                     expr: 
                      { src: { start: { line: 5, col: 14 }, end: { line: 5, col: 14 } },
                        iconst: 0 },
                     src: { start: { line: 5, col: 1 }, end: { line: 5, col: 14 } } },
                   { kind: 'if',
                     expr: 
                      { op: '>',
                        lexpr: { qid: [ 'maxLabelIndex' ] },
                        rexpr: { qid: [ 'MAX_LABEL_INDEX' ] },
                        src: { start: { line: 6, col: 4 }, end: { line: 6, col: 20 } } },
                     if_body: 
                      { stmts: 
                         [ { kind: 'assign',
                             qid: [ 'initStatus' ],
                             expr: 
                              { src: { start: { line: 8, col: 15 }, end: { line: 8, col: 16 } },
                                up: '-',
                                expr: 
                                 { src: { start: { line: 8, col: 16 }, end: { line: 8, col: 16 } },
                                   iconst: 1 } },
                             src: { start: { line: 8, col: 2 }, end: { line: 8, col: 16 } } } ],
                        kind: 'block',
                        src: { start: { line: 7, col: 1 }, end: { line: 10, col: 1 } } },
                     src: { start: { line: 6, col: 1 }, end: { line: 10, col: 1 } } },
                   { kind: 'assign',
                     qid: [ 'maxLabelIndex' ],
                     expr: { qid: [ 'maxLabelIndexIP' ] },
                     src: { start: { line: 12, col: 1 }, end: { line: 12, col: 17 } } },
                   { kind: 'assign',
                     qid: [ 'front' ],
                     expr: 
                      { src: { start: { line: 13, col: 9 }, end: { line: 13, col: 10 } },
                        up: '-',
                        expr: 
                         { src: { start: { line: 13, col: 10 }, end: { line: 13, col: 10 } },
                           iconst: 1 } },
                     src: { start: { line: 13, col: 1 }, end: { line: 13, col: 10 } } },
                   { kind: 'assign',
                     qid: [ 'back' ],
                     expr: 
                      { src: { start: { line: 14, col: 8 }, end: { line: 14, col: 9 } },
                        up: '-',
                        expr: 
                         { src: { start: { line: 14, col: 9 }, end: { line: 14, col: 9 } },
                           iconst: 1 } },
                     src: { start: { line: 14, col: 1 }, end: { line: 14, col: 9 } } },
                   { kind: 'for',
                     ids: [ 'i' ],
                     range: 
                      { from: 
                         { src: { start: { line: 15, col: 11 }, end: { line: 15, col: 11 } },
                           iconst: 0 },
                        to: 
                         { id: 'maxLabelIndex',
                           src: { start: { line: 15, col: 13 }, end: { line: 15, col: 13 } } },
                        is_inclusive: true,
                        src: { start: { line: 15, col: 10 }, end: { line: 15, col: 26 } } },
                     body: 
                      { stmts: 
                         [ { kind: 'assign',
                             qid: [ 'resultScores' ],
                             expr: 
                              { src: { start: { line: 16, col: 20 }, end: { line: 16, col: 20 } },
                                iconst: 0 },
                             src: { start: { line: 16, col: 2 }, end: { line: 16, col: 20 } },
                             dim: { dim: [ { id: 'i' } ], is_ring: false } } ],
                        kind: 'block',
                        src: { start: { line: 15, col: 27 }, end: { line: 17, col: 1 } } },
                     src: { start: { line: 15, col: 1 }, end: { line: 17, col: 1 } } } ],
                kind: 'block',
                src: { start: { line: 3, col: 0 }, end: { line: 18, col: 0 } } } },
           { src: { start: { line: 20, col: 0 }, end: { line: 25, col: 0 } },
             flow: 'default',
             id: 'vote',
             params: 
              [ { is_const: false,
                  type: 
                   { primitive: 'int',
                     src: { start: { line: 20, col: 18 }, end: { line: 20, col: 18 } } },
                  id: 'result',
                  src: { start: { line: 20, col: 18 }, end: { line: 20, col: 22 } } } ],
             vars: [],
             body: 
              { stmts: 
                 [ { kind: 'assign',
                     qid: [ 'out' ],
                     expr: 
                      { fcall: 
                         { qid: [ 'queue', 'push' ],
                           params: [ { expr: { qid: [ 'result' ] } } ] },
                        src: { start: { line: 21, col: 7 }, end: { line: 21, col: 24 } } },
                     src: { start: { line: 21, col: 1 }, end: { line: 21, col: 24 } } },
                   { fcall: 
                      { qid: [ 'updateVote' ],
                        params: 
                         [ { expr: { qid: [ 'result' ] } },
                           { expr: { qid: [ 'out' ] } } ] },
                     src: { start: { line: 22, col: 1 }, end: { line: 22, col: 24 } } },
                   { fcall: 
                      { qid: [ 'next' ],
                        params: 
                         [ { expr: 
                              { fcall: { qid: [ 'computeResult' ], params: [] },
                                src: { start: { line: 24, col: 6 }, end: { line: 24, col: 20 } } } } ] },
                     src: { start: { line: 24, col: 1 }, end: { line: 24, col: 21 } } } ],
                kind: 'block',
                src: { start: { line: 20, col: 0 }, end: { line: 25, col: 0 } } } },
           { src: { start: { line: 28, col: 0 }, end: { line: 34, col: 0 } },
             id: 'updateVote',
             params: 
              [ { is_const: false,
                  type: 
                   { primitive: 'int',
                     src: { start: { line: 28, col: 11 }, end: { line: 28, col: 11 } } },
                  id: 'inval',
                  src: { start: { line: 28, col: 11 }, end: { line: 28, col: 15 } } },
                { is_const: false,
                  type: 
                   { primitive: 'int',
                     src: { start: { line: 28, col: 22 }, end: { line: 28, col: 22 } } },
                  id: 'outval',
                  src: { start: { line: 28, col: 22 }, end: { line: 28, col: 26 } } } ],
             vars: [],
             body: 
              { stmts: 
                 [ { kind: 'assign',
                     qid: [ 'resultScores' ],
                     expr: 
                      { src: { start: { line: 30, col: 23 }, end: { line: 30, col: 45 } },
                        op: '+',
                        lexpr: 
                         { id: 'resultScores',
                           dim: { dim: [ { id: 'inval' } ], is_ring: false },
                           src: { start: { line: 30, col: 23 }, end: { line: 30, col: 41 } } },
                        rexpr: 
                         { src: { start: { line: 30, col: 45 }, end: { line: 30, col: 45 } },
                           iconst: 1 } },
                     src: { start: { line: 30, col: 1 }, end: { line: 30, col: 45 } },
                     dim: { dim: [ { id: 'inval' } ], is_ring: false } },
                   { kind: 'if',
                     expr: 
                      { op: '!=',
                        lexpr: { qid: [ 'outval' ] },
                        rexpr: 
                         { src: { start: { line: 31, col: 12 }, end: { line: 31, col: 12 } },
                           iconst: 0 },
                        src: { start: { line: 31, col: 4 }, end: { line: 31, col: 12 } } },
                     if_body: 
                      { stmts: 
                         [ { kind: 'assign',
                             qid: [ 'resultScores' ],
                             expr: 
                              { src: { start: { line: 32, col: 25 }, end: { line: 32, col: 48 } },
                                op: '-',
                                lexpr: 
                                 { id: 'resultScores',
                                   dim: { dim: [ { id: 'outval' } ], is_ring: false },
                                   src: { start: { line: 32, col: 25 }, end: { line: 32, col: 44 } } },
                                rexpr: 
                                 { src: { start: { line: 32, col: 48 }, end: { line: 32, col: 48 } },
                                   iconst: 1 } },
                             src: { start: { line: 32, col: 2 }, end: { line: 32, col: 48 } },
                             dim: { dim: [ { id: 'outval' } ], is_ring: false } } ],
                        kind: 'block',
                        src: { start: { line: 31, col: 14 }, end: { line: 33, col: 1 } } },
                     src: { start: { line: 31, col: 1 }, end: { line: 33, col: 1 } } } ],
                kind: 'block',
                src: { start: { line: 28, col: 0 }, end: { line: 34, col: 0 } } } },
           { src: { start: { line: 36, col: 0 }, end: { line: 51, col: 0 } },
             type: 
              { primitive: 'int',
                src: { start: { line: 36, col: 0 }, end: { line: 36, col: 0 } } },
             id: 'computeResult',
             params: [],
             vars: 
              [ { type: 
                   { primitive: 'int',
                     src: { start: { line: 38, col: 1 }, end: { line: 38, col: 1 } } },
                  is_const: false,
                  defs: 
                   [ { id: 'maxCount',
                       init: 
                        { src: { start: { line: 38, col: 16 }, end: { line: 38, col: 17 } },
                          up: '-',
                          expr: 
                           { src: { start: { line: 38, col: 17 }, end: { line: 38, col: 17 } },
                             iconst: 1 } } },
                     { id: 'maxIndex',
                       init: 
                        { src: { start: { line: 38, col: 31 }, end: { line: 38, col: 31 } },
                          iconst: 1 } } ],
                  src: { start: { line: 38, col: 1 }, end: { line: 38, col: 32 } } } ],
             body: 
              { stmts: 
                 [ { kind: 'for',
                     ids: [ 'i' ],
                     range: 
                      { from: 
                         { src: { start: { line: 40, col: 11 }, end: { line: 40, col: 11 } },
                           iconst: 0 },
                        to: 
                         { id: 'maxLabelIndex',
                           src: { start: { line: 40, col: 13 }, end: { line: 40, col: 13 } } },
                        is_inclusive: true,
                        src: { start: { line: 40, col: 10 }, end: { line: 40, col: 26 } } },
                     body: 
                      { stmts: 
                         [ { kind: 'if',
                             expr: 
                              { op: '>',
                                lexpr: 
                                 { id: 'resultScores',
                                   dim: { dim: [ { id: 'i' } ], is_ring: false },
                                   src: { start: { line: 42, col: 5 }, end: { line: 42, col: 19 } } },
                                rexpr: { qid: [ 'maxCount' ] },
                                src: { start: { line: 42, col: 5 }, end: { line: 42, col: 21 } } },
                             if_body: 
                              { stmts: 
                                 [ { kind: 'assign',
                                     qid: [ 'maxCount' ],
                                     expr: 
                                      { id: 'resultScores',
                                        dim: { dim: [ { id: 'i' } ], is_ring: false },
                                        src: { start: { line: 44, col: 14 }, end: { line: 44, col: 28 } } },
                                     src: { start: { line: 44, col: 3 }, end: { line: 44, col: 28 } } },
                                   { kind: 'assign',
                                     qid: [ 'maxIndex' ],
                                     expr: { qid: [ 'i' ] },
                                     src: { start: { line: 45, col: 3 }, end: { line: 45, col: 14 } } } ],
                                kind: 'block',
                                src: { start: { line: 43, col: 2 }, end: { line: 47, col: 2 } } },
                             src: { start: { line: 42, col: 2 }, end: { line: 47, col: 2 } } } ],
                        kind: 'block',
                        src: { start: { line: 41, col: 1 }, end: { line: 48, col: 1 } } },
                     src: { start: { line: 40, col: 1 }, end: { line: 48, col: 1 } } },
                   { kind: 'return',
                     expr: { qid: [ 'maxIndex' ] },
                     src: { start: { line: 49, col: 1 }, end: { line: 49, col: 8 } } } ],
                kind: 'block',
                src: { start: { line: 36, col: 0 }, end: { line: 51, col: 0 } } } } ] },
     toggle_led: 
      { name: 'toggle_led',
        src: { start: { line: 1, col: 0 }, end: { line: 15, col: 0 } },
        uses: [ { name: 'arduino' } ],
        vars: [],
        fdefs: 
         [ { src: { start: { line: 5, col: 0 }, end: { line: 7, col: 0 } },
             id: 'init',
             params: [],
             vars: [],
             body: 
              { stmts: 
                 [ { fcall: 
                      { qid: [ 'digitalWrite' ],
                        params: 
                         [ { expr: { qid: [ 'LED_BUILTIN' ] } },
                           { expr: { qid: [ 'HIGH' ] } } ] },
                     src: { start: { line: 6, col: 3 }, end: { line: 6, col: 33 } } } ],
                kind: 'block',
                src: { start: { line: 5, col: 0 }, end: { line: 7, col: 0 } } } },
           { src: { start: { line: 9, col: 0 }, end: { line: 11, col: 0 } },
             flow: 'normal',
             id: 'on',
             params: [],
             vars: [],
             body: 
              { stmts: 
                 [ { fcall: 
                      { qid: [ 'digitalWrite' ],
                        params: 
                         [ { expr: { qid: [ 'LED_PIN' ] } },
                           { expr: { qid: [ 'HIGH' ] } } ] },
                     src: { start: { line: 10, col: 1 }, end: { line: 10, col: 27 } } } ],
                kind: 'block',
                src: { start: { line: 9, col: 0 }, end: { line: 11, col: 0 } } } },
           { src: { start: { line: 13, col: 0 }, end: { line: 15, col: 0 } },
             flow: 'normal',
             id: 'off',
             params: [],
             vars: [],
             body: 
              { stmts: 
                 [ { fcall: 
                      { qid: [ 'digitalWrite' ],
                        params: 
                         [ { expr: { qid: [ 'LED_PIN' ] } },
                           { expr: { qid: [ 'LOW' ] } } ] },
                     src: { start: { line: 14, col: 1 }, end: { line: 14, col: 26 } } } ],
                kind: 'block',
                src: { start: { line: 13, col: 0 }, end: { line: 15, col: 0 } } } } ] },
     ble_send: 
      { name: 'ble_send',
        src: { start: { line: 1, col: 0 }, end: { line: 50, col: 0 } },
        uses: [ { name: 'arduino' } ],
        vars: [],
        fdefs: 
         [ { src: { start: { line: 5, col: 0 }, end: { line: 14, col: 0 } },
             id: 'init',
             params: [],
             vars: [],
             body: 
              { stmts: 
                 [ { fcall: 
                      { qid: [ 'pinPeripheral' ],
                        params: 
                         [ { expr: 
                              { src: { start: { line: 7, col: 15 }, end: { line: 7, col: 15 } },
                                iconst: 0 } },
                           { expr: { qid: [ 'PIO_SERCOM' ] } } ] },
                     src: { start: { line: 7, col: 1 }, end: { line: 7, col: 28 } } },
                   { fcall: 
                      { qid: [ 'pinPeripheral' ],
                        params: 
                         [ { expr: 
                              { src: { start: { line: 8, col: 17 }, end: { line: 8, col: 17 } },
                                iconst: 1 } },
                           { expr: { qid: [ 'PIO_SERCOM' ] } } ] },
                     src: { start: { line: 8, col: 3 }, end: { line: 8, col: 30 } } },
                   { fcall: 
                      { qid: [ 'Serial2', 'begin' ],
                        params: 
                         [ { expr: 
                              { src: { start: { line: 10, col: 17 }, end: { line: 10, col: 17 } },
                                iconst: 9600 } } ] },
                     src: { start: { line: 10, col: 3 }, end: { line: 10, col: 21 } } } ],
                kind: 'block',
                src: { start: { line: 5, col: 0 }, end: { line: 14, col: 0 } } } },
           { src: { start: { line: 16, col: 0 }, end: { line: 44, col: 0 } },
             flow: 'default',
             id: 'send',
             params: 
              [ { is_const: false,
                  type: 
                   { primitive: 'int',
                     src: { start: { line: 16, col: 18 }, end: { line: 16, col: 18 } } },
                  id: 'result',
                  src: { start: { line: 16, col: 18 }, end: { line: 16, col: 22 } } } ],
             vars: [],
             body: 
              { stmts: 
                 [ { fcall: 
                      { qid: [ 'Serial', 'print' ],
                        params: [ { sconst: '" Vote Result: "' } ] },
                     src: { start: { line: 20, col: 1 }, end: { line: 20, col: 30 } } },
                   { fcall: 
                      { qid: [ 'Serial', 'println' ],
                        params: [ { expr: { qid: [ 'voteResult' ] } } ] },
                     src: { start: { line: 21, col: 1 }, end: { line: 21, col: 26 } } },
                   { kind: 'if',
                     expr: 
                      { op: '==',
                        lexpr: { qid: [ 'voteResult' ] },
                        rexpr: 
                         { src: { start: { line: 23, col: 18 }, end: { line: 23, col: 18 } },
                           iconst: 3 },
                        src: { start: { line: 23, col: 4 }, end: { line: 23, col: 18 } } },
                     if_body: 
                      { stmts: 
                         [ { fcall: 
                              { qid: [ 'Serial2', 'println' ],
                                params: [ { sconst: '"double_tap"' } ] },
                             src: { start: { line: 24, col: 2 }, end: { line: 24, col: 30 } } },
                           { fcall: 
                              { qid: [ 'Serial', 'println' ],
                                params: [ { sconst: '"double_tap"' } ] },
                             src: { start: { line: 25, col: 2 }, end: { line: 25, col: 29 } } } ],
                        kind: 'block',
                        src: { start: { line: 23, col: 20 }, end: { line: 26, col: 1 } } },
                     src: { start: { line: 23, col: 1 }, end: { line: 43, col: 1 } },
                     else_body: 
                      { kind: 'if',
                        expr: 
                         { op: '==',
                           lexpr: { qid: [ 'voteResult' ] },
                           rexpr: 
                            { src: { start: { line: 26, col: 25 }, end: { line: 26, col: 25 } },
                              iconst: 5 },
                           src: { start: { line: 26, col: 11 }, end: { line: 26, col: 25 } } },
                        if_body: 
                         { stmts: 
                            [ { fcall: 
                                 { qid: [ 'Serial2', 'println' ],
                                   params: [ { sconst: '"right_twist"' } ] },
                                src: { start: { line: 27, col: 2 }, end: { line: 27, col: 31 } } },
                              { fcall: 
                                 { qid: [ 'Serial', 'println' ],
                                   params: [ { sconst: '"right_twist"' } ] },
                                src: { start: { line: 28, col: 2 }, end: { line: 28, col: 30 } } } ],
                           kind: 'block',
                           src: { start: { line: 26, col: 27 }, end: { line: 29, col: 1 } } },
                        src: { start: { line: 26, col: 8 }, end: { line: 43, col: 1 } },
                        else_body: 
                         { kind: 'if',
                           expr: 
                            { op: '==',
                              lexpr: { qid: [ 'voteResult' ] },
                              rexpr: 
                               { src: { start: { line: 29, col: 25 }, end: { line: 29, col: 25 } },
                                 iconst: 4 },
                              src: { start: { line: 29, col: 11 }, end: { line: 29, col: 25 } } },
                           if_body: 
                            { stmts: 
                               [ { fcall: 
                                    { qid: [ 'Serial2', 'println' ],
                                      params: [ { sconst: '"right_twist"' } ] },
                                   src: { start: { line: 30, col: 2 }, end: { line: 30, col: 31 } } },
                                 { fcall: 
                                    { qid: [ 'Serial', 'println' ],
                                      params: [ { sconst: '"right_twist"' } ] },
                                   src: { start: { line: 31, col: 2 }, end: { line: 31, col: 30 } } } ],
                              kind: 'block',
                              src: { start: { line: 29, col: 27 }, end: { line: 32, col: 1 } } },
                           src: { start: { line: 29, col: 8 }, end: { line: 43, col: 1 } },
                           else_body: 
                            { kind: 'if',
                              expr: 
                               { op: '==',
                                 lexpr: { qid: [ 'voteResult' ] },
                                 rexpr: 
                                  { src: { start: { line: 32, col: 25 }, end: { line: 32, col: 25 } },
                                    iconst: 6 },
                                 src: { start: { line: 32, col: 11 }, end: { line: 32, col: 25 } } },
                              if_body: 
                               { stmts: [],
                                 kind: 'block',
                                 src: { start: { line: 32, col: 27 }, end: { line: 37, col: 1 } } },
                              src: { start: { line: 32, col: 8 }, end: { line: 43, col: 1 } },
                              else_body: 
                               { kind: 'if',
                                 expr: 
                                  { op: '==',
                                    lexpr: { qid: [ 'voteResult' ] },
                                    rexpr: 
                                     { src: { start: { line: 37, col: 25 }, end: { line: 37, col: 25 } },
                                       iconst: 7 },
                                    src: { start: { line: 37, col: 11 }, end: { line: 37, col: 25 } } },
                                 if_body: 
                                  { stmts: 
                                     [ { fcall: 
                                          { qid: [ 'Serial2', 'println' ],
                                            params: [ { sconst: '"twirl"' } ] },
                                         src: { start: { line: 38, col: 2 }, end: { line: 38, col: 25 } } },
                                       { fcall: 
                                          { qid: [ 'Serial', 'println' ],
                                            params: [ { sconst: '"twirl"' } ] },
                                         src: { start: { line: 39, col: 2 }, end: { line: 39, col: 24 } } } ],
                                    kind: 'block',
                                    src: { start: { line: 37, col: 27 }, end: { line: 40, col: 1 } } },
                                 src: { start: { line: 37, col: 8 }, end: { line: 43, col: 1 } },
                                 else_body: 
                                  { kind: 'if',
                                    expr: 
                                     { op: '==',
                                       lexpr: { qid: [ 'voteResult' ] },
                                       rexpr: 
                                        { src: { start: { line: 40, col: 25 }, end: { line: 40, col: 25 } },
                                          iconst: 9 },
                                       src: { start: { line: 40, col: 11 }, end: { line: 40, col: 25 } } },
                                    if_body: 
                                     { stmts: 
                                        [ { fcall: 
                                             { qid: [ 'Serial2', 'println' ],
                                               params: [ { sconst: '"double_swipe"' } ] },
                                            src: { start: { line: 41, col: 2 }, end: { line: 41, col: 32 } } },
                                          { fcall: 
                                             { qid: [ 'Serial', 'println' ],
                                               params: [ { sconst: '"double_swipe"' } ] },
                                            src: { start: { line: 42, col: 2 }, end: { line: 42, col: 31 } } } ],
                                       kind: 'block',
                                       src: { start: { line: 40, col: 27 }, end: { line: 43, col: 1 } } },
                                    src: { start: { line: 40, col: 8 }, end: { line: 43, col: 1 } } } } } } } } ],
                kind: 'block',
                src: { start: { line: 16, col: 0 }, end: { line: 44, col: 0 } } } },
           { src: { start: { line: 46, col: 0 }, end: { line: 50, col: 0 } },
             type: 
              { primitive: 'boolean',
                src: { start: { line: 46, col: 0 }, end: { line: 46, col: 0 } } },
             id: 'bleSetup',
             params: [],
             vars: [],
             body: 
              { stmts: 
                 [ { fcall: 
                      { qid: [ 'delay' ],
                        params: 
                         [ { expr: 
                              { src: { start: { line: 48, col: 8 }, end: { line: 48, col: 8 } },
                                iconst: 500 } } ] },
                     src: { start: { line: 48, col: 2 }, end: { line: 48, col: 11 } } },
                   { kind: 'return',
                     expr: 
                      { bconst: true,
                        src: { start: { line: 49, col: 9 }, end: { line: 49, col: 9 } } },
                     src: { start: { line: 49, col: 2 }, end: { line: 49, col: 9 } } } ],
                kind: 'block',
                src: { start: { line: 46, col: 0 }, end: { line: 50, col: 0 } } } } ] } } }
