import BodySection from './BodySection'

export default function CapabilityGrid({ items }) {
  return <BodySection label="What you can do"><div style={{ display: 'grid', gap: '2rem 3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))' }}>
    {items.map(item => <div key={item.title} style={{ minWidth: 0 }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--fg-dim)', marginBottom: '1rem' }}>{item.label}</p>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', letterSpacing: '-0.035em', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '1rem', maxWidth: '16ch' }}>{item.title}</h2>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.65, color: 'var(--body-muted)', maxWidth: '48ch', textWrap: 'pretty' }}>{item.description}</p>
    </div>)}
  </div></BodySection>
}
