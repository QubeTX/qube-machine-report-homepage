---
title: "Read the network diagnostics"
description: "Understand core and detailed network checks and what unavailable results mean."
sidebar:
  label: "Read the diagnostics"
---

Start with the failed check and the connection you were using when the problem occurred. A failed check helps narrow the investigation; it does not always identify the cause on its own.

```sh
nd300 --fast
```

This runs the standard checks without the speed test. The normal `nd300` run includes speed testing. See [SpeedQX](/nd300/speedqx) for its data use and results.

## Core checks

| Check | What it tells you |
| --- | --- |
| Network adapters | Which wired, wireless, or other network connections are present |
| IP configuration and interfaces | Which network addresses your computer is using |
| Default gateway | Which router the computer uses to reach other networks |
| DNS resolution | Whether website names can be translated into network addresses |
| Public IP | Which address an internet service sees for your connection |
| Latency | How long a request takes to travel out and back |
| Speed test | How quickly data transfers over the tested connection |
| Port connectivity | Whether connections to selected service ports succeed |

A router can respond while the wider internet is unavailable. DNS can fail even when a direct connection works. Read the checks together before choosing a repair.

## Detailed checks

Run `nd300 --tech --fast` to add the detailed checks while skipping the speed test. They can take longer because some measure the connection repeatedly.

Technician mode adds these 25 checks:

| Area | Checks and their purpose |
| --- | --- |
| Local connection | **ARP table and gateway health** check nearby address records and the router. **DHCP lease** shows automatically assigned network settings. **Adapter hardware** adds device details. **Wi-Fi quality** shows available signal, band, channel, speed, and security information. |
| Routes and addresses | **Routing table** shows where traffic is sent. **Route path** traces the hops toward a destination. **MTU** checks packet-size limits. **NAT analysis** looks for address translation at your router or provider, including double NAT and shared public addresses. |
| Connections and traffic | **Active connections**, **listening ports**, and **connection states** show current network activity. **Protocol statistics** and **traffic counters** show available system totals. |
| Network controls | **Proxy detection** checks intermediary settings and automatic configuration. **VPN detection** checks for a tunnel affecting traffic. **Firewall status** reports available firewall information. **TLS inspection** looks for evidence that encrypted traffic is being inspected. |
| DNS | **DNS cache** shows saved lookups. **Reverse DNS** looks up names from addresses. **Resolver benchmarking** compares lookup behavior and checks for altered nonexistent-name responses and DNSSEC validation of signed answers. |
| Connection quality | **IPv6 connectivity** tests the newer address system, including an HTTPS request. **Bufferbloat** measures extra delay while the connection is busy. **Sustained packet loss** checks whether repeated probes fail to return. |
| Access and time | **Captive portal detection** looks for a network sign-in page. **Clock sync** compares the system clock with a network time reference. |

## Interpret incomplete results

**Unavailable** means the check did not obtain a usable reading. It does not mean zero, healthy, or absent. Hardware support, permissions, privacy settings, or blocked requests can limit a check.

For example, TLS inspection can be **clear**, **detected**, or **inconclusive**. A clear result describes the evidence from that check; it is not proof that no inspection exists anywhere on the network.

A VPN can change the route, public address, and measured speed. Keep that context when comparing results.

## macOS details

ND-300 distinguishes the route used by a VPN from the underlying wired or wireless connection. It does not count every tunnel as an active physical connection or assume that every `utun` interface is a VPN.

The standard report does not wait for optional Wi-Fi radio details. Technician mode attempts to read them, but a Wi-Fi name hidden by macOS privacy controls stays unavailable. Suppressed system counters are omitted rather than reported as zero.

The `dual_stack` result means both IPv4 and IPv6 connectivity were actually verified. DNSSEC is reported as validating only when the valid signed test succeeds and the deliberately invalid test fails.

For the next step, see [Basic use cases](/nd300/examples), [Advanced use cases](/nd300/advanced), or [DNS changes and recovery](/nd300/recovery).

Checked against [ND-300 v4.0.1](https://github.com/QubeTX/qube-network-diagnostics/releases/tag/v4.0.1).
