import os
file = open('code.asm','r')
file1 = open('temp.asm','w+')
for line in file:
    words = line.split()
    if (".word" in words or ".short" in words or ".byte" in words):
        continue
    if ("discriminator" in words):
            
    file1.write(line)
file.close()
file1.close()
file = open("code.asm","w+")
file1 = open("temp.asm","r")
for line in file1:
    file.write(line)
