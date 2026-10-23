import { useState } from 'react'

export default function ActionLink({ href, children, primary = false, label }) {
  const [highlighted, setHighlighted] = useState(false)
  const [pressed, setPressed] = useState(false)
  return <a href={href} aria-label={label}
    onMouseEnter={() => setHighlighted(true)} onMouseLeave={() => { setHighlighted(false); setPressed(false) }}
    onFocus={() => setHighlighted(true)} onBlur={() => { setHighlighted(false); setPressed(false) }}
    onPointerDown={() => setPressed(true)} onPointerUp={() => setPressed(false)} onPointerCancel={() => setPressed(false)}
    style={{
      position: 'relative', isolation: 'isolate', overflow: 'hidden', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '52px',
      padding: '0.85rem 1.2rem', borderRadius: '2px', fontFamily: 'var(--font-body)',
      fontSize: '1rem', fontWeight: 600, lineHeight: 1.4, textAlign: 'center',
      border: `1px solid ${primary ? 'var(--accent-signal)' : highlighted ? 'var(--fg-bone)' : '#555'}`,
      color: primary || highlighted ? 'var(--bg-void)' : 'var(--fg-bone)',
      background: primary ? 'var(--accent-signal)' : 'transparent',
      transform: pressed ? 'translateY(1px) scale(0.98)' : highlighted ? 'translateY(-2px)' : 'none',
      textDecoration: 'none', transition: 'color 220ms ease, border-color 220ms ease, transform 220ms var(--ease-out)',
    }}><span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'var(--fg-bone)', zIndex: -1, transform: highlighted ? 'translateY(0)' : 'translateY(101%)', transition: 'transform 300ms var(--ease-out)' }} />{children}</a>
}
