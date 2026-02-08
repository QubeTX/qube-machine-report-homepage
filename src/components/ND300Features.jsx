import { useState } from 'react'

const FeatureRow = ({ index, title, description }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        borderBottom: '1px solid #222',
        padding: '2rem 0',
        transition: 'background 0.2s ease',
        background: isHovered ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
        cursor: 'default',
        gap: '1.5rem'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        color: isHovered ? 'var(--accent-signal)' : 'var(--fg-dim)',
        transition: 'color 0.2s ease',
        flexShrink: 0,
        width: '2rem'
      }}>
        {index}
      </span>

      <div style={{ flex: 1 }}>
        <h4 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          textTransform: 'uppercase',
          transform: 'scaleX(1.1)',
          transformOrigin: 'left',
          marginBottom: '0.5rem',
          color: 'var(--fg-bone)'
        }}>
          {title}
        </h4>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          textTransform: 'uppercase',
          lineHeight: '1.4',
          color: 'var(--fg-dim)'
        }}>
          {description}
        </div>
      </div>

      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '1rem',
        color: 'var(--accent-signal)',
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.2s ease',
        flexShrink: 0
      }}>
        +
      </span>
    </div>
  )
}

export default function ND300Features() {
  const features = [
    { title: 'Speed Test', description: 'Cloudflare-backed download/upload measurement with configurable duration' },
    { title: 'Bufferbloat Detection', description: 'Latency-under-load grading from A+ through F with idle/loaded comparison' },
    { title: 'JSON Output', description: 'Machine-readable output for scripting, automation, and CI pipelines' },
    { title: 'Unicode Tables', description: 'Box-drawing table output with automatic ASCII fallback for legacy terminals' },
    { title: 'Color-Coded Status', description: 'OK / Warn / Fail / Skip indicators with --no-color for plain text' },
    { title: 'Cross-Platform', description: 'Native support for Windows, macOS, and Linux from a single binary' }
  ]

  return (
    <section style={{
      padding: '6rem 2rem',
      borderTop: '1px solid #222',
      borderBottom: '1px solid #222'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          textTransform: 'uppercase',
          marginBottom: '3rem',
          transform: 'scaleX(1.1)',
          textAlign: 'center',
          transformOrigin: 'center'
        }}>
          Features
        </h2>

        <div style={{
          borderTop: '1px solid #222'
        }}>
          {features.map((f, i) => (
            <FeatureRow
              key={f.title}
              index={String(i + 1).padStart(2, '0')}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
