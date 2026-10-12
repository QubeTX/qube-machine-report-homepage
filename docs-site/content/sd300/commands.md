---
title: "SD-300 command reference"
description: "Exact help for the terminal, desktop, snapshot, and lifecycle commands."
---

The help below was captured from the published SD-300 4.1.0 executable. Lifecycle commands modify the installed product; adding `--help` only displays usage.


## sd300

```text
SD-300 is a live, interactive terminal user interface for real-time
system diagnostics and monitoring. Part of the QubeTX 300 Series
alongside TR-300 (Machine Report) and ND-300 (Network Diagnostic).

Run without flags to choose a diagnostic mode interactively,
use --user / --tech to launch directly into a mode, or run
sd300 update to check for and install the latest release. Use
    sd300 snapshot --json for a redacted, noninteractive diagnostic report.

Usage: sd300.exe [OPTIONS]
       sd300.exe <COMMAND>

Commands:
  update        Check for updates and install the latest release
  install       Install the latest release through the preferred managed CLI channel
  uninstall     Remove SD-300 through its proven installation owner
  snapshot      Collect one redacted noninteractive diagnostic snapshot
  capabilities  Show which diagnostic capabilities are available on this machine
  gui           Open or focus the installed SD-300 desktop monitor
  tools         Inspect or explicitly install an independently owned optional companion
  help          Print this message or the help of the given subcommand(s)

Options:
      --user
          Launch directly into User Mode (plain language diagnostics)

      --tech
          Launch directly into Technician Mode (raw data and advanced metrics)

      --update
          Check for updates and install the latest version (legacy flag form of `sd300 update`)

  -h, --help
          Print help (see a summary with '-h')

  -V, --version
          Print version

EXAMPLES:
  sd300          Choose a diagnostic mode interactively
  sd300 --user   Launch directly into User Mode
  sd300 --tech   Launch directly into Technician Mode
  sd300 update   Check for updates and install
  sd300 install  Install latest through the managed CLI channel
  sd300 uninstall Remove the proven installed channel
  sd300 gui      Open or focus the installed desktop monitor
  sd300 snapshot --json       Redacted diagnostic snapshot
  sd300 capabilities --json   Capability and availability states
  sd300 --update Same as 'sd300 update' (legacy flag form)

KEYBINDINGS:
  1-9          Switch to section
  q / Esc      Quit (Esc closes panels and filters first)
  Ctrl+C       Quit to shell
  m            Return to mode selection
  ?            Help overlay
  f            Toggle temperature unit (C/F)
  j / k        Select rows / scroll inspector
  c / M / p / n  Sort processes by CPU / Memory / PID / Name
  r            Retry providers and discovery
  /            Filter the complete inventory
  Enter        Inspect selected row
  Space        Pause view / resume newest sample
  PgUp/PgDn    Page through rows
  Home / End   Select first / last row
  Tab          Next section (Shift+Tab goes back)
  s            Reverse process sort direction
  F            Findings, evidence and next steps
  N            Optional network diagnostics and SpeedQX
  A            Review a privileged read of the selected drive
  E            Export this session with redaction

SECTIONS:
  1 Overview    System health dashboard / identity and gauges
  2 CPU         Load, sparkline, per-core utilization
  3 Memory      Usage, swap, top consumers
  4 Disk        Drive health, partitions, SMART data
  5 GPU         Utilization, VRAM, temperature
  6 Network     Connectivity, interfaces, active connections
  7 Processes   Running apps / sortable process table
  8 Thermals    Temperature, fans, battery, power
  9 Drivers     Device health, driver versions, services
```


## sd300 tools

```text
Inspect or explicitly install an independently owned optional companion

Usage: sd300.exe tools [OPTIONS] <TOOL>

Arguments:
  <TOOL>  [possible values: nd300, smartctl]

Options:
      --install  Install the verified official distribution; requires explicit acceptance
      --accept   Consent to the exact operation described by `sd300 tools TOOL`
      --json
  -h, --help     Print help
```

Run `sd300 tools nd300` or `sd300 tools smartctl` to inspect the companion first. Adding `--install` requests installation; review the described operation before accepting it. Companions remain independently owned, so installing or removing SD-300 does not imply ownership of those tools.

## sd300 gui

```text
Open or focus the installed SD-300 desktop monitor

Usage: sd300.exe gui

Options:
  -h, --help  Print help
```


## sd300 install

```text
Install the latest release through the preferred managed CLI channel

Usage: sd300.exe install [OPTIONS]

Options:
      --json  Emit exactly one machine-readable JSON result object
  -h, --help  Print help
```


## sd300 update

```text
Check for updates and install the latest release

Usage: sd300.exe update [OPTIONS]

Options:
      --json  Emit exactly one machine-readable JSON result object
  -h, --help  Print help
```


## sd300 uninstall

```text
Remove SD-300 through its proven installation owner

Usage: sd300.exe uninstall [OPTIONS]

Options:
      --json  Emit exactly one machine-readable JSON result object
  -h, --help  Print help
```


## sd300 snapshot

```text
Collect one redacted noninteractive diagnostic snapshot

Usage: sd300.exe snapshot [OPTIONS]

Options:
      --schema-version <SCHEMA_VERSION>
          JSON representation: legacy schema 1 (default) or nullable, attributed schema 2 [default: 1]
      --json
          Emit machine-readable JSON instead of a compact text summary
      --include-sensitive
          Include host, network-address, MAC-address, and drive-serial values
  -h, --help
          Print help
```


## sd300 capabilities

```text
Show which diagnostic capabilities are available on this machine

Usage: sd300.exe capabilities [OPTIONS]

Options:
      --schema-version <SCHEMA_VERSION>
          JSON representation: legacy schema 1 (default) or nullable, attributed schema 2 [default: 1]
      --json
          Emit machine-readable JSON instead of a compact text summary
      --include-sensitive
          Include host, network-address, MAC-address, and drive-serial values
  -h, --help
          Print help
```


Checked against [SD-300 v4.1.0](https://github.com/QubeTX/qube-system-diagnostics/releases/tag/v4.1.0).
