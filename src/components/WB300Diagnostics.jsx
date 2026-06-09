import { useState } from 'react'

const SignalRow = ({ num, signal, description, isEven, isSeparator, separatorLabel }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      {isSeparator && (
        <div style={{
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
          }}>
            {separatorLabel}
          </span>
        </div>
      )}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr 2fr',
          gap: '0.5rem 1rem',
          padding: '1rem 1.5rem',
          background: isHovered ? '#151515' : isEven ? '#0c0c0c' : 'transparent',
          borderBottom: '1px solid #1a1a1a',
          transition: 'background 0.2s ease',
          cursor: 'default'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
          color: isHovered ? 'var(--accent-signal)' : 'var(--fg-dim)',
          transition: 'color 0.2s ease',
          whiteSpace: 'nowrap',
          minWidth: '1.5rem'
        }}>
          {num}
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
          color: isHovered ? 'var(--accent-signal)' : 'var(--fg-bone)',
          transition: 'color 0.2s ease',
        }}>
          {signal}
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(0.65rem, 1.8vw, 0.85rem)',
          color: '#888'
        }}>
          {description}
        </span>
      </div>
    </>
  )
}

export default function WB300Diagnostics() {
  const core = [
    { num: '1', signal: 'Branch Explorer', description: 'Local, remote-tracking branches, and worktrees in one tree' },
    { num: '2', signal: 'Worktree State', description: 'Detached / locked / prunable / stale flags per worktree' },
    { num: '3', signal: 'Dirty / Clean', description: 'Staged, changed, and untracked file counts at a glance' },
    { num: '4', signal: 'Remote Drift', description: 'Ahead / behind upstream and gone-upstream detection' },
    { num: '5', signal: 'Process Mapping', description: 'Which agent or task is running inside which worktree' },
    { num: '6', signal: 'Agent Badges', description: 'Claude / Codex / build / test labels with CPU, mem, runtime' },
    { num: '7', signal: 'Live Flashes', description: 'Created / modified / pushed / deleted shown as they happen' },
    { num: '8', signal: 'Collision Detection', description: 'Files two or more worktrees have touched, risk-coloured' }
  ]

  const deep = [
    { num: '9', signal: 'High-Risk Paths', description: 'Lockfiles, migrations, and CI configs flagged as scariest' },
    { num: '10', signal: 'Committed Diffs', description: 'Collisions include files committed since the shared branch' },
    { num: '11', signal: 'Readiness', description: "What's ready to review, stale, risky, or busy" },
    { num: '12', signal: 'Safe Cleanup', description: 'Remove worktrees only after type-to-confirm' },
    { num: '13', signal: 'Rescue Snapshots', description: 'Uncommitted work is saved before anything destructive' },
    { num: '14', signal: 'Remote Fetch', description: 'Press f to fetch — never reaches the network on its own' },
    { num: '15', signal: 'Pushed Flash', description: 'Worktree flashes green the moment commits reach the remote' },
    { num: '16', signal: 'Timeline', description: 'Worktree create/remove history that survives restarts' },
    { num: '17', signal: 'Home View', description: 'Every actively-worked repo on the machine, side by side' },
    { num: '18', signal: 'Headless JSON', description: 'wb300 agent prints the full state as JSON and exits' }
  ]

  return (
    <section style={{
      padding: '6rem 2rem',
      borderTop: '1px solid #222',
      borderBottom: '1px solid #222'
    }}>
      <div style={{
        maxWidth: '900px',
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
          Live Intelligence
        </h2>

        <div style={{
          border: '1px solid #333',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr 2fr',
            gap: '1rem',
            padding: '0.75rem 1.5rem',
            background: '#111',
            borderBottom: '1px solid #333'
          }}>
            {['#', 'Signal', 'Description'].map((header) => (
              <span key={header} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--fg-dim)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {header}
              </span>
            ))}
          </div>

          {/* Core rows */}
          {core.map((d, index) => (
            <SignalRow
              key={d.num}
              num={d.num}
              signal={d.signal}
              description={d.description}
              isEven={index % 2 === 0}
            />
          ))}

          {/* Deep rows with separator on first */}
          {deep.map((d, index) => (
            <SignalRow
              key={d.num}
              num={d.num}
              signal={d.signal}
              description={d.description}
              isEven={(index + core.length) % 2 === 0}
              isSeparator={index === 0}
              separatorLabel="READINESS, CLEANUP & ORCHESTRATION"
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
          Git is the source of truth • Filesystem, process, and remote signals are live hints
        </p>
      </div>
    </section>
  )
}
