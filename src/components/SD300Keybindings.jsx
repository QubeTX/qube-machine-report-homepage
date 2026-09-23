import { useState } from 'react'

const KeyRow = ({ keyName, action, isEven }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(min(110px, 35%), 1fr) 2fr',
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
        {keyName}
      </code>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        color: '#888'
      }}>
        {action}
      </span>
    </div>
  )
}

export default function SD300Keybindings() {
  const keybindings = [
    { key: '1-9', action: 'Jump to diagnostic section' },
    { key: 'q', action: 'Quit' },
    { key: 'Esc', action: 'Close an overlay or clear the filter; otherwise quit' },
    { key: 'Ctrl+C', action: 'Quit to shell' },
    { key: 'm', action: 'Return to mode selection' },
    { key: '?', action: 'Show help overlay' },
    { key: 'f', action: 'Toggle temperature unit (C/F)' },
    { key: 'j / k / ↑ / ↓', action: 'Select rows or scroll the inspector' },
    { key: 'Page Up / Down', action: 'Move through a page of rows or detail' },
    { key: '/', action: 'Filter the current inventory' },
    { key: 'Enter', action: 'Inspect the selected row' },
    { key: 'Space', action: 'Freeze the view while collection continues; resume at the newest sample' },
    { key: 'c / M / n / p', action: 'Sort by CPU / Memory / Name / PID (process table)' },
    { key: 's', action: 'Reverse process sort direction' },
    { key: 'F', action: 'Inspect findings and next steps' },
    { key: 'N', action: 'Open optional network diagnostics' },
    { key: 'r', action: 'Retry providers and refresh readings' }
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
          Keybindings
        </h2>

        <div style={{
          border: '1px solid #333',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(min(110px, 35%), 1fr) 2fr',
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
              Key
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--fg-dim)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Action
            </span>
          </div>

          {/* Rows */}
          {keybindings.map((kb, index) => (
            <KeyRow
              key={kb.key}
              keyName={kb.key}
              action={kb.action}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
