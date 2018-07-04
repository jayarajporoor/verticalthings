Parsing ../apps/icane-beta/icane_test.vt
Parsing ../apps/icane-beta/mpu_acq_test.vt
Parsing ../apps/icane-beta/arduino.vt
Parsing ../apps/icane-beta/normalize_inp_test.vt
Parsing ../apps/icane-beta/Config.vt
Parsing ../apps/icane-beta/tlcfeaturizer_test.vt
featureVector FEATURE_LENGTH null
featureVectorF FEATURE_LENGTH { name: 'FEATURE_LENGTH',
  info: 
   { type: { primitive: 'int', is_const: true },
     src: { start: [Object], end: [Object] },
     value: { iconst: undefined },
     is_dim: true },
  scope_names: [ 'tlcfeaturizer_test', 'featurizer' ] }
Parsing ../apps/icane-beta/Config.vt
LT entry with unknown size  tlcfeaturizer_test_featurizer_featureVector  cannot be automatically allocated.
LT entry with unknown size  tlcfeaturizer_test_featurizer_featureVectorF  cannot be automatically allocated.
SymbolTable {
  name: '<root>',
  parent: undefined,
  symbols: {},
  scopes: 
   { mpu_acq_test: 
      SymbolTable {
        name: 'mpu_acq_test',
        parent: [Circular],
        symbols: 
         { x: 
            { name: 'x',
              info: 
               { type: 
                  { primitive: 'int',
                    src: { start: { line: 5, col: 6 }, end: { line: 5, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 5, col: 0 }, end: { line: 5, col: 29 } },
                 value: 
                  { src: { start: { line: 5, col: 14 }, end: { line: 5, col: 14 } },
                    iconst: 0 } },
              scope_names: [ 'mpu_acq_test' ] },
           y: 
            { name: 'y',
              info: 
               { type: 
                  { primitive: 'int',
                    src: { start: { line: 5, col: 6 }, end: { line: 5, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 5, col: 0 }, end: { line: 5, col: 29 } },
                 value: 
                  { src: { start: { line: 5, col: 21 }, end: { line: 5, col: 21 } },
                    iconst: 1 } },
              scope_names: [ 'mpu_acq_test' ] },
           z: 
            { name: 'z',
              info: 
               { type: 
                  { primitive: 'int',
                    src: { start: { line: 5, col: 6 }, end: { line: 5, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 5, col: 0 }, end: { line: 5, col: 29 } },
                 value: 
                  { src: { start: { line: 5, col: 28 }, end: { line: 5, col: 28 } },
                    iconst: 2 } },
              scope_names: [ 'mpu_acq_test' ] },
           mpu1: 
            { name: 'mpu1',
              info: 
               { type: 
                  { qid: [ 'MPU6050' ],
                    id: 'MPU6050',
                    src: { start: { line: 7, col: 0 }, end: { line: 7, col: 0 } },
                    is_const: false },
                 is_const: undefined,
                 src: { start: { line: 7, col: 0 }, end: { line: 7, col: 12 } },
                 value: undefined },
              scope_names: [ 'mpu_acq_test' ] },
           fifoPacketSize: 
            { name: 'fifoPacketSize',
              info: 
               { type: 
                  { primitive: 'uint16_t',
                    src: { start: { line: 8, col: 0 }, end: { line: 8, col: 0 } },
                    is_const: false },
                 is_const: undefined,
                 src: { start: { line: 8, col: 0 }, end: { line: 8, col: 23 } },
                 value: undefined },
              scope_names: [ 'mpu_acq_test' ] },
           fifoBuffer: 
            { name: 'fifoBuffer',
              info: 
               { type: 
                  { primitive: 'uint8_t',
                    src: { start: { line: 9, col: 0 }, end: { line: 9, col: 10 } },
                    dim: { dim: [ { iconst: 64 } ], is_ring: false },
                    is_const: false },
                 is_const: undefined,
                 src: { start: { line: 9, col: 0 }, end: { line: 9, col: 22 } },
                 value: undefined,
                 size: 64 },
              scope_names: [ 'mpu_acq_test' ] },
           currBucketBufferSize: 
            { name: 'currBucketBufferSize',
              info: 
               { type: 
                  { primitive: 'uint16_t',
                    src: { start: { line: 10, col: 0 }, end: { line: 10, col: 0 } },
                    is_const: false },
                 is_const: undefined,
                 src: { start: { line: 10, col: 0 }, end: { line: 10, col: 31 } },
                 value: 
                  { src: { start: { line: 10, col: 30 }, end: { line: 10, col: 30 } },
                    iconst: 0 } },
              scope_names: [ 'mpu_acq_test' ] },
           numNewReadings: 
            { name: 'numNewReadings',
              info: 
               { type: 
                  { primitive: 'uint16_t',
                    src: { start: { line: 11, col: 0 }, end: { line: 11, col: 0 } },
                    is_const: false },
                 is_const: undefined,
                 src: { start: { line: 11, col: 0 }, end: { line: 11, col: 25 } },
                 value: 
                  { src: { start: { line: 11, col: 24 }, end: { line: 11, col: 24 } },
                    iconst: 0 } },
              scope_names: [ 'mpu_acq_test' ] },
           lastSent: 
            { name: 'lastSent',
              info: 
               { type: 
                  { primitive: 'uint32_t',
                    src: { start: { line: 12, col: 0 }, end: { line: 12, col: 0 } },
                    is_const: false },
                 is_const: undefined,
                 src: { start: { line: 12, col: 0 }, end: { line: 12, col: 21 } },
                 value: 
                  { src: { start: { line: 12, col: 20 }, end: { line: 12, col: 20 } },
                    iconst: 0 } },
              scope_names: [ 'mpu_acq_test' ] },
           samplesAfterReset: 
            { name: 'samplesAfterReset',
              info: 
               { type: 
                  { primitive: 'uint32_t',
                    src: { start: { line: 13, col: 0 }, end: { line: 13, col: 0 } },
                    is_const: false },
                 is_const: undefined,
                 src: { start: { line: 13, col: 0 }, end: { line: 13, col: 30 } },
                 value: 
                  { src: { start: { line: 13, col: 29 }, end: { line: 13, col: 29 } },
                    iconst: 0 } },
              scope_names: [ 'mpu_acq_test' ] },
           init: 
            { name: 'init',
              info: 
               { type: 
                  { is_func: true,
                    ftype: 
                     { primitive: 'void',
                       src: { start: { line: 15, col: 0 }, end: { line: 15, col: 0 } } },
                    formal_params: [] },
                 src: { start: { line: 15, col: 0 }, end: { line: 31, col: 0 } } },
              scope_names: [ 'mpu_acq_test' ] },
           mpu_acq: 
            { name: 'mpu_acq',
              info: 
               { type: { is_func: true, ftype: undefined, formal_params: [] },
                 src: { start: { line: 33, col: 0 }, end: { line: 54, col: 0 } } },
              scope_names: [ 'mpu_acq_test' ] } },
        scopes: 
         { init: 
            SymbolTable {
              name: 'init',
              parent: [Circular],
              symbols: 
               { devStatus: 
                  { name: 'devStatus',
                    info: 
                     { type: 
                        { primitive: 'uint8_t',
                          src: { start: { line: 16, col: 1 }, end: { line: 16, col: 1 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 16, col: 1 }, end: { line: 16, col: 18 } },
                       value: undefined },
                    scope_names: [ 'mpu_acq_test', 'init' ] } },
              scopes: {},
              current_scope: [Circular] },
           mpu_acq: 
            SymbolTable {
              name: 'mpu_acq',
              parent: [Circular],
              symbols: 
               { fifoCount: 
                  { name: 'fifoCount',
                    info: 
                     { type: 
                        { primitive: 'uint16_t',
                          src: { start: { line: 34, col: 1 }, end: { line: 34, col: 1 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 34, col: 1 }, end: { line: 34, col: 41 } },
                       value: 
                        { fcall: { qid: [ 'mpu1', 'getFIFOCount' ], params: [] },
                          src: { start: { line: 34, col: 22 }, end: { line: 34, col: 40 } } } },
                    scope_names: [ 'mpu_acq_test', 'mpu_acq' ] },
                 mpuIntStatus: 
                  { name: 'mpuIntStatus',
                    info: 
                     { type: 
                        { primitive: 'uint8_t',
                          src: { start: { line: 35, col: 1 }, end: { line: 35, col: 1 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 35, col: 1 }, end: { line: 35, col: 43 } },
                       value: 
                        { fcall: { qid: [ 'mpu1', 'getIntStatus' ], params: [] },
                          src: { start: { line: 35, col: 24 }, end: { line: 35, col: 42 } } } },
                    scope_names: [ 'mpu_acq_test', 'mpu_acq' ] },
                 acc: 
                  { name: 'acc',
                    info: 
                     { type: 
                        { primitive: 'int16_t',
                          src: { start: { line: 36, col: 1 }, end: { line: 36, col: 10 } },
                          dim: { dim: [ { iconst: 3 } ], is_ring: false },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 36, col: 1 }, end: { line: 36, col: 19 } },
                       value: undefined,
                       size: 6 },
                    scope_names: [ 'mpu_acq_test', 'mpu_acq' ] },
                 gyr: 
                  { name: 'gyr',
                    info: 
                     { type: 
                        { primitive: 'int16_t',
                          src: { start: { line: 36, col: 1 }, end: { line: 36, col: 10 } },
                          dim: { dim: [ { iconst: 3 } ], is_ring: false },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 36, col: 1 }, end: { line: 36, col: 19 } },
                       value: undefined,
                       size: 6 },
                    scope_names: [ 'mpu_acq_test', 'mpu_acq' ] },
                 acc__: 
                  { name: 'acc__',
                    info: 
                     { type: 
                        { qid: [ 'VectorInt16' ],
                          id: 'VectorInt16',
                          src: { start: { line: 37, col: 1 }, end: { line: 37, col: 1 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 37, col: 1 }, end: { line: 37, col: 24 } },
                       value: undefined },
                    scope_names: [ 'mpu_acq_test', 'mpu_acq' ] },
                 gyr__: 
                  { name: 'gyr__',
                    info: 
                     { type: 
                        { qid: [ 'VectorInt16' ],
                          id: 'VectorInt16',
                          src: { start: { line: 37, col: 1 }, end: { line: 37, col: 1 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 37, col: 1 }, end: { line: 37, col: 24 } },
                       value: undefined },
                    scope_names: [ 'mpu_acq_test', 'mpu_acq' ] } },
              scopes: {},
              current_scope: [Circular] } },
        current_scope: [Circular] },
     arduino: 
      SymbolTable {
        name: 'arduino',
        parent: [Circular],
        symbols: {},
        scopes: {},
        current_scope: [Circular] },
     normalize_inp_test: 
      SymbolTable {
        name: 'normalize_inp_test',
        parent: [Circular],
        symbols: 
         { normAX: 
            { name: 'normAX',
              info: 
               { type: 
                  { primitive: 'float',
                    src: { start: { line: 5, col: 0 }, end: { line: 5, col: 14 } },
                    dim: { dim: [ { iconst: 400 } ], is_ring: true },
                    is_const: false },
                 is_const: undefined,
                 src: { start: { line: 5, col: 0 }, end: { line: 5, col: 62 } },
                 value: undefined,
                 size: 1600 },
              scope_names: [ 'normalize_inp_test' ] },
           __pos_normAX: 
            { name: '__pos_normAX',
              info: 
               { type: { primitive: 'int' },
                 is_const: false,
                 src: { start: { line: 5, col: 0 }, end: { line: 5, col: 62 } },
                 value: { iconst: 0 } },
              scope_names: [ 'normalize_inp_test' ] },
           normAY: 
            { name: 'normAY',
              info: 
               { type: 
                  { primitive: 'float',
                    src: { start: { line: 5, col: 0 }, end: { line: 5, col: 14 } },
                    dim: { dim: [ { iconst: 400 } ], is_ring: true },
                    is_const: false },
                 is_const: undefined,
                 src: { start: { line: 5, col: 0 }, end: { line: 5, col: 62 } },
                 value: undefined,
                 size: 1600 },
              scope_names: [ 'normalize_inp_test' ] },
           __pos_normAY: 
            { name: '__pos_normAY',
              info: 
               { type: { primitive: 'int' },
                 is_const: false,
                 src: { start: { line: 5, col: 0 }, end: { line: 5, col: 62 } },
                 value: { iconst: 0 } },
              scope_names: [ 'normalize_inp_test' ] },
           normAZ: 
            { name: 'normAZ',
              info: 
               { type: 
                  { primitive: 'float',
                    src: { start: { line: 5, col: 0 }, end: { line: 5, col: 14 } },
                    dim: { dim: [ { iconst: 400 } ], is_ring: true },
                    is_const: false },
                 is_const: undefined,
                 src: { start: { line: 5, col: 0 }, end: { line: 5, col: 62 } },
                 value: undefined,
                 size: 1600 },
              scope_names: [ 'normalize_inp_test' ] },
           __pos_normAZ: 
            { name: '__pos_normAZ',
              info: 
               { type: { primitive: 'int' },
                 is_const: false,
                 src: { start: { line: 5, col: 0 }, end: { line: 5, col: 62 } },
                 value: { iconst: 0 } },
              scope_names: [ 'normalize_inp_test' ] },
           normGX: 
            { name: 'normGX',
              info: 
               { type: 
                  { primitive: 'float',
                    src: { start: { line: 5, col: 0 }, end: { line: 5, col: 14 } },
                    dim: { dim: [ { iconst: 400 } ], is_ring: true },
                    is_const: false },
                 is_const: undefined,
                 src: { start: { line: 5, col: 0 }, end: { line: 5, col: 62 } },
                 value: undefined,
                 size: 1600 },
              scope_names: [ 'normalize_inp_test' ] },
           __pos_normGX: 
            { name: '__pos_normGX',
              info: 
               { type: { primitive: 'int' },
                 is_const: false,
                 src: { start: { line: 5, col: 0 }, end: { line: 5, col: 62 } },
                 value: { iconst: 0 } },
              scope_names: [ 'normalize_inp_test' ] },
           normGY: 
            { name: 'normGY',
              info: 
               { type: 
                  { primitive: 'float',
                    src: { start: { line: 5, col: 0 }, end: { line: 5, col: 14 } },
                    dim: { dim: [ { iconst: 400 } ], is_ring: true },
                    is_const: false },
                 is_const: undefined,
                 src: { start: { line: 5, col: 0 }, end: { line: 5, col: 62 } },
                 value: undefined,
                 size: 1600 },
              scope_names: [ 'normalize_inp_test' ] },
           __pos_normGY: 
            { name: '__pos_normGY',
              info: 
               { type: { primitive: 'int' },
                 is_const: false,
                 src: { start: { line: 5, col: 0 }, end: { line: 5, col: 62 } },
                 value: { iconst: 0 } },
              scope_names: [ 'normalize_inp_test' ] },
           normGZ: 
            { name: 'normGZ',
              info: 
               { type: 
                  { primitive: 'float',
                    src: { start: { line: 5, col: 0 }, end: { line: 5, col: 14 } },
                    dim: { dim: [ { iconst: 400 } ], is_ring: true },
                    is_const: false },
                 is_const: undefined,
                 src: { start: { line: 5, col: 0 }, end: { line: 5, col: 62 } },
                 value: undefined,
                 size: 1600 },
              scope_names: [ 'normalize_inp_test' ] },
           __pos_normGZ: 
            { name: '__pos_normGZ',
              info: 
               { type: { primitive: 'int' },
                 is_const: false,
                 src: { start: { line: 5, col: 0 }, end: { line: 5, col: 62 } },
                 value: { iconst: 0 } },
              scope_names: [ 'normalize_inp_test' ] },
           x: 
            { name: 'x',
              info: 
               { type: 
                  { primitive: 'int',
                    src: { start: { line: 6, col: 6 }, end: { line: 6, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 6, col: 0 }, end: { line: 6, col: 23 } },
                 value: 
                  { src: { start: { line: 6, col: 12 }, end: { line: 6, col: 12 } },
                    iconst: 0 } },
              scope_names: [ 'normalize_inp_test' ] },
           y: 
            { name: 'y',
              info: 
               { type: 
                  { primitive: 'int',
                    src: { start: { line: 6, col: 6 }, end: { line: 6, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 6, col: 0 }, end: { line: 6, col: 23 } },
                 value: 
                  { src: { start: { line: 6, col: 17 }, end: { line: 6, col: 17 } },
                    iconst: 1 } },
              scope_names: [ 'normalize_inp_test' ] },
           z: 
            { name: 'z',
              info: 
               { type: 
                  { primitive: 'int',
                    src: { start: { line: 6, col: 6 }, end: { line: 6, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 6, col: 0 }, end: { line: 6, col: 23 } },
                 value: 
                  { src: { start: { line: 6, col: 22 }, end: { line: 6, col: 22 } },
                    iconst: 2 } },
              scope_names: [ 'normalize_inp_test' ] },
           minAcc: 
            { name: 'minAcc',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 8, col: 0 }, end: { line: 8, col: 9 } },
                    dim: { dim: [ { iconst: 3 } ], is_ring: false },
                    is_const: false },
                 is_const: undefined,
                 src: { start: { line: 8, col: 0 }, end: { line: 8, col: 41 } },
                 value: undefined,
                 size: 6 },
              scope_names: [ 'normalize_inp_test' ] },
           maxAcc: 
            { name: 'maxAcc',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 8, col: 0 }, end: { line: 8, col: 9 } },
                    dim: { dim: [ { iconst: 3 } ], is_ring: false },
                    is_const: false },
                 is_const: undefined,
                 src: { start: { line: 8, col: 0 }, end: { line: 8, col: 41 } },
                 value: undefined,
                 size: 6 },
              scope_names: [ 'normalize_inp_test' ] },
           minGyr: 
            { name: 'minGyr',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 8, col: 0 }, end: { line: 8, col: 9 } },
                    dim: { dim: [ { iconst: 3 } ], is_ring: false },
                    is_const: false },
                 is_const: undefined,
                 src: { start: { line: 8, col: 0 }, end: { line: 8, col: 41 } },
                 value: undefined,
                 size: 6 },
              scope_names: [ 'normalize_inp_test' ] },
           maxGyr: 
            { name: 'maxGyr',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 8, col: 0 }, end: { line: 8, col: 9 } },
                    dim: { dim: [ { iconst: 3 } ], is_ring: false },
                    is_const: false },
                 is_const: undefined,
                 src: { start: { line: 8, col: 0 }, end: { line: 8, col: 41 } },
                 value: undefined,
                 size: 6 },
              scope_names: [ 'normalize_inp_test' ] },
           init: 
            { name: 'init',
              info: 
               { type: 
                  { is_func: true,
                    ftype: 
                     { primitive: 'void',
                       src: { start: { line: 10, col: 0 }, end: { line: 10, col: 0 } } },
                    formal_params: [] },
                 src: { start: { line: 10, col: 0 }, end: { line: 15, col: 0 } } },
              scope_names: [ 'normalize_inp_test' ] },
           minMaxNormalize: 
            { name: 'minMaxNormalize',
              info: 
               { type: 
                  { is_func: true,
                    ftype: 
                     { primitive: 'void',
                       src: { start: { line: 17, col: 0 }, end: { line: 17, col: 0 } } },
                    formal_params: 
                     [ { is_const: true,
                         type: 
                          { primitive: 'int16_t',
                            src: { start: { line: 17, col: 27 }, end: { line: 17, col: 36 } },
                            dim: { dim: [ { iconst: 3 } ], is_ring: false } },
                         id: 'v',
                         src: { start: { line: 17, col: 21 }, end: { line: 17, col: 38 } } },
                       { is_const: true,
                         type: 
                          { primitive: 'int16_t',
                            src: { start: { line: 17, col: 47 }, end: { line: 17, col: 56 } },
                            dim: { dim: [ { iconst: 3 } ], is_ring: false } },
                         id: 'vmin',
                         src: { start: { line: 17, col: 41 }, end: { line: 17, col: 58 } } },
                       { is_const: true,
                         type: 
                          { primitive: 'int16_t',
                            src: { start: { line: 17, col: 70 }, end: { line: 17, col: 79 } },
                            dim: { dim: [ { iconst: 3 } ], is_ring: false } },
                         id: 'vmax',
                         src: { start: { line: 17, col: 64 }, end: { line: 17, col: 81 } } },
                       { is_const: false,
                         type: 
                          { primitive: 'float',
                            src: { start: { line: 17, col: 87 }, end: { line: 17, col: 94 } },
                            dim: { dim: [ { iconst: 3 } ], is_ring: false } },
                         id: 'dst',
                         src: { start: { line: 17, col: 87 }, end: { line: 17, col: 96 } } } ] },
                 src: { start: { line: 17, col: 0 }, end: { line: 24, col: 0 } } },
              scope_names: [ 'normalize_inp_test' ] },
           normalize: 
            { name: 'normalize',
              info: 
               { type: 
                  { is_func: true,
                    ftype: undefined,
                    formal_params: 
                     [ { is_const: false,
                         type: 
                          { primitive: 'int16_t',
                            src: { start: { line: 26, col: 23 }, end: { line: 26, col: 32 } },
                            dim: { dim: [ { iconst: 3 } ], is_ring: false } },
                         id: 'acc',
                         src: { start: { line: 26, col: 23 }, end: { line: 26, col: 34 } } },
                       { is_const: false,
                         type: 
                          { primitive: 'int16_t',
                            src: { start: { line: 26, col: 39 }, end: { line: 26, col: 48 } },
                            dim: { dim: [ { iconst: 3 } ], is_ring: false } },
                         id: 'gyr',
                         src: { start: { line: 26, col: 39 }, end: { line: 26, col: 50 } } },
                       { is_const: false,
                         type: 
                          { primitive: 'int16_t',
                            src: { start: { line: 26, col: 55 }, end: { line: 26, col: 55 } } },
                         id: 'numNewReadings',
                         src: { start: { line: 26, col: 55 }, end: { line: 26, col: 63 } } },
                       { is_const: false,
                         type: 
                          { primitive: 'int32_t',
                            src: { start: { line: 26, col: 79 }, end: { line: 26, col: 79 } } },
                         id: 'samplesAfterReset',
                         src: { start: { line: 26, col: 79 }, end: { line: 26, col: 87 } } } ] },
                 src: { start: { line: 26, col: 0 }, end: { line: 47, col: 0 } } },
              scope_names: [ 'normalize_inp_test' ] },
           BAUD_RATE: 
            { name: 'BAUD_RATE',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 2, col: 6 }, end: { line: 2, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 2, col: 0 }, end: { line: 2, col: 30 } },
                 value: 
                  { src: { start: { line: 2, col: 24 }, end: { line: 2, col: 24 } },
                    iconst: 115200 } },
              scope_names: [ 'normalize_inp_test' ] },
           NUM_BUCKETS: 
            { name: 'NUM_BUCKETS',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 3, col: 6 }, end: { line: 3, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 3, col: 0 }, end: { line: 3, col: 28 } },
                 value: 
                  { src: { start: { line: 3, col: 26 }, end: { line: 3, col: 26 } },
                    iconst: 20 } },
              scope_names: [ 'normalize_inp_test' ] },
           STRIDE: 
            { name: 'STRIDE',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 4, col: 6 }, end: { line: 4, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 4, col: 0 }, end: { line: 4, col: 23 } },
                 value: 
                  { src: { start: { line: 4, col: 21 }, end: { line: 4, col: 21 } },
                    iconst: 20 } },
              scope_names: [ 'normalize_inp_test' ] },
           BUCKET_WIDTH: 
            { name: 'BUCKET_WIDTH',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 5, col: 6 }, end: { line: 5, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 5, col: 0 }, end: { line: 5, col: 29 } },
                 value: 
                  { src: { start: { line: 5, col: 27 }, end: { line: 5, col: 27 } },
                    iconst: 20 } },
              scope_names: [ 'normalize_inp_test' ] },
           BUCKET_BUFF_WIDTH: 
            { name: 'BUCKET_BUFF_WIDTH',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 6, col: 6 }, end: { line: 6, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 6, col: 0 }, end: { line: 6, col: 34 } },
                 value: 
                  { src: { start: { line: 6, col: 32 }, end: { line: 6, col: 32 } },
                    iconst: 40 } },
              scope_names: [ 'normalize_inp_test' ] },
           FEATURE_LENGTH: 
            { name: 'FEATURE_LENGTH',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 7, col: 6 }, end: { line: 7, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 7, col: 0 }, end: { line: 7, col: 32 } },
                 value: 
                  { src: { start: { line: 7, col: 29 }, end: { line: 7, col: 29 } },
                    iconst: 124 } },
              scope_names: [ 'normalize_inp_test' ] },
           FEAT_VEC_DIM: 
            { name: 'FEAT_VEC_DIM',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 8, col: 6 }, end: { line: 8, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 8, col: 0 }, end: { line: 8, col: 30 } },
                 value: 
                  { src: { start: { line: 8, col: 27 }, end: { line: 8, col: 27 } },
                    iconst: 124 } },
              scope_names: [ 'normalize_inp_test' ] },
           GEST_NOTA: 
            { name: 'GEST_NOTA',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 9, col: 6 }, end: { line: 9, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 9, col: 0 }, end: { line: 9, col: 25 } },
                 value: 
                  { src: { start: { line: 9, col: 24 }, end: { line: 9, col: 24 } },
                    iconst: 0 } },
              scope_names: [ 'normalize_inp_test' ] },
           GEST_SILENCE: 
            { name: 'GEST_SILENCE',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 10, col: 6 }, end: { line: 10, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 10, col: 0 }, end: { line: 10, col: 28 } },
                 value: 
                  { src: { start: { line: 10, col: 27 }, end: { line: 10, col: 27 } },
                    iconst: 1 } },
              scope_names: [ 'normalize_inp_test' ] },
           GEST_TAP: 
            { name: 'GEST_TAP',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 11, col: 6 }, end: { line: 11, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 11, col: 0 }, end: { line: 11, col: 24 } },
                 value: 
                  { src: { start: { line: 11, col: 23 }, end: { line: 11, col: 23 } },
                    iconst: 2 } },
              scope_names: [ 'normalize_inp_test' ] },
           GEST_DTAP: 
            { name: 'GEST_DTAP',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 12, col: 6 }, end: { line: 12, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 12, col: 0 }, end: { line: 12, col: 25 } },
                 value: 
                  { src: { start: { line: 12, col: 24 }, end: { line: 12, col: 24 } },
                    iconst: 3 } },
              scope_names: [ 'normalize_inp_test' ] },
           GEST_LTWIST: 
            { name: 'GEST_LTWIST',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 13, col: 6 }, end: { line: 13, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 13, col: 0 }, end: { line: 13, col: 27 } },
                 value: 
                  { src: { start: { line: 13, col: 26 }, end: { line: 13, col: 26 } },
                    iconst: 4 } },
              scope_names: [ 'normalize_inp_test' ] },
           GEST_RTWIST: 
            { name: 'GEST_RTWIST',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 14, col: 6 }, end: { line: 14, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 14, col: 0 }, end: { line: 14, col: 27 } },
                 value: 
                  { src: { start: { line: 14, col: 26 }, end: { line: 14, col: 26 } },
                    iconst: 5 } },
              scope_names: [ 'normalize_inp_test' ] },
           GEST_Slow_LTWIST: 
            { name: 'GEST_Slow_LTWIST',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 15, col: 6 }, end: { line: 15, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 15, col: 0 }, end: { line: 15, col: 32 } },
                 value: 
                  { src: { start: { line: 15, col: 31 }, end: { line: 15, col: 31 } },
                    iconst: 7 } },
              scope_names: [ 'normalize_inp_test' ] },
           GEST_Slow_RTWIST: 
            { name: 'GEST_Slow_RTWIST',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 16, col: 6 }, end: { line: 16, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 16, col: 0 }, end: { line: 16, col: 32 } },
                 value: 
                  { src: { start: { line: 16, col: 31 }, end: { line: 16, col: 31 } },
                    iconst: 8 } },
              scope_names: [ 'normalize_inp_test' ] } },
        scopes: 
         { init: 
            SymbolTable {
              name: 'init',
              parent: [Circular],
              symbols: {},
              scopes: {},
              current_scope: [Circular] },
           minMaxNormalize: 
            SymbolTable {
              name: 'minMaxNormalize',
              parent: [Circular],
              symbols: 
               { v: 
                  { name: 'v',
                    info: 
                     { type: 
                        { primitive: 'int16_t',
                          src: { start: { line: 17, col: 27 }, end: { line: 17, col: 36 } },
                          dim: { dim: [ { iconst: 3 } ], is_ring: false } },
                       is_const: true,
                       src: { start: { line: 17, col: 21 }, end: { line: 17, col: 38 } },
                       is_formal_param: true },
                    scope_names: [ 'normalize_inp_test', 'minMaxNormalize' ] },
                 vmin: 
                  { name: 'vmin',
                    info: 
                     { type: 
                        { primitive: 'int16_t',
                          src: { start: { line: 17, col: 47 }, end: { line: 17, col: 56 } },
                          dim: { dim: [ { iconst: 3 } ], is_ring: false } },
                       is_const: true,
                       src: { start: { line: 17, col: 41 }, end: { line: 17, col: 58 } },
                       is_formal_param: true },
                    scope_names: [ 'normalize_inp_test', 'minMaxNormalize' ] },
                 vmax: 
                  { name: 'vmax',
                    info: 
                     { type: 
                        { primitive: 'int16_t',
                          src: { start: { line: 17, col: 70 }, end: { line: 17, col: 79 } },
                          dim: { dim: [ { iconst: 3 } ], is_ring: false } },
                       is_const: true,
                       src: { start: { line: 17, col: 64 }, end: { line: 17, col: 81 } },
                       is_formal_param: true },
                    scope_names: [ 'normalize_inp_test', 'minMaxNormalize' ] },
                 dst: 
                  { name: 'dst',
                    info: 
                     { type: 
                        { primitive: 'float',
                          src: { start: { line: 17, col: 87 }, end: { line: 17, col: 94 } },
                          dim: { dim: [ { iconst: 3 } ], is_ring: false } },
                       is_const: false,
                       src: { start: { line: 17, col: 87 }, end: { line: 17, col: 96 } },
                       is_formal_param: true },
                    scope_names: [ 'normalize_inp_test', 'minMaxNormalize' ] } },
              scopes: {},
              current_scope: [Circular] },
           normalize: 
            SymbolTable {
              name: 'normalize',
              parent: [Circular],
              symbols: 
               { acc: 
                  { name: 'acc',
                    info: 
                     { type: 
                        { primitive: 'int16_t',
                          src: { start: { line: 26, col: 23 }, end: { line: 26, col: 32 } },
                          dim: { dim: [ { iconst: 3 } ], is_ring: false } },
                       is_const: false,
                       src: { start: { line: 26, col: 23 }, end: { line: 26, col: 34 } },
                       is_formal_param: true },
                    scope_names: [ 'normalize_inp_test', 'normalize' ] },
                 gyr: 
                  { name: 'gyr',
                    info: 
                     { type: 
                        { primitive: 'int16_t',
                          src: { start: { line: 26, col: 39 }, end: { line: 26, col: 48 } },
                          dim: { dim: [ { iconst: 3 } ], is_ring: false } },
                       is_const: false,
                       src: { start: { line: 26, col: 39 }, end: { line: 26, col: 50 } },
                       is_formal_param: true },
                    scope_names: [ 'normalize_inp_test', 'normalize' ] },
                 numNewReadings: 
                  { name: 'numNewReadings',
                    info: 
                     { type: 
                        { primitive: 'int16_t',
                          src: { start: { line: 26, col: 55 }, end: { line: 26, col: 55 } } },
                       is_const: false,
                       src: { start: { line: 26, col: 55 }, end: { line: 26, col: 63 } },
                       is_formal_param: true },
                    scope_names: [ 'normalize_inp_test', 'normalize' ] },
                 samplesAfterReset: 
                  { name: 'samplesAfterReset',
                    info: 
                     { type: 
                        { primitive: 'int32_t',
                          src: { start: { line: 26, col: 79 }, end: { line: 26, col: 79 } } },
                       is_const: false,
                       src: { start: { line: 26, col: 79 }, end: { line: 26, col: 87 } },
                       is_formal_param: true },
                    scope_names: [ 'normalize_inp_test', 'normalize' ] },
                 normAcc: 
                  { name: 'normAcc',
                    info: 
                     { type: 
                        { primitive: 'float',
                          src: { start: { line: 27, col: 1 }, end: { line: 27, col: 8 } },
                          dim: { dim: [ { iconst: 3 } ], is_ring: false },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 27, col: 1 }, end: { line: 27, col: 26 } },
                       value: undefined,
                       size: 12 },
                    scope_names: [ 'normalize_inp_test', 'normalize' ] },
                 normGyr: 
                  { name: 'normGyr',
                    info: 
                     { type: 
                        { primitive: 'float',
                          src: { start: { line: 27, col: 1 }, end: { line: 27, col: 8 } },
                          dim: { dim: [ { iconst: 3 } ], is_ring: false },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 27, col: 1 }, end: { line: 27, col: 26 } },
                       value: undefined,
                       size: 12 },
                    scope_names: [ 'normalize_inp_test', 'normalize' ] } },
              scopes: {},
              current_scope: [Circular] } },
        current_scope: [Circular] },
     tlcfeaturizer_test: 
      SymbolTable {
        name: 'tlcfeaturizer_test',
        parent: [Circular],
        symbols: 
         { bucketIndex: 
            { name: 'bucketIndex',
              info: 
               { type: 
                  { primitive: 'int',
                    src: { start: { line: 5, col: 0 }, end: { line: 5, col: 0 } },
                    is_const: false },
                 is_const: undefined,
                 src: { start: { line: 5, col: 0 }, end: { line: 5, col: 15 } },
                 value: undefined },
              scope_names: [ 'tlcfeaturizer_test' ] },
           featurizer: 
            { name: 'featurizer',
              info: 
               { type: 
                  { is_func: true,
                    ftype: undefined,
                    formal_params: 
                     [ { is_const: false,
                         type: 
                          { primitive: 'float',
                            src: { start: { line: 7, col: 24 }, end: { line: 7, col: 38 } },
                            dim: { dim: [ { iconst: 400 } ], is_ring: true } },
                         id: 'normAX',
                         src: { start: { line: 7, col: 24 }, end: { line: 7, col: 40 } } },
                       { is_const: false,
                         type: 
                          { primitive: 'float',
                            src: { start: { line: 7, col: 47 }, end: { line: 7, col: 61 } },
                            dim: { dim: [ { iconst: 400 } ], is_ring: true } },
                         id: 'normAY',
                         src: { start: { line: 7, col: 47 }, end: { line: 7, col: 63 } } },
                       { is_const: false,
                         type: 
                          { primitive: 'float',
                            src: { start: { line: 7, col: 70 }, end: { line: 7, col: 84 } },
                            dim: { dim: [ { iconst: 400 } ], is_ring: true } },
                         id: 'normAZ',
                         src: { start: { line: 7, col: 70 }, end: { line: 7, col: 86 } } },
                       { is_const: false,
                         type: 
                          { primitive: 'float',
                            src: { start: { line: 7, col: 94 }, end: { line: 7, col: 108 } },
                            dim: { dim: [ { iconst: 400 } ], is_ring: true } },
                         id: 'normGX',
                         src: { start: { line: 7, col: 94 }, end: { line: 7, col: 110 } } },
                       { is_const: false,
                         type: 
                          { primitive: 'float',
                            src: { start: { line: 7, col: 118 }, end: { line: 7, col: 132 } },
                            dim: { dim: [ { iconst: 400 } ], is_ring: true } },
                         id: 'normGY',
                         src: { start: { line: 7, col: 118 }, end: { line: 7, col: 134 } } },
                       { is_const: false,
                         type: 
                          { primitive: 'float',
                            src: { start: { line: 7, col: 142 }, end: { line: 7, col: 156 } },
                            dim: { dim: [ { iconst: 400 } ], is_ring: true } },
                         id: 'normGZ',
                         src: { start: { line: 7, col: 142 }, end: { line: 7, col: 158 } } } ] },
                 src: { start: { line: 7, col: 0 }, end: { line: 23, col: 0 } } },
              scope_names: [ 'tlcfeaturizer_test' ] },
           getBucket: 
            { name: 'getBucket',
              info: 
               { type: 
                  { is_func: true,
                    ftype: 
                     { primitive: 'void',
                       src: { start: { line: 25, col: 0 }, end: { line: 25, col: 0 } } },
                    formal_params: 
                     [ { is_const: false,
                         type: 
                          { primitive: 'float',
                            src: { start: { line: 25, col: 15 }, end: { line: 25, col: 29 } },
                            dim: { dim: [ { iconst: 400 } ], is_ring: true } },
                         id: 'sensorValue1D',
                         src: { start: { line: 25, col: 15 }, end: { line: 25, col: 31 } } },
                       { is_const: false,
                         type: 
                          { primitive: 'int',
                            src: { start: { line: 25, col: 46 }, end: { line: 25, col: 64 } },
                            dim: { dim: [ { id: 'FEATURE_LENGTH' } ], is_ring: false } },
                         id: 'bucketDistribution',
                         src: { start: { line: 25, col: 46 }, end: { line: 25, col: 66 } } },
                       { is_const: false,
                         type: 
                          { primitive: 'boolean',
                            src: { start: { line: 25, col: 85 }, end: { line: 25, col: 85 } } },
                         id: 'isGY',
                         src: { start: { line: 25, col: 85 }, end: { line: 25, col: 93 } } } ] },
                 src: { start: { line: 25, col: 0 }, end: { line: 121, col: 0 } } },
              scope_names: [ 'tlcfeaturizer_test' ] },
           BAUD_RATE: 
            { name: 'BAUD_RATE',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 2, col: 6 }, end: { line: 2, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 2, col: 0 }, end: { line: 2, col: 30 } },
                 value: 
                  { src: { start: { line: 2, col: 24 }, end: { line: 2, col: 24 } },
                    iconst: 115200 } },
              scope_names: [ 'tlcfeaturizer_test' ] },
           NUM_BUCKETS: 
            { name: 'NUM_BUCKETS',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 3, col: 6 }, end: { line: 3, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 3, col: 0 }, end: { line: 3, col: 28 } },
                 value: 
                  { src: { start: { line: 3, col: 26 }, end: { line: 3, col: 26 } },
                    iconst: 20 } },
              scope_names: [ 'tlcfeaturizer_test' ] },
           STRIDE: 
            { name: 'STRIDE',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 4, col: 6 }, end: { line: 4, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 4, col: 0 }, end: { line: 4, col: 23 } },
                 value: 
                  { src: { start: { line: 4, col: 21 }, end: { line: 4, col: 21 } },
                    iconst: 20 } },
              scope_names: [ 'tlcfeaturizer_test' ] },
           BUCKET_WIDTH: 
            { name: 'BUCKET_WIDTH',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 5, col: 6 }, end: { line: 5, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 5, col: 0 }, end: { line: 5, col: 29 } },
                 value: 
                  { src: { start: { line: 5, col: 27 }, end: { line: 5, col: 27 } },
                    iconst: 20 } },
              scope_names: [ 'tlcfeaturizer_test' ] },
           BUCKET_BUFF_WIDTH: 
            { name: 'BUCKET_BUFF_WIDTH',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 6, col: 6 }, end: { line: 6, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 6, col: 0 }, end: { line: 6, col: 34 } },
                 value: 
                  { src: { start: { line: 6, col: 32 }, end: { line: 6, col: 32 } },
                    iconst: 40 } },
              scope_names: [ 'tlcfeaturizer_test' ] },
           FEATURE_LENGTH: 
            { name: 'FEATURE_LENGTH',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 7, col: 6 }, end: { line: 7, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 7, col: 0 }, end: { line: 7, col: 32 } },
                 value: 
                  { src: { start: { line: 7, col: 29 }, end: { line: 7, col: 29 } },
                    iconst: 124 } },
              scope_names: [ 'tlcfeaturizer_test' ] },
           FEAT_VEC_DIM: 
            { name: 'FEAT_VEC_DIM',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 8, col: 6 }, end: { line: 8, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 8, col: 0 }, end: { line: 8, col: 30 } },
                 value: 
                  { src: { start: { line: 8, col: 27 }, end: { line: 8, col: 27 } },
                    iconst: 124 } },
              scope_names: [ 'tlcfeaturizer_test' ] },
           GEST_NOTA: 
            { name: 'GEST_NOTA',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 9, col: 6 }, end: { line: 9, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 9, col: 0 }, end: { line: 9, col: 25 } },
                 value: 
                  { src: { start: { line: 9, col: 24 }, end: { line: 9, col: 24 } },
                    iconst: 0 } },
              scope_names: [ 'tlcfeaturizer_test' ] },
           GEST_SILENCE: 
            { name: 'GEST_SILENCE',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 10, col: 6 }, end: { line: 10, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 10, col: 0 }, end: { line: 10, col: 28 } },
                 value: 
                  { src: { start: { line: 10, col: 27 }, end: { line: 10, col: 27 } },
                    iconst: 1 } },
              scope_names: [ 'tlcfeaturizer_test' ] },
           GEST_TAP: 
            { name: 'GEST_TAP',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 11, col: 6 }, end: { line: 11, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 11, col: 0 }, end: { line: 11, col: 24 } },
                 value: 
                  { src: { start: { line: 11, col: 23 }, end: { line: 11, col: 23 } },
                    iconst: 2 } },
              scope_names: [ 'tlcfeaturizer_test' ] },
           GEST_DTAP: 
            { name: 'GEST_DTAP',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 12, col: 6 }, end: { line: 12, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 12, col: 0 }, end: { line: 12, col: 25 } },
                 value: 
                  { src: { start: { line: 12, col: 24 }, end: { line: 12, col: 24 } },
                    iconst: 3 } },
              scope_names: [ 'tlcfeaturizer_test' ] },
           GEST_LTWIST: 
            { name: 'GEST_LTWIST',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 13, col: 6 }, end: { line: 13, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 13, col: 0 }, end: { line: 13, col: 27 } },
                 value: 
                  { src: { start: { line: 13, col: 26 }, end: { line: 13, col: 26 } },
                    iconst: 4 } },
              scope_names: [ 'tlcfeaturizer_test' ] },
           GEST_RTWIST: 
            { name: 'GEST_RTWIST',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 14, col: 6 }, end: { line: 14, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 14, col: 0 }, end: { line: 14, col: 27 } },
                 value: 
                  { src: { start: { line: 14, col: 26 }, end: { line: 14, col: 26 } },
                    iconst: 5 } },
              scope_names: [ 'tlcfeaturizer_test' ] },
           GEST_Slow_LTWIST: 
            { name: 'GEST_Slow_LTWIST',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 15, col: 6 }, end: { line: 15, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 15, col: 0 }, end: { line: 15, col: 32 } },
                 value: 
                  { src: { start: { line: 15, col: 31 }, end: { line: 15, col: 31 } },
                    iconst: 7 } },
              scope_names: [ 'tlcfeaturizer_test' ] },
           GEST_Slow_RTWIST: 
            { name: 'GEST_Slow_RTWIST',
              info: 
               { type: 
                  { primitive: 'int16_t',
                    src: { start: { line: 16, col: 6 }, end: { line: 16, col: 6 } },
                    is_const: true },
                 is_const: undefined,
                 src: { start: { line: 16, col: 0 }, end: { line: 16, col: 32 } },
                 value: 
                  { src: { start: { line: 16, col: 31 }, end: { line: 16, col: 31 } },
                    iconst: 8 } },
              scope_names: [ 'tlcfeaturizer_test' ] } },
        scopes: 
         { featurizer: 
            SymbolTable {
              name: 'featurizer',
              parent: [Circular],
              symbols: 
               { normAX: 
                  { name: 'normAX',
                    info: 
                     { type: 
                        { primitive: 'float',
                          src: { start: { line: 7, col: 24 }, end: { line: 7, col: 38 } },
                          dim: { dim: [ { iconst: 400 } ], is_ring: true } },
                       is_const: false,
                       src: { start: { line: 7, col: 24 }, end: { line: 7, col: 40 } },
                       is_formal_param: true },
                    scope_names: [ 'tlcfeaturizer_test', 'featurizer' ] },
                 __pos_normAX: 
                  { name: '__pos_normAX',
                    info: 
                     { type: { primitive: 'int' },
                       is_const: false,
                       is_formal_param: true,
                       src: { start: { line: 7, col: 24 }, end: { line: 7, col: 40 } } },
                    scope_names: [ 'tlcfeaturizer_test', 'featurizer' ] },
                 normAY: 
                  { name: 'normAY',
                    info: 
                     { type: 
                        { primitive: 'float',
                          src: { start: { line: 7, col: 47 }, end: { line: 7, col: 61 } },
                          dim: { dim: [ { iconst: 400 } ], is_ring: true } },
                       is_const: false,
                       src: { start: { line: 7, col: 47 }, end: { line: 7, col: 63 } },
                       is_formal_param: true },
                    scope_names: [ 'tlcfeaturizer_test', 'featurizer' ] },
                 __pos_normAY: 
                  { name: '__pos_normAY',
                    info: 
                     { type: { primitive: 'int' },
                       is_const: false,
                       is_formal_param: true,
                       src: { start: { line: 7, col: 47 }, end: { line: 7, col: 63 } } },
                    scope_names: [ 'tlcfeaturizer_test', 'featurizer' ] },
                 normAZ: 
                  { name: 'normAZ',
                    info: 
                     { type: 
                        { primitive: 'float',
                          src: { start: { line: 7, col: 70 }, end: { line: 7, col: 84 } },
                          dim: { dim: [ { iconst: 400 } ], is_ring: true } },
                       is_const: false,
                       src: { start: { line: 7, col: 70 }, end: { line: 7, col: 86 } },
                       is_formal_param: true },
                    scope_names: [ 'tlcfeaturizer_test', 'featurizer' ] },
                 __pos_normAZ: 
                  { name: '__pos_normAZ',
                    info: 
                     { type: { primitive: 'int' },
                       is_const: false,
                       is_formal_param: true,
                       src: { start: { line: 7, col: 70 }, end: { line: 7, col: 86 } } },
                    scope_names: [ 'tlcfeaturizer_test', 'featurizer' ] },
                 normGX: 
                  { name: 'normGX',
                    info: 
                     { type: 
                        { primitive: 'float',
                          src: { start: { line: 7, col: 94 }, end: { line: 7, col: 108 } },
                          dim: { dim: [ { iconst: 400 } ], is_ring: true } },
                       is_const: false,
                       src: { start: { line: 7, col: 94 }, end: { line: 7, col: 110 } },
                       is_formal_param: true },
                    scope_names: [ 'tlcfeaturizer_test', 'featurizer' ] },
                 __pos_normGX: 
                  { name: '__pos_normGX',
                    info: 
                     { type: { primitive: 'int' },
                       is_const: false,
                       is_formal_param: true,
                       src: { start: { line: 7, col: 94 }, end: { line: 7, col: 110 } } },
                    scope_names: [ 'tlcfeaturizer_test', 'featurizer' ] },
                 normGY: 
                  { name: 'normGY',
                    info: 
                     { type: 
                        { primitive: 'float',
                          src: { start: { line: 7, col: 118 }, end: { line: 7, col: 132 } },
                          dim: { dim: [ { iconst: 400 } ], is_ring: true } },
                       is_const: false,
                       src: { start: { line: 7, col: 118 }, end: { line: 7, col: 134 } },
                       is_formal_param: true },
                    scope_names: [ 'tlcfeaturizer_test', 'featurizer' ] },
                 __pos_normGY: 
                  { name: '__pos_normGY',
                    info: 
                     { type: { primitive: 'int' },
                       is_const: false,
                       is_formal_param: true,
                       src: { start: { line: 7, col: 118 }, end: { line: 7, col: 134 } } },
                    scope_names: [ 'tlcfeaturizer_test', 'featurizer' ] },
                 normGZ: 
                  { name: 'normGZ',
                    info: 
                     { type: 
                        { primitive: 'float',
                          src: { start: { line: 7, col: 142 }, end: { line: 7, col: 156 } },
                          dim: { dim: [ { iconst: 400 } ], is_ring: true } },
                       is_const: false,
                       src: { start: { line: 7, col: 142 }, end: { line: 7, col: 158 } },
                       is_formal_param: true },
                    scope_names: [ 'tlcfeaturizer_test', 'featurizer' ] },
                 __pos_normGZ: 
                  { name: '__pos_normGZ',
                    info: 
                     { type: { primitive: 'int' },
                       is_const: false,
                       is_formal_param: true,
                       src: { start: { line: 7, col: 142 }, end: { line: 7, col: 158 } } },
                    scope_names: [ 'tlcfeaturizer_test', 'featurizer' ] },
                 FEATURE_LENGTH: 
                  { name: 'FEATURE_LENGTH',
                    info: 
                     { type: { primitive: 'int', is_const: true },
                       src: { start: { line: 9, col: 1 }, end: { line: 9, col: 37 } },
                       value: { iconst: undefined },
                       is_dim: true },
                    scope_names: [ 'tlcfeaturizer_test', 'featurizer' ] },
                 featureVector: 
                  { name: 'featureVector',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 8, col: 1 }, end: { line: 8, col: 19 } },
                          dim: { dim: [ { iconst: undefined } ], is_ring: false },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 8, col: 1 }, end: { line: 8, col: 34 } },
                       value: undefined },
                    scope_names: [ 'tlcfeaturizer_test', 'featurizer' ] },
                 featureVectorF: 
                  { name: 'featureVectorF',
                    info: 
                     { type: 
                        { primitive: 'float',
                          src: { start: { line: 9, col: 1 }, end: { line: 9, col: 21 } },
                          dim: { dim: [ { iconst: undefined } ], is_ring: false },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 9, col: 1 }, end: { line: 9, col: 37 } },
                       value: undefined },
                    scope_names: [ 'tlcfeaturizer_test', 'featurizer' ] },
                 result: 
                  { name: 'result',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 10, col: 1 }, end: { line: 10, col: 1 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 10, col: 1 }, end: { line: 10, col: 11 } },
                       value: undefined },
                    scope_names: [ 'tlcfeaturizer_test', 'featurizer' ] } },
              scopes: {},
              current_scope: [Circular] },
           getBucket: 
            SymbolTable {
              name: 'getBucket',
              parent: [Circular],
              symbols: 
               { sensorValue1D: 
                  { name: 'sensorValue1D',
                    info: 
                     { type: 
                        { primitive: 'float',
                          src: { start: { line: 25, col: 15 }, end: { line: 25, col: 29 } },
                          dim: { dim: [ { iconst: 400 } ], is_ring: true } },
                       is_const: false,
                       src: { start: { line: 25, col: 15 }, end: { line: 25, col: 31 } },
                       is_formal_param: true },
                    scope_names: [ 'tlcfeaturizer_test', 'getBucket' ] },
                 __pos_sensorValue1D: 
                  { name: '__pos_sensorValue1D',
                    info: 
                     { type: { primitive: 'int' },
                       is_const: false,
                       is_formal_param: true,
                       src: { start: { line: 25, col: 15 }, end: { line: 25, col: 31 } } },
                    scope_names: [ 'tlcfeaturizer_test', 'getBucket' ] },
                 bucketDistribution: 
                  { name: 'bucketDistribution',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 25, col: 46 }, end: { line: 25, col: 64 } },
                          dim: { dim: [ { id: 'FEATURE_LENGTH' } ], is_ring: false } },
                       is_const: false,
                       src: { start: { line: 25, col: 46 }, end: { line: 25, col: 66 } },
                       is_formal_param: true },
                    scope_names: [ 'tlcfeaturizer_test', 'getBucket' ] },
                 isGY: 
                  { name: 'isGY',
                    info: 
                     { type: 
                        { primitive: 'boolean',
                          src: { start: { line: 25, col: 85 }, end: { line: 25, col: 85 } } },
                       is_const: false,
                       src: { start: { line: 25, col: 85 }, end: { line: 25, col: 93 } },
                       is_formal_param: true },
                    scope_names: [ 'tlcfeaturizer_test', 'getBucket' ] },
                 imax: 
                  { name: 'imax',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 26, col: 1 }, end: { line: 26, col: 1 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 26, col: 1 }, end: { line: 26, col: 115 } },
                       value: 
                        { src: { start: { line: 26, col: 10 }, end: { line: 26, col: 10 } },
                          iconst: 0 } },
                    scope_names: [ 'tlcfeaturizer_test', 'getBucket' ] },
                 imin: 
                  { name: 'imin',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 26, col: 1 }, end: { line: 26, col: 1 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 26, col: 1 }, end: { line: 26, col: 115 } },
                       value: 
                        { src: { start: { line: 26, col: 17 }, end: { line: 26, col: 17 } },
                          iconst: 0 } },
                    scope_names: [ 'tlcfeaturizer_test', 'getBucket' ] },
                 maxval: 
                  { name: 'maxval',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 26, col: 1 }, end: { line: 26, col: 1 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 26, col: 1 }, end: { line: 26, col: 115 } },
                       value: 
                        { src: { start: { line: 26, col: 26 }, end: { line: 26, col: 26 } },
                          iconst: 0 } },
                    scope_names: [ 'tlcfeaturizer_test', 'getBucket' ] },
                 minval: 
                  { name: 'minval',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 26, col: 1 }, end: { line: 26, col: 1 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 26, col: 1 }, end: { line: 26, col: 115 } },
                       value: 
                        { src: { start: { line: 26, col: 35 }, end: { line: 26, col: 35 } },
                          iconst: 0 } },
                    scope_names: [ 'tlcfeaturizer_test', 'getBucket' ] },
                 maxcount: 
                  { name: 'maxcount',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 26, col: 1 }, end: { line: 26, col: 1 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 26, col: 1 }, end: { line: 26, col: 115 } },
                       value: 
                        { src: { start: { line: 26, col: 46 }, end: { line: 26, col: 46 } },
                          iconst: 0 } },
                    scope_names: [ 'tlcfeaturizer_test', 'getBucket' ] },
                 mincount: 
                  { name: 'mincount',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 26, col: 1 }, end: { line: 26, col: 1 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 26, col: 1 }, end: { line: 26, col: 115 } },
                       value: 
                        { src: { start: { line: 26, col: 57 }, end: { line: 26, col: 57 } },
                          iconst: 0 } },
                    scope_names: [ 'tlcfeaturizer_test', 'getBucket' ] },
                 postemp: 
                  { name: 'postemp',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 26, col: 1 }, end: { line: 26, col: 1 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 26, col: 1 }, end: { line: 26, col: 115 } },
                       value: 
                        { src: { start: { line: 26, col: 67 }, end: { line: 26, col: 67 } },
                          iconst: 0 } },
                    scope_names: [ 'tlcfeaturizer_test', 'getBucket' ] },
                 negtemp: 
                  { name: 'negtemp',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 26, col: 1 }, end: { line: 26, col: 1 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 26, col: 1 }, end: { line: 26, col: 115 } },
                       value: 
                        { src: { start: { line: 26, col: 77 }, end: { line: 26, col: 77 } },
                          iconst: 0 } },
                    scope_names: [ 'tlcfeaturizer_test', 'getBucket' ] },
                 bucketCount: 
                  { name: 'bucketCount',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 26, col: 1 }, end: { line: 26, col: 1 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 26, col: 1 }, end: { line: 26, col: 115 } },
                       value: undefined },
                    scope_names: [ 'tlcfeaturizer_test', 'getBucket' ] },
                 val: 
                  { name: 'val',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 26, col: 1 }, end: { line: 26, col: 1 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 26, col: 1 }, end: { line: 26, col: 115 } },
                       value: undefined },
                    scope_names: [ 'tlcfeaturizer_test', 'getBucket' ] },
                 index: 
                  { name: 'index',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 26, col: 1 }, end: { line: 26, col: 1 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 26, col: 1 }, end: { line: 26, col: 115 } },
                       value: undefined },
                    scope_names: [ 'tlcfeaturizer_test', 'getBucket' ] },
                 thresholdCount: 
                  { name: 'thresholdCount',
                    info: 
                     { type: 
                        { primitive: 'int',
                          src: { start: { line: 26, col: 1 }, end: { line: 26, col: 1 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 26, col: 1 }, end: { line: 26, col: 115 } },
                       value: undefined },
                    scope_names: [ 'tlcfeaturizer_test', 'getBucket' ] },
                 flagPos: 
                  { name: 'flagPos',
                    info: 
                     { type: 
                        { primitive: 'boolean',
                          src: { start: { line: 28, col: 1 }, end: { line: 28, col: 1 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 28, col: 1 }, end: { line: 28, col: 37 } },
                       value: 
                        { bconst: true,
                          src: { start: { line: 28, col: 17 }, end: { line: 28, col: 17 } } } },
                    scope_names: [ 'tlcfeaturizer_test', 'getBucket' ] },
                 flagNeg: 
                  { name: 'flagNeg',
                    info: 
                     { type: 
                        { primitive: 'boolean',
                          src: { start: { line: 28, col: 1 }, end: { line: 28, col: 1 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 28, col: 1 }, end: { line: 28, col: 37 } },
                       value: 
                        { bconst: true,
                          src: { start: { line: 28, col: 32 }, end: { line: 28, col: 32 } } } },
                    scope_names: [ 'tlcfeaturizer_test', 'getBucket' ] },
                 j: 
                  { name: 'j',
                    info: 
                     { type: 
                        { primitive: 'float',
                          src: { start: { line: 29, col: 1 }, end: { line: 29, col: 1 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 29, col: 1 }, end: { line: 29, col: 10 } },
                       value: undefined },
                    scope_names: [ 'tlcfeaturizer_test', 'getBucket' ] },
                 k: 
                  { name: 'k',
                    info: 
                     { type: 
                        { primitive: 'float',
                          src: { start: { line: 29, col: 1 }, end: { line: 29, col: 1 } },
                          is_const: false },
                       is_const: undefined,
                       src: { start: { line: 29, col: 1 }, end: { line: 29, col: 10 } },
                       value: undefined },
                    scope_names: [ 'tlcfeaturizer_test', 'getBucket' ] } },
              scopes: {},
              current_scope: [Circular] } },
        current_scope: [Circular] } },
  current_scope: [Circular] }
