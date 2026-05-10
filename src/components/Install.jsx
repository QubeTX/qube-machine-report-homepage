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
  const version = useGitHubVersion('QubeTX/qube-machine-report', '3.9.0')

  const platforms = {
    macos: {
      label: 'macOS',
      prompt: '$',
      comment: '# Install Rust/Cargo, then TR-300',
      command: "(command -v cargo >/dev/null 2>&1 || curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y) && { [ -f \"$HOME/.cargo/env\" ] && . \"$HOME/.cargo/env\"; true; } && rustup update stable && cargo install tr-300",
      explanation: "Installs Rust with rustup only if Cargo is missing, loads Cargo's PATH for this terminal, updates stable Rust, then installs TR-300 from Cargo.",
      updateCommand: 'tr300 update'
    },
    linux: {
      label: 'Linux',
      prompt: '$',
      comment: '# Install Rust/Cargo, then TR-300',
      command: "(command -v cargo >/dev/null 2>&1 || curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y) && { [ -f \"$HOME/.cargo/env\" ] && . \"$HOME/.cargo/env\"; true; } && rustup update stable && cargo install tr-300",
      explanation: "Installs Rust with rustup only if Cargo is missing, loads Cargo's PATH for this terminal, updates stable Rust, then installs TR-300 from Cargo.",
      updateCommand: 'tr300 update'
    },
    windows: {
      label: 'Windows',
      prompt: 'PS>',
      comment: '# Install Rust/Cargo, then TR-300',
      command: '$CargoBin=Join-Path $env:USERPROFILE ".cargo\\bin"; $env:Path="$CargoBin;$env:Path"; if (-not (Get-Command cargo -ErrorAction SilentlyContinue)) { $Rustup=Join-Path $env:TEMP "rustup-init.exe"; Invoke-WebRequest -Uri "https://win.rustup.rs/x86_64" -OutFile $Rustup; & $Rustup -y; $env:Path="$CargoBin;$env:Path" } elseif (Get-Command rustup -ErrorAction SilentlyContinue) { rustup update stable }; cargo install tr-300',
      explanation: "Adds Cargo to this PowerShell session's PATH, installs Rust with rustup only if Cargo is missing, updates stable Rust when rustup is present, then installs TR-300 from Cargo.",
      updateCommand: 'tr300 update'
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

        <p style={{
          color: 'var(--fg-dim)',
          fontSize: '0.7rem',
          lineHeight: '1.6',
          margin: '0.5rem 0 0 0'
        }}>
          Update later: <span style={{ color: 'var(--fg-bone)' }}>{current.updateCommand}</span>
        </p>
      </div>

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
