# QubeTX Product Homepage

Marketing homepage for QubeTX CLI tools: [TR-300 Machine Report](https://github.com/QubeTX/qube-machine-report), [SD-300 System Diagnostic](https://github.com/QubeTX/qube-system-diagnostics), [ND-300 Network Diagnostic](https://github.com/QubeTX/qube-network-diagnostics), a unified [Executables Download Hub](https://github.com/QubeTX/qube-reports-executables) for pre-built offline installers, and the [shaughvOS](https://github.com/RealEmmettS/shaughvOS) custom operating system.

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

All four product install sections use the same **wrapper-script** pattern. The homepage hosts a small shell/PowerShell wrapper under `public/install-<product>.{sh,ps1}` (TR-300 uses the unprefixed `public/install.{sh,ps1}`). Each wrapper invokes the upstream cargo-dist installer script published with every product release, which drops the prebuilt binary into `CARGO_HOME` (`~/.cargo/bin` on Unix, `%USERPROFILE%\.cargo\bin` on Windows). No Rust toolchain, no MSVC Build Tools, no admin/sudo.

| Product | Mac/Linux one-liner | Windows one-liner |
|---------|--------------------|--------------------|
| TR-300 | `curl -LsSf https://reports.qubetx.com/install.sh \| sh` | `powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install.ps1 \| iex"` |
| SD-300 | `curl -LsSf https://reports.qubetx.com/install-sd300.sh \| sh` | `powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install-sd300.ps1 \| iex"` |
| ND-300 | `curl -LsSf https://reports.qubetx.com/install-nd300.sh \| sh` | `powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install-nd300.ps1 \| iex"` |
| WB-300 | `curl -LsSf https://reports.qubetx.com/install-wb300.sh \| sh` | `powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install-wb300.ps1 \| iex"` |

Upstream cargo-dist asset names (used inside the wrappers):

| Product | GitHub repo | Asset names | Installed commands |
|---------|------------|------------|--------------------|
| TR-300 | `QubeTX/qube-machine-report` | `tr300-installer.{sh,ps1}` (canonical), `tr-300-installer.{sh,ps1}` (legacy alias) | `tr300` |
| SD-300 | `QubeTX/qube-system-diagnostics` | `SD300-installer.{sh,ps1}` (uppercase) | `sd300` (crates.io package is still `tr300-tui`) |
| ND-300 | `QubeTX/qube-network-diagnostics` | `nd-300-installer.{sh,ps1}` (hyphenated) | `nd300`, `speedqx` |
| WB-300 | `QubeTX/qube-workbranch-view` | `wb300-installer.{sh,ps1}` | `wb300` |

Each wrapper verifies the installed binary exists after the cargo-dist call and exits nonzero with a clear message if not — failures don't silently pass through. Update commands stay the same: `tr300 update`, `sd300 update`, `nd300 update` / `speedqx update`, `wb300 update`.

**TR-300 chained `tr300 install`:** The TR-300 wrapper has one extra step after the cargo-dist call — it runs `tr300 install` (by full path so it works without re-sourcing `PATH`). That subcommand writes a marker block to the user's shell profile (`~/.zshrc`, `~/.bashrc`, or PowerShell `$PROFILE`) that adds a `report` alias and configures `tr300 --fast` to run automatically on every new interactive shell. `tr300 install` is idempotent — re-running the one-liner does not duplicate profile entries. SD-300 and ND-300 wrappers don't chain a self-install subcommand because their CLIs don't expose one.

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
│   ├── InstallGuideContent.jsx # Offline installer guide content
│   ├── InstallGuideFooter.jsx
│   ├── InstallGuideHero.jsx
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
│   ├── SD300Sections.jsx
│   ├── ShaughvOSCommands.jsx # shaughvOS quick commands table
│   ├── ShaughvOSFeatures.jsx # shaughvOS feature rows
│   ├── ShaughvOSFooter.jsx   # shaughvOS footer with DietPi attribution
│   ├── ShaughvOSHardware.jsx # shaughvOS hardware compatibility table
│   ├── ShaughvOSHero.jsx     # shaughvOS hero with SHAUGHV logo
│   ├── ShaughvOSInstall.jsx  # shaughvOS tabbed install (images + Debian)
│   ├── ShaughvOSOverview.jsx # shaughvOS 3-column overview grid
│   └── ShaughvOSPitch.jsx    # shaughvOS marketing pitch section
├── App.jsx                   # TR-300 product page
├── ExecutablesApp.jsx        # Executables Download Hub page
├── InstallGuideApp.jsx       # User install guide page
├── index.css                 # Global styles, CSS variables & .hide-on-mobile utility
├── main.jsx                  # Entry point & pathname-based router
├── ND300App.jsx              # ND-300 product page
├── SD300App.jsx              # SD-300 product page
└── ShaughvOSApp.jsx          # shaughvOS product page
```

## Pages

| Route | Product | Description |
|-------|---------|-------------|
| `/` | TR-300 Machine Report | System hardware reporting tool |
| `/sd300` | SD-300 System Diagnostic | Interactive system diagnostic utility |
| `/nd300` | ND-300 Network Diagnostic | Network diagnostics and repair tool |
| `/executables` | Executables Download Hub | Pre-built offline installers for all QubeTX CLI tools |
| `/install-guide` | Install Guide | Step-by-step offline installer guide |
| `/shaughvos` | shaughvOS | Custom diagnostic operating system for any hardware |

## Design

- **Background:** #0a0a0a
- **Foreground:** #dcdcdc
- **Accent:** #ff00d4
- **Fonts:** Archivo Black (display), Cormorant Garamond (serif), JetBrains Mono (mono)

## Deployment

Built for Vercel deployment. Pushes to the repository default branch (`main`) trigger production deployment through Vercel Git integration. The `dist/` folder contains the production build.

```bash
npm run build
```

## License

[PolyForm Noncommercial 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0)

---

QubeTX | https://qubetx.com
