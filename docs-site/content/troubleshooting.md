---
title: "Troubleshooting"
description: "Resolve missing commands, conflicting installations, and unavailable readings."
---

Start with the error or missing result you can see. Record the command and its output before changing the installation or system settings.

## Command not found after installation

Open a new terminal so it picks up the updated command search path, called **PATH**. Then try the tool again.

To see which installed command PowerShell finds, use the relevant name:

```powershell
Get-Command tr300
```

On macOS or Linux:

```sh
command -v tr300
```

Replace `tr300` with `report`, `nd300`, `speedqx`, or `sd300` as needed.

For a portable Windows copy, open PowerShell in the extracted folder and run `./tr300.exe`. On macOS or Linux, run `./tr300` from that folder. Portable extraction does not add commands to PATH. Keep `report` beside `tr300` and `speedqx` beside `nd300`.

## Wrong version or duplicate installation

Check the command's location using the steps above, then run it with `--version`. A shell alias, an old search-path entry, or another installation may select a different copy.

Follow the updater's recovery instructions before deleting files or installation records. The update guides explain how each tool preserves its installation method: [TR-300](/tr300/installation#updates-and-repairs), [ND-300](/nd300/installation#updates-and-repairs), and [SD-300](/sd300/installation#updates-and-repairs).

## Installer blocked or permission denied

Check that the download came from the official release. Keep the exact error message. On Windows, **Global** installs for all users and needs administrator approval; **Corporate** installs for your account without administrator approval.

On an organization-managed computer, follow your administrator's installation policy. The installers do not bypass those controls. If the updater cannot safely write or launch an installer, use the matching manual-installer link in its diagnostic.

## SD-300 desktop app missing

Portable terminal and desktop downloads are separate. The regular installer installs both together. If using a portable desktop copy, keep its complete folder or Mac app bundle.

For a regular installation, try `sd300 gui` and follow any repair guidance it prints. Use the current official installer to repair the product. When upgrading from SD-300 3.x to 4.x, run the new matching installer directly: an older updater may reject the changed desktop component.

## A measurement is unavailable

Hardware, drivers, privacy settings, and permissions can limit a reading. For SD-300, run:

```sh
sd300 capabilities
```

This helps distinguish missing support from denied permission or a collection error. See [Snapshots and sensor availability](/sd300/snapshots). A missing value is not zero, and an unavailable health check is not a pass.

## Network test incomplete

Blocked test services, a VPN, interruption, or a low time or data limit can leave results incomplete. Missing M-Lab consent leaves the speed headline labeled single-source. Preserve these labels when sharing the numbers.

To investigate connectivity without the speed test, run:

```sh
nd300 --fast
```

See [Read the diagnostics](/nd300/diagnostics) for connection checks and [SpeedQX](/nd300/speedqx) for test limits.

## Collect useful details for support

Include the tool's version and location, your operating system, how you installed it, the exact command, and the error or failed check. Describe what you expected to happen.

If a report would help, [save a TR-300 report](/tr300/examples#save-a-report-for-support) or [an SD-300 snapshot](/sd300/snapshots#save-a-redacted-snapshot). Review exported files for identifying information before sharing them.
