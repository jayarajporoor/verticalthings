from struct import *
import serial
import time
import os
file = open('data.csv','r')
data = []
for line in file:
    data.append(line)
file.close()
ser = serial.Serial('/dev/ttyACM0',9600)
for line in data:
    intvalues = [int(value) for value in line.split(',')]
    ser.write(pack('>hhhhhh',intvalues[0],intvalues[1],intvalues[2],intvalues[3],intvalues[4],intvalues[5]))
    time.sleep(0.05)
    result = b""
    while (ser.inWaiting() > 0):
        result += ser.read()
    print (unpack('>hhhhhh',result))
ser.close()

