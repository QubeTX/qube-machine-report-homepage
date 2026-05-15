$ErrorActionPreference = 'Stop'

irm https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/SD300-installer.ps1 | iex

$sd300 = Join-Path $env:USERPROFILE ".cargo\bin\sd300.exe"
if (-not (Test-Path $sd300)) {
  Write-Error "sd300.exe not found at $sd300 after install. The cargo-dist installer may have failed."
  exit 1
}
