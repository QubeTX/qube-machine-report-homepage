---
title: "TR-300 command reference"
description: "Every report option and lifecycle action in the documented release."
---

Positional actions can be written without a double dash. They are mutually
exclusive with each other and with the legacy action flags.

| Action | Description |
|--------|-------------|
| `update` | Check for updates and install the latest version |
| `install` | Configure the optional shell-profile auto-run block |
| `uninstall` | Remove the profile block, or choose Complete for both commands and an exact matching managed receipt |

| Option | Description |
|--------|-------------|
| `--ascii` | Use ASCII characters instead of Unicode |
| `--json` | Output in JSON format |
| `-t, --title <TITLE>` | Custom title for the report header |
| `--no-color` | Disable colored output |
| `--fast` | Fast mode: skip slow collectors for quick auto-run |
| `-f, --full` | Explicit full collection (already the default; conflicts with `--fast`) |
| `-r, -s, --report, --save` | Save this full table report as Markdown in Downloads |
| `--no-elevation-hint` | Suppress the optional Linux `sudo` detail hint |
| `--update` | Legacy flag form of `tr300 update` |
| `--install` | Legacy flag form of `tr300 install` |
| `--uninstall` | Legacy flag form of `tr300 uninstall` |
| `-h, --help` | Print help information |
| `-V, --version` | Print version information |

The packaged `report` command accepts every option and action in this table,
including install, update, and uninstall. It is a full alias for `tr300` on
Windows, macOS, and Linux. Keep `report` beside `tr300`; it delegates only to
that exact adjacent payload, never to a PATH-resolved executable. Both names
show the same help and version text and propagate the same exit status.

`tr300 config` is not a command. Configuration remains CLI-driven; passing the
word `config` is rejected as an invalid action.

Checked against [TR-300 v4.4.0](https://github.com/QubeTX/qube-machine-report/releases/tag/v4.4.0).
