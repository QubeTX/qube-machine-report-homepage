# Qube Machine Report Homepage Project Summary

TR-300 v4.4.0 installs `tr300` and `report` together. Both names accept all reporting options and install/update/uninstall actions. `tr300 install` configures optional shell startup output and retires the legacy TR-300-owned profile alias; the packaged `report` command does not depend on a profile.

## TL;DR

This is a React 18 + Vite marketing homepage for the QubeTX 300-series CLI tools. Product pages are routed by pathname in `src/main.jsx`, with each top-level page composed from inline-styled React components under `src/components/`.

## Current Status

- The canceled operating-system page and marketing copy have been removed; its old URL permanently redirects home through `vercel.json`. Do not restore the retired page or links.
- Shared monospace typography uses Paper Mono from the canonical CDN.

- Product badges use the latest GitHub release when available. Documentation and offline downloads record their exact release snapshot separately.
- **TR-300 retains its explicit-save and installation contracts.** The root page now lists
  the complete manual-save contract (default/startup runs create no file), uses
  the real 51-column report shape, documents native cross-platform accuracy
  semantics and graceful unknowns, recommends versionless managed wrappers,
  offers the direct universal signed/notarized/stapled Mac PKG, and explains
  origin-preserving updates and fail-safe managed-Windows blocks without
  promising a policy bypass. The DMG is compatibility-only and not advertised.
- **Site composition:** routing is pathname-based in `src/main.jsx`; the nav is a module-level `products` array in `ProductNav.jsx` (rendered via each `*Hero.jsx`), and all page-specific `*Footer.jsx` wrappers use `SiteFooter.jsx` for the shared SHAUGHV wordmark/crest lockup and product/resource navigation. Wrappers retain page-specific version badges, repository, status, and attribution. Brand assets load from the canonical CDN; footer typography uses the existing site tokens.
- Product pages prefer versionless CLI installer commands. SD-300 v2 advertises `sd300-cli-installer.{sh,ps1}` directly from GitHub's `releases/latest/download` endpoint; `public/install-sd300.*` remains only a thin compatibility redirect.
- SD-300 records managed CLI, MSI, EXE, or PKG ownership and its exact install path. `sd300 update` stays on that channel; `sd300 install` deliberately makes the managed CLI channel authoritative. Contradictory ownership evidence must stop before mutation.
- `sd300 uninstall` remains visible in the SD-300 Commands table and every platform install panel. It delegates to the proven owner and removes the product payload and owned setup state while preserving shared Cargo/Rust tooling.
- SD-300 v2 also surfaces stable `sd300-windows-x64-{global,corporate}.{msi,exe}` downloads and `sd300-macos-universal.pkg`. Legacy `tr300-tui-installer.*` / `SD300-installer.*` assets remain compatibility routers for old clients, not advertised install commands.
- Crates.io package names: `tr300` for TR-300, `nd300` for ND-300, `tr300-tui` for SD-300 (binary still installs as `sd300`). Crates publishing is preserved upstream; the homepage no longer points users at `cargo install` because the prebuilt binary is faster and avoids the MSVC/rustup bootstrap.
- TR-300 keeps the versionless wrapper commands as the recommended install path on all three operating systems. `Install.jsx` also offers the direct universal Mac PKG and four Global/Corporate Windows MSI/EXE channels. CLI updates preserve the proven channel/edition/scope/path; a deliberately launched fresh official wrapper or native installer is authoritative user intent only when takeover is unambiguous and safe. The universal DMG remains an unadvertised compatibility bridge for older clients.
- ND-300 keeps the versionless wrapper commands as the recommended install path on all three operating systems. `ND300Install.jsx` also offers the direct signed/notarized/stapled universal Mac PKG and four Global/Corporate Windows MSI/EXE channels. Its update copy must preserve the contract that CLI updates reuse the proven channel while a deliberately launched different official installer records fresh intent when the scope transition is safe.
- Deployment is handled by Vercel Git integration. The repository's default remote branch is currently `main`. **This repo is public**, so every push to `main` is both a public commit and a production deploy — treat each commit as a public release and avoid blanket `git add -A` (exported `/export` transcripts and local dumps can leak private config; exported transcripts are gitignored).
- User branch wording preference: when the user says "push to main" or "push to master", treat it as "push to the repository's default branch". In this repository, that means `main`; do not create a `master` branch unless explicitly asked for a separate branch named `master`.
- No test framework is configured. Verification should use `npm run lint`, `npm run build`, and rendered browser inspection.
- `AGENTS.md`, `CLAUDE.md`, and `CODEX_PROJECT.md` provide internal agent guidance and must be kept aligned in the same commit when repository conventions change. The repo also keeps a plain-English `HUMAN_CHANGELOG.md` in lockstep with `CHANGELOG.md` — any changelog entry must be added to both, and `package.json` `version` is bumped in lockstep with the top `CHANGELOG.md` heading.
- Source-tool repos are resolved dynamically as `$HOME/git/<repo-name>` (e.g. `C:\Users\hey\git\qube-machine-report` on Windows) rather than a hardcoded absolute path, and all source repos are public so they're always readable from GitHub when no local clone exists.

