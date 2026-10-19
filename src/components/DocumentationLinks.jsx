export default function DocumentationLinks({ product, links }) {
  return <section style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 4rem)' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: 1.2, textTransform: 'uppercase', marginBottom: '2rem' }}>Go further with {product}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '2rem' }}>
        {links.map(({ href, title, description }) => <div key={href} style={{ borderTop: '1px solid #444', paddingTop: '1rem' }}>
          <a href={href} style={{ fontSize: '1.125rem', fontWeight: 600, minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>{title} →</a>
          <p style={{ color: '#b8b8b8', lineHeight: 1.65, marginTop: '0.5rem' }}>{description}</p>
        </div>)}
      </div>
    </div>
  </section>
}
