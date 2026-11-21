#!/bin/sh
set -eu

installer=$(mktemp "${TMPDIR:-/tmp}/tr300-installer.XXXXXXXX")
trap 'rm -f "$installer"' 0
trap 'exit 1' HUP INT TERM
curl --proto '=https' --tlsv1.2 -fLsS -o "$installer" https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-installer.sh
sh "$installer" "$@"
