const marks = {
  'ND-300': '/nd300-monochrome.svg',
  'SD-300': '/sd300-monochrome.svg',
  'Offline toolkit': '/offline-toolkit.svg',
}

export default function HeroArtwork({ product, mobile, color = 'var(--fg-bone)' }) {
  const artwork = marks[product]
  if (artwork) {
    const wide = product === 'ND-300'
    const width = wide
      ? (mobile ? 'clamp(140px, 14vw, 210px)' : 'min(clamp(140px, 14vw, 210px), 27vh)')
      : (mobile ? 'clamp(72px, 7vw, 108px)' : 'min(clamp(72px, 7vw, 108px), 10vh)')
    const mask = `url('${artwork}') center / contain no-repeat`
    return <div style={{ width, aspectRatio: wide ? '153 / 57' : '1', background: color, mask, WebkitMask: mask }} />
  }
  const width = mobile ? 'clamp(40px, 4vw, 60px)' : 'min(clamp(40px, 4vw, 60px), 5vh)'
  const height = mobile ? 'clamp(80px, 8vw, 120px)' : 'min(clamp(80px, 8vw, 120px), 10vh)'
  const stroke = mobile ? '6px' : 'min(6px, 0.7vh)'
  const margin = mobile ? '0 -10px' : '0 calc(-1 * min(10px, 0.8333vh))'
  return <div style={{ display: 'flex', padding: '0 12px' }}>{[0, 1, 2].map(i =>
    <span key={i} style={{ width, height, border: `${stroke} solid ${color}`, borderRadius: '60px', margin, mixBlendMode: 'exclusion' }} />
  )}</div>
}
