import { useContext, useLayoutEffect, ViewTransition } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import ProductNav from './ProductNav'
import HeroArtwork from './HeroArtwork'
import { heroBrand, heroFrame, heroHeader, heroLayout, heroRows } from './heroLayout'
import ActionLink from './ActionLink'
import useMediaQuery from '../hooks/useMediaQuery'
import PageNavigationContext from '../hooks/pageNavigationContext'

const ease = [0.22, 1, 0.36, 1]

export default function ProductHero({ product, category, introduction, version, repository, docs, children, download, afterActions }) {
  const reduced = useReducedMotion()
  const navigated = useContext(PageNavigationContext)
  const quietEntrance = reduced || navigated
  const mobile = useMediaQuery('(max-width: 767px)')
  const layout = heroLayout(mobile, download)
  useLayoutEffect(() => { document.title = `QUBETX ${product}` }, [product])
  return <header style={heroFrame}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div style={heroRows}>
      <div style={heroHeader}>
        <a href="/" aria-label="QubeTX tools home" style={heroBrand}>
          <span>QUBETX</span><span style={{ color: 'var(--fg-dim)' }}>{category}</span>
        </a>
        <ProductNav />
      </div>
      <div style={layout.center}>
        <motion.div aria-hidden="true" initial={quietEntrance ? false : { opacity: 0, rotate: -8, scale: 0.85 }} animate={{ opacity: 1, rotate: 0, scale: 1 }}
          whileHover={reduced ? undefined : { rotate: 8, scale: 1.05 }} transition={{ duration: 0.7, ease }}
          style={{ display: 'grid', placeItems: 'center' }}>
          <HeroArtwork product={product} mobile={mobile} />
        </motion.div>
        <ViewTransition name="product-title" share="product-title">
          <h1 tabIndex={-1} style={layout.title}>
            <motion.span initial={quietEntrance ? false : { opacity: 0, y: 36, scaleX: 0.97 }} animate={{ opacity: 1, y: 0, scaleX: download ? 1 : 1.06 }} transition={{ duration: 0.85, ease, delay: 0.08 }} style={{ display: 'block' }}>{product}</motion.span>
          </h1>
        </ViewTransition>
      </div>
      <motion.div initial={quietEntrance ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.22 }}
        style={layout.details}>
        <div><p style={layout.introduction}>{introduction[0]}<br />{introduction[1]}</p>
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
