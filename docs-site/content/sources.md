---
title: "Source versions and documentation scope"
description: "The exact release sources used to check these guides."
sidebar:
  label: Source versions
---

These guides were checked on October 11, 2026 against published release documentation and command help. They describe the active TR-300, ND-300/SpeedQX, and SD-300 tools.

| Tool | Documented release | Source commit |
| --- | --- | --- |
| TR-300 | [v4.4.0](https://github.com/QubeTX/qube-machine-report/releases/tag/v4.4.0) | [`f49d50a25684`](https://github.com/QubeTX/qube-machine-report/tree/f49d50a256842ac6c677d1c743c553b3dd92717f) |
| ND-300 | [v4.0.1](https://github.com/QubeTX/qube-network-diagnostics/releases/tag/v4.0.1) | [`d76af2b2e282`](https://github.com/QubeTX/qube-network-diagnostics/tree/d76af2b2e282440e2e28c31c8b05d5d8833f458f) |
| SD-300 | [v4.1.0](https://github.com/QubeTX/qube-system-diagnostics/releases/tag/v4.1.0) | [`1d66a461b3e4`](https://github.com/QubeTX/qube-system-diagnostics/tree/1d66a461b3e499e067b6c15658b04a8cde89671d) |


## Online installers and offline snapshots

Online installer and native download links use `releases/latest/download` and can advance independently of these pages. The offline bundle records exact versions, source commits, asset sizes, and SHA-256 hashes in `bundle-manifest.json`. Its included upstream documentation comes from those release commits.

The command examples describe the documented release. Check `--version` and `--help` when using a newer release. Release notes and historical design documents can describe limits, exceptions, or plans; they are not promises that every proposed feature has shipped.

## Validation scope

Checksum and archive verification establishes file integrity. Command-help checks establish the documented command surface. Neither proves hardware accuracy, a successful native installation on your computer, screen-reader acceptance on every OS, or every measured performance target. SD-300's desktop accessibility limitations are described in the desktop guide; consult the exact release's qualification notes for platform and performance evidence.

## Maintainers

Update these pages together with product installation contracts when a new release changes behavior. Refresh the offline bundle as a new immutable release, and update its pinned inventory independently of versionless online installers.
