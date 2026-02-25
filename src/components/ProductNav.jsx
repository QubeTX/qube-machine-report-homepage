import { useState } from 'react'

const products = [
  { label: 'TR-300', path: '/' },
  { label: 'ND-300', path: '/nd300' },
  { label: 'SD-300', path: '/sd300' },
  { label: 'EXECUTABLES', path: '/executables' }
]

const NavLink = ({ label, path, active }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={path}
      style={{
        fontSize: '0.65rem',
        fontFamily: 'var(--font-mono)',
        color: active ? 'var(--accent-signal)' : isHovered ? 'var(--fg-bone)' : 'var(--fg-dim)',
        textDecoration: 'none',
        borderBottom: `1px solid ${active ? 'var(--accent-signal)' : isHovered ? 'var(--fg-bone)' : 'transparent'}`,
        paddingBottom: '1px',
        transition: 'all 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
        cursor: active ? 'default' : 'pointer'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </a>
  )
}

export default function ProductNav() {
  const path = window.location.pathname

  return (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
      {products.map(p => (
        <NavLink
          key={p.path}
          label={p.label}
          path={p.path}
          active={path === p.path || path === p.path + '/'}
        />
      ))}
    </div>
  )
}
