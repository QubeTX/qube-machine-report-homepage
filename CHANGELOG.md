# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
