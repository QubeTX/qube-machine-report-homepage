---
title: "SD-300 commands"
description: "Open the monitor, export readings, inspect optional tools, and manage SD-300."
sidebar:
  label: "Commands"
---

Run `sd300` to choose a terminal mode, or open a mode directly with the commands below. The terminal monitor and desktop app can run independently.

## Open a monitor

| Command | What happens |
| --- | --- |
| `sd300` | Asks which terminal mode to open |
| `sd300 --user` | Opens the terminal monitor with plain-language status |
| `sd300 --tech` | Opens the terminal monitor with detailed readings |
| `sd300 gui` | Opens the installed desktop app or brings its window forward |

For example:

```sh
sd300 --user
```

Press `1`–`9` to select a section and `q` to quit. See [Terminal controls](/sd300/terminal) for all keys, or [Desktop app](/sd300/desktop) for app settings.

Choose either `--user` or `--tech`. Do not combine them with each other or with a command such as `snapshot`.

## Collect a result without opening the monitor

| Command | What it prints |
| --- | --- |
| `sd300 snapshot` | A compact summary of one collection of readings |
| `sd300 snapshot --json` | The snapshot as structured JSON |
| `sd300 capabilities` | Which readings this computer can provide |
| `sd300 capabilities --json` | The same availability information as JSON |

Both commands accept these options:

| Option | Meaning |
| --- | --- |
| `--json` | Prints structured output for another program |
| `--schema-version 1` or `--schema-version 2` | Chooses the JSON format version; requires `--json`; version 1 is the default |
| `--include-sensitive` | Includes host, network-address, MAC-address, and drive-serial values; requires `--json` |

Identifying information is removed by default. Use `--include-sensitive` only when you need those identifiers and review the output before sharing. See [Snapshots and sensor availability](/sd300/snapshots) for examples and the meaning of missing readings.

## Optional tools

Inspect a companion before requesting installation:

```sh
sd300 tools nd300
sd300 tools smartctl
```

ND-300 provides network diagnostics. `smartctl` provides drive information. Each remains separately installed and managed.

| Option after `sd300 tools <TOOL>` | Meaning |
| --- | --- |
| `--install` | Requests installation of the verified official distribution; requires acceptance |
| `--accept` | Accepts the operation already described by the tool; only valid with `--install` |
| `--json` | Prints a structured result |

For an automated installation, first inspect the proposed operation and decide whether to accept it. Only then use `--install --accept`. See [Advanced use cases](/sd300/advanced#inspect-an-optional-diagnostic-tool) for the interactive workflow.

## Install, update, or remove SD-300

These commands change the installed product. The terminal and desktop components are handled together.

| Command | What it does |
| --- | --- |
| `sd300 update` | Updates through the verified existing installation method |
| `sd300 install` | Selects the preferred command-line installer; can repair the whole product |
| `sd300 uninstall` | Removes SD-300 using its verified installation records |

Each command accepts `--json` to return one structured result. This changes the output format, not the action. The older `sd300 --update` form still works.

See [Installation](/sd300/installation#updates-and-repairs) for repair, upgrade, and removal details.

## Help and version

Use `sd300 --help` for the command list, `sd300 snapshot --help` for help with a particular command, or `sd300 help snapshot` for the same help. `-h` is the short help option.

Use `sd300 --version` or `sd300 -V` to print the installed version. Adding `--help` to an installation command displays help without performing that action.

Checked against [SD-300 v4.1.0](https://github.com/QubeTX/qube-system-diagnostics/releases/tag/v4.1.0).
