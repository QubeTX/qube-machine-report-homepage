$ErrorActionPreference = 'Stop'

irm https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-installer.ps1 | iex

$tr300 = Join-Path $env:USERPROFILE ".cargo\bin\tr300.exe"
if (Test-Path $tr300) {
  & $tr300 install
} else {
  Write-Error "tr300.exe not found at $tr300 after install. The cargo-dist installer may have failed."
  exit 1
}
