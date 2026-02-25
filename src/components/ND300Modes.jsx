import { useState } from 'react'

const GridCell = ({ label, title, description, noBorder }) => {
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
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            transform: 'scaleX(1.1)',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            lineHeight: '1.1'
          }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
          lineHeight: '1.3',
          color: '#aaa'
        }}>
          {description}
        </p>
      </div>

      <div />
    </div>
  )
}

export default function ND300Modes() {
  return (
    <section style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
      borderBottom: '1px solid #222'
    }}>
      <GridCell
        label="01 // USER MODE"
        title="Quick<br />Check"
        description="See if your network is healthy in seconds. Color-coded results tell you exactly what is working, what needs attention, and what is broken — no expertise needed."
      />
      <GridCell
        label="02 // TECHNICIAN MODE"
        title="Deep<br />Diagnostics"
        description="Everything in User Mode, plus 17 advanced checks — routing paths, active connections, firewall rules, connection quality, and security inspection for full network visibility."
      />
      <GridCell
        label="03 // REPAIR TOOLS"
        title="Network<br />Recovery"
        description="Fix common network problems without guesswork. Switch DNS providers with automatic rollback, run a step-by-step network repair, clear your DNS cache, and cleanly remove when done."
        noBorder
      />
    </section>
  )
}
