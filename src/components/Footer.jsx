import SiteFooter from './SiteFooter'
import { useState } from 'react'

const SizeBadge = ({ children, active, href, heritage, title }) => {
  const [isHovered, setIsHovered] = useState(false)

  const badge = (
    <span
      style={{
        border: `1px ${heritage ? 'dashed' : 'solid'} ${active ? 'var(--accent-signal)' : 'var(--fg-dim)'}`,
        color: active ? 'var(--bg-void)' : isHovered ? 'var(--fg-bone)' : 'var(--fg-dim)',
        fontSize: '0.875rem',
        display: 'inline-flex', alignItems: 'center', minHeight: '44px',
        padding: '2px 6px',
        borderRadius: '2px',
        fontFamily: 'var(--font-mono)',
        background: active ? 'var(--accent-signal)' : 'transparent',
        fontWeight: active ? 'bold' : 'normal',
        cursor: href ? 'pointer' : 'default',
        transition: 'all 0.2s ease',
        borderColor: isHovered && !active ? 'var(--fg-bone)' : undefined,
        opacity: 1
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
    <SiteFooter
      title="TR-300 MACHINE REPORT"
      repository="QubeTX/qube-machine-report"
      status="Operational"
    >
      <SizeBadge heritage href="https://github.com/usgraphics/usgc-machine-report" title="U.S. Graphics Company">TR100</SizeBadge>
      <SizeBadge heritage href="https://github.com/RealEmmettS/usgc-machine-report" title="Fork by Emmett S.">TR200</SizeBadge>
      <span style={{
        color: 'var(--fg-dim)',
        opacity: 0.4,
        fontSize: '0.875rem',
        margin: '0 2px',
        userSelect: 'none'
      }}>›</span>
      <SizeBadge>V1</SizeBadge>
      <SizeBadge>V2</SizeBadge>
      <SizeBadge>V3</SizeBadge>
      <SizeBadge active>V4</SizeBadge>
      <SizeBadge>LTS</SizeBadge>
    </SiteFooter>
  )
}
