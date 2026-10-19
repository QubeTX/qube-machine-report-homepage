import ProductInstall, { InstallNote } from './ProductInstall'
import useGitHubVersion from '../hooks/useGitHubVersion'

export default function Install() {
  const version = useGitHubVersion('QubeTX/qube-machine-report', '4.4.0')
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
      summary="System reports in your terminal. Prebuilt for Windows, macOS and Linux."
      platforms={platforms}
      releaseBase={'https://github.com/QubeTX/qube-machine-report/releases/latest/download'}
      windowsInstallers={[
        {
          edition: 'Global',
          msi: 'tr300-x86_64-pc-windows-msvc.msi',
          exe: 'tr300-x86_64-pc-windows-msvc-setup.exe'
        },
        {
          edition: 'Corporate',
          msi: 'tr300-x86_64-pc-windows-msvc-corporate.msi',
          exe: 'tr300-x86_64-pc-windows-msvc-corporate-setup.exe'
        }
      ]}
      macInstaller={{ asset: 'tr300-universal-apple-darwin.pkg', description: 'Signed and notarized universal PKG for Apple Silicon and Intel. Installs system-wide; later updates keep using the PKG.' }}

      docs="/docs/tr300/installation"
      installEffect="Installs tr300 and report, adds them to your command path, and configures an optional summary when your terminal opens."
      firstRun={() => <>
        <InstallNote>Open a new terminal and run <code>tr300</code> or <code>report</code>. Both names support the same reporting and maintenance commands.</InstallNote>
        <InstallNote>Normal runs only print to the terminal. Review saved reports for identifying information before sharing. To save a Markdown report, run <code>tr300 -r</code> or <code>report -s</code>.</InstallNote>
        <a href="/docs/tr300/examples">Try a reporting example →</a>
      </>}
      maintenance={() => <>
        <InstallNote>Update with <code>tr300 update</code> or <code>report update</code>. Run <code>tr300 uninstall</code> to choose which profile or installation setup to remove.</InstallNote>
        <InstallNote>If Windows security policy blocks an update, follow the matching manual-installer link in its diagnostic.</InstallNote>
      </>}
    />
  )
}
