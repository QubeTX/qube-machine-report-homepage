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

export default function WB300Modes() {
  return (
    <section style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
      borderBottom: '1px solid #222',
      overflow: 'hidden'
    }}>
      <GridCell
        label="01 // REPO CONSOLE"
        title="Live<br />Cockpit"
        description="Run it inside any repo and watch the branch tree breathe — each agent on its branch, the files it's changing right now, what's uncommitted, committed, pushed, or merged, all updating live as files change."
      />
      <GridCell
        label="02 // HOME VIEW"
        title="Machine<br />Control Tower"
        description="Run it outside a repo and the same tree shows every project being actively worked on across your machine — every branch and agent beneath each one — so you can supervise the entire fleet in a single window."
      />
      <GridCell
        label="03 // HEADLESS AGENT"
        title="JSON<br />For Agents"
        description="wb300 agent prints the whole branch hierarchy — roles, parents, lifecycle stages, agents, and changed files — as pure JSON and exits — no TUI — so another agent or a script can read the state in one shot and orchestrate the rest."
        noBorder
      />
    </section>
  )
}
