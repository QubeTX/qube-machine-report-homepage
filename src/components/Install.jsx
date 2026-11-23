import ProductInstall from './ProductInstall'
import useGitHubVersion from '../hooks/useGitHubVersion'

export default function Install() {
  const version = useGitHubVersion('QubeTX/qube-machine-report', '4.5.1')
  const unixCommand = "curl -LsSf https://reports.qubetx.com/install.sh | sh"

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
      command: 'powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install.ps1 | iex"',
    }
  }

  return (
    <ProductInstall
      product="TR-300"
      version={version}
      platforms={platforms}
      releaseBase={'https://github.com/QubeTX/qube-machine-report/releases/latest/download'}
      windowsInstallers={[
        {
          edition: 'Corporate',
          msi: 'tr300-x86_64-pc-windows-msvc-corporate.msi',
          exe: 'tr300-x86_64-pc-windows-msvc-corporate-setup.exe'
        },
        {
          edition: 'Global',
          msi: 'tr300-x86_64-pc-windows-msvc.msi',
          exe: 'tr300-x86_64-pc-windows-msvc-setup.exe'
        }
      ]}
      macInstaller={{ asset: 'tr300-universal-apple-darwin.pkg', description: 'Signed and notarized for Intel and Apple Silicon. Installs system-wide.' }}
      docs="/docs/tr300/installation"
      installEffect="Installs tr300 and report for your account and enables adaptive reports in new terminals and interactive SSH sessions."
      shortEffect="User startup reports"
      firstCommands={<><code>tr300</code> or <code>report</code></>}
      firstRun={<>Run <code>tr300</code> or <code>report</code> in a new terminal to print a system report. To save Markdown, use <code>tr300 -r</code> or <code>report -s</code>. Review saved reports for identifying details before sharing.</>}
      maintenanceNote="If Windows policy blocks an update, follow the matching manual-installer link in the diagnostic."
      firstRunGuide="/docs/tr300/examples"
    />
  )
}
