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

**This repo is PUBLIC** — every push to `main` is both a public commit and an auto-deploy to production. Treat each commit as a public release: never `git add -A` blindly (exported `/export` transcripts and local dumps can leak private/global config), and prefer staging explicit paths. Exported conversation transcripts are gitignored.

When the user says "push to main" or "push to master", interpret that as "push to the repository's default branch". For this repository, the default branch is `main`; do not create or push a new `master` branch unless the user explicitly asks for a separate branch named `master`.

SPA routing is handled by explicit marketing-route rewrites in `vercel.json`; documentation is served as static files under `/docs`.

## Retired route

The canceled operating-system product page and its marketing copy have been removed. `vercel.json` permanently redirects its old URL to the homepage. Do not restore the retired page or its links.

## Architecture

**Stack:** React 18 + Vite (plain JavaScript, no TypeScript). No state management library, no React Router.

**Routing:** Custom pathname-based routing in `src/main.jsx`. Each route maps to a top-level `*App.jsx` component:

| Route | Entry Component |
|-------|----------------|
| `/` | `App.jsx` (TR-300 Machine Report) |
| `/sd300` | `SD300App.jsx` |
| `/nd300` | `ND300App.jsx` |
| `/executables` | `ExecutablesApp.jsx` |
| `/docs` and descendants | Static Blume documentation (`docs-site/`) |
| `/install-guide` | Redirect to `/docs#choose-a-tool` |

To add a new route: import the new App component in `main.jsx`, add a ternary branch to the `Page` const, and add an explicit marketing-route rewrite to `vercel.json`.

**Components:** All in `src/components/`. Prefixed by product (`SD300*`, `ND300*`, `Executables*`). Unprefixed components belong to the TR-300 (root) page. `ProductNav.jsx` is the shared nav — a module-level `products` array of `{ label, path }`, rendered inside each page's `*Hero.jsx`. All page-specific `*Footer.jsx` components use `SiteFooter.jsx` for the shared SHAUGHV wordmark/crest lockup and product/resource navigation. Page wrappers retain their own version badges, repository, status, and attribution. Update shared footer links in `SiteFooter.jsx`. Brand assets load from the canonical CDN and retain their natural proportions; footer typography uses the existing site tokens.

**Hooks:** `src/hooks/useGitHubVersion.js` (generic — fetches latest release tag from any GitHub repo).

TR-300 v4.4.0 installs `tr300` and `report` together. Both names accept all reporting options and install/update/uninstall actions. `tr300 install` configures optional shell startup output and retires the legacy TR-300-owned profile alias; the packaged `report` command does not depend on a profile.

## Install Documentation Contract

Product pages prefer a versionless CLI installer command. The homepage keeps tiny redirects under `public/install-<product>.{sh,ps1}` for compatibility, while SD-300 v2 advertises its upstream ownership-aware installer directly. SD-300 records its exact install path and channel so `sd300 update` can reuse managed CLI, MSI, EXE, or PKG ownership without switching formats.

### Install one-liners

| Product | Mac/Linux | Windows (PowerShell) |
|---------|-----------|----------------------|
| TR-300 | `curl -LsSf https://reports.qubetx.com/install.sh \| sh` | `powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install.ps1 \| iex"` |
| ND-300 | `curl -LsSf https://reports.qubetx.com/install-nd300.sh \| sh` | `powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install-nd300.ps1 \| iex"` |
| SD-300 | `curl --proto '=https' --tlsv1.2 -LsSf https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-cli-installer.sh \| sh` | `irm https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-cli-installer.ps1 \| iex` |

### Upstream cargo-dist asset names

| Product | GitHub repo | Asset names | Installed commands |
|---------|------------|------------|--------------------|
| TR-300 | `QubeTX/qube-machine-report` | `tr300-installer.{sh,ps1}` (canonical), `tr-300-installer.{sh,ps1}` (legacy updater alias) | `tr300`, `report` |
| ND-300 | `QubeTX/qube-network-diagnostics` | `nd-300-installer.{sh,ps1}` (hyphenated) | `nd300`, `speedqx` |
| SD-300 | `QubeTX/qube-system-diagnostics` | `sd300-cli-installer.{sh,ps1}`; legacy updater routers remain `tr300-tui-installer.*` / `SD300-installer.*` | `sd300` (crates.io package is still `tr300-tui`) |

