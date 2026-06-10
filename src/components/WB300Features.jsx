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
    { title: 'The Real Branch Hierarchy', description: 'Your actual branch tree — main, the daily workbranch, and a task branch per agent — derived from Git’s commit history itself, never guessed from names. One agent, one branch, one worktree.' },
    { title: 'Per-Branch Lifecycle', description: 'Every branch shows where its work stands at a glance: being edited right now → uncommitted (held yellow) → committed (↑) → pushed (✓) → merged. Falling behind its parent? It says so.' },
    { title: 'Agents On Their Branches', description: 'Scans running programs and pins each agent (Claude / Codex) or task (build / test / shell / editor) to the branch it’s working, with CPU, memory, runtime — and the exact files it’s changing, expandable like a file explorer.' },
    { title: 'Live Flashes', description: 'A blue pulse on the very file being saved, magenta the moment a branch commits, green the moment it pushes — no refresh key. Rebases don’t masquerade as commits.' },
    { title: 'OS Notifications', description: 'A real system notification when a branch gets new commits, when work reaches the remote, and when two branches start changing the same file — and never for anything else. Bursts coalesce; repeats stay quiet.' },
    { title: 'Merge-Risk Forecast', description: 'Flags any file changed on two or more branches — including files already committed since the shared base — colour-coded by risk, with lockfiles, migrations, and CI configs as the scariest.' },
    { title: 'Safe Cleanup', description: "Shows which worktrees are safe to remove (merged, pushed, no agent). Removal needs you to type the branch name to confirm — the branch and its commits are kept, and a rescue snapshot is saved first if there's uncommitted work." },
    { title: 'Machine-Wide Home View', description: 'Run wb300 outside a repo and the same tree shows every active project as a top-level entry — every branch and agent beneath it. One window over the entire fleet; press Enter to step into a repo.' },
    { title: 'Headless Agent JSON', description: 'wb300 agent prints the whole branch hierarchy — roles, parents, lifecycle stages, agents, changed files — as pure JSON and exits (schema wb300.agent.v2), so orchestrating agents can read the picture in one shot.' },
    { title: 'Self-Documenting, Self-Removing', description: 'wb300 help prints the full manual — every view, key, and symbol — right in the terminal. wb300 uninstall removes it cleanly whatever way it was installed, and never touches your repositories.' },
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
