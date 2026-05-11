# Qube Machine Report Homepage Project Summary

## TL;DR

This is a React 18 + Vite marketing homepage for the QubeTX 300-series CLI tools and shaughvOS. Product pages are routed by pathname in `src/main.jsx`, with each top-level page composed from inline-styled React components under `src/components/`.

## Current Status

- TR-300, ND-300, and SD-300 product install sections use Cargo-first, one-line, copy-paste platform commands for macOS, Linux, and Windows.
- Current crates.io packages are `tr300` for TR-300, `nd300` for ND-300, and `tr300-tui` for SD-300. SD-300 still installs and runs as the `sd300` command.
- The Cargo-first one-liners install rustup/Rust when needed, load Cargo's bin directory into the current terminal `PATH`, update stable Rust, and then run the matching `cargo install` command.
- The install guide has been refreshed to the current release/package naming scheme: TR300 v3.14.3, ND300 v3.0.7, and SD300 v1.4.3.
- Deployment is handled by Vercel Git integration. The repository's default remote branch is currently `main`.
- User branch wording preference: when the user says "push to main" or "push to master", treat it as "push to the repository's default branch". In this repository, that means `main`; do not create a `master` branch unless explicitly asked for a separate branch named `master`.
- No test framework is configured. Verification should use `npm run lint`, `npm run build`, and rendered browser inspection.
- `AGENTS.md` and `CLAUDE.md` provide internal agent guidance and should be kept aligned when repository conventions change.

## Project Goals

- Present each QubeTX tool with clear product positioning, commands, feature summaries, platform support, and installation instructions.
- Keep install and command content aligned with the corresponding source repositories when source state is relevant.
- Preserve the existing industrial terminal-inspired visual language: dark background, mono-font copy, neon magenta accent, inline styles, and tabbed terminal install blocks.

## Workspace File Tree

```text
.
├── .gitignore
├── AGENTS.md
├── CHANGELOG.md
├── CLAUDE.md
├── CODEX_PROJECT.md
├── LICENSE
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── shaughv-logo.svg
│   └── vite.svg
├── reference
│   ├── alternate-version.js
│   ├── main_version.js
│   └── tr300_documentation.md
├── src
│   ├── App.jsx
│   ├── ExecutablesApp.jsx
│   ├── InstallGuideApp.jsx
│   ├── ND300App.jsx
│   ├── SD300App.jsx
│   ├── ShaughvOSApp.jsx
│   ├── components
│   │   ├── Commands.jsx
│   │   ├── Demos.jsx
│   │   ├── ExecutablesContent.jsx
│   │   ├── ExecutablesFooter.jsx
│   │   ├── ExecutablesHero.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Install.jsx
│   │   ├── InstallGuideContent.jsx
│   │   ├── InstallGuideFooter.jsx
│   │   ├── InstallGuideHero.jsx
│   │   ├── ND300Commands.jsx
│   │   ├── ND300Diagnostics.jsx
│   │   ├── ND300Features.jsx
│   │   ├── ND300Footer.jsx
│   │   ├── ND300Hero.jsx
│   │   ├── ND300Install.jsx
│   │   ├── ND300Modes.jsx
│   │   ├── ND300SampleOutput.jsx
│   │   ├── ProductNav.jsx
│   │   ├── Quote.jsx
│   │   ├── SD300Commands.jsx
│   │   ├── SD300Footer.jsx
│   │   ├── SD300Hero.jsx
│   │   ├── SD300Install.jsx
│   │   ├── SD300Keybindings.jsx
│   │   ├── SD300Modes.jsx
│   │   ├── SD300Platform.jsx
│   │   ├── SD300Sections.jsx
│   │   ├── SampleOutput.jsx
│   │   ├── ShaughvOSCommands.jsx
│   │   ├── ShaughvOSFeatures.jsx
│   │   ├── ShaughvOSFooter.jsx
│   │   ├── ShaughvOSHardware.jsx
│   │   ├── ShaughvOSHero.jsx
│   │   ├── ShaughvOSInstall.jsx
│   │   ├── ShaughvOSOverview.jsx
│   │   └── ShaughvOSPitch.jsx
│   ├── hooks
│   │   ├── useGitHubVersion.js
│   │   └── useLatestRelease.js
│   ├── index.css
│   └── main.jsx
├── vercel.json
└── vite.config.js
```
