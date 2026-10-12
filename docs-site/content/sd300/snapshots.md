---
title: "Snapshots and sensor availability"
description: "Save system readings and understand whether a missing value is unsupported, blocked, or unavailable."
sidebar:
  label: "Snapshots and sensors"
---

A snapshot collects system readings once, without opening the live monitor. A capabilities report explains which readings the computer can provide.

## View a snapshot

```sh
sd300 snapshot
```

This prints a compact text summary. To view sensor availability instead, run:

```sh
sd300 capabilities
```

## Save a redacted snapshot

SD-300 removes identifying information by default. Review the file before sharing it; redaction is not a guarantee that every detail is anonymous.

The `>` operator writes a file in your current folder and replaces any existing file with the same name.

```sh
sd300 snapshot --json > sd300-snapshot.json
sd300 capabilities --json > sd300-capabilities.json
```

The first file contains readings. The second describes their availability. JSON is a structured format that support tools and scripts can read.

## Understand availability states

| State | How to read it |
| --- | --- |
| Available | The tool obtained a usable result |
| Unavailable | No usable result was obtained for this reading |
| Unsupported | The platform or provider does not support the reading |
| Permission denied | Access was refused; more permission may help if the reading is supported |
| Contradictory | The available evidence conflicts |
| Error | An attempt to collect the reading failed |

Keep the state with the value. A missing temperature must not become `0` in a script, and an unavailable drive-health check must not become a pass.

## Choose a JSON format version

Version 1 is the default for existing scripts. Request version 2 only when the program reading the result supports it:

```sh
sd300 snapshot --json --schema-version 2
sd300 capabilities --json --schema-version 2
```

Version 2 represents unavailable values explicitly and includes information about their source. Keep source, collection time, and availability with the readings when comparing results. The `--schema-version` option requires `--json`.

## Include identifiers when needed

`--include-sensitive` adds host, network-address, MAC-address, and drive-serial values. Use it only when you need those details, and avoid sharing the result without reviewing it.

```sh
sd300 snapshot --json --include-sensitive
```

This prints the result without saving a file. The option requires `--json` and is also available for `capabilities`.

## Why a sensor can be missing

Hardware, operating-system support, drivers, and permissions all affect availability. Processor temperature, graphics temperature, other temperature sensors, and fans are separate capabilities. One missing sensor does not invalidate another available reading.

Some Windows readings depend on supported monitoring-software interfaces or vendor firmware. macOS and Linux provide different sources. Administrator privileges can unlock some supported readings, but cannot create support for hardware the tool does not recognize.

Checked against [SD-300 v4.1.0](https://github.com/QubeTX/qube-system-diagnostics/releases/tag/v4.1.0).
