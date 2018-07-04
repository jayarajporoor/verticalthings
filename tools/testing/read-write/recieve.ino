int incoming[12];
int i=0;
void setup() {
  // put your setup code here, to run once:

}
void loop() {
  while(Serial.available() < 2){
    incoming[i] = Serial.read();
    incoming[i+1] = Serial.read();
  }
  i = (i + 2)%12;
  if (i == 0){
    for (int j=0;j<12;j++){
      Serial.write(incoming[j]);
    }
  }
}