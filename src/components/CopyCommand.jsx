import { startTransition, useEffect, useRef, useState, ViewTransition } from 'react'

export default function CopyCommand({ command, compact = false }) {
  const [status, setStatus] = useState('idle')
  const [highlighted, setHighlighted] = useState(false)
  const timer = useRef()
  const mounted = useRef(true)
  useEffect(() => { mounted.current = true; return () => { mounted.current = false; clearTimeout(timer.current) } }, [])
  const copy = async () => {
    let next = 'copied'
    try { await navigator.clipboard.writeText(command) } catch { next = 'error' }
    if (!mounted.current) return
    startTransition(() => setStatus(next))
    clearTimeout(timer.current)
    timer.current = setTimeout(() => startTransition(() => setStatus('idle')), 3500)
  }
  const label = status === 'copied' ? 'Copied' : status === 'error' ? 'Select text to copy' : compact ? 'Copy' : 'Copy command'
  return <button type="button" onClick={copy} aria-label={status === 'idle' ? `Copy ${command}` : undefined}
    onMouseEnter={() => setHighlighted(true)} onMouseLeave={() => setHighlighted(false)}
    onFocus={() => setHighlighted(true)} onBlur={() => setHighlighted(false)}
    style={{ display: 'inline-flex', gap: '0.6rem', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      minHeight: '44px', minWidth: compact ? '90px' : '158px', padding: '0.6rem 0.9rem', borderRadius: '2px',
      border: `1px solid ${compact ? highlighted ? 'var(--fg-bone)' : '#3b3b3b' : 'var(--accent-signal)'}`,
      background: compact ? highlighted ? '#202020' : 'transparent' : 'var(--accent-signal)',
      color: compact ? 'var(--fg-bone)' : 'var(--bg-void)', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 600,
      transition: 'background 180ms ease, border-color 180ms ease, transform 180ms ease', transform: highlighted ? 'translateY(-2px)' : 'none' }}>
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {status === 'copied' ? <path d="m4 10 4 4 8-9" /> : <><rect x="7" y="6" width="10" height="11" rx="1" /><path d="M12 3H3v10" /></>}
    </svg>
    <span aria-live="polite"><ViewTransition default="copy-feedback"><span key={status} style={{ display: 'inline-block' }}>{label}</span></ViewTransition></span>
  </button>
}
