# TR-300 Homepage

Marketing homepage for [TR-300 Machine Report](https://github.com/QubeTX/qube-machine-report), a cross-platform system information CLI tool built in Rust.

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
├── App.jsx              # Main layout
├── main.jsx             # Entry point
├── index.css            # Global styles & CSS variables
└── components/
    ├── Hero.jsx         # Logo, title, tagline
    ├── Features.jsx     # 2-column feature grid
    ├── Demos.jsx        # Capability showcase
    ├── Install.jsx      # Platform-tabbed install commands
    ├── Quote.jsx        # Kernighan quote section
    └── Footer.jsx       # Company info & badges
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

Shaughnessy V Development Inc. | Frisco, Texas
