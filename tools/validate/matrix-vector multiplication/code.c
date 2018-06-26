#define POI 1
#define POICOL
#define MSIZE 50
#define COUNT 1000
int first[MSIZE];
int second[MSIZE][MSIZE];
int res[MSIZE];
void setup() {
    for(int i=0; i<MSIZE; i++) {
        for(int j=0; j<MSIZE; j++) {
            second[i][j] = i + j;
        }
    }
    for (int i=0;i<MSIZE;i++){
        first[i] = i;
    }
}
int main(void) {
	setup();
    int m, n, p, q, c, d, k, sum = 0;
    m = 1;
    n = MSIZE;
    p = MSIZE;
    q = MSIZE;
    int* resi = &res[0];
    int* fp;
    int* sp1 = &second[0][0];
    int* sp;
    int* po;
    int* fp1 = &first[0];
    sp = sp1;
    for (d = 0; d < n; d++) {
        po = sp;
        fp = fp1;
        sp = sp + MSIZE;
        sum = 0;
        for (k = 0; k < q; k++) {
            sum = sum + *fp * *po;
            fp++;
            po = po + 1;
        }
        *(resi+d) = sum;
    }
    fp1 = fp;
}
