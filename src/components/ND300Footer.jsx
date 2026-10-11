import SiteFooter from './SiteFooter'
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

export default function ND300Footer() {
  const version = useGitHubVersion('QubeTX/qube-network-diagnostics', '4.0.1')

  return (
    <SiteFooter
      title="ND-300 NETWORK DIAGNOSTIC"
      repository="QubeTX/qube-network-diagnostics"
      status="Operational"
    >
      <SizeBadge active>V{shortVersion(version)}</SizeBadge>
    </SiteFooter>
  )
}
