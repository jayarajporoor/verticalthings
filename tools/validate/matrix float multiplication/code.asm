00002178 <main>:
main():
/home/arduino/Desktop/analysis/compare/matrix float multiplication/code.c:18
    2178:	b5f0      	push	{r4, r5, r6, r7, lr}
    217a:	b085      	sub	sp, #20
/home/arduino/Desktop/analysis/compare/matrix float multiplication/code.c:19
    2180:	2400      	movs	r4, #0
    2182:	4b14      	ldr	r3, [pc, #80]	; (21d4 <main+0x5c>)
/home/arduino/Desktop/analysis/compare/matrix float multiplication/code.c:18 
    2184:	2600      	movs	r6, #0
    2186:	191b      	adds	r3, r3, r4
    2188:	9301      	str	r3, [sp, #4]
    218a:	4b13      	ldr	r3, [pc, #76]	; (21d8 <main+0x60>)
    218c:	191b      	adds	r3, r3, r4
    218e:	9303      	str	r3, [sp, #12]
    2190:	2732      	movs	r7, #50	; 0x32
    2192:	4377      	muls	r7, r6
    2194:	4b11      	ldr	r3, [pc, #68]	; (21dc <main+0x64>)
/home/arduino/Desktop/analysis/compare/matrix float multiplication/code.c:18
    2196:	2500      	movs	r5, #0
    2198:	19db      	adds	r3, r3, r7
    219a:	9302      	str	r3, [sp, #8]
/home/arduino/Desktop/analysis/compare/matrix float multiplication/code.c:38
    219c:	2700      	movs	r7, #0
/home/arduino/Desktop/analysis/compare/matrix float multiplication/code.c:40 
    219e:	9b01      	ldr	r3, [sp, #4]
    21a0:	5958      	ldr	r0, [r3, r5]
    21a2:	9b02      	ldr	r3, [sp, #8]
    21a4:	5959      	ldr	r1, [r3, r5]
    21a6:	f001 f8d7 	bl	3358 <__aeabi_fmul>
    21aa:	1c01      	adds	r1, r0, #0
    21ac:	1c38      	adds	r0, r7, #0
    21ae:	f000 fe49 	bl	2e44 <__aeabi_fadd>
    21b2:	3504      	adds	r5, #4
    21b4:	1c07      	adds	r7, r0, #0
/home/arduino/Desktop/analysis/compare/matrix float multiplication/code.c:39 
    21b6:	2dc8      	cmp	r5, #200	; 0xc8
    21b8:	d1f1      	bne.n	219e <main+0x26>
/home/arduino/Desktop/analysis/compare/matrix float multiplication/code.c:44
    21ba:	9b03      	ldr	r3, [sp, #12]
    21bc:	5198      	str	r0, [r3, r6]
    21be:	3604      	adds	r6, #4
/home/arduino/Desktop/analysis/compare/matrix float multiplication/code.c:34
    21c0:	2ec8      	cmp	r6, #200	; 0xc8
    21c2:	d1e5      	bne.n	2190 <main+0x18>
/home/arduino/Desktop/analysis/compare/matrix float multiplication/code.c:32
    21c4:	4b06      	ldr	r3, [pc, #24]	; (21e0 <main+0x68>)
    21c6:	34c8      	adds	r4, #200	; 0xc8
    21c8:	429c      	cmp	r4, r3
    21ca:	d1da      	bne.n	2182 <main+0xa>
/home/arduino/Desktop/analysis/compare/matrix float multiplication/code.c:49
    21cc:	2000      	movs	r0, #0
    21ce:	b005      	add	sp, #20
    21d0:	bdf0      	pop	{r4, r5, r6, r7, pc}
    21d2:	46c0      	nop			; (mov r8, r8)