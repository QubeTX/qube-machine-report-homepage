---
title: QubeTX documentation
description: Choose a tool, install it, and get useful results from your computer.
---

Three tools for understanding your computer and its connection. Start with the question you want to answer.

| Your task | Tool | Start here |
| --- | --- | --- |
| Check machine specifications and save a system report | TR-300, with the equivalent `report` command | [Machine reports](/tr300) |
| Diagnose connectivity, DNS, Wi-Fi, or slow internet | ND-300, with the standalone `speedqx` speed test | [Network diagnostics](/nd300) |
| Watch live system measurements in a terminal or desktop app | SD-300 | [System monitoring](/sd300) |

## Install and run

Use the [online installers](/installation) for a managed installation. For disconnected machines, download the [offline bundle](/installation/offline) on another computer and transfer it.

Once installed, open a new terminal:

```sh
tr300
nd300 --fast
sd300
```

`tr300` prints a report. `nd300 --fast` checks the network without the throughput test. `sd300` opens the terminal monitor's mode chooser; `sd300 gui` opens its installed desktop companion.

## Find the right guide

- [Windows installation](/installation/windows), [macOS installation](/installation/macos), or [Linux installation](/installation/linux)
- [Update or remove a tool](/installation/lifecycle)
- [Troubleshoot installation and missing measurements](/troubleshooting)
- [Export a machine report](/tr300/examples)
- [Measure internet throughput](/nd300/speedqx)
- [Change DNS or investigate network recovery](/nd300/recovery)
- [Use the SD-300 desktop app](/sd300/desktop) or [export a snapshot](/sd300/snapshots)

These guides are checked against TR-300 4.4.0, ND-300 4.0.1, and SD-300 4.1.0. [Source versions and scope](/sources) explains the difference between this documentation snapshot and installers that follow the latest release.
