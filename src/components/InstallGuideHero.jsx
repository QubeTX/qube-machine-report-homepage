import { useState, useEffect } from 'react'
import ProductNav from './ProductNav'

const BackLink = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href="/executables"
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        color: isHovered ? 'var(--fg-bone)' : 'var(--fg-dim)',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={{
        color: isHovered ? 'var(--accent-signal)' : 'var(--fg-dim)',
        transform: isHovered ? 'translateX(-2px)' : 'none',
        display: 'inline-block',
        transition: 'all 0.2s ease'
      }}>←</span>
      BACK TO DOWNLOADS
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

export default function InstallGuideHero() {
  useEffect(() => {
    document.title = 'QUBETX INSTALL GUIDE'
  }, [])

  return (
    <header style={{
      minHeight: '60vh',
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
          INSTALL GUIDE<br />
          ALL PLATFORMS<br />
          BUILD: 2026.02.A
        </div>

        <ProductNav />

        <div className="hide-on-mobile" style={{ maxWidth: '200px', textAlign: 'right' }}>
          USER GUIDE<br />
          STEP-BY-STEP<br />
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
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 12vw, 9rem)',
          lineHeight: '0.8',
          transform: 'scaleX(1.3)',
          letterSpacing: '-2px',
          marginBottom: '2rem',
          color: 'var(--fg-bone)',
          mixBlendMode: 'lighten'
        }}>
          INSTALL
        </h1>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.1rem, 2.5vw, 1.7rem)',
          fontStyle: 'italic',
          color: 'var(--fg-bone)',
          marginTop: '1rem',
          fontWeight: '400',
          maxWidth: '600px'
        }}>
          Step-by-step setup for every QubeTX tool.<br />
          No internet required — everything runs offline.
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
        <BackLink />

        <ScrollLink label="QUICK START" targetId="quick-start" />
      </div>
    </header>
  )
}
