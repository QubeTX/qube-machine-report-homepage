import ProductInstall, { InstallNote } from './ProductInstall'
import useGitHubVersion from '../hooks/useGitHubVersion'

export default function SD300Install() {
  const version = useGitHubVersion('QubeTX/qube-system-diagnostics', '4.1.0')
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

      docs="/docs/sd300/installation"
      installEffect="Installs the terminal tools and desktop app together, including an app shortcut and command-path setup."
      firstRun={(current) => <>
        <InstallNote><strong>Desktop app:</strong> {current.appLocation} You can also run <code>sd300 gui</code>.</InstallNote>
        <InstallNote><strong>Terminal:</strong> {current.terminalNote}</InstallNote>
        <a href="/docs/sd300/examples">Explore your system’s readings →</a>
      </>}
      maintenance={() => <>
        <InstallNote>Update with <code>sd300 update</code>. Remove the app and terminal tools with <code>sd300 uninstall</code>; shared Cargo and Rust tooling stays installed.</InstallNote>
        <InstallNote><strong>Upgrading from 3.x or Windows 4.0.0?</strong> Run the current official installer in your existing format and edition once. The older updater may reject the desktop component or miss the update. You do not need to uninstall first.</InstallNote>
      </>}
    />
  )
}
