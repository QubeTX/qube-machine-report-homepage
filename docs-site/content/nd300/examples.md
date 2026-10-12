---
title: "ND-300 basic use cases"
description: "Check connectivity, test speed with a smaller data limit, and choose the next diagnostic step."
sidebar:
  label: "Basic use cases"
---

These examples assume you have [installed ND-300](/nd300/installation). They check the network without changing its settings.

## Check your connection

Use this when websites fail to load or the connection seems unreliable:

```sh
nd300 --fast
```

The report checks your network connection and access to internet services. `--fast` skips the speed test; it does not make the checks offline.

Start with the failed or unavailable checks. A router problem and a website-name lookup problem need different next steps. [Read the diagnostics](/nd300/diagnostics) explains what each result means.

## Test internet speed with less data

Speed tests transfer data. The default Quick test allows up to 5 GB of test data; use a smaller limit on a metered connection. The example below limits test data to 250 MB, excluding network overhead and transfers already in progress.

```sh
speedqx --max-bytes 250000000
```

Read download speed, upload speed, and latency together. A small data limit may leave some results incomplete. Keep those labels when sharing the result. See [SpeedQX](/nd300/speedqx) for definitions and longer tests.

## Get more detail about a problem

To add detailed network checks while skipping the speed test, run:

```sh
nd300 --tech --fast
```

This adds information such as Wi-Fi quality, routes, firewall status, and active connections. It can take longer than the basic check. `--fast` only skips the speed test; the other diagnostic checks still run.

Use the extra detail to investigate the failed check, rather than assuming every warning has the same cause. See [Advanced use cases](/nd300/advanced) for a comparison workflow.

## Make a report easier to identify

```sh
nd300 --fast --title "Office Wi-Fi"
```

The report uses your title. To simplify its appearance, add `--ascii --no-color`.

If a setting needs to change, read [DNS changes and recovery](/nd300/recovery) first. Those commands can interrupt the connection.

Checked against [ND-300 v4.0.1](https://github.com/QubeTX/qube-network-diagnostics/releases/tag/v4.0.1).
