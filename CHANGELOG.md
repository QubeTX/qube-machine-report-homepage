# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.20.1] - 2026-07-23

### Changed

- **SD-300 now carries its own product mark on the website.** Replaced the
  generic three-circle hero crown on the SD-300 page with the same monochrome
  isometric SD/300 cube used by the desktop app's tray identity. The SVG is
  rendered as a color-adaptive mask in the site's existing bone-white
  foreground, keeping the mark crisp and legible across desktop and mobile
  layouts without changing the other product pages.

## [1.20.0] - 2026-07-23

### Added

- **SD-300 now markets its native desktop app (v3).** Added a new
  `SD300Desktop.jsx` section ("New in Version 3 — The Desktop App") between
  `SD300Modes` and `SD300Sections`, describing the one-product model
  (terminal + app installed/updated/uninstalled together, run independently),
  all nine diagnostic sections in a native window, the Windows/macOS tray
  glance, and in-app "Update now". The section uses the site's existing
  typographic language and a hover card grid; Linux is noted as tray-free.
- **SD-300 command table gains the v3 commands.** `SD300Commands.jsx` now lists
  `sd300 gui` (launch or focus the desktop app) and `sd300 install` (managed
  install of the complete CLI + app) alongside the existing entries.

### Improved

- **TR-300 and ND-300 Windows download sections now match SD-300's layout.**
  `Install.jsx` and `ND300Install.jsx` replace the older chip-and-row Windows
  block with SD-300's per-edition card grid (`repeat(auto-fit, minmax(260px,
  1fr))`) — Global and Corporate cards, each with a description and MSI/EXE
  download buttons — for a consistent, cleaner look across all three products.
  The versionless `releases/latest/download` asset URLs are unchanged.
- **SD-300 hero and install copy reflect both frontends.** The hero corner now
  reads "TERMINAL + DESKTOP APP" and the tagline mentions the native app; the
  install panel notes that the managed install includes the app and that
  `sd300 gui` opens it. Stale `2.0.3` version fallbacks bumped to `3.1.1`.

## [1.19.0] - 2026-07-19

### Added

- **The SD-300 command list now includes complete uninstall.** The product page
  lists `sd300 uninstall`, and every platform tab repeats it beside the update
  command with the proven-owner cleanup behavior explained.

### Changed

- **SD-300 uninstall guidance now matches the qualified lifecycle.** The
  command removes managed receipts, native registrations, installer markers,
  SD-300 payloads, and product-owned PATH entries while leaving shared
  Cargo/Rust tooling intact.

## [1.18.0] - 2026-07-19

### Changed

- **SD-300 is discoverable again after its v2 release gate.** Restored the
  product immediately after ND-300 in navigation, footers, offline downloads,
  product documentation, and cross-product references. Shaughv OS remains the
  only intentionally delisted page.
- **SD-300 now leads with versionless CLI installation on every platform.**
  The page uses direct latest-release shell/PowerShell commands, with the
  universal macOS PKG and Windows Global/Corporate MSI/EXE installers retained
  as alternatives. Copy now explains same-channel updates and authoritative,
  transactional fresh installs.

## [1.17.0] - 2026-07-18

### Changed

- **TR-300 now recommends the versionless managed command on macOS, Linux, and
  Windows.** The copy-paste wrapper remains the fastest default while the
  native Apple and Windows installers stay available for GUI and managed
  deployment.
- **The Mac native button now downloads the direct universal PKG.** The signed,
  notarized, stapled `tr300-universal-apple-darwin.pkg` supports Apple Silicon
  and Intel without an unnecessary DMG-opening step. The legacy universal DMG
  remains published only as an updater-compatibility bridge.
- **Install and update intent is explicit.** `tr300 update` keeps the proven
  channel and scope; deliberately launching a fresh official wrapper, PKG,
  MSI, or EXE makes that method the user's newest choice when takeover can be
  proven safe. Ambiguous or blocked transitions retain the working install and
  show recovery links.
- **The unified install guide uses the current stable TR-300 filenames.** The
  fallback release label is v4.2.2 and every public download remains a
  versionless `releases/latest/download/...` entrypoint.
### Fixed

- **TR-300 documentation links follow the repository's `main` branch.** The
  feature and footer links no longer target the deleted `master` branch.

## [1.16.0] - 2026-07-18

### Changed

- **ND-300 now recommends the versionless command install on every platform.**
  The macOS, Linux, and Windows tabs lead with the wrapper command while the
  native Apple/Windows installers remain optional deployment channels.
- **The Mac native download now opens the direct v3.7.3 universal PKG.** The
  versionless button and unified install guide point to
  `nd300-universal-apple-darwin.pkg`; the release's legacy DMG remains an
  updater compatibility asset rather than the advertised download.
- **Install and update copy now describes channel intent accurately.** CLI
  updates reuse the proven install channel, while deliberately launching a
  different official installer records the user's fresh choice when the scope
  transition is safe. All four ND-300 fallback labels now use 3.7.3.
## [1.15.1] - 2026-07-18

### Changed

- **ND-300 fallback labels now match the verified v3.7.2 release.** Updated all
  four live GitHub-version fallbacks after the final updater/installer release;
  download links remain versionless `releases/latest` URLs.

## [1.15.0] - 2026-07-18

### Changed

- **ND-300 now presents the universal Apple Installer as the recommended Mac
  download.** The Mac tab links to the versionless signed and notarized
  PKG-in-DMG that supports Apple Silicon and Intel, while retaining the
  terminal-managed archive as an alternative for existing users. All four live
  version fallbacks now use 3.7.1.

### Fixed

- **The unified install guide now names the assets that actually ship.** ND-300
  uses one universal Mac DMG and the current `nd300-*` Windows/Linux filenames;
  the previous architecture-specific DMG and `nd-300-*` names did not exist in
  the public release.

## [1.14.0] - 2026-07-17

### Changed

- **ND-300 version fallbacks now match the v3.6.4 release cycle.** Updated all
  four live GitHub-version fallbacks in the ND-300 hero, install section,
  footer, and unified install guide from 3.4.0 to 3.6.4. The live GitHub
  release remains authoritative whenever the release API is reachable.

## [1.13.0] - 2026-07-15

### Changed

- **The TR-300 page now matches the verified v4.0.1 release.** Live-version
  fallbacks moved from 3.17.0 to 4.0.1, the hero build marker moved to
  `2026.07.A`, and the footer now identifies the active major line as V4.
- **The command table now documents the complete persistence contract.** Plain
  `tr300` / `report` runs explicitly create no file; all four manual Markdown
  save spellings (`tr300 -r`, `tr300 --report`, `report -s`, `report --save`)
  are listed alongside fast, JSON, ASCII, title, elevation-hint, action, and
  structured-update forms.
- **Feature and capability copy now reflects the source's accuracy model.** It
  describes OS-native collectors, explicitly defined disk/memory/load values,
  bounded optional probes, privacy exclusions, read-only startup summaries,
  fail-safe endpoint-policy update behavior, and mandatory Developer ID plus
  Apple notarization gates for both Mac architectures.
- **The sample output is now an exact 51-column TR-300 v4 table shape.** The old
  mock Windows panel showed network-throughput, packet, multi-disk, and generic
  CPU/MEM/DSK rows that TR-300 does not render. It has been replaced with a
  privacy-safe macOS example using the real section labels, topology, load,
  allocated-disk, available-memory, battery, and FileVault presentation.
- **Install guidance distinguishes terminal output from saved reports.** The
  page now says that startup/default runs never auto-log, describes the four
  explicit save aliases, calls out notarized Apple Silicon and Intel downloads,
  and explains that antivirus or policy blocks stop updates without replacing
  the current Windows binary.

### Fixed

- Reworded the Windows installer prompt so it no longer asks users whether they
  want to avoid Rust immediately below a wrapper that already installs a
  prebuilt binary without Rust.
- Synchronized `package-lock.json` with the homepage package version; it had
  remained at 1.10.0 while `package.json` and the changelog had advanced.

## [1.12.0] - 2026-06-23

### Changed

- **Windows install one-liners are now wrapped in `powershell -ExecutionPolicy ByPass -c "..."`.**
  Every product page's Windows command changed from the bare `irm https://reports.qubetx.com/install-<product>.ps1 | iex`
  to `powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install-<product>.ps1 | iex"`,
  across all four install components (`Install.jsx`, `SD300Install.jsx`, `ND300Install.jsx`,
  `WB300Install.jsx`). The wrapped form is copy-pasteable from any Windows context (`cmd.exe`, the
  Win+R Run dialog, a shortcut target — not just an already-open `PS>` prompt), and
  `-ExecutionPolicy ByPass` lets it run regardless of the machine's script policy. The Mac/Linux
  `curl … | sh` commands and the internal logic of the `public/install*.ps1` wrapper files are
  unchanged. This reverses the earlier deliberately-unwrapped form.
