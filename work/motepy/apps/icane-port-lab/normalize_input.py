import Config;
import np

normAX : float ring[400] = np.rzeroes(400, dtype=float)
normAY = np.rzeroes(400, dtype=float)
normAZ = np.rzeroes(400, dtype=float)
normGX  = np.rzeroes(400, dtype=float)
normGY = np.rzeroes(400, dtype=float)
normGZ = np.rzeroes(400, dtype=float)

minAcc : int16[3] = np.zeroes(3, dtype=float)
maxAcc = np.zeroes(3, dtype=float)
minGyr = np.zeroes(3, dtype=float)
maxGyr = np.zeroes(3, dtype=float)
numNewReadings : int16 = 0
samplesAfterReset: int32 = 0

def init():
	minAcc[x]= -16384
    minAcc[y]= -16384
    minAcc[z]= -16384
	maxAcc[x]=16384
    maxAcc[y]=16384
    maxAcc[z]=16384
	minGyr[x]= -512
    minGyr[y]= -2048
    minGyr[z]= -512
	maxGyr[x]=512
    maxGyr[y]=2048
    maxGyr[z]=512
	numNewReadings=0
	samplesAfterReset=0

def minMaxNormalize(v : int16_t[3], vmin: int16_t[3], vmax: int16_t[3], dst: float[3]):
	dst[x] = float(v[x]) - float(vmin[x])
	dst[x] = dst[x]/(float(vmax[x]) - float(vmin[x]))
	dst[y] = float(v[y]) - float(vmin[y])
	dst[y] = dst[y]/(float(vmax[y]) - float(vmin[y]))
	dst[z] = float(v[z]) - float(vmin[z])
	dst[z] = dst[z]/(float(vmax[z]) - float(vmin[z]))

def normalize(acc: int16_t[3], gyr: int16_t[3]):
	normAcc, normGyr : float = np.zeroes(3, dtype=float)
	minMaxNormalize(acc,minAcc,maxAcc,normAcc)
	minMaxNormalize(gyr,minGyr,maxGyr,normGyr)
	normAX.push(normAcc[x])
	normAY.push(normAcc[y])
	normAZ.push(normAcc[z])
	normGX.push(normGyr[x])
	normGY.push(normGyr[y])
	normGZ.push(normGyr[z])
	numNewReadings = numNewReadings + 1;
	samplesAfterReset = samplesAfterReset + 1;
	if samplesAfterReset < 250:
		if numNewReadings == STRIDE:
			numNewReadings = 0;
	elif numNewReadings == STRIDE:
		samplesAfterReset = 401;
		numNewReadings=0;
		return normAX, normAY, normAZ, normGX, normGY, normGZ
