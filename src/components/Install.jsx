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
  const version = useGitHubVersion('QubeTX/qube-machine-report', '3.14.3')
  const unixCommand = "(command -v rustup >/dev/null 2>&1 || curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y) && { [ -f \"$HOME/.cargo/env\" ] && . \"$HOME/.cargo/env\"; export PATH=\"${CARGO_INSTALL_ROOT:-${CARGO_HOME:-$HOME/.cargo}}/bin:$PATH\"; } && rustup update stable && cargo install tr300 && tr300 install"
  const pathNote = "The command adds Cargo's bin directory to PATH for this terminal so tr300 works immediately; when rustup installs Rust, it also configures future terminal sessions."
  const installNote = 'Already installed with older instructions? Run tr300 update. If an older Cargo command used tr-300, rerun this command; the crates.io package is tr300.'

  const platforms = {
    macos: {
      label: 'macOS',
      prompt: '$',
      comment: '# Install Rust/Cargo, then TR-300',
      command: unixCommand,
      explanation: "Installs Rust with rustup when needed, loads Cargo into this terminal's PATH, updates stable Rust, installs TR-300 from crates.io as the tr300 package, then runs tr300 install to add the report alias and auto-run line to your shell profile.",
      updateCommand: 'tr300 update',
      note: "If your macOS account isn't an administrator, prefix the command with sudo. Admin users can paste it as-is."
    },
    linux: {
      label: 'Linux',
      prompt: '$',
      comment: '# Install Rust/Cargo, then TR-300',
      command: unixCommand,
      explanation: "Installs Rust with rustup when needed, loads Cargo into this terminal's PATH, updates stable Rust, installs TR-300 from crates.io as the tr300 package, then runs tr300 install to add the report alias and auto-run line to your shell profile.",
      updateCommand: 'tr300 update'
    },
    windows: {
      label: 'Windows',
      prompt: 'PS>',
      comment: '# Install Rust/Cargo, then TR-300',
      command: '$VSWhere = "${env:ProgramFiles(x86)}\\Microsoft Visual Studio\\Installer\\vswhere.exe"; $HasMsvc = $false; if (Test-Path $VSWhere) { $HasMsvc = [bool](& $VSWhere -products * -requires Microsoft.VisualStudio.Component.VC.Tools.x86.x64 -property installationPath 2>$null) }; if (-not $HasMsvc) { Write-Host "Installing Visual Studio Build Tools (required by Rust, ~3 GB, several minutes)..." -ForegroundColor Cyan; if (Get-Command winget -ErrorAction SilentlyContinue) { winget install --id Microsoft.VisualStudio.2022.BuildTools --source winget --silent --accept-package-agreements --accept-source-agreements --override "--quiet --wait --norestart --nocache --add Microsoft.VisualStudio.Workload.VCTools --includeRecommended" } else { $VSBT = Join-Path $env:TEMP "vs_buildtools.exe"; Invoke-WebRequest -Uri "https://aka.ms/vs/17/release/vs_buildtools.exe" -OutFile $VSBT; Start-Process -Wait -FilePath $VSBT -ArgumentList "--quiet","--wait","--norestart","--nocache","--add","Microsoft.VisualStudio.Workload.VCTools","--includeRecommended" } }; $CargoBin=Join-Path $env:USERPROFILE ".cargo\\bin"; $env:Path="$CargoBin;$env:Path"; if (-not (Get-Command rustup -ErrorAction SilentlyContinue)) { $Rustup=Join-Path $env:TEMP "rustup-init.exe"; Invoke-WebRequest -Uri "https://win.rustup.rs/x86_64" -OutFile $Rustup; & $Rustup -y; $env:Path="$CargoBin;$env:Path" }; rustup update stable; if ($LASTEXITCODE -eq 0) { cargo install tr300; if ($LASTEXITCODE -eq 0) { tr300 install } }',
      explanation: "Checks for Visual Studio C++ Build Tools (silently installs the VCTools workload via winget if missing — required by Rust on Windows), adds Cargo to this PowerShell session's PATH, installs Rust with rustup when needed, updates stable Rust, installs TR-300 from crates.io as the tr300 package, then runs tr300 install to add the report alias and auto-run line to your PowerShell profile.",
      updateCommand: 'tr300 update',
      note: 'Launch PowerShell as Administrator before pasting — rustup-init and the Build Tools installer need elevated permissions. First-time installs without existing Visual Studio Build Tools will download ~2–5 GB and take several minutes (subsequent runs detect the existing install and skip).'
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
