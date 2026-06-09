$ErrorActionPreference = 'Stop'

irm https://github.com/QubeTX/qube-workbranch-view/releases/latest/download/wb300-installer.ps1 | iex

$wb300 = Join-Path $env:USERPROFILE ".cargo\bin\wb300.exe"
if (-not (Test-Path $wb300)) {
  Write-Error "wb300.exe not found at $wb300 after install. The cargo-dist installer may have failed."
  exit 1
}
