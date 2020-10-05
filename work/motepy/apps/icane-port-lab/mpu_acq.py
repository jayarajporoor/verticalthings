from arduino import Wire, MPU6050, VectorInt16

x : const int = 0
y : const int = 1
z : const int = 2

cdef MPU6050 mpu1
fifoPacketSize : uint16_t
fifoBuffer : uint8[64] = np.zeroes(64, dtype=uint8)
currBucketBufferSize : uint16 =0
lastSent : uint32_t = 0

def dma_hander():
    ...

def init():
	devStatus : uint8
	Wire.begin()
	Wire.setClock(400000)

	mpu1.initialize()
	devStatus = mpu1.dmpInitialize()

	if devStatus == 0:
		mpu1.setDMPEnabled(true)
	else:
        pass
		# Initialization failed...
	fifoPacketSize = mpu1.dmpGetFIFOPacketSize()

async def mpu_acq():
	fifoCount : uint16 = mpu1.getFIFOCount()
	mpuIntStatus : uint8 = mpu1.getIntStatus()
	acc : int16_t[3]  = np.zeroes(3, dtype=int16)
    gyr : int16_t[3] = np.zeroes(3, dtype=int16)
	cdef VectorInt16 acc__,gyr__
    while fifoCount < fifoPacketSize:
    	if (mpuIntStatus & 0x10) != 0 or fifoCount == 1024:
    		mpu1.resetFIFO()
    	elif mpuIntStatus & 0x02 != 0:
    		if fifoCount >= fifoPacketSize :
    			mpu1.getFIFOBytes(fifoBuffer, fifoPacketSize)
    			mpu1.dmpGetAccel(&acc__,fifoBuffer)
    			mpu1.dmpGetGyro(&gyr__,fifoBuffer)
    			acc[x]=acc__.x
                acc[y]=acc__.y
                acc[z]=acc__.z
    			gyr[x]=gyr__.x
                gyr[y]=gyr__.y
                gyr[z]=gyr__.z
    			return acc, gyr
        else:
            await dma_interrupt
