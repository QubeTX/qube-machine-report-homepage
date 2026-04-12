import { useState } from 'react'

const GridCell = ({ label, title, description, detail, noBorder, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        padding: 'clamp(2rem, 5vw, 4rem)',
        borderRight: noBorder ? 'none' : '1px solid #222',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '50vh',
        transition: 'background 0.3s ease',
        background: isHovered ? '#0f0f0f' : 'transparent'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          color: 'var(--fg-dim)',
          marginBottom: '2rem',
          border: '1px solid var(--fg-dim)',
          display: 'inline-block',
          padding: '2px 8px',
          borderRadius: '4px'
        }}>
          {label}
        </span>
      </div>

      <div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          transform: 'scaleX(1.1)',
          marginBottom: '1.5rem',
          textTransform: 'uppercase',
          lineHeight: '1.1'
        }}>
          {title}
        </h2>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
          lineHeight: '1.3',
          color: '#aaa',
          marginBottom: '1.5rem'
        }}>
          {description}
        </p>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          lineHeight: '1.6',
          color: 'var(--fg-dim)',
          textTransform: 'uppercase'
        }}>
          {detail}
        </p>
      </div>

      <div />
    </div>
  )
}

export default function ShaughvOSOverview() {
  return (
    <section style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
      borderBottom: '1px solid #222',
    }}>
      <GridCell
        index={0}
        label="01 // DESKTOP"
        title={<>A Clean, Dark<br />Desktop</>}
        description="A polished Xfce desktop with the Dracula dark theme that stays out of your way. Custom fonts, wallpaper, and a bottom taskbar — all pre-configured."
        detail="Xfce + Dracula · Makira Sans · IBM Plex Mono · desktop on / desktop off"
      />
      <GridCell
        index={1}
        label="02 // BOOT EXPERIENCE"
        title={<>Power On.<br />Start Working.</>}
        description="See your system status the moment you log in. A custom boot splash, ASCII art banner, and an automatic machine report — instant awareness with zero effort."
        detail="Plymouth Splash · ASCII Banner · TR-300 Auto-Report"
      />
      <GridCell
        index={2}
        label="03 // DIAGNOSTICS"
        title={<>Everything You<br />Need to Fix It</>}
        description="Three professional-grade diagnostic tools come pre-installed. Network checks, system monitoring, speed tests, and full machine reports — ready the moment you boot."
        detail={
          <>
            <a href="/" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>TR-300</a>
            {' \u00b7 '}
            <a href="/nd300" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>ND-300</a>
            {' \u00b7 '}
            <a href="/sd300" style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}>SD-300</a>
            {' \u00b7 SPEEDQX'}
          </>
        }
        noBorder
      />
    </section>
  )
}
