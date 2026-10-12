---
title: "Install on Windows"
description: "Choose a supported installer, architecture, and installation channel."
---

Use the [managed online commands](/installation) for a connected machine, or select the files below from the [offline bundle](/installation/offline).


Choose **one** installer format and edition for each product:

- **Global:** machine-wide installation, administrator approval required.
- **Corporate:** current-user installation, no administrator approval required.
- **MSI or EXE:** choose the format that matches your existing installation or deployment policy.

| Product | Global MSI / EXE | Corporate MSI / EXE |
|---|---|---|
| TR-300 | `tr300-x86_64-pc-windows-msvc.msi` / `tr300-x86_64-pc-windows-msvc-setup.exe` | `tr300-x86_64-pc-windows-msvc-corporate.msi` / `tr300-x86_64-pc-windows-msvc-corporate-setup.exe` |
| ND-300 | `nd300-x86_64-pc-windows-msvc.msi` / `nd300-x86_64-pc-windows-msvc-setup.exe` | `nd300-x86_64-pc-windows-msvc-corporate.msi` / `nd300-x86_64-pc-windows-msvc-corporate-setup.exe` |
| SD-300 | `sd300-windows-x64-global.msi` / `sd300-windows-x64-global.exe` | `sd300-windows-x64-corporate.msi` / `sd300-windows-x64-corporate.exe` |

Double-click the chosen file and follow its prompts. Open a fresh terminal after installation. SD-300's native installers contain both the CLI/TUI and desktop app; use Start > SD-300 or `sd300 gui` to open it.

If Windows or endpoint policy blocks the installer, verify its source, hash, and publisher. Keep the diagnostic and ask your administrator where appropriate. Do not assume a SmartScreen warning is merely because an app is outside the Microsoft Store, or disable security controls to continue.

**Portable CLI:** extract the product's `*-x86_64-pc-windows-msvc.zip`. Open PowerShell in the extracted folder and run `./tr300.exe`, `./nd300.exe`, `./speedqx.exe`, or `./sd300.exe`. SD-300's CLI ZIP starts with `tr300-tui-`; this is its historical package name.

**Portable SD-300 GUI:** extract `sd300-gui-windows-x86_64.zip` into its own folder and open `sd300-gui.exe`. Keep `sd300_engine.dll`, assets, licenses, and `install-manifest.json` alongside it. Extract the CLI ZIP separately if you also want terminal commands. These extractions do not create PATH entries, menu shortcuts, or a managed-install receipt.



## Native downloads

### TR-300

- [tr300-x86_64-pc-windows-msvc-corporate-setup.exe](https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-x86_64-pc-windows-msvc-corporate-setup.exe)
- [tr300-x86_64-pc-windows-msvc-corporate.msi](https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-x86_64-pc-windows-msvc-corporate.msi)
- [tr300-x86_64-pc-windows-msvc-setup.exe](https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-x86_64-pc-windows-msvc-setup.exe)
- [tr300-x86_64-pc-windows-msvc.msi](https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-x86_64-pc-windows-msvc.msi)
### ND-300

- [nd300-x86_64-pc-windows-msvc-corporate-setup.exe](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-pc-windows-msvc-corporate-setup.exe)
- [nd300-x86_64-pc-windows-msvc-corporate.msi](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-pc-windows-msvc-corporate.msi)
- [nd300-x86_64-pc-windows-msvc-setup.exe](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-pc-windows-msvc-setup.exe)
- [nd300-x86_64-pc-windows-msvc.msi](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-pc-windows-msvc.msi)
### SD-300

- [sd300-windows-x64-corporate.exe](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-windows-x64-corporate.exe)
- [sd300-windows-x64-corporate.msi](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-windows-x64-corporate.msi)
- [sd300-windows-x64-global.exe](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-windows-x64-global.exe)
- [sd300-windows-x64-global.msi](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-windows-x64-global.msi)

These download links follow the latest release. The offline bundle remains pinned to its listed versions.
