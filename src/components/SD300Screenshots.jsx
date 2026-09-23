import { useState } from 'react'

const views = [
  {
    label: 'Desktop app',
    image: '/images/sd300/desktop-overview.jpg',
    width: 1182, height: 792,
    alt: 'SD-300 desktop app showing CPU and memory readings, live activity history, and findings in its dark interface.',
    caption: 'The desktop overview puts live readings, recent activity, and findings together.'
  },
  {
    label: 'Terminal dashboard',
    image: '/images/sd300/terminal-cpu.png',
    width: 1368, height: 816,
    alt: 'SD-300 terminal dashboard showing CPU usage, captured history, individual processor readings, and hardware detail.',
    caption: 'Explore the same monitoring core from the terminal, with keyboard navigation and inspectable detail.'
  }
]

export default function SD300Screenshots() {
  const [selected, setSelected] = useState(0)
  const view = views[selected]

  return (
    <div style={{ margin: '0 0 3rem', minWidth: 0 }}>
      <div role="group" aria-label="Choose an SD-300 screenshot" style={{
        display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem'
      }}>
        {views.map((item, index) => (
          <button key={item.label} type="button" aria-pressed={selected === index}
            aria-controls="sd300-screenshot" onClick={() => setSelected(index)} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
              padding: '0.7rem 1rem', borderRadius: '4px', cursor: 'pointer',
              border: `1px solid ${selected === index ? 'var(--fg-bone)' : '#555'}`,
              color: selected === index ? 'var(--bg-void)' : 'var(--fg-bone)',
              background: selected === index ? 'var(--fg-bone)' : 'transparent'
            }}>
            {item.label}
          </button>
        ))}
      </div>
      <figure id="sd300-screenshot" style={{ margin: 0 }}>
        <a href={view.image} target="_blank" rel="noreferrer"
          aria-label={`Open the ${view.label.toLowerCase()} screenshot at full size`} style={{
            display: 'block', border: '1px solid #444', borderRadius: '6px',
            overflow: 'hidden', background: '#101010'
          }}>
          <img key={view.image} src={view.image} alt={view.alt} width={view.width} height={view.height} loading="lazy" decoding="async"
            style={{ width: '100%', height: 'auto', display: 'block' }} />
        </a>
        <figcaption style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#aaa',
          lineHeight: 1.7, marginTop: '1rem'
        }}>
          {view.caption}{' '}
          <a href={view.image} target="_blank" rel="noreferrer"
            style={{ color: 'var(--fg-bone)', textUnderlineOffset: '3px' }}>
            View full size ↗
          </a>
        </figcaption>
      </figure>
    </div>
  )
}
