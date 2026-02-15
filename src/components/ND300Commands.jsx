import { useState } from 'react'

const CommandRow = ({ command, description, isEven }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(200px, 1fr) 2fr',
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
    gridTemplateColumns: 'minmax(200px, 1fr) 2fr',
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

export default function ND300Commands() {
  const diagnosticFlags = [
    { command: '-t, --tech', description: 'Run all 25 diagnostics (technician mode)' },
    { command: '-T, --title <TEXT>', description: 'Custom title for the report header' },
    { command: '--json', description: 'Output results as JSON' },
    { command: '--ascii', description: 'Use ASCII box-drawing characters' },
    { command: '--no-color', description: 'Disable colored output' },
    { command: '--fast', description: 'Skip speed test for faster results' },
    { command: '--speed-duration <SEC>', description: 'Speed test duration in seconds (default: 10)' },
    { command: '--verbose', description: 'Show detailed progress during scan' }
  ]

  const actionCommands = [
    { command: '-d, --dns', description: 'Interactive DNS provider selection with auto-revert' },
    { command: '-f, --fix', description: 'Multi-stage graduated network recovery (3 stages)' },
    { command: '-c, --clear-dns', description: 'Flush system DNS resolver cache' },
    { command: '--uninstall', description: 'Complete removal (binary, registry, PATH cleanup)' }
  ]

  const utilityFlags = [
    { command: '-h, --help', description: 'Show help' },
    { command: '-V, --version', description: 'Show version' }
  ]

  return (
    <section style={{
      padding: '6rem 2rem',
      borderTop: '1px solid #222',
      borderBottom: '1px solid #222'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          textTransform: 'uppercase',
          marginBottom: '3rem',
          transform: 'scaleX(1.1)',
          textAlign: 'center',
          transformOrigin: 'center'
        }}>
          Flags
        </h2>

        <div style={{
          border: '1px solid #333',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(200px, 1fr) 2fr',
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
              Flag
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

          {/* Diagnostic Flags */}
          {diagnosticFlags.map((cmd, index) => (
            <CommandRow
              key={cmd.command}
              command={cmd.command}
              description={cmd.description}
              isEven={index % 2 === 0}
            />
          ))}

          {/* Action Commands */}
          <GroupSeparator label="ACTION COMMANDS" />
          {actionCommands.map((cmd, index) => (
            <CommandRow
              key={cmd.command}
              command={cmd.command}
              description={cmd.description}
              isEven={index % 2 === 0}
            />
          ))}

          {/* Utility */}
          <GroupSeparator label="UTILITY" />
          {utilityFlags.map((cmd, index) => (
            <CommandRow
              key={cmd.command}
              command={cmd.command}
              description={cmd.description}
              isEven={index % 2 === 0}
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
          Run nd300 --help for full documentation
        </p>
      </div>
    </section>
  )
}
