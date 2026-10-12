---
title: "SD-300 basic use cases"
description: "Watch system activity, find busy apps, and inspect available drive and temperature readings."
sidebar:
  label: "Basic use cases"
---

These examples assume you have [installed SD-300](/sd300/installation). Start with User mode for plain-language status:

```sh
sd300 --user
```

## See what is busy

1. Press `1` to open Overview.
2. Watch processor and memory readings while you reproduce the slowdown.
3. Press `2` for processor detail or `3` for memory detail.

You will see readings change as the computer works. A brief peak is different from activity that stays high; watch the period when the problem occurs.

## Find apps using the most memory

1. Press `7` to open Processes, the list of running apps and background programs.
2. Press uppercase `M` to sort by memory. Press `s` to reverse the order if needed.
3. Use `j` and `k` to select a row, then `Enter` to inspect it.

Press `c` to sort by processor use instead. This helps identify which program is active during a slowdown. Inspecting the list does not stop those programs.

## Check a drive or temperature

Press `4` for disks or `8` for temperatures, fans, battery, and power readings. Read the status next to each value: an unavailable sensor does not indicate zero temperature or a healthy drive.

Press `f` to switch between Celsius and Fahrenheit. If a reading is missing, see [Snapshots and sensor availability](/sd300/snapshots#why-a-sensor-can-be-missing).

## Hold a reading on screen

Press `Space` to pause the displayed view. SD-300 continues collecting readings in the background. Press `Space` again to return to the newest reading.

Use this when you need time to inspect a row. For a saved record, see [Advanced use cases](/sd300/advanced#save-a-snapshot-for-support).

## Use the desktop app

```sh
sd300 gui
```

The installed app opens, or its existing window comes forward. Choose User mode and the section you want to inspect. See [Desktop app](/sd300/desktop) for settings and how closing the window behaves on each platform.

In the terminal, press `?` for help and `q` to quit. The [terminal guide](/sd300/terminal) lists all controls.

Checked against [SD-300 v4.1.0](https://github.com/QubeTX/qube-system-diagnostics/releases/tag/v4.1.0).
