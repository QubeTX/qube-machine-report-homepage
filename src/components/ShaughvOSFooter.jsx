import SiteFooter from './SiteFooter'
import { useState } from 'react'
import useLatestRelease from '../hooks/useLatestRelease'

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
  const version = useLatestRelease()
  return (
    <SiteFooter
      title="SHAUGHVOS CUSTOM OPERATING SYSTEM"
      repository="RealEmmettS/shaughvOS"
      status="W.I.P."
      gpl
      attribution={<p style={{ fontSize: '0.7rem', color: '#999', lineHeight: 1.8 }}>Built on <a href="https://github.com/MichaIng/DietPi" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>DietPi</a> (GPLv2)</p>}
    >
      <SizeBadge active>{version}</SizeBadge>
      <span style={{
        fontSize: '0.55rem',
        color: '#444',
        fontFamily: 'var(--font-mono)',
        letterSpacing: '1px',
        marginTop: '0.25rem'
      }}>
        SHAUGHV OS &bull; QUBE OS COMING SOON
      </span>
    </SiteFooter>
  )
}
