---
title: "DNS changes and network recovery"
description: "Review the effect of network changes before clearing DNS, changing servers, or attempting repairs."
sidebar:
  label: "DNS and recovery"
---

Start with `nd300 --fast` to identify what failed. The commands on this page change network settings and may interrupt your connection. Use them locally if a dropped connection would leave you unable to continue a remote session.

DNS translates names, such as website addresses, into network addresses. Changing it will not fix every connection problem. An organization-managed network may require its own DNS servers or VPN to reach internal services.

## Clear saved DNS lookups

If the report points to an outdated saved lookup, you can clear the system's DNS cache:

```sh
nd300 clear-dns
```

This clears saved lookups and exits. It does not choose a different DNS provider. Follow any permission requirements reported by the tool, then rerun `nd300 --fast` to check the result.

## Change DNS servers

This needs administrator privileges. On Windows, use an administrator terminal. On macOS or Linux, use `sudo nd300 dns` when you intend to authorize the change.

```sh
nd300 dns
```

Follow the provider prompts. Available choices include Cloudflare, Google, NextDNS, Automatic, and Hybrid. NextDNS requires a configuration ID. Automatic returns to automatically supplied DNS settings; Hybrid combines Cloudflare and Google.

After a change, ND-300 tests name lookups and HTTP connectivity. If the change succeeds, it continues with standard diagnostics. Those diagnostics include a speed test unless skipped, so allow for its [data use](/nd300/speedqx#run-a-speed-test).

If verification fails:

- On macOS, ND-300 restores the previous DNS servers and search domains, then checks the restored settings. If it cannot capture those settings beforehand, it makes no change.
- On Windows and Linux, it returns to automatic DNS. This is not the same as restoring a previous custom server list.

### NextDNS encryption

Encryption depends on the platform and available software:

| Platform | Behavior |
| --- | --- |
| Windows | Uses DNS-over-HTTPS through Windows DNS settings |
| Linux | Uses DNS-over-TLS with `systemd-resolved`; the `nmcli` fallback uses unencrypted DNS |
| macOS | Uses the NextDNS client when available; without it, uses unencrypted DNS addresses |

Do not assume the NextDNS selection alone guarantees encrypted DNS on every computer.

## Attempt a targeted repair

The fix flow needs administrator privileges and can interrupt networking. On Windows, open an administrator terminal; on macOS or Linux, use `sudo nd300 fix` when you intend to authorize repairs.

```sh
nd300 fix
```

ND-300 checks the network, chooses actions relevant to the failures, and tests again. Read each confirmation before accepting it. If the checks pass, no repair is needed.

Possible actions include clearing caches, restoring automatic DNS, renewing an automatically assigned address, or restarting a network service or adapter. More disruptive resets are considered only when the evidence supports them and the platform allows them. A successful repair is not guaranteed.

The flow stops after at most six rounds or four minutes, when no justified action remains, or when you stop it. It also stops with guidance for problems it cannot fix locally, such as a missing cable, an apparent provider outage, or a managed VPN it must not disable.

### Confirmations and VPNs

- `--yes` accepts medium-risk prompts automatically. Use it only after deciding to allow those changes.
- High-risk actions always require explicit confirmation. They are skipped when no interactive confirmation is possible, including JSON mode.
- Consumer VPNs require an interactive confirmation before being disabled, even with `--yes`.
- Enterprise VPNs are never automatically disabled.
- In JSON or other noninteractive runs, other medium-risk actions are skipped unless `--yes` can safely confirm their prompt.

### macOS limitation

The deep network-service restart is disabled in this release pending its required recovery testing. ND-300 uses the available lower-risk actions and manual guidance instead. It does not delete and recreate macOS network services. Address renewal applies only to an unambiguous service already configured for automatic addressing.

## Read the repair report

The fix flow saves a Markdown report in Downloads and shows its path. It includes the starting checks, actions taken, final checks, outcome, and suggested next steps. Possible outcomes include fixed, partly fixed, unable to fix, timed out, and stopped at your request.

Review the report for identifying information before sharing it. Compare the before and after checks to see what changed. When run through `sudo`, the report goes to the invoking user's Downloads folder.

For scripts, `nd300 fix --json` returns structured fields including `outcome`, `iterations`, `applied_actions`, `remaining_failures`, `hard_block`, and `report_path`. JSON output does not remove the confirmation limits described above.

Checked against [ND-300 v4.0.1](https://github.com/QubeTX/qube-network-diagnostics/releases/tag/v4.0.1).
