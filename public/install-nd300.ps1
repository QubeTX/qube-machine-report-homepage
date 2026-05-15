$ErrorActionPreference = 'Stop'

irm https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd-300-installer.ps1 | iex

$nd300 = Join-Path $env:USERPROFILE ".cargo\bin\nd300.exe"
if (-not (Test-Path $nd300)) {
  Write-Error "nd300.exe not found at $nd300 after install. The cargo-dist installer may have failed."
  exit 1
}
