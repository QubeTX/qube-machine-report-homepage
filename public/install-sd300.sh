#!/bin/sh
set -eu

curl --proto '=https' --tlsv1.2 -LsSf https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/SD300-installer.sh | sh

SD300="$HOME/.cargo/bin/sd300"
if [ ! -x "$SD300" ]; then
  echo "sd300 not found at $SD300 after install. The cargo-dist installer may have failed." >&2
  exit 1
fi
