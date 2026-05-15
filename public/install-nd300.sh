#!/bin/sh
set -eu

curl --proto '=https' --tlsv1.2 -LsSf https://github.com/QubeTX/qube-network-diagnostics/releases/latest/download/nd-300-installer.sh | sh

ND300="$HOME/.cargo/bin/nd300"
if [ ! -x "$ND300" ]; then
  echo "nd300 not found at $ND300 after install. The cargo-dist installer may have failed." >&2
  exit 1
fi
