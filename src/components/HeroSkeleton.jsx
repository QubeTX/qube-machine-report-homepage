import useMediaQuery from '../hooks/useMediaQuery'
import HeroArtwork from './HeroArtwork'
import { ToolkitNotes, ToolkitSnapshot } from './OfflineToolkitDetails'
import { heroBrand, heroFrame, heroHeader, heroLayout, heroRows } from './heroLayout'
import { productHeroes } from './productHeroes'

// Using the introduction's own line breaks keeps the placeholders aligned at any text size.
const textBar = {
  color: 'transparent',
  background: 'linear-gradient(var(--line), var(--line)) left center / 100% 0.32em no-repeat',
  boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone',
}
const actionOutline = {
  display: 'inline-grid', placeItems: 'center', minHeight: '52px', padding: '0.85rem 1.2rem',
  border: '1px solid var(--line)', borderRadius: '2px', color: 'transparent', fontWeight: 600, lineHeight: 1.4,
}

export default function HeroSkeleton({ path }) {
  const { product, category, introduction } = productHeroes[path] || productHeroes['/']
  const mobile = useMediaQuery('(max-width: 767px)')
  const toolkit = path === '/executables'
  const layout = heroLayout(mobile, toolkit)
  return <main style={heroFrame}>
    <span role="status" className="visually-hidden">Loading {product}…</span>
    <div style={heroRows}>
      <div style={heroHeader}>
        <div style={heroBrand}><span>QUBETX</span><span aria-hidden="true" style={textBar}>{category}</span></div>
        <a href="/docs" style={{ ...heroBrand, minWidth: '44px', justifyItems: 'center', textDecoration: 'underline' }}>Docs</a>
      </div>
      <div aria-hidden="true" style={layout.center}>
        <HeroArtwork product={product} mobile={mobile} color="var(--line)" />
        <div style={{ ...layout.title, color: 'var(--line)', textWrap: 'balance', transform: toolkit ? undefined : 'scaleX(1.06)' }}>{product}</div>
      </div>
      <div aria-hidden="true" style={layout.details}>
        <div>
          <p style={layout.introduction}><span style={textBar}>{introduction[0]}</span><br /><span style={textBar}>{introduction[1]}</span></p>
          {toolkit && <div style={{ marginTop: '1.5rem', maxWidth: '60ch' }}><ToolkitNotes textStyle={textBar} /></div>}
        </div>
        <div style={{ justifySelf: mobile ? 'start' : 'end', maxWidth: '100%' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <span style={actionOutline}>{toolkit ? 'Download toolkit (.ZIP)' : `Install ${product}`} &nbsp;↓</span>
            <span style={actionOutline}>{toolkit ? 'Tools included' : 'Read documentation'} &nbsp;↗</span>
          </div>
          {toolkit
            ? <ToolkitSnapshot textStyle={textBar} />
            : <div style={{ display: 'grid', alignItems: 'center', marginTop: '0.75rem', minHeight: '44px' }}><span style={{ width: 'min(17rem, 80%)', height: '0.35rem', background: 'var(--line)' }} /></div>}
        </div>
      </div>
    </div>
  </main>
}
