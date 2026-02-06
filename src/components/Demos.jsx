import { useState } from 'react'

const DemoRow = ({ index, title, description }) => {
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

export default function Demos() {
  const demos = [
    {
      title: 'System Overview',
      description: 'CPU, memory, disk, network — instant visibility into your machine\'s vital stats'
    },
    {
      title: 'Cross-Platform',
      description: 'One binary for Windows, macOS, and Linux with native performance'
    },
    {
      title: 'Scriptable Output',
      description: 'JSON export for automation, CI pipelines, and monitoring integrations'
    },
    {
      title: 'Shell Integration',
      description: 'Self-installing hooks, dotfile embedding, run on login or pipe to monitoring'
    },
    {
      title: 'Zero Dependencies',
      description: 'Single static binary, no runtime needed — just download and run'
    },
    {
      title: 'Beautiful Output',
      description: 'Unicode box-drawing with automatic ASCII fallback for legacy terminals'
    }
  ]

  return (
    <section style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '4rem 2rem'
    }}>
      <h3 style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: 'var(--fg-dim)',
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        CAPABILITIES
      </h3>

      <div style={{
        borderTop: '1px solid #222'
      }}>
        {demos.map((demo, i) => (
          <DemoRow
            key={i}
            index={String(i + 1).padStart(2, '0')}
            title={demo.title}
            description={demo.description}
          />
        ))}
      </div>
    </section>
  )
}
