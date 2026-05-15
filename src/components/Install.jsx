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
        display: 'inline-block'
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

export default function Install() {
  const [selectedPlatform, setSelectedPlatform] = useState('macos')
  const version = useGitHubVersion('QubeTX/qube-machine-report', '3.14.3')
  const unixCommand = "curl -LsSf https://reports.qubetx.com/install.sh | sh"
  const pathNote = "Behind the scenes the wrapper downloads the prebuilt tr300 binary into ~/.cargo/bin (or %USERPROFILE%\\.cargo\\bin on Windows), updates your shell config so future terminals can find it, then runs tr300 install to write a small marker block to your shell profile — every new interactive shell picks up a report alias and an auto-run of tr300 --fast."
  const installNote = 'Already installed with older instructions? Run tr300 update. If an older Cargo command used tr-300, rerun this command; the crates.io package is tr300.'

  const unixExplanation = "Fetches a small wrapper script from reports.qubetx.com that internally runs the official cargo-dist installer (downloads the prebuilt tr300 binary for macOS arm64/x64 or Linux x64 into ~/.cargo/bin), then runs tr300 install to add a report alias and an auto-run line to your shell profile so new terminals start with tr300 ready. No Rust toolchain is downloaded or built — the binary is already compiled. The wrapper itself is two-files-of-shell, source on the homepage repo."

  const platforms = {
    macos: {
      label: 'macOS',
      prompt: '$',
      comment: '# Install the prebuilt tr300 binary',
      command: unixCommand,
      explanation: unixExplanation,
      updateCommand: 'tr300 update',
      note: "Runs entirely in user scope — no sudo needed. The installer script is the official cargo-dist artifact published with every TR-300 release; it installs to your home directory and updates your shell config, nothing system-wide."
    },
    linux: {
      label: 'Linux',
      prompt: '$',
      comment: '# Install the prebuilt tr300 binary',
      command: unixCommand,
      explanation: unixExplanation,
      updateCommand: 'tr300 update'
    },
    windows: {
      label: 'Windows',
      prompt: 'PS>',
      comment: '# Install the prebuilt tr300 binary',
      command: 'irm https://reports.qubetx.com/install.ps1 | iex',
      explanation: "Fetches a small wrapper script from reports.qubetx.com that internally runs the official cargo-dist installer (downloads the prebuilt tr300.exe binary for x86_64 Windows into %USERPROFILE%\\.cargo\\bin), then runs tr300 install to add a report PowerShell alias and an auto-run line to your PowerShell profile so every new session starts with tr300 ready. No Rust toolchain, no MSVC Build Tools — the binary is already compiled.",
      updateCommand: 'tr300 update',
      note: "Runs in user scope — no administrator PowerShell needed. If you'd rather have a system-wide install, skip the command line entirely, or hand a single installer to a colleague, use one of the prebuilt MSI/EXE installers below — they're the same binary, just packaged for double-click."
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

      {selectedPlatform === 'windows' && (() => {
        const chipStyle = {
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'var(--fg-dim)',
          border: '1px solid var(--fg-dim)',
          padding: '2px 8px',
          borderRadius: '4px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          justifySelf: 'end',
          whiteSpace: 'nowrap'
        }
        const descStyle = {
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: '1rem',
          color: '#aaa'
        }
        const buttonsRowStyle = { display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', flexWrap: 'wrap' }
        return (
          <div style={{
            width: '100%',
            maxWidth: '800px',
            marginTop: '3rem',
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            columnGap: '1rem',
            rowGap: '1.5rem',
            alignItems: 'center'
          }}>
            <p style={{
              gridColumn: '1 / -1',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              lineHeight: '1.6',
              color: 'var(--fg-dim)',
              textAlign: 'center',
              margin: 0
            }}>
              Prefer not to install Rust? Use a prebuilt Windows installer.
            </p>

            <span style={chipStyle}>Global</span>
            <span style={descStyle}>Installs to Program Files — requires administrator.</span>
            <div style={buttonsRowStyle}>
              <DownloadButton
                href="https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-x86_64-pc-windows-msvc.msi"
                label="↓ Download .MSI"
              />
              <DownloadButton
                href="https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-x86_64-pc-windows-msvc-setup.exe"
                label="↓ Download .EXE"
              />
            </div>

            <span style={chipStyle}>Corporate</span>
            <span style={descStyle}>Installs to your user profile — no admin required.</span>
            <div style={buttonsRowStyle}>
              <DownloadButton
                href="https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-x86_64-pc-windows-msvc-corporate.msi"
                label="↓ Download .MSI"
              />
              <DownloadButton
                href="https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-x86_64-pc-windows-msvc-corporate-setup.exe"
                label="↓ Download .EXE"
              />
            </div>
          </div>
        )
      })()}

      <p style={{
        fontFamily: 'var(--font-mono)',
        letterSpacing: '-0.5px',
        fontSize: '0.7rem',
        marginTop: '2rem',
        color: '#555',
        textAlign: 'center'
      }}>
        PolyForm Noncommercial License • Self-installing shell integration
      </p>
    </section>
  )
}
