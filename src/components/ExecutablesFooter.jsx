import { useState } from 'react'

const SizeBadge = ({ children, href, title }) => {
  const [isHovered, setIsHovered] = useState(false)

  const badge = (
    <span
      style={{
        border: '1px solid var(--fg-dim)',
        color: isHovered ? 'var(--fg-bone)' : 'var(--fg-dim)',
        fontSize: '0.6rem',
        padding: '2px 6px',
        borderRadius: '2px',
        fontFamily: 'var(--font-mono)',
        background: 'transparent',
        fontWeight: 'normal',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        borderColor: isHovered ? 'var(--fg-bone)' : undefined
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

export default function ExecutablesFooter() {
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
        <span>OFFLINE EXECUTABLES</span>
        <a href="https://qubetx.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>QUBETX.COM</a>
      </div>

      <div style={{
        display: 'flex',
        gap: '4px',
        alignItems: 'center'
      }}>
        <SizeBadge href="/" title="Machine Report">TR-300</SizeBadge>
        <SizeBadge href="/nd300" title="Network Diagnostic">ND-300</SizeBadge>
        <SizeBadge href="/sd300" title="System Diagnostic">SD-300</SizeBadge>
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
          <a href="/sd300" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>SD-300</a>
          {' / '}
          <a href="https://github.com/QubeTX/qube-reports-executables" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>GITHUB</a>
        </span>
        <a href="https://polyformproject.org/licenses/noncommercial/1.0.0/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>POLYFORM NC LICENSE</a>
        <span style={{ color: 'var(--accent-signal)' }}>
          STATUS: OPERATIONAL
        </span>
      </div>
    </footer>
  )
}
