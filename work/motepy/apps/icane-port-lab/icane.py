icane = [
  mpu_acq,
  normalize_input,
  tlc_featurizer,
  protonn,
  thresholding,
  if_changed,
  print_action
]

import mcq_acq

def setup():
    mcq_acq.init()

for acc, gyr in mpu_acq:
    ...
async def loop():
    acc, gyr = await mpu_acq.acq()
    normAX, normAY, normAZ, normGX, normGY, normGZ = normalize_input(acc, gyr)
    features = tlc_featurizer(normAX, normAY, normAZ, normGX, normGY, normGZ)
    maxIndex, scores = protonn(features)
    if changed:
        await print_action()
