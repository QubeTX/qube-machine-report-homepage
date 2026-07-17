# Qube Machine Report Homepage Project Summary

## TL;DR

This is a React 18 + Vite marketing homepage for the QubeTX 300-series CLI tools and shaughvOS. Product pages are routed by pathname in `src/main.jsx`, with each top-level page composed from inline-styled React components under `src/components/`.

## Current Status

- **ND-300 v3.6.1 release alignment is prepared.** The ND-300 hero, install
  section, footer, and unified install guide all use 3.6.1 as their fallback
  when GitHub's live release API is unavailable; the fetched live release
  remains authoritative.
- **TR-300 v4.0.1 is the current verified release.** The root page now lists
  the complete manual-save contract (default/startup runs create no file), uses
  the real 51-column report shape, documents native cross-platform accuracy
  semantics and graceful unknowns, identifies both Mac architectures as
  Developer ID signed/Apple notarized, and explains fail-safe managed-Windows
  update blocks without promising a policy bypass.
- **SD-300 (`/sd300`) and Shaughv OS (`/shaughvos`) are temporarily delisted (WIP).** Both routes/pages remain live and render by direct URL, but every nav, footer, and in-content link to them has been commented out / de-linked (each tagged `WIP-DELISTED`; restore via `grep -r "WIP-DELISTED" src/`). They must not be re-marketed until their WIP updates land, and while this holds, any product-page update should prompt a reminder to finish and re-link both. See the "Temporarily delisted pages" section in `CLAUDE.md` / `AGENTS.md` for the full restore manifest.
- **Site composition:** routing is pathname-based in `src/main.jsx`; the nav is a module-level `products` array in `ProductNav.jsx` (rendered via each `*Hero.jsx`), and there is no shared footer — each page hardcodes its own inline `*Footer.jsx` link row (`Footer.jsx` is the TR-300/homepage one).
- TR-300, ND-300, SD-300, and WB-300 product install sections all use the same **wrapper-script** one-liner pattern: `curl -LsSf https://reports.qubetx.com/install-<product>.sh | sh` on Mac/Linux and `powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install-<product>.ps1 | iex"` on Windows (wrapped in `powershell -ExecutionPolicy ByPass -c "..."` so it pastes into any Windows shell, not just an open PowerShell prompt). TR-300 uses the unprefixed `install.{sh,ps1}` filenames since the root domain is the TR-300 page.
- The wrappers live in `public/install*.{sh,ps1}` and are served as static files by Vercel. Each wrapper calls the upstream cargo-dist installer script published with every product's GitHub release, which drops the prebuilt binary into `CARGO_HOME` (`~/.cargo/bin` on Unix, `%USERPROFILE%\.cargo\bin` on Windows). No Rust toolchain, no MSVC Build Tools, no admin/sudo. Wrappers exit nonzero with a clear message if the installed binary isn't present after the cargo-dist call.
- TR-300's wrapper additionally chains `tr300 install` after the cargo-dist call. That subcommand writes a shell-profile marker block adding a `report` alias and configuring `tr300 --fast` to auto-run on every new interactive shell. SD-300, ND-300, and WB-300 wrappers don't chain it — their CLIs have no self-install subcommand.
- Upstream cargo-dist asset names are not uniform: TR-300 publishes `tr300-installer.{sh,ps1}`; SD-300 publishes `SD300-installer.{sh,ps1}` (uppercase); ND-300 publishes `nd-300-installer.{sh,ps1}` (hyphenated); WB-300 publishes `wb300-installer.{sh,ps1}`. The wrappers reference the correct upstream name per product.
- Crates.io package names: `tr300` for TR-300, `nd300` for ND-300, `wb300` for WB-300, `tr300-tui` for SD-300 (binary still installs as `sd300`). Crates publishing is preserved upstream; the homepage no longer points users at `cargo install` because the prebuilt binary is faster and avoids the MSVC/rustup bootstrap.
- TR-300 also ships four first-class Windows installers per release (Global MSI/EXE, Corporate MSI/EXE) and surfaces them as four magenta CTA buttons under the Windows tab in `Install.jsx`. They're the GUI alternative to the wrapper-script command line — same prebuilt binary, packaged for double-click.
- The install guide (`/install-guide`) covers the separate **offline** download-and-extract flow from the unified Executables Hub bundle — distinct from the wrapper-script online install. It was last refreshed to TR300 v3.14.3, ND300 v3.0.7, SD300 v1.4.3 naming.
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
