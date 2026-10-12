import { defineConfig } from 'blume'
import tr300 from './content/tr300/meta'
import nd300 from './content/nd300/meta'
import sd300 from './content/sd300/meta'

export default defineConfig({
  title: 'QubeTX Docs',
  description: 'Install, use, and troubleshoot TR-300, ND-300, SpeedQX, and SD-300.',
  logo: { text: 'QUBETX / Docs', href: '/' },
  content: { root: 'content' },
  theme: { accent: '#ff00d4', mode: 'system', radius: 'md' },
  navigation: {
    sidebar: {
      display: 'group',
      // Explicit items prevent Blume from hoisting standalone pages above groups.
      // Keep each tool's child order in its existing folder metadata.
      items: [
        'index',
        { label: tr300.title, root: 'tr300', items: tr300.pages.map(page => `tr300/${page}`) },
        { label: nd300.title, root: 'nd300', items: nd300.pages.map(page => `nd300/${page}`) },
        { label: sd300.title, root: 'sd300', items: sd300.pages.map(page => `sd300/${page}`) },
        'troubleshooting',
        'sources',
      ],
    },
  },
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