- **Docs updated to match.** The install one-liner tables in `CLAUDE.md`, `AGENTS.md`, and
  `README.md`, the pattern prose in `CLAUDE.md` and `CODEX_PROJECT.md`, and the
  `new-product-page` skill reference all now show the wrapped Windows form so future pages
  scaffold consistently.

## [1.11.0] - 2026-06-14

### Changed

- **SD-300 and Shaughv OS temporarily delisted from all marketing surfaces (WIP).** Both pages
  are getting work-in-progress updates and should not be marketed yet, so every discoverable
  in-site link to them was removed while the pages and routes were left fully intact
  (`/sd300` → `SD300App`, `/shaughvos` → `ShaughvOSApp` still render via direct URL):
  - **Nav bar** (`ProductNav`): the SD-300 and SHAUGHVOS entries are commented out (mirrors the
    earlier WB-300 hide pattern).
  - **Footers**: the SD-300 / SHAUGHVOS link entries (and the SD-300 `SizeBadge`) are commented
    out across `Footer`, `ND300Footer`, `WB300Footer`, `SD300Footer`, `ShaughvOSFooter`,
    `ExecutablesFooter`, and `InstallGuideFooter`.
  - **In-content links**: the Executables product grid's SD-300 card is commented out (with
    `noBorder` moved to the now-last ND-300 card), and the shaughvOS / SD-300 mentions in
    `Demos`, `ND300Features`, `SD300Platform`, and `ShaughvOSOverview` are de-linked to plain
    text.
  - Every removed/de-linked site carries a greppable `WIP-DELISTED` comment preserving the
    original markup, so restoration is `grep -r "WIP-DELISTED" src/`. A restore manifest and a
    standing "remind me to finish these before re-marketing" note were added to `CLAUDE.md`
    (mirrored to `AGENTS.md` and `CODEX_PROJECT.md`).

## [1.10.0] - 2026-06-10

### Added

