import DocumentationLinks from './DocumentationLinks'

export default function ExecutablesContent() {
  return <>
    <section id="tools" style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 4rem)', maxWidth: '1328px', margin: '0 auto' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'uppercase', marginBottom: '2rem' }}>What’s included</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 270px), 1fr))', gap: '2rem' }}>
        {[
          { name: 'TR-300', purpose: 'Read a system report', text: 'Computer specifications and system context, with explicit Markdown and JSON export.', href: '/docs/tr300/installation#offline-installation' },
          { name: 'ND-300', purpose: 'Investigate a connection', text: 'Network diagnostics and SpeedQX. Local checks work with available state; remote checks need a connection.', href: '/docs/nd300/installation#offline-installation' },
          { name: 'SD-300', purpose: 'Watch system activity', text: 'Terminal monitoring and the desktop app, with processes, hardware readings, and clear availability labels.', href: '/docs/sd300/installation#offline-installation' },
        ].map(tool => <article key={tool.name} style={{ borderTop: '1px solid #444', paddingTop: '1.5rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', marginBottom: '0.75rem' }}>{tool.name}</h3>
          <p style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.75rem' }}>{tool.purpose}</p>
          <p style={{ color: '#b8b8b8', lineHeight: 1.65 }}>{tool.text}</p>
          <a href={tool.href} style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center', marginTop: '1rem' }}>Install {tool.name} offline →</a>
        </article>)}
      </div>
    </section>
    <section style={{ borderTop: '1px solid #333', borderBottom: '1px solid #333', padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 4rem)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Use the toolkit</h2>
        <p style={{ color: '#b8b8b8', lineHeight: 1.65, maxWidth: '65ch', marginBottom: '2rem' }}>Follow the destination computer’s security and installation policies. Check the download against its published checksum before installing.</p>
        <ol style={{ display: 'grid', gap: '1.5rem', paddingLeft: '1.5rem', lineHeight: 1.65 }}>
          <li><strong>Extract the ZIP.</strong> Keep the folders and files together when copying them to another computer.</li>
          <li><strong>Open <code>index.html</code>.</strong> The local start page explains the included releases and how to verify their checksums.</li>
          <li><strong>Choose your tool and platform.</strong> Follow its offline guide before installing or upgrading. SD-300 native installers include the app and terminal tools; portable downloads remain separate.</li>
        </ol>
        <p style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <a href="https://github.com/QubeTX/qube-reports-executables/releases/latest/download/qubetx-offline-bundle.zip.sha256">ZIP checksum ↗</a>
          <a href="https://github.com/QubeTX/qube-reports-executables">Bundle source and manifest ↗</a>
        </p>
      </div>
    </section>
    <DocumentationLinks product="the toolkit" links={[
      { href: '/docs#choose-a-tool', title: 'Choose a tool', description: 'Find the guide that matches what you need to check.' },
      { href: '/docs/troubleshooting', title: 'Installation help', description: 'Resolve missing commands, permission errors, or conflicting installs.' },
      { href: '/docs/sources', title: 'Source versions', description: 'See which published releases the online documentation describes.' },
    ]} />
  </>
}
