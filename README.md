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

All three product install sections use the same **wrapper-script** pattern. The homepage hosts a small shell/PowerShell wrapper under `public/install-<product>.{sh,ps1}` (TR-300 uses the unprefixed `public/install.{sh,ps1}`). Each wrapper invokes the upstream cargo-dist installer script published with every product release, which drops the prebuilt binary into `CARGO_HOME` (`~/.cargo/bin` on Unix, `%USERPROFILE%\.cargo\bin` on Windows). No Rust toolchain, no MSVC Build Tools, no admin/sudo.

| Product | Mac/Linux one-liner | Windows one-liner |
|---------|--------------------|--------------------|
| TR-300 | `curl -LsSf https://reports.qubetx.com/install.sh \| sh` | `irm https://reports.qubetx.com/install.ps1 \| iex` |
| SD-300 | `curl -LsSf https://reports.qubetx.com/install-sd300.sh \| sh` | `irm https://reports.qubetx.com/install-sd300.ps1 \| iex` |
| ND-300 | `curl -LsSf https://reports.qubetx.com/install-nd300.sh \| sh` | `irm https://reports.qubetx.com/install-nd300.ps1 \| iex` |

Upstream cargo-dist asset names (used inside the wrappers):

| Product | GitHub repo | Asset names | Installed commands |
|---------|------------|------------|--------------------|
| TR-300 | `QubeTX/qube-machine-report` | `tr300-installer.{sh,ps1}` | `tr300` |
| SD-300 | `QubeTX/qube-system-diagnostics` | `SD300-installer.{sh,ps1}` (uppercase) | `sd300` (crates.io package is still `tr300-tui`) |
| ND-300 | `QubeTX/qube-network-diagnostics` | `nd-300-installer.{sh,ps1}` (hyphenated) | `nd300`, `speedqx` |

Each wrapper verifies the installed binary exists after the cargo-dist call and exits nonzero with a clear message if not — failures don't silently pass through. Update commands stay the same: `tr300 update`, `sd300 update`, `nd300 update` / `speedqx update`.

**TR-300 chained `tr300 install`:** The TR-300 wrapper has one extra step after the cargo-dist call — it runs `tr300 install` (by full path so it works without re-sourcing `PATH`). That subcommand writes a marker block to the user's shell profile (`~/.zshrc`, `~/.bashrc`, or PowerShell `$PROFILE`) that adds a `report` alias and configures `tr300 --fast` to run automatically on every new interactive shell. `tr300 install` is idempotent — re-running the one-liner does not duplicate profile entries. SD-300 and ND-300 wrappers don't chain a self-install subcommand because their CLIs don't expose one.

**TR-300 first-class Windows installers:** As of v3.15.0, TR-300 also publishes Global/Corporate MSI and EXE installers with every release. They're surfaced as four magenta download buttons under the Windows tab in the install panel — `Install.jsx` reads them from `https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-x86_64-pc-windows-msvc{,-corporate}{,-setup}.{msi,exe}`. Users who'd rather have a system-wide install or a double-click setup can use those instead of the command line.

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
