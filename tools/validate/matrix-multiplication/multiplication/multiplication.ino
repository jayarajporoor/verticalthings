#define STONORM 1
#define ROWWISE 1
#define MSIZE 40
#define COUNT 100
int first[MSIZE][MSIZE];
int second[MSIZE][MSIZE];
int res[MSIZE][MSIZE];
void setup() {
    Serial.begin(9600);
    for(int i=0; i<MSIZE; i++) {
        for(int j=0; j<MSIZE; j++) {
            first[i][j] = i + j;
            second[i][j] = i + j;
        }
    }
}
void loop() {
    int m, n, p, q, c, d, k, sum = 0;
    for(int i=0; i<1000; ++i); // an empty loop
    unsigned long time =micros();
    m = MSIZE;
    n = MSIZE;
    p = MSIZE;
    q = MSIZE;
    for (int i=0; i<COUNT; i++) {
#ifdef STOPOI
        int* resi = &res[0][0];
#endif
#ifdef POI
        int* fp;
        int* sp1 = &second[0][0];
        int* sp;
        int* po;
        int* fp1 = &first[0][0];
#endif
        for (c = 0; c < m; c++) {
#ifdef POI
            sp = sp1;
#endif
            for (d = 0; d < n; d++) {
#ifdef POI
                po = sp;
                fp = fp1;
#endif
#ifdef POIROW
                sp = sp + MSIZE;
#endif            
#ifdef POICOL
                sp++;
#endif                     
                sum = 0;
                for (k = 0; k < q; k++) {
#ifdef ROWWISE
                    sum = sum + first[c][k]*second[d][k];
#endif
#ifdef COLWISE
                    sum = sum + first[c][k]*second[k][d];
#endif
#ifdef POI
                    sum = sum + *fp * *po;
                    fp++;
#endif
#ifdef POICOL
                    po = po + MSIZE;
#endif
#ifdef POIROW
                    po = po + 1;
#endif               
                }
#ifdef STOPOI
                *(resi+d) = sum;
#endif
#ifdef STONORM
                res[c][d] = sum;
#endif
            }
#ifdef POI
            fp1 = fp;
#endif
#ifdef STOPOI
            resi += d;
#endif
        }
    }
    //Serial.println(time);
    Serial.println(micros()-time);
    //delay(1000);
}
