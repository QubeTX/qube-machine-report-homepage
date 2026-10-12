---
title: "Test internet speed with SpeedQX"
description: "Measure download, upload, and latency while controlling test data use."
sidebar:
  label: "SpeedQX"
---

SpeedQX measures download speed, upload speed, and response delay from the computer running it. It is installed with [ND-300](/nd300/installation).

## Run a speed test

Speed tests transfer data. The default Quick test allows up to 90 seconds and 5 GB of test data. These data limits exclude network overhead and may be exceeded by transfers already in progress.

For a smaller test-data limit of 250 MB, run:

```sh
speedqx --max-bytes 250000000
```

To use the default Quick limits, run `speedqx`. Press `Ctrl+C` to stop; valid partial results are preserved. A small data limit or an interruption may leave some measurements incomplete.

## Read the results

| Reading | Meaning |
| --- | --- |
| Download, in Mbps | How quickly the tested connection receives data |
| Upload, in Mbps | How quickly it sends data |
| Idle latency, in ms | How long a request takes to travel out and back while the connection is not being loaded by the test |
| Download-loaded or upload-loaded latency | The delay while the test is receiving or sending data |
| Partial | Some measurements did not finish or qualify for a complete result |
| Single-source | The headline result relies on one primary test provider |

Mbps means megabits per second. Milliseconds (`ms`) measure delay. Higher transfer speed means more data can move per second; lower latency means less delay for the tested requests.

The result describes this device and the paths tested at that time. Wi-Fi, a VPN, other traffic, and the test servers can affect it. It does not directly measure the physical capacity of your provider's line.

## Add the optional M-Lab comparison

Use this option only if you consent to **M-Lab publishing measurement results and IP addresses**. Without consent, the headline result is labeled single-source.

```sh
speedqx --accept-mlab --max-bytes 250000000
```

The test can include M-Lab measurements if they qualify. The smaller data limit may still leave results incomplete.

## Run a longer test

Deep mode allows up to five minutes and 20 GB of test data by default. Check your data allowance first. This example lowers the data limit to 1 GB, excluding overhead and transfers already in progress:

```sh
speedqx --deep --max-bytes 1000000000
```

A lower limit can end the test before every measurement finishes. Add `--accept-mlab` only after accepting the publication described above. Do not combine `--deep` with `--fast`.

## Options

| Option | What it does |
| --- | --- |
| `--max-bytes <BYTES>` | Sets the test-data limit in bytes |
| `--deep` | Runs the longer test profile |
| `--fast` | Explicitly selects Quick, which is already the default |
| `--accept-mlab` | Consents to publication of M-Lab results and IP addresses |
| `--skip-msak` | Skips the M-Lab test that uses multiple simultaneous transfers |
| `--json` | Prints structured results for scripts |
| `--ascii` | Uses simple text characters for table borders |
| `--no-color` | Removes colored output |
| `-h`, `--help` | Shows command help |
| `-v`, `--version` | Shows the installed version |

`speedqx update` or the older `speedqx --update` updates the shared ND-300 installation. See [Updates and repairs](/nd300/installation#updates-and-repairs).

The older `--duration <VALUE>`, `--fastcom-duration <VALUE>`, `--latency-probes <N>`, and `--skip-apple` options are still accepted for compatibility. They do not provide the old timing controls: the current method uses fixed profiles and twelve idle reference probes, and does not include Apple's test.

## How the measurement is calculated

The documented release uses Methodology v5. It excludes a two-second warm-up, tracks transferred bytes over elapsed time, and takes the median of qualifying primary estimates from Cloudflare and M-Lab MSAK. Each primary provider contributes one estimate. NDT7 is a separate single-stream comparison.

A reported repeatable ceiling requires two non-overlapping three-second windows within 10% of each other. This is an observed transfer rate, not a guarantee of line capacity or absolute accuracy. Idle latency uses the median round-trip time to the common Cloudflare reference. Failed HTTP requests are recorded separately; they are not presented as UDP packet loss.

For calculation and validity rules, read the published [measurement methodology](https://github.com/QubeTX/qube-network-diagnostics/blob/d76af2b2e282440e2e28c31c8b05d5d8833f458f/METHODOLOGY.md). Keep the method version and qualification labels when comparing saved results.

Checked against [ND-300 v4.0.1](https://github.com/QubeTX/qube-network-diagnostics/releases/tag/v4.0.1).
