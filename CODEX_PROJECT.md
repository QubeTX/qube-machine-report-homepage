# Qube Machine Report Homepage Project Summary

## TL;DR

This is a React 18 + Vite marketing homepage for the QubeTX 300-series CLI tools and shaughvOS. Product pages are routed by pathname in `src/main.jsx`, with each top-level page composed from inline-styled React components under `src/components/`.

## Current Status

- **ND-300 v3.7.3 release alignment is live.** The ND-300 hero, install
  section, footer, and unified install guide all use 3.7.3 as their fallback
  when GitHub's live release API is unavailable; the fetched live release
  remains authoritative.
- **TR-300 v4.2.2 is the current verified release.** The root page now lists
  the complete manual-save contract (default/startup runs create no file), uses
  the real 51-column report shape, documents native cross-platform accuracy
  semantics and graceful unknowns, recommends versionless managed wrappers,
  offers the direct universal signed/notarized/stapled Mac PKG, and explains
  origin-preserving updates and fail-safe managed-Windows blocks without
  promising a policy bypass. The DMG is compatibility-only and not advertised.
- **Shaughv OS (`/shaughvos`) is temporarily delisted (WIP).** Its route remains live, but discoverable links stay commented out or de-linked and tagged `WIP-DELISTED`. SD-300 is listed again immediately after ND-300. See the "Temporarily delisted page" section in `CLAUDE.md` / `AGENTS.md` for the remaining Shaughv OS restore manifest.
- **Site composition:** routing is pathname-based in `src/main.jsx`; the nav is a module-level `products` array in `ProductNav.jsx` (rendered via each `*Hero.jsx`), and there is no shared footer — each page hardcodes its own inline `*Footer.jsx` link row (`Footer.jsx` is the TR-300/homepage one).
- Product pages prefer versionless CLI installer commands. SD-300 v2 advertises `sd300-cli-installer.{sh,ps1}` directly from GitHub's `releases/latest/download` endpoint; `public/install-sd300.*` remains only a thin compatibility redirect.
- SD-300 records managed CLI, MSI, EXE, or PKG ownership and its exact install path. `sd300 update` stays on that channel; `sd300 install` deliberately makes the managed CLI channel authoritative. Contradictory ownership evidence must stop before mutation.
- `sd300 uninstall` remains visible in the SD-300 Commands table and every platform install panel. It delegates to the proven owner and removes the product payload and owned setup state while preserving shared Cargo/Rust tooling.
- SD-300 v2 also surfaces stable `sd300-windows-x64-{global,corporate}.{msi,exe}` downloads and `sd300-macos-universal.pkg`. Legacy `tr300-tui-installer.*` / `SD300-installer.*` assets remain compatibility routers for old clients, not advertised install commands.
- Crates.io package names: `tr300` for TR-300, `nd300` for ND-300, `wb300` for WB-300, `tr300-tui` for SD-300 (binary still installs as `sd300`). Crates publishing is preserved upstream; the homepage no longer points users at `cargo install` because the prebuilt binary is faster and avoids the MSVC/rustup bootstrap.
- TR-300 keeps the versionless wrapper commands as the recommended install path on all three operating systems. `Install.jsx` also offers the direct universal Mac PKG and four Global/Corporate Windows MSI/EXE channels. CLI updates preserve the proven channel/edition/scope/path; a deliberately launched fresh official wrapper or native installer is authoritative user intent only when takeover is unambiguous and safe. The universal DMG remains an unadvertised compatibility bridge for older clients.
- ND-300 keeps the versionless wrapper commands as the recommended install path on all three operating systems. `ND300Install.jsx` also offers the direct signed/notarized/stapled universal Mac PKG and four Global/Corporate Windows MSI/EXE channels. Its update copy must preserve the contract that CLI updates reuse the proven channel while a deliberately launched different official installer records fresh intent when the scope transition is safe.
- The install guide (`/install-guide`) covers the separate **offline** flow from the unified Executables Hub bundle. Its current naming baseline is TR300 v4.2.2, ND300 v3.7.3, and SD300 v2 with stable public artifact names.
- Deployment is handled by Vercel Git integration. The repository's default remote branch is currently `main`. **This repo is public**, so every push to `main` is both a public commit and a production deploy — treat each commit as a public release and avoid blanket `git add -A` (exported `/export` transcripts and local dumps can leak private config; exported transcripts are gitignored).
- User branch wording preference: when the user says "push to main" or "push to master", treat it as "push to the repository's default branch". In this repository, that means `main`; do not create a `master` branch unless explicitly asked for a separate branch named `master`.
- No test framework is configured. Verification should use `npm run lint`, `npm run build`, and rendered browser inspection.
- `AGENTS.md`, `CLAUDE.md`, and `CODEX_PROJECT.md` provide internal agent guidance and must be kept aligned in the same commit when repository conventions change. The repo also keeps a plain-English `HUMAN_CHANGELOG.md` in lockstep with `CHANGELOG.md` — any changelog entry must be added to both, and `package.json` `version` is bumped in lockstep with the top `CHANGELOG.md` heading.
- Source-tool repos are resolved dynamically as `$HOME/git/<repo-name>` (e.g. `C:\Users\hey\git\qube-machine-report` on Windows) rather than a hardcoded absolute path, and all five are public so they're always readable from GitHub when no local clone exists.

