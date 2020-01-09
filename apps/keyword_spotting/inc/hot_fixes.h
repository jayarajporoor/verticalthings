//
// Created by sharingan on 30/12/19.
//

#ifndef VERTICAL_THINGS_PROJECT_HOT_FIXES_H
#define VERTICAL_THINGS_PROJECT_HOT_FIXES_H

//needed because vt prepends "_" only for function declarations and not when you
//are passing a function as an argument
#define main_prediction_callback _main_prediction_callback
#define main_recordCallback _main_recordCallback

#define float_pointer float*
#define int16_t_pointer int16_t*
#define const_char_arr const char *
#define char_pointer char*

#define FastRNNParams_pointer struct FastRNNParams*
#define prediction_cb_pointer prediction_cb*
#define pred_cb_pointer pred_cb*
#define FCParams_pointer struct FCParams*

uint16_t get_statesLen(struct FastRNNParams_pointer p){
    return p->statesLen;
}

uint16_t get_timeSteps(struct FastRNNParams_pointer p){
    return p->timeSteps;
}

uint16_t get_featLen(struct FastRNNParams_pointer p){
    return p->featLen;
}

uint16_t get_outputDim(struct FCParams_pointer p){
    return p->outputDim;
}

uint16_t get_inputDim(struct FCParams_pointer p){
    return p->inputDim;
}

int to_int(void* p){
    return *(int*)p;
}

int16_t* to_int16_t_pointer(char* p){
    return (int16_t*)p;
}

int16_t get_element(char* p, int idx){
    return ((int16_t*)p)[idx];
}

#endif //VERTICAL_THINGS_PROJECT_HOT_FIXES_H
