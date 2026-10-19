import { useEffect, useId, useRef, useState, useSyncExternalStore } from 'react'
import { motion } from 'framer-motion'

const products = [
  { label: 'TR-300', path: '/' }, { label: 'ND-300', path: '/nd300' },
  { label: 'SD-300', path: '/sd300' }, { label: 'Offline toolkit', path: '/executables' },
  { label: 'Docs', path: '/docs' },
]

const mobileQuery = '(max-width: 767px)'
const reducedMotionQuery = '(prefers-reduced-motion: reduce)'
const isMobile = () => window.matchMedia(mobileQuery).matches
const prefersReducedMotion = () => window.matchMedia(reducedMotionQuery).matches
const subscribeQuery = (queryString, onChange) => {
  const query = window.matchMedia(queryString)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}
const subscribeLayout = onChange => subscribeQuery(mobileQuery, onChange)
const subscribeMotion = onChange => subscribeQuery(reducedMotionQuery, onChange)
const ease = [0.22, 1, 0.36, 1]

function NavLink({ label, path, active }) {
  const [hovered, setHovered] = useState(false)
  return <a href={path} aria-current={active ? 'page' : undefined}
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', padding: '0.5rem 0.25rem',
      fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 600,
      color: active ? 'var(--accent-signal)' : 'var(--fg-bone)', textDecoration: 'none',
      borderBottom: `2px solid ${active ? 'var(--accent-signal)' : hovered ? 'var(--fg-bone)' : 'transparent'}`,
      transition: 'border-color 180ms ease',
    }}>{label}</a>
}

function MobileNavLink({ label, path, active, open, reduced, separated, firstRef, onNavigate }) {
  const [highlighted, setHighlighted] = useState(false)
  return <motion.a href={path} ref={firstRef} aria-current={active ? 'page' : undefined}
    tabIndex={open ? 0 : -1} onClick={onNavigate}
    onMouseEnter={() => setHighlighted(true)} onMouseLeave={() => setHighlighted(false)}
    onFocus={() => setHighlighted(true)} onBlur={() => setHighlighted(false)}
    variants={{ closed: { opacity: 0, x: reduced ? 0 : -8 }, open: { opacity: 1, x: 0 } }}
    transition={{ duration: reduced ? 0 : 0.2, ease }} whileTap={reduced ? undefined : { scale: 0.985 }}
    style={{
      display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', minHeight: '52px',
      padding: '0.75rem 1rem', marginTop: separated ? '0.5rem' : 0,
      borderTop: separated ? '1px solid #333' : 'none', borderRadius: '3px',
      background: highlighted ? '#242424' : active ? '#191919' : 'transparent',
      color: active ? 'var(--accent-signal)' : 'var(--fg-bone)',
      fontFamily: 'var(--font-body)', fontSize: '1.0625rem', fontWeight: 600,
      textDecoration: 'none', transition: 'background 160ms ease',
    }}>
    <span>{label}</span>
    <motion.span aria-hidden="true" animate={{ x: highlighted && !reduced ? 3 : 0, opacity: active || highlighted ? 1 : 0.45 }} transition={{ duration: reduced ? 0 : 0.16 }}>→</motion.span>
  </motion.a>
}

