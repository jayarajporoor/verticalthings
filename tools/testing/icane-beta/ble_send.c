// Instantiate the extra Serial classes
Uart Serial2(&sercom3, PIN_SERIAL2_RX, PIN_SERIAL2_TX, PAD_SERIAL2_RX, PAD_SERIAL2_TX);

/*move this to a separate C file*/
void SERCOM3_Handler()    // Interrupt handler for SERCOM3
{
  Serial2.IrqHandler();   //Inconsistency in naming
}
