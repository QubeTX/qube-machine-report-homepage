import ProductInstall, { InstallNote } from './ProductInstall'
import useGitHubVersion from '../hooks/useGitHubVersion'

export default function ND300Install() {
  const version = useGitHubVersion('QubeTX/qube-network-diagnostics', '4.0.1')
  const unixCommand = "curl -LsSf https://reports.qubetx.com/install-nd300.sh | sh"


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
      command: 'powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install-nd300.ps1 | iex"',
    }
  }

  return (
    <ProductInstall
      product="ND-300"
      version={version}
      summary="Network diagnostics and SpeedQX. One install, both terminal commands."
      platforms={platforms}
      releaseBase={'https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download'}
      windowsInstallers={[
        {
          edition: 'Global',
          msi: 'nd300-x86_64-pc-windows-msvc.msi',
          exe: 'nd300-x86_64-pc-windows-msvc-setup.exe'
        },
        {
          edition: 'Corporate',
          msi: 'nd300-x86_64-pc-windows-msvc-corporate.msi',
          exe: 'nd300-x86_64-pc-windows-msvc-corporate-setup.exe'
        }
      ]}
      macInstaller={{ asset: 'nd300-universal-apple-darwin.pkg', description: 'Signed, notarized and stapled universal PKG for Apple Silicon and Intel. Installs both commands; updates keep using the PKG.' }}

      docs="/docs/nd300/installation"
      installEffect="Installs nd300 and speedqx and adds them to your command path."
      firstRun={() => <>
        <InstallNote>Open a new terminal and run <code>nd300 --fast</code> to check your connection without running a speed test.</InstallNote>
        <InstallNote>Run <code>speedqx</code> for internet speed. Network tests transfer data; optional M-Lab comparisons require consent to public measurements and IP addresses.</InstallNote>
        <a href="/docs/nd300/speedqx">Speed test limits and privacy →</a>
      </>}
      maintenance={() => <>
        <InstallNote>Update with <code>nd300 update</code> or <code>speedqx update</code>. Remove the tools with <code>nd300 uninstall</code>.</InstallNote>
        <InstallNote>Repair commands can change network settings. Inspect the diagnosis and proposed changes before accepting a repair.</InstallNote>
      </>}
    />
  )
}
