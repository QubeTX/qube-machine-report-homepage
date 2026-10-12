---
title: "ND-300 advanced use cases"
description: "Compare detailed results, save JSON, and investigate a network problem before making changes."
sidebar:
  label: "Advanced use cases"
---

Start with [Basic use cases](/nd300/examples) if you only need a connection check or speed result.

## Compare a problem before and after a change

Collect a detailed report without the speed test:

```sh
nd300 --tech --fast
```

Note the failed check and the connection in use, including any VPN. After an intentional change, such as reconnecting a cable, run the same command again. Compare that check's result under the same conditions.

Technician mode adds 25 checks to the eight core checks. See [Read the diagnostics](/nd300/diagnostics) for their coverage. More detail can narrow the problem, but a warning alone does not establish its cause.

## Save results for another program

JSON is a structured format for scripts. Network reports can contain addresses and other identifying information; review the file before sharing it.

The `>` operator creates a file in your current folder or replaces a file with the same name.

```sh
nd300 --tech --fast --json > network-check.json
```

Open the saved file to inspect the results. In a script, keep each check's status with its value. An unavailable result must not become a successful check or a zero measurement.

For speed results, set a data limit appropriate for the connection. This example allows 250 MB of test data, excluding network overhead and transfers already in progress:

```sh
speedqx --max-bytes 250000000 --json > speed-test.json
```

Preserve partial-result and single-source labels. They explain what evidence supports the numbers.

## Run a longer speed comparison

Deep mode allows up to five minutes and 20 GB of test data by default. You can lower the data limit. Read [SpeedQX](/nd300/speedqx#run-a-longer-test) before running it, especially on a metered connection.

The optional M-Lab comparison requires consent to public results and IP addresses. The guide explains that choice before showing the command.

## Investigate a failed name lookup

DNS translates names such as website addresses into network addresses. If DNS fails while other connectivity checks pass, use the report to confirm which server and connection are in use.

On an organization-managed network, a private DNS server or VPN may be required to reach internal services. Read [DNS changes and recovery](/nd300/recovery) before clearing saved lookups or choosing another server. Start with the specific failure rather than running a broad reset.

Checked against [ND-300 v4.0.1](https://github.com/QubeTX/qube-network-diagnostics/releases/tag/v4.0.1).
