---
title: "Install ND-300"
description: "Install ND-300 on Windows, macOS, or Linux, use an offline copy, and manage updates or removal."
sidebar:
  label: "Installation"
---

The package installs `nd300` and the standalone `speedqx` speed test together.

No Rust toolchain or compiler is needed. Online downloads track the latest release; the [offline bundle](#offline-installation) is a fixed snapshot. This guide was checked against ND-300 4.0.1; see [source versions](/sources).

## Windows

1. Open a normal PowerShell window.
2. Paste and run the installation command:

   ```powershell
   powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install-nd300.ps1 | iex"
   ```

3. Open a new terminal afterward and check `nd300 --version`.

### Download an installer

Choose the scope first: your account or all users. EXE opens a setup wizard; MSI also supports Windows Installer deployment. Keep the existing format and edition when updating unless you intend to change them.

| Install for | MSI | EXE |
| --- | --- | --- |
| All users — Global (admin) | [MSI](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-pc-windows-msvc.msi) | [EXE](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-pc-windows-msvc-setup.exe) |
| Your account — Corporate | [MSI](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-pc-windows-msvc-corporate.msi) | [EXE](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-pc-windows-msvc-corporate-setup.exe) |

Double-click the chosen file and follow its prompts. These Windows packages are x64; Windows ARM64 is not included. If Windows or organization policy blocks installation, keep the error message, check the download source and publisher, and follow your administrator's guidance.

### Portable Windows copy

Extract [nd300-x86_64-pc-windows-msvc.zip](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-pc-windows-msvc.zip), open PowerShell in that folder, and run `./nd300.exe --fast` for a first check without a speed test. Keep `speedqx` beside `nd300`; both commands are included in the same package. A portable copy runs from its extracted folder. It does not create a menu shortcut or make the command available in every terminal folder.

## macOS

1. Open a normal terminal.
2. Paste and run the installation command:

   ```sh
   curl -LsSf https://reports.qubetx.com/install-nd300.sh | sh
   ```

3. Open a new Terminal afterward and check `nd300 --version`.

### Apple Installer

Download [nd300-universal-apple-darwin.pkg](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-universal-apple-darwin.pkg). This package supports Apple Silicon and Intel Macs. It is signed and Apple-notarized, with the notarization ticket included. Double-click it and follow Apple Installer.

### Portable Mac copy

| Mac | Terminal download |
| --- | --- |
| Apple Silicon | [nd300-aarch64-apple-darwin.tar.xz](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-aarch64-apple-darwin.tar.xz) |
| Intel | [nd300-x86_64-apple-darwin.tar.xz](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-apple-darwin.tar.xz) |

Extract with `tar -xf <filename>.tar.xz`, open the extracted folder, and run `./nd300 --fast` for a first check without a speed test. Replace `<filename>` with the downloaded name. If needed, `tar -tf <filename>.tar.xz` lists the folders and files inside. Keep the extracted files' permission to run. Keep `speedqx` beside `nd300`; both commands are included in the same package.

## Linux

1. Open a normal terminal.
2. Paste and run the installation command:

   ```sh
   curl -LsSf https://reports.qubetx.com/install-nd300.sh | sh
   ```

3. Open a new terminal afterward and check `nd300 --version`.

### Portable Linux copy

Run `uname -m` to check your processor type: `x86_64` means x64, and `aarch64` means ARM64. Choose GNU for a compatible GNU/Linux distribution or musl for Alpine. An ARM64 musl download is not included.

| Linux system | Terminal download |
| --- | --- |
| x64 GNU/Linux | [nd300-x86_64-unknown-linux-gnu.tar.xz](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-unknown-linux-gnu.tar.xz) |
| ARM64 GNU/Linux | [nd300-aarch64-unknown-linux-gnu.tar.xz](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-aarch64-unknown-linux-gnu.tar.xz) |
| x64 musl / Alpine | [nd300-x86_64-unknown-linux-musl.tar.xz](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-unknown-linux-musl.tar.xz) |

For example, on compatible x64 GNU/Linux:

```sh
tar -xf nd300-x86_64-unknown-linux-gnu.tar.xz
cd nd300-x86_64-unknown-linux-gnu
./nd300 --help
./nd300 --fast
```

If the folder name differs, use the name listed by `tar -tf` followed by the archive filename. Keep `speedqx` beside `nd300`; both commands are included in the same package. Keep track of the extracted folder. Manually copied files do not create the installation records used by the automatic updater.

## Offline installation

The bundle includes ND-300 4.0.1 in `ND300-qube-network-diagnostics/`, with installers, portable downloads, matching manuals, release notes, and licenses. These are fixed versions; the bundle does not update itself.

1. On a connected computer, download the [offline ZIP](https://github.com/QubeTX/qube-reports-executables/releases/latest/download/qubetx-offline-bundle.zip) and its [SHA-256 checksum](https://github.com/QubeTX/qube-reports-executables/releases/latest/download/qubetx-offline-bundle.zip.sha256). A checksum is a value calculated from a file; matching it helps detect a changed or incomplete download. Compare it using the commands below before transferring the ZIP.
2. Extract the entire ZIP on the destination computer. Open `index.html` to choose the installer or portable download. This page works without internet.
3. Verify the extracted files using the commands below, then select **ND-300** and follow this page's instructions for [Windows](#windows), [macOS](#macos), or [Linux](#linux) using those local files.

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

`speedqx update` uses ND-300's updater. Updates need internet. When the existing installation can be verified, the updater keeps its format, edition, account or all-user setting, and location. For example, an MSI installation stays MSI. If installation records conflict or a security policy blocks the update, it keeps the working installation and explains how to continue manually.

```sh
nd300 update
```

Running a different official installer yourself requests a new installation choice, including a reinstall or an older version. The change proceeds only when the existing installation is clear and the switch is supported. Conflicting installations or a change between your account and all users may need manual resolution. Keep installation records intact and follow the reported guidance.

Keep `nd300` and `speedqx` from the same release together when replacing a portable copy.

## Uninstall

To remove the installed tool, run this command and read its prompts:

```sh
nd300 uninstall
```

Read the prompts before removing the installed product.

For a portable copy, close it and delete its extracted folder. If another copy is also installed, check which one the terminal finds before running an uninstall command; see [Troubleshooting](/troubleshooting#wrong-version-or-duplicate-installation).
