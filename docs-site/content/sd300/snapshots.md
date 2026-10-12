---
title: "Snapshots and capabilities"
description: "Export a diagnostic record and preserve the meaning of missing data."
---

## Save a redacted snapshot

```sh
sd300 snapshot --json > sd300-snapshot.json
sd300 capabilities --json > sd300-capabilities.json
```

Snapshot collection is noninteractive and redacts sensitive identifiers by default. Capability output distinguishes available, unavailable, unsupported, permission-denied, contradictory, and error states. Check those states before consuming a measurement.

Schema version 1 remains the default for existing automation. Request version 2 explicitly when your consumer supports it:

```sh
sd300 snapshot --json --schema-version 2
sd300 capabilities --json --schema-version 2
```

Use `--include-sensitive` only when you need the additional identifiers for a local JSON snapshot. Review any exported file before sharing it. An explicit shell redirection creates the file at your chosen path; the examples use the current directory.

## Why a sensor can be missing

The platform, hardware, driver, and permissions determine availability. CPU, GPU, aggregate temperature, and fan capabilities are independent. One unavailable provider does not invalidate another available sensor. Elevation can unlock some low-level providers, but it does not create support for unsupported hardware.

Some Windows readings use supported Libre/Open Hardware Monitor WMI bridges or read-only vendor firmware providers. macOS and Linux expose different data. Keep timestamps, source and capability states with the values when comparing snapshots.


Checked against [SD-300 v4.1.0](https://github.com/QubeTX/qube-system-diagnostics/releases/tag/v4.1.0).
