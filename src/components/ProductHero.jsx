import { useEffect } from 'react'
import ProductNav from './ProductNav'
import ActionLink from './ActionLink'

export default function ProductHero({ product, category, description, artwork, version, repository, docs, children, download, afterActions }) {
  useEffect(() => { document.title = `QUBETX ${product}` }, [product])
  return <header style={{ padding: '1rem clamp(1rem, 4vw, 4rem) 0', borderBottom: '1px solid #292929' }}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gap: '0.5rem' }}>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', alignItems: 'center', gap: '0.5rem 1.5rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--fg-dim)', lineHeight: 1.6 }}>QUBETX / {category}</span>
        <ProductNav />
      </div>
      <div style={{ display: 'grid', justifyItems: 'center', textAlign: 'center', padding: 'clamp(3rem, 7vw, 6rem) 0 clamp(3rem, 6vw, 5rem)' }}>
        {artwork ? <div aria-hidden="true" style={{
          width: product === 'ND-300' ? 'clamp(160px, 18vw, 244px)' : 'clamp(90px, 10vw, 132px)',
          aspectRatio: product === 'ND-300' ? '153 / 57' : '1', marginBottom: '2rem', opacity: 0.92,
          background: 'var(--fg-bone)', mask: `url('${artwork}') center / contain no-repeat`, WebkitMask: `url('${artwork}') center / contain no-repeat`,
        }} /> : <div aria-hidden="true" style={{ display: 'flex', marginBottom: '2rem', opacity: 0.9 }}>
          {[0, 1, 2].map(i => <span key={i} style={{ width: '60px', height: '120px', border: '8px solid var(--fg-bone)', borderRadius: '60px', margin: '0 -12px', mixBlendMode: 'exclusion' }} />)}
        </div>}
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: download ? 'clamp(2.6rem, 7.8vw, 7rem)' : 'clamp(3.5rem, 13vw, 11rem)', lineHeight: 1, letterSpacing: '-0.04em', textTransform: 'uppercase', maxWidth: '100%' }}>{product}</h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.4, maxWidth: '38rem', margin: '1.75rem 0' }}>{description}</p>
        {children}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
          <ActionLink primary href={download || '#install'}>{download ? 'Download toolkit (.ZIP)' : `Install ${product}`} <span aria-hidden="true">&nbsp;↓</span></ActionLink>
          <ActionLink href={docs}>{download ? 'Tools included' : 'Read documentation'} <span aria-hidden="true">&nbsp;→</span></ActionLink>
        </div>
        {afterActions}
        {version && <a href={`https://github.com/${repository}/releases/latest`} style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', minHeight: '44px', fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--fg-dim)', textUnderlineOffset: '4px' }}>Release {version} · Windows, macOS & Linux</a>}
      </div>
    </div>
  </header>
}
