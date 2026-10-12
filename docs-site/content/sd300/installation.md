---
title: "Install SD-300"
description: "Install SD-300 on Windows, macOS, or Linux, use an offline copy, and manage updates or removal."
sidebar:
  label: "Installation"
---

The recommended installer adds the terminal monitor and desktop app together. You can use either independently. You do not need to run `sd300 install` after the installation command below.

The recommended commands download ready-to-run software. You do not need Rust or a compiler. Online commands and download links install the latest release; the [offline bundle](#offline-installation) contains fixed versions. These instructions were checked against SD-300 4.1.0; see [source versions](/sources).

## Windows

Run in a normal PowerShell window:

```powershell
irm https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-cli-installer.ps1 | iex
```

Open a new terminal afterward and check `sd300 --version`.

### Download an installer

Choose one installer. **Global** installs for everyone who uses the computer and requires administrator approval. **Corporate** installs for your account without administrator approval. If the tool is already installed, keep the same format and edition unless you intend to change them.

| Edition | Windows Installer | Setup wizard |
| --- | --- | --- |
| Global | [MSI](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-windows-x64-global.msi) | [EXE](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-windows-x64-global.exe) |
| Corporate | [MSI](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-windows-x64-corporate.msi) | [EXE](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-windows-x64-corporate.exe) |

Double-click the chosen file and follow its prompts. These Windows packages are x64; Windows ARM64 is not included. If Windows or organization policy blocks installation, keep the error message, check the download source and publisher, and follow your administrator's guidance.

### Portable Windows copy

Extract [tr300-tui-x86_64-pc-windows-msvc.zip](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/tr300-tui-x86_64-pc-windows-msvc.zip), open PowerShell in that folder, and run `./sd300.exe`. This download contains the terminal tool, `sd300`. The filename still uses the older package name, `tr300-tui`. A portable copy runs from its extracted folder. It does not create a menu shortcut or make the command available in every terminal folder.

The MSI and EXE installers include the terminal and desktop tools. Open Start > SD-300 or run `sd300 gui` to launch the app.

For a portable desktop app, extract [sd300-gui-windows-x86_64.zip](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-gui-windows-x86_64.zip) into its own folder and open `sd300-gui.exe`. Keep `sd300_engine.dll`, assets, licenses, and `install-manifest.json` alongside it. Download and extract the terminal tool separately if you also need terminal commands.

## macOS

Run in Terminal:

```sh
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-cli-installer.sh | sh
```

Open a new Terminal afterward and check `sd300 --version`.

### Apple Installer

Download [sd300-macos-universal.pkg](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-macos-universal.pkg). This package supports Apple Silicon and Intel Macs. It is signed and Apple-notarized, with the notarization ticket included. Double-click it and follow Apple Installer.

The PKG also installs the app in Applications. Open it yourself or run `sd300 gui`; installation does not automatically launch it. For a portable app, extract [sd300-gui-macos-universal.zip](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-gui-macos-universal.zip) and keep the extracted Mac app intact.

### Portable Mac copy

| Mac | Terminal download |
| --- | --- |
| Apple Silicon | [tr300-tui-aarch64-apple-darwin.tar.xz](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/tr300-tui-aarch64-apple-darwin.tar.xz) |
| Intel | [tr300-tui-x86_64-apple-darwin.tar.xz](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/tr300-tui-x86_64-apple-darwin.tar.xz) |

Extract with `tar -xf <filename>.tar.xz`, open the extracted folder, and run `./sd300`. Replace `<filename>` with the downloaded name. If needed, `tar -tf <filename>.tar.xz` lists the folders and files inside. Keep the extracted files' permission to run. This download contains the terminal tool, `sd300`. The filename still uses the older package name, `tr300-tui`.

## Linux

Run in a terminal:

```sh
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-cli-installer.sh | sh
```

Open a new terminal afterward and check `sd300 --version`.

### Portable Linux copy

Run `uname -m` to check your processor type: `x86_64` means x64, and `aarch64` means ARM64. Choose GNU for a compatible GNU/Linux distribution or musl for Alpine. An ARM64 musl download is not included.

| Linux system | Terminal download |
| --- | --- |
| x64 GNU/Linux | [tr300-tui-x86_64-unknown-linux-gnu.tar.xz](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/tr300-tui-x86_64-unknown-linux-gnu.tar.xz) |
| ARM64 GNU/Linux | [tr300-tui-aarch64-unknown-linux-gnu.tar.xz](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/tr300-tui-aarch64-unknown-linux-gnu.tar.xz) |
| x64 musl / Alpine | [tr300-tui-x86_64-unknown-linux-musl.tar.xz](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/tr300-tui-x86_64-unknown-linux-musl.tar.xz) |

For example, on compatible x64 GNU/Linux:

```sh
tar -xf tr300-tui-x86_64-unknown-linux-gnu.tar.xz
cd tr300-tui-x86_64-unknown-linux-gnu
./sd300 --help
./sd300
```

If the folder name differs, use the name listed by `tar -tf` followed by the archive filename. This download contains the terminal tool, `sd300`. The filename still uses the older package name, `tr300-tui`. Keep track of the extracted folder. Manually copied files do not create the installation records used by the automatic updater.

### Portable desktop app

| Target | Archive |
| --- | --- |
| x64 GNU | [sd300-gui-linux-gnu-x86_64.tar.xz](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-gui-linux-gnu-x86_64.tar.xz) |
| ARM64 GNU | [sd300-gui-linux-gnu-arm64.tar.xz](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-gui-linux-gnu-arm64.tar.xz) |
| x64 musl | [sd300-gui-linux-musl-x86_64.tar.xz](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-gui-linux-musl-x86_64.tar.xz) |

Extract into its own directory, keep the entire `sd300/` tree, and run `./sd300/bin/sd300-gui`. The launcher finds the support files included in the download. Do not run `libexec/sd300-gui` directly or copy only that file. You still need a compatible Linux system, graphical desktop, and display drivers. Download the separate terminal tool if needed.

## Offline installation

The bundle includes SD-300 4.1.0 in `SD300-qube-system-diagnostics/`, with installers, portable downloads, matching manuals, release notes, and licenses. These are fixed versions; the bundle does not update itself.

1. On a connected computer, download the [offline ZIP](https://github.com/QubeTX/qube-reports-executables/releases/latest/download/qubetx-offline-bundle.zip) and its [SHA-256 checksum](https://github.com/QubeTX/qube-reports-executables/releases/latest/download/qubetx-offline-bundle.zip.sha256). A checksum is a value calculated from a file; matching it helps detect a changed or incomplete download. Compare it using the commands below before transferring the ZIP.
2. Extract the entire ZIP on the destination computer. Open `index.html` to choose the installer or portable download. This page works without internet.
3. Verify the extracted files using the commands below, then select **SD-300** and follow this page's instructions for [Windows](#windows), [macOS](#macos), or [Linux](#linux) using those local files.

### Check the downloaded ZIP

Run the command for your operating system from the folder containing the download. Compare its SHA-256 value with the one in `qubetx-offline-bundle.zip.sha256`.

```powershell
# Windows PowerShell
Get-FileHash .\qubetx-offline-bundle.zip -Algorithm SHA256
```

```sh
# Linux
sha256sum qubetx-offline-bundle.zip

# macOS
shasum -a 256 qubetx-offline-bundle.zip
```

### Check the extracted files

Run from the extracted `qubetx-offline-bundle` folder. These checks work without internet:

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

If a checksum fails, download another copy from the official release. A match confirms the files match the supplied list, so obtain both from a source you trust. You can read the included Markdown manuals in a text editor; external links and images may need internet.

You do not need to download a compiler to install these files. Internet tests and updates still need a connection. Local readings depend on the computer's hardware and permissions.

To update a disconnected computer, use the included installer that matches its existing format and edition. For a portable copy, extract the new release into a separate folder and keep the old copy until the new one works. Keep each release's files together. Read [Updates and repairs](#updates-and-repairs) before changing installation methods.

## Updates and repairs

```sh
sd300 update
```

The terminal tool and desktop app update together. Updates need internet. When the existing installation can be verified, the updater keeps its format, edition, account or all-user setting, and location. For example, an MSI installation stays MSI. If installation records conflict or a security policy blocks the update, it keeps the working installation and explains how to continue manually.

Running a different official installer yourself requests a new installation choice, including a reinstall or an older version. The change proceeds only when the existing installation is clear and the switch is supported. Conflicting installations or a change between your account and all users may need manual resolution. Keep installation records intact and follow the reported guidance.

`sd300 install` selects the preferred command-line installation method and can repair a missing desktop component. It is not needed after running the recommended installation command.

### Upgrading from SD-300 3.x to 4.x

Run the new official installer directly, matching your existing format and edition. An older updater may reject the changed desktop component. Installation and terminal-started updates do not automatically open the app. An update started from the app's Settings or tray menu reopens it after success.

## Uninstall

To remove the installed tool, run this command and read its prompts:

```sh
sd300 uninstall
```

Removal starts from the terminal. It uses the verified installation method to remove the terminal tool, desktop app, their system integration, and private app data together. It keeps your exported reports and shared Rust development tools, including Cargo.

For a portable copy, close it and delete its extracted folder. If another copy is also installed, check which one the terminal finds before running an uninstall command; see [Troubleshooting](/troubleshooting#wrong-version-or-duplicate-installation).
