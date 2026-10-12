---
title: "Use the terminal monitor"
description: "Navigate the nine sections in User or Technician mode."
---

SD-300 provides two diagnostic modes designed for different audiences:

**User Mode** presents system health in plain language with color-coded status indicators. Unsupported or unavailable telemetry remains explicit instead of being converted into a positive health claim.

**Technician Mode** exposes raw data: per-core CPU utilization, memory-module topology, driver versions and dates, network interface tables, and real-time sparkline graphs.

### Diagnostic Sections

Navigate between 9 sections using number keys:

| # | Section | User Mode | Technician Mode |
|---|---------|-----------|-----------------|
| 1 | **Overview** | Resource cards in the app; system dashboard in the terminal | Identity, resource readings, top processes and findings |
| 2 | **CPU** | Load status, sparkline | Per-core bars, frequency, process table |
| 3 | **Memory** | Usage summary, top consumers | RAM/Swap sparklines, process table |
| 4 | **Disk** | Drive health, space usage | Mount table, filesystem details |
| 5 | **GPU** | Card status, utilization | VRAM, driver, utilization sparkline |
| 6 | **Network** | Connection status, speed | Interface table, throughput sparklines |
| 7 | **Processes** | Running apps in plain language | Sortable process table with scroll |
| 8 | **Thermals** | Temperature, fans, battery | Sensor table, fan RPM, battery details |
| 9 | **Drivers** | Device health overview | Driver versions, dates, service status |

### Live Updates

- **Fast metrics** (CPU, memory, network, processes): every 1 second
- **Slow metrics** (disk, GPU, thermals): every 5 seconds
- **Connections**: every 3 seconds
- **Connectivity**: background refresh every 15 seconds
- **Disk health**: background refresh every 60 seconds
- **Drivers**: background startup scan and on demand (press `r`)

## Keyboard controls

| Key | Action |
|-----|--------|
| `1`-`9` | Switch to section |
| `q` / `Esc` | Quit |
| `Ctrl+C` | Quit to shell |
| `m` | Return to mode selection |
| `?` | Help overlay |
| `f` | Toggle temperature unit (C/F) |
| `j` / `k` | Scroll (processes, connections, drivers; disk in Tech Mode) |
| `c` / `M` / `n` / `p` | Sort by CPU / Memory / Name / PID (Section 7) |
| `r` | Retry providers and discovery |
| `/` | Filter the complete inventory |
| `Enter` | Inspect the selected row |
| `Space` | Pause the view or resume the newest sample |
| `PgUp` / `PgDn` | Page through rows |
| `Home` / `End` | Select the first or last row |
| `Tab` / `Shift+Tab` | Next or previous section |
| `s` | Reverse process sort direction |
| `F` | Findings, evidence, and next steps |
| `N` | Optional network diagnostics and SpeedQX |
| `A` | Review a privileged read of the selected drive |
| `E` | Export this session with redaction |

`Esc` closes panels and filters before quitting. `j` and `k` select rows or scroll an inspector. Pausing the view holds what you see; resume to return to the newest sample. A privileged read or companion installation requires reviewing the proposed action.

Checked against [SD-300 v4.1.0](https://github.com/QubeTX/qube-system-diagnostics/releases/tag/v4.1.0).
