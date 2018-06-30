00002144 <main>:
    2144:	b5f8      	push	{r3, r4, r5, r6, r7, lr}
    214a:	2100      	movs	r1, #0
    214c:	4c0e      	ldr	r4, [pc, #56]	; (2188 <main+0x44>)
    214e:	4d0f      	ldr	r5, [pc, #60]	; (218c <main+0x48>)
    2150:	1864      	adds	r4, r4, r1
    2152:	186d      	adds	r5, r5, r1
    2154:	46a4      	mov	ip, r4
    2156:	2200      	movs	r2, #0
    2158:	2732      	movs	r7, #50	; 0x32
    215a:	4357      	muls	r7, r2
    215c:	4b0c      	ldr	r3, [pc, #48]	; (2190 <main+0x4c>)
    215e:	19df      	adds	r7, r3, r7
    2160:	2300      	movs	r3, #0
    2162:	1c18      	adds	r0, r3, #0
    2164:	58fe      	ldr	r6, [r7, r3]
    2166:	58ec      	ldr	r4, [r5, r3]
    2168:	3304      	adds	r3, #4
    216a:	4366      	muls	r6, r4
    216c:	1980      	adds	r0, r0, r6
    216e:	2bc8      	cmp	r3, #200	; 0xc8
    2170:	d1f8      	bne.n	2164 <main+0x20>
    2172:	4666      	mov	r6, ip
    2174:	50b0      	str	r0, [r6, r2]
    2176:	3204      	adds	r2, #4
    2178:	2ac8      	cmp	r2, #200	; 0xc8
    217a:	d1ed      	bne.n	2158 <main+0x14>
    217c:	4b05      	ldr	r3, [pc, #20]	; (2194 <main+0x50>)
    217e:	31c8      	adds	r1, #200	; 0xc8
    2180:	4299      	cmp	r1, r3
    2182:	d1e3      	bne.n	214c <main+0x8>
    2184:	2000      	movs	r0, #0
    2186:	bdf8      	pop	{r3, r4, r5, r6, r7, pc}
    2188:	2000274c 	.word	0x2000274c
    218c:	2000003c 	.word	0x2000003c
    2190:	20004e5c 	.word	0x20004e5c
    2194:	00002710 	.word	0x00002710

