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

**This repo is PUBLIC** — every push to `main` is both a public commit and an auto-deploy to production. Treat each commit as a public release: never `git add -A` blindly (exported `/export` transcripts and local dumps can leak private/global config), and prefer staging explicit paths. Exported conversation transcripts are gitignored.

When the user says "push to main" or "push to master", interpret that as "push to the repository's default branch". For this repository, the default branch is `main`; do not create or push a new `master` branch unless the user explicitly asks for a separate branch named `master`.

SPA routing is handled by `vercel.json` which rewrites all paths to `/index.html`.

## Temporarily delisted pages (WIP — SD-300 & Shaughv OS)

**Status (since 2026-06-14):** The **SD-300** (`/sd300`) and **Shaughv OS** (`/shaughvos`) pages are being reworked and must **not be marketed** yet. Both routes and all their components are fully intact — each page still renders if reached by direct URL — but every discoverable in-site link to them (the nav bar, all footers, and in-content cross-links) has been removed. Do **not** re-add links or otherwise re-market these two pages until the WIP updates are finished.

**⚠️ Standing reminder — while this section exists:** any time you update a product page in this repo, **remind Emmett that SD-300 and Shaughv OS still need to be finished and re-linked** so they can be marketed again. When they're ready, restore the links per the manifest below and delete this whole section.

**Restore manifest.** Every delisted spot keeps a greppable `WIP-DELISTED` comment that preserves the original markup — find them all with `grep -r "WIP-DELISTED" src/`:
- **Nav** — `src/components/ProductNav.jsx`: uncomment the `SD-300` and `SHAUGHVOS` entries in the `products` array (mirrors the earlier WB-300 hide).
- **Footers** — uncomment the SD-300 / SHAUGHVOS `<a>` entries (and the SD-300 `SizeBadge` where present) in `Footer.jsx`, `ND300Footer.jsx`, `WB300Footer.jsx`, `SD300Footer.jsx` (Shaughv OS link only), `ShaughvOSFooter.jsx`, `ExecutablesFooter.jsx` (badge + text row), and `InstallGuideFooter.jsx` (badge + text row, SD-300 only).
- **In-content** — `ExecutablesContent.jsx`: uncomment the SD-300 `GridCell` **and remove the `noBorder` that was added to the ND-300 cell** (it was a temporary last-cell border fix). In `Demos.jsx`, `ND300Features.jsx`, `SD300Platform.jsx`, and `ShaughvOSOverview.jsx`, re-wrap the de-linked `shaughvOS` / `SD-300` text in the anchor preserved in its adjacent comment.
- Routes in `src/main.jsx` and the `public/install-sd300.*` wrappers were intentionally left untouched.

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

**Components:** All in `src/components/`. Prefixed by product (`SD300*`, `ND300*`, `ShaughvOS*`, `Executables*`, `InstallGuide*`). Unprefixed components belong to the TR-300 (root) page. `ProductNav.jsx` is the shared nav — a module-level `products` array of `{ label, path }`, rendered inside each page's `*Hero.jsx`. There is **no shared footer**: each page has its own inline `*Footer.jsx` that hardcodes its own cross-product link row (`Footer.jsx` is the TR-300/homepage one), so cross-product link changes touch every footer individually.

**Hooks:** `src/hooks/useGitHubVersion.js` (generic — fetches latest release tag from any GitHub repo) and `useLatestRelease.js` (hardcoded to shaughvOS repo).

**Non-shipped files:** `reference/` holds working snapshots (`main_version.js`, `alternate-version.js`, `tr300_documentation.md`), not live code — don't import from it or mistake it for the running app.

## Install Documentation Contract

All four products use the same **wrapper-script** install pattern. The homepage hosts a small shell/PowerShell wrapper under `public/install-<product>.{sh,ps1}` (TR-300 uses the unprefixed `public/install.{sh,ps1}` since the root domain is the TR-300 page). Each wrapper calls the upstream cargo-dist installer script — published with every product's GitHub release — which drops the prebuilt binary into `CARGO_HOME` (`~/.cargo/bin` on Unix, `%USERPROFILE%\.cargo\bin` on Windows). No Rust toolchain, no MSVC Build Tools, no admin. The wrapper fails loudly if the binary isn't present after install.

### Install one-liners

| Product | Mac/Linux | Windows (PowerShell) |
|---------|-----------|----------------------|
| TR-300 | `curl -LsSf https://reports.qubetx.com/install.sh \| sh` | `powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install.ps1 \| iex"` |
| SD-300 | `curl -LsSf https://reports.qubetx.com/install-sd300.sh \| sh` | `powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install-sd300.ps1 \| iex"` |
| ND-300 | `curl -LsSf https://reports.qubetx.com/install-nd300.sh \| sh` | `powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install-nd300.ps1 \| iex"` |
| WB-300 | `curl -LsSf https://reports.qubetx.com/install-wb300.sh \| sh` | `powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install-wb300.ps1 \| iex"` |

