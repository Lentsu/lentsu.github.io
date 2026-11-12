+++
date = '2026-06-15'
start_date = '2026-06-15'
end_date = '2026-08-31'
title = 'Aalto Research Assistant'
summary = 'Worked with booting Operating Systems in the Aalto Microelectronics Research unit METKA'
tags = ['RISC-V', 'C/C++', 'Python', 'IC Design', 'Linux', 'Operating Systems']
showTags = true
+++

Worked with booting Linux and Zephyr on the Aalto University's [A-Core](https://gitlab.com/a-core) processor.

Linux booted in simulation in both **machine** (M,U) and **supervisor** (M,S,U) execution modes.

![Linux on A-Core](a-core_linux.png)
Trivially, Zephyr also booted in simulation.

For both operating systems we had to write kernel drivers for our custom UART, interrupt controller (PLIC) and initially machine timer (CLINT). We also had to do some hardware changes to avoid interrupts in M-mode and to implement some missing instructions etc.
