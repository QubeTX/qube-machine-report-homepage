import ProductInstall, { InstallDetails, InstallHeading, InstallNote } from './ProductInstall'
import useGitHubVersion from '../hooks/useGitHubVersion'

export default function Install() {
  const version = useGitHubVersion('QubeTX/qube-machine-report', '4.2.2')
  const unixCommand = "curl -LsSf https://reports.qubetx.com/install.sh | sh"
  const pathNote = "Behind the scenes the wrapper installs a prebuilt tr300 binary into ~/.cargo/bin (or %USERPROFILE%\\.cargo\\bin on Windows), records that managed CLI channel and exact path for future updates, then runs tr300 install to add the report alias and tr300 --fast startup summary."
  const reportNote = "Normal tr300 and report runs only print to the terminal — they do not create a log file. Save a Markdown copy manually with tr300 -r, tr300 --report, report -s, or report --save."
  const installNote = 'Run tr300 update later to keep the proven install channel. Deliberately running this command or a different official installer makes that fresh method your new choice; ambiguous or blocked takeovers leave the working install intact and show the latest recovery link.'

  const unixExplanation = "Fetches a small wrapper script from reports.qubetx.com that runs the official cargo-dist installer (downloads the prebuilt tr300 binary for macOS arm64/x64 or Linux x64 into ~/.cargo/bin), then runs tr300 install to add a report alias and a fast startup summary to your shell profile. No Rust toolchain is downloaded or built — the binary is already compiled."

  const platforms = {
    macos: {
      label: 'macOS',
      command: unixCommand,
      explanation: unixExplanation,
      updateCommand: 'tr300 update',
      note: "Runs entirely in user scope — no sudo needed. For Apple Installer or managed deployment, use the signed, notarized universal PKG below; later CLI updates reopen that same PKG channel."
    },
    linux: {
      label: 'Linux',
      command: unixCommand,
      explanation: unixExplanation,
      updateCommand: 'tr300 update'
    },
    windows: {
      label: 'Windows',
      command: 'powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install.ps1 | iex"',
      explanation: "Fetches a small wrapper script from reports.qubetx.com that internally runs the official cargo-dist installer (downloads the prebuilt tr300.exe binary for x86_64 Windows into %USERPROFILE%\\.cargo\\bin), then runs tr300 install to add a report PowerShell alias and an auto-run line to your PowerShell profile so every new session starts with tr300 ready. No Rust toolchain, no MSVC Build Tools — the binary is already compiled.",
      updateCommand: 'tr300 update',
      note: "Runs in user scope — no administrator PowerShell needed. For double-click or managed deployment, use one of the MSI/EXE installers below. If antivirus, Group Policy, or another endpoint rule blocks an update write or installer launch, TR-300 stops without overwriting the working binary and explains the manual installer path."
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
    >
      {(current) => (
        <>
          <InstallHeading>After installation</InstallHeading>
          <InstallNote>Open a new terminal and run <code>tr300</code> or <code>report</code>. The shell integration also shows a quick summary when a new terminal starts.</InstallNote>
          <InstallHeading>Save a report when you need one</InstallHeading>
          <InstallNote>{reportNote}</InstallNote>
          <InstallHeading>Keep it up to date</InstallHeading>
          <InstallNote>Run <code>{current.updateCommand}</code>. Updates keep your existing installation method.</InstallNote>
          <InstallDetails title="Setup details and permissions">
            <InstallNote>{current.explanation}</InstallNote>
            {current.note && <InstallNote>{current.note}</InstallNote>}
            <InstallNote>{pathNote}</InstallNote>
          </InstallDetails>
          <InstallDetails title="Changing installation methods">
            <InstallNote>{installNote}</InstallNote>
          </InstallDetails>
        </>
      )}
    </ProductInstall>
  )
}