## Project Goals

- Present each QubeTX tool with clear product positioning, commands, feature summaries, platform support, and installation instructions.
- Keep install and command content aligned with the corresponding source repositories when source state is relevant.
- Preserve the existing industrial terminal-inspired visual language: dark background, mono-font copy, neon magenta accent, inline styles, and tabbed terminal install blocks.

## Workspace File Tree

```text
.
├── .claude
│   ├── agents
│   │   └── product-page-accuracy-reviewer.md
│   ├── hooks
│   │   ├── doc-sync-reminder.mjs
│   │   └── lint-changed.mjs
│   ├── skills
│   │   ├── new-product-page
│   │   │   └── SKILL.md
│   │   └── sync-agent-docs
│   │       └── SKILL.md
│   └── settings.json
├── public
│   ├── install-nd300.ps1
│   ├── install-nd300.sh
│   ├── install-sd300.ps1
│   ├── install-sd300.sh
│   ├── install-wb300.ps1
│   ├── install-wb300.sh
│   ├── install.ps1
│   ├── install.sh
│   ├── shaughv-logo.svg
│   └── vite.svg
├── reference
│   ├── alternate-version.js
│   ├── main_version.js
│   └── tr300_documentation.md
├── src
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
│   │   ├── SampleOutput.jsx
│   │   ├── SD300Commands.jsx
│   │   ├── SD300Footer.jsx
│   │   ├── SD300Hero.jsx
│   │   ├── SD300Install.jsx
│   │   ├── SD300Keybindings.jsx
│   │   ├── SD300Modes.jsx
│   │   ├── SD300Platform.jsx
│   │   ├── SD300Sections.jsx
│   │   ├── ShaughvOSCommands.jsx
│   │   ├── ShaughvOSFeatures.jsx
│   │   ├── ShaughvOSFooter.jsx
│   │   ├── ShaughvOSHardware.jsx
│   │   ├── ShaughvOSHero.jsx
│   │   ├── ShaughvOSInstall.jsx
│   │   ├── ShaughvOSOverview.jsx
│   │   ├── ShaughvOSPitch.jsx
│   │   ├── WB300Commands.jsx
│   │   ├── WB300Diagnostics.jsx
│   │   ├── WB300Features.jsx
│   │   ├── WB300Footer.jsx
│   │   ├── WB300Hero.jsx
│   │   ├── WB300Install.jsx
│   │   ├── WB300Modes.jsx
│   │   └── WB300SampleOutput.jsx
│   ├── hooks
│   │   ├── useGitHubVersion.js
│   │   └── useLatestRelease.js
│   ├── App.jsx
│   ├── ExecutablesApp.jsx
│   ├── InstallGuideApp.jsx
│   ├── ND300App.jsx
│   ├── SD300App.jsx
│   ├── ShaughvOSApp.jsx
│   ├── WB300App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── AGENTS.md
├── CHANGELOG.md
├── CLAUDE.md
├── CODEX_PROJECT.md
├── HUMAN_CHANGELOG.md
├── LICENSE
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vercel.json
└── vite.config.js
```
