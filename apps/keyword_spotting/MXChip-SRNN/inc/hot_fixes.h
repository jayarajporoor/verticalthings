//
// Created by sharingan on 30/12/19.
//
#include "src/lib/utils/circularq.h"
#include "/home/sharingan/Desktop/Work/Vertical_Things_Project/devkit-mbedos5-getstarted/libraries/devkit-sdk/AZ3166/src/cores/arduino/Arduino.h"
#ifndef VERTICAL_THINGS_PROJECT_HOT_FIXES_H
#define VERTICAL_THINGS_PROJECT_HOT_FIXES_H

//needed because vt prepends "_" only for function declarations and not when you
//are passing a function as an argument
#define main_prediction_callback _main_prediction_callback
#define main_recordCallback _main_recordCallback

#define float_pointer float*
#define const_char_arr const char *
#define char_pointer char*

struct _t__int_int;
int _sys_HAL_start(int, int);
int _sys_HAL_io_completion(void*, void*);
void HAL_buf_copy(int, int16_t (*buf), int);
//_t__int_int _sys_HAL_buf_at(int, int);

int get_q_oldest(FIFOCircularQ* q){
    return *(int*)q_oldest(q);
}
int16_t to_int16t(int x){
    return (int16_t)x;
}
extern int pred_func();
#endif //VERTICAL_THINGS_PROJECT_HOT_FIXES_H