function MobileNav({ current }) {
  const [open, setOpen] = useState(false)
  const [highlighted, setHighlighted] = useState(false)
  const reduced = useSyncExternalStore(subscribeMotion, prefersReducedMotion)
  const menuId = useId()
  const navRef = useRef(null)
  const buttonRef = useRef(null)
  const firstLinkRef = useRef(null)
  const focusFirst = useRef(false)

  useEffect(() => {
    if (!open) return
    const onPointerDown = event => {
      if (!navRef.current?.contains(event.target)) {
        focusFirst.current = false
        setOpen(false)
      }
    }
    const onKeyDown = event => {
      if (event.key === 'Escape') {
        event.preventDefault()
        focusFirst.current = false
        setOpen(false)
        buttonRef.current?.focus({ preventScroll: true })
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return <nav ref={navRef} aria-label="Products and documentation"
    onBlur={event => {
      if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) {
        focusFirst.current = false
        setOpen(false)
      }
    }}
    onKeyDown={event => { if (event.key === 'Tab') focusFirst.current = false }}
    style={{ zIndex: 30, justifySelf: 'end' }}>
    <motion.button ref={buttonRef} initial={false} type="button" aria-label={open ? 'Close navigation' : 'Open navigation'}
      aria-expanded={open} aria-controls={menuId}
      onClick={() => { focusFirst.current = false; setOpen(value => !value) }}
      onKeyDown={event => {
        if (event.key === 'ArrowDown') {
          event.preventDefault()
          if (open) firstLinkRef.current?.focus({ preventScroll: true })
          else { focusFirst.current = true; setOpen(true) }
        }
      }}
      onMouseEnter={() => setHighlighted(true)} onMouseLeave={() => setHighlighted(false)}
      animate={{ scale: highlighted && !reduced ? 1.04 : 1, backgroundColor: open || highlighted ? '#202020' : '#0a0a0a' }}
      whileTap={reduced ? undefined : { scale: 0.94 }} transition={{ duration: reduced ? 0 : 0.18, ease }}
      style={{ width: '48px', height: '48px', display: 'grid', placeItems: 'center', border: `1px solid ${open ? 'var(--accent-signal)' : '#555'}`, borderRadius: '6px', color: open ? 'var(--accent-signal)' : 'var(--fg-bone)', cursor: 'pointer', transition: 'border-color 180ms ease, color 180ms ease' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <motion.path initial={false} animate={{ d: open ? 'M 6 6 L 18 18' : 'M 4 6 L 20 6' }} transition={{ duration: reduced ? 0 : 0.25, ease }} />
        <motion.path d="M 4 12 L 20 12" initial={false} animate={{ opacity: open ? 0 : 1, x: open && !reduced ? 4 : 0 }} transition={{ duration: reduced ? 0 : 0.16 }} />
        <motion.path initial={false} animate={{ d: open ? 'M 6 18 L 18 6' : 'M 4 18 L 20 18' }} transition={{ duration: reduced ? 0 : 0.25, ease }} />
      </svg>
    </motion.button>
    <motion.div id={menuId} aria-hidden={!open} initial={false} animate={open ? 'open' : 'closed'}
      onAnimationComplete={variant => {
        if (variant === 'open' && focusFirst.current) {
          firstLinkRef.current?.focus({ preventScroll: true })
          focusFirst.current = false
        }
      }}
      variants={{
        open: { display: 'block', opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0 round 6px)', transition: { duration: reduced ? 0 : 0.28, ease, staggerChildren: reduced ? 0 : 0.035, delayChildren: reduced ? 0 : 0.025 } },
        closed: { opacity: 0, y: reduced ? 0 : -8, clipPath: reduced ? 'inset(0 0 0% 0 round 6px)' : 'inset(0 0 100% 0 round 6px)', transition: { duration: reduced ? 0 : 0.2, ease, staggerChildren: reduced ? 0 : 0.015, staggerDirection: -1 }, transitionEnd: { display: 'none' } },
      }}
      style={{ position: 'absolute', top: 'calc(100% + 0.75rem)', right: 0, width: 'min(360px, 100%)', padding: '0.625rem', border: '1px solid #444', borderRadius: '6px', background: '#111', boxShadow: '0 18px 50px #0009', pointerEvents: open ? 'auto' : 'none' }}>
      {products.map((product, index) => <MobileNavLink key={product.path} {...product} active={current === product.path}
        open={open} reduced={reduced} separated={index === 3} firstRef={index === 0 ? firstLinkRef : undefined}
        onNavigate={() => { focusFirst.current = false; setOpen(false) }} />)}
    </motion.div>
  </nav>
}

export default function ProductNav() {
  const mobile = useSyncExternalStore(subscribeLayout, isMobile)
  const current = window.location.pathname.replace(/\/$/, '') || '/'
  if (mobile) return <MobileNav current={current} />
  return <nav aria-label="Products and documentation" style={{ display: 'flex', gap: '0.25rem 1rem', flexWrap: 'wrap' }}>
    {[products.slice(0, 3), products.slice(3)].map((group, index) => <div key={index} style={{ display: 'flex', gap: '1rem' }}>
      {group.map(p => <NavLink key={p.path} {...p} active={current === p.path} />)}
    </div>)}
  </nav>
}
