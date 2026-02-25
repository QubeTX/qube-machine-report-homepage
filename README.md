# QubeTX Product Homepage

Marketing homepage for QubeTX CLI tools: [TR-300 Machine Report](https://github.com/QubeTX/qube-machine-report), [SD-300 System Diagnostic](https://github.com/QubeTX/qube-system-diagnostics), [ND-300 Network Diagnostic](https://github.com/QubeTX/qube-network-diagnostics), and a unified [Executables Download Hub](https://github.com/QubeTX/qube-reports-executables) for pre-built offline installers.

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Lenis** - Smooth scrolling
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

## Project Structure

```
src/
├── main.jsx                  # Entry point & pathname-based router
├── App.jsx                   # TR-300 product page
├── SD300App.jsx              # SD-300 product page
├── ND300App.jsx              # ND-300 product page
├── ExecutablesApp.jsx        # Executables Download Hub page
├── index.css                 # Global styles & CSS variables
└── components/
    ├── ProductNav.jsx        # Cross-product navigation bar
    ├── Hero.jsx              # TR-300 hero section
    ├── Features.jsx          # TR-300 feature grid
    ├── Demos.jsx             # TR-300 capability showcase
    ├── Commands.jsx          # TR-300 commands table
    ├── SampleOutput.jsx      # TR-300 sample output
    ├── Install.jsx           # TR-300 install commands
    ├── Quote.jsx             # TR-300 Kernighan quote
    ├── Footer.jsx            # TR-300 footer & version badges
    ├── SD300Hero.jsx         # SD-300 hero section
    ├── SD300Commands.jsx
    ├── SD300Keybindings.jsx
    ├── SD300Modes.jsx
    ├── SD300Sections.jsx
    ├── SD300Platform.jsx
    ├── SD300Install.jsx
    ├── SD300Footer.jsx
    ├── ND300Hero.jsx         # ND-300 hero section
    ├── ND300Commands.jsx
    ├── ND300Diagnostics.jsx
    ├── ND300Features.jsx
    ├── ND300Modes.jsx
    ├── ND300SampleOutput.jsx
    ├── ND300Install.jsx
    ├── ND300Footer.jsx
    ├── ExecutablesHero.jsx   # Executables 90vh hero with download button & scroll link
    ├── ExecutablesContent.jsx # Explainer, 3-column tool grid, secondary download CTA
    └── ExecutablesFooter.jsx  # Footer with tool badges and cross-links
```

## Pages

| Route | Product | Description |
|-------|---------|-------------|
| `/` | TR-300 Machine Report | System hardware reporting tool |
| `/sd300` | SD-300 System Diagnostic | Interactive system diagnostic utility |
| `/nd300` | ND-300 Network Diagnostic | Network diagnostics and repair tool |
| `/executables` | Executables Download Hub | Pre-built offline installers for all QubeTX CLI tools |

## Design

- **Background:** #0a0a0a
- **Foreground:** #dcdcdc
- **Accent:** #ff00d4
- **Fonts:** Archivo Black (display), Cormorant Garamond (serif), JetBrains Mono (mono)

## Deployment

Built for Vercel deployment. The `dist/` folder contains the production build.

```bash
npm run build
```

## License

[PolyForm Noncommercial 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0)

---

QubeTX | https://qubetx.com
