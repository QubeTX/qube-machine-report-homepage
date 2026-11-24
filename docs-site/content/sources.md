---
title: "Source versions"
description: "The exact release sources used to check these guides."
sidebar:
  label: Source versions
---

The TR-300 guides were checked against the 4.5.1 release source and command help on November 22, 2026. The ND-300/SpeedQX and SD-300 guides were checked on October 12, 2026.

| Tool | Documented release | Source commit |
| --- | --- | --- |
| TR-300 | [v4.5.1](https://github.com/QubeTX/qube-machine-report/releases/tag/v4.5.1) | [`55650b8ef9df`](https://github.com/QubeTX/qube-machine-report/tree/55650b8ef9dfd4ef1dd2d53d33da7000a5f0c441) |
| ND-300 | [v4.0.1](https://github.com/QubeTX/qube-network-diagnostics/releases/tag/v4.0.1) | [`d76af2b2e282`](https://github.com/QubeTX/qube-network-diagnostics/tree/d76af2b2e282440e2e28c31c8b05d5d8833f458f) |
| SD-300 | [v4.1.0](https://github.com/QubeTX/qube-system-diagnostics/releases/tag/v4.1.0) | [`1d66a461b3e4`](https://github.com/QubeTX/qube-system-diagnostics/tree/1d66a461b3e499e067b6c15658b04a8cde89671d) |


## Online installers and offline copies

Online installation commands and download links follow the latest published release. They may install a newer version than the one described here. Check `--version` and `--help` if the behavior differs.

Offline toolkit 4.0.0 (November 24, 2026) contains TR-300 4.5.1, ND-300 4.0.2, and SD-300 4.1.0. Its `bundle-manifest.json` records those versions, the source commits, file sizes, and SHA-256 checksums used to verify the files. Its included manuals come from the same releases.

## What was checked

The guides use published release sources and command help to check command names, options, and behavior. File checksums confirm that bundled files match the recorded copies.

These checks do not prove every hardware reading is accurate or that an installer has been tested on your particular computer. Platform support and known limits still apply. See the [desktop accessibility notes](/sd300/desktop#accessibility) and each release's testing notes for those details.

Historical design documents may describe plans or experiments that have not shipped. Use the documented release behavior when following an example.

## Maintaining these guides

When a release changes behavior, update the relevant commands, examples, and installation instructions together. Publish refreshed offline bundles as new releases and update their recorded versions separately from online download links.
