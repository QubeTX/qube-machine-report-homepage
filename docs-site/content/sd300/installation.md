---
title: "Install SD-300"
description: "Install SD-300 on Windows, macOS, or Linux, use an offline copy, and manage updates or removal."
---

Managed installations deliver the terminal monitor and desktop app together. Each can be used independently. The recommended wrapper already performs managed installation; you do not need to run `sd300 install` afterward.

The recommended commands install prebuilt releases. You do not need Rust or a compiler. These online commands and download links track the latest published release; the [offline bundle](#offline-installation) is a pinned snapshot. These instructions were checked against SD-300 4.1.0; see [source versions](/sources).

## Windows

Run in a normal PowerShell window:

```powershell
irm https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-cli-installer.ps1 | iex
```

Open a new terminal afterward and check `sd300 --version`.

### Native installers

Choose one format and edition. **Global** installs for all users and requires administrator approval. **Corporate** installs for your account without administrator approval. Keep the format that matches your existing installation or deployment policy.

| Edition | Windows Installer | Setup wizard |
| --- | --- | --- |
| Global | [MSI](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-windows-x64-global.msi) | [EXE](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-windows-x64-global.exe) |
| Corporate | [MSI](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-windows-x64-corporate.msi) | [EXE](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-windows-x64-corporate.exe) |

Double-click the chosen file and follow its prompts. These Windows packages are x64; Windows ARM64 is not included. If Windows or endpoint policy blocks installation, verify the source, hash, and publisher, retain the diagnostic, and ask your administrator where appropriate. Do not disable security controls to continue.

### Portable Windows copy

Extract [tr300-tui-x86_64-pc-windows-msvc.zip](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/tr300-tui-x86_64-pc-windows-msvc.zip), open PowerShell in that folder, and run `./sd300.exe`. The portable CLI archive contains `sd300`. Its `tr300-tui` filename is the historical package name. Portable extraction creates no PATH entry, menu shortcut, or managed-install receipt.

Native installers include the terminal and desktop tools. Open Start > SD-300 or run `sd300 gui` to launch the app.

For a portable desktop app, extract [sd300-gui-windows-x86_64.zip](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-gui-windows-x86_64.zip) into its own folder and open `sd300-gui.exe`. Keep `sd300_engine.dll`, assets, licenses, and `install-manifest.json` alongside it. Extract the CLI archive separately for terminal commands.

## macOS

Run in Terminal:

```sh
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-cli-installer.sh | sh
```

Open a new Terminal afterward and check `sd300 --version`.

### Apple Installer

Download [sd300-macos-universal.pkg](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-macos-universal.pkg). The unchanged upstream package is signed, notarized, and stapled and supports both Apple Silicon and Intel. Double-click it and follow Apple Installer.

The PKG also installs the app in Applications. Open it yourself or run `sd300 gui`; installation does not automatically launch it. For a portable app, extract [sd300-gui-macos-universal.zip](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-gui-macos-universal.zip) and keep the contained app bundle intact.

### Portable Mac copy

| Mac | CLI archive |
| --- | --- |
| Apple Silicon | [tr300-tui-aarch64-apple-darwin.tar.xz](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/tr300-tui-aarch64-apple-darwin.tar.xz) |
| Intel | [tr300-tui-x86_64-apple-darwin.tar.xz](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/tr300-tui-x86_64-apple-darwin.tar.xz) |

Extract with `tar -xf <filename>.tar.xz`, enter the archive's top-level directory, and run `./sd300`. Use `tar -tf <filename>.tar.xz` to find the directory name. Preserve executable permissions. The portable CLI archive contains `sd300`. Its `tr300-tui` filename is the historical package name.

## Linux

For a managed installation:

```sh
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-cli-installer.sh | sh
```

Open a new terminal afterward and check `sd300 --version`.

### Portable Linux copy

Check `uname -m` and choose the archive for your architecture and distribution. An ARM64 musl build is not included.

| Target | CLI archive |
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

Use the actual directory listed by `tar -tf <archive>` if it differs. The portable CLI archive contains `sd300`. Its `tr300-tui` filename is the historical package name. Manual copying does not establish a managed receipt; keep track of where you put the files.

### Portable desktop app

| Target | Archive |
| --- | --- |
| x64 GNU | [sd300-gui-linux-gnu-x86_64.tar.xz](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-gui-linux-gnu-x86_64.tar.xz) |
| ARM64 GNU | [sd300-gui-linux-gnu-arm64.tar.xz](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-gui-linux-gnu-arm64.tar.xz) |
| x64 musl | [sd300-gui-linux-musl-x86_64.tar.xz](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-gui-linux-musl-x86_64.tar.xz) |

Extract into its own directory, keep the entire `sd300/` tree, and run `./sd300/bin/sd300-gui`. The launcher configures the included private runtime. Do not launch `libexec/sd300-gui` directly or copy only that binary. A working graphical desktop, compatible system libc, kernel, and display/driver support remain necessary. Extract the separate CLI archive for terminal use.

## Offline installation

The bundle includes SD-300 4.1.0 in `SD300-qube-system-diagnostics/`, with native installers, portable archives, matching manuals, release notes, and licenses. It is a dated snapshot, not a live updater.

1. On a connected computer, download the [offline ZIP](https://github.com/QubeTX/qube-reports-executables/releases/latest/download/qubetx-offline-bundle.zip) and its [SHA-256 checksum](https://github.com/QubeTX/qube-reports-executables/releases/latest/download/qubetx-offline-bundle.zip.sha256). Compare the checksum before transferring the ZIP.
2. Extract the entire ZIP on the destination computer. Open `index.html` for the local file picker, which has no online dependencies.
3. Verify the extracted files using the commands below, then select **SD-300** and follow this page's instructions for [Windows](#windows), [macOS](#macos), or [Linux](#linux) using those local files.

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
sd300 update
```

Terminal and desktop components update as one managed product. Updates require internet and preserve a proven channel, edition, scope, and path. MSI remains MSI, EXE remains EXE, and a native PKG uses its PKG channel. If ownership is ambiguous or endpoint policy blocks a write or installer launch, the updater stops with recovery guidance and retains the working installation.

A freshly launched official wrapper or native installer represents a deliberate installation choice, including a reinstall or downgrade. Safe takeover depends on unambiguous ownership and supported scope transitions. Do not erase receipts or registration records to force a transition. An opposite Windows scope or conflicting owner may need manual resolution.

`sd300 install` deliberately selects its preferred managed installer and can repair a missing desktop companion. It is not necessary after running the recommended wrapper.

### Upgrading from SD-300 3.x to 4.x

Run the new official installer directly, matching your existing format and edition. Older updaters can reject the new GUI ABI/schema. Installation and CLI updates do not automatically open the GUI. An update started from the GUI's own Settings or tray menu reopens it after success.

## Uninstall

```sh
sd300 uninstall
```

Uninstall remains a CLI action. It delegates to the proven owner and removes the CLI, GUI, owned integration, and private app data together. Shared Cargo/Rust tooling and user-exported reports are preserved.

For an unregistered portable copy, close it and remove its extracted directory. Do not accidentally run the lifecycle command of a different managed copy found on PATH.
