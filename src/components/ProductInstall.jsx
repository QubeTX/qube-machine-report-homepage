import { startTransition, ViewTransition } from 'react'
import useInstallPlatform from '../hooks/useInstallPlatform'
import ActionLink from './ActionLink'
import ChoiceButton from './ChoiceButton'
import CopyCommand from './CopyCommand'
import BodySection from './BodySection'
import GuideLink from './GuideLink'

const textStyle = { fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.65, color: '#b8b8b8' }

export const InstallNote = ({ children }) => <p style={{ margin: '0.5rem 0 1rem', maxWidth: '65ch' }}>{children}</p>
export const InstallHeading = ({ children }) => <h3 style={{ color: 'var(--fg-bone)', fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.4, marginBottom: '0.75rem' }}>{children}</h3>

function InstallCommand({ command, platform }) {
  return <div style={{ padding: '1.25rem', background: '#0c0c0c', border: '1px solid #444', borderRadius: '2px', marginTop: '1rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
      <span style={{ color: 'var(--fg-dim)', fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>{platform === 'windows' ? 'PowerShell' : 'Terminal'}</span>
      <CopyCommand command={command} />
    </div>
    <code style={{ display: 'block', color: 'var(--fg-bone)', fontFamily: 'var(--font-mono)', fontSize: '0.9375rem', lineHeight: 1.7, overflowWrap: 'anywhere', userSelect: 'all' }}>{command}</code>
  </div>
}

export default function ProductInstall({ product, version, summary, platforms, releaseBase, windowsInstallers, macInstaller, firstRun, maintenance, installEffect, docs }) {
  const [selectedPlatform, setSelectedPlatform] = useInstallPlatform()
  const current = platforms[selectedPlatform]
  return <BodySection id="install" title={<>Install <span style={{ whiteSpace: 'nowrap' }}>{product}</span></>} introduction={summary}>
      <div role="group" aria-label="Choose your operating system" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '2rem', padding: '0.25rem', border: '1px solid #444', width: 'fit-content' }}>
        {Object.entries(platforms).map(([key, platform]) => <ChoiceButton key={key} active={selectedPlatform === key} indicator="install-platform" controls="install-content" onClick={() => startTransition(() => setSelectedPlatform(key))}>{platform.label}</ChoiceButton>)}
      </div>
      <ViewTransition default="content-change"><div id="install-content" style={{ ...textStyle, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '2rem 3rem', alignItems: 'start' }}>
        <div style={{ minWidth: 0 }}>
          <InstallHeading>Recommended for {current.label}</InstallHeading>
          <p>{selectedPlatform === 'windows' ? 'Paste into a normal PowerShell window.' : 'Paste into your terminal.'} A fresh installation uses your account and needs no administrator access.</p>
          <InstallNote>{installEffect}</InstallNote>
          <InstallCommand key={selectedPlatform} command={current.command} platform={selectedPlatform} />
          <p style={{ fontSize: '0.875rem', color: 'var(--fg-dim)', marginTop: '0.75rem' }}>Prebuilt download · No Rust toolchain required · Release {version}</p>
        </div>
        <div style={{ minWidth: 0 }}>
          <InstallHeading>First run</InstallHeading>
          {firstRun(current, selectedPlatform)}
        </div>
        <div style={{ minWidth: 0, borderTop: '1px solid #333', paddingTop: '1.5rem' }}>
          <InstallHeading>Other ways to install</InstallHeading>
          {selectedPlatform === 'windows' && windowsInstallers && <>
            <InstallNote>EXE opens a setup wizard. MSI also supports Windows Installer deployment.</InstallNote>
            {[...windowsInstallers].sort((a, b) => a.edition.localeCompare(b.edition)).map(({ edition, msi, exe }) => <div key={edition} style={{ padding: '1rem 0', borderBottom: '1px solid #292929' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--fg-bone)' }}>{edition === 'Global' ? 'For all users' : 'For your account'} <span style={{ color: 'var(--fg-dim)', fontWeight: 400 }}>— {edition}</span></h4>
              <p style={{ fontSize: '0.9375rem', margin: '0.4rem 0 0.75rem' }}>{edition === 'Global' ? 'Installs in Program Files. Requires administrator approval.' : 'Installs for you. No administrator access needed.'}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <ActionLink href={`${releaseBase}/${exe}`} label={`Download ${edition} EXE`}>EXE ↓</ActionLink>
                <ActionLink href={`${releaseBase}/${msi}`} label={`Download ${edition} MSI`}>MSI ↓</ActionLink>
              </div>
            </div>)}
          </>}
          {selectedPlatform === 'macos' && macInstaller && <>
            <InstallNote>{macInstaller.description}</InstallNote>
            <ActionLink href={`${releaseBase}/${macInstaller.asset}`} label="Download universal PKG">Universal PKG ↓</ActionLink>
          </>}
          {selectedPlatform === 'linux' && <InstallNote>Need a portable archive or an offline installation? The installation guide explains supported systems and setup.</InstallNote>}
          <GuideLink href={docs} style={{ marginTop: '1rem' }}>Installation guide</GuideLink>
        </div>
        <div style={{ minWidth: 0, borderTop: '1px solid #333', paddingTop: '1.5rem' }}>
          <InstallHeading>Updates and removal</InstallHeading>
          {maintenance(current, selectedPlatform)}
          <InstallNote>Updates preserve the verified installation method, edition, and location. Deliberately launching another official installer requests a change; unclear ownership or a blocked transition keeps the working installation intact.</InstallNote>
          <GuideLink href={`${docs}#updates-and-repairs`}>Update and repair guidance</GuideLink>
        </div>
      </div></ViewTransition>
      <p style={{ ...textStyle, fontSize: '0.875rem', marginTop: '2rem', color: 'var(--fg-dim)' }}>PolyForm Noncommercial License · Follow your organization’s installation policy.</p>
  </BodySection>
}
