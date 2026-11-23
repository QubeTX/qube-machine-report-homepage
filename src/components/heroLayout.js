export const heroFrame = { display: 'grid', width: '100%', minHeight: 'var(--hero-viewport-height)', padding: '1.25rem var(--page-gutter) clamp(2rem, 4vh, 3rem)', borderBottom: '1px solid var(--line)' }
export const heroRows = { display: 'grid', gridTemplateRows: 'auto 1fr auto', width: '100%', minWidth: 0, maxWidth: '1800px', margin: '0 auto' }
export const heroHeader = { position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', alignItems: 'center', gap: '0.5rem 1.5rem' }
export const heroBrand = { width: 'fit-content', display: 'grid', alignContent: 'center', minHeight: '48px', fontFamily: 'var(--font-mono)', fontSize: '0.875rem', lineHeight: 1.5, textDecoration: 'none' }

export function heroLayout(mobile, toolkit) {
  const titleSize = toolkit
    ? (mobile ? 'clamp(3.5rem, 12vw, 12rem)' : 'clamp(3.5rem, min(12vw, 16vh), 12rem)')
    : (mobile ? 'clamp(4rem, 22.2vw, 24rem)' : 'clamp(4rem, min(22.2vw, 40vh), 24rem)')
  return {
    center: { display: 'grid', justifyItems: 'center', alignContent: 'center', gap: mobile ? '2rem' : 'clamp(0.75rem, 3vh, 2.5rem)', padding: mobile ? '2rem 0' : 'clamp(0.5rem, 2vh, 1.5rem) 0' },
    title: { fontFamily: 'var(--font-hero)', fontWeight: 400, fontSize: titleSize, lineHeight: 0.84, letterSpacing: '-0.065em', textTransform: 'uppercase', textAlign: 'center', width: '100%', outline: 'none' },
    details: { display: 'grid', gridTemplateColumns: mobile ? 'minmax(0, 1fr)' : 'minmax(0, 1fr) minmax(0, 1fr)', alignItems: mobile ? 'start' : 'end', gap: '2rem clamp(2rem, 6vw, 7rem)', paddingTop: '1rem' },
    introduction: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: mobile ? 'clamp(1.7rem, 3.2vw, 2.8rem)' : 'clamp(1.7rem, min(3.2vw, 4.8vh), 2.8rem)', lineHeight: 1.18, maxWidth: '28ch' },
  }
}
