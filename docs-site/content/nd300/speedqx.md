---
title: "SpeedQX throughput tests"
description: "Run bounded speed tests and understand what the results measure."
---

## Common runs

```sh
speedqx
speedqx --max-bytes 250000000
speedqx --json
```

Quick is the default. The byte limit is a decimal payload budget, not a guarantee about total network traffic: it excludes protocol overhead and can have in-flight WebSocket overshoot. Stop with Ctrl-C to preserve partial results.

### Optional M-Lab comparison

```sh
speedqx --accept-mlab
speedqx --deep --accept-mlab
```

Use `--accept-mlab` only if you consent to M-Lab publishing measurement results and IP addresses. Without consent, the headline is labeled single-source. Deep increases duration and potential data usage.

## What the numbers mean

SpeedQX measures sustained application throughput on the device and paths tested. Methodology v5 uses monotonic byte counters, a fixed two-second warm-up, and the median of qualifying Cloudflare and M-Lab MSAK primary estimates. NDT7 remains a separate single-stream comparison. A repeatable ceiling needs two non-overlapping three-second windows within 10%; it does not describe the ISP's physical line capacity.

Quick is the default, capped at 90 seconds and 5 GB of payload budget. Deep repeats the primary comparison with longer transfers, adds supplementary results, and is capped at five minutes and 20 GB. Both can use a smaller byte ceiling. M-Lab requires explicit consent to publication of measurement results and IP addresses. Without consent, the headline is labeled single-source. HTTP ping is the median idle RTT to the common Cloudflare reference; download-loaded and upload-loaded latency and HTTP failures are separate details. No nominal 95% accuracy claim or UDP loss estimate is inferred.

Read [METHODOLOGY.md](https://github.com/QubeTX/qube-network-diagnostics/blob/d76af2b2e282440e2e28c31c8b05d5d8833f458f/METHODOLOGY.md) for counter, validity, acquisition and aggregation rules. Historical results retain their original version and interpretation. Full-trace TypeScript/Rust replay and controlled transfer evidence are required alongside native platform acceptance; green formulas alone do not establish accuracy.

## All options

| Flag | Description |
|------|-------------|
| `--json` | Output results as JSON |
| `--ascii` | Use ASCII characters instead of Unicode box-drawing |
| `--no-color` | Disable colored output |
| `--deep` | Five-minute Deep profile; Quick is the default |
| `--fast` | Explicit alias for the default Quick profile |
| `--accept-mlab` | Consent to M-Lab publication of results and IP addresses |
| `--max-bytes <BYTES>` | Override the default 5 GB Quick / 20 GB Deep payload budget |
| `--duration <VALUE>` | Legacy parse-compatible option; fixed v5 profile schedule applies |
| `--fastcom-duration <VALUE>` | Legacy parse-compatible option; Deep supplementary schedule applies |
| `--latency-probes <N>` | Legacy parse-compatible option; v5 uses twelve idle reference probes |
| `--skip-msak` | Skip the M-Lab MSAK multi-stream provider |
| `--skip-apple` | Legacy alias; Apple is outside the common v5 profile |
| `--update` | Check for updates and install the latest version |
| `-v, --version` | Print version |
| `-h, --help` | Print help |

Checked against [ND-300 v4.0.1](https://github.com/QubeTX/qube-network-diagnostics/releases/tag/v4.0.1).
