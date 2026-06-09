import { useState } from 'react'

const CommandRow = ({ command, description, isEven }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(min(160px, 40%), 1fr) 2fr',
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

const GroupSeparator = ({ label }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'minmax(min(160px, 40%), 1fr) 2fr',
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

export default function WB300Commands() {
  const commands = [
    { command: 'wb300', description: 'Open the live TUI in the current repository' },
    { command: 'wb300 --repo <path>', description: 'Open the console for a specific repository' },
    { command: 'wb300 --home', description: 'Machine-wide view of every actively-worked-on repo' },
    { command: 'wb300 --no-live', description: 'Static snapshot mode — no live file watching' },
    { command: 'wb300 --no-alt-screen', description: 'Fallback renderer (inline, no alternate screen)' },
    { command: 'wb300 agent', description: 'Print the full repo state as JSON and exit (no TUI)' },
    { command: 'wb300 agent --home', description: 'Headless JSON for every active repo on the machine' },
    { command: 'wb300 update', description: 'Self-update in place to the latest release' }
  ]

  const keybindings = [
    { command: 'q / Esc', description: 'Quit / close the current overlay' },
    { command: '?', description: 'Toggle the help overlay' },
    { command: 'Tab / Shift+Tab', description: 'Next / previous tab' },
    { command: '1 – 7', description: 'Jump straight to a tab' },
    { command: 'j / k', description: 'Move the selection up and down' },
    { command: 'r', description: 'Refresh the snapshot' },
    { command: 'f', description: 'Fetch from remotes (never automatic)' },
    { command: '/', description: 'Filter worktrees' },
    { command: ':', description: 'Open the command palette' },
    { command: 'x', description: 'Remove the selected worktree (type-to-confirm)' },
    { command: 'p', description: 'Prune stale worktree metadata (confirm)' }
  ]

  const updateFlags = [
    { command: 'wb300 update', description: 'Update in place — registry-aware on Windows' },
    { command: 'wb300 update --json', description: 'Machine-readable result for orchestrating agents' }
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
          Reference
        </h2>

        <div style={{
          border: '1px solid #333',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(min(160px, 40%), 1fr) 2fr',
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

          {/* Commands */}
          {commands.map((cmd, index) => (
            <CommandRow
              key={cmd.command}
              command={cmd.command}
              description={cmd.description}
              isEven={index % 2 === 0}
            />
          ))}

          {/* Keybindings */}
          <GroupSeparator label="KEYBINDINGS (INSIDE THE TUI)" />
          {keybindings.map((cmd, index) => (
            <CommandRow
              key={cmd.command}
              command={cmd.command}
              description={cmd.description}
              isEven={index % 2 === 0}
            />
          ))}

          {/* Self-update */}
          <GroupSeparator label="SELF-UPDATE" />
          {updateFlags.map((cmd, index) => (
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
          The full, configurable keybinding set lands with the config subsystem. Run wb300 --help for full documentation.
        </p>
      </div>
    </section>
  )
}
