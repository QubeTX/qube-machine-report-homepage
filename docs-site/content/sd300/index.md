---
title: "SD-300: watch your computer in use"
description: "Monitor live system activity in a terminal or desktop app and save a diagnostic snapshot."
sidebar:
  label: "Overview"
---

SD-300 shows live readings from your computer. Use it to investigate a slow app, watch memory or processor activity, check available drive and temperature readings, or capture the system's state for support.

You can use the terminal monitor or the desktop app. Both belong to the same installed product and can run independently.

## What it shows

Nine sections cover the overview, processor, memory, disks, graphics, network, running processes, temperatures, and drivers. **User mode** explains status in plain language. **Technician mode** adds detailed readings and tables.

Some readings depend on your hardware, drivers, or permissions. SD-300 shows when a reading is unavailable; that does not mean the component is healthy or its value is zero.

## Open the monitor

After [installing SD-300](/sd300/installation), start the terminal monitor in User mode:

```sh
sd300 --user
```

Press `1`–`9` to change sections and `q` to quit. To open the installed desktop app instead, run:

```sh
sd300 gui
```

For a report you collect once rather than a live view, use `sd300 snapshot` or [TR-300](/tr300).

## Next steps

- [Commands](/sd300/commands): open a view, collect a snapshot, or manage the installation.
- [Basic use cases](/sd300/examples): find busy apps and inspect system readings.
- [Advanced use cases](/sd300/advanced): export results, check sensor support, and inspect optional tools.
- [Terminal controls](/sd300/terminal) and [Desktop app](/sd300/desktop): learn the controls for your preferred view.

Checked against [SD-300 v4.1.0](https://github.com/QubeTX/qube-system-diagnostics/releases/tag/v4.1.0).
