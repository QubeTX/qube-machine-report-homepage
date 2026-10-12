---
title: "TR-300: check and report on your computer"
description: "See computer specifications and system status, then save a report when you need one."
sidebar:
  label: "Overview"
---

TR-300 shows your computer's specifications and current system status in a terminal. Use it to check a machine, compare its configuration, or give support a written report.

The installation includes two equivalent commands: `tr300` and `report`. Both accept the same options.

## What it shows

| Information | What you can learn |
| --- | --- |
| Operating system and hardware | Which system, processor, memory, and supported hardware are present |
| Memory, disks, and processor activity | How much is in use when you run the report |
| Network and session details | Connection information, uptime, and the current session |
| Battery, temperatures, and disk encryption | The readings and status your hardware and operating system make available |

Available details vary by computer. A missing temperature or encryption value does not mean the temperature is zero or encryption is off.

## Run your first report

After [installing TR-300](/tr300/installation), open a terminal and run:

```sh
tr300
```

You will see a report in the terminal. This reads system information and does not create a report file. To save a copy in Downloads, run:

```sh
tr300 --report
```

TR-300 prints a report each time you run it. For a continuously updating view, use [SD-300](/sd300).

## Next steps

- [Commands](/tr300/commands): choose an output format or change the report's appearance.
- [Basic use cases](/tr300/examples): read, name, and save a report.
- [Advanced use cases](/tr300/advanced): use reports in scripts and interpret missing details.
- [Shell startup](/tr300/shell-integration): show a short report when you open a terminal.

Checked against [TR-300 v4.4.0](https://github.com/QubeTX/qube-machine-report/releases/tag/v4.4.0).
