# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
