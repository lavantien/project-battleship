/**************************************************************************/
/**
 * @file     main.c
 * @version  V2.00
 * $Revision: 6 $
 * $Date: 15/01/16 11:44a $
 * @brief    Show how to set GPIO pin mode and use pin data input/output control.
 * @note
 * Copyright (C) 2014 Nuvoton Technology Corp. All rights reserved.
 ******************************************************************************/
#
include < stdio.h > #include "NUC131.h"

#
define PLL_CLOCK 50000000# define ARRAY_SIZE 10

void SYS_Init(void) {
    /*---------------------------------------------------------------------------------------------------------*/
    /* Init System Clock                                                                                       */
    /*---------------------------------------------------------------------------------------------------------*/

    /* Enable Internal RC 22.1184MHz clock */
    CLK_EnableXtalRC(CLK_PWRCON_OSC22M_EN_Msk);

    /* Waiting for Internal RC clock ready */
    CLK_WaitClockReady(CLK_CLKSTATUS_OSC22M_STB_Msk);

    /* Switch HCLK clock source to Internal RC and HCLK source divide 1 */
    CLK_SetHCLK(CLK_CLKSEL0_HCLK_S_HIRC, CLK_CLKDIV_HCLK(1));

    /* Enable external XTAL 12MHz clock */
    CLK_EnableXtalRC(CLK_PWRCON_XTL12M_EN_Msk);

    /* Waiting for external XTAL clock ready */
    CLK_WaitClockReady(CLK_CLKSTATUS_XTL12M_STB_Msk);

    /* Set core clock as PLL_CLOCK from PLL */
    CLK_SetCoreClock(PLL_CLOCK);

    /* Enable UART module clock */
    CLK_EnableModuleClock(UART0_MODULE);

    /* Select UART module clock source */
    CLK_SetModuleClock(UART0_MODULE, CLK_CLKSEL1_UART_S_HXT, CLK_CLKDIV_UART(1));

    /*---------------------------------------------------------------------------------------------------------*/
    /* Init I/O Multi-function                                                                                 */
    /*---------------------------------------------------------------------------------------------------------*/

    /* Set GPB multi-function pins for UART0 RXD(PB.0) and TXD(PB.1) */
    SYS - > GPB_MFP &= ~(SYS_GPB_MFP_PB0_Msk | SYS_GPB_MFP_PB1_Msk);
    SYS - > GPB_MFP |= (SYS_GPB_MFP_PB0_UART0_RXD | SYS_GPB_MFP_PB1_UART0_TXD);
}

void UART0_Init() {
    /*---------------------------------------------------------------------------------------------------------*/
    /* Init UART                                                                                               */
    /*---------------------------------------------------------------------------------------------------------*/
    /* Reset UART0 module */
    SYS_ResetModule(UART0_RST);

    /* Configure UART0 and set UART0 Baudrate */
    UART_Open(UART0, 115200);
}

/*---------------------------------------------------------------------------------------------------------*/
/* MAIN function                                                                                           */
/*---------------------------------------------------------------------------------------------------------*/

void initKeypad() {
    PA10 = 0;
    PA11 = 0;
    PA15 = 0;
    PE5 = 0;

    PB11 = 1;
    PA14 = 1;
    PA13 = 1;
    PA12 = 1;
};
int ScanKey() {
        //Colum 1
        if (PB11 == 0) {
            PA10 = 1;
            if (PB11 == 1) {
                CLK_SysTickDelay(2000000);
                return 1;
            } else {
                PA11 = 1;
                if (PB11 == 1) {
                    CLK_SysTickDelay(2000000);
                    return 5;
                } else {
                    PA15 = 1;
                    if (PB11 == 1) {
                        CLK_SysTickDelay(2000000);
                        return 9;
                    } else {
                        PE5 = 1;
                        if (PB11 == 1) {
                            CLK_SysTickDelay(2000000);
                            return 13;
                        }
                    }
                }
            }
        };
        //Colum 2
        if (PA14 == 0) {
            PA10 = 1;
            if (PA14 == 1) {
                CLK_SysTickDelay(2000000);
                return 2;
            } else {
                PA11 = 1;
                if (PA14 == 1) {
                    CLK_SysTickDelay(2000000);
                    return 6;
                } else {
                    PA15 = 1;
                    if (PA14 == 1) {
                        CLK_SysTickDelay(2000000);
                        return 10;
                    } else {
                        PE5 = 1;
                        if (PB11 == 1) {
                            CLK_SysTickDelay(2000000);
                            return 14;
                        }
                    }
                }
            }
        };

        //Colum 3
        if (PA13 == 0) {
            PA10 = 1;
            if (PA13 == 1) {
                CLK_SysTickDelay(2000000);
                return 3;
            } else {
                PA11 = 1;
                if (PA13 == 1) {
                    CLK_SysTickDelay(2000000);
                    return 7;
                } else {
                    PA15 = 1;
                    if (PA13 == 1) {
                        CLK_SysTickDelay(2000000);
                        return 11;
                    } else {
                        PE5 = 1;
                        if (PB11 == 1) {
                            CLK_SysTickDelay(2000000);
                            return 15;
                        }
                    }
                }
            }
        };

        //Colum 4
        if (PA12 == 0) {
            PA10 = 1;
            if (PA12 == 1) {
                CLK_SysTickDelay(2000000);
                return 4;
            } else {
                PA11 = 1;
                if (PA12 == 1) {
                    CLK_SysTickDelay(2000000);
                    return 8;
                } else {
                    PA15 = 1;
                    if (PA12 == 1) {
                        CLK_SysTickDelay(2000000);
                        return 12;
                    } else {
                        PE5 = 1;
                        if (PA11 == 1) {
                            CLK_SysTickDelay(2000000)
                        }
                    }
                }
            }
        }
}