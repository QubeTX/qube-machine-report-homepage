#!/bin/sh
set -eu

curl --proto '=https' --tlsv1.2 -LsSf https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-installer.sh | sh

TR300="$HOME/.cargo/bin/tr300"
if [ -x "$TR300" ]; then
  "$TR300" install
else
  echo "tr300 not found at $TR300 after install. The cargo-dist installer may have failed." >&2
  exit 1
fi
