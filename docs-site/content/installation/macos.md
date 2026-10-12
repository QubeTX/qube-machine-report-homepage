---
title: "Install on macOS"
description: "Choose a supported installer, architecture, and installation channel."
---

Use the [managed online commands](/installation) for a connected machine, or select the files below from the [offline bundle](/installation/offline).


Use the universal `.pkg` in the product's `macos/` folder for a native installation:

- TR-300: `tr300-universal-apple-darwin.pkg`
- ND-300: `nd300-universal-apple-darwin.pkg`
- SD-300: `sd300-macos-universal.pkg`

Each supports both Apple Silicon and Intel. Double-click it, follow Apple Installer, and open a new Terminal. The packages are the unchanged signed/notarized/stapled upstream releases. SD-300 also installs its app in Applications. Run `sd300 gui` or open the app yourself; installation does not launch it automatically.

For portable command-line use, choose `aarch64-apple-darwin` for Apple Silicon or `x86_64-apple-darwin` for Intel. Extract with `tar -xf <filename>.tar.xz`, enter the archive's top-level directory, and run `./tr300`, `./nd300`, or `./sd300`. Preserve executable permissions. Keep `report` beside `tr300`, and `speedqx` beside `nd300`.

For the portable SD-300 app, extract `sd300-gui-macos-universal.zip` and open the contained app bundle. Do not pull the executable out of the app bundle.



## Native downloads

### TR-300

- [tr300-universal-apple-darwin.pkg](https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-universal-apple-darwin.pkg)
### ND-300

- [nd300-universal-apple-darwin.pkg](https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-universal-apple-darwin.pkg)
### SD-300

- [sd300-macos-universal.pkg](https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-macos-universal.pkg)

These download links follow the latest release. The offline bundle remains pinned to its listed versions.
