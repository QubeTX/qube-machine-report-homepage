#!/bin/sh
set -eu

curl --proto '=https' --tlsv1.2 -LsSf https://github.com/QubeTX/qube-system-diagnostics/releases/latest/download/sd300-cli-installer.sh | sh
