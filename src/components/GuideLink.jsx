import { useState } from 'react'

export default function GuideLink({ href, children, style }) {
  const [active, setActive] = useState(false)
  return <a href={href} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} onFocus={() => setActive(true)} onBlur={() => setActive(false)}
    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', minHeight: '44px', lineHeight: 1.4, color: active ? 'var(--accent-signal)' : 'var(--fg-bone)', textUnderlineOffset: '4px', transition: 'color 180ms ease', ...style }}>
    {children}<span aria-hidden="true" style={{ display: 'inline-block', transform: active ? 'translate(3px, -3px)' : 'none', transition: 'transform 200ms var(--ease-out)' }}>↗</span>
  </a>
}
