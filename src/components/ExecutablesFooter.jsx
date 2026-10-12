import SiteFooter from './SiteFooter'
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
    <SiteFooter
      title="OFFLINE EXECUTABLES"
      repository="QubeTX/qube-reports-executables"
      status="Operational"
    >
      <SizeBadge href="/" title="Machine Report">TR-300</SizeBadge>
      <SizeBadge href="/nd300" title="Network Diagnostic">ND-300</SizeBadge>
      <SizeBadge href="/sd300" title="System Diagnostic">SD-300</SizeBadge>
    </SiteFooter>
  )
}
