#!/bin/sh
set -eu

curl --proto '=https' --tlsv1.2 -LsSf https://github.com/QubeTX/qube-machine-report/releases/latest/download/tr300-installer.sh | sh
