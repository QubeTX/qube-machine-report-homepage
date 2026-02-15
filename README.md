# QubeTX Product Homepage

Marketing homepage for QubeTX CLI tools: [TR-300 Machine Report](https://github.com/QubeTX/qube-machine-report), [SD-300 System Diagnostic](https://github.com/QubeTX/qube-system-diagnostics), and [ND-300 Network Diagnostic](https://github.com/QubeTX/qube-network-diagnostics).

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS Variables** - Theming and design tokens

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
├── App.jsx              # Router & layout
├── main.jsx             # Entry point
├── index.css            # Global styles & CSS variables
└── components/
    ├── ProductNav.jsx   # Cross-product navigation bar
    ├── Hero.jsx         # TR-300 hero section
    ├── Features.jsx     # TR-300 feature grid
    ├── Demos.jsx        # TR-300 capability showcase
    ├── Commands.jsx     # TR-300 commands table
    ├── SampleOutput.jsx # TR-300 sample output
    ├── Install.jsx      # TR-300 install commands
    ├── Quote.jsx        # TR-300 Kernighan quote
    ├── Footer.jsx       # TR-300 footer & version badges
    ├── SD300Hero.jsx    # SD-300 hero section
    ├── SD300Commands.jsx
    ├── SD300Keybindings.jsx
    ├── SD300Modes.jsx
    ├── SD300Sections.jsx
    ├── SD300Platform.jsx
    ├── SD300Install.jsx
    ├── SD300Footer.jsx
    ├── ND300Hero.jsx    # ND-300 hero section
    ├── ND300Commands.jsx
    ├── ND300Diagnostics.jsx
    ├── ND300Features.jsx
    ├── ND300Modes.jsx
    ├── ND300SampleOutput.jsx
    ├── ND300Install.jsx
    └── ND300Footer.jsx
```

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

BSD-3-Clause

---

QubeTX | https://qubetx.com
