# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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

Product install sections must stay Cargo-first across macOS, Linux, and Windows. Each platform one-liner should install rustup/Rust when needed, load Cargo's bin directory into the current terminal `PATH`, run `rustup update stable`, then install the matching crates.io package.

| Product | Cargo package | Installed command | Update command |
|---------|---------------|-------------------|----------------|
| TR-300 | `tr300` | `tr300` | `tr300 update` |
| ND-300 | `nd300` | `nd300`, `speedqx` | `nd300 update`, `speedqx update` |
| SD-300 | `tr300-tui` | `sd300` | `sd300 update` |

SD-300 intentionally uses `tr300-tui` as the crates.io package name while keeping `sd300` as the user-facing binary. Do not change SD-300 docs or install commands to `cargo install sd300` or `cargo install sd-300`. Each platform's one-liner must also be accompanied by a per-platform admin/sudo guidance note: Windows users must run an elevated PowerShell or CMD before pasting the command; macOS users without administrator rights should prefix the command with `sudo`. Linux requires no such note.

**TR-300 only — chained `tr300 install`:** The TR-300 one-liner appends `&& tr300 install` (Unix) or `; tr300 install` (Windows PowerShell) after `cargo install tr300`. This subcommand writes a shell-profile marker block that adds a `report` alias and auto-runs `tr300 --fast` on every new interactive shell. `tr300 install` is idempotent — the marker block is not duplicated on repeated runs. SD-300 and ND-300 stop at `cargo install` because their CLIs do not expose a self-install subcommand.

**Windows MSVC Build Tools preflight (all three products):** Every Windows one-liner must begin with an MSVC Build Tools preflight, because Rust's default `x86_64-pc-windows-msvc` toolchain requires the C++ linker (`link.exe`) and a Windows SDK — without them `cargo install` fails on fresh Windows machines with the error users mistake for "needing VS Code". The preflight:

1. Detects existing component `Microsoft.VisualStudio.Component.VC.Tools.x86.x64` via `vswhere.exe` at `${env:ProgramFiles(x86)}\Microsoft Visual Studio\Installer\vswhere.exe`. The `-products *` flag is required to match the Build Tools SKU (the default search omits it).
2. If missing, silently installs the `Microsoft.VisualStudio.Workload.VCTools` workload via `winget install --id Microsoft.VisualStudio.2022.BuildTools --override "--quiet --wait --norestart --nocache --add Microsoft.VisualStudio.Workload.VCTools --includeRecommended"`. The `--wait` and `--override` are both required — without `--override` winget installs only the VS core (no workload); without `--wait` winget exits before the inner VS installer completes.
3. Falls back to downloading `vs_buildtools.exe` from `https://aka.ms/vs/17/release/vs_buildtools.exe` and running with the same silent flags via `Start-Process -Wait` for older Win10 builds where `winget` isn't present.

Keep the preflight snippet **byte-identical** across `Install.jsx`, `SD300Install.jsx`, and `ND300Install.jsx` so future changes can be applied uniformly with `replace_all`. Reflect the ~2–5 GB / multi-minute first-run cost in the Windows `note`. Do not switch the default toolchain to `x86_64-pc-windows-gnu` to avoid this — many crates still need MSYS2/MinGW for C deps and Windows-native interop is worse.

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
