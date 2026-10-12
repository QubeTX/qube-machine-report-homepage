---
title: "Install on Linux"
description: "Choose a supported installer, architecture, and installation channel."
---

Use the [managed online commands](/installation) for a connected machine, or select the files below from the [offline bundle](/installation/offline).


Check `uname -m`. Use `x86_64-unknown-linux-gnu` on a compatible x64 GNU/Linux distribution, `aarch64-unknown-linux-gnu` on ARM64 GNU/Linux, or `x86_64-unknown-linux-musl` for x64 musl/Alpine. An ARM64 musl build is not included.

For a CLI archive:

```sh
tar -xf tr300-x86_64-unknown-linux-gnu.tar.xz
cd tr300-x86_64-unknown-linux-gnu
./tr300 --help
./tr300
```

Use the actual directory listed by `tar -tf <archive>` if it differs. Other tools use the matching archive and command names. TR-300 ships `tr300` and `report`; ND-300 ships `nd300` and `speedqx`; SD-300 CLI ships `sd300`. Keep companion binaries together. Manual copying does not establish a managed receipt; keep track of where you put portable files.

**SD-300 desktop:** choose the corresponding GUI archive:

| Target | GUI archive |
|---|---|
| x64 GNU | `sd300-gui-linux-gnu-x86_64.tar.xz` |
| ARM64 GNU | `sd300-gui-linux-gnu-arm64.tar.xz` |
| x64 musl | `sd300-gui-linux-musl-x86_64.tar.xz` |

Extract into its own directory, keep the entire `sd300/` tree, and run `./sd300/bin/sd300-gui`. The launcher sets up the included private runtime. Do not launch `libexec/sd300-gui` directly or copy just that binary. A working graphical desktop, compatible system libc, kernel and display/driver support remain necessary. Extract the separate CLI archive for terminal use. Portable extraction creates no menu entry or managed-install receipt.



## Published archives

### TR-300

- [tr300-aarch64-unknown-linux-gnu.tar.xz](https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-aarch64-unknown-linux-gnu.tar.xz)
- [tr300-x86_64-unknown-linux-gnu.tar.xz](https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-x86_64-unknown-linux-gnu.tar.xz)
- [tr300-x86_64-unknown-linux-musl.tar.xz](https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-x86_64-unknown-linux-musl.tar.xz)
### ND-300

- [nd300-aarch64-unknown-linux-gnu.tar.xz](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-aarch64-unknown-linux-gnu.tar.xz)
- [nd300-x86_64-unknown-linux-gnu.tar.xz](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-unknown-linux-gnu.tar.xz)
- [nd300-x86_64-unknown-linux-musl.tar.xz](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-unknown-linux-musl.tar.xz)
### SD-300

- [sd300-gui-linux-gnu-arm64.tar.xz](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-gui-linux-gnu-arm64.tar.xz)
- [sd300-gui-linux-gnu-x86_64.tar.xz](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-gui-linux-gnu-x86_64.tar.xz)
- [sd300-gui-linux-musl-x86_64.tar.xz](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-gui-linux-musl-x86_64.tar.xz)
- [tr300-tui-aarch64-unknown-linux-gnu.tar.xz](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/tr300-tui-aarch64-unknown-linux-gnu.tar.xz)
- [tr300-tui-x86_64-unknown-linux-gnu.tar.xz](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/tr300-tui-x86_64-unknown-linux-gnu.tar.xz)
- [tr300-tui-x86_64-unknown-linux-musl.tar.xz](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/tr300-tui-x86_64-unknown-linux-musl.tar.xz)

These download links follow the latest release. The offline bundle remains pinned to its listed versions.
