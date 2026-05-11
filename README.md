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

The product install sections use Cargo-first one-liners for macOS, Linux, and Windows. Each line installs rustup/Rust when needed, loads Cargo's bin directory into the current terminal `PATH`, updates stable Rust, then installs the matching crates.io package.

| Product | Cargo package | Installed command | Update command |
|---------|---------------|-------------------|----------------|
| TR-300 | `tr300` | `tr300` | `tr300 update` |
| ND-300 | `nd300` | `nd300`, `speedqx` | `nd300 update`, `speedqx update` |
| SD-300 | `tr300-tui` | `sd300` | `sd300 update` |

SD-300 is the only package where the crates.io package name differs from the installed command. Do not document `cargo install sd300` or `cargo install sd-300`; the supported Cargo path is `cargo install tr300-tui`.

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
