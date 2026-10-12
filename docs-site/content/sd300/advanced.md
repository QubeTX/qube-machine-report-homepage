---
title: "SD-300 advanced use cases"
description: "Capture evidence, inspect detailed readings, and review optional diagnostic tools."
sidebar:
  label: "Advanced use cases"
---

Use these workflows when you need a saved record or more detail than the live overview. Start with [Basic use cases](/sd300/examples) for everyday monitoring.

## Inspect detailed readings

```sh
sd300 --tech
```

Technician mode adds detailed measurements and tables. Select a section with `1`–`9`, use `/` to filter its inventory, then select a row and press `Enter` to inspect it. Press `F` for findings, supporting evidence, and suggested next steps.

Read availability states alongside the numbers. A missing sensor can reflect hardware support, a driver, or permissions.

## Save a snapshot for support

A snapshot records one collection of system readings. Identifying information is removed by default, but review the file before sharing it.

The `>` operator writes to your current folder and replaces an existing file with the same name.

```sh
sd300 snapshot --json > sd300-snapshot.json
```

The file contains structured JSON that support tools can read. For a compact text result without creating a file, run `sd300 snapshot`.

## Check which readings are supported

```sh
sd300 capabilities
```

The output describes which readings this computer can provide. It distinguishes missing support from denied permission or a collection error. The [snapshot guide](/sd300/snapshots) explains the states and JSON format choices.

## Inspect an optional diagnostic tool

SD-300 can work with ND-300 for network diagnostics and `smartctl` for drive information. Inspect the tool before requesting installation:

```sh
sd300 tools nd300
sd300 tools smartctl
```

These commands show availability and installation information. They do not install the tool unless you add `--install`.

Installing a companion changes your computer and requires acceptance of the described operation. After reviewing it, request the installation with, for example:

```sh
sd300 tools nd300 --install
```

Follow the confirmation prompts. Companions have separate installations; removing SD-300 does not mean those tools are removed with it. See [Commands](/sd300/commands#optional-tools) for the automation option.

## Review a drive read that needs permission

In the terminal monitor, select a drive and press uppercase `A` to review a read that needs administrator privileges. Read the proposed action before accepting it. More permission may unlock a supported reading; it cannot add support for unsupported hardware.

Checked against [SD-300 v4.1.0](https://github.com/QubeTX/qube-system-diagnostics/releases/tag/v4.1.0).