Each command corresponds to a wrapper file in `public/` that is served directly by Vercel (filesystem matches run before the SPA rewrite in `vercel.json` — confirmed by the fact that `assets/index-*.js` and the other static assets already work). The Windows one-liner is shown wrapped in `powershell -ExecutionPolicy ByPass -c "irm ... | iex"` so it's copy-pasteable from any Windows context — `cmd.exe`, the Win+R Run dialog, or a shortcut target, not just an already-open `PS>` prompt — and `-ExecutionPolicy ByPass` lets it run regardless of the machine's script policy. (This reverses the earlier unwrapped form; if you scaffold a new product page, use the wrapped form to match.)

### Upstream cargo-dist asset names

| Product | GitHub repo | Asset names | Installed commands |
|---------|------------|------------|--------------------|
| TR-300 | `QubeTX/qube-machine-report` | `tr300-installer.{sh,ps1}` (canonical), `tr-300-installer.{sh,ps1}` (legacy alias) | `tr300` |
| SD-300 | `QubeTX/qube-system-diagnostics` | `SD300-installer.{sh,ps1}` (note uppercase) | `sd300` (crates.io package is still `tr300-tui`) |
| ND-300 | `QubeTX/qube-network-diagnostics` | `nd-300-installer.{sh,ps1}` (note hyphen) | `nd300`, `speedqx` |
| WB-300 | `QubeTX/qube-workbranch-view` | `wb300-installer.{sh,ps1}` | `wb300` |

All upstream URLs use `releases/latest/download/...` so wrappers auto-track new versions — no version pinning. SD-300 intentionally uses `tr300-tui` as the crates.io package name while keeping `sd300` as the user-facing binary; do not "fix" this to `cargo install sd300`.

### TR-300 only — chained `tr300 install`

TR-300's wrapper appends a second step after the cargo-dist call: `"$HOME/.cargo/bin/tr300" install` (Unix) or `& "$env:USERPROFILE\.cargo\bin\tr300.exe" install` (PowerShell). This subcommand writes a marker block to the user's shell profile that adds a `report` alias and auto-runs `tr300 --fast` on every new interactive shell. `tr300 install` is idempotent — the marker block is not duplicated on repeated runs. SD-300, ND-300, and WB-300 stop at the cargo-dist call because their CLIs do not expose a self-install subcommand.

### TR-300 — first-class Windows installers (`.MSI` / `.EXE`)

As of v3.15.0, TR-300 also publishes four first-class Windows installers on every GitHub release, surfaced as download buttons directly under the Windows install command in `Install.jsx`. They're an alternative to the wrapper for users who want a GUI install or a system-wide deployment:

| Variant | Asset name | Mode |
|---------|------------|------|
| Global MSI | `tr300-x86_64-pc-windows-msvc.msi` | `perMachine` — `C:\Program Files\tr300\bin\`, admin required |
| Global EXE | `tr300-x86_64-pc-windows-msvc-setup.exe` | `perMachine` — admin required |
| Corporate MSI | `tr300-x86_64-pc-windows-msvc-corporate.msi` | `perUser` — `%LocalAppData%\Programs\tr300\bin\`, no admin |
| Corporate EXE | `tr300-x86_64-pc-windows-msvc-corporate-setup.exe` | `perUser` — no admin |

URLs use the `https://github.com/QubeTX/qube-machine-report/releases/latest/download/<asset>` form. When SD-300 and ND-300 begin shipping MSI/EXE installers (same naming convention with `sd300` / `nd300` / `speedqx` substituted), they should gain the same four-button block (Global + Corporate, `.MSI` + `.EXE` each) under their terminal boxes. Reference implementation: the `DownloadButton` helper and installer-block layout in `src/components/Install.jsx`.

**TR-300 v4.0.1 accuracy/trust contract:** normal `tr300` / `report` runs and
the installed `tr300 --fast` startup summary only print to the terminal. A
Markdown file is created only by `tr300 -r`, `tr300 --report`, `report -s`, or
`report --save`. The current Apple Silicon and Intel archives are Developer ID
signed and Apple notarized before GitHub hosts them. If endpoint policy blocks
a Windows update staging write or installer launch, the updater retains the
working binary, exits with a diagnostic, and points to the matching manual
installer; never market this as bypassing antivirus or policy.

### Maintenance notes