## Project Goals

- Present each QubeTX tool with clear product positioning, commands, feature summaries, platform support, and installation instructions.
- Keep install and command content aligned with the corresponding source repositories when source state is relevant.
- Preserve the existing industrial terminal-inspired visual language: dark background, mono-font copy, neon magenta accent, inline styles, and tabbed terminal install blocks.
- Marketing typography uses Archivo Black for display headings, CDN-hosted Michelangelus for serif subtitles, descriptions, and quotes, and Paper Mono for body text and code. Load Michelangelus through its canonical CDN stylesheet; preserve its supplied regular and italic faces.

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
│   │   ├── BackToTopButton.jsx
│   │   ├── Commands.jsx
│   │   ├── Demos.jsx
│   │   ├── ExecutablesContent.jsx
│   │   ├── ExecutablesFooter.jsx
│   │   ├── ExecutablesHero.jsx
│   │   ├── Features.jsx
│   │   ├── SiteFooter.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Install.jsx
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
│   │   ├── SD300Desktop.jsx
│   │   ├── SD300Footer.jsx
│   │   ├── SD300Hero.jsx
│   │   ├── SD300Install.jsx
│   │   ├── SD300Keybindings.jsx
│   │   ├── SD300Modes.jsx
│   │   ├── SD300Platform.jsx
│   │   ├── SD300Sections.jsx
│   ├── hooks
│   │   ├── useGitHubVersion.js
│   │   └── useInstallPlatform.js
│   ├── App.jsx
│   ├── ExecutablesApp.jsx
│   ├── ND300App.jsx
│   ├── SD300App.jsx
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

## Installation-tab defaults

All desktop-product installation selectors use `src/hooks/useInstallPlatform.js`
to suggest the current desktop OS synchronously on first render. Keep detection
shared, leave mobile/unknown clients on the existing default, and never override
a visitor's manual selection during the mounted page session. Do not require
storage, permission prompts or remote lookups for this default.

The three product pages share `ProductInstall.jsx`: installer/downloads on the
left and usage guidance on the right at desktop widths, stacked on narrow
screens. Keep essential commands visible and longer setup/upgrade/source
material in native disclosure sections; do not shrink text to fit a viewport.

## Documentation and offline downloads

The active products are TR-300, ND-300 (including SpeedQX), and SD-300. Retired product URLs redirect home and must not be marketed or bundled. Retired installer wrapper URLs are non-mutating error tombstones, so old commands cannot accidentally execute SPA HTML.

`docs-site/` is an independent Blume 2.2.3 package (Astro/React 19), isolated from the React 18 marketing app. Install both lockfiles with `npm ci` and `npm ci --prefix docs-site`; Node 22.19+ is required. `npm run build` builds Vite, builds Blume, then copies static documentation into `dist/docs`. Vercel rewrites only known marketing routes; never restore a catch-all that swallows documentation, search data, or assets. `/install-guide` permanently redirects to `/docs#choose-a-tool`.

Documentation content is Markdown under `docs-site/content/`, with typed Blume config and folder metadata. `docs-site/theme.css` is the deliberate exception to marketing inline-style conventions; code uses canonical CDN Paper Mono. Use `npm run validate --prefix docs-site` and rendered desktop/mobile navigation and search checks when editing docs. Follow the framework's base-path handling: internal content links start at the documentation root, and `deployment.base` adds `/docs`.

Each tool follows Overview, Installation, Commands, Basic use cases, Advanced use cases, then focused guides. Keep introductions about purpose and reader tasks. Define necessary technical terms, explain the expected result of examples, and place relevant data-use, privacy, file-overwrite, and system-change details before the action. Keep exact commands and release limits accurate when simplifying prose.

Check commands and claims against published source tags and CLI help, and record the exact versions in `/docs/sources`. The October 11, 2026 snapshot covers TR-300 4.4.0, ND-300 4.0.1, and SD-300 4.1.0. Online installers remain versionless. Offline downloads point at `QubeTX/qube-reports-executables/releases/latest/download/qubetx-offline-bundle.zip`; the ZIP is a curated, checksummed snapshot containing matching docs and a local start page. Keep the displayed bundle versions pinned to its manifest rather than live product API results. Native installation and hardware acceptance remain distinct from checksum/help/build verification.

Installation documentation belongs inside each tool at `/docs/tr300/installation`, `/docs/nd300/installation`, and `/docs/sd300/installation`. Keep platform setup, offline instructions, updates, and removal with that tool; do not add a standalone Installation navigation group. Legacy shared installation URLs redirect to the documentation tool chooser.
