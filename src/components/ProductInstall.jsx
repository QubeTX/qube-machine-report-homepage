import { useEffect, useRef, useState } from 'react'
import useInstallPlatform from '../hooks/useInstallPlatform'

const textStyle = { fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.65, color: '#aaa' }
const controlStyle = { fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, padding: '0.65rem 0.9rem', borderRadius: '4px', cursor: 'pointer', textTransform: 'uppercase' }

export const InstallNote = ({ children }) => <p style={{ margin: '0.5rem 0 1rem' }}>{children}</p>
export const InstallHeading = ({ children }) => <h3 style={{ color: 'var(--fg-bone)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{children}</h3>

export const InstallDetails = ({ title, children }) => (
  <details style={{ borderTop: '1px solid #333', padding: '0.8rem 0', overflowWrap: 'anywhere' }}>
    <summary style={{ color: 'var(--fg-bone)', cursor: 'pointer', fontWeight: 700 }}>{title}</summary>
    <div style={{ paddingTop: '0.4rem' }}>{children}</div>
  </details>
)

const PlatformButton = ({ active, onClick, children }) => {
  const [hovered, setHovered] = useState(false)
  return <button type="button" aria-pressed={active} onClick={onClick}
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    style={{ ...controlStyle, border: `1px solid ${active || hovered ? 'var(--accent-signal)' : '#666'}`, background: active ? 'var(--accent-signal)' : 'transparent', color: active ? 'var(--bg-void)' : 'var(--fg-bone)' }}>
    {children}
  </button>
}

const DownloadLink = ({ href, label, children }) => {
  const [hovered, setHovered] = useState(false)
  return <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    style={{ ...controlStyle, display: 'inline-block', textDecoration: 'none', border: '1px solid var(--accent-signal)', color: hovered ? 'var(--bg-void)' : 'var(--accent-signal)', background: hovered ? 'var(--accent-signal)' : 'transparent' }}>
    {children}
  </a>
}

const InstallCommand = ({ command, platform, version }) => {
  const [copyState, setCopyState] = useState('Copy')
  const timer = useRef()
  useEffect(() => () => clearTimeout(timer.current), [])
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopyState('Copied!')
    } catch {
      setCopyState('Select command to copy')
    }
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopyState('Copy'), 2500)
  }
  return <div style={{ padding: '1rem', background: '#000', border: '1px solid #444', borderRadius: '4px', marginTop: '1rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
      <span style={{ color: '#aaa', fontSize: '0.75rem' }}>{platform === 'windows' ? 'PowerShell' : 'Terminal'} · {version}</span>
      <button type="button" onClick={copy} style={{ ...controlStyle, border: 0, background: 'var(--fg-bone)', color: 'var(--bg-void)', minWidth: '5rem' }}>
        <span aria-live="polite">{copyState}</span>
      </button>
    </div>
    <code style={{ display: 'block', color: 'var(--fg-bone)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.7, overflowWrap: 'anywhere', userSelect: 'all' }}>{command}</code>
  </div>
}

export default function ProductInstall({ product, version, summary, platforms, releaseBase, windowsInstallers, macInstaller, children }) {
  const [selectedPlatform, setSelectedPlatform] = useInstallPlatform()
  const current = platforms[selectedPlatform]
  return (
    <section id="install" style={{ padding: 'clamp(2rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem)' }}>
      <div style={{ maxWidth: 'clamp(1160px, 84vw, 1800px)', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.15, textTransform: 'uppercase' }}>Install <span style={{ whiteSpace: 'nowrap' }}>{product}</span></h2>
            <p style={{ ...textStyle, marginTop: '0.75rem', maxWidth: '650px' }}>{summary}</p>
          </div>
          <div role="group" aria-label="Choose your operating system" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {Object.entries(platforms).map(([key, platform]) => <PlatformButton key={key} active={selectedPlatform === key} onClick={() => setSelectedPlatform(key)}>{platform.label}</PlatformButton>)}
          </div>
        </div>

        <div className="product-install-grid" style={{ ...textStyle, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', rowGap: 'clamp(2rem, 4vw, 4rem)', columnGap: 'clamp(2rem, 5vw, 6rem)', alignItems: 'start' }}>
          <div style={{ minWidth: 0 }}>
            <InstallHeading>Recommended for {current.label}</InstallHeading>
            <p>{selectedPlatform === 'windows' ? 'Paste into a normal PowerShell window. No administrator access needed.' : 'Paste into your terminal. No Rust toolchain or compilation needed.'}</p>
            <InstallCommand key={selectedPlatform} command={current.command} platform={selectedPlatform} version={version} />

            {selectedPlatform === 'windows' && windowsInstallers && <div style={{ marginTop: '1.5rem' }}>
              <InstallHeading>Prefer a setup wizard?</InstallHeading>
              <p style={{ marginBottom: '1rem' }}>MSI: Windows Installer / IT deployment. EXE: setup wizard.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '1rem' }}>
                {windowsInstallers.map(({ edition, msi, exe }) => <div key={edition} style={{ borderTop: '1px solid #444', paddingTop: '0.8rem', minWidth: 0 }}>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--fg-bone)' }}>{edition}</h4>
                  <p style={{ margin: '0.4rem 0 0.8rem' }}>{edition === 'Global' ? 'All users · Program Files. Requires administrator approval.' : 'Your user account. No administrator access needed.'}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <DownloadLink href={`${releaseBase}/${msi}`} label={`Download ${edition} MSI`}>↓ MSI</DownloadLink>
                    <DownloadLink href={`${releaseBase}/${exe}`} label={`Download ${edition} EXE`}>↓ EXE</DownloadLink>
                  </div>
                </div>)}
              </div>
            </div>}

            {selectedPlatform === 'macos' && macInstaller && <div style={{ marginTop: '1.5rem', borderTop: '1px solid #444', paddingTop: '1rem' }}>
              <InstallHeading>Prefer Apple Installer?</InstallHeading>
              <InstallNote>{macInstaller.description}</InstallNote>
              <DownloadLink href={`${releaseBase}/${macInstaller.asset}`} label="Download universal PKG">↓ Universal PKG</DownloadLink>
            </div>}
          </div>

          <aside aria-label={`${product} installation guidance`} style={{ minWidth: 0 }}>
            {children(current, selectedPlatform)}
          </aside>
        </div>
        <p style={{ ...textStyle, color: '#888', fontSize: '0.7rem', marginTop: '1.5rem' }}>PolyForm Noncommercial License</p>
      </div>
    </section>
  )
}
