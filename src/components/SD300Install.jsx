import { useState } from 'react'
import useGitHubVersion, { shortVersion } from '../hooks/useGitHubVersion'

const TabButton = ({ children, active, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      style={{
        background: active ? 'var(--accent-signal)' : 'transparent',
        border: `2px solid ${active ? 'var(--accent-signal)' : 'var(--fg-bone)'}`,
        color: active ? 'var(--bg-void)' : isHovered ? 'var(--accent-signal)' : 'var(--fg-bone)',
        fontFamily: 'var(--font-mono)',
        fontWeight: '700',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        borderRadius: '6px',
        textTransform: 'uppercase',
        transition: 'all 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
        borderColor: isHovered && !active ? 'var(--accent-signal)' : active ? 'var(--accent-signal)' : 'var(--fg-bone)',
        transform: isHovered && !active ? 'translateY(-2px)' : 'none',
        boxShadow: isHovered && !active ? '0 4px 12px rgba(255, 0, 212, 0.15)' : 'none',
        fontSize: '0.75rem'
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  )
}

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        background: copied ? 'var(--accent-signal)' : 'var(--fg-bone)',
        color: 'var(--bg-void)',
        border: 'none',
        padding: '4px 8px',
        borderRadius: '2px',
        fontSize: '0.6rem',
        fontFamily: 'var(--font-mono)',
        cursor: 'pointer',
        opacity: isHovered || copied ? 1 : 0.5,
        transition: 'all 0.2s ease',
        textTransform: 'uppercase'
      }}
    >
      {copied ? 'COPIED!' : 'COPY'}
    </button>
  )
}

const DownloadButton = ({ href, label }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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
        display: 'inline-block',
        textAlign: 'center'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </a>
  )
}

const CodeBlock = ({ prompt, comment, command }) => (
  <div style={{ marginBottom: '0.75rem' }}>
    {comment && (
      <span style={{ display: 'block', color: '#666', marginBottom: '0.25rem' }}>
        {comment}
      </span>
    )}
    <span style={{
      display: 'block',
      color: 'var(--fg-bone)',
      overflowWrap: 'anywhere',
      wordBreak: 'break-word',
      paddingRight: '3.5rem'
    }}>
      <span style={{ color: 'var(--accent-signal)' }}>{prompt} </span>
      {command}
    </span>
  </div>
)

