import { useState } from 'react'

const products = [
  { label: 'TR-300', path: '/' },
  { label: 'ND-300', path: '/nd300' },
  { label: 'SD-300', path: '/sd300' },
  { label: 'WB-300', path: '/wb300' },
  // WIP-DELISTED — restore when Shaughv OS is ready to be marketed:
  // { label: 'SHAUGHVOS', path: '/shaughvos' },
]

const brandRoot = 'https://cdn.shaughv.com/brand'

function FooterLink({ href, children, current = false }) {
  const [highlighted, setHighlighted] = useState(false)
  const external = href.startsWith('https://')

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-current={current ? 'page' : undefined}
      onMouseEnter={() => setHighlighted(true)}
      onMouseLeave={() => setHighlighted(false)}
      onFocus={() => setHighlighted(true)}
      onBlur={() => setHighlighted(false)}
      style={{
        display: 'flex', alignItems: 'center', minHeight: '44px',
        width: 'fit-content', maxWidth: '100%',
        color: highlighted || current ? 'var(--accent-signal)' : 'var(--fg-bone)',
        textDecoration: highlighted ? 'underline' : 'none', textUnderlineOffset: '5px',
        fontSize: '0.8rem', lineHeight: 1.5,
      }}
    >
      {children}
    </a>
  )
}

function BrandMark({ label, file, width, height }) {
  const mask = `url("${brandRoot}/${file}") center / contain no-repeat`
  return (
    <span role="img" aria-label={label} style={{
      display: 'block', width, height, backgroundColor: 'currentColor',
      mask, WebkitMask: mask,
    }} />
  )
}

export default function SiteFooter({ title, repository, status = 'Operational', children, attribution, gpl = false }) {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const headingStyle = {
    fontSize: '0.7rem', fontWeight: 500, textTransform: 'uppercase',
    letterSpacing: '0.1em', color: '#999', marginBottom: '0.75rem',
  }

  return (
    <footer aria-label="QUBETX site footer" style={{
      padding: 'clamp(2rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 4rem) 1.5rem',
      borderTop: '1px solid #333', marginTop: 'auto',
      color: 'var(--fg-bone)', fontFamily: 'var(--font-mono)',
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
        gap: '2.5rem', paddingBottom: '3rem',
      }}>
        <div style={{ minWidth: 0 }}>
          <p style={headingStyle}>QUBETX Developer Tools</p>
          <a href="https://shaughv.com" target="_blank" rel="noopener noreferrer"
            aria-label="SHAUGHV — Emmett Shaughnessy's portfolio"
            style={{ display: 'grid', gridTemplateColumns: '104px 80px', gap: '24px', alignItems: 'center', width: 'fit-content', color: 'var(--fg-bone)' }}>
            {/* The standalone wordmark has a square viewBox with internal whitespace.
                Keep its aspect ratio; 104px gives the reference's visible proportions. */}
            <BrandMark label="SHAUGHV" file="shaughv/logos/SHAUGHV-Official.svg" width="104px" height="104px" />
            <BrandMark label="Shaughnessy family crest — Fortis et stabilis" file="crests/Shaughnessy-Crest-Footer.svg" width="80px" height="100px" />
          </a>
          <p style={{ marginTop: '1.25rem', fontSize: '0.7rem', lineHeight: 1.8, color: '#999' }}>
            &copy; {new Date().getFullYear()} QUBETX
          </p>
          <FooterLink href="https://qubetx.com">QUBETX.COM ↗</FooterLink>
          {attribution}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.5fr)', gap: '1.5rem' }}>
          <nav aria-label="Footer products">
            <h2 style={headingStyle}>The tools</h2>
            {products.map(product => (
              <FooterLink key={product.path} href={product.path} current={path === product.path}>
                {product.label}
              </FooterLink>
            ))}
          </nav>

          <nav aria-label="Footer resources">
            <h2 style={headingStyle}>Resources</h2>
            <FooterLink href="/install-guide" current={path === '/install-guide'}>Install guide</FooterLink>
            <FooterLink href="/executables" current={path === '/executables'}>Offline downloads</FooterLink>
            <FooterLink href={`https://github.com/${repository}`}>GitHub ↗</FooterLink>
            {!gpl && <FooterLink href={`https://github.com/${repository}/blob/main/README.md`}>Documentation ↗</FooterLink>}
            <FooterLink href={gpl ? 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.html' : 'https://polyformproject.org/licenses/noncommercial/1.0.0/'}>
              {gpl ? 'GPLv2 license' : 'PolyForm NC license'} ↗
            </FooterLink>
          </nav>
        </div>
      </div>

      <div style={{
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between',
        gap: '1rem 2rem', paddingTop: '1.5rem', paddingRight: '3.5rem', borderTop: '1px solid #333',
      }}>
        <p style={{ fontSize: '0.7rem', lineHeight: 1.7, color: '#aaa' }}>{title}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>{children}</div>
        <p style={{ fontSize: '0.65rem', lineHeight: 1.7, color: 'var(--accent-signal)', textTransform: 'uppercase' }}>
          Status: {status}
        </p>
      </div>
    </footer>
  )
}
