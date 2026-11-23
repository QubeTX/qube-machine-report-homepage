import ProductInstall from './ProductInstall'
import useGitHubVersion from '../hooks/useGitHubVersion'

export default function SD300Install() {
  const version = useGitHubVersion('QubeTX/qube-system-diagnostics', '4.1.0')
  const releaseBase = 'https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download'
  const unixCommand = `curl --proto '=https' --tlsv1.2 -LsSf ${releaseBase}/sd300-cli-installer.sh | sh`
  const platforms = {
    macos: {
      label: 'macOS',
      command: unixCommand,
    },
    linux: {
      label: 'Linux',
      command: unixCommand,
    },
    windows: {
      label: 'Windows',
      command: `irm ${releaseBase}/sd300-cli-installer.ps1 | iex`,
    }
  }

  return (
    <ProductInstall
      product="SD-300"
      version={version}
      platforms={platforms}
      releaseBase={releaseBase}
      windowsInstallers={[
        {
          edition: 'Corporate',
          msi: 'sd300-windows-x64-corporate.msi',
          exe: 'sd300-windows-x64-corporate.exe'
        },
        {
          edition: 'Global',
          msi: 'sd300-windows-x64-global.msi',
          exe: 'sd300-windows-x64-global.exe'
        }
      ]}
      macInstaller={{ asset: 'sd300-macos-universal.pkg', description: 'Signed and notarized for Intel and Apple Silicon. Places the desktop app in /Applications.' }}
      docs="/docs/sd300/installation"
      installEffect="Installs the terminal tools and desktop app for your account."
      shortEffect="Per user · App + CLI"
      firstRun={<>Open a new terminal. Run <code>sd300</code> for the dashboard or <code>sd300 gui</code> for the desktop app.</>}
      firstRunGuide="/docs/sd300/examples"
      firstCommands={<><code>sd300</code> or <code>sd300 gui</code></>}
      maintenanceNote="Upgrading from 3.x or Windows 4.0.0? Run the current installer in your existing format and edition once."
    />
  )
}
