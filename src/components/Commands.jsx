import { useState } from 'react'

const CommandRow = ({ command, description, isEven }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(min(140px, 40%), 1fr) 2fr',
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
        overflowWrap: 'break-word'
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

export default function Commands() {
  const commands = [
    { command: 'tr300', description: 'Print the full report; creates no file' },
    { command: 'report', description: 'Convenience alias; creates no file' },
    { command: 'tr300 -r, tr300 --report', description: 'Print and manually save a Markdown copy' },
    { command: 'report -s, report --save', description: 'Alias spellings for the same manual save' },
    { command: 'tr300 --fast', description: 'Startup-safe mode — skip slow optional probes' },
    { command: 'tr300 --json', description: 'Schema-v1 JSON on stdout for scripting' },
    { command: 'tr300 --ascii', description: 'ASCII table and bars for legacy terminals' },
    { command: 'tr300 -t, --title <TITLE>', description: 'Set a custom report title' },
    { command: 'tr300 --no-elevation-hint', description: 'Hide the optional Linux elevation footer' },
    { command: 'tr300 update [--json]', description: 'Update safely, with optional structured status' },
    { command: 'tr300 install / --install', description: 'Install the report alias and startup summary' },
    { command: 'tr300 uninstall / --uninstall', description: 'Interactively remove profile or binary setup' },
    { command: 'tr300 --help', description: 'Show help' },
    { command: 'tr300 --version', description: 'Show version' },
    { command: 'tr300 --no-color', description: 'Disable color in update-flow messages' }
  ]

  return (
    <section id="commands" style={{
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
          Commands
        </h2>

        <div style={{
          border: '1px solid #333',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(min(140px, 40%), 1fr) 2fr',
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

          {/* Rows */}
          {commands.map((cmd, index) => (
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
          Run tr300 --help for full documentation
        </p>
      </div>
    </section>
  )
}
