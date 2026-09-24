import ProductInstall, { InstallDetails, InstallHeading, InstallNote } from './ProductInstall'
import useGitHubVersion from '../hooks/useGitHubVersion'

export default function WB300Install() {
  const version = useGitHubVersion('QubeTX/qube-workbranch-view', '1.0.0')
  const unixCommand = "curl -LsSf https://reports.qubetx.com/install-wb300.sh | sh"
  const pathNote = "Behind the scenes the wrapper downloads the prebuilt wb300 binary into ~/.cargo/bin (or %USERPROFILE%\\.cargo\\bin on Windows) and updates your shell config so future terminals can find it."
  const installNote = 'WB-300 drives the installed git CLI directly — it needs git on your PATH, but no Rust toolchain. The crates.io package is wb300; the wrapper just installs the prebuilt binary instead of building from source.'

  const unixExplanation = "Fetches a small wrapper script from reports.qubetx.com that internally runs the official cargo-dist installer, which downloads the prebuilt wb300 binary for macOS arm64/x64 or Linux x64 into ~/.cargo/bin. No Rust toolchain is downloaded or built — the binary is already compiled."

  const platforms = {
    macos: {
      label: 'macOS',
      command: unixCommand,
      explanation: unixExplanation,
      updateCommand: 'wb300 update',
      note: "Runs entirely in user scope — no sudo needed. The wrapper is two lines of shell hosted on this site; it calls the official cargo-dist installer published with every WB-300 release."
    },
    linux: {
      label: 'Linux',
      command: unixCommand,
      explanation: unixExplanation,
      updateCommand: 'wb300 update'
    },
    windows: {
      label: 'Windows',
      command: 'powershell -ExecutionPolicy ByPass -c "irm https://reports.qubetx.com/install-wb300.ps1 | iex"',
      explanation: "Fetches a small wrapper script from reports.qubetx.com that internally runs the official cargo-dist installer, which downloads the prebuilt wb300.exe binary for x86_64 Windows into %USERPROFILE%\\.cargo\\bin. No Rust toolchain, no MSVC Build Tools — the binary is already compiled.",
      updateCommand: 'wb300 update',
      note: "Runs in user scope — no administrator PowerShell needed. If you'd rather have a system-wide install, or hand a single installer to a colleague, use one of the prebuilt MSI/EXE installers below — same binary, just packaged for double-click. Each records how it was installed, so wb300 update later fetches the matching installer — the no-admin Corporate install upgrades without ever prompting for admin."
    }
  }

  return (
    <ProductInstall
      product="WB-300"
      version={version}
      summary="Your Git worktrees in one terminal console. Requires Git on your PATH."
      platforms={platforms}
      releaseBase={'https://github.com/QubeTX/qube-workbranch-view/releases/latest/download'}
      windowsInstallers={[
        {
          edition: 'Global',
          msi: 'wb300-x86_64-pc-windows-msvc.msi',
          exe: 'wb300-x86_64-pc-windows-msvc-setup.exe'
        },
        {
          edition: 'Corporate',
          msi: 'wb300-x86_64-pc-windows-msvc-corporate.msi',
          exe: 'wb300-x86_64-pc-windows-msvc-corporate-setup.exe'
        }
      ]}
    >
      {(current) => (
        <>
          <InstallHeading>After installation</InstallHeading>
          <InstallNote>Open a new terminal and run <code>wb300</code>. Git must already be installed and available on your PATH.</InstallNote>
          <InstallHeading>Keep it up to date</InstallHeading>
          <InstallNote>Run <code>{current.updateCommand}</code>. Windows installer editions keep using their recorded installation method.</InstallNote>
          <InstallDetails title="Setup details and permissions">
            <InstallNote>{current.explanation}</InstallNote>
            {current.note && <InstallNote>{current.note}</InstallNote>}
            <InstallNote>{pathNote}</InstallNote>
            <InstallNote>{installNote}</InstallNote>
          </InstallDetails>
          <InstallDetails title="Build with Cargo or from source">
            <InstallNote>With a Rust toolchain installed, run <code>cargo install wb300</code>.</InstallNote>
            <InstallNote>Or build the repository: <code>git clone https://github.com/QubeTX/qube-workbranch-view.git &amp;&amp; cd qube-workbranch-view &amp;&amp; cargo build --release</code>.</InstallNote>
          </InstallDetails>
        </>
      )}
    </ProductInstall>
  )
}
