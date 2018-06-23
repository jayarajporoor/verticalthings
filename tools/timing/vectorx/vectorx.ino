#define POIROW 1
#define POI 1
#define MSIZE 3000
#define COUNT 100
int first[MSIZE];
int second[MSIZE];
int res;
void setup()
{
    Serial.begin(9600);
    for (int i = 0; i < MSIZE; i++) {
        second[i] = i + 2;
    }
    for (int i = 0; i < MSIZE; i++) {
        first[i] = i;
    }
}
void loop()
{
    int m, n, p, q, c, d, k, sum = 0;
    for (int i = 0; i < 1000; ++i);
    unsigned long time = micros();
    for (int j = 0; j < COUNT; j++) {
        int *fp = first;
        int *sp = second;
        for (int i = 0; i < MSIZE; i++) {
            res = res + *fp * *sp;
            fp = fp + 1;
            sp = sp + 1;
        }
    }
    //Serial.println(time);
    unsigned long time1 = micros()-time;
    Serial.println(time1);
    //delay(1000);
}
