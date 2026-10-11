import SiteFooter from './SiteFooter'
import { useState } from 'react'
import useGitHubVersion, { shortVersion } from '../hooks/useGitHubVersion'

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
  const version = useGitHubVersion('QubeTX/qube-system-diagnostics', '4.0.1')

  return (
    <SiteFooter
      title="SD-300 SYSTEM DIAGNOSTIC"
      repository="QubeTX/qube-system-diagnostics"
      status="Operational"
    >
      <SizeBadge href="https://github.com/QubeTX/qube-system-diagnostics/releases/tag/v1.0.0" title="Initial release">V1.0</SizeBadge>
      <SizeBadge href="https://github.com/QubeTX/qube-system-diagnostics/releases/tag/v1.1.0" title="Ctrl+C, scroll indicators">V1.1</SizeBadge>
      <SizeBadge href="https://github.com/QubeTX/qube-system-diagnostics/releases/tag/v1.2.0" title="UI overhaul, earth color palette">V1.2</SizeBadge>
      <SizeBadge href="https://github.com/QubeTX/qube-system-diagnostics/releases/tag/v1.2.1" title="Setup API driver scanning">V1.2.1</SizeBadge>
      <SizeBadge active href="https://github.com/QubeTX/qube-system-diagnostics/releases/latest" title="Cargo package tr300-tui and self-update support">V{shortVersion(version)}</SizeBadge>
    </SiteFooter>
  )
}
