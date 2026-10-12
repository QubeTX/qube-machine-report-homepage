---
title: Use the desktop app
description: Open the native monitor and control its tray, startup, and settings.
sidebar:
  label: Desktop app
---

Open SD-300 from your application menu or run `sd300 gui`. The command opens the installed app, or brings its existing window forward.

If the desktop companion is missing or corrupt, the CLI prints repair guidance. Use the current official installer or the [managed lifecycle commands](/installation/lifecycle) to repair the whole product.

## Find a measurement

Choose User mode for plain-language status or Technician mode for detailed readings. Open the section for CPU, memory, disk, GPU, network, processes, thermals, or drivers. The overview brings the main resource readings and findings together.

Read the status alongside each value. A sensor can be unsupported, unavailable, or permission-gated; none of those states means a zero reading or a healthy result. For a record you can inspect later, use [snapshots and capabilities](/sd300/snapshots).

## Choose how the app behaves

The app's Settings page includes display and monitoring preferences:

- Choose your temperature unit, chart density, and reduced-motion preference.
- Choose whether to keep monitoring after closing the window.
- Control the tray and launch-at-login separately. The tray defaults on; launch-at-login defaults off.

Desktop preferences are independent of terminal preferences. Changing the app's mode or temperature unit does not change how a later terminal session starts.

### Windows and macOS

Closing the window keeps the tray and monitoring engine running by default. Use **Open** in the tray to restore the window, or **Quit** to stop the GUI. Turn off **Keep monitoring after closing the window** if you want the close button to quit the GUI and tray instead.

The tray tooltip summarizes live resource readings. Turning the tray off takes effect on the next GUI launch. Running bare `sd300`, `sd300 --user`, or `sd300 --tech` does not start the tray.

### Linux

This release does not provide a Linux tray. Closing the app closes it normally. Launch-at-login opens a visible window, so monitoring is not left running without a way to reach it.

## Update from the app

**Settings > Update now** and the tray's **Update SD-300** action use the same channel-preserving transaction as `sd300 update`. A successful app-initiated update reopens the monitor. An already-current installation keeps the app open.

Installation or an update started from the CLI does not automatically launch the GUI. Uninstall remains a CLI action: `sd300 uninstall` removes the managed desktop and terminal components together.

## Portable desktop files

Native Windows MSI/EXE and macOS PKG packages contain both CLI and GUI. Portable GUI archives are separate from the CLI archives.

Keep the complete extracted directory or app bundle. On Linux, use `sd300/bin/sd300-gui` so the launcher can find its included runtime; a compatible graphical desktop is still required. See the [offline installation guide](/installation/offline) for the files for your platform.

## Accessibility

The app provides keyboard navigation, visible focus, text equivalents for charts, and reduced motion. In this release, individual desktop controls reach the operating system's accessibility tree on macOS. Windows and Linux expose the application canvas but not its child controls. Use the terminal interface when you need system screen-reader navigation on those platforms.

## Settings file locations

| Platform | Location |
| --- | --- |
| Windows | `%APPDATA%\SD-300\settings.json` |
| macOS | `~/Library/Application Support/SD-300/settings.json` |
| Linux | `${XDG_CONFIG_HOME:-~/.config}/sd300/settings.json` |

The file separates shared helper paths, terminal preferences, and GUI preferences. Use the app's controls for normal changes.

Checked against [SD-300 v4.1.0](https://github.com/QubeTX/qube-system-diagnostics/releases/tag/v4.1.0).
