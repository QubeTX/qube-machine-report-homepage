# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run lint       # ESLint
```

No test framework is configured — there are no tests to run.

## Deployment

Push to `main` triggers automatic production deployment via Vercel Git integration. No Vercel CLI needed.

SPA routing is handled by `vercel.json` which rewrites all paths to `/index.html`.

## Architecture

**Stack:** React 18 + Vite (plain JavaScript, no TypeScript). No state management library, no React Router.

**Routing:** Custom pathname-based routing in `src/main.jsx`. Each route maps to a top-level `*App.jsx` component:

| Route | Entry Component |
|-------|----------------|
| `/` | `App.jsx` (TR-300 Machine Report) |
| `/sd300` | `SD300App.jsx` |
| `/nd300` | `ND300App.jsx` |
| `/executables` | `ExecutablesApp.jsx` |
| `/install-guide` | `InstallGuideApp.jsx` |
| `/shaughvos` | `ShaughvOSApp.jsx` |

To add a new route: import the new App component in `main.jsx`, add a ternary branch to the `Page` const, and add a rewrite if needed (current `vercel.json` already catches all paths).

**Components:** All in `src/components/`. Prefixed by product (`SD300*`, `ND300*`, `ShaughvOS*`, `Executables*`, `InstallGuide*`). Unprefixed components belong to the TR-300 (root) page. `ProductNav.jsx` is the shared cross-product navigation bar.

**Hooks:** `src/hooks/useGitHubVersion.js` (generic — fetches latest release tag from any GitHub repo) and `useLatestRelease.js` (hardcoded to shaughvOS repo).

## Styling Conventions

- **All component styles are inline** (`style={{}}` objects). No CSS modules, no styled-components.
- **Hover states** use `useState` + `onMouseEnter`/`onMouseLeave` — not CSS `:hover`.
- **Global CSS** lives only in `src/index.css` (CSS variables, resets, keyframes, scrollbar, `.hide-on-mobile`).
- **Responsive typography** uses `clamp()` for fluid scaling.
- **Grid layouts** — CSS Grid is the primary layout tool, not flexbox (except for simple stacks).

### Design Tokens (CSS Variables)

| Variable | Value | Usage |
|----------|-------|-------|
| `--bg-void` | `#0a0a0a` | Page background |
| `--fg-bone` | `#dcdcdc` | Primary text |
| `--fg-dim` | `#666666` | Secondary/muted text |
| `--accent-signal` | `#ff00d4` | Neon magenta accent |
| `--font-display` | Archivo Black | Headings |
| `--font-serif` | Cormorant Garamond | Pull quotes |
| `--font-mono` | JetBrains Mono | Body text, code |

## Source Repositories

Each product page on this site markets a separate CLI tool / project. When updating features, commands, install instructions, or capabilities on a product page, **read the actual source repo** to ensure accuracy. All repos are accessible via GitHub (QubeTX org or RealEmmettS) and most are cloned locally.

| Product | GitHub Repo | Local Path |
|---------|------------|------------|
| TR-300 Machine Report | `QubeTX/qube-machine-report` | `C:\Users\hey\Documents\GitHub\qube-machine-report` |
| SD-300 System Diagnostic | `QubeTX/qube-system-diagnostics` | `C:\Users\hey\Documents\GitHub\qube-system-diagnostics` |
| ND-300 Network Diagnostic | `QubeTX/qube-network-diagnostics` | `C:\Users\hey\Documents\GitHub\qube-network-diagnostics` |
| Executables Download Hub | `QubeTX/qube-reports-executables` | *(not cloned locally)* |
| shaughvOS | `RealEmmettS/shaughvOS` | `C:\Users\hey\Documents\GitHub\shaughvOS` |

**Workflow for feature/content updates:** Read the source repo's README, CHANGELOG, and relevant source files before updating the corresponding product page here. Use the local clone when available; fall back to `gh` CLI or GitHub API for the executables repo.

## Key Libraries

- **framer-motion** — entrance animations (hero sections only)
- **lenis** — smooth scrolling with custom easing (initialized in each App component)
