import { useState } from 'react'
import useGitHubVersion, { shortVersion } from '../hooks/useGitHubVersion'

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

export default function WB300Footer() {
  const version = useGitHubVersion('QubeTX/qube-workbranch-view', '1.0.0')

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
        minWidth: '0'
      }}>
        <span style={{
          textTransform: 'uppercase',
          color: 'var(--fg-bone)',
          fontWeight: '500'
        }}>
          QUBETX
        </span>
        <span>WB-300 WORKBRANCH VIEW</span>
        <a href="https://qubetx.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>QUBETX.COM</a>
      </div>

      <div style={{
        display: 'flex',
        gap: '4px',
        alignItems: 'center'
      }}>
        <SizeBadge active>V{shortVersion(version)}</SizeBadge>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        textAlign: 'right',
        minWidth: '0'
      }}>
        <span>
          <a href="/" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>TR-300</a>
          {' / '}
          <a href="/nd300" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>ND-300</a>
          {' / '}
          {/* WIP-DELISTED — SD-300 & Shaughv OS delisted (WIP); restore both links + their separators:
          <a href="/sd300" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>SD-300</a>
          {' / '}
          <a href="/shaughvos" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>SHAUGHVOS</a>
          {' / '} */}
          <a href="https://github.com/QubeTX/qube-workbranch-view" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>GITHUB</a>
          {' / '}
          <a href="https://github.com/QubeTX/qube-workbranch-view/blob/main/README.md" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>DOCS</a>
        </span>
        <a href="https://polyformproject.org/licenses/noncommercial/1.0.0/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>POLYFORM NC LICENSE</a>
        <span style={{ color: 'var(--accent-signal)' }}>
          STATUS: PRE-RELEASE
        </span>
      </div>

      <div style={{
        width: '100%',
        fontSize: '0.6rem',
        color: 'var(--fg-dim)',
        marginTop: '0.5rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid #222'
      }}>
        &copy; {new Date().getFullYear()} QUBETX
      </div>
    </footer>
  )
}
