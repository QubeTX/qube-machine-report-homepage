---
title: "Read the network diagnostics"
description: "Core checks, technician checks, and unavailable information."
---

**User mode** (default) runs 8 core diagnostics and presents a clean summary table. Ideal for quick network health checks.

**Technician mode** (`-t`) runs all 8 core diagnostics plus 25 additional deep diagnostic modules. Produces a detailed technical report with per-module breakdowns, suitable for troubleshooting and support workflows. A full technician run takes ~2–4 minutes — the long probes (traceroute, sustained packet loss, loaded bufferbloat) are doing real work.

## Checks and platform behavior

### Core Diagnostics (both modes)
1. Network Adapters
2. IP Configuration / Interfaces
3. Default Gateway
4. DNS Resolution
5. Public IP
6. Latency
7. Speed Test (common Quick profile in ND300 and SpeedQX; optional Deep)
8. Port Connectivity

### Deep Diagnostics (technician mode only)
9. ARP Table + Gateway Health
10. Routing Table
11. Active Connections
12. Listening Ports
13. DHCP Lease Info
14. Protocol Statistics
15. Adapter Hardware Details
16. Proxy Detection (+ PAC validation, WPAD discovery)
17. VPN Detection
18. Firewall Status
19. DNS Cache
20. IPv6 Connectivity (+ real HTTPS-over-v6 fetch, v4-vs-v6 comparison)
21. MTU per Interface + Path-MTU Discovery
22. Connection State Summary
23. Bufferbloat (real loaded-latency measurement, per-direction grades)
24. Reverse DNS
25. TLS Inspection
26. Traffic Counters
27. Route Path (traceroute with LAN/ISP/backbone analysis)
28. Sustained Packet Loss (30 probes × 3 targets)
29. NAT Analysis (double-NAT, CGNAT detection)
30. Wi-Fi Link Quality (signal, channel, band, PHY, security)
31. DNS Resolver Benchmark (+ NXDOMAIN-hijack and DNSSEC checks)
32. Captive Portal Detection
33. Clock Sync (SNTP offset measurement)

### macOS accuracy notes

ND300 builds one topology view from the default route, current interface flags,
network-service/hardware-port mappings, and assigned addresses. The active count
includes usable physical uplinks, not loopback, AWDL/LLW, dormant tunnels, or
link-local-only devices. If a VPN owns the default route, the logical tunnel and
underlying physical uplink are described separately.

Core mode never waits for optional Wi-Fi radio metadata. Technician mode uses a
bounded `system_profiler` query, with a text fallback for older supported macOS
versions; it reads only the connected network and treats a privacy-redacted SSID
as unavailable. VPN reporting correlates macOS VPN configuration, network state,
addresses, and routes rather than calling every `utun` device a VPN. IPv6 ULA is
reported separately, and `dual_stack` means both IPv4 and IPv6 connectivity were
actually verified.

TLS inspection reports **clear**, **detected**, or **inconclusive** evidence and
populates the issuer only after a bounded Rust TLS handshake. DNSSEC is reported
as validating only when a valid signed control resolves and the deliberately
invalid control does not. If macOS suppresses protocol counters, that section is
omitted instead of presenting unknown values as zero.

Checked against [ND-300 v4.0.1](https://github.com/QubeTX/qube-network-diagnostics/releases/tag/v4.0.1).
