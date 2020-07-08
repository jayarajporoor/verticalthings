#include <Arduino.h>
#include "data.h"

#define pgm_read_byte(addr) (*(const unsigned char *)(addr))
#define pgm_read_word(addr) (*(const unsigned short *)(addr))
#define pgm_read_dword(addr) (*(const unsigned long *)(addr))
#define pgm_read_float(addr) (*(const float *)(addr))

#define pgm_read_byte_near(addr) pgm_read_byte(addr)
#define pgm_read_word_near(addr) pgm_read_word(addr)
#define pgm_read_dword_near(addr) pgm_read_dword(addr)
#define pgm_read_float_near(addr) pgm_read_float(addr)
#define pgm_read_byte_far(addr) pgm_read_byte(addr)
#define pgm_read_word_far(addr) pgm_read_word(addr)
#define pgm_read_dword_far(addr) pgm_read_dword(addr)
#define pgm_read_float_far(addr) pgm_read_float(addr)

float FLT_MAX = 10000000;

inline float getProjectionComponent(unsigned i, unsigned j){
    unsigned int d = featDim;
    return ldProjectionMatrix[i * d + j];
}

inline int denseLDProjection(float* x, float* x_cap){
    unsigned int d = featDim;
    unsigned int d_cap = ldDim;
    for (int i = 0; i < d_cap; i++){
        float dotProd = 0.0;
        for(int j = 0; j < d; j++){
            float component = getProjectionComponent(i, j);
            dotProd += x[j] * component;
        }
        x_cap[i] = dotProd;
    }
    return 0;
}

inline float gaussian(const float *x, const float *y,
                         unsigned length, float gamma = 1.0) {
    float sumSq = 0.0;
    for(unsigned i = 0; i < length; i++){
        sumSq += (x[i] - y[i])*(x[i] - y[i]);
    }
    sumSq = -1*gamma*gamma*sumSq;
    sumSq = exp(sumSq);
    return sumSq;
}

inline int scalarVectorMul(float *vec, unsigned length,
                                 float scalar) {

    for(unsigned i = 0; i < length; i++) {
        vec[i] = vec[i] * scalar;
    }
    return 0;
}


inline int vectorVectorAdd(float *dstVec, float *srcVec,
                                 unsigned length){

    for(unsigned i = 0; i < length; i++)
        dstVec[i] += srcVec[i];
    return 0;
}

inline int getPrototype(unsigned index, float *prototype){
    unsigned int d_cap = ldDim;
    for(unsigned i = 0; i < d_cap; i++){
        float component = prototypeMatrix[index * d_cap + i];
        prototype[i] = component;
    }
    return 0;
}

inline int getPrototypeLabel(unsigned index, float *prototypeLabel){
    unsigned int L = numLabels;
    for(unsigned i = 0; i < L; i++){
        float component = prototypeLabelMatrix[index * L + i];
        prototypeLabel[i] = component;
    }
    return 0;
}

inline float rho(float* labelScores, unsigned length) {
    float maxScore = -FLT_MAX;
    float maxIndex = 0;
    for(int i = 0; i < length; i++){
        if (labelScores[i] > maxScore){
            maxIndex = i;
            maxScore = labelScores[i];
        }
    }
    return maxIndex;
}

inline float predict(float *x, unsigned length,
                        int *scores) {

    unsigned m = numPrototypes;
    unsigned int d = featDim;
    unsigned int d_cap = ldDim;
    unsigned int L = numLabels;
    float gamma = gamma;
    if (length != d)
        return -1.0;
    float x_cap[d_cap];
    float y_cap[L];
    float prototype[d_cap];
    float prototypeLabel[L];
    float weight = 0.0;

    for(unsigned i = 0; i < L; i++){
        y_cap[i] = 0.0;
    }
    // Project x onto the d_cap dimension
    denseLDProjection(x, x_cap);
    for(unsigned i = 0; i < m; i++){
        // at this stage, we are holding a feature vector
        // its LD projection and a prototype in memory
        getPrototype(i, prototype);
        weight = gaussian(x_cap, prototype, d_cap, gamma);
        getPrototypeLabel(i, prototypeLabel);
        scalarVectorMul(prototypeLabel, L, weight);
        vectorVectorAdd(y_cap, prototypeLabel, L);
    }
    if (scores != nullptr)
        for(int i = 0; i < L; i++)
            scores[i] = (int)(100000 * y_cap[i]);
    return rho(y_cap, L);
}

void setup(){

}

Timer t;
void loop(){
    while (true){
        t.start();
        for (int i=0;i<1000;i++){
            int tmp;
            float tmp1;
            predict(&tmp1,124,&tmp);
        }
        t.stop();
        Serial.println(t.read_us());
    }
}