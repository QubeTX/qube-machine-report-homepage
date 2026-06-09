#!/bin/sh
set -eu

curl --proto '=https' --tlsv1.2 -LsSf https://github.com/QubeTX/qube-workbranch-view/releases/latest/download/wb300-installer.sh | sh

WB300="$HOME/.cargo/bin/wb300"
if [ ! -x "$WB300" ]; then
  echo "wb300 not found at $WB300 after install. The cargo-dist installer may have failed." >&2
  exit 1
fi
