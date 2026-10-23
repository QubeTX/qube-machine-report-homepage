import DocumentationLinks from './DocumentationLinks'
import BodySection from './BodySection'
import GuideLink from './GuideLink'

export default function ExecutablesContent() {
  return <>
    <BodySection id="tools" title="What’s included">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 270px), 1fr))', gap: '2rem' }}>
        {[
          { name: 'TR-300', purpose: 'Read a system report', text: 'Computer specifications and system context, with explicit Markdown and JSON export.', href: '/docs/tr300/installation#offline-installation' },
          { name: 'ND-300', purpose: 'Investigate a connection', text: 'Network diagnostics and SpeedQX. Local checks work with available state; remote checks need a connection.', href: '/docs/nd300/installation#offline-installation' },
          { name: 'SD-300', purpose: 'Watch system activity', text: 'Terminal monitoring and the desktop app, with processes, hardware readings, and clear availability labels.', href: '/docs/sd300/installation#offline-installation' },
        ].map(tool => <article key={tool.name} style={{ borderTop: '1px solid #444', paddingTop: '1.5rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: '-0.035em', marginBottom: '0.75rem' }}>{tool.name}</h3>
          <p style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.75rem' }}>{tool.purpose}</p>
          <p style={{ color: '#b8b8b8', lineHeight: 1.65 }}>{tool.text}</p>
          <GuideLink href={tool.href} style={{ marginTop: '1rem' }}>Install {tool.name} offline</GuideLink>
        </article>)}
      </div>
    </BodySection>
    <BodySection title="Use the toolkit" introduction="Follow the destination computer’s security and installation policies. Check the download against its published checksum before installing.">
        <ol style={{ display: 'grid', gap: '1.5rem', paddingLeft: '1.5rem', lineHeight: 1.65 }}>
          <li><strong>Extract the ZIP.</strong> Keep the folders and files together when copying them to another computer.</li>
          <li><strong>Open <code>index.html</code>.</strong> The local start page explains the included releases and how to verify their checksums.</li>
          <li><strong>Choose your tool and platform.</strong> Follow its offline guide before installing or upgrading. SD-300 native installers include the app and terminal tools; portable downloads remain separate.</li>
        </ol>
        <p style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <GuideLink href="https://github.com/QubeTX/qube-reports-executables/releases/latest/download/qubetx-offline-bundle.zip.sha256">ZIP checksum</GuideLink>
          <GuideLink href="https://github.com/QubeTX/qube-reports-executables">Bundle source and manifest</GuideLink>
        </p>
    </BodySection>
    <DocumentationLinks product="the toolkit" links={[
      { href: '/docs#choose-a-tool', title: 'Choose a tool', description: 'Find the guide that matches what you need to check.' },
      { href: '/docs/troubleshooting', title: 'Installation help', description: 'Resolve missing commands, permission errors, or conflicting installs.' },
      { href: '/docs/sources', title: 'Source versions', description: 'See which published releases the online documentation describes.' },
    ]} />
  </>
}
