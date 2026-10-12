# QubeTX Product Homepage

Marketing homepage for QubeTX CLI tools: [TR-300 Machine Report](https://github.com/QubeTX/qube-machine-report), [ND-300 Network Diagnostic](https://github.com/QubeTX/qube-network-diagnostics), [SD-300 System Diagnostic](https://github.com/QubeTX/qube-system-diagnostics), and a unified [Executables Download Hub](https://github.com/QubeTX/qube-reports-executables) for pre-built offline installers.

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Lenis** - Smooth scrolling
- **Framer Motion** - Entrance animations (hero)
- **CSS Variables** - Theming and design tokens
- **Pathname-based routing** - Custom client-side routing in `main.jsx` (no React Router)

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Install Content Contract

Product pages prefer versionless CLI installer commands. The homepage still hosts small compatibility redirects under `public/install-<product>.{sh,ps1}`, while SD-300 v2 links directly to its ownership-aware upstream managed installer.

| Product | Mac/Linux one-liner | Windows one-liner |
|---------|--------------------|--------------------|
| TR-300 | `curl -LsSf https://reports.qubetx.com/install.sh \| sh` | `powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install.ps1 \| iex"` |
| ND-300 | `curl -LsSf https://reports.qubetx.com/install-nd300.sh \| sh` | `powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install-nd300.ps1 \| iex"` |
| SD-300 | `curl --proto '=https' --tlsv1.2 -LsSf https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-cli-installer.sh \| sh` | `irm https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-cli-installer.ps1 \| iex` |

Upstream cargo-dist asset names (used inside the wrappers):

| Product | GitHub repo | Asset names | Installed commands |
|---------|------------|------------|--------------------|
| TR-300 | `QubeTX/qube-machine-report` | `tr300-installer.{sh,ps1}` (canonical), `tr-300-installer.{sh,ps1}` (legacy alias) | `tr300` |
| ND-300 | `QubeTX/qube-network-diagnostics` | `nd-300-installer.{sh,ps1}` (hyphenated) | `nd300`, `speedqx` |
| SD-300 | `QubeTX/qube-system-diagnostics` | `sd300-cli-installer.{sh,ps1}`; legacy routers remain for old updaters | `sd300` (crates.io package is still `tr300-tui`) |

Each wrapper verifies the installed binary exists after the cargo-dist call and exits nonzero with a clear message if not — failures don't silently pass through. Update commands stay the same: `tr300 update`, `sd300 update`, `nd300 update` / `speedqx update`. SD-300's complete proven-owner removal command is `sd300 uninstall` on every platform and install channel.

**Install ownership:** TR-300's wrapper still chains its profile-configuration subcommand. SD-300's managed installer writes a receipt, `sd300 update` preserves that owner (including MSI, EXE, or PKG), and `sd300 install` deliberately moves a recognized installation to the preferred managed CLI channel. Raw `cargo install tr300-tui` remains an unmanaged advanced option.

**TR-300 native installer options:** The versionless shell/PowerShell wrapper is
the recommended install on macOS, Linux, and Windows. macOS also has one direct,
signed/notarized/stapled universal Apple Installer package at
`releases/latest/download/tr300-universal-apple-darwin.pkg`; the older universal
DMG remains a compatibility asset for existing updater clients and is not the
advertised native download. Windows has Global/Corporate MSI and EXE installers
at stable `releases/latest/download/...` names. These are optional GUI and
managed-deployment channels, not different products.

`tr300 update` preserves the proven channel, edition, scope, and installation
path. Deliberately launching a fresh official wrapper, PKG, MSI, or EXE is the
user's newest install choice, including an intentional reinstall or downgrade,
when takeover can be proven safe. Ambiguous, conflicting, or policy-blocked
transitions keep the working installation intact and return exact and latest
recovery links rather than crossing channels silently.

**SD-300 native installer alternatives:** SD-300 v2 lists one signed/notarized universal macOS PKG plus Global/Corporate MSI and EXE installers for Windows. Their stable asset names contain no release number, and later CLI updates stay on the recorded native channel.

**ND-300 native installer options:** The versionless shell/PowerShell wrapper is the recommended install on macOS, Linux, and Windows. ND-300 also publishes a direct universal Apple Installer package at `releases/latest/download/nd300-universal-apple-darwin.pkg` and four Global/Corporate MSI/EXE variants. `ND300Install.jsx` presents these as optional native deployment channels. `nd300 update` preserves the proven channel; deliberately launching a different official installer records the user's fresh choice when the scope transition is safe.

**TR-300 v4.2.2 report and trust contract:** A normal `tr300` or `report` run only
prints to the terminal. Markdown persistence is explicit through `tr300 -r`,
`tr300 --report`, `report -s`, or `report --save`; the shell-startup `--fast`
run never auto-logs. Current Apple Silicon and Intel release archives are
Developer ID signed and Apple notarized before hosting. On managed Windows
machines, an antivirus/Group Policy/AppLocker staging or launch block stops the
updater without overwriting the working binary and points users to the matching
manual installer.

## Project Structure

```
src/
├── components/
│   ├── Commands.jsx          # TR-300 commands table
│   ├── Demos.jsx             # TR-300 capability showcase
│   ├── ExecutablesContent.jsx # Explainer, 3-column tool grid, secondary download CTA
│   ├── ExecutablesFooter.jsx  # Footer with tool badges and cross-links
│   ├── ExecutablesHero.jsx   # Executables 90vh hero with download button & scroll link
│   ├── Features.jsx          # TR-300 feature grid
│   ├── Footer.jsx            # TR-300 footer & version badges
│   ├── Hero.jsx              # TR-300 hero section
│   ├── Install.jsx           # TR-300 install commands
│   ├── ND300Commands.jsx
│   ├── ND300Diagnostics.jsx
│   ├── ND300Features.jsx
│   ├── ND300Footer.jsx
│   ├── ND300Hero.jsx         # ND-300 hero section
│   ├── ND300Install.jsx
│   ├── ND300Modes.jsx
│   ├── ND300SampleOutput.jsx
│   ├── ProductNav.jsx        # Cross-product navigation bar (OFFLINE label for /executables)
│   ├── Quote.jsx             # TR-300 Kernighan quote
│   ├── SampleOutput.jsx      # TR-300 sample output
│   ├── SD300Commands.jsx
│   ├── SD300Footer.jsx
│   ├── SD300Hero.jsx         # SD-300 hero section
│   ├── SD300Install.jsx
│   ├── SD300Keybindings.jsx
│   ├── SD300Modes.jsx
│   ├── SD300Platform.jsx
│   └── SD300Sections.jsx
├── App.jsx                   # TR-300 product page
├── ExecutablesApp.jsx        # Executables Download Hub page
├── index.css                 # Global styles, CSS variables & .hide-on-mobile utility
├── main.jsx                  # Entry point & pathname-based router
├── ND300App.jsx              # ND-300 product page
└── SD300App.jsx              # SD-300 product page
```

## Pages

| Route | Product | Description |
|-------|---------|-------------|
| `/` | TR-300 Machine Report | System hardware reporting tool |
| `/nd300` | ND-300 Network Diagnostic | Network diagnostics and repair tool |
| `/sd300` | SD-300 System Diagnostic | Interactive system diagnostic utility |
| `/executables` | Executables Download Hub | Pre-built offline installers for all QubeTX CLI tools |
| `/docs` | Documentation | Blume guides, commands, examples, and installation |
| `/install-guide` | Compatibility redirect | Opens the tool-specific documentation choices |

## Design

- **Background:** #0a0a0a
- **Foreground:** #dcdcdc
- **Accent:** #ff00d4
- **Fonts:** Archivo Black (display), Cormorant Garamond (serif), Paper Mono (mono)

## Deployment

Built for Vercel deployment. Pushes to the repository default branch (`main`) trigger production deployment through Vercel Git integration. The `dist/` folder contains the production build.

```bash
npm run build
```

## License

[PolyForm Noncommercial 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0)

---

QubeTX | https://qubetx.com

## Documentation and offline downloads

The active products are TR-300, ND-300 (including SpeedQX), and SD-300. Retired product URLs redirect home and must not be marketed or bundled. Retired installer wrapper URLs are non-mutating error tombstones, so old commands cannot accidentally execute SPA HTML.

`docs-site/` is an independent Blume 2.2.3 package (Astro/React 19), isolated from the React 18 marketing app. Install both lockfiles with `npm ci` and `npm ci --prefix docs-site`; Node 22.19+ is required. `npm run build` builds Vite, builds Blume, then copies static documentation into `dist/docs`. Vercel rewrites only known marketing routes; never restore a catch-all that swallows documentation, search data, or assets. `/install-guide` permanently redirects to `/docs#choose-a-tool`.

Documentation content is Markdown under `docs-site/content/`, with typed Blume config and folder metadata. `docs-site/theme.css` is the deliberate exception to marketing inline-style conventions; code uses canonical CDN Paper Mono. Use `npm run validate --prefix docs-site` and rendered desktop/mobile navigation and search checks when editing docs. Follow the framework's base-path handling: internal content links start at the documentation root, and `deployment.base` adds `/docs`.

Each tool follows Overview, Installation, Commands, Basic use cases, Advanced use cases, then focused guides. Keep introductions about purpose and reader tasks. Define necessary technical terms, explain the expected result of examples, and place relevant data-use, privacy, file-overwrite, and system-change details before the action. Keep exact commands and release limits accurate when simplifying prose.

Check commands and claims against published source tags and CLI help, and record the exact versions in `/docs/sources`. The October 11, 2026 snapshot covers TR-300 4.4.0, ND-300 4.0.1, and SD-300 4.1.0. Online installers remain versionless. Offline downloads point at `QubeTX/qube-reports-executables/releases/latest/download/qubetx-offline-bundle.zip`; the ZIP is a curated, checksummed snapshot containing matching docs and a local start page. Keep the displayed bundle versions pinned to its manifest rather than live product API results. Native installation and hardware acceptance remain distinct from checksum/help/build verification.

Installation documentation belongs inside each tool at `/docs/tr300/installation`, `/docs/nd300/installation`, and `/docs/sd300/installation`. Keep platform setup, offline instructions, updates, and removal with that tool; do not add a standalone Installation navigation group. Legacy shared installation URLs redirect to the documentation tool chooser.
