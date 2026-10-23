import { useState, ViewTransition } from 'react'

export default function ChoiceButton({ active, onClick, children, indicator, controls }) {
  const [highlighted, setHighlighted] = useState(false)
  return <button type="button" aria-pressed={active} aria-controls={controls} onClick={onClick}
    onMouseEnter={() => setHighlighted(true)} onMouseLeave={() => setHighlighted(false)}
    onFocus={() => setHighlighted(true)} onBlur={() => setHighlighted(false)}
    style={{ position: 'relative', isolation: 'isolate', minHeight: '48px', padding: '0.75rem 1.15rem',
      fontSize: '0.9375rem', fontWeight: 600, border: 0, borderRadius: '2px', cursor: 'pointer',
      background: highlighted && !active ? '#1b1b1b' : 'transparent', color: active ? 'var(--bg-void)' : 'var(--fg-bone)',
      transition: 'background 180ms ease, color 180ms ease' }}>
    {active && <ViewTransition name={indicator} share="choice-indicator"><span aria-hidden="true" style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', background: 'var(--fg-bone)', borderRadius: '2px', color: 'var(--bg-void)' }}>{children}</span></ViewTransition>}
    <span style={{ opacity: active ? 0 : 1 }}>{children}</span>
  </button>
}
