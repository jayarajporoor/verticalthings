#ifndef __STM32_HAL_EX1_H__
#define __STM32_HAL_EX1_H__ 1

#define BUFFERSIZE 128

#define HAL_OK 0
#define HAL_ERROR 1

typedef void * HSPI;
typedef HSPI * SPI_HandleRef;


extern HSPI SpiHandle;


int HAL_SPI_TransmitReceive_DMA(HSPI *, uint8_t *, uint8_t *, int);

void Error_Handler();


#endif