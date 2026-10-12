---
title: "Update, repair, and uninstall"
description: "Preserve the installed channel and understand deliberate changes of installer."
---

## Update a managed installation

```sh
tr300 update
nd300 update
sd300 update
```

Run only the command for the product you want to update. `report update` is equivalent to `tr300 update`; `speedqx update` uses ND-300's updater. Updates require internet.

The updater preserves a proven channel, edition, scope, and path. MSI remains MSI, EXE remains EXE, and a native PKG installation uses its PKG channel. If ownership is ambiguous or endpoint policy blocks a write or installer launch, the updater stops with recovery guidance and retains the working installation.

## Choose a different installer deliberately

A freshly launched official wrapper or native installer represents a deliberate installation choice, including a reinstall or downgrade. Safe takeover still depends on unambiguous ownership and supported scope transitions. Do not erase receipts or registration records to force a transition. An opposite Windows scope or conflicting owner can require manual resolution before installation.

For SD-300, terminal and desktop components are installed, updated, and removed as one managed product. `sd300 install` deliberately selects its preferred managed installer and can repair a missing companion. It is not necessary after running the recommended wrapper.

### SD-300 3.x to 4.x

Run the new official installer directly, matching your existing format and edition. Older updaters can reject the new GUI ABI/schema. Installation and CLI updates do not automatically open the GUI. An update started from the GUI's own Settings or tray menu reopens it after success.

## Optional TR-300 shell startup

`tr300 install` configures the fast report in new interactive shells and retires its old profile-owned `report` alias. The packaged `report` command remains available without this setup. See [shell integration](/tr300/shell-integration).

## Uninstall

```sh
tr300 uninstall
nd300 uninstall
sd300 uninstall
```

These commands change the installed product. Read the prompts before proceeding. TR-300 offers profile cleanup or Complete removal. SD-300 delegates to its proven owner and removes the CLI, GUI, owned integration and private app data together; uninstall remains a CLI action. Shared Cargo/Rust tooling and user-exported reports are preserved by SD-300.

For an unregistered portable copy, close it and remove its extracted directory. Do not accidentally run the lifecycle command of a different managed copy found on PATH.
