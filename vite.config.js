import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve, sep } from 'node:path'

// Match the static host's directory-index resolution when previewing Blume
// alongside the marketing SPA. Unknown docs paths must not become the homepage.
const docsPreview = {
  name: 'docs-static-preview',
  configurePreviewServer(server) {
    const docsRoot = fileURLToPath(new URL('./dist/docs/', import.meta.url))
    server.middlewares.use((request, response, next) => {
      const url = new URL(request.url, 'http://localhost')
      if (url.pathname !== '/docs' && !url.pathname.startsWith('/docs/')) return next()
      const relative = decodeURIComponent(url.pathname.slice('/docs'.length)).replace(/^\/+/, '')
      const candidate = resolve(docsRoot, relative, 'index.html')
      if (candidate.startsWith(docsRoot.replace(/[\\/]$/, '') + sep) && existsSync(candidate)) {
        request.url = url.pathname.replace(/\/$/, '') + '/index.html' + url.search
      } else if (!existsSync(resolve(docsRoot, relative))) {
        response.statusCode = 404
        response.end('Documentation page not found')
        return
      }
      next()
    })
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), docsPreview],
})
