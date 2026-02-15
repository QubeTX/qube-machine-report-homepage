import { useState } from 'react'

const SizeBadge = ({ children, active, href, heritage, title }) => {
  const [isHovered, setIsHovered] = useState(false)

  const badge = (
    <span
      style={{
        border: `1px ${heritage ? 'dashed' : 'solid'} ${active ? 'var(--accent-signal)' : 'var(--fg-dim)'}`,
        color: active ? 'var(--bg-void)' : isHovered ? 'var(--fg-bone)' : 'var(--fg-dim)',
        fontSize: '0.6rem',
        padding: '2px 6px',
        borderRadius: '2px',
        fontFamily: 'var(--font-mono)',
        background: active ? 'var(--accent-signal)' : 'transparent',
        fontWeight: active ? 'bold' : 'normal',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        borderColor: isHovered && !active ? 'var(--fg-bone)' : undefined,
        opacity: heritage && !isHovered ? 0.6 : 1
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

export default function Footer() {
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
        <span>TR-300 MACHINE REPORT</span>
        <span>QUBETX.COM</span>
      </div>

      <div style={{
        display: 'flex',
        gap: '4px',
        alignItems: 'center'
      }}>
        <SizeBadge heritage href="https://github.com/usgraphics/usgc-machine-report" title="U.S. Graphics Company">TR100</SizeBadge>
        <SizeBadge heritage href="https://github.com/RealEmmettS/usgc-machine-report" title="Fork by Emmett S.">TR200</SizeBadge>
        <span style={{
          color: 'var(--fg-dim)',
          opacity: 0.4,
          fontSize: '0.7rem',
          margin: '0 2px',
          userSelect: 'none'
        }}>›</span>
        <SizeBadge>V1</SizeBadge>
        <SizeBadge>V2</SizeBadge>
        <SizeBadge active>V3</SizeBadge>
        <SizeBadge>LTS</SizeBadge>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        textAlign: 'right',
        minWidth: '200px'
      }}>
        <span>
          <a href="/nd300" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>ND-300</a>
          {' / '}
          <a href="/sd300" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>SD-300</a>
          {' / '}
          <a href="https://github.com/QubeTX/qube-machine-report" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>GITHUB</a>
          {' / '}
          <a href="https://github.com/QubeTX/qube-machine-report/blob/master/README.md" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>DOCS</a>
        </span>
        <a href="https://polyformproject.org/licenses/noncommercial/1.0.0/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>POLYFORM NC LICENSE</a>
        <span style={{ color: 'var(--accent-signal)' }}>
          STATUS: OPERATIONAL
        </span>
      </div>
    </footer>
  )
}
