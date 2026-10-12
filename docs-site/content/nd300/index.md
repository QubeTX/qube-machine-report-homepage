---
title: "ND-300: investigate network problems"
description: "Check your connection, understand failed network checks, and measure internet speed with SpeedQX."
sidebar:
  label: "Overview"
---

ND-300 checks how your computer connects to the network and the internet. Use it when websites will not load, Wi-Fi seems unreliable, or you need evidence of a connection problem.

It also installs `speedqx`, a separate command for measuring internet speed.

## What it does

| Task | Command |
| --- | --- |
| Check the connection without a speed test | `nd300 --fast` |
| Run the standard checks, including internet speed | `nd300` |
| Investigate routes, Wi-Fi, and other detailed readings | `nd300 --tech` |
| Test internet speed on its own | `speedqx` |

Diagnostic runs test the network without changing its settings. Separate `dns`, `clear-dns`, and `fix` commands make changes; read the [recovery guide](/nd300/recovery) before using them.

## Check your connection

After [installing ND-300](/nd300/installation), run:

```sh
nd300 --fast
```

You will see a summary of connection checks, including the network adapter, the router, and whether website names can be resolved to addresses. `--fast` skips the speed test but still sends network requests.

A normal `nd300` or `speedqx` run includes a speed test with a 5 GB test-data limit. Network overhead and transfers already in progress can add to that amount. See [SpeedQX](/nd300/speedqx) to set a smaller limit and understand the results.

## Next steps

- [Commands](/nd300/commands): find the right diagnostic options.
- [Basic use cases](/nd300/examples): check connectivity and measure speed.
- [Advanced use cases](/nd300/advanced): investigate detailed findings or save results for scripts.
- [Read the diagnostics](/nd300/diagnostics): understand each check.

Checked against [ND-300 v4.0.1](https://github.com/QubeTX/qube-network-diagnostics/releases/tag/v4.0.1).
