---
title: "DNS changes and network recovery"
description: "Understand what changes before running DNS or fix actions."
---

Start with read-only diagnostics. The commands on this page intentionally change network settings and may interrupt a connection. Run them locally when recovery could drop your remote session, and follow the tool's confirmations.

## Change DNS

`nd300 dns` (or the legacy flag `nd300 -d` / `--dns`) provides a standalone way to change your DNS configuration. Requires elevated privileges. The subcommand and flag are identical: both are semi-exit-early — they exit on failure, and on success fall through to running standard diagnostics so you can immediately confirm the change improved connectivity.

**Providers:**
- **Cloudflare** (recommended) — 1.1.1.1 (privacy-focused)
- **Google** — 8.8.8.8 (reliability)
- **NextDNS** — Encrypted DNS with filtering (requires config ID)
- **Automatic** — Reset to system default (DHCP)
- **Hybrid** (not recommended) — Cloudflare + Google

**NextDNS encryption by platform:**
- **Windows** — DNS-over-HTTPS via `netsh` DoH template registration
- **Linux** — DNS-over-TLS via `systemd-resolved` (falls back to plain IPs via `nmcli`)
- **macOS** — NextDNS CLI client (`nextdns install/activate`), plain IPs if CLI not installed

After setting DNS, the tool verifies both DNS resolution and HTTP connectivity.
On macOS it first captures the exact prior DNS servers **and search domains**;
if capture fails, no change is made, and if verification fails the exact snapshot
is restored and read back before `reverted: true` is reported. Windows/Linux
retain their automatic-DNS rollback for a failed provider change. On success,
full diagnostics run to confirm network health.

## Diagnostic-driven recovery

The fix flow runs a **diagnostic-driven triage loop**: it tests the network, looks at what actually failed, applies only the recovery actions that target those specific failures, re-tests, and repeats. Requires elevated privileges (`sudo` on macOS/Linux, Administrator on Windows).

A clean network completes `nd300 fix` in under 8 seconds and applies zero actions. Latency-only findings are reported as advisory because ICMP can be rate-limited or deprioritized by healthy networks. A real failure usually clears in 1–2 iterations.

### How it works

```text
1. Run baseline diagnostics
2. If everything passes → done.
3. Look at which specific diagnostics failed.
4. Group them by root cause (e.g. interface-down ⇒ skip DNS/gateway/IP — they cascade).
5. Pick the safest justified action that targets a remaining failure and apply it.
6. Wait for the system to stabilize.
7. Re-run the diagnostics.
8. Repeat until everything passes, or no further actions are available.
```

The loop is bounded by **three independent caps** so it always terminates:

- ≤ 6 iterations
- ≤ 4 minutes wall clock
- Per-action attempt cap (typically 1 — failed actions are not retried)

### Action ladder

Actions are tried by evidence and risk: cheap first, reversible first, and only when the current failure set justifies the action. DNS repair is intentionally staged so the tool flushes caches and restores router-provided DNS before considering a public DNS change.

| Cost / risk | Action | Targets |
|---|---|---|
| Cheap / Low | Flush DNS cache | DNS |
| Cheap / Low | Reset DNS to router defaults | DNS |
| Cheap / Low | Switch DNS to Cloudflare 1.1.1.1 | DNS, only after safer DNS-specific fixes fail |
| Cheap / Low | Flush ARP cache | Gateway |
| Medium / Low | Restart networking services | DNS, gateway, public IP |
| Medium / Low | Renew DHCP lease | Gateway, public IP, adapters, interfaces |
| Medium / Medium | Temporarily disable consumer VPNs | Public IP, DNS; interactive confirmation required |
| Expensive / Medium | Restart the network adapter | Adapters, interfaces, gateway, DNS, public IP |
| Expensive / **High** | Deep stack reset (Winsock / TCP-IP / IPv6 on Windows; gated network-service cycle on macOS; recreate NetworkManager profile on Linux) | Last-resort recovery |

