import os
file = open("code.asm","r")
stri = "";
for line in file:
    stri = stri + repr(line)[1:-1]
print stri
file.close()