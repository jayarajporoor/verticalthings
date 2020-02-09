//
// Created by sharingan on 09/02/20.
//

#ifndef VERTICAL_THINGS_PROJECT_HAL_BUF_H
#define VERTICAL_THINGS_PROJECT_HAL_BUF_H

#define MIC_BUF 2
extern char audio_read_buf[512];
struct _t__int_int{int r0 ; int r1 ; _t__int_int() :  r0( (int) 0 ),  r1( (int) 0 ){};  _t__int_int(int p0 , int p1 ): r0(p0),  r1(p1){}; };
inline _t__int_int _sys_HAL_buf_at(int mic_buf, int index){
    if (mic_buf == MIC_BUF) {
        _t__int_int result;
        int16_t* tmp_audio_read_buf = (int16_t*) audio_read_buf;
        result.r0 = tmp_audio_read_buf[index];
        result.r1 = mic_buf;
        return result;
    }
}
#endif //VERTICAL_THINGS_PROJECT_HAL_BUF_H
