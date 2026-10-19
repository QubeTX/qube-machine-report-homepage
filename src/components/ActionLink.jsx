import { useState } from 'react'

export default function ActionLink({ href, children, primary = false, label }) {
  const [highlighted, setHighlighted] = useState(false)
  return <a href={href} aria-label={label}
    onMouseEnter={() => setHighlighted(true)} onMouseLeave={() => setHighlighted(false)}
    onFocus={() => setHighlighted(true)} onBlur={() => setHighlighted(false)}
    style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '44px',
      padding: '0.65rem 1rem', borderRadius: '4px', fontFamily: 'var(--font-body)',
      fontSize: '1rem', fontWeight: 600, lineHeight: 1.4, textAlign: 'center',
      border: `1px solid ${primary ? 'var(--accent-signal)' : highlighted ? 'var(--fg-bone)' : '#555'}`,
      color: primary ? 'var(--bg-void)' : 'var(--fg-bone)',
      background: primary ? 'var(--accent-signal)' : highlighted ? '#202020' : 'transparent',
      textDecoration: 'none', transition: 'background 180ms ease, border-color 180ms ease',
    }}>{children}</a>
}
