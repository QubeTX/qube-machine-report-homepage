---
name: new-product-page
description: >-
  Scaffold a new product/landing page on this React + Vite marketing site end-to-end — a new
  pathname route, a top-level *App.jsx shell, product-prefixed inline-styled components, the
  ProductNav entry, and (for installable tools) a public/install wrapper following the Install
  Documentation Contract. Use when asked to "add a new product page", "create a landing page for
  <tool>", "add a route for <X>", or "scaffold a new section of the site".
---

# New Product Page

Adds a new page following this repo's exact conventions. Read `CLAUDE.md` first for the routing,
styling, and install rules — this skill is the checklist that ties them together.

## Inputs to settle first

- **Route** (e.g. `/foo`) and **display name**.
- **Component prefix** (e.g. `Foo` → `FooHero.jsx`, `FooFooter.jsx`). TR-300 (root, `/`) is the
  only unprefixed page; every other page is prefixed.
- **Is it an installable CLI?** If yes, you'll also add an install wrapper + Install component.
- **Source repo** (if it markets a real tool) so content can be verified — see CLAUDE.md
  "Source Repositories".

## Steps

1. **Page shell — `src/<Name>App.jsx`.** Copy the structure of an existing one (e.g.
   `ND300App.jsx`): initialize Lenis smooth scroll in a `useEffect`, then render the page's
   components in order. No router import — routing is centralized in `main.jsx`.

2. **Components — `src/components/<Prefix>*.jsx`.** Build the sections (typically `Hero`,
   feature/overview blocks, commands, install, footer). Follow the styling conventions strictly:
   - All styles **inline** (`style={{}}`); no CSS modules / styled-components.
   - Hover via `useState` + `onMouseEnter`/`onMouseLeave`, never CSS `:hover`.
   - Use the design tokens (`--bg-void`, `--fg-bone`, `--fg-dim`, `--accent-signal`,
     `--font-display`, `--font-serif`, `--font-mono`) from `src/index.css`.
   - Fluid type with `clamp()`; CSS Grid for layout; add `id="commands"`/`id="tools"` anchors if
     you want scroll links from the hero.
   - For live version badges, reuse the `useGitHubVersion` hook with the product's repo.

3. **Register the route — `src/main.jsx`.** Import the new `*App` and add a ternary branch for
   both `'/route'` and `'/route/'` (match the existing pattern). `vercel.json` already rewrites all
   paths to `index.html`, so **no vercel change is needed**.

4. **Navigation — `src/components/ProductNav.jsx`.** Add `{ label: 'LABEL', path: '/route' }` to
   the products array so the page is reachable from every other page. Add cross-links in the new
   page's footer to match the others.

5. **Install (installable tools only)** — follow the **Install Documentation Contract** in CLAUDE.md:
   - Add `public/install-<product>.{sh,ps1}` wrappers that call the upstream cargo-dist installer
     (`releases/latest/download/<asset>`) and fail loudly if the binary is missing afterward. Keep
     them tiny (~10 lines). Don't add an MSVC preflight — the cargo-dist binary is prebuilt.
   - Build an `<Prefix>Install.jsx` with the platform-tabbed one-liners (`curl … | sh` /
     `powershell -ExecutionPolicy ByPass -c "irm … | iex"`). Reuse the `DownloadButton` helper + installer-block layout from `Install.jsx`
     if the product also ships MSI/EXE installers.

6. **Changelog** — add the change to `CHANGELOG.md` **and** `HUMAN_CHANGELOG.md` in the same commit
   (see the Changelog rule).

7. **Agent docs** — if this introduces a new convention, run `sync-agent-docs` so CLAUDE.md,
   AGENTS.md, and CODEX_PROJECT.md (including its file tree) stay aligned.

## Verify

- `npm run lint` and `npm run build` both pass.
- The new route renders; `/route` and `/route/` both work; ProductNav links resolve.
- If it markets a real tool, run the `product-page-accuracy-reviewer` agent to confirm versions,
  commands, and install steps match the source repo (local clone + live GitHub).
