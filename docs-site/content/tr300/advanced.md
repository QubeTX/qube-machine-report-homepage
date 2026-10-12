---
title: "TR-300 advanced use cases"
description: "Save structured results for scripts and interpret unavailable hardware information."
sidebar:
  label: "Advanced use cases"
---

Use these examples when you need to process a report in another program or investigate missing details. For ordinary reporting, start with [Basic use cases](/tr300/examples).

## Save structured output for a script

JSON stores named fields that programs can read. Reports may contain computer, user, and network information, so review the file before sharing it.

The `>` operator writes to a file in your current folder and replaces that file if it already exists. Choose a different filename when you need to keep an earlier result.

```sh
tr300 --json > machine-report.json
```

Open `machine-report.json` to inspect the result. The documented release uses JSON format version 1, recorded in `schema_version`. A script should check this field before relying on the report's structure.

Keep missing values as unavailable. Treating a missing temperature or memory reading as zero would change its meaning. Retain the collection mode too: `--fast` skips information that a full report may include.

To view the JSON without creating a file, run:

```sh
tr300 --json
```

## Understand missing hardware details

The operating system, hardware, and permissions determine which details TR-300 can read.

- On Linux, a full report may explain that running with administrator privileges can reveal RAM module details when `dmidecode` is installed. Fast reports do not show this hint.
- On Windows and macOS, a missing reading does not by itself mean administrator privileges will make it available.
- Temperatures appear only when a supported, trusted sensor is available. Encryption status appears when the operating system supplies it.

If you already understand the Linux permission limit and want to hide that reminder, run:

```sh
tr300 --no-elevation-hint
```

This hides the hint; it does not change permissions or add readings. Scripts can inspect `elevated` and `elevation_unlocks_more` in JSON output.

## Use the report command in a portable setup

Keep `report` and `tr300` in the same extracted folder. The `report` executable runs the adjacent copy of `tr300`, so the two files must stay together.

If `report` behaves differently from `tr300`, a shell alias or another installation may be taking precedence. See [Troubleshooting](/troubleshooting#wrong-version-or-duplicate-installation) before changing either copy.

Checked against [TR-300 v4.4.0](https://github.com/QubeTX/qube-machine-report/releases/tag/v4.4.0).
