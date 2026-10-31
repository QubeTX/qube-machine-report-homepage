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
  const titleSize = download
    ? (mobile ? 'clamp(3.5rem, 12vw, 12rem)' : 'clamp(3.5rem, min(12vw, 16vh), 12rem)')
    : (mobile ? 'clamp(4rem, 22.2vw, 24rem)' : 'clamp(4rem, min(22.2vw, 40vh), 24rem)')
  const introductionSize = mobile ? 'clamp(1.7rem, 3.2vw, 2.8rem)' : 'clamp(1.7rem, min(3.2vw, 4.8vh), 2.8rem)'
  const artworkWidth = product === 'ND-300'
    ? (mobile ? 'clamp(140px, 14vw, 210px)' : 'min(clamp(140px, 14vw, 210px), 27vh)')
    : (mobile ? 'clamp(72px, 7vw, 108px)' : 'min(clamp(72px, 7vw, 108px), 10vh)')
  const ringWidth = mobile ? 'clamp(40px, 4vw, 60px)' : `min(clamp(40px, 4vw, 60px), ${download ? '3vh' : '5vh'})`
  const ringHeight = mobile ? 'clamp(80px, 8vw, 120px)' : `min(clamp(80px, 8vw, 120px), ${download ? '6vh' : '10vh'})`
  const ringStroke = mobile ? '6px' : `min(6px, ${download ? '0.6vh' : '0.7vh'})`
  const ringMargin = mobile ? '0 -10px' : `0 calc(-1 * min(10px, ${download ? '0.5vh' : '0.8333vh'}))`
  useLayoutEffect(() => { document.title = `QUBETX ${product}` }, [product])
  return <header style={{ display: 'grid', width: '100%', minHeight: 'var(--hero-viewport-height)', padding: '1.25rem var(--page-gutter) clamp(2rem, 4vh, 3rem)', borderBottom: '1px solid var(--line)' }}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', width: '100%', minWidth: 0, maxWidth: '1800px', margin: '0 auto' }}>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', alignItems: 'center', gap: '0.5rem 1.5rem' }}>
        <a href="/" aria-label="QubeTX tools home" style={{ width: 'fit-content', display: 'grid', alignContent: 'center', minHeight: '48px', fontFamily: 'var(--font-mono)', fontSize: '0.875rem', lineHeight: 1.5, textDecoration: 'none' }}>
          <span>QUBETX</span><span style={{ color: 'var(--fg-dim)' }}>{category}</span>
        </a>
        <ProductNav />
      </div>
      <div style={{ display: 'grid', justifyItems: 'center', alignContent: 'center', gap: mobile ? '2rem' : 'clamp(0.75rem, 3vh, 2.5rem)', padding: mobile ? '2rem 0' : 'clamp(0.5rem, 2vh, 1.5rem) 0' }}>
        <motion.div aria-hidden="true" initial={quietEntrance ? false : { opacity: 0, rotate: -8, scale: 0.85 }} animate={{ opacity: 1, rotate: 0, scale: 1 }}
          whileHover={reduced ? undefined : { rotate: 8, scale: 1.05 }} transition={{ duration: 0.7, ease }}
          style={{ display: 'grid', placeItems: 'center' }}>
          {artwork ? <div style={{ width: artworkWidth, aspectRatio: product === 'ND-300' ? '153 / 57' : '1',
            background: 'var(--fg-bone)', mask: `url('${artwork}') center / contain no-repeat`, WebkitMask: `url('${artwork}') center / contain no-repeat` }} />
            : <div style={{ display: 'flex', padding: '0 12px' }}>{[0, 1, 2].map(i => <span key={i} style={{ width: ringWidth, height: ringHeight, border: `${ringStroke} solid var(--fg-bone)`, borderRadius: '60px', margin: ringMargin, mixBlendMode: 'exclusion' }} />)}</div>}
        </motion.div>
        <ViewTransition name="product-title" share="product-title">
          <h1 tabIndex={-1} style={{ fontFamily: 'var(--font-hero)', fontWeight: 400, fontSize: titleSize, lineHeight: 0.84, letterSpacing: '-0.065em', textTransform: 'uppercase', textAlign: 'center', width: '100%', outline: 'none' }}>
            <motion.span initial={quietEntrance ? false : { opacity: 0, y: 36, scaleX: 0.97 }} animate={{ opacity: 1, y: 0, scaleX: download ? 1 : 1.06 }} transition={{ duration: 0.85, ease, delay: 0.08 }} style={{ display: 'block' }}>{product}</motion.span>
          </h1>
        </ViewTransition>
      </div>
      <motion.div initial={quietEntrance ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.22 }}
        style={{ display: 'grid', gridTemplateColumns: mobile ? 'minmax(0, 1fr)' : 'minmax(0, 1fr) minmax(0, 1fr)', alignItems: mobile ? 'start' : 'end', gap: '2rem clamp(2rem, 6vw, 7rem)', paddingTop: '1rem' }}>
        <div><p style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: introductionSize, lineHeight: 1.18, maxWidth: '28ch' }}>{description}</p>
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
