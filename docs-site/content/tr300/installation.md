---
title: "Install TR-300"
description: "Install TR-300 on Windows, macOS, or Linux, use an offline copy, and manage updates or removal."
sidebar:
  label: "Installation"
---

Installation adds `tr300` and the equivalent `report` command. The recommended installation command also offers a short report when you open a terminal. This startup feature is optional; `report` works without it.

The recommended commands download ready-to-run software. You do not need Rust or a compiler. Online commands and download links install the latest release; the [offline bundle](#offline-installation) contains fixed versions. These instructions were checked against TR-300 4.4.0; see [source versions](/sources).

## Windows

Run in a normal PowerShell window:

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install.ps1 | iex"
```

Open a new terminal afterward and check `tr300 --version`.

### Download an installer

Choose one installer. **Global** installs for everyone who uses the computer and requires administrator approval. **Corporate** installs for your account without administrator approval. If the tool is already installed, keep the same format and edition unless you intend to change them.

| Edition | Windows Installer | Setup wizard |
| --- | --- | --- |
| Global | [MSI](https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-x86_64-pc-windows-msvc.msi) | [EXE](https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-x86_64-pc-windows-msvc-setup.exe) |
| Corporate | [MSI](https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-x86_64-pc-windows-msvc-corporate.msi) | [EXE](https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-x86_64-pc-windows-msvc-corporate-setup.exe) |

Double-click the chosen file and follow its prompts. These Windows packages are x64; Windows ARM64 is not included. If Windows or organization policy blocks installation, keep the error message, check the download source and publisher, and follow your administrator's guidance.

### Portable Windows copy

Extract [tr300-x86_64-pc-windows-msvc.zip](https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-x86_64-pc-windows-msvc.zip), open PowerShell in that folder, and run `./tr300.exe`. Keep `report` beside `tr300`; both commands support the same reports, setup, updates, and removal. A portable copy runs from its extracted folder. It does not create a menu shortcut or make the command available in every terminal folder.

## macOS

Run in Terminal:

```sh
curl -LsSf https://reports.qubetx.com/install.sh | sh
```

Open a new Terminal afterward and check `tr300 --version`.

### Apple Installer

Download [tr300-universal-apple-darwin.pkg](https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-universal-apple-darwin.pkg). This package supports Apple Silicon and Intel Macs. It is signed and Apple-notarized, with the notarization ticket included. Double-click it and follow Apple Installer.

### Portable Mac copy

| Mac | Terminal download |
| --- | --- |
| Apple Silicon | [tr300-aarch64-apple-darwin.tar.xz](https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-aarch64-apple-darwin.tar.xz) |
| Intel | [tr300-x86_64-apple-darwin.tar.xz](https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-x86_64-apple-darwin.tar.xz) |

Extract with `tar -xf <filename>.tar.xz`, open the extracted folder, and run `./tr300`. Replace `<filename>` with the downloaded name. If needed, `tar -tf <filename>.tar.xz` lists the folders and files inside. Keep the extracted files' permission to run. Keep `report` beside `tr300`; both commands support the same reports, setup, updates, and removal.

## Linux

Run in a terminal:

```sh
curl -LsSf https://reports.qubetx.com/install.sh | sh
```

Open a new terminal afterward and check `tr300 --version`.

### Portable Linux copy

Run `uname -m` to check your processor type: `x86_64` means x64, and `aarch64` means ARM64. Choose GNU for a compatible GNU/Linux distribution or musl for Alpine. An ARM64 musl download is not included.

| Linux system | Terminal download |
| --- | --- |
| x64 GNU/Linux | [tr300-x86_64-unknown-linux-gnu.tar.xz](https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-x86_64-unknown-linux-gnu.tar.xz) |
| ARM64 GNU/Linux | [tr300-aarch64-unknown-linux-gnu.tar.xz](https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-aarch64-unknown-linux-gnu.tar.xz) |
| x64 musl / Alpine | [tr300-x86_64-unknown-linux-musl.tar.xz](https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-x86_64-unknown-linux-musl.tar.xz) |

For example, on compatible x64 GNU/Linux:

```sh
tar -xf tr300-x86_64-unknown-linux-gnu.tar.xz
cd tr300-x86_64-unknown-linux-gnu
./tr300 --help
./tr300
```

If the folder name differs, use the name listed by `tar -tf` followed by the archive filename. Keep `report` beside `tr300`; both commands support the same reports, setup, updates, and removal. Keep track of the extracted folder. Manually copied files do not create the installation records used by the automatic updater.

## Offline installation

The bundle includes TR-300 4.4.0 in `TR300-qube-machine-report/`, with installers, portable downloads, matching manuals, release notes, and licenses. These are fixed versions; the bundle does not update itself.

1. On a connected computer, download the [offline ZIP](https://github.com/QubeTX/qube-reports-executables/releases/latest/download/qubetx-offline-bundle.zip) and its [SHA-256 checksum](https://github.com/QubeTX/qube-reports-executables/releases/latest/download/qubetx-offline-bundle.zip.sha256). A checksum is a value calculated from a file; matching it helps detect a changed or incomplete download. Compare it using the commands below before transferring the ZIP.
2. Extract the entire ZIP on the destination computer. Open `index.html` to choose the installer or portable download. This page works without internet.
3. Verify the extracted files using the commands below, then select **TR-300** and follow this page's instructions for [Windows](#windows), [macOS](#macos), or [Linux](#linux) using those local files.

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
tr300 update
```

`report update` is equivalent to `tr300 update`. Updates need internet. When the existing installation can be verified, the updater keeps its format, edition, account or all-user setting, and location. For example, an MSI installation stays MSI. If installation records conflict or a security policy blocks the update, it keeps the working installation and explains how to continue manually.

Running a different official installer yourself requests a new installation choice, including a reinstall or an older version. The change proceeds only when the existing installation is clear and the switch is supported. Conflicting installations or a change between your account and all users may need manual resolution. Keep installation records intact and follow the reported guidance.

`tr300 install` sets up the optional short report shown when you open a terminal. The installed `report` command works without this setup. See [Shell startup](/tr300/shell-integration).

## Uninstall

To remove the installed tool, run this command and read its prompts:

```sh
tr300 uninstall
```

Read the prompts: TR-300 offers profile cleanup or Complete removal. `report uninstall` is equivalent.

For a portable copy, close it and delete its extracted folder. If another copy is also installed, check which one the terminal finds before running an uninstall command; see [Troubleshooting](/troubleshooting#wrong-version-or-duplicate-installation).
