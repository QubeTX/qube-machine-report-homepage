export default function CommandExamples({ product, rows, note, docs }) {
  return <section id="commands" style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 4rem)', borderBottom: '1px solid #292929' }}>
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', textTransform: 'uppercase', lineHeight: 1.2, marginBottom: '1rem' }}>Try {product}</h2>
      <p style={{ color: '#b8b8b8', maxWidth: '65ch', marginBottom: '1.5rem', lineHeight: 1.65 }}>{note}</p>
      <dl>
        {rows.map(({ command, description }) => <div key={command} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '0.5rem 2rem', padding: '1.25rem 0', borderTop: '1px solid #333' }}>
          <dt><code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9375rem', overflowWrap: 'anywhere' }}>{command}</code></dt>
          <dd style={{ color: '#b8b8b8', lineHeight: 1.6 }}>{description}</dd>
        </div>)}
      </dl>
      <a href={docs} style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', marginTop: '1rem' }}>All {product} commands and options →</a>
    </div>
  </section>
}
