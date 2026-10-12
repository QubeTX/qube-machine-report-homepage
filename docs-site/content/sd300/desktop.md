---
title: "Use the desktop app"
description: "Open SD-300, find a reading, and control monitoring, startup, and updates."
sidebar:
  label: "Desktop app"
---

Open SD-300 from your application menu, or run:

```sh
sd300 gui
```

The command opens the installed app or brings its existing window forward. If it reports a missing or damaged desktop component, see [Installation and repairs](/sd300/installation#updates-and-repairs).

## Find a reading

Choose **User mode** for plain-language status or **Technician mode** for detailed readings. Start with Overview, then select CPU, Memory, Disk, GPU, Network, Processes, Thermals, or Drivers.

For example, open Processes while reproducing a slowdown, then compare the busy programs with the processor and memory readings. An unavailable sensor is not a zero reading or a healthy result.

To save a record for later, use a [snapshot](/sd300/snapshots).

## Choose what happens when you close the window

### Windows and macOS

By default, closing the window keeps SD-300 monitoring in the background. Its icon stays in the Windows system tray or macOS menu bar. Choose **Open** there to restore the window or **Quit** to stop the desktop app.

To make closing the window stop the app, turn off **Keep monitoring after closing the window** in Settings.

The tray setting is on by default. Turning it off takes effect the next time you launch the app. Opening the terminal monitor does not start the tray.

### Linux

This release has no Linux tray icon. Closing the window quits the app. If you enable launch at login, SD-300 opens a visible window.

## Change display and startup settings

Settings includes temperature units, chart density, and reduced motion. Launch at login is separate from the tray setting and is off by default.

Desktop preferences are separate from terminal preferences. Changing the app's mode or temperature unit does not change how a later terminal session starts.

## Update the app

Choose **Settings > Update now**, or **Update SD-300** from the tray menu. The updater preserves the verified installation method. After a successful app-started update, the monitor reopens; if it is already current, the app stays open.

An installation or update started from the terminal does not automatically open the desktop app. Removal also starts from the terminal: `sd300 uninstall` removes the installed terminal and desktop components together. See [Updates and repairs](/sd300/installation#updates-and-repairs) before changing installation methods.

## Use a portable desktop copy

Windows MSI/EXE installers and the macOS PKG include both terminal and desktop tools. Portable desktop downloads are separate from portable terminal downloads.

Keep the whole extracted folder or Mac app bundle together. On Linux, run `sd300/bin/sd300-gui` so it can find its included support files. You still need a compatible graphical desktop. See [Installation](/sd300/installation) for downloads and [offline setup](/sd300/installation#offline-installation) for disconnected computers.

## Accessibility

The app includes keyboard navigation, visible focus, text equivalents for charts, and reduced motion. In this release, macOS exposes individual controls to the operating system's accessibility tools.

Windows and Linux expose the app's drawing area but not the controls within it. Use the terminal interface when you need system screen-reader navigation on those platforms. This limitation is separate from the app's keyboard controls.

## Settings files

Use Settings for everyday changes. If you need to locate the saved preferences for troubleshooting, they are stored here:

| Platform | Location |
| --- | --- |
| Windows | `%APPDATA%\SD-300\settings.json` |
| macOS | `~/Library/Application Support/SD-300/settings.json` |
| Linux | `${XDG_CONFIG_HOME:-~/.config}/sd300/settings.json` |

The file keeps shared helper paths, terminal preferences, and desktop preferences in separate sections.

Checked against [SD-300 v4.1.0](https://github.com/QubeTX/qube-system-diagnostics/releases/tag/v4.1.0).
