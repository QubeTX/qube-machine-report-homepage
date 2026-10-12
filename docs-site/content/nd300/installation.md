---
title: "Install ND-300"
description: "Install ND-300 on Windows, macOS, or Linux, use an offline copy, and manage updates or removal."
---

The package installs `nd300` and the standalone `speedqx` speed test together.

The recommended commands install prebuilt releases. You do not need Rust or a compiler. These online commands and download links track the latest published release; the [offline bundle](#offline-installation) is a pinned snapshot. These instructions were checked against ND-300 4.0.1; see [source versions](/sources).

## Windows

Run in a normal PowerShell window:

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install-nd300.ps1 | iex"
```

Open a new terminal afterward and check `nd300 --version`.

### Native installers

Choose one format and edition. **Global** installs for all users and requires administrator approval. **Corporate** installs for your account without administrator approval. Keep the format that matches your existing installation or deployment policy.

| Edition | Windows Installer | Setup wizard |
| --- | --- | --- |
| Global | [MSI](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-pc-windows-msvc.msi) | [EXE](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-pc-windows-msvc-setup.exe) |
| Corporate | [MSI](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-pc-windows-msvc-corporate.msi) | [EXE](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-pc-windows-msvc-corporate-setup.exe) |

Double-click the chosen file and follow its prompts. These Windows packages are x64; Windows ARM64 is not included. If Windows or endpoint policy blocks installation, verify the source, hash, and publisher, retain the diagnostic, and ask your administrator where appropriate. Do not disable security controls to continue.

### Portable Windows copy

Extract [nd300-x86_64-pc-windows-msvc.zip](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-pc-windows-msvc.zip), open PowerShell in that folder, and run `./nd300.exe`. Keep `speedqx` beside `nd300`; both commands are included in the same package. Portable extraction creates no PATH entry, menu shortcut, or managed-install receipt.

## macOS

Run in Terminal:

```sh
curl -LsSf https://reports.qubetx.com/install-nd300.sh | sh
```

Open a new Terminal afterward and check `nd300 --version`.

### Apple Installer

Download [nd300-universal-apple-darwin.pkg](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-universal-apple-darwin.pkg). The unchanged upstream package is signed, notarized, and stapled and supports both Apple Silicon and Intel. Double-click it and follow Apple Installer.

### Portable Mac copy

| Mac | CLI archive |
| --- | --- |
| Apple Silicon | [nd300-aarch64-apple-darwin.tar.xz](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-aarch64-apple-darwin.tar.xz) |
| Intel | [nd300-x86_64-apple-darwin.tar.xz](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-apple-darwin.tar.xz) |

Extract with `tar -xf <filename>.tar.xz`, enter the archive's top-level directory, and run `./nd300`. Use `tar -tf <filename>.tar.xz` to find the directory name. Preserve executable permissions. Keep `speedqx` beside `nd300`; both commands are included in the same package.

## Linux

For a managed installation:

```sh
curl -LsSf https://reports.qubetx.com/install-nd300.sh | sh
```

Open a new terminal afterward and check `nd300 --version`.

### Portable Linux copy

Check `uname -m` and choose the archive for your architecture and distribution. An ARM64 musl build is not included.

| Target | CLI archive |
| --- | --- |
| x64 GNU/Linux | [nd300-x86_64-unknown-linux-gnu.tar.xz](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-unknown-linux-gnu.tar.xz) |
| ARM64 GNU/Linux | [nd300-aarch64-unknown-linux-gnu.tar.xz](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-aarch64-unknown-linux-gnu.tar.xz) |
| x64 musl / Alpine | [nd300-x86_64-unknown-linux-musl.tar.xz](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-unknown-linux-musl.tar.xz) |

For example, on compatible x64 GNU/Linux:

```sh
tar -xf nd300-x86_64-unknown-linux-gnu.tar.xz
cd nd300-x86_64-unknown-linux-gnu
./nd300 --help
./nd300
```

Use the actual directory listed by `tar -tf <archive>` if it differs. Keep `speedqx` beside `nd300`; both commands are included in the same package. Manual copying does not establish a managed receipt; keep track of where you put the files.

## Offline installation

The bundle includes ND-300 4.0.1 in `ND300-qube-network-diagnostics/`, with native installers, portable archives, matching manuals, release notes, and licenses. It is a dated snapshot, not a live updater.

1. On a connected computer, download the [offline ZIP](https://github.com/QubeTX/qube-reports-executables/releases/latest/download/qubetx-offline-bundle.zip) and its [SHA-256 checksum](https://github.com/QubeTX/qube-reports-executables/releases/latest/download/qubetx-offline-bundle.zip.sha256). Compare the checksum before transferring the ZIP.
2. Extract the entire ZIP on the destination computer. Open `index.html` for the local file picker, which has no online dependencies.
3. Verify the extracted files using the commands below, then select **ND-300** and follow this page's instructions for [Windows](#windows), [macOS](#macos), or [Linux](#linux) using those local files.

Run from the extracted `qubetx-offline-bundle` directory; these checks need no network:

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

If a checksum fails, stop and obtain another copy from the official release. A match proves the bytes match the list; it does not replace trusting the download source. The included Markdown manuals work in a text editor, although external links and images may need internet.

Offline installation needs no toolchain download. Internet speed tests, public connectivity probes, downloads, and self-updates still require connectivity; local measurements depend on OS permissions and available hardware.

To upgrade a disconnected machine, run the included official native installer matching its existing format and edition. For portable use, extract into a new directory and keep the previous copy until the new one works. Do not mix individual files from different releases. Review [updates and repairs](#updates-and-repairs) before changing a managed installation.

## Updates and repairs

```sh
nd300 update
```

`speedqx update` uses ND-300's updater. Updates require internet and preserve a proven channel, edition, scope, and path. MSI remains MSI, EXE remains EXE, and a native PKG uses its PKG channel. If ownership is ambiguous or endpoint policy blocks a write or installer launch, the updater stops with recovery guidance and retains the working installation.

A freshly launched official wrapper or native installer represents a deliberate installation choice, including a reinstall or downgrade. Safe takeover depends on unambiguous ownership and supported scope transitions. Do not erase receipts or registration records to force a transition. An opposite Windows scope or conflicting owner may need manual resolution.

Keep `nd300` and `speedqx` from the same release together when replacing a portable copy.

## Uninstall

```sh
nd300 uninstall
```

Read the prompts before removing the installed product.

For an unregistered portable copy, close it and remove its extracted directory. Do not accidentally run the lifecycle command of a different managed copy found on PATH.
