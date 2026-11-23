---
title: "Show a report when your terminal opens"
description: "Set up or remove the optional TR-300 startup summary."
sidebar:
  label: "Shell startup"
---

TR-300 4.5 shows a fast report when you open an interactive terminal or log in over SSH. Ordinary commands, scripts and file transfers stay quiet.

## What you see

A local session leads with hardware and utilization. SSH leads with the hostname, the server address you reached and the battery state, when available. When space allows, thin horizontal lines separate groups of related information. Short or narrow windows skip the lines. The report leaves four rows for the prompt and shell messages and shows more detail in taller windows. If the terminal cannot report its dimensions, TR-300 prints a short hostname line.

Run `tr300 --startup` to preview that view. Run `report` for the full table.

## Automatic setup

The one-line installers configure startup for your account. Windows Global and the macOS PKG include startup integration for existing and future accounts. Windows Corporate, Cargo installations and portable copies use explicit opt-in. Windows supports Command Prompt, Windows PowerShell and PowerShell 7. macOS and Linux support Bash, Zsh, Fish and installed PowerShell.

Windows Global enables Command Prompt for every account. PowerShell startup follows the policy for each PowerShell host. On Windows clients with no policy configured, setup can select `RemoteSigned` for the signed-in account so its local profile loads. Explicit policies take precedence. For an SSH-only Windows account using PowerShell before its profile is configured, run `tr300 install` once if local profiles are permitted.

Run `tr300 install` as your normal user to enable or repair startup. Open a fresh terminal afterward. A PowerShell host with a restrictive execution policy, or a shell launched with profiles disabled, can skip the report.

## Keep using the report command

The packaged `report` command supports the same actions and options as `tr300`. It does not depend on startup setup.

Setup removes the old TR-300-owned `report` alias when present, but leaves aliases created by other tools or by you. An existing alias can still take precedence over the installed command. See [Troubleshooting](/troubleshooting#wrong-version-or-duplicate-installation) if the two commands behave differently.

For a portable copy, keep the `report` and `tr300` files together.

## Remove only the startup report

```sh
tr300 uninstall
```

Choose **Remove auto-run only** to disable the startup report for your account while keeping the tool. Updates and repairs preserve this choice. Choose **Complete** only if you also want to remove the installed product.

If organization policy blocks a startup profile, you can still run `tr300` or `report` manually where the executable itself is allowed.

Checked against [TR-300 v4.5.1](https://github.com/QubeTX/qube-machine-report/releases/tag/v4.5.1).
