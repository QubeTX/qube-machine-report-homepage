---
title: "Save and script machine reports"
description: "Common reporting tasks with explicit file creation."
---

## Read a report without saving
```sh
tr300
report --fast
tr300 --ascii --no-color
tr300 --title "Office workstation"
```

`--fast` omits slower collectors. `--full` requests full collection explicitly and conflicts with `--fast`.

## Save Markdown to Downloads
```sh
tr300 --report
```
The equivalent forms are `-r`, `-s`, and `--save`, and they work with `report` too. The tool saves a collision-safe Markdown report and shows its location. Ordinary runs and shell startup summaries do not create this file.

## Capture JSON
```sh
tr300 --json > machine-report.json
```
The shell redirection explicitly creates a file in your current directory. The JSON is schema-versioned; check `schema_version` before relying on individual fields. Missing platform information should remain unavailable in your downstream script rather than being treated as zero.

Reports can contain machine, user, and network information. Review an export before sharing it. The report format is not a promise that every hardware field is available on every OS.

## Missing hardware details
TR-300 detects whether it is running with elevated privileges (root on Unix /
Administrator on Windows) and exposes that fact to JSON consumers.

- **Linux, unelevated** — a single dim footer notes that `sudo` may unlock RAM
  module details when `dmidecode` is installed. The hint is never shown during
  `--fast` auto-run.
- **Linux, elevated** — available `dmidecode` details render inline.
- **Windows and macOS** — no blanket elevation promise is shown. Optional
  BitLocker/FileVault data is reported when the OS exposes it; a missing value
  does not prove that Administrator or `sudo` would fix the probe.

To opt out of the hint, run `tr300 --no-elevation-hint` (or wire the flag into your
shell alias). The hint is rendered with ANSI dim, so respects `--no-color` as well.

The JSON output exposes this state under top-level keys `elevated` and
`elevation_unlocks_more` for scripted consumers.

Checked against [TR-300 v4.4.0](https://github.com/QubeTX/qube-machine-report/releases/tag/v4.4.0).
