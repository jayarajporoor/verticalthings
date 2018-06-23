0000214c <main>:
main():
/home/arduino/Desktop/analysis/compare/matrix-vector multiplication/code.c:18
    214c:	b538      	push	{r3, r4, r5, lr}
/home/arduino/Desktop/analysis/compare/matrix-vector multiplication/code.c:19
    2152:	2200      	movs	r2, #0
    2154:	2432      	movs	r4, #50	; 0x32
    2156:	4354      	muls	r4, r2
    2158:	4b09      	ldr	r3, [pc, #36]	; (2180 <main+0x34>)
    215a:	191c      	adds	r4, r3, r4
    215c:	2300      	movs	r3, #0
/home/arduino/Desktop/analysis/compare/matrix-vector multiplication/code.c:36
    215e:	1c19      	adds	r1, r3, #0
/home/arduino/Desktop/analysis/compare/matrix-vector multiplication/code.c:38 
    2160:	4808      	ldr	r0, [pc, #32]	; (2184 <main+0x38>)
    2162:	58e5      	ldr	r5, [r4, r3]
    2164:	5818      	ldr	r0, [r3, r0]
    2166:	3304      	adds	r3, #4
    2168:	4368      	muls	r0, r5
    216a:	1809      	adds	r1, r1, r0
/home/arduino/Desktop/analysis/compare/matrix-vector multiplication/code.c:37 
    216c:	2bc8      	cmp	r3, #200	; 0xc8
    216e:	d1f7      	bne.n	2160 <main+0x14>
/home/arduino/Desktop/analysis/compare/matrix-vector multiplication/code.c:42
    2170:	4b05      	ldr	r3, [pc, #20]	; (2188 <main+0x3c>)
    2172:	50d1      	str	r1, [r2, r3]
    2174:	3204      	adds	r2, #4
/home/arduino/Desktop/analysis/compare/matrix-vector multiplication/code.c:32
    2176:	2ac8      	cmp	r2, #200	; 0xc8
    2178:	d1ec      	bne.n	2154 <main+0x8>
/home/arduino/Desktop/analysis/compare/matrix-vector multiplication/code.c:45
    217a:	2000      	movs	r0, #0
    217c:	bd38      	pop	{r3, r4, r5, pc}
    217e:	46c0      	nop			; (mov r8, r8)
