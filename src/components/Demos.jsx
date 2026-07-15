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
    </div>
  )
}

export default function Demos() {
  const demos = [
    {
      title: 'System Overview',
      description: 'Processor, memory, storage, and network health — everything you need to know about your machine at a glance'
    },
    {
      title: 'Cross-Platform',
      description: 'One Rust CLI with native collectors for Windows, macOS, and Linux, plus bounded fallbacks when optional OS tools are unavailable'
    },
    {
      title: 'Data Export',
      description: 'Emit schema-v1 JSON to standard output for workflows, dashboards, and integrations without creating a report file'
    },
    {
      title: 'Read-Only Startup Summary',
      description: 'Shell setup can print a fast summary once per interactive startup; it never auto-saves a log, and file saving remains manual'
    },
    {
      title: 'Verified Mac Downloads',
      description: 'Apple Silicon and Intel archives must pass Developer ID signing and Apple notarization before the release can publish'
    },
    {
      title: 'Fail-Safe Updates',
      description: 'Updates verify the installed version; endpoint-policy write or launch blocks stop cleanly without overwriting the working binary'
    },
    {
      title: 'Privacy-Aware Facts',
      description: 'Serial numbers and device UUIDs stay out of reports; unavailable or permission-gated facts remain clearly absent instead of fabricated'
    },
    {
      title: 'Precise Output',
      description: 'Fixed-width Unicode or ASCII tables, normalized load percentages, and explicit disk and memory definitions keep every value interpretable'
    },
    {
      title: 'Pre-Installed on shaughvOS',
      description: <span>TR-300 runs automatically on every login in shaughvOS{/* WIP-DELISTED — Shaughv OS de-linked (WIP); restore the anchor: <a href="/shaughvos" style={{ color: 'var(--accent-signal)', textDecoration: 'none' }}>shaughvOS</a> */} — a complete diagnostic OS you can boot from USB on any machine</span>
    }
  ]

  return (
    <section style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '4rem 2rem',
      overflow: 'hidden'
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