Warnings: 
[ { text: 'Unresolved function name  mpu1,resetFIFO  in scope  mpu_acq' },
  { text: 'Unresolved function name  mpu1,dmpGetAccel  in scope  mpu_acq' },
  { text: 'Unresolved function name  mpu1,dmpGetGyro  in scope  mpu_acq' },
  { text: 'Unresolved identifier  bucktIndex  in scope  getBucket' },
  { text: 'Unresolved identifier  bucktIndex  in scope  getBucket' },
  { text: 'Unresolved identifier  bucktIndex  in scope  getBucket' },
  { text: 'Unresolved identifier  bucktIndex  in scope  getBucket' },
  { text: 'Unresolved identifier  bucktIndex  in scope  getBucket' },
  { text: 'Unresolved identifier  bucktIndex  in scope  getBucket' },
  { text: 'Symbol  __i  not found' },
  { text: 'Symbol  __i  not found' },
  { text: 'Symbol  __i  not found' },
  { text: 'Symbol  __i  not found' },
  { text: 'Symbol  i  not found' },
  { text: 'Symbol  i  not found' },
  { text: 'Symbol  i  not found' },
  { text: 'Symbol  i  not found' },
  { text: 'Symbol  i  not found' },
  { text: 'Symbol  bucktIndex  not found' },
  { text: 'Symbol  bucketWidth  not found' } ]
