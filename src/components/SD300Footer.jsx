import { useState } from 'react'

const SizeBadge = ({ children, active, href, title }) => {
  const [isHovered, setIsHovered] = useState(false)

  const badge = (
    <span
      style={{
        border: `1px solid ${active ? 'var(--accent-signal)' : 'var(--fg-dim)'}`,
        color: active ? 'var(--bg-void)' : isHovered ? 'var(--fg-bone)' : 'var(--fg-dim)',
        fontSize: '0.6rem',
        padding: '2px 6px',
        borderRadius: '2px',
        fontFamily: 'var(--font-mono)',
        background: active ? 'var(--accent-signal)' : 'transparent',
        fontWeight: active ? 'bold' : 'normal',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        borderColor: isHovered && !active ? 'var(--fg-bone)' : undefined
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title={!href ? title : undefined}
    >
      {children}
    </span>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
        title={title}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {badge}
      </a>
    )
  }

  return badge
}

export default function SD300Footer() {
  return (
    <footer style={{
      padding: '4rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      borderTop: '1px solid #222',
      fontSize: '0.75rem',
      color: 'var(--fg-dim)',
      marginTop: 'auto',
      flexWrap: 'wrap',
      gap: '2rem'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        minWidth: '200px'
      }}>
        <span style={{
          textTransform: 'uppercase',
          color: 'var(--fg-bone)',
          fontWeight: '500'
        }}>
          QUBETX
        </span>
        <span>SD-300 SYSTEM DIAGNOSTIC</span>
        <span>QUBETX.COM</span>
      </div>

      <div style={{
        display: 'flex',
        gap: '4px',
        alignItems: 'center'
      }}>
        <SizeBadge href="https://github.com/QubeTX/qube-system-diagnostics/releases/tag/v1.0.0" title="Initial release">V1.0</SizeBadge>
        <SizeBadge href="https://github.com/QubeTX/qube-system-diagnostics/releases/tag/v1.1.0" title="Ctrl+C, scroll indicators">V1.1</SizeBadge>
        <SizeBadge href="https://github.com/QubeTX/qube-system-diagnostics/releases/tag/v1.2.0" title="UI overhaul, earth color palette">V1.2</SizeBadge>
        <SizeBadge active href="https://github.com/QubeTX/qube-system-diagnostics/releases/tag/v1.2.1" title="Setup API driver scanning">V1.2.1</SizeBadge>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        textAlign: 'right',
        minWidth: '200px'
      }}>
        <span>
          <a href="/" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>TR-300</a>
          {' / '}
          <a href="/nd300" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>ND-300</a>
          {' / '}
          <a href="https://github.com/QubeTX/qube-system-diagnostics" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>GITHUB</a>
          {' / '}
          <a href="https://github.com/QubeTX/qube-system-diagnostics/blob/master/README.md" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>DOCS</a>
        </span>
        <a href="https://polyformproject.org/licenses/noncommercial/1.0.0/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>POLYFORM NC LICENSE</a>
        <span style={{ color: 'var(--accent-signal)' }}>
          STATUS: OPERATIONAL
        </span>
      </div>
    </footer>
  )
}