Asset URLs use `releases/latest/download/...` so wrappers auto-track new versions — no version pinning. SD-300 intentionally uses `tr300-tui` as the crates.io package name while keeping `sd300` as the user-facing binary; do not "fix" this to `cargo install sd300`.

**Product install subcommands:** TR-300's wrapper chains `tr300 install` to configure its shell-profile integration. SD-300 exposes `sd300 install`, but the advertised upstream wrapper already performs the same managed-channel installation, receipt verification, and native takeover; the website redirect must not invoke it a second time. ND-300 has no equivalent self-install command.

**TR-300 command-first and native installer channels:** Keep the versionless
wrapper commands as the recommended macOS/Linux/Windows path. The Mac native
option is the direct signed/notarized/stapled universal
`tr300-universal-apple-darwin.pkg`; the universal DMG remains published only as
a compatibility bridge for older updater clients and must not be advertised as
the preferred download. Windows native options are Global MSI/EXE (`perMachine`,
admin, `C:\Program Files\tr300\bin\`) and Corporate MSI/EXE (`perUser`, no
admin, `%LocalAppData%\Programs\tr300\bin\`). All public buttons and commands
use stable `releases/latest/download/...` names rather than embedding versions.

**TR-300 install/update intent contract:** `tr300 update` preserves the proven
channel, edition, scope, and path. A deliberately launched fresh official
wrapper, PKG, MSI, or EXE is authoritative user intent, including a reinstall
or downgrade, only when ownership/takeover is unambiguous and safe. Ambiguous,
conflicting, or policy-blocked transitions retain the working install and show
immutable plus latest recovery links; copy must never imply a silent
cross-channel fallback.

**ND-300 command-first and native installer channels:** Keep the versionless wrapper commands as the recommended macOS/Linux/Windows path. The Mac native option is the direct signed/notarized/stapled universal `nd300-universal-apple-darwin.pkg`, not the legacy compatibility DMG. Windows native options are the four Global/Corporate MSI/EXE assets already surfaced in `ND300Install.jsx`. Copy must state that CLI updates preserve a proven channel and that a deliberately launched different official installer represents fresh intent when the scope transition is safe.

**SD-300 command-first and native installer channels:** SD-300 v2 publishes versionless `sd300-windows-x64-{global,corporate}.{msi,exe}` assets plus one universal `sd300-macos-universal.pkg`; `SD300Install.jsx` surfaces them below the preferred CLI command. A later `sd300 update` must redownload and execute the same recorded installer channel. A deliberately launched fresh official installer is authoritative, including over another format or version, but must fail before mutation when ownership evidence is contradictory. SD-300 v3 adds a native desktop app installed alongside the CLI as one product (installed/updated/uninstalled together, each usable independently); the page markets it in `SD300Desktop.jsx` and `SD300Commands.jsx` lists `sd300 gui` and `sd300 install`. Uninstall stays CLI-only.

**SD-300 uninstall contract:** Keep `sd300 uninstall` in both the Commands table and every platform's install panel. It delegates to the proven managed, Cargo, MSI, EXE, or PKG owner and removes SD-300 payloads, receipts/registrations, markers, and product-owned PATH entries while preserving shared Cargo/Rust tooling.

**TR-300 v4.2.2 accuracy/trust contract:** normal `tr300` / `report` runs and
the installed `tr300 --fast` startup summary only print to the terminal. A
Markdown file is created only by `tr300 -r`, `tr300 --report`, `report -s`, or
`report --save`. The current Apple Silicon and Intel archives are Developer ID
signed and Apple notarized before GitHub hosts them. If endpoint policy blocks
a Windows update staging write or installer launch, the updater retains the
working binary, exits with a diagnostic, and points to the matching manual
installer; never market this as bypassing antivirus or policy.

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
| `--fg-dim` | `#999999` | Secondary/muted text |
| `--accent-signal` | `#ff00d4` | Neon magenta accent |
| `--font-display` | Archivo Black | Headings |
| `--font-serif` | Michelangelus (canonical CDN stylesheet) | Short expressive introductions |
| `--font-body` | Makira (canonical CDN stylesheet) | Practical copy and interface text |
| `--font-mono` | Paper Mono | Commands, technical labels, data |

## Source Repositories

Each product page on this site markets a separate CLI tool / project. When updating features, commands, install instructions, or capabilities on a product page, **read the actual source repo** to ensure accuracy. **All source repos are public**, so they're always reachable via `gh` / raw GitHub even when no local clone is present.

**Finding the local clone (resolve dynamically — survives new machines / re-wipes).** Clones live under a single `git/` directory in the home folder, named exactly after the repo (lowercase, via GitHub Desktop). So the path is `$HOME/git/<repo-name>` on macOS/Linux and `%USERPROFILE%\git\<repo-name>` (a.k.a. `$HOME\git\<repo-name>`) on Windows. Don't hardcode a full absolute path — derive it from `$HOME` + the repo name:

```bash
# works on macOS, Linux, and Git Bash on Windows
repo=qube-machine-report
clone="$HOME/git/$repo"
if [ -d "$clone" ]; then echo "$clone"; else echo "no local clone — read from GitHub: QubeTX/$repo"; fi
```

| Product | GitHub Repo (public) | Repo dir name (under `~/git/`) |
|---------|---------------------|--------------------------------|
| TR-300 Machine Report | `QubeTX/qube-machine-report` | `qube-machine-report` |
| ND-300 Network Diagnostic | `QubeTX/qube-network-diagnostics` | `qube-network-diagnostics` |
| SD-300 System Diagnostic | `QubeTX/qube-system-diagnostics` | `qube-system-diagnostics` |
| Executables Download Hub | `QubeTX/qube-reports-executables` | *(usually not cloned — use GitHub)* |

Verified current location on the Windows machine: `C:\Users\hey\git\<repo>` (i.e. `$HOME/git/<repo>`). Older docs referenced a macOS `~/Downloads/temp_git/<repo>` location; treat that only as a legacy fallback, then read from GitHub.

**Workflow for feature/content updates:** Read the source repo's README, CHANGELOG, and relevant source files before updating the corresponding product page here. Prefer the local clone (`$HOME/git/<repo>`) when it exists; otherwise (always for the un-cloned executables hub) read straight from the public repo with `gh` (e.g. `gh api repos/QubeTX/qube-machine-report/contents/README.md --jq '.content' | base64 -d`) or raw GitHub.

## Key Libraries

- **framer-motion** — entrance animations (hero sections only)
- **lenis** — smooth scrolling with custom easing (initialized in each App component)

## Agent docs (keep in sync)

This repo carries three overlapping agent-guidance files: `AGENTS.md` (this file, for Codex), `CLAUDE.md` (for Claude Code), and `CODEX_PROJECT.md` (project summary + canonical file tree). They share most of their content. **A convention change in one must be mirrored to the other two in the same commit** — they have drifted before.

## Changelog rule

This repo maintains two changelogs in parallel:

- `CHANGELOG.md` — the technical changelog (Keep a Changelog style). Version numbers, file references, and detail are welcome here.
- `HUMAN_CHANGELOG.md` — a plain-English companion. Every entry in `CHANGELOG.md` has a corresponding entry here, written for a non-engineer reader: no version numbers, no file paths, no jargon — just what changed and why it matters.

**When you update `CHANGELOG.md`, you must also update `HUMAN_CHANGELOG.md` in the same commit.** Strip version numbers, file paths, function names, and metrics; replace jargon with everyday words; add a short "why it matters" clause. Use the labels Added / Improved / Fixed / Removed / Security / Behind the scenes. Purely internal changes still get a one-line "Behind the scenes" entry.

The `package.json` `version` is kept in lockstep with the top `CHANGELOG.md` heading — bump both together (e.g. `1.10.0` → `1.11.0`) in the same commit.

## Installation-tab defaults

All desktop-product installation selectors use `src/hooks/useInstallPlatform.js`
to suggest the current desktop OS synchronously on first render. Keep detection
shared, leave mobile/unknown clients on the existing default, and never override
a visitor's manual selection during the mounted page session. Do not require
storage, permission prompts or remote lookups for this default.

The three product pages share `ProductInstall.jsx`, with separate `firstRun`
and `maintenance` render props. Desktop rows pair the recommended command with
first use, then native alternatives with maintenance. Mobile follows that same
reading order. Keep OS and native installer choices visible. Use concise visible
caveats and direct links to the per-tool guides for deeper reference; do not add
disclosures or shrink text to fit a viewport.

Product heroes share `ProductHero.jsx`: product art, a short serif introduction,
installation and documentation actions together, and one current-release link.
`useSmoothScroll.js` preserves Lenis scrolling while respecting reduced motion
and cancelling its animation frame on cleanup. Marketing pages have a skip link,
a main landmark, and native anchors for section navigation. Shared foundations
include visible keyboard focus and at least 44px control targets. Below 768px,
`ProductNav.jsx` uses a custom animated hamburger disclosure with a morphing
icon, staggered links, outside-click dismissal, Escape/focus handling, and a
reduced-motion alternative. Desktop links remain directly visible.

## Documentation and offline downloads

The active products are TR-300, ND-300 (including SpeedQX), and SD-300. Retired product URLs redirect home and must not be marketed or bundled. Retired installer wrapper URLs are non-mutating error tombstones, so old commands cannot accidentally execute SPA HTML.

`docs-site/` is an independent Blume 2.2.3 package (Astro/React 19), isolated from the React 18 marketing app. Install both lockfiles with `npm ci` and `npm ci --prefix docs-site`; Node 22.19+ is required. `npm run build` builds Vite, builds Blume, then copies static documentation into `dist/docs`. Vercel rewrites only known marketing routes; never restore a catch-all that swallows documentation, search data, or assets. `/install-guide` permanently redirects to `/docs#choose-a-tool`.

Documentation content is Markdown/MDX under `docs-site/content/`, with typed Blume config and folder metadata. `docs-site/theme.css` is the deliberate exception to marketing inline-style conventions; body and headings use Makira and code uses Paper Mono, all from the canonical CDN. Because Blume appends theme.css after generated CSS, use remote canonical font-face URLs there rather than late CSS imports. Use `npm run validate --prefix docs-site` and rendered desktop/mobile navigation and search checks when editing docs. Follow the framework's base-path handling: internal content links start at the documentation root, and `deployment.base` adds `/docs`.

Each tool follows Overview, Installation, Commands, Basic use cases, Advanced use cases, then focused guides. Keep introductions about purpose and reader tasks. Define necessary technical terms, explain the expected result of examples, and place relevant data-use, privacy, file-overwrite, and system-change details before the action. Keep exact commands and release limits accurate when simplifying prose.

Check commands and claims against published source tags and CLI help, and record the exact versions in `/docs/sources`. The October 11, 2026 snapshot covers TR-300 4.4.0, ND-300 4.0.1, and SD-300 4.1.0. Online installers remain versionless. Offline downloads point at `QubeTX/qube-reports-executables/releases/latest/download/qubetx-offline-bundle.zip`; the ZIP is a curated, checksummed snapshot containing matching docs and a local start page. Keep the displayed bundle versions pinned to its manifest rather than live product API results. Native installation and hardware acceptance remain distinct from checksum/help/build verification.

Installation documentation belongs inside each tool at `/docs/tr300/installation`, `/docs/nd300/installation`, and `/docs/sd300/installation`. Keep platform setup, offline instructions, updates, and removal with that tool; do not add a standalone Installation navigation group. Legacy shared installation URLs redirect to the documentation tool chooser.
