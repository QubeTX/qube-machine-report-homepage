---
title: "Install the tools"
description: "Choose a managed online install or the offline bundle."
---

The recommended online commands install prebuilt releases. You do not need Rust or a compiler. Install only the tools you want.

## macOS and Linux

### TR-300
```sh
curl -LsSf https://reports.qubetx.com/install.sh | sh
```

### ND-300 and SpeedQX
```sh
curl -LsSf https://reports.qubetx.com/install-nd300.sh | sh
```

### SD-300
```sh
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-cli-installer.sh | sh
```

## Windows PowerShell

### TR-300
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install.ps1 | iex"
```

### ND-300 and SpeedQX
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install-nd300.ps1 | iex"
```

### SD-300
```powershell
irm https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-cli-installer.ps1 | iex
```

These commands download and run the official installers. They track the latest published release. The TR-300 wrapper also configures optional shell startup output; `report` itself is a packaged command and works without a profile. SD-300's wrapper already performs its managed installation, so you do not need to run `sd300 install` afterward.

Open a new terminal after installation, then check `tr300 --version`, `nd300 --version`, or `sd300 --version`.

## Other installation paths

- [Windows MSI and EXE editions](/installation/windows)
- [macOS universal PKG and portable archives](/installation/macos)
- [Linux architectures and desktop runtime](/installation/linux)
- [Offline bundle, checksums, and file selection](/installation/offline)
- [Updates, repairs, and uninstall](/installation/lifecycle)

A versionless URL can change after this documentation snapshot. See [source versions](/sources) for the releases used to check these instructions.
