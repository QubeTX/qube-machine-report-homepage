# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run lint       # ESLint
```

No test framework is configured — there are no tests to run.

## Deployment

Push to `main` triggers automatic production deployment via Vercel Git integration. No Vercel CLI needed.

When the user says "push to main" or "push to master", interpret that as "push to the repository's default branch". For this repository, the default branch is `main`; do not create or push a new `master` branch unless the user explicitly asks for a separate branch named `master`.

SPA routing is handled by `vercel.json` which rewrites all paths to `/index.html`.

## Architecture

**Stack:** React 18 + Vite (plain JavaScript, no TypeScript). No state management library, no React Router.

**Routing:** Custom pathname-based routing in `src/main.jsx`. Each route maps to a top-level `*App.jsx` component:

| Route | Entry Component |
|-------|----------------|
| `/` | `App.jsx` (TR-300 Machine Report) |
| `/sd300` | `SD300App.jsx` |
| `/nd300` | `ND300App.jsx` |
| `/executables` | `ExecutablesApp.jsx` |
| `/install-guide` | `InstallGuideApp.jsx` |
| `/shaughvos` | `ShaughvOSApp.jsx` |

To add a new route: import the new App component in `main.jsx`, add a ternary branch to the `Page` const, and add a rewrite if needed (current `vercel.json` already catches all paths).

**Components:** All in `src/components/`. Prefixed by product (`SD300*`, `ND300*`, `ShaughvOS*`, `Executables*`, `InstallGuide*`). Unprefixed components belong to the TR-300 (root) page. `ProductNav.jsx` is the shared cross-product navigation bar.

**Hooks:** `src/hooks/useGitHubVersion.js` (generic — fetches latest release tag from any GitHub repo) and `useLatestRelease.js` (hardcoded to shaughvOS repo).

## Install Documentation Contract

All three products use the same **wrapper-script** install pattern. The homepage hosts a small shell/PowerShell wrapper under `public/install-<product>.{sh,ps1}` (TR-300 uses the unprefixed `public/install.{sh,ps1}` since the root domain is the TR-300 page). Each wrapper calls the upstream cargo-dist installer script — published with every product's GitHub release — which drops the prebuilt binary into `CARGO_HOME` (`~/.cargo/bin` on Unix, `%USERPROFILE%\.cargo\bin` on Windows). No Rust toolchain, no MSVC Build Tools, no admin. Each wrapper exits nonzero with a clear message if the binary isn't present after install.

### Install one-liners

| Product | Mac/Linux | Windows (PowerShell) |
|---------|-----------|----------------------|
| TR-300 | `curl -LsSf https://reports.qubetx.com/install.sh \| sh` | `irm https://reports.qubetx.com/install.ps1 \| iex` |
| SD-300 | `curl -LsSf https://reports.qubetx.com/install-sd300.sh \| sh` | `irm https://reports.qubetx.com/install-sd300.ps1 \| iex` |
| ND-300 | `curl -LsSf https://reports.qubetx.com/install-nd300.sh \| sh` | `irm https://reports.qubetx.com/install-nd300.ps1 \| iex` |

### Upstream cargo-dist asset names

| Product | GitHub repo | Asset names | Installed commands |
|---------|------------|------------|--------------------|
| TR-300 | `QubeTX/qube-machine-report` | `tr300-installer.{sh,ps1}` | `tr300` |
| SD-300 | `QubeTX/qube-system-diagnostics` | `SD300-installer.{sh,ps1}` (uppercase) | `sd300` (crates.io package is still `tr300-tui`) |
| ND-300 | `QubeTX/qube-network-diagnostics` | `nd-300-installer.{sh,ps1}` (hyphenated) | `nd300`, `speedqx` |

Asset URLs use `releases/latest/download/...` so wrappers auto-track new versions — no version pinning. SD-300 intentionally uses `tr300-tui` as the crates.io package name while keeping `sd300` as the user-facing binary; do not "fix" this to `cargo install sd300`.

