---
title: "System monitoring examples"
description: "Find resource pressure and capture evidence without changing the computer."
---

## Identify a busy process
```sh
sd300 --tech
```
Open Processes with `7`. Sort by CPU with `c`, memory with `M`, name with `n`, or PID with `p`; use `j` and `k` to scroll. Observe several refreshes before drawing a conclusion from a short spike.

## Read a plain-language overview
```sh
sd300 --user
```
Use the numbered sections to inspect CPU, memory, storage, GPU, network, processes, thermals and drivers. Press `?` for help and `q` to return to the shell.

## Compare terminal and desktop observations
```sh
sd300 gui
```
Open the corresponding desktop section and compare the same device and metric at similar times. The interfaces share collectors but have independent presentation preferences and refresh behavior. A historical graph and an instantaneous reading need not be identical.

## Capture missing information for support

Save both a [snapshot and capability record](/sd300/snapshots). Include the tool version, operating system, which sensor or device was expected, and whether the record reports unsupported or permission-denied. Redact identifiers before sharing.

SD-300's optional ND-300 integration requires ND-300 to be installed separately. Local network throughput counters are different from an internet speed test; use [SpeedQX](/nd300/speedqx) for the latter.


Checked against [SD-300 v4.1.0](https://github.com/QubeTX/qube-system-diagnostics/releases/tag/v4.1.0).
