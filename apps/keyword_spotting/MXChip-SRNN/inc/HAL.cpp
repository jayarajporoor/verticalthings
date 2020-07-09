//
// Created by sharingan on 10/01/20.
//
#include <AudioClassV2.h>
#include "/home/sharingan/Desktop/Work/Vertical_Things_Project/devkit-mbedos5-getstarted/libraries/devkit-sdk/AZ3166/src/libraries/AudioV2/src/AudioClassV2.h"
#include "/home/sharingan/Desktop/Work/Vertical_Things_Project/devkit-mbedos5-getstarted/libraries/devkit-sdk/AZ3166/src/cores/arduino/Arduino.h"
#define MIC 0
#define RMIC -1
#define MIC_BUF 2

struct _t__int_int{int r0 ; int r1 ; _t__int_int() :  r0( (int) 0 ),  r1( (int) 0 ){}; void operator = (_t__int_int* ptr) {r0= ptr->r0; r1=ptr->r1; };  _t__int_int(int p0 , int p1 ): r0(p0),  r1(p1){}; };

AudioClass& Audio = AudioClass::getInstance();

volatile bool audio_buf_available = false;
int audio_started = 0;
int available_buf_length = 0;
char audio_read_buf[512];

typedef char _char__512[512];
struct _t__int_int__char__512_int_copy{int r0 ; int r1 ; _char__512* r2 ; int r3 ; _t__int_int__char__512_int_copy() :  r0( (int) 0 ),  r1( (int) 0 ),  r2( (_char__512*) 0 ),  r3( (int) 0 ){}; void operator = (const _t__int_int__char__512_int_copy& _obj) {r0= _obj.r0; r1= _obj.r1; r2= _obj.r2; r3= _obj.r3; };  _t__int_int__char__512_int_copy(int p0 , int p1 , _char__512* p2 , int p3 ): r0(p0),  r1(p1),  r2(p2),  r3(p3){}; };
struct _arec__sys_HAL_io_completion_copy{ int _state; int sys_HAL_io_completion_rc; int sys_HAL_io_completion_non_blocking; };

void recordCallback();

void start_record(){
    Audio.format(16000U, 16U);
    audio_started = 1;
    Audio.startRecord(recordCallback);
}


int _sys_HAL_start(int chan, int chan_buf){
    if (chan == MIC){
        if (audio_started == 0){
            start_record();
        }
        audio_buf_available = true;
        return RMIC;
    }
}


int _sys_HAL_io_completion(void* arg1, void* arg2){
    _arec__sys_HAL_io_completion_copy* state_struct = (_arec__sys_HAL_io_completion_copy*) arg1;
    _t__int_int__char__512_int_copy* ret = (_t__int_int__char__512_int_copy*) arg2;
    if (state_struct->sys_HAL_io_completion_rc != RMIC){
        return 1;
    }
    ret->r3 = 0;
    if (not audio_buf_available){
        ret->r0 = MIC;
        ret->r1 = MIC_BUF;
        ret->r2 = &audio_read_buf;
        ret->r3 = available_buf_length;
        return 0;
    }
    if (state_struct->sys_HAL_io_completion_non_blocking == 1){
        return 0;
    }
    return 1;
}

_t__int_int _sys_HAL_buf_at(int mic_buf, int index){
    if (mic_buf == MIC_BUF) {
        _t__int_int result;
        int16_t* tmp_audio_read_buf = (int16_t*) audio_read_buf;
        result.r0 = tmp_audio_read_buf[index];
        result.r1 = mic_buf;
        return result;
    }
}

void HAL_buf_copy(int buf_chan, int16_t (*buf), int len){
    int idx = 0;
    struct _t__int_int return_value;
    while(idx<len) {
        return_value = _sys_HAL_buf_at(buf_chan, (2*idx)) ;
        int&  main_main_main_main_value = return_value.r0;
        buf_chan = return_value.r1;
        buf[idx] = (int16_t)main_main_main_main_value;
        idx = idx + 1;
    }
}

void recordCallback(){
    if (not audio_buf_available) {
        return;
    }
    available_buf_length = Audio.readFromRecordBuffer(audio_read_buf, 512);
    audio_buf_available = false;
}