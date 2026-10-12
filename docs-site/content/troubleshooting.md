---
title: "Troubleshooting"
description: "Resolve missing commands, installer conflicts, and incomplete measurements."
---

## Command not found after installation

Open a new terminal to pick up PATH changes. In PowerShell, use `Get-Command tr300, report, nd300, speedqx, sd300 -ErrorAction SilentlyContinue`. On macOS/Linux, use `command -v tr300` (substitute the command you installed).

For portable Windows files, use `./tr300.exe` from the extracted directory. For portable Unix files, use `./tr300`. Keep `report` beside `tr300` and `speedqx` beside `nd300`. A portable extraction does not create PATH entries or a managed receipt.

## Wrong version or duplicate installation

Check the resolved command path and `--version`. A shell alias, old PATH entry, or second installer channel can select a different copy. Do not remove registrations or replace managed files blindly. Follow the updater's exact recovery diagnostic and the update guidance for [TR-300](/tr300/installation#updates-and-repairs), [ND-300](/nd300/installation#updates-and-repairs), or [SD-300](/sd300/installation#updates-and-repairs).

## Installer blocked or permission denied

Confirm that the download is from the official release and compare its checksum. Match Global versus Corporate scope to your intended installation. Preserve endpoint-policy diagnostics and follow your administrator's policy on a managed computer. The installers do not bypass organization controls.

## SD-300 desktop app missing

The portable CLI archive does not include the GUI archive. Native MSI/EXE/PKG and the managed product install include the composite product. Preserve all GUI files, then use `sd300 gui`. Use the current official installer to repair a managed installation; old 3.x updaters can reject the 4.x desktop schema.

## A measurement is unavailable

Hardware, OS capabilities, drivers, privacy settings, and permissions affect collection. Inspect SD-300 capabilities or the relevant diagnostic's status. Missing data is not zero, and an unavailable health check is not proof of health.

## Network test incomplete

Internet probes need connectivity. Short time/byte budgets, blocked providers, interruption, VPN paths, or missing M-Lab consent can produce partial or single-source throughput results. Keep those labels with the numbers. Use `nd300 --fast` to skip the speed test when investigating connectivity first.

## Collect useful evidence

Record the product version, resolved executable path, OS/architecture, installation format, exact command, and error. Export a report or snapshot only when needed and review it for identifiers before sharing. Include the failed check rather than making unrelated system changes.
