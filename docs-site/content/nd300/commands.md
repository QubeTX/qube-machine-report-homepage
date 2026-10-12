---
title: "ND-300 command reference"
description: "Diagnostic options, recovery actions, and output controls."
---

| Flag | Description |
|------|-------------|
| `-t, --tech` | Technician mode — show full technical report with deep diagnostics |
| `-T, --title <TITLE>` | Custom title for the report header |
| `--json` | Output results as JSON |
| `--ascii` | Use ASCII characters instead of Unicode box-drawing |
| `--no-color` | Disable colored output |
| `--fast` | Skip the speed test (faster execution) |
| `--deep` | Use the five-minute Deep speed profile; Quick is the default |
| `--max-bytes <BYTES>` | Set a payload budget; defaults are 5 GB Quick / 20 GB Deep |
| `--accept-mlab` | Consent to M-Lab publication of results and IP addresses |
| `--speed-duration <SECS>` | Legacy parse-compatible alias; v5 uses its bounded profile schedule |
| `--verbose` | Show additional debug/trace information |
| `-d, --dns` | Change DNS servers and verify connectivity (requires elevated privileges) |
| `-f, --fix` | Run the diagnostic-driven triage / fix loop (requires elevated privileges). Equivalent to `nd300 fix`. |
| `-c, --clear-dns` | Flush the system DNS cache. Equivalent to `nd300 clear-dns`. |
| `--uninstall` | Remove nd300 from the system. Equivalent to `nd300 uninstall`. |
| `--update` | Check for updates and install the latest version. Equivalent to `nd300 update`. |
| `-y, --yes` | Auto-confirm medium-risk prompts when running the fix flow. Does **not** bypass high-risk Y/N. |
| `-h, --help` | Print help |
| `-v, --version` | Print version |

### Subcommands

| Subcommand | Equivalent flag | Description |
|------------|-----------------|-------------|
| `nd300 dns` | `nd300 -d` / `nd300 --dns` | Change DNS servers and verify connectivity (semi-exit-early: exits on failure, continues to diagnostics on success) |
| `nd300 fix [-y]` | `nd300 -f` / `nd300 --fix` | Diagnostic-driven triage and recovery loop |
| `nd300 update` | `nd300 --update` | Self-update to the latest release |
| `nd300 clear-dns` | `nd300 -c` / `nd300 --clear-dns` | Flush the DNS cache and exit |
| `nd300 uninstall` | `nd300 --uninstall` | Uninstall nd300 from this system |

Checked against [ND-300 v4.0.1](https://github.com/QubeTX/qube-network-diagnostics/releases/tag/v4.0.1).
