---
title: "Use the terminal monitor"
description: "Choose a mode, move between system sections, and use the keyboard controls."
sidebar:
  label: "Terminal controls"
---

Start the terminal monitor in User mode:

```sh
sd300 --user
```

User mode explains status in plain language. Use `sd300 --tech` for more detailed measurements and tables, or `sd300` to choose a mode when you open it.

## Find a reading

Press a number key to open a section:

| Key | Section | What to look for |
| --- | --- | --- |
| `1` | Overview | Main system readings and findings |
| `2` | CPU | Processor activity, with per-core detail in Technician mode |
| `3` | Memory | Memory use and the programs using it |
| `4` | Disk | Drive health, space, and available storage details |
| `5` | GPU | Graphics activity, graphics memory, and driver information |
| `6` | Network | Connections, interfaces, and current transfer activity |
| `7` | Processes | Running programs, with sorting and filtering |
| `8` | Thermals | Temperatures, fans, battery, and power |
| `9` | Drivers | Device health, driver versions, and services |

Read the status with each measurement. **Unavailable** or **unsupported** does not mean the reading is zero or that the component passed a health check.

## Inspect a running program

1. Press `7` for Processes.
2. Press `c` to sort by processor use or uppercase `M` for memory.
3. Use `j` or `k` to select a row, then press `Enter` for details.
4. Press `Esc` to close the detail panel.

Use `/` to filter the list and `s` to reverse its sort order. These controls help you inspect activity; they do not stop programs.

## Keyboard reference

| Key | Action |
| --- | --- |
| `1`–`9` | Open a section |
| `Tab` / `Shift+Tab` | Next / previous section |
| `j` / `k` | Select rows or scroll an open detail panel |
| `PgUp` / `PgDn` | Move through a page of rows |
| `Home` / `End` | Select the first / last row |
| `/` | Filter the inventory |
| `Enter` | Inspect the selected row |
| `c` / `M` / `n` / `p` | Sort processes by CPU / memory / name / process ID |
| `s` | Reverse the process sort order |
| `Space` | Pause the displayed view / return to the newest reading |
| `f` | Switch between Celsius and Fahrenheit |
| `r` | Retry information gathering and device discovery |
| `F` | Open findings, evidence, and next steps |
| `N` | Open optional network diagnostics and SpeedQX |
| `A` | Review an administrator-level read of the selected drive |
| `E` | Export the session with identifying information removed |
| `m` | Return to mode selection |
| `?` | Open help |
| `q` | Quit |
| `Esc` | Close a panel or filter first; otherwise quit |
| `Ctrl+C` | Quit to the terminal prompt |

Pausing holds the displayed view while collection continues. Before a privileged drive read or companion installation, review the action shown by the tool. Review exported files before sharing them.

## How often readings update

Different readings refresh at different intervals. In the documented release, processor, memory, network activity, and process readings target one-second updates. Disk, graphics, and temperature readings target five seconds. Connection lists refresh about every three seconds, connectivity checks every 15 seconds, and drive health every 60 seconds. Driver discovery runs at startup and when you retry with `r`.

These are collection intervals, not a guarantee that every sensor supplies a fresh value that often. Keep the reading's time and availability in mind when comparing values.

Checked against [SD-300 v4.1.0](https://github.com/QubeTX/qube-system-diagnostics/releases/tag/v4.1.0).
