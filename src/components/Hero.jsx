import { useState } from 'react'
import ProductNav from './ProductNav'

const Logo = () => {
  const shapeStyle = {
    width: '60px',
    height: '120px',
    border: '8px solid var(--fg-bone)',
    borderRadius: '60px',
    margin: '0 -12px',
    background: 'transparent',
    position: 'relative',
    mixBlendMode: 'exclusion'
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '2rem',
      opacity: 0.9
    }}>
      <div style={shapeStyle}></div>
      <div style={shapeStyle}></div>
      <div style={shapeStyle}></div>
    </div>
  )
}

const VersionBadge = ({ version, active }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        border: `1px solid ${active ? 'var(--accent-signal)' : 'var(--fg-dim)'}`,
        background: active ? 'var(--accent-signal)' : 'transparent',
        color: active ? 'var(--bg-void)' : isHovered ? 'var(--fg-bone)' : 'var(--fg-dim)',
        padding: '2px 8px',
        fontSize: '0.65rem',
        fontFamily: 'var(--font-mono)',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        borderColor: isHovered && !active ? 'var(--fg-bone)' : undefined
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {version}
    </div>
  )
}

export default function Hero() {
  return (
    <header style={{
      minHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '2rem',
      position: 'relative',
      borderBottom: '1px solid #222'
    }}>
      {/* Top corners */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        fontSize: '0.65rem',
        color: 'var(--fg-dim)',
        lineHeight: '1.4'
      }}>
        <div style={{ maxWidth: '200px' }}>
          TECHNICAL REPORT<br />
          TR-300 SERIES<br />
          BUILD: 2026.02.A
        </div>

        <ProductNav />

        <div style={{ maxWidth: '200px', textAlign: 'right' }}>
          HIGH PERFORMANCE SYSTEM<br />
          OPERATING SYSTEM<br />
          QUBETX
        </div>
      </div>

      {/* Center content */}
      <div style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative'
      }}>
        <Logo />

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(4rem, 15vw, 12rem)',
          lineHeight: '0.8',
          transform: 'scaleX(1.3)',
          letterSpacing: '-2px',
          marginBottom: '2rem',
          color: 'var(--fg-bone)',
          mixBlendMode: 'lighten'
        }}>
          TR-300
        </h1>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.2rem, 3vw, 2rem)',
          fontStyle: 'italic',
          color: 'var(--fg-bone)',
          marginTop: '1rem',
          fontWeight: '400',
          maxWidth: '600px'
        }}>
          Cross-platform system reports<br />
          with beautiful Unicode tables.
        </h2>
      </div>

      {/* Bottom corners */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        fontSize: '0.65rem',
        color: 'var(--fg-dim)',
        lineHeight: '1.4'
      }}>
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          margin: 0,
          transform: 'scale(0.9)',
          transformOrigin: 'bottom left'
        }}>
          <VersionBadge version="V 1.0" />
          <VersionBadge version="V 2.0" />
          <VersionBadge version="V 3.0" active />
        </div>

        <div style={{ maxWidth: '200px', textAlign: 'right' }}>
          SCROLL TO INITIALIZE<br />
          ↓
        </div>
      </div>
    </header>
  )
}