Enterprise VPNs (Cisco AnyConnect, Zscaler, Palo Alto / GlobalProtect, F5, Check Point, Juniper) are **never** auto-disabled. Consumer VPN disable is also skipped in JSON or non-interactive mode, even with `--yes`, because the tool cannot safely guide re-enable/recovery steps there. Other medium-risk actions such as DHCP reset, service restart, adapter restart, and public-DNS changes are skipped in JSON or non-interactive mode unless `--yes` can safely auto-confirm the medium-risk prompt. High-risk actions are never auto-confirmed.

### Confirmation prompts

Medium-risk actions explain what they will change and require confirmation unless `--yes` is provided. The deep stack reset is high-risk and is always gated behind a structured plain-language prompt:

```text
┌─ Escalating: Reset Windows networking stack ──────────────────────────────
Why I want to do this:
  Gateway and DNS are still failing after DHCP renew and ARP flush.
  Resetting the networking stack rebuilds Windows' TCP/IP, Winsock,
  and IPv6 catalogs from scratch — the standard fix when simpler
  steps haven't recovered the connection.

What will happen:
  • You will lose internet for ~10–15 seconds.
  • Open VPN sessions and SSH connections will drop.
  • A reboot is recommended afterward; nd300 will remind you at the end.

Reversible: requires reboot to fully revert
Typical duration: 10–15 seconds

Continue? Type 'y' to proceed, anything else to skip:
```

`--yes` does **not** bypass high-risk prompts — they always require an explicit `y`. Anything else (including a blank Enter) is treated as N. In `--json` / non-interactive contexts, high-risk actions are skipped, not auto-applied, with a clear marker in the report.

#### macOS deep-reset safety

ND300 no longer deletes and recreates a macOS network service. That older design
could lose service identity/order and only partially restore Wi-Fi, DNS, search,
proxy, or addressing state when any command failed. The deletion path, Wi-Fi
password retrieval, and SSID scanning have been removed.

The replacement maps the exact enabled physical service and cycles it off/on. It
registers re-enable before mutation, preserves DNS servers and search domains
exactly, and requires the service to be enabled with the expected physical route
and reachability before the restore is considered complete. DHCP renewal likewise
runs only when that service is already configured for DHCP; Manual, BootP,
static, disabled, virtual, missing, or ambiguous services are not changed.

The macOS service cycle is **fail-closed and unavailable in this release build
until its destructive acceptance test passes under an independent,
offline-capable watchdog on a disposable Mac VM or sacrificial service**. A Mac
whose control session depends on the Wi-Fi being cycled is not a safe acceptance
host: losing Wi-Fi would also lose the recovery operator. Until the gate is
deliberately enabled after that proof, ND300 gives safe lower-risk/manual guidance
and does not cycle the service.

### Hard-block detection

Some failure shapes can't be auto-fixed. The loop short-circuits cleanly with guidance instead of thrashing:

- **No physical link** — no cable / Wi-Fi.
- **ISP outage shape** — local network healthy, public internet failing.
- **Enterprise VPN active** — diagnostics shaped by a managed VPN we won't disable.

### Fix Report

Every run produces a Markdown report at `~/Downloads/nd300-fix-report-YYYYMMDD-HHMMSS.md`:

- **Verdict** — Fixed, Partially fixed, Couldn't fix, Cannot fix from here, Timed out, or Stopped at your request.
- **Baseline diagnostics** — full table snapshot before any action ran.
- **Iteration timeline** — for each loop pass: which actions ran, captured stdout/stderr/exit/duration, and the diagnostic delta after.
- **Final diagnostics** — same table as baseline so you can see what changed.
- **Environment** — OS, version, elevation status, VPNs detected.
- **What to try next** — concrete suggestions when the fix didn't fully succeed (restart router, contact ISP, check for driver updates, etc.).

When the command is elevated through `sudo`, ND300 validates the invoking user
from numeric account data and writes the report to that user's Downloads folder,
not `/var/root`. Reports are created atomically with private `0600` permissions
and correct ownership. Restore operations run newest-first after Ctrl-C, SIGTERM,
or SIGHUP, and `reverted` is reported only after state verification.

In JSON mode (`nd300 fix --json`), the schema reports the same data as `outcome`, `iterations`, `applied_actions[]`, `remaining_failures[]`, `hard_block`, and `report_path`.

Checked against [ND-300 v4.0.1](https://github.com/QubeTX/qube-network-diagnostics/releases/tag/v4.0.1).
