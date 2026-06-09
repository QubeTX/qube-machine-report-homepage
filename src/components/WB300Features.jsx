import { useState } from 'react'

const FeatureRow = ({ index, title, description }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        borderBottom: '1px solid #222',
        padding: '2rem 0',
        transition: 'background 0.2s ease',
        background: isHovered ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
        cursor: 'default',
        gap: '1.5rem'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        color: isHovered ? 'var(--accent-signal)' : 'var(--fg-dim)',
        transition: 'color 0.2s ease',
        flexShrink: 0,
        width: '2rem'
      }}>
        {index}
      </span>

      <div style={{ flex: 1 }}>
        <h4 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          textTransform: 'uppercase',
          transform: 'scaleX(1.1)',
          transformOrigin: 'left',
          marginBottom: '0.5rem',
          color: 'var(--fg-bone)'
        }}>
          {title}
        </h4>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          textTransform: 'uppercase',
          lineHeight: '1.4',
          color: 'var(--fg-dim)'
        }}>
          {description}
        </div>
      </div>
    </div>
  )
}

export default function WB300Features() {
  const features = [
    { title: 'Branch + Worktree Explorer', description: 'Local branches, remote-tracking branches, and worktrees in one tree, with detached, locked, prunable, and stale state flagged inline.' },
    { title: 'Process → Worktree Mapping', description: 'Scans running programs and works out which agent (Claude / Codex) or task (build / test / shell / editor) is inside which worktree, with CPU, memory, and runtime.' },
    { title: 'Live Flashes', description: 'Created, modified, pushed, deleted, and merged shown the moment they happen — with temporary colour flashes — no need to press refresh.' },
    { title: 'Collision Detection', description: 'Flags any file two or more worktrees have touched — including files already committed since the shared branch — colour-coded by risk, with lockfiles, migrations, and CI configs as the scariest.' },
    { title: 'Readiness & Safe Cleanup', description: "Shows what's ready to review, stale, risky, or safe to remove. Removal needs you to type the name to confirm — and a rescue snapshot is saved first if there's uncommitted work." },
    { title: 'Machine-Wide Home View', description: 'Run wb300 outside a repo to see every project being actively worked on across the machine, grouped by workbranch, with the same live flashes — supervise several agents across several projects at once.' },
    { title: 'Headless Agent JSON', description: 'wb300 agent prints the whole worktree, branch, agent, and collision state as pure JSON and exits, carrying a stable schema tag so orchestrating agents can read the picture in one shot.' },
    { title: 'Remote-Aware, Never Noisy', description: 'It never touches the network on its own — press f to fetch — and a worktree flashes green the moment its commits make it to the remote.' },
    { title: 'Registry-Aware Self-Update', description: 'wb300 update upgrades in place and, on Windows, remembers how you installed it, fetches the matching installer, verifies its checksum, and confirms the new version — even no-admin corporate installs.' },
    { title: 'Cross-Platform', description: 'A single Rust + Ratatui binary with native support for Windows, macOS, and Linux, on both Intel and ARM.' }
  ]

  return (
    <section style={{
      padding: '6rem 2rem',
      borderTop: '1px solid #222',
      borderBottom: '1px solid #222',
      overflow: 'hidden'
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
          Features
        </h2>

        <div style={{
          borderTop: '1px solid #222'
        }}>
          {features.map((f, i) => (
            <FeatureRow
              key={f.title}
              index={String(i + 1).padStart(2, '0')}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
