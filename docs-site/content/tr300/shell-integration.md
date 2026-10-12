---
title: "Show a report when your terminal opens"
description: "Set up or remove the optional TR-300 startup summary."
sidebar:
  label: "Shell startup"
---

TR-300 can show a short system report when you open a terminal. This is optional. The installed `tr300` and `report` commands work without it.

## Set up the startup report

Run setup as your normal user. On macOS and Linux, do not add `sudo`; TR-300 refuses that setup because it needs your own terminal settings.

On Windows, setup may change your account's PowerShell execution policy from Restricted to RemoteSigned so the startup file can run. It preserves an explicit AllSigned policy and follows organization policy. Removing the startup report does not undo an execution-policy change.

```sh
tr300 install
```

Follow the prompts, then open a new terminal. You should see a short report. It uses `tr300 --fast` and does not save a report file.

TR-300 adds its own block to your shell profile, the file that runs when your terminal starts. It avoids repeated output in nested shells and skips the report if the executable is missing.

## Keep using the report command

The packaged `report` command supports the same actions and options as `tr300`. It does not depend on startup setup.

Setup removes the old TR-300-owned `report` alias when present, but leaves aliases created by other tools or by you. An existing alias can still take precedence over the installed command. See [Troubleshooting](/troubleshooting#wrong-version-or-duplicate-installation) if the two commands behave differently.

For a portable copy, keep the `report` and `tr300` files together.

## Remove only the startup report

```sh
tr300 uninstall
```

Choose **profile cleanup** to remove the startup report while keeping the tool. Choose **Complete** only if you also want to remove the installed product.

If organization policy blocks a startup profile, you can still run `tr300` or `report` manually where the executable itself is allowed.

Checked against [TR-300 v4.4.0](https://github.com/QubeTX/qube-machine-report/releases/tag/v4.4.0).