**TR-300 only — chained `tr300 install`:** The TR-300 wrapper appends `"$HOME/.cargo/bin/tr300" install` (Unix) or `& "$env:USERPROFILE\.cargo\bin\tr300.exe" install` (PowerShell) after the cargo-dist call. This subcommand writes a shell-profile marker block that adds a `report` alias and auto-runs `tr300 --fast` on every new interactive shell. `tr300 install` is idempotent — the marker block is not duplicated on repeated runs. SD-300 and ND-300 wrappers don't chain it because their CLIs do not expose a self-install subcommand.

**TR-300 first-class Windows installers (.MSI / .EXE):** As of v3.15.0, TR-300 also ships four prebuilt Windows installers per release — Global MSI/EXE (`perMachine`, admin, installs to `C:\Program Files\tr300\bin\`) and Corporate MSI/EXE (`perUser`, no admin, installs to `%LocalAppData%\Programs\tr300\bin\`). They're surfaced as four magenta CTA buttons under the Windows tab in `Install.jsx`, grouped into a GLOBAL row and a CORPORATE row. Asset URLs use `https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-x86_64-pc-windows-msvc{,-corporate}{,-setup}.{msi,exe}`. When SD-300 and ND-300 begin shipping similar installers, they should gain the same four-button block — see the `DownloadButton` helper and installer-block grid layout in `src/components/Install.jsx`.

### Maintenance notes

- **Wrappers should stay tiny.** If a wrapper needs more than ~10 lines, push the complexity upstream into the cargo-dist installer or the product's own `<product> install` subcommand instead.
- **Keep error handling consistent.** All wrappers verify the installed binary exists after the cargo-dist call and exit nonzero with a clear message if not.
- **Don't reintroduce the MSVC Build Tools preflight.** It was a workaround for `cargo install <crate>` building from source on Windows. With the prebuilt cargo-dist binary, MSVC is irrelevant.

## Styling Conventions

- **All component styles are inline** (`style={{}}` objects). No CSS modules, no styled-components.
- **Hover states** use `useState` + `onMouseEnter`/`onMouseLeave` — not CSS `:hover`.
- **Global CSS** lives only in `src/index.css` (CSS variables, resets, keyframes, scrollbar, `.hide-on-mobile`).
- **Responsive typography** uses `clamp()` for fluid scaling.
- **Grid layouts** — CSS Grid is the primary layout tool, not flexbox (except for simple stacks).

### Design Tokens (CSS Variables)

| Variable | Value | Usage |
|----------|-------|-------|
| `--bg-void` | `#0a0a0a` | Page background |
| `--fg-bone` | `#dcdcdc` | Primary text |
| `--fg-dim` | `#666666` | Secondary/muted text |
| `--accent-signal` | `#ff00d4` | Neon magenta accent |
| `--font-display` | Archivo Black | Headings |
| `--font-serif` | Cormorant Garamond | Pull quotes |
| `--font-mono` | JetBrains Mono | Body text, code |

## Source Repositories

Each product page on this site markets a separate CLI tool / project. When updating features, commands, install instructions, or capabilities on a product page, **read the actual source repo** to ensure accuracy. All repos are accessible via GitHub (QubeTX org or RealEmmettS) and most are cloned locally.

| Product | GitHub Repo | Local Path |
|---------|------------|------------|
| TR-300 Machine Report | `QubeTX/qube-machine-report` | `/Users/realemmetts/Downloads/temp_git/qube-machine-report` |
| SD-300 System Diagnostic | `QubeTX/qube-system-diagnostics` | `/Users/realemmetts/Downloads/temp_git/qube-system-diagnostics` |
| ND-300 Network Diagnostic | `QubeTX/qube-network-diagnostics` | `/Users/realemmetts/Downloads/temp_git/qube-network-diagnostics` |
| Executables Download Hub | `QubeTX/qube-reports-executables` | *(not cloned locally)* |
| shaughvOS | `RealEmmettS/shaughvOS` | *(not cloned locally)* |

**Workflow for feature/content updates:** Read the source repo's README, CHANGELOG, and relevant source files before updating the corresponding product page here. Use the local clone when available; fall back to `gh` CLI or GitHub API for the executables repo.

## Key Libraries

- **framer-motion** — entrance animations (hero sections only)
- **lenis** — smooth scrolling with custom easing (initialized in each App component)