export default function SD300Install() {
  const [selectedPlatform, setSelectedPlatform] = useState('macos')
  const version = useGitHubVersion('QubeTX/qube-system-diagnostics', '2.0.2')
  const releaseBase = 'https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download'
  const unixCommand = `curl --proto '=https' --tlsv1.2 -LsSf ${releaseBase}/sd300-cli-installer.sh | sh`
  const pathNote = 'The installer records its exact owner and install path. A later sd300 update reuses that same managed, MSI, EXE, or PKG channel instead of silently switching formats.'
  const installNote = 'A fresh official install is authoritative, even over another edition or an older/newer copy. It either completes the requested takeover or leaves the working installation unchanged. The crates.io package remains tr300-tui; raw Cargo installs are an advanced unmanaged option.'

  const unixExplanation = 'Downloads the latest prebuilt sd300 binary and writes a managed-install receipt. No Rust toolchain is downloaded or built; the CLI installer is the recommended path on macOS and Linux.'

  const platforms = {
    macos: {
      label: 'macOS',
      prompt: '$',
      comment: '# Recommended managed CLI install',
      command: unixCommand,
      explanation: unixExplanation,
      updateCommand: 'sd300 update',
      note: 'Runs in user scope with no sudo. The signed and notarized Apple PKG below remains available for a native Installer workflow.'
    },
    linux: {
      label: 'Linux',
      prompt: '$',
      comment: '# Recommended managed CLI install',
      command: unixCommand,
      explanation: unixExplanation,
      updateCommand: 'sd300 update'
    },
    windows: {
      label: 'Windows',
      prompt: 'PS>',
      comment: '# Recommended managed CLI install',
      command: `irm ${releaseBase}/sd300-cli-installer.ps1 | iex`,
      explanation: 'Downloads the latest prebuilt sd300.exe and writes a managed-install receipt. No Rust toolchain or MSVC Build Tools are required.',
      updateCommand: 'sd300 update',
      note: 'Runs in user scope with no administrator PowerShell. Global and Corporate MSI/EXE installers remain available below for deployment-policy and double-click workflows.'
    }
  }

  const current = platforms[selectedPlatform]

  return (
    <section id="install" style={{
      padding: '6rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
        textTransform: 'uppercase',
        marginBottom: '3rem',
        transform: 'scaleX(1.1)',
        textAlign: 'center'
      }}>
        Initialize
      </h2>

      <div style={{
        display: 'flex',
        gap: '0.75rem',
        marginBottom: '3rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <TabButton
          active={selectedPlatform === 'macos'}
          onClick={() => setSelectedPlatform('macos')}
        >
          macOS
        </TabButton>
        <TabButton
          active={selectedPlatform === 'linux'}
          onClick={() => setSelectedPlatform('linux')}
        >
          Linux
        </TabButton>
        <TabButton
          active={selectedPlatform === 'windows'}
          onClick={() => setSelectedPlatform('windows')}
        >
          Windows
        </TabButton>
      </div>

      <div style={{
        width: '100%',
        maxWidth: '800px',
        background: '#000',
        border: '1px solid #333',
        borderRadius: '4px',
        padding: '2rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        position: 'relative'
      }}>
        <span style={{
          position: 'absolute',
          top: '-10px',
          left: '10px',
          background: 'var(--bg-void)',
          padding: '0 10px',
          fontSize: '0.7rem',
          color: 'var(--fg-dim)'
        }}>
          TERMINAL // V.{shortVersion(version)}
        </span>

        <CopyButton text={current.command} />

        <CodeBlock
          prompt={current.prompt}
          comment={current.comment}
          command={current.command}
        />

        <p style={{
          color: 'var(--fg-dim)',
          fontSize: '0.7rem',
          lineHeight: '1.6',
          margin: '1.5rem 0 0 0'
        }}>
          {current.explanation}
        </p>

        {current.note && (
          <p style={{
            color: 'var(--fg-dim)',
            fontSize: '0.7rem',
            lineHeight: '1.6',
            margin: '0.5rem 0 0 0'
          }}>
            {current.note}
          </p>
        )}

        <p style={{
          color: 'var(--fg-dim)',
          fontSize: '0.7rem',
          lineHeight: '1.6',
          margin: '0.5rem 0 0 0'
        }}>
          {pathNote}
        </p>

        <p style={{
          color: 'var(--fg-dim)',
          fontSize: '0.7rem',
          lineHeight: '1.6',
          margin: '0.5rem 0 0 0'
        }}>
          Update later: <span style={{ color: 'var(--fg-bone)' }}>{current.updateCommand}</span>
        </p>

        <p style={{
          color: 'var(--fg-dim)',
          fontSize: '0.7rem',
          lineHeight: '1.6',
          margin: '0.5rem 0 0 0'
        }}>
          {installNote}
        </p>
      </div>

      {selectedPlatform === 'macos' && (
        <div style={{
          width: '100%',
          maxWidth: '800px',
          marginTop: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
          alignItems: 'center'
        }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--fg-bone)',
              textTransform: 'uppercase',
              margin: '0 0 0.5rem 0'
            }}>
              Apple Installer Alternative
            </p>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '1rem',
              lineHeight: '1.5',
              color: '#aaa',
              margin: 0
            }}>
              One universal signed and notarized PKG for Apple Silicon and Intel.
              Future CLI updates remain on the PKG channel.
            </p>
          </div>
          <div style={{ justifySelf: 'end' }}>
            <DownloadButton
              href={`${releaseBase}/sd300-macos-universal.pkg`}
              label="Download .PKG"
            />
          </div>
        </div>
      )}

      {selectedPlatform === 'windows' && (
        <div style={{
          width: '100%',
          maxWidth: '800px',
          marginTop: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem'
        }}>
          {[
            {
              edition: 'Global',
              description: 'Installs to Program Files and requires administrator approval.',
              msi: 'sd300-windows-x64-global.msi',
              exe: 'sd300-windows-x64-global.exe'
            },
            {
              edition: 'Corporate',
              description: 'Installs to your user profile without administrator access.',
              msi: 'sd300-windows-x64-corporate.msi',
              exe: 'sd300-windows-x64-corporate.exe'
            }
          ].map(({ edition, description, msi, exe }) => (
            <div key={edition} style={{ minWidth: 0 }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--fg-bone)',
                textTransform: 'uppercase',
                margin: '0 0 0.5rem 0'
              }}>
                {edition}
              </p>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#aaa',
                margin: '0 0 1rem 0'
              }}>
                {description}
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <DownloadButton href={`${releaseBase}/${msi}`} label="Download .MSI" />
                <DownloadButton href={`${releaseBase}/${exe}`} label="Download .EXE" />
              </div>
            </div>
          ))}
        </div>
      )}

      <p style={{
        fontFamily: 'var(--font-mono)',
        letterSpacing: '-0.5px',
        fontSize: '0.7rem',
        marginTop: '2rem',
        color: '#555',
        textAlign: 'center'
      }}>
        PolyForm Noncommercial License • Real-time system diagnostics TUI
      </p>
    </section>
  )
}
