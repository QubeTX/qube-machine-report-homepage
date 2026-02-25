import { useState } from 'react'

const GridCell = ({ label, title, description, linkText, linkUrl, noBorder }) => {
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

      <a
        href={linkUrl}
        style={{
          fontFamily: 'var(--font-mono)',
          letterSpacing: '-0.5px',
          fontSize: '0.7rem',
          marginTop: '2rem',
          color: 'var(--accent-signal)',
          cursor: 'pointer',
          textDecoration: 'none'
        }}
      >
        {linkText}
      </a>
    </div>
  )
}

const DownloadButton = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href="https://github.com/QubeTX/qube-reports-executables/archive/refs/heads/main.zip"
      style={{
        background: 'var(--accent-signal)',
        border: '2px solid var(--accent-signal)',
        color: 'var(--bg-void)',
        fontFamily: 'var(--font-mono)',
        fontWeight: '700',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        borderRadius: '6px',
        textTransform: 'uppercase',
        transition: 'all 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
        transform: isHovered ? 'translateY(-2px)' : 'none',
        boxShadow: isHovered ? '0 4px 12px rgba(255, 0, 212, 0.3)' : 'none',
        fontSize: '0.75rem',
        textDecoration: 'none',
        display: 'inline-block'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      ↓ DOWNLOAD ALL (.ZIP)
    </a>
  )
}

export default function ExecutablesContent() {
  return (
    <>
      {/* Explainer section */}
      <section id="tools" style={{
        padding: '6rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderBottom: '1px solid #222'
      }}>
        <div style={{
          maxWidth: '700px',
          textAlign: 'center'
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--fg-dim)',
            border: '1px solid var(--fg-dim)',
            padding: '2px 8px',
            borderRadius: '4px',
            display: 'inline-block',
            marginBottom: '2rem'
          }}>
            ABOUT OFFLINE EXECUTABLES
          </span>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
            lineHeight: '1.4',
            color: 'var(--fg-bone)',
            fontStyle: 'italic',
            margin: '0 0 2rem 0'
          }}>
            The archive contains pre-built binaries for all QubeTX CLI tools across macOS, Linux, and Windows — no internet, package manager, or build tools required. Extract and run.
          </p>

          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            lineHeight: '1.5',
            color: 'var(--fg-dim)',
            margin: '0 0 2rem 0'
          }}>
            Identical to the releases on GitHub — same binaries, same functionality, just downloaded directly.
          </p>

          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--fg-dim)',
            lineHeight: '1.6'
          }}>
            Contains: TR-300, ND-300, SD-300 · Platforms: macOS (arm64/x64), Linux (x64), Windows (x64)
          </span>
        </div>
      </section>

      {/* Tool summary grid */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
        borderBottom: '1px solid #222'
      }}>
        <GridCell
          label="01 // MACHINE REPORT"
          title="TR-300<br/>Machine Report"
          description="Instant visibility into CPU load, memory, disk, and network. Beautiful Unicode tables or JSON for scripting."
          linkText="> VIEW TR-300"
          linkUrl="/"
        />
        <GridCell
          label="02 // NETWORK DIAGNOSTIC"
          title="ND-300<br/>Network Diagnostic"
          description="Cross-platform network diagnostic and repair tool. Connectivity tests, DNS resolution, route tracing, and interface analysis."
          linkText="> VIEW ND-300"
          linkUrl="/nd300"
        />
        <GridCell
          label="03 // SYSTEM DIAGNOSTIC"
          title="SD-300<br/>System Diagnostic"
          description="Deep system health analysis with driver scanning, service auditing, and hardware diagnostics across all major platforms."
          linkText="> VIEW SD-300"
          linkUrl="/sd300"
          noBorder
        />
      </section>

      {/* Secondary download CTA */}
      <section style={{
        padding: '6rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        borderBottom: '1px solid #222'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          transform: 'scaleX(1.1)'
        }}>
          Download
        </h2>

        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
          color: '#aaa',
          fontStyle: 'italic',
          marginBottom: '2.5rem'
        }}>
          All tools. All platforms. One archive.
        </p>

        <DownloadButton />

        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          marginTop: '2rem',
          color: 'var(--fg-dim)'
        }}>
          Source: <a
            href="https://github.com/QubeTX/qube-reports-executables"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}
          >
            github.com/QubeTX/qube-reports-executables
          </a>
        </p>
      </section>
    </>
  )
}
