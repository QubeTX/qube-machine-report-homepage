---
title: "ND-300 commands"
description: "Choose network checks, output options, and explicit recovery actions."
sidebar:
  label: "Commands"
---

Run `nd300 --fast` for a connection check without the speed test. Run `nd300` for the standard checks including speed.

Speed tests use internet data. The default Quick profile has a 5 GB test-data limit, excluding network overhead and transfers already in progress. Lower it with `--max-bytes` when needed.

## Common commands

| What you want to do | Command |
| --- | --- |
| Check connectivity without testing speed | `nd300 --fast` |
| Run the standard checks with a 250 MB test-data limit | `nd300 --max-bytes 250000000` |
| Add detailed checks and skip the speed test | `nd300 --tech --fast` |
| Name a report | `nd300 --fast --title "Office Wi-Fi"` |
| Print structured results for a script | `nd300 --fast --json` |
| Check the installed version | `nd300 --version` |

For example:

```sh
nd300 --tech --fast
```

The result includes detailed network checks without the speed test. See [Read the diagnostics](/nd300/diagnostics) to interpret them. For speed testing alone, use [SpeedQX](/nd300/speedqx).

## Diagnostic and output options

| Option | What it does |
| --- | --- |
| `-t`, `--tech` | Adds detailed network checks and results |
| `--fast` | Skips the speed test; other network checks still run |
| `--deep` | Selects the longer speed profile, with a five-minute limit |
| `--max-bytes <BYTES>` | Sets the test-data limit; defaults are 5 GB for Quick and 20 GB for Deep |
| `--accept-mlab` | Consents to M-Lab publishing measurement results and IP addresses |
| `-T`, `--title <TITLE>` | Sets the report heading; put a multiword title in quotes |
| `--json` | Prints structured JSON output |
| `--ascii` | Uses simple text characters for table borders |
| `--no-color` | Removes colored output |
| `--verbose` | Shows extra diagnostic information, mainly for troubleshooting the tool |
| `-h`, `--help` | Shows command help |
| `-v`, `--version` | Shows the installed version |

ND-300 uses uppercase `-T` for a title and lowercase `-t` for Technician mode. The older `--speed-duration <SECS>` option is still accepted, but does not override the current speed profile's schedule.

## Commands that make changes

Network recovery can interrupt your connection. Read [DNS changes and recovery](/nd300/recovery) before running these actions, especially over a remote connection.

| Command | What it changes |
| --- | --- |
| `nd300 dns` | Changes DNS servers, verifies the connection, and continues diagnostics if successful |
| `nd300 clear-dns` | Clears saved DNS lookups, then exits |
| `nd300 fix` | Checks failures, attempts relevant repairs, and checks the result |
| `nd300 update` | Updates ND-300 and SpeedQX |
| `nd300 uninstall` | Removes the installed product |

DNS changes and the fix flow need administrator privileges. `-y` or `--yes` can confirm medium-risk fix prompts automatically. It never approves high-risk actions, and does not allow a consumer VPN to be disabled without an interactive confirmation.

The older forms remain available: `-d`/`--dns`, `-c`/`--clear-dns`, `-f`/`--fix`, `--update`, and `--uninstall`. Prefer the named commands in new instructions and scripts.

Checked against [ND-300 v4.0.1](https://github.com/QubeTX/qube-network-diagnostics/releases/tag/v4.0.1).
