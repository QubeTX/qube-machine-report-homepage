import { useState } from 'react'

const PlatformRow = ({ platform, target, status, isEven }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr',
        gap: '1rem',
        padding: '1rem 1.5rem',
        background: isHovered ? '#151515' : isEven ? '#0c0c0c' : 'transparent',
        borderBottom: '1px solid #1a1a1a',
        transition: 'background 0.2s ease',
        cursor: 'default'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        color: isHovered ? 'var(--accent-signal)' : 'var(--fg-bone)',
        transition: 'color 0.2s ease',
        whiteSpace: 'nowrap'
      }}>
        {platform}
      </span>
      <code style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        color: '#888'
      }}>
        {target}
      </code>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        color: status === 'Supported' ? 'var(--accent-signal)' : '#888'
      }}>
        {status}
      </span>
    </div>
  )
}

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

export default function SD300Platform() {
  const platforms = [
    { platform: 'Windows', target: 'x86_64-pc-windows-msvc', status: 'Supported' },
    { platform: 'macOS (Intel)', target: 'x86_64-apple-darwin', status: 'Supported' },
    { platform: 'macOS (ARM)', target: 'aarch64-apple-darwin', status: 'Supported' },
    { platform: 'Linux (x86)', target: 'x86_64-unknown-linux-gnu', status: 'Supported' },
    { platform: 'Linux (ARM)', target: 'aarch64-unknown-linux-gnu', status: 'Supported' },
    { platform: 'Linux (musl)', target: 'x86_64-unknown-linux-musl', status: 'Supported' }
  ]

  const features = [
    { title: 'Windows', description: 'Setup API for driver enumeration, SCM for service status, battery via PowerShell' },
    { title: 'Linux', description: 'sysfs / procfs parsing for CPU topology, thermal zones, and block devices' },
    { title: 'macOS', description: 'IOKit framework for GPU stats, thermal sensors, and power management' }
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
          Platform Support
        </h2>

        <div style={{
          border: '1px solid #333',
          borderRadius: '4px',
          overflow: 'hidden',
          marginBottom: '4rem'
        }}>
          {/* Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr 1fr',
            gap: '1rem',
            padding: '0.75rem 1.5rem',
            background: '#111',
            borderBottom: '1px solid #333'
          }}>
            {['Platform', 'Target', 'Status'].map((header) => (
              <span key={header} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--fg-dim)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {header}
              </span>
            ))}
          </div>

          {/* Rows */}
          {platforms.map((p, index) => (
            <PlatformRow
              key={p.target}
              platform={p.platform}
              target={p.target}
              status={p.status}
              isEven={index % 2 === 0}
            />
          ))}
        </div>

        {/* Platform-specific features */}
        <h3 style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: 'var(--fg-dim)',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          PLATFORM-SPECIFIC FEATURES
        </h3>

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
