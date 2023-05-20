# Readme

Set of scripts for testing / optimization

## CPU Process Affinity

  * `setup/kernel.aff.sh`

Script for setting CPU affinities for specific CPU's  
Place within /var/lib/dietpi/postboot.d/  
To run at bootup

## IRQ Balance

  * `setup/irq-ball.sh`

Script to balance the irq on the CPU's not in use

## CLI Test Script

  * https://forum.linuxcnc.org/18-computer/39370-script-for-automated-testing-of-computer-latency
  * `benchmark/lcnc-hw-modified.sh` - 
  * `benchmark/lcnc-hw.sh`

The modified version ignores launching a video due to issues with getting it to auto play

## Standard Test

  * `benchmark/std-test.sh`

Script for running latency-histogram with standard options
