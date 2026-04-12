import { useState } from 'react'

const CommandRow = ({ command, description, isEven, i }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(180px, 1fr) 2fr',
        gap: '1rem',
        padding: '1rem 1.5rem',
        background: isHovered ? '#151515' : isEven ? '#0c0c0c' : 'transparent',
        borderBottom: '1px solid #1a1a1a',
        transition: 'background 0.2s ease',
        cursor: 'default'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <code style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        color: isHovered ? 'var(--accent-signal)' : 'var(--fg-bone)',
        transition: 'color 0.2s ease',
        whiteSpace: 'nowrap'
      }}>
        {command}
      </code>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        color: '#888'
      }}>
        {description}
      </span>
    </div>
  )
}

const GroupSeparator = ({ label }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'minmax(180px, 1fr) 2fr',
    gap: '1rem',
    padding: '0.5rem 1.5rem',
    background: '#111',
    borderBottom: '1px solid #333',
    borderTop: '1px solid #333'
  }}>
    <span style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '0.65rem',
      color: 'var(--fg-dim)',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      gridColumn: '1 / -1'
    }}>
      {label}
    </span>
  </div>
)

export default function ShaughvOSCommands() {
  const desktopCmds = [
    { command: 'desktop on', description: 'Switch to graphical desktop mode' },
    { command: 'desktop off', description: 'Switch to console / terminal mode' },
    { command: 'desktop status', description: 'Show current display mode' }
  ]

  const diagnosticCmds = [
    { command: 'tr300', description: 'Full machine report (CPU, memory, disk, network)' },
    { command: 'tr300 --fast', description: 'Quick machine report (skip speed test)' },
    { command: 'nd300', description: 'Network diagnostics — 8 core checks' },
    { command: 'nd300 -t', description: 'Technician mode — all 25 deep diagnostics' },
    { command: 'speedqx', description: 'Quad-provider speed test with bufferbloat grading' },
    { command: 'sd300', description: 'Interactive real-time system monitoring TUI' }
  ]

  const systemCmds = [
    { command: 'report', description: 'Alias for tr300' }
  ]

  let rowIndex = 0

  return (
    <section id="commands" style={{
      padding: '6rem 2rem',
      borderTop: '1px solid #222',
      borderBottom: '1px solid #222',
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            textTransform: 'uppercase',
            marginBottom: '3rem',
            transform: 'scaleX(1.1)',
            textAlign: 'center',
            transformOrigin: 'center'
          }}
        >
          Quick Commands
        </h2>

        <div style={{
          border: '1px solid #333',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(180px, 1fr) 2fr',
            gap: '1rem',
            padding: '0.75rem 1.5rem',
            background: '#111',
            borderBottom: '1px solid #333'
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--fg-dim)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Command
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--fg-dim)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Description
            </span>
          </div>

          {/* Desktop */}
          <GroupSeparator label="DESKTOP" />
          {desktopCmds.map((cmd, index) => (
            <CommandRow
              key={cmd.command}
              command={cmd.command}
              description={cmd.description}
              isEven={index % 2 === 0}
              i={rowIndex++}
            />
          ))}

          {/* Diagnostics */}
          <GroupSeparator label="DIAGNOSTICS" />
          {diagnosticCmds.map((cmd, index) => (
            <CommandRow
              key={cmd.command}
              command={cmd.command}
              description={cmd.description}
              isEven={index % 2 === 0}
              i={rowIndex++}
            />
          ))}

          {/* System */}
          <GroupSeparator label="SYSTEM" />
          {systemCmds.map((cmd, index) => (
            <CommandRow
              key={cmd.command}
              command={cmd.command}
              description={cmd.description}
              isEven={index % 2 === 0}
              i={rowIndex++}
            />
          ))}
        </div>

        <p style={{
          fontFamily: 'var(--font-mono)',
          letterSpacing: '-0.5px',
          fontSize: '0.7rem',
          marginTop: '2rem',
          color: '#555',
          textAlign: 'center'
        }}>
          All commands available out of the box — no installation needed
        </p>
      </div>
    </section>
  )
}
