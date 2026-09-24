import ProductInstall, { InstallDetails, InstallHeading, InstallNote } from './ProductInstall'
import useGitHubVersion from '../hooks/useGitHubVersion'

export default function SD300Install() {
  const version = useGitHubVersion('QubeTX/qube-system-diagnostics', '4.0.1')
  const releaseBase = 'https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download'
  const unixCommand = `curl --proto '=https' --tlsv1.2 -LsSf ${releaseBase}/sd300-cli-installer.sh | sh`
  const platforms = {
    macos: {
      label: 'macOS',
      command: unixCommand,
      explanation: 'Installs for your user account without sudo. Supports Apple Silicon and Intel Macs.',
      appLocation: 'Open SD-300.app in your home Applications folder (~/Applications).',
      terminalNote: 'Open a new terminal after installation, then run sd300.'
    },
    linux: {
      label: 'Linux',
      command: unixCommand,
      explanation: 'Use the official shell installer on supported Linux systems, including servers where you only need the terminal tools.',
      appLocation: 'On a graphical desktop, find SD-300 in your application menu. The terminal tools also work without a desktop session.',
      terminalNote: 'Open a new terminal after installation, then run sd300. Setup configures Bash and fish command discovery, including custom fish configuration locations.'
    },
    windows: {
      label: 'Windows',
      command: `irm ${releaseBase}/sd300-cli-installer.ps1 | iex`,
      explanation: 'Run in a normal PowerShell window; no administrator access is needed. Setup verifies the saved command path and Start-menu shortcut, and identifies the step if installation fails.',
      appLocation: 'Search for SD-300 in the Windows Start menu to open the desktop app.',
      terminalNote: 'Run sd300 in PowerShell, Command Prompt, or a terminal tab. The installer refreshes its PowerShell session; fully quit and reopen other terminal apps to pick up the saved PATH.'
    }
  }

  return (
    <ProductInstall
      product="SD-300"
      version={version}
      summary="The terminal dashboard and desktop app, installed together."
      platforms={platforms}
      releaseBase={releaseBase}
      windowsInstallers={[
        {
          edition: 'Global',
          msi: 'sd300-windows-x64-global.msi',
          exe: 'sd300-windows-x64-global.exe'
        },
        {
          edition: 'Corporate',
          msi: 'sd300-windows-x64-corporate.msi',
          exe: 'sd300-windows-x64-corporate.exe'
        }
      ]}
      macInstaller={{ asset: 'sd300-macos-universal.pkg', description: 'Signed and notarized universal PKG for Apple Silicon and Intel. Includes CLI/TUI and the desktop app in /Applications.' }}
    >
      {(current) => (
        <>
          <InstallHeading>After installation</InstallHeading>
          <InstallNote><strong style={{ color: 'var(--fg-bone)' }}>Desktop app:</strong> {current.appLocation} Or run <code>sd300 gui</code>.</InstallNote>
          <InstallNote><strong style={{ color: 'var(--fg-bone)' }}>Terminal:</strong> {current.terminalNote}</InstallNote>
          <InstallHeading>Updates and removal</InstallHeading>
          <InstallNote>Update with <code>sd300 update</code>; remove both with <code>sd300 uninstall</code>. Updates keep your installation method, edition and location. Both frontends run independently.</InstallNote>
          <InstallDetails title="Upgrading from 3.x or Windows 4.0.0?">
            <InstallNote>Moving from SD-300 3.x to 4? Run the current official installer in the same format you used before. Managed users can repeat the command on this page. Keep the same Global or Corporate MSI/EXE edition, or use the current PKG for a Mac package installation. The older updater can reject the new desktop app; you do not need to uninstall first.</InstallNote>
            <InstallNote>SD-300 4.0.1 fixes the Windows automatic update check. On Windows 4.0.0, run your matching official installer once to get the fix, then use <code>sd300 update</code> normally. Your settings are preserved. <a href="https://github.com/QubeTX/qube-system-diagnostics/releases/latest" style={{ color: 'var(--accent-signal)' }}>Release notes and downloads</a>.</InstallNote>
          </InstallDetails>
          <InstallDetails title="Setup, removal and advanced options">
            <InstallNote>{current.explanation}</InstallNote>
            <InstallNote>Uninstall uses the recorded owner to remove SD-300 and its own settings, shortcuts and command-path entries. Shared Cargo and Rust tools are preserved.</InstallNote>
            <InstallNote><code>cargo install tr300-tui</code> installs the CLI/TUI only. It does not install the desktop app. Choose an official installer for the complete product.</InstallNote>
            <InstallNote>Deliberately running a different official installer requests a change of method or edition, including a reinstall or downgrade. Setup completes the change only when ownership is clear and the transition is safe; otherwise it preserves the working installation and explains the problem.</InstallNote>
          </InstallDetails>
        </>
      )}
    </ProductInstall>
  )
}