- **Wrappers should stay tiny.** If a wrapper needs more than ~10 lines, you're probably reaching for the wrong tool — push the complexity upstream into the cargo-dist installer or into the product's own `<product> install` subcommand instead.
- **Keep error handling consistent.** All wrappers verify the installed binary exists after the cargo-dist call and exit nonzero with a clear message if not. Don't silently swallow installer failures.
- **Don't reintroduce the MSVC Build Tools preflight.** The whole point of the cargo-dist installer is that the binary is already compiled; preflighting MSVC was a workaround for `cargo install <crate>` building from source on Windows. With the prebuilt binary, MSVC is irrelevant.

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

Each product page on this site markets a separate CLI tool / project. When updating features, commands, install instructions, or capabilities on a product page, **read the actual source repo** to ensure accuracy. **All five repos are public**, so they're always reachable via `gh` / raw GitHub even when no local clone is present.

**Finding the local clone (resolve dynamically — survives new machines / re-wipes).** Clones live under a single `git/` directory in the home folder, named exactly after the repo (lowercase, via GitHub Desktop). So the path is `$HOME/git/<repo-name>` on macOS/Linux and `%USERPROFILE%\git\<repo-name>` (a.k.a. `$HOME\git\<repo-name>`) on Windows. Don't hardcode a full absolute path — derive it from `$HOME` + the repo name so it keeps working if the user gets a new machine:

```bash
# works on macOS, Linux, and Git Bash on Windows
repo=qube-machine-report
clone="$HOME/git/$repo"
if [ -d "$clone" ]; then echo "$clone"; else echo "no local clone — read from GitHub: QubeTX/$repo"; fi
```

| Product | GitHub Repo (public) | Repo dir name (under `~/git/`) |
|---------|---------------------|--------------------------------|
| TR-300 Machine Report | `QubeTX/qube-machine-report` | `qube-machine-report` |
| SD-300 System Diagnostic | `QubeTX/qube-system-diagnostics` | `qube-system-diagnostics` |
| ND-300 Network Diagnostic | `QubeTX/qube-network-diagnostics` | `qube-network-diagnostics` |
| Executables Download Hub | `QubeTX/qube-reports-executables` | *(usually not cloned — use GitHub)* |
| shaughvOS | `RealEmmettS/shaughvOS` | *(usually not cloned — use GitHub)* |

Verified current location on the Windows machine: `C:\Users\hey\git\<repo>` (i.e. `$HOME/git/<repo>`). Older docs referenced a macOS `~/Downloads/temp_git/<repo>` location; if `$HOME/git/<repo>` isn't present there as a legacy fallback, then read from GitHub.

**Workflow for feature/content updates:** Read the source repo's README, CHANGELOG, and relevant source files before updating the corresponding product page here. Prefer the local clone (`$HOME/git/<repo>`) when it exists; otherwise (always for the un-cloned executables hub and shaughvOS) read straight from the public repo with `gh` (e.g. `gh api repos/QubeTX/qube-machine-report/contents/README.md --jq '.content' | base64 -d`) or raw GitHub.

## Key Libraries

- **framer-motion** — entrance animations (hero sections only)
- **lenis** — smooth scrolling with custom easing (initialized in each App component)

## Agent docs (keep in sync)

This repo carries three overlapping agent-guidance files: `CLAUDE.md` (this file, for Claude Code), `AGENTS.md` (for Codex), and `CODEX_PROJECT.md` (project summary + canonical file tree). They share most of their content. **A convention change in one must be mirrored to the other two in the same commit** — they have drifted before. The `sync-agent-docs` skill (`.claude/skills/sync-agent-docs/`) automates this propagation.

## Changelog rule

This repo maintains two changelogs in parallel:

- `CHANGELOG.md` — the technical changelog (Keep a Changelog style). Version numbers, file references, and detail are welcome here.
- `HUMAN_CHANGELOG.md` — a plain-English companion. Every entry in `CHANGELOG.md` has a corresponding entry here, written for a non-engineer reader: no version numbers, no file paths, no jargon — just what changed and why it matters.

**When you update `CHANGELOG.md`, you must also update `HUMAN_CHANGELOG.md` in the same commit.** Translate each entry by stripping version numbers, file paths, function names, and metrics; replace jargon with everyday words; add a short "why it matters" clause where the effect isn't obvious. Use the labels Added / Improved / Fixed / Removed / Security / Behind the scenes. Purely internal changes still get a one-line "Behind the scenes" entry — the two files stay in lockstep.

The `package.json` `version` is kept in lockstep with the top `CHANGELOG.md` heading — bump both together (e.g. `1.10.0` → `1.11.0`) in the same commit.
