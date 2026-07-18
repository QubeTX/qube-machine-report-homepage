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

export default function ND300Install() {
  const [selectedPlatform, setSelectedPlatform] = useState('macos')
  const version = useGitHubVersion('QubeTX/qube-network-diagnostics', '3.7.3')
  const unixCommand = "curl -LsSf https://reports.qubetx.com/install-nd300.sh | sh"
  const pathNote = "Behind the scenes the wrapper downloads the prebuilt nd300 and speedqx binaries into ~/.cargo/bin (or %USERPROFILE%\\.cargo\\bin on Windows) and updates your shell config so future terminals can find them."
  const installNote = 'Already installed? Run nd300 update or speedqx update. Updates preserve the proven channel you installed last time; deliberately running a different official installer changes the channel for future updates.'

  const unixExplanation = "Fetches a small wrapper script from reports.qubetx.com that internally runs the official cargo-dist installer, which downloads the prebuilt nd300 and speedqx binaries for macOS arm64/x64 or Linux x64 into ~/.cargo/bin. No Rust toolchain is downloaded or built — the binaries are already compiled."

  const platforms = {
    macos: {
      label: 'macOS',
      prompt: '$',
      comment: '# Recommended — install both commands without opening an installer',
      command: unixCommand,
      explanation: unixExplanation,
      updateCommand: 'nd300 update',
      note: "This command-first route is the recommended Mac install and stays in the managed-archive update channel. If you prefer Apple's graphical Installer, use the signed, notarized universal PKG below; later CLI updates reopen that same PKG channel."
    },
    linux: {
      label: 'Linux',
      prompt: '$',
      comment: '# Recommended — install the prebuilt nd300 and speedqx binaries',
      command: unixCommand,
      explanation: unixExplanation,
      updateCommand: 'nd300 update'
    },
    windows: {
      label: 'Windows',
      prompt: 'PS>',
      comment: '# Recommended — install the prebuilt nd300 and speedqx binaries',
      command: 'powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install-nd300.ps1 | iex"',
      explanation: "Fetches a small wrapper script from reports.qubetx.com that internally runs the official cargo-dist installer, which downloads the prebuilt nd300.exe and speedqx.exe binaries for x86_64 Windows into %USERPROFILE%\\.cargo\\bin. No Rust toolchain, no MSVC Build Tools — the binaries are already compiled.",
      updateCommand: 'nd300 update',
      note: "This command-first route is the recommended Windows install and runs in user scope with no administrator PowerShell. For system-wide, managed, or double-click deployment, choose one MSI/EXE channel below. Later CLI updates reuse the proven channel; deliberately launching a different official installer makes that fresh choice authoritative when the scope change is safe."
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
          border: '1px solid #333',
          borderRadius: '4px',
          padding: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center'
        }}>
          <div style={{ flex: '1 1 420px' }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--fg-bone)',
              textTransform: 'uppercase',
              margin: '0 0 0.5rem 0'
            }}>
              Optional — Apple Installer
            </p>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '1rem',
              lineHeight: '1.5',
              color: '#aaa',
              margin: 0
            }}>
              One direct universal PKG for Apple Silicon and Intel. It installs both commands,
              is signed, notarized, and stapled by Apple, and keeps future CLI updates on the same package channel.
            </p>
          </div>
          <DownloadButton
            href="https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-universal-apple-darwin.pkg"
            label="↓ Download .PKG"
          />
        </div>
      )}

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
              Optional native installers for managed, system-wide, or double-click deployment.
            </p>

            <span style={chipStyle}>Global</span>
            <span style={descStyle}>Installs to Program Files — requires administrator.</span>
            <div style={buttonsRowStyle}>
              <DownloadButton
                href="https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-pc-windows-msvc.msi"
                label="↓ Download .MSI"
              />
              <DownloadButton
                href="https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-pc-windows-msvc-setup.exe"
                label="↓ Download .EXE"
              />
            </div>

            <span style={chipStyle}>Corporate</span>
            <span style={descStyle}>Installs to your user profile — no admin required.</span>
            <div style={buttonsRowStyle}>
              <DownloadButton
                href="https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-pc-windows-msvc-corporate.msi"
                label="↓ Download .MSI"
              />
              <DownloadButton
                href="https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd300-x86_64-pc-windows-msvc-corporate-setup.exe"
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
        PolyForm Noncommercial License • Cross-platform network diagnostics CLI
      </p>
    </section>
  )
}
