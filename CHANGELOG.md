# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
