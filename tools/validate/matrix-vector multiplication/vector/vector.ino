#define POI 1
#define POIROW
#define MSIZE 60
#define COUNT 1000
int first[MSIZE];
int second[MSIZE][MSIZE];
int res[MSIZE];

void setup() {
    Serial.begin(9600);
    for(int i=0; i<MSIZE; i++) {
        for(int j=0; j<MSIZE; j++) {
            second[i][j] = i + j;
        }
    }
    for (int i=0;i<MSIZE;i++){
        first[i] = i;
    }
}
void loop() {
    int m, n, p, q, c, d, k, sum = 0;
    for(int i=0; i<1000; ++i); // an empty loop
    unsigned long time =micros();
    m = 1;
    n = MSIZE;
    p = MSIZE;
    q = MSIZE;
    for (int i=0; i<COUNT; i++) {
        int* resi = &res[0];
#ifdef POI
        int* fp;
        int* sp1 = &second[0][0];
        int* sp;
        int* po;
        int* fp1 = &first[0];
#endif
       //   Serial.println("Sandesh");
#ifdef POI
            sp = sp1;
#endif
            for (d = 0; d < n; d++) {
     //         Serial.println("Ghanta");
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
                    sum = sum + first[k]*second[d][k];
#endif
#ifdef COLWISE
                    sum = sum + first[k]*second[k][d];
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
                *(resi+d) = sum;
            }
#ifdef POI
            fp1 = fp;
#endif
    }
    //Serial.println(time);
    Serial.println(micros()-time);
    //delay(1000);
}