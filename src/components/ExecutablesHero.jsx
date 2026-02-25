import { useState, useEffect } from 'react'
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

const DownloadButton = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href="https://github.com/QubeTX/qube-reports-executables/archive/refs/heads/main.zip"
      style={{
        background: 'var(--accent-signal)',
        border: '2px solid var(--accent-signal)',
        color: 'var(--bg-void)',
        fontFamily: 'var(--font-mono)',
        fontWeight: '700',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        borderRadius: '6px',
        textTransform: 'uppercase',
        transition: 'all 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
        transform: isHovered ? 'translateY(-2px)' : 'none',
        boxShadow: isHovered ? '0 4px 12px rgba(255, 0, 212, 0.3)' : 'none',
        fontSize: '0.75rem',
        textDecoration: 'none',
        display: 'inline-block'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      ↓ DOWNLOAD ALL (.ZIP)
    </a>
  )
}

const ScrollLink = ({ label, targetId }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })}
      onKeyDown={(e) => { if (e.key === 'Enter') document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' }) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: 'pointer',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        textAlign: 'right',
        color: isHovered ? 'var(--fg-bone)' : 'var(--fg-dim)',
        transition: 'all 0.2s ease',
        transform: isHovered ? 'translateX(-2px)' : 'none',
      }}
    >
      <span style={{ color: isHovered ? 'var(--accent-signal)' : 'var(--fg-dim)', transition: 'color 0.2s ease' }}>↓</span>
      {'  '}{label}
    </div>
  )
}

export default function ExecutablesHero() {
  useEffect(() => {
    document.title = 'QUBETX OFFLINE'
  }, [])

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
          OFFLINE EXECUTABLES<br />
          ALL PLATFORMS<br />
          BUILD: 2026.02.A
        </div>

        <ProductNav />

        <div className="hide-on-mobile" style={{ maxWidth: '200px', textAlign: 'right' }}>
          DOWNLOAD HUB<br />
          PRE-BUILT BINARIES<br />
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
          .EXE
        </h1>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.2rem, 3vw, 2rem)',
          fontStyle: 'italic',
          color: 'var(--fg-bone)',
          marginTop: '1rem',
          fontWeight: '400',
          maxWidth: '700px'
        }}>
          Pre-built offline installers for every QubeTX diagnostic tool.<br />
          One download, every platform.
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
        <DownloadButton />

        <ScrollLink label="TOOLS INCLUDED" targetId="tools" />
      </div>
    </header>
  )
}