- **WB-300 page re-enabled and refreshed for wb300 v2.0.0** (the corrected-model release):
  - `ProductNav` shows WB-300 again (the `/wb300` route had stayed live, just unlinked), and
    every product/footer cross-link chain (`Footer`, `ND300Footer`, `SD300Footer`,
    `ShaughvOSFooter`, `ExecutablesFooter`, `InstallGuideFooter`) now includes WB-300.
  - Hero tagline updated: "Mission control for parallel coding agents. One window — every
    repo, every branch, every agent, live."
  - Features rewritten around the v2 model (one agent = one branch = one worktree): the real
    branch hierarchy derived from commit topology, per-branch lifecycle
    (editing → uncommitted → committed → pushed → merged), agents pinned to branches with
    their changed files, OS notifications (commit / push / merge-conflict risk only),
    merge-risk forecast, safe cleanup, unified machine-wide tree, `wb300 help` +
    `wb300 uninstall`, and the `wb300.agent.v2` JSON schema. The stale
    "grouped by workbranch" phrasing (v1's misconception) is gone from Features and Modes.
  - Install links and the version badge were already version-agnostic
    (`releases/latest/download`, live GitHub version fetch) and pick up v2.0.0 automatically.

## [1.9.2] - 2026-06-03

### Fixed

- **Product-page accuracy pass against the live source repos.** Audited every product page with a verification agent (local clones + authenticated GitHub) and corrected drift:
  - **Install Guide** now pulls each tool's version live from GitHub (no more hardcoded version strings), and the offline-bundle filenames are corrected to match what the bundle actually ships — Windows/Linux use the hyphenated `tr-300-` / `nd-300-` / `sd-300-` names, and the SD300 table no longer lists nonexistent `tr300-tui-*` files.
  - **ND-300**: deep-diagnostic count corrected to 8 core + 18 deep (26 total), with Traffic Counters added; `nd300 fix` reframed as the diagnostic-driven triage loop (no longer "3-stage"); added `-y, --yes` and noted the subcommand forms; docs link `master` → `main`.
  - **SD-300**: keybindings corrected (`j`/`k` scrolls processes/connections/drivers/disk; added the `M` Memory sort); added `sd300 update`; docs link `master` → `main`.
  - **shaughvOS**: version fallback `V1.2.0` → `V1.20.0`; deep-diagnostic count → 18; Claude Code scoped to installer ISOs (Node.js/npm on all images); only TR-300 auto-runs; desktop-vs-console boot clarified.
  - **TR-300**: version fallbacks `3.14.3` → `3.15.3` (its docs link correctly stays on `master`).
  - **Executables Hub**: platform line now lists Linux x64/arm64.

## [1.9.1] - 2026-06-02

### Added

- `HUMAN_CHANGELOG.md` — a plain-English companion to this changelog, with every release translated into layman's terms. A new "Changelog rule" in `CLAUDE.md` and `AGENTS.md` requires the two files to be updated in lockstep.
- `.claude/` automation, checked into the repo: a PostToolUse ESLint hook that blocks on lint errors (`.claude/hooks/lint-changed.mjs`), a doc-sync reminder hook that fires when an agent-guidance doc or `CHANGELOG.md` is edited (`.claude/hooks/doc-sync-reminder.mjs`), a `product-page-accuracy-reviewer` subagent that cross-checks each product page against its source repo (local clone + live GitHub), and `sync-agent-docs` + `new-product-page` skills.

### Fixed

- Source-repository paths in `CLAUDE.md`, `AGENTS.md`, and `CODEX_PROJECT.md` were macOS-only and broke on Windows. They now resolve dynamically as `$HOME/git/<repo>` (with the public GitHub repo as a fallback), so they work on any machine.

### Changed

- `CLAUDE.md`, `AGENTS.md`, and `CODEX_PROJECT.md` now carry an explicit "keep these three docs in sync" rule, and `CODEX_PROJECT.md`'s workspace file tree was updated to include the new files.

## [1.9.0] - 2026-05-15

### Changed

- **All three product install commands switched to a wrapper-script pattern hosted on this site.** Each Install component now shows a single short one-liner that downloads a tiny wrapper from `reports.qubetx.com`, which in turn invokes the upstream cargo-dist installer published with every product release. Result: no Rust toolchain bootstrap, no MSVC Build Tools download, no admin/sudo — the binary is already compiled.
  - **TR-300** (`Install.jsx`): Mac/Linux now runs `curl -LsSf https://reports.qubetx.com/install.sh | sh`; Windows runs `irm https://reports.qubetx.com/install.ps1 | iex`. The wrapper additionally chains `tr300 install` so the `report` shell alias and `tr300 --fast` auto-run line still get set up.
  - **SD-300** (`SD300Install.jsx`): Mac/Linux runs `curl -LsSf https://reports.qubetx.com/install-sd300.sh | sh`; Windows runs `irm https://reports.qubetx.com/install-sd300.ps1 | iex`.
  - **ND-300** (`ND300Install.jsx`): Mac/Linux runs `curl -LsSf https://reports.qubetx.com/install-nd300.sh | sh`; Windows runs `irm https://reports.qubetx.com/install-nd300.ps1 | iex`.
- Per-platform `explanation`, `note`, and `pathNote` strings rewritten across all three Install components to describe the wrapper-script flow accurately (downloads a small wrapper from this site → cargo-dist installer → prebuilt binary into `~/.cargo/bin` / `%USERPROFILE%\.cargo\bin`). User-scope install means the prior macOS sudo notes and Windows administrator-PowerShell notes are gone.
- `CLAUDE.md` "Install Documentation Contract" section rewritten to reflect the unified wrapper-script pattern across all three products; the old "Cargo-first" rule, the MSVC Build Tools preflight subsection, and the SD-300/ND-300 future-migration plan have all been removed (they're now obsolete or implemented).

### Added

- **TR-300 Windows MSI/EXE installer download buttons** under the install terminal box. Surfaces the four first-class Windows installers TR-300 has published since v3.15.0 — Global MSI (`tr300-x86_64-pc-windows-msvc.msi`), Global EXE (`tr300-x86_64-pc-windows-msvc-setup.exe`), Corporate MSI (`tr300-x86_64-pc-windows-msvc-corporate.msi`), Corporate EXE (`tr300-x86_64-pc-windows-msvc-corporate-setup.exe`) — as four magenta CTA buttons grouped into a labeled GLOBAL row (admin / all users) and CORPORATE row (per-user / no admin). Each group has a small pill chip plus an italic one-line description; the chip column right-aligns and the button column right-aligns so both rows share the same right edge and the "Installs to..." descriptions share the same left edge. Only renders when the Windows tab is selected. Asset URLs use `releases/latest/download/...` so they auto-track new TR-300 releases.
- Local `DownloadButton` helper inside `Install.jsx`, matching the existing magenta-CTA pattern from `ExecutablesContent.jsx` (inline hover state, `translateY(-2px)` lift, `0 4px 12px rgba(255, 0, 212, 0.3)` shadow).
- `public/install.sh`, `public/install.ps1`, `public/install-sd300.sh`, `public/install-sd300.ps1`, `public/install-nd300.sh`, `public/install-nd300.ps1` — six wrapper scripts served as static files by Vercel under `reports.qubetx.com/install-*.{sh,ps1}`. Each wrapper invokes the matching upstream cargo-dist installer URL, then verifies the installed binary exists (TR-300 additionally chains `tr300 install`). All wrappers exit nonzero with a clear message if the cargo-dist call left the binary missing.

### Removed

- The multi-step Visual Studio Build Tools (VCTools) preflight from the TR-300 Windows one-liner (`Install.jsx`). It was a workaround for `cargo install` building from source on Windows; with the cargo-dist installer the binary is already compiled, so MSVC is irrelevant. The same preflight was also removed from `SD300Install.jsx` and `ND300Install.jsx` when those products migrated to the wrapper-script pattern.
- The macOS sudo guidance note from `Install.jsx`, `SD300Install.jsx`, and `ND300Install.jsx`. The wrapper-script install is user-scoped; sudo is no longer needed.
- The Windows administrator-PowerShell guidance from `SD300Install.jsx` and `ND300Install.jsx`. Same reason — user-scoped install.

## [1.8.12] - 2026-05-11

### Changed

- The TR-300 install one-liner now chains `tr300 install` after `cargo install tr300` on all three platforms (macOS, Linux, Windows), so a single copy-paste also writes the shell-profile `report` alias and configures `tr300 --fast` to run automatically on every new interactive shell. SD-300 and ND-300 install panels are unchanged — their CLIs do not ship a self-install subcommand.
- Explanation text in the TR-300 install panel updated to describe the new final step (`tr300 install`) and clarify that re-running the one-liner is safe because `tr300 install` is idempotent.

## [1.8.11] - 2026-05-11

### Added

- Per-platform admin/sudo hint notes added to the install panels for TR-300 (`Install.jsx`), SD-300 (`SD300Install.jsx`), and ND-300 (`ND300Install.jsx`).
  - **Windows:** a note advising users to launch PowerShell (or CMD) as Administrator before pasting the one-liner, because rustup-init.exe and cargo install need elevated permissions to write to the user profile and PATH on most Windows configurations.
  - **macOS:** a note advising that non-administrator accounts should prefix the command with `sudo`; admin users can paste as-is.
  - Linux receives no note (no elevation is required for the standard Cargo install path on Linux).
- Notes render between the existing platform explanation paragraph and the existing path note, using the same dim-text styling as surrounding install notes.

## [1.8.10] - 2026-05-11

### Fixed

- Product install one-liners now use the verified crates.io package names:
  - TR-300: `cargo install tr300`
  - ND-300: `cargo install nd300`
  - SD-300: `cargo install tr300-tui` while keeping the installed command as `sd300`
- macOS and Linux one-liners now explicitly load Cargo's bin directory into the current terminal `PATH` before installing so the newly installed commands are immediately reachable.
- Existing-install notes were added to the TR-300, ND-300, and SD-300 install blocks with the correct update commands for users who installed with older instructions.
- Install guide versions and archive names were refreshed for the current release/package naming scheme: TR300 v3.14.3, ND300 v3.0.7, and SD300 v1.4.3.
- GitHub version fallbacks were bumped to current release versions so badges remain accurate when the GitHub API is unavailable.
- `README.md`, `AGENTS.md`, `CLAUDE.md`, and `CODEX_PROJECT.md` now document the Cargo package contract, including SD-300's `tr300-tui` package name and `sd300` binary name.

## [1.8.9] - 2026-05-10

### Added

- `AGENTS.md` added to the repository with project commands, architecture notes, styling conventions, source-repository references, and deployment guidance.

### Changed

- `CODEX_PROJECT.md` current status refreshed after the Cargo-first install command update.
- Internal docs now clarify that user requests to push to `main` or `master` mean push to the repository default branch; for this repository, that is `main`.

## [1.8.8] - 2026-05-10

### Changed

- TR-300, SD-300, and ND-300 install sections now use Cargo-first one-line commands for macOS, Linux, and Windows.
- Removed the separate Cargo install tab from product pages; each platform tab now installs Rust/Cargo when needed, sets the current terminal session path, and runs `cargo install`.
- Added per-platform install explanations and same-format update notes: `tr300 update`, `sd300 update`, and `nd300 update`.

## [1.8.7] - 2026-04-15

### Changed

- shaughvOS footer status changed from "OPERATIONAL" to "W.I.P."

## [1.8.6] - 2026-04-14

### Changed

- shaughvOS download images reordered: Native PC / USB first, then RPi 5, RPi 2/3/4, Virtual Machine last
- "Native PC" label renamed to "Native PC / USB" to clarify USB flash support

## [1.8.5] - 2026-04-13

### Removed

- Decorative "+" hover indicator from all feature/capability rows (`Demos.jsx`, `ND300Features.jsx`, `ShaughvOSFeatures.jsx`, `SD300Platform.jsx`) — created a false interactive affordance with no click behavior; hover background highlight retained

### Changed

- shaughvOS page synced to match shaughvOS v1.8.0 repo
  - `ShaughvOSPitch.jsx` — "What is shaughvOS?" description updated; dual-audience sections rewritten with detailed bullet-point lists (For Everyday Users / For Technicians & IT Professionals) matching the README
  - `ShaughvOSFeatures.jsx` — added "Try Before You Install" (live boot), "Developer Tools Included" (Node.js, npm, Claude Code), and "Calamares Installer" features; renamed "Boot from USB" to reflect live boot capability; now 12 features (was 10)
  - `ShaughvOSOverview.jsx` — boot experience cell updated to mention Node.js, npm, and Claude Code pre-installed
  - `ShaughvOSCommands.jsx` — commands updated to match README: `tr300 / report` combined entry, `nd300` user/technician mode distinction clarified
- Copyright notice in all footers changed from centered to left-aligned full-width row

## [1.8.4] - 2026-04-13

### Added

- `tr300 --update` flag added to TR-300 commands table (`Commands.jsx`) — self-update to latest version
- `--update` flag added to ND-300 Action Commands section (`ND300Commands.jsx`) — check for updates and install latest version
- `--update` flag added to ND-300 SpeedQX flags section — self-update for the speedqx binary
- `--fastcom-duration <SEC|auto>` flag added to ND-300 SpeedQX flags section — controls fast.com test duration independently

### Changed

- ND-300 SpeedQX flags section updated to match current quad-provider CLI (Cloudflare + NDT7 + LibreSpeed + fast.com)
  - Removed stale `--cf-only` and `--ndt-only` flags (no longer in CLI)
  - `speedqx` description changed from "dual-provider" to "quad-provider" with all four providers listed
  - `--duration` description clarified to specify it applies to CF/NDT7/LibreSpeed (not fast.com)
- Version badges synced across all product pages to match latest CLI releases
  - TR-300: V 3.6 → V 3.9 (hero badges and install terminal label), build label 2026.02.A → 2026.04.A
  - ND-300: V 2.7 → V 2.9 (hero badges, install terminal label, footer badge), build label 2026.03.A → 2026.04.A
  - SD-300: V 1.2.1 → V 1.3 (hero badge, install terminal label, footer badge added), build label 2026.02.A → 2026.04.A
- `useGitHubVersion` hook (`src/hooks/useGitHubVersion.js`) — general-purpose hook that fetches latest release version from any GitHub repo with fallback; includes `shortVersion()` helper for major.minor formatting
- Live version badges on TR-300, ND-300, and SD-300 pages — hero badges, install terminal labels, and footer badges now fetch the latest release version from GitHub API (with hardcoded fallbacks)
- Added dynamic `© {year} QUBETX` copyright notice to all 6 page footers (`Footer.jsx`, `ND300Footer.jsx`, `SD300Footer.jsx`, `ExecutablesFooter.jsx`, `ShaughvOSFooter.jsx`, `InstallGuideFooter.jsx`) — uses `new Date().getFullYear()` so it always displays the current year; centered text with top border separator

## [1.8.3] - 2026-04-12

### Added

- `useLatestRelease` hook (`src/hooks/useLatestRelease.js`) — fetches the latest shaughvOS release tag from GitHub API; falls back to V1.2.0 on error
- SHAUGHVOS link added to `ShaughvOSFooter.jsx` navigation row (TR-300 / ND-300 / SD-300 / SHAUGHVOS / GITHUB)

### Changed

- `ShaughvOSHero.jsx` and `ShaughvOSFooter.jsx` version badges now display the live latest release instead of a hardcoded version string
- `.gitignore` — added `.vercel` directory

## [1.8.2] - 2026-04-12

### Changed

- shaughvOS install section updated for v1.2.0 release
  - All download links bumped from v1.1.0 to v1.2.0
  - x86_64 targets (Native PC, Virtual Machine) now offer both `.img.xz` and `.iso` (Clonezilla installer) downloads side by side
  - ARM targets (Raspberry Pi 2/3/4, Raspberry Pi 5) continue to offer `.img.xz` only
  - Flash instructions updated for x86 targets to reflect dual-format availability
  - Download link labels changed from generic "Download" to format-specific "IMG.XZ" and "ISO"

## [1.8.1] - 2026-04-12

### Fixed

- Site-wide responsive design audit — all pages now render correctly from 320px to 1440px
  - `ProductNav.jsx` — added `flexWrap: 'wrap'` and `justifyContent: 'center'` to prevent nav overflow on narrow screens
  - `ShaughvOSHardware.jsx`, `ShaughvOSInstall.jsx`, `SD300Sections.jsx` — 4-column grid tables converted to stacked card layout on mobile (<640px)
  - `Commands.jsx`, `SD300Commands.jsx`, `SD300Keybindings.jsx`, `ND300Commands.jsx`, `ShaughvOSCommands.jsx` — grid `minmax()` minimums changed to `min(140px, 40%)` to respect viewport bounds; `whiteSpace: 'nowrap'` replaced with `overflowWrap: 'break-word'`
  - `Footer.jsx`, `ND300Footer.jsx`, `SD300Footer.jsx`, `ExecutablesFooter.jsx`, `ShaughvOSFooter.jsx`, `InstallGuideFooter.jsx` — `minWidth: '200px'` changed to `'0'` to prevent footer columns from overflowing
  - `Features.jsx`, `ND300Modes.jsx`, `SD300Modes.jsx`, `ND300Features.jsx`, `ShaughvOSFeatures.jsx`, `ShaughvOSOverview.jsx`, `ExecutablesContent.jsx`, `Demos.jsx`, `SD300Platform.jsx` — added `overflow: 'hidden'` to sections with `scaleX()` transforms
  - `ND300Diagnostics.jsx` — fluid font sizing with `clamp()`, reduced grid gap
  - `SD300Platform.jsx` — added `wordBreak: 'break-all'` for long Rust target triples
  - `InstallGuideContent.jsx` — reduced table `minWidth` from 500px to 400px

## [1.8.0] - 2026-04-12

### Added

- shaughvOS product page at `/shaughvos` — marketing-focused landing page for the shaughvOS custom operating system
- `ShaughvOSApp.jsx` — page shell with Lenis smooth scroll
- `ShaughvOSHero.jsx` — hero section with SHAUGHV brand logo, mono-font title, version badge, WIP note ("Qube OS coming soon"), and scroll links
- `ShaughvOSPitch.jsx` — cinematic marketing section with dual-audience positioning (end users and technicians)
- `ShaughvOSOverview.jsx` — three-column grid (Desktop, Boot Experience, Built-in Diagnostics) with marketing copy and technical details
- `ShaughvOSFeatures.jsx` — 10 numbered feature rows with marketing headlines and technical descriptions
- `ShaughvOSCommands.jsx` — quick commands table grouped by Desktop, Diagnostics, and System
- `ShaughvOSHardware.jsx` — hardware compatibility table (RPi 2/3/4/5, PCs, Intel Macs, Apple Silicon via VM, VMs)
- `ShaughvOSInstall.jsx` — tabbed install section with pre-built image download table and Debian installer command
- `ShaughvOSFooter.jsx` — footer with DietPi attribution, cross-links, GPLv2 license, and WIP note
- SHAUGHV logo SVG added to `public/shaughv-logo.svg`
- `SHAUGHVOS` entry in `ProductNav.jsx` navigation bar
- Route for `/shaughvos` in `main.jsx` pathname router
- `framer-motion` dependency for hero entrance animations

## [1.7.0] - 2026-03-12

### Changed

- Synced ND-300 product page to match ND-300 CLI v2.7.0 release
  - Hero build label updated from `2026.02.B` to `2026.03.A`
  - Hero version badges updated: `V 2.6` → `V 2.7` (active)
  - Footer version badge updated from `V2.4` to `V2.7`
  - Speed Test feature description updated to reflect dual-provider engine (Cloudflare + M-Lab NDT7) with ping, jitter, and packet loss metrics
  - DNS Configuration feature updated: Cloudflare now marked as recommended, Hybrid moved to last position
  - Network Recovery feature updated to mention Markdown report generation with root cause analysis
  - Speed Test diagnostic description updated to "Dual-provider download/upload with ping"
  - Sample output speed test line updated to include ping value
  - `--uninstall` flag description updated to cover both nd300 and speedqx binaries
  - Repair Tools mode description updated to mention diagnostic reports

### Added

- SpeedQX feature entry in ND-300 features section — standalone dual-provider speed test binary
- SpeedQX flags section in ND-300 commands table with `speedqx`, `--cf-only`, `--ndt-only`, `--duration`, `--latency-probes`, and output formatting flags

## [1.6.3] - 2026-02-25

### Changed

- `Hero.jsx` — TR-300 hero top-right corner label changed from `TECHNICAL REPORT` to `MACHINE REPORT`; subtitle rewritten from technical phrasing to "Know your machine in seconds. / Clean, readable system reports on any OS."; scroll links renamed: `INITIALIZE` → `GET STARTED`, `DOCUMENTATION` → `FULL REFERENCE`
- `Features.jsx` — TR-300 feature grid first cell label changed from `FOR DEVELOPERS` to `FOR EVERYONE`; titles and body descriptions rewritten with plain-English, benefit-oriented language; "Set it up once" automation copy replaces CI/dotfiles references
- `Demos.jsx` — TR-300 capability rows retitled and redescribed: `Scriptable Output` → `Data Export` ("structured data" replaces JSON/binary phrasing), `Shell Integration` → `Automatic Reports` (removes shell hook/dotfile references), `Zero Dependencies` → `Nothing to Install` (removes "cargo"/"package manager" references); all six descriptions rewritten in layman-friendly language
- `ND300Hero.jsx` — ND-300 hero subtitle rewritten from technical diagnostic phrasing to "Find and fix network problems / on Windows, macOS, and Linux."; scroll links renamed: `INITIALIZE` → `GET STARTED`, `DOCUMENTATION` → `FULL REFERENCE`
- `ND300Modes.jsx` — ND-300 modes section redesigned: first cell label `CLEAN SUMMARY` → `USER MODE`, title `Clean Summary` → `Quick Check`, description rewritten for non-technical readers; third cell label `ACTION COMMANDS` → `REPAIR TOOLS`, title `Action Commands` → `Network Recovery`, description removes jargon (ARP, bufferbloat, TLS inspection) and replaces with plain-language equivalents; Technician Mode description updated to drop "ARP tables" and "bufferbloat/TLS inspection" in favor of "connection quality" and "security inspection"
- `SD300Hero.jsx` — SD-300 hero top-right corner label changed from `REAL-TIME TUI` to `LIVE DASHBOARD (TUI)`; subtitle rewritten to "A live dashboard for your system's health. / Watch diagnostics update in real time."; scroll links renamed: `INITIALIZE` → `GET STARTED`, `DOCUMENTATION` → `FULL REFERENCE`
- `SD300Modes.jsx` — SD-300 modes section redesigned: second cell label `RAW DATA EXPOSURE` → `TECHNICIAN MODE`, title `Raw Data Exposure` → `Full Detail`; first cell (User Mode) description rewritten to plain language with example status phrases ("Running quietly", "Memory is getting full", "Warm"); Technician Mode description rewritten removing "buffering"/"raw exposure" framing
- `ExecutablesHero.jsx` — Executables hero top-right corner label changed from `PRE-BUILT BINARIES` to `READY-TO-RUN FILES`; subtitle rewritten from binary/installer phrasing to "Every QubeTX tool in one download. / Works offline, runs on any platform."
- `ExecutablesContent.jsx` — Executables About badge text changed from `OFFLINE INSTALLER ARCHIVE` to `ABOUT THIS DOWNLOAD`; main explainer paragraph rewritten ("just extract and run" replaces binary/installer language); second paragraph added: "These are the exact same tools available on GitHub — same versions, same features, just bundled for convenience." (replaces the previous GitHub-parity note); three-column tool grid descriptions rewritten in layman-friendly language for TR-300, ND-300, and SD-300 cells

## [1.6.2] - 2026-02-25

### Changed

- `ProductNav.jsx` nav label for the Executables page renamed from `EXECUTABLES` to `OFFLINE` — shorter, platform-neutral label; route path (`/executables`) is unchanged
- `ExecutablesContent.jsx` About section now includes an additional paragraph between the description and the "Contains:" metadata: "Identical to the releases on GitHub — same binaries, same functionality, just downloaded directly."
- `ExecutablesContent.jsx` metadata line split into two lines with a `<br />` — "Contains: TR-300, ND-300, SD-300" on one line and "Platforms: ..." on the next — for improved readability on mobile
- Browser tab titles standardized to the short `QUBETX <PRODUCT>` prefix format across all pages: `index.html` `<title>` changed from `"TR-300 Machine Report"` to `"QUBETX TR-300"`; `ND300Hero.jsx` `document.title` changed from `"ND-300 Network Diagnostic"` to `"QUBETX ND-300"`; `SD300Hero.jsx` `document.title` changed from `"SD-300 System Diagnostic"` to `"QUBETX SD-300"`; `ExecutablesHero.jsx` `document.title` changed from `"QubeTX Executables — Offline Installers"` to `"QUBETX OFFLINE"`

### Added

- `.hide-on-mobile` CSS utility class added to `src/index.css` (inside the existing `@media (max-width: 640px)` block) and applied to the top-right corner `<div>` in all four hero components (`Hero.jsx`, `ND300Hero.jsx`, `SD300Hero.jsx`, `ExecutablesHero.jsx`) — hides the decorative corner text on small screens to reduce clutter

## [1.6.1] - 2026-02-25

### Changed

- `ExecutablesHero.jsx` hero display title changed from `EXECUTABLES` to `.EXE` (cosmetic UI text update; no nav labels, metadata, or page routes affected)

## [1.6.0] - 2026-02-25

### Added

- Executables Download Hub page at `/executables` — a dedicated landing page for pre-built offline installers of all QubeTX CLI tools (TR-300, ND-300, SD-300)
- `ExecutablesApp.jsx` — top-level page component with Lenis smooth scrolling, wiring hero, content, and footer sections
- `ExecutablesHero.jsx` — 90vh hero section with top metadata rows (OFFLINE EXECUTABLES / ALL PLATFORMS / BUILD: 2026.02.A), centered three-oval logo and `.EXE` display title, accent-colored download button (bottom-left), and keyboard-accessible scroll link to the tools section (bottom-right)
- `ExecutablesContent.jsx` — three-section content layout:
  - Centered explainer block (`id="tools"`) describing the offline archive (macOS arm64/x64, Linux x64, Windows x64)
  - 3-column tool summary grid (TR-300, ND-300, SD-300) with internal links to each product page
  - Secondary download CTA with a link to the GitHub source repository (`github.com/QubeTX/qube-reports-executables`)
- `ExecutablesFooter.jsx` — footer with QubeTX branding, tool badges linking to sibling product pages, cross-links for TR-300 / ND-300 / SD-300 / GitHub repo, PolyForm NC License link, and STATUS: OPERATIONAL indicator
- `{ label: 'EXECUTABLES', path: '/executables' }` entry added to `ProductNav.jsx` products array, making the new page reachable from the shared navigation bar on all product pages
- Route for `/executables` and `/executables/` added to the pathname-based router in `main.jsx`

## [1.5.0] - 2026-02-22

### Changed

- Synced displayed versions across all product pages to match latest CLI releases
  - TR-300: V 3.0 → V 3.6 (hero badges and install terminal label)
  - SD-300: V 1.2 → V 1.2.1 (hero badge and install terminal label)
  - ND-300: added V 2.6 badge and updated install terminal label
- Replaced static "SCROLL TO INITIALIZE" text in all three hero sections with interactive scroll links
  - Two stacked clickable links: "INITIALIZE" (scrolls to install section) and "DOCUMENTATION" (scrolls to commands/flags section)
  - Keyboard accessible with hover states matching the industrial design language

### Added

- `tr300 --fast` flag to TR-300 commands table (fast mode — skip slow collectors)
- `id="commands"` anchor on all three commands/flags sections for scroll targeting

## [1.4.0] - 2026-02-15

### Changed

- Updated SD-300 product page from v1.0 to v1.2.1
  - Hero version badge updated to V 1.2
  - `sd300` command description changed to "Interactive mode selection"
  - Keybindings corrected: `f` (temperature unit), `m` (mode selection), `r` (driver refresh), `j/k` (scroll in Tech Mode)
  - Added `Ctrl+C` keybinding (quit to shell)
  - Drivers refresh note changed to "on-demand (press r)"
  - Windows platform feature updated from WMI to Setup API / SCM / PowerShell
  - Install terminal label updated to V.1.2
  - Footer version badges now show full release timeline (V1.0, V1.1, V1.2, V1.2.1) with GitHub release links

## [1.3.0] - 2026-02-15

### Added

- TR-300 Footer heritage lineage badges for TR-100 and TR-200 with links to source repos
- `href`, `title`, and `heritage` props on TR-300 SizeBadge component

### Changed

- Updated ND-300 product page from v1.0 to v2.4 (new commands, diagnostics, sample output, features, and install sections)
- Updated hero corner labels to match product abbreviations (TR, SD, ND)

### Fixed

- ND-300 hero subtitle text wrapping — widened max-width from 600px to 700px so "and repair" addition no longer causes awkward line break
- ND-300 utility flags table: version short flag corrected from `-V` to `-v`

## [1.2.0] - 2026-02-08

### Added

- ND-300 product page with hero, commands, diagnostics, features, modes, sample output, install, and footer sections
- Cross-product navigation bar (ProductNav) linking TR-300, SD-300, and ND-300 pages
- Pathname-based client-side routing across all product pages

## [1.1.1] - 2026-02-07

### Added

- SD-300 System Diagnostic tool product page with hero, commands, keybindings, modes, platform support, install, and footer sections
- Vercel SPA rewrite rule (`vercel.json`) to serve `index.html` for all routes

### Changed

- SD-300 install section simplified to 3-tab layout

## [1.1.0] - 2026-02-06

### Added

- Lenis smooth scrolling with exponential ease-out (replaces CSS `scroll-behavior`)
- Functional external links throughout the site
  - Features: "Read Documentation" and "View on GitHub" now open in new tabs
  - Footer: "PolyForm NC License", "GitHub", and "Documentation" are clickable links
- Footer link hover effect (magenta accent color)
- Three new capability rows: Shell Integration, Zero Dependencies, Beautiful Output
- Numbered indices (01–06) on capability rows
- Hover `+` indicator on capability rows

### Changed

- Build date updated from 2024.09.A to 2026.02.A
- GPU in sample output changed from RTX 4090 to RTX 5070
- Sample output table rebuilt programmatically with pure ASCII characters for guaranteed alignment
- Capabilities section expanded from 3 items to 6

### Fixed

- ASCII art table alignment — right-side borders now line up perfectly on all lines
- Features section links were non-functional plain text, now proper `<a>` tags
- Footer links were non-functional spans, now proper `<a>` tags

## [1.0.1] - 2026-02-03

### Added

- Commands.jsx and SampleOutput.jsx components for TR-300 page
- ASCII demo section with "QUBETX DEVELOPER TOOLS" title

### Changed

- Rebranded from "Shaughnessy V" to QubeTX throughout the site
- Updated license references to PolyForm Noncommercial

### Removed

- DemoCanvas component (replaced by ASCII demo)

### Fixed

- Windows install command in documentation
- Mobile horizontal scroll overflow on ASCII demo section

## [1.0.0] - 2026-02-03

### Added

- Initial release of TR-300 homepage
- Hero section with animated logo (three overlapping ovals)
- Two-column feature grid (For Developers / For Teams)
- Capability showcase section (System Overview, Cross-Platform, Scriptable Output)
- Platform-tabbed installation section with copy buttons
  - macOS/Linux shell installer
  - Windows PowerShell installer
  - Cargo install option
- Brian Kernighan quote section
- Footer with company info and version badges
- Responsive design for mobile, tablet, and desktop
- Dark theme with magenta accent color
- Google Fonts integration (Archivo Black, Cormorant Garamond, JetBrains Mono)
