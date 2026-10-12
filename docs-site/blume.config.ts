import { defineConfig } from 'blume'

export default defineConfig({
  title: 'QubeTX Docs',
  description: 'Install, use, and troubleshoot TR-300, ND-300, SpeedQX, and SD-300.',
  logo: { text: 'QUBETX / Docs', href: '/' },
  content: { root: 'content' },
  theme: { accent: '#ff00d4', mode: 'system', radius: 'md' },
  navigation: { sidebar: { display: 'group' } },
  footer: {
    copyright: '© 2026 QUBETX',
    links: [
      { label: 'All tools', href: 'https://reports.qubetx.com' },
      { label: 'Offline downloads', href: 'https://reports.qubetx.com/executables' },
      { label: 'Source versions', href: '/sources' },
    ],
  },
  deployment: { site: 'https://reports.qubetx.com', base: '/docs' },
  agents: { llmsTxt: true },
  seo: { sitemap: true },
})
