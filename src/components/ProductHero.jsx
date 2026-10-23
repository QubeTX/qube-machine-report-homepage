import { useContext, useLayoutEffect, ViewTransition } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import ProductNav from './ProductNav'
import ActionLink from './ActionLink'
import useMediaQuery from '../hooks/useMediaQuery'
import PageNavigationContext from '../hooks/pageNavigationContext'

const ease = [0.22, 1, 0.36, 1]

export default function ProductHero({ product, category, description, artwork, version, repository, docs, children, download, afterActions }) {
  const reduced = useReducedMotion()
  const navigated = useContext(PageNavigationContext)
  const quietEntrance = reduced || navigated
  const mobile = useMediaQuery('(max-width: 767px)')
  useLayoutEffect(() => { document.title = `QUBETX ${product}` }, [product])
  return <header style={{ padding: '1.25rem var(--page-gutter) 0', borderBottom: '1px solid var(--line)' }}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div style={{ maxWidth: '1800px', margin: '0 auto' }}>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', alignItems: 'center', gap: '0.5rem 1.5rem' }}>
        <a href="/" aria-label="QubeTX tools home" style={{ width: 'fit-content', display: 'grid', alignContent: 'center', minHeight: '48px', fontFamily: 'var(--font-mono)', fontSize: '0.875rem', lineHeight: 1.5, textDecoration: 'none' }}>
          <span>QUBETX</span><span style={{ color: 'var(--fg-dim)' }}>{category}</span>
        </a>
        <ProductNav />
      </div>
      <div style={{ display: 'grid', justifyItems: 'center', padding: 'clamp(2.5rem, 5vw, 5rem) 0 clamp(2rem, 4.5vw, 4.5rem)' }}>
        <motion.div aria-hidden="true" initial={quietEntrance ? false : { opacity: 0, rotate: -8, scale: 0.85 }} animate={{ opacity: 1, rotate: 0, scale: 1 }}
          whileHover={reduced ? undefined : { rotate: 8, scale: 1.05 }} transition={{ duration: 0.7, ease }}
          style={{ marginBottom: 'clamp(2rem, 4vw, 4rem)' }}>
          {artwork ? <div style={{ width: product === 'ND-300' ? 'clamp(140px, 14vw, 210px)' : 'clamp(72px, 7vw, 108px)', aspectRatio: product === 'ND-300' ? '153 / 57' : '1',
            background: 'var(--fg-bone)', mask: `url('${artwork}') center / contain no-repeat`, WebkitMask: `url('${artwork}') center / contain no-repeat` }} />
            : <div style={{ display: 'flex', padding: '0 12px' }}>{[0, 1, 2].map(i => <span key={i} style={{ width: 'clamp(40px, 4vw, 60px)', height: 'clamp(80px, 8vw, 120px)', border: '6px solid var(--fg-bone)', borderRadius: '60px', margin: '0 -10px', mixBlendMode: 'exclusion' }} />)}</div>}
        </motion.div>
        <ViewTransition name="product-title" share="product-title">
          <h1 tabIndex={-1} style={{ fontFamily: 'var(--font-display)', fontSize: download ? 'clamp(3.5rem, 12vw, 12rem)' : 'clamp(4rem, 22.2vw, 24rem)', lineHeight: 0.84, letterSpacing: '-0.065em', textTransform: 'uppercase', textAlign: 'center', width: '100%', outline: 'none' }}>
            <motion.span initial={quietEntrance ? false : { opacity: 0, y: 36, scaleX: 0.97 }} animate={{ opacity: 1, y: 0, scaleX: download ? 1 : 1.06 }} transition={{ duration: 0.85, ease, delay: 0.08 }} style={{ display: 'block' }}>{product}</motion.span>
          </h1>
        </ViewTransition>
      </div>
      <motion.div initial={quietEntrance ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.22 }}
        style={{ display: 'grid', gridTemplateColumns: mobile ? 'minmax(0, 1fr)' : 'minmax(0, 1fr) minmax(0, 1fr)', alignItems: 'start', gap: '2rem clamp(2rem, 6vw, 7rem)', padding: '1rem 0 clamp(2.5rem, 5vw, 5rem)' }}>
        <div><p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.7rem, 3.2vw, 2.8rem)', lineHeight: 1.18, maxWidth: '28ch' }}>{description}</p>
          {children && <div style={{ marginTop: '1.5rem', maxWidth: '60ch' }}>{children}</div>}
        </div>
        <div style={{ justifySelf: mobile ? 'start' : 'end', maxWidth: '100%' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <ActionLink primary href={download || '#install'}>{download ? 'Download toolkit (.ZIP)' : `Install ${product}`} <span aria-hidden="true">&nbsp;↓</span></ActionLink>
            <ActionLink href={docs}>{download ? 'Tools included' : 'Read documentation'} <span aria-hidden="true">&nbsp;↗</span></ActionLink>
          </div>
          {version && <a href={`https://github.com/${repository}/releases/latest`} style={{ marginTop: '0.75rem', display: 'inline-flex', alignItems: 'center', minHeight: '44px', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--fg-dim)' }}>Release {version} · Windows, macOS & Linux</a>}
          {afterActions}
        </div>
      </motion.div>
    </div>
  </header>
}
