//
// Created by sharingan on 28/01/20.
//

#ifndef DEVKIT_MBEDOS5_GETSTARTED_CUSTOM_STRUCTS_H
#define DEVKIT_MBEDOS5_GETSTARTED_CUSTOM_STRUCTS_H

//struct _t__int_int{int r0 ; int r1 ; _t__int_int() :  r0( (int) 0 ),  r1( (int) 0 ){}; _t__int_int(int p0 , int p1 ): r0(p0),  r1(p1){}; };
struct _arec__sys_HAL_io_completion{
    int _state;
    int sys_HAL_io_completion_rc;
    int sys_HAL_io_completion_non_blocking;
};
#endif //DEVKIT_MBEDOS5_GETSTARTED_CUSTOM_STRUCTS_H
