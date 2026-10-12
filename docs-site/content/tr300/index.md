---
title: "TR-300 machine reports"
description: "Inspect machine information in the terminal and export it when needed."
---

Run `tr300` or `report` for the same full terminal report. Neither command creates a report file unless you request saving.

TR-300 covers operating system and kernel information, processor and memory, disk usage, networking, session and uptime information, and supported hardware detail. Optional rows appear only when the platform exposes suitable data. Fast mode skips slower collection for shell startup.

- [Commands and options](/tr300/commands)
- [Report and scripting examples](/tr300/examples)
- [Optional shell integration](/tr300/shell-integration)
- [Install](/installation) or [update and uninstall](/installation/lifecycle)

## Available information
- Cross-platform support (Windows, macOS, Linux)
- Beautiful Unicode box-drawing tables with ASCII fallback
- ASCII fallback mode for legacy terminals
- Bar graphs for CPU load, memory, and disk usage
- VPN-aware network information on Windows — `MACHINE IP` and `DNS IP` rows reflect the active default route (`GetBestInterfaceEx`-driven) so Tailscale / WireGuard / OpenVPN / corporate VPN tunnels are reported correctly instead of a coin-flip pick
- Hypervisor / virtualization detection (CPUID-based; disambiguates Win11 VBS from real VMs)
- Session info with last-login/current-session tracking; Windows uses WTS APIs with a boot-time fallback
- Disk encryption status (FileVault on macOS, BitLocker on Windows, and root
  encryption signals on Linux when readable)
- Native macOS detail from a single structured snapshot: model, OS build/name,
  real Normal/Safe/Recovery boot state, Apple chip and P/E topology, logical and
  native display resolution, battery health/cycles, and explicit Rosetta host /
  process architecture without leaking hardware identifiers
- Fast Startup-aware uptime on Windows — when the kernel session age and the WMI cold-boot time diverge by >1h (typical on Win10/Win11 laptops with `HiberbootEnabled`), the `UPTIME` row renders both as `9d 4h 12m (session: 7h 14m)`
- 5-state battery awareness on Windows — distinguishes `AC Power` (plugged in, fully topped up), `X% (Charging)`, `X% (Plugged in)` (gaming-laptop case where peak GPU draw exceeds the brick wattage, OR firmware-limited charging modes like ThinkPad battery longevity), `X% (Discharging)`, plus `Critical` / `Low` overrides
- Smart terminal detection on Windows — env-var pre-checks (`WT_SESSION`, `TERM_PROGRAM`, `CURSOR_TRACE_ID`) then a parent-process walk via Toolhelp32 that recognizes Windows Terminal, WezTerm, Alacritty, VS Code, Cursor, Windsurf, Hyper, Tabby, Ghostty, Kitty, MinTTY, Claude Code, and Antigravity even when env vars are absent
- PowerShell 7+ ("PowerShell Core") detection on Windows — reads `HKLM\SOFTWARE\Microsoft\PowerShellCore\InstalledVersions\<GUID>\SemanticVersion` so `pwsh` users see the actual installed version instead of falling back to Windows PowerShell 5.x
- Schema-versioned JSON output for scripting, including collection mode and
  explicit CPU-load, frequency, disk, and memory value definitions
- Read-only ordinary reports with explicit, collision-safe Markdown saving via
  `-r`/`--report`/`-s`/`--save`
- Fast mode (`--fast`) for sub-second auto-run startup
- A real PATH-level `report` command installed beside `tr300`; both names
  support the same reporting options and install/update/uninstall actions
- Thermal reporting (`CPU TEMP` / `GPU TEMP`): Linux reads hwmon package/SoC sensors with a cpu/soc thermal-zone fallback (Raspberry Pi SoC temperature included), Windows reports discrete NVIDIA GPU temperature via the driver tool when an NVIDIA adapter is present; rows appear in both fast and full runs and omit themselves when no trusted sensor exists
- Positional action syntax (`tr300 update`, `tr300 install`, `tr300 uninstall`) with legacy flag compatibility
- Origin-preserving self-update: MSI, EXE, Cargo, shell/PowerShell, and macOS
  PKG installs update through the same channel and never silently create a
  second installer family
- Endpoint-policy-aware update failure: antivirus/Group Policy write or launch
  blocks retain the current install, stop additional write-heavy fallbacks, and
  return actionable manual-release guidance
- Conditional platform detail rows for machine model, CPU core topology, ZFS health, motherboard, BIOS, and RAM slots when the host exposes them
- Optional shell-profile auto-run configuration via `tr300 install`

Checked against [TR-300 v4.4.0](https://github.com/QubeTX/qube-machine-report/releases/tag/v4.4.0).
