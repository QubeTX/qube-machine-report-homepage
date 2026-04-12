# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
