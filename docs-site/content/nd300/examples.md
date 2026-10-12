---
title: "Network troubleshooting examples"
description: "Choose a diagnostic command that answers a specific question."
---

## Check a slow or unreliable connection
```sh
nd300 --fast
nd300 --tech --fast
```
Start with the summary, then inspect gateway, DNS, routes, interfaces, and the relevant technician details. A blocked ICMP response alone does not establish an internet outage. Read unavailable and inconclusive states as such.

## Compare throughput at two times
```sh
speedqx --max-bytes 250000000 --json > speed-before.json
```
Repeat under comparable conditions and save to a different filename. Keep the device, connection type, VPN state, test mode and provider consent the same. A low byte ceiling can end collection before enough valid data exists; retain partial-result labels rather than treating the number as a complete test.

## Save a diagnostic for support
```sh
nd300 --tech --fast --json > network-diagnostic.json
```
Review addresses, hostnames, interface information, and other network details before sharing the file. These exports describe the tested device and paths, not a guaranteed ISP line capacity.

## Investigate DNS

Use `nd300 --tech --fast` to inspect resolver behavior first. If you intend to change the resolver, read [DNS and recovery](/nd300/recovery), then use `nd300 dns` in an elevated local terminal. `nd300 clear-dns` flushes the system DNS cache; it does not choose a new provider.


Checked against [ND-300 v4.0.1](https://github.com/QubeTX/qube-network-diagnostics/releases/tag/v4.0.1).
