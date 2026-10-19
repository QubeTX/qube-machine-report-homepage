import { useState } from 'react'

function Capability({ title, description, label }) {
  const [hovered, setHovered] = useState(false)
  return <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    style={{ minWidth: 0, padding: 'clamp(1.5rem, 4vw, 3rem)', border: '1px solid #292929', background: hovered ? '#101010' : 'transparent', transition: 'background 200ms ease' }}>
    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--fg-dim)', marginBottom: '1rem' }}>{label}</p>
    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', textTransform: 'uppercase', lineHeight: 1.15, marginBottom: '1rem' }}>{title}</h2>
    <p style={{ fontSize: '1.0625rem', lineHeight: 1.65, color: '#b8b8b8', maxWidth: '60ch' }}>{description}</p>
  </div>
}

export default function CapabilityGrid({ items }) {
  return <section aria-label="What you can do" style={{ maxWidth: '1440px', margin: '0 auto', padding: 'clamp(2rem, 4vw, 4rem) clamp(1rem, 4vw, 4rem)', display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))' }}>
    {items.map(item => <Capability key={item.title} {...item} />)}
  </section>
}
