import { startTransition, ViewTransition } from 'react'
import useInstallPlatform from '../hooks/useInstallPlatform'
import useMediaQuery from '../hooks/useMediaQuery'
import ActionLink from './ActionLink'
import ChoiceButton from './ChoiceButton'
import CopyCommand from './CopyCommand'
import GuideLink from './GuideLink'

const headingStyle = { color: 'var(--fg-bone)', fontSize: '1.125rem', lineHeight: 1.35, fontWeight: 600 }
const panelStyle = { minWidth: 0, borderTop: '1px solid var(--line)', paddingTop: 'var(--install-gap)' }

function WindowsDownloads({ installers, releaseBase, shortLandscape }) {
  // The floating back-to-top control occupies the lower-right corner on short phones.
  return <div style={{ display: 'grid', gap: '0.25rem', paddingRight: shortLandscape ? '3.5rem' : undefined }}>
    {installers.map(({ edition, exe, msi }) => <div key={edition} style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', alignItems: 'center', gap: '0.5rem' }}>
      <p><strong style={{ color: 'var(--fg-bone)' }}>{edition}</strong><br />
        <span style={{ color: 'var(--fg-dim)', fontSize: '0.875rem' }}>{edition === 'Global' ? 'All users, admin' : 'User, no admin'}</span>
      </p>
      <div style={{ display: 'flex', gap: '0.375rem' }}>
        <ActionLink compact href={`${releaseBase}/${exe}`} label={`Download ${edition} EXE`}>EXE</ActionLink>
        <ActionLink compact href={`${releaseBase}/${msi}`} label={`Download ${edition} MSI`}>MSI</ActionLink>
      </div>
    </div>)}
  </div>
}

