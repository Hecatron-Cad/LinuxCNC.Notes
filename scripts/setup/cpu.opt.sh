#!/bin/sh

# To isolate cores specified in isolcpus using irqbalance
irqbalance --foreground --oneshot

# Use tuna move all kernel threads away from cores 2-3
tuna --cpus=2-3 --isolate

# kernel workqueues needs to be moved away from isolated cores. To move all work queues to core 0 (cpumask 0x1):
find /sys/devices/virtual/workqueue -name cpumask  -exec sh -c 'echo 1 > {}' ';'
