import { useState } from 'react'
import useGitHubVersion, { shortVersion } from '../hooks/useGitHubVersion'

const TabButton = ({ children, active, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      type="button"
      aria-pressed={active}
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

const DownloadButton = ({ href, label, accessibleLabel }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={accessibleLabel || label}
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
  const version = useGitHubVersion('QubeTX/qube-system-diagnostics', '4.0.1')
  const releaseBase = 'https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download'
  const unixCommand = `curl --proto '=https' --tlsv1.2 -LsSf ${releaseBase}/sd300-cli-installer.sh | sh`
  const platforms = {
    macos: {
      label: 'macOS',
      installer: 'Terminal installer',
      prompt: '$',
      comment: '# Paste into Terminal',
      command: unixCommand,
      explanation: 'Installs for your user account without sudo. Supports Apple Silicon and Intel Macs.',
      appLocation: 'Open SD-300.app in your home Applications folder (~/Applications).',
      terminalNote: 'Open a new terminal after installation, then run sd300.'
    },
    linux: {
      label: 'Linux',
      installer: 'Shell installer',
      prompt: '$',
      comment: '# Paste into your terminal',
      command: unixCommand,
      explanation: 'Use the official shell installer on supported Linux systems, including servers where you only need the terminal tools.',
      appLocation: 'On a graphical desktop, find SD-300 in your application menu. The terminal tools also work without a desktop session.',
      terminalNote: 'Open a new terminal after installation, then run sd300. Setup configures Bash and fish command discovery, including custom fish configuration locations.'
    },
    windows: {
      label: 'Windows',
      installer: 'PowerShell installer',
      prompt: 'PS>',
      comment: '# Paste into PowerShell',
      command: `irm ${releaseBase}/sd300-cli-installer.ps1 | iex`,
      explanation: 'Run in a normal PowerShell window; no administrator access is needed. Setup verifies the saved command path and Start-menu shortcut, and identifies the step if installation fails.',
      appLocation: 'Search for SD-300 in the Windows Start menu to open the desktop app.',
      terminalNote: 'Run sd300 in PowerShell, Command Prompt, or a terminal tab. The installer refreshes its PowerShell session; fully quit and reopen other terminal apps to pick up the saved PATH.'
    }
  }

  const current = platforms[selectedPlatform]
  const bodyStyle = { color: '#aaa', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', lineHeight: 1.7 }

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
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        Install <span style={{ whiteSpace: 'nowrap' }}>SD-300</span>
      </h2>

      <p style={{ ...bodyStyle, maxWidth: '650px', textAlign: 'center', margin: '0 0 2rem' }}>
        One install includes the terminal tools (CLI/TUI) and the desktop app.
        {' '}Use the recommended command for your operating system, or choose a clickable installer below.
        {' '}Both include the complete product; no Rust toolchain or compilation is needed.
      </p>

      <div role="group" aria-label="Choose your operating system" style={{
        display: 'flex',
        gap: '0.75rem',
        marginBottom: '2rem',
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

      <div style={{ width: '100%', maxWidth: '800px', marginBottom: '1rem' }}>
        <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', margin: '0 0 0.5rem' }}>
          Recommended for {current.label}: {current.installer}
        </h3>
        <p style={{ ...bodyStyle, margin: 0 }}>{current.explanation}</p>
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
          SD-300 {shortVersion(version)} · CLI + DESKTOP APP
        </span>

        <CopyButton text={current.command} />

        <CodeBlock
          prompt={current.prompt}
          comment={current.comment}
          command={current.command}
        />

      </div>

      <div style={{ ...bodyStyle, width: '100%', maxWidth: '800px', marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.5rem' }}>
        <div>
          <h3 style={{ color: 'var(--fg-bone)', fontSize: '0.9rem', margin: '0 0 0.5rem' }}>Open the desktop app</h3>
          <p style={{ margin: 0 }}>{current.appLocation} You can also run <code>sd300 gui</code>.</p>
        </div>
        <div>
          <h3 style={{ color: 'var(--fg-bone)', fontSize: '0.9rem', margin: '0 0 0.5rem' }}>Open the terminal dashboard</h3>
          <p style={{ margin: 0 }}>{current.terminalNote}</p>
        </div>
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
              Prefer a clickable Mac installer?
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
              Installs the terminal tools and desktop app in one setup, with the app in /Applications.
              Future updates keep using the PKG installer.
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
        <div style={{ width: '100%', maxWidth: '800px', marginTop: '3rem' }}>
          <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', margin: '0 0 0.5rem' }}>Prefer a Windows setup wizard?</h3>
          <p style={{ ...bodyStyle, margin: '0 0 1.5rem' }}>
            Choose EXE for a clickable setup wizard, or MSI for Windows Installer and IT deployment.
            {' '}Both install the terminal tools and desktop app. Choose the edition that matches your access:
          </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
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
                <DownloadButton href={`${releaseBase}/${exe}`} label="Download .EXE" accessibleLabel={`Download ${edition} EXE`} />
                <DownloadButton href={`${releaseBase}/${msi}`} label="Download .MSI" accessibleLabel={`Download ${edition} MSI`} />
              </div>
            </div>
          ))}
        </div>
        </div>
      )}

      <div style={{ ...bodyStyle, width: '100%', maxWidth: '800px', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #333' }}>
        <h3 style={{ color: 'var(--fg-bone)', fontSize: '1rem', margin: '0 0 0.5rem' }}>Already installed?</h3>
        <p style={{ margin: '0 0 0.75rem' }}>
          Update both frontends with <code>sd300 update</code>. It keeps your existing installation method,
          edition and location, whether you started with a terminal command, EXE, MSI or PKG.
          {' '}The desktop app and terminal dashboard run independently.
        </p>
        <p style={{ margin: '0 0 1.5rem' }}>
          To remove both, run <code>sd300 uninstall</code>. It uses the recorded installer to remove
          SD-300 and its own settings, shortcuts and command-path entries, while preserving shared Cargo and Rust tools.
        </p>
        <h3 style={{ color: 'var(--fg-bone)', fontSize: '1rem', margin: '0 0 0.5rem' }}>Upgrading an older installation</h3>
        <p style={{ margin: '0 0 0.75rem' }}>
          Moving from SD-300 3.x to 4? Run the current official installer in the same format you used before.
          {' '}For a managed command-line installation, repeat the install command above. For a Windows MSI or EXE,
          keep the same Global or Corporate edition; for a Mac package installation, use the current PKG above.
          {' '}The older automatic updater can reject the new desktop app. You do not need to uninstall first.
        </p>
        <p style={{ margin: '0 0 1.5rem' }}>
          SD-300 4.0.1 fixes the Windows automatic update check and gives clearer recovery instructions when a check fails.
          {' '}If you have Windows 4.0.0, use your matching official installer once to get the fix. After that,
          {' '}<code>sd300 update</code> works normally. Your settings are preserved.
          {' '}<a href="https://github.com/QubeTX/qube-system-diagnostics/releases/latest" style={{ color: 'var(--accent-signal)' }}>Release notes and downloads</a>.
        </p>
        <details>
          <summary style={{ color: 'var(--fg-bone)', cursor: 'pointer' }}>Advanced: Cargo and changing installation methods</summary>
          <p>
            <code>cargo install tr300-tui</code> is an advanced CLI/TUI-only installation. It does not install the desktop app.
            {' '}Choose one of the official installers above for the complete product.
          </p>
          <p style={{ marginBottom: 0 }}>
            Deliberately running a different official installer requests a change of installation method or edition,
            including a reinstall or downgrade. Setup completes that change only when ownership is clear and the transition is safe;
            otherwise, it preserves the working installation and explains the problem.
          </p>
        </details>
      </div>

      <p style={{
        fontFamily: 'var(--font-mono)',
        letterSpacing: '-0.5px',
        fontSize: '0.7rem',
        marginTop: '2rem',
        color: '#555',
        textAlign: 'center'
      }}>
        PolyForm Noncommercial License • Real-time system diagnostics — terminal + native desktop app
      </p>
    </section>
  )
}
