import { useState } from 'react'

const SizeBadge = ({ children, active }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
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
    >
      {children}
    </span>
  )
}

export default function ShaughvOSFooter() {
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
          SHAUGHV
        </span>
        <span>SHAUGHVOS CUSTOM OPERATING SYSTEM</span>
        <a href="https://qubetx.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>QUBETX.COM</a>
        <span style={{ fontSize: '0.6rem', color: '#444', marginTop: '0.5rem' }}>
          Built on <a href="https://github.com/MichaIng/DietPi" target="_blank" rel="noopener noreferrer" style={{ color: '#444', textDecoration: 'underline' }}>DietPi</a> (GPLv2)
        </span>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        alignItems: 'center'
      }}>
        <SizeBadge active>V1.1.0</SizeBadge>
        <span style={{
          fontSize: '0.55rem',
          color: '#444',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '1px',
          marginTop: '0.25rem'
        }}>
          SHAUGHV OS &bull; QUBE OS COMING SOON
        </span>
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
          <a href="https://github.com/RealEmmettS/shaughvOS" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>GITHUB</a>
        </span>
        <a href="https://www.gnu.org/licenses/old-licenses/gpl-2.0.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>GPLv2 LICENSE</a>
        <span style={{ color: 'var(--accent-signal)' }}>
          STATUS: OPERATIONAL
        </span>
      </div>
    </footer>
  )
}
