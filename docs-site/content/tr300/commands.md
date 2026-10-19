---
title: "TR-300 commands"
description: "Choose report options, save output, and manage TR-300."
sidebar:
  label: "Commands"
---

Run `tr300` to read a report in the terminal. `report` is an equivalent command and accepts all the same options and actions.

## Common commands

| What you want to do | Command | Result |
| --- | --- | --- |
| Read a full report | `tr300` | Prints available system information; saves no file |
| Run a quicker check | `tr300 --fast` | Skips slower information gathering; saves no file |
| Save a report | `tr300 --report` | Saves a full Markdown report in Downloads |
| Name a report | `tr300 --title "Office workstation"` | Changes the report heading |
| View structured data | `tr300 --json` | Prints JSON for scripts |
| Check the installed version | `tr300 --version` | Prints the version number |

Reports may contain computer, user, and network information. Review saved output before sharing it. To save a named report:

```sh
tr300 --title "Office workstation" --report
```

The output gives the saved file's location.

## Report options

Add options after `tr300` or `report`. Where both a short and long form appear, either form works.

| Option | What it does |
| --- | --- |
| `--fast` | Skips slower checks for a quick summary |
| `-f`, `--full` | Requests a full report; this is already the default |
| `-r`, `-s`, `--report`, `--save` | Saves the full report as Markdown in Downloads |
| `-t`, `--title <TITLE>` | Sets the report heading; put a multiword title in quotes |
| `--json` | Prints structured JSON output |
| `--ascii` | Uses simple text characters for table borders |
| `--no-color` | Removes colored output |
| `--no-elevation-hint` | Hides the Linux reminder about details that may need administrator privileges |
| `-h`, `--help` | Shows command help |
| `-V`, `--version` | Shows the installed version |

Do not combine `--fast` with `--full`. Saving a Markdown report cannot be combined with `--fast`, `--json`, or an installation action. Use [Advanced use cases](/tr300/advanced) to save JSON instead.

## Setup, updates, and removal

These actions change the installation or terminal startup settings. Run one action at a time.

| Command | What it changes |
| --- | --- |
| `tr300 install` | Sets up an optional short report when you open a terminal |
| `tr300 update` | Downloads an update using the existing installation method when it can be verified |
| `tr300 uninstall` | Offers startup cleanup or complete removal |

See [Installation](/tr300/installation#updates-and-repairs) before changing an installation, or [Shell startup](/tr300/shell-integration) for the optional startup report.

Older forms `--install`, `--update`, and `--uninstall` remain supported. Do not combine them with another action. There is no `tr300 config` command.

Checked against [TR-300 v4.4.0](https://github.com/QubeTX/qube-machine-report/releases/tag/v4.4.0).
