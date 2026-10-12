---
title: "TR-300 basic use cases"
description: "Read your system information, save a report, and adjust its title or appearance."
sidebar:
  label: "Basic use cases"
---

These examples assume you have [installed TR-300](/tr300/installation). Run them in a terminal. You can replace `tr300` with `report` in any example.

## Check your computer

```sh
tr300
```

The terminal shows your system information and available hardware readings. No report file is saved.

For a shorter check that skips slower information gathering, run:

```sh
tr300 --fast
```

Use the normal report when you need the fullest available detail.

## Save a report for support

Reports can include computer, user, and network information. Review the saved file before sharing it.

```sh
tr300 --report
```

TR-300 saves the full report as a Markdown file in Downloads and prints its location. You can open Markdown in a text editor. The generated filename avoids overwriting an existing report.

`tr300 --save`, `tr300 -r`, and `report -s` do the same thing. Saving a report cannot be combined with `--fast` or `--json`.

## Give the report a useful title

Use a title to identify the computer or the situation you are recording:

```sh
tr300 --title "Office workstation" --report
```

The saved report uses that heading. The title does not change which information is collected.

## Fix hard-to-read terminal output

If table borders display incorrectly or colors are difficult to read, run:

```sh
tr300 --ascii --no-color
```

This uses simple text characters for borders and removes colored output. The report still contains the same information.

For structured output that another program can read, see [Advanced use cases](/tr300/advanced).

Checked against [TR-300 v4.4.0](https://github.com/QubeTX/qube-machine-report/releases/tag/v4.4.0).
