import ProductInstall from './ProductInstall'
import useGitHubVersion from '../hooks/useGitHubVersion'

export default function ND300Install() {
  const version = useGitHubVersion('QubeTX/qube-network-diagnostics', '4.0.2')
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
      platforms={platforms}
      releaseBase={'https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download'}
      windowsInstallers={[
        {
          edition: 'Corporate',
          msi: 'nd300-x86_64-pc-windows-msvc-corporate.msi',
          exe: 'nd300-x86_64-pc-windows-msvc-corporate-setup.exe'
        },
        {
          edition: 'Global',
          msi: 'nd300-x86_64-pc-windows-msvc.msi',
          exe: 'nd300-x86_64-pc-windows-msvc-setup.exe'
        }
      ]}
      macInstaller={{ asset: 'nd300-universal-apple-darwin.pkg', description: 'Signed and notarized for Intel and Apple Silicon. Installs both commands system-wide.' }}
      docs="/docs/nd300/installation"
      installEffect="Adds nd300 and speedqx to your account."
      shortEffect="Per user · SpeedQX"
      firstRun={<>Run <code>nd300 --fast</code> in a new terminal to skip the speed test. Use <code>speedqx</code> to measure internet speed. Speed tests transfer data. Optional M-Lab comparisons require consent to publish the measurement and IP address.</>}
      maintenanceNote="Review the diagnosis before accepting a repair that changes network settings."
      firstCommands={<code>nd300 --fast</code>}
      firstRunGuide="/docs/nd300/examples"
    />
  )
}
