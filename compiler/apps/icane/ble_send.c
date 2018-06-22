/*move this to a separate C file*/
void SERCOM3_Handler()    // Interrupt handler for SERCOM3
{
  Serial2.IrqHandler();   //Inconsistency in naming
}
