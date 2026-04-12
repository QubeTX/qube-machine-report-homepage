import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProductNav from './ProductNav'
import useLatestRelease from '../hooks/useLatestRelease'

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

export default function ShaughvOSHero() {
  const version = useLatestRelease()

  useEffect(() => {
    document.title = 'shaughvOS'
  }, [])

  return (
    <header style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '2rem',
      position: 'relative',
      borderBottom: '1px solid #222',
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
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ maxWidth: '200px' }}
        >
          OPERATING SYSTEM<br />
          SHAUGHV OS SERIES<br />
          BUILD: 2026.04.A
        </motion.div>

        <ProductNav />

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hide-on-mobile"
          style={{ maxWidth: '200px', textAlign: 'right' }}
        >
          CUSTOM OS<br />
          DEBIAN-BASED<br />
          SHAUGHV
        </motion.div>
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
        <motion.img
          src="/shaughv-logo.svg"
          alt="SHAUGHV logo"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          style={{
            width: 'clamp(80px, 15vw, 140px)',
            height: 'auto',
            marginBottom: '2rem',
            filter: 'invert(1) brightness(0.85)'
          }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(3rem, 12vw, 9rem)',
            lineHeight: '0.9',
            fontWeight: '500',
            letterSpacing: '-4px',
            marginBottom: '2rem',
            color: 'var(--fg-bone)',
            mixBlendMode: 'lighten'
          }}
        >
          shaughvOS
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
            fontStyle: 'italic',
            color: 'var(--fg-bone)',
            marginTop: '1rem',
            fontWeight: '400',
            maxWidth: '700px'
          }}
        >
          A custom operating system for your devices.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--fg-dim)',
            marginTop: '1.5rem',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}
        >
          lightweight &bull; diagnostic-ready &bull; beautifully themed
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          style={{
            marginTop: '2rem',
            border: '1px solid #333',
            padding: '4px 12px',
            borderRadius: '4px',
            fontSize: '0.6rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--fg-dim)',
            letterSpacing: '1px'
          }}
        >
          SHAUGHV OS &bull; QUBE OS COMING SOON
        </motion.div>
      </div>

      {/* Bottom corners */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          fontSize: '0.65rem',
          color: 'var(--fg-dim)',
          lineHeight: '1.4'
        }}
      >
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          margin: 0,
          transform: 'scale(0.9)',
          transformOrigin: 'bottom left'
        }}>
          <VersionBadge version={version} active />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
          <ScrollLink label="GET STARTED" targetId="install" />
          <ScrollLink label="QUICK COMMANDS" targetId="commands" />
        </div>
      </motion.div>
    </header>
  )
}
