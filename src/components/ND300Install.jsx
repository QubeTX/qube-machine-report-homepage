import ProductInstall, { InstallDetails, InstallHeading, InstallNote } from './ProductInstall'
import useGitHubVersion from '../hooks/useGitHubVersion'

export default function ND300Install() {
  const version = useGitHubVersion('QubeTX/qube-network-diagnostics', '4.0.1')
  const unixCommand = "curl -LsSf https://reports.qubetx.com/install-nd300.sh | sh"
  const pathNote = "Behind the scenes the wrapper downloads the prebuilt nd300 and speedqx binaries into ~/.cargo/bin (or %USERPROFILE%\\.cargo\\bin on Windows) and updates your shell config so future terminals can find them."
  const installNote = 'Already installed? Run nd300 update or speedqx update. Updates preserve the proven channel you installed last time; deliberately running a different official installer changes the channel for future updates.'

  const unixExplanation = "Fetches a small wrapper script from reports.qubetx.com that internally runs the official cargo-dist installer, which downloads the prebuilt nd300 and speedqx binaries for macOS arm64/x64 or Linux x64 into ~/.cargo/bin. No Rust toolchain is downloaded or built — the binaries are already compiled."

  const platforms = {
    macos: {
      label: 'macOS',
      command: unixCommand,
      explanation: unixExplanation,
      updateCommand: 'nd300 update',
      note: "This command-first route is the recommended Mac install and stays in the managed-archive update channel. If you prefer Apple's graphical Installer, use the signed, notarized universal PKG below; later CLI updates reopen that same PKG channel."
    },
    linux: {
      label: 'Linux',
      command: unixCommand,
      explanation: unixExplanation,
      updateCommand: 'nd300 update'
    },
    windows: {
      label: 'Windows',
      command: 'powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install-nd300.ps1 | iex"',
      explanation: "Fetches a small wrapper script from reports.qubetx.com that internally runs the official cargo-dist installer, which downloads the prebuilt nd300.exe and speedqx.exe binaries for x86_64 Windows into %USERPROFILE%\\.cargo\\bin. No Rust toolchain, no MSVC Build Tools — the binaries are already compiled.",
      updateCommand: 'nd300 update',
      note: "This command-first route is the recommended Windows install and runs in user scope with no administrator PowerShell. For system-wide, managed, or double-click deployment, choose one MSI/EXE channel below. Later CLI updates reuse the proven channel; deliberately launching a different official installer makes that fresh choice authoritative when the scope change is safe."
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
    >
      {(current) => (
        <>
          <InstallHeading>After installation</InstallHeading>
          <InstallNote>Open a new terminal and run <code>nd300</code> for network diagnostics. The separate <code>speedqx</code> command is also installed.</InstallNote>
          <InstallHeading>Keep it up to date</InstallHeading>
          <InstallNote>Run <code>{current.updateCommand}</code> or <code>speedqx update</code>. Both keep your existing installation method.</InstallNote>
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
