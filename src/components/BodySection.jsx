export default function BodySection({ id, title, introduction, children, width = '1120px', compact = false, label }) {
  return <section id={id} aria-label={label} style={{ padding: `${compact ? '2rem' : 'var(--body-section-space)'} var(--page-gutter)`, borderBottom: '1px solid var(--line)' }}>
    <div style={{ maxWidth: width, margin: '0 auto', minWidth: 0 }}>
      {title && <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--body-heading-size)', lineHeight: 1.1, letterSpacing: '-0.035em', textTransform: 'uppercase', marginBottom: introduction ? '1rem' : '2rem' }}>{title}</h2>}
      {introduction && <p style={{ maxWidth: '65ch', fontSize: '1.0625rem', lineHeight: 1.65, color: 'var(--body-muted)', marginBottom: '2rem', textWrap: 'pretty' }}>{introduction}</p>}
      {children}
    </div>
  </section>
}
