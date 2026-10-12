---
title: "Shell startup and the report command"
description: "Configure the optional fast startup summary without depending on an alias."
---

The `report` binary is installed beside `tr300` and delegates to that adjacent executable. Keep both together in a portable installation. A foreign shell alias or function named `report` can shadow the packaged command.

Run `tr300 install` as your normal user to configure a fast report in new interactive shells. It updates only its own profile block and retires its legacy alias; it preserves foreign aliases. On macOS/Linux it uses the user's shell profile; `sudo tr300 install` is refused. On Windows it configures the PowerShell profiles.

The startup call is `tr300 --fast`, which prints to the terminal without saving a Markdown report. Installation guards the call when the binary is missing and avoids repeated output in nested shells.

On Windows, setup may change a Restricted current-user execution policy to RemoteSigned so the local profile can run. It preserves an explicit AllSigned policy and reports the limitation. Uninstall does not roll this policy change back. Organization policy can still block the profile; manual `tr300` or `report` use remains available where the binary itself is permitted.

Use `tr300 uninstall` and choose profile cleanup to remove the startup integration. Choose Complete only when you intend to remove the installed product too.


Checked against [TR-300 v4.4.0](https://github.com/QubeTX/qube-machine-report/releases/tag/v4.4.0).
