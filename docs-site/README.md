# QubeTX documentation

Blume 2.2.3 builds the Markdown in `content/` as a static site mounted at `/docs`.
This package has its own lockfile to isolate Astro/React 19 from the marketing
site's React 18 dependencies. Use Node 22.19 or newer.

```sh
npm ci --prefix docs-site
npm run dev --prefix docs-site
npm run validate --prefix docs-site
npm run build
npm run preview
```

Run these from the repository root. The root build combines both sites in
`dist/`; its preview resolves nested documentation pages before the SPA
fallback. Vercel uses explicit marketing rewrites, clean URLs, and static docs.

Verify internal links, search-result navigation, copied commands, light/dark
themes, and the mobile drawer after framework upgrades. Review all three
products' command contracts against published release commits and update the
source-version page. Do not replace the pinned offline inventory with live
version badges.

The scoped `path-to-regexp` override updates an older transitive Vercel routing
dependency within its major version. The Vercel server adapter is not enabled:
the deployed output is static. The initial dependency audit also reports
moderate/low transitive issues in Markdown/diagram build dependencies; do not
apply `npm audit fix --force`, which currently suggests replacing Blume with an
unrelated pre-release version. Reassess these reports with framework updates.

Each tool owns its `installation.md`, covering platform setup, portable/offline use, updates, and uninstall. Keep installation within the tool navigation; old shared installation URLs redirect to the tool chooser.