export default function ProductInstall({ product, version, platforms, releaseBase, windowsInstallers, macInstaller, firstRun, firstCommands, firstRunGuide, installEffect, shortEffect, maintenanceNote, docs }) {
  const [selectedPlatform, setSelectedPlatform] = useInstallPlatform()
  const columns = useMediaQuery('(min-width: 640px), (min-width: 500px) and (orientation: landscape)')
  const shortLandscape = useMediaQuery('(min-width: 500px) and (orientation: landscape) and (max-height: 360px)')
  const detailed = useMediaQuery('(min-width: 1150px) and (min-height: 660px), (min-width: 1000px) and (min-height: 720px), (min-width: 760px) and (min-height: 940px)')
  const current = platforms[selectedPlatform]
  const shell = selectedPlatform === 'windows' ? 'PowerShell' : 'Terminal'
  const commandName = product.toLowerCase().replace('-', '')
  const [prefix, url, suffix] = current.command.split(/(https:\/\/[^\s"]+)/)
  const areas = shortLandscape ? '"command command" "first native" "manage native"'
    : columns ? '"command first" "native manage"' : '"command" "first" "native" "manage"'
  const trackWidths = shortLandscape ? 'minmax(0, 0.86fr) minmax(0, 1.14fr)'
    : columns ? 'minmax(0, 1.15fr) minmax(0, 1fr)' : 'minmax(0, 1fr)'

  return <section id="install" aria-labelledby="install-heading" style={{
    '--install-gap': detailed ? 'clamp(0.875rem, 2.5vh, 1.75rem)' : 'clamp(0.125rem, calc(4vh - 1.35rem), 1rem)',
    padding: shortLandscape ? '0.125rem 0.5rem' : detailed ? 'clamp(1.5rem, 5vh, 4rem) var(--page-gutter)' : '0.5rem clamp(0.75rem, 4vw, 1.25rem)',
    scrollMarginTop: 0, borderBottom: '1px solid var(--line)',
  }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: shortLandscape ? '0.25rem' : '0.5rem 1.5rem', marginBottom: 'var(--install-gap)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '0.125rem 0.375rem' }}>
          <h2 id="install-heading" style={{ font: '400 var(--body-heading-size)/1.1 var(--font-display)', letterSpacing: '-0.02em', textTransform: detailed ? 'uppercase' : undefined }}>Install {product}</h2>
          <span style={{ fontSize: '0.875rem', color: 'var(--fg-dim)' }}>v{version}</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.25rem 0.625rem', width: columns ? 'auto' : '100%' }}>
          <div role="group" aria-label="Choose your operating system" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.125rem', padding: '0.125rem', border: '1px solid #444' }}>
            {Object.entries(platforms).map(([key, platform]) => <ChoiceButton key={key} compact={!detailed} active={selectedPlatform === key} indicator="install-platform" controls="install-content" onClick={() => startTransition(() => setSelectedPlatform(key))}>{platform.label}</ChoiceButton>)}
          </div>
          <GuideLink href={docs} label="Installation guide">{detailed ? 'Installation guide' : 'Guide'}</GuideLink>
        </div>
      </div>
      <ViewTransition default="content-change"><div id="install-content" style={{ display: 'grid', gridTemplateAreas: areas, gridTemplateColumns: trackWidths, rowGap: 'var(--install-gap)', columnGap: shortLandscape ? '0.75rem' : 'clamp(1.75rem, 4vw, 4rem)', color: 'var(--body-muted)', lineHeight: 1.45 }}>
        <div style={{ ...panelStyle, gridArea: 'command', display: shortLandscape ? 'grid' : 'block', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.75fr)', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: shortLandscape ? '1fr' : 'minmax(0, 1fr) auto', justifyItems: shortLandscape ? 'start' : undefined, alignItems: 'center', gap: shortLandscape ? '0.125rem' : '0.5rem' }}>
            <div>
              <h3 style={headingStyle}>{shell}{detailed && <span style={{ fontSize: '0.875rem', fontWeight: 400, color: 'var(--fg-dim)' }}> · Recommended</span>}</h3>
              {!detailed && <p style={{ color: 'var(--fg-dim)', fontSize: '0.875rem' }}>{shortEffect}</p>}
            </div>
            <CopyCommand key={selectedPlatform} compact primary command={current.command} />
          </div>
          {detailed && <p style={{ marginTop: '0.25rem' }}>{installEffect}</p>}
          <code style={{ display: 'block', marginTop: shortLandscape ? 0 : '0.375rem', padding: '0.5rem 0.75rem', border: '1px solid #444', borderRadius: '2px', background: '#0c0c0c', fontSize: '0.9375rem', color: 'var(--fg-bone)', overflowWrap: 'anywhere', userSelect: 'all' }}>{prefix}<span style={{ wordBreak: detailed ? 'normal' : 'break-all' }}>{url}</span>{suffix}</code>
        </div>
        <div style={{ ...panelStyle, gridArea: 'first', display: 'grid', gridTemplateColumns: detailed ? '1fr' : 'auto minmax(0, 1fr)', alignContent: 'start', alignItems: 'center', columnGap: '0.75rem' }}>
          <h3 style={headingStyle}><GuideLink href={firstRunGuide}>First run</GuideLink></h3>
          <p>{detailed ? firstRun : firstCommands}</p>
        </div>
        <div style={{ ...panelStyle, gridArea: 'native' }}>
          <h3 style={{ ...headingStyle, marginBottom: '0.375rem' }}>{selectedPlatform === 'windows' ? 'Windows installers' : 'Other ways to install'}</h3>
          {selectedPlatform === 'windows' && <WindowsDownloads installers={windowsInstallers} releaseBase={releaseBase} shortLandscape={shortLandscape} />}
          {selectedPlatform === 'macos' && <div style={{ display: 'grid', gridTemplateColumns: 'auto minmax(0, 1fr)', alignItems: 'center', gap: '0.75rem' }}>
            <ActionLink compact href={`${releaseBase}/${macInstaller.asset}`} label="Download universal PKG">{detailed ? 'Universal PKG' : 'PKG'} ↓</ActionLink>
            <p>{detailed ? macInstaller.description : 'Signed and notarized for Intel and Apple Silicon.'}</p>
          </div>}
          {selectedPlatform === 'linux' && <GuideLink href={`${docs}#offline-installation`}>Offline installation</GuideLink>}
        </div>
        <div style={{ ...panelStyle, gridArea: 'manage' }}>
          <div style={{ display: 'grid', gridTemplateColumns: detailed ? '1fr' : 'auto minmax(0, 1fr)', alignItems: 'center', columnGap: shortLandscape ? '0.125rem' : '0.75rem' }}>
            <h3 style={headingStyle}><GuideLink href={`${docs}#updates-and-repairs`}>{detailed ? 'Updates and removal' : 'Manage'}</GuideLink></h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 1.25rem', color: 'var(--fg-bone)' }}>
              <code>{commandName} update</code><code>{commandName} uninstall</code>
            </div>
          </div>
          <p style={{ marginTop: '0.25rem' }}>{detailed ? 'Updates keep the verified format, edition, scope and path. Run a different official installer to switch. If ownership is unclear or policy blocks the change, your working install stays in place.' : 'Updates keep the format.'}</p>
          {detailed && maintenanceNote && <p style={{ marginTop: '0.5rem' }}>{maintenanceNote}</p>}
        </div>
      </div></ViewTransition>
    </div>
  </section>
}
