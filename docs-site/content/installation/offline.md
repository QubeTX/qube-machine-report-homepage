---
title: "Install from the offline bundle"
description: "Download once, verify locally, and install on disconnected machines."
---

The bundle contains TR-300 4.4.0, ND-300 4.0.1 (including SpeedQX), and SD-300 4.1.0 (including its desktop app). It is a dated snapshot, not a live updater.

1. [Download the offline ZIP](https://github.com/QubeTX/qube-reports-executables/releases/latest/download/qubetx-offline-bundle.zip) on a connected computer.
2. Download the [ZIP checksum](https://github.com/QubeTX/qube-reports-executables/releases/latest/download/qubetx-offline-bundle.zip.sha256) and compare it before transferring the file.
3. Extract the entire ZIP on the destination computer. Open `index.html` for the local file picker.
4. Verify the extracted files, then follow the [Windows](/installation/windows), [macOS](/installation/macos), or [Linux](/installation/linux) instructions.

## Verify the extracted bundle

Run from the extracted `qubetx-offline-bundle` directory. These checks use local files and need no network.

```powershell
# Windows PowerShell
.\scripts\Verify-Bundle.ps1
```

```sh
# Linux
sha256sum -c SHA256SUMS.txt

# macOS
shasum -a 256 -c SHA256SUMS.txt
```

If a checksum fails, stop and obtain another copy from the official release. A matching checksum proves the bytes match the list; it does not replace trusting the download source.

## What is included

| Folder | Contents |
| --- | --- |
| `TR300-qube-machine-report` | `tr300` and `report`, native installers, portable CLI archives, matching documentation |
| `ND300-qube-network-diagnostics` | `nd300` and `speedqx`, native installers, portable CLI archives, matching documentation |
| `SD300-qube-system-diagnostics` | CLI and desktop native installers, separate portable CLI and GUI archives, matching documentation |

Windows packages are x64. macOS supports Intel and Apple Silicon. Linux supports x64 GNU, ARM64 GNU, and x64 musl. Windows ARM64 and Linux ARM64 musl are not included.

The local start page has no online dependencies. The Markdown manuals, release notes, licenses, and supporting documents are readable in a text editor. Links to external sites or images may still require internet.

## What offline means

You can install from the included files and inspect local measurements without downloading a toolchain. Internet speed tests, public connectivity probes, downloads, and self-updates still need connectivity. OS permissions and available hardware determine which measurements can be collected.

SD-300's native Windows and Mac installers contain the terminal and desktop tools together. Its portable CLI and GUI archives are separate. Preserve the complete GUI directory or app bundle; do not copy just its executable.

## Upgrade a disconnected machine

Run the included official native installer that matches the existing format and edition. For SD-300 3.x to 4.x, use the new installer directly: an old updater may reject the new desktop schema and restore the old CLI. Do not mix individual files from different releases.

For portable use, extract into a new directory and keep the previous directory until the new copy works. See [lifecycle and ownership](/installation/lifecycle) before changing a managed installation.
