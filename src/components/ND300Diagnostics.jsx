import ReferenceTable from './ReferenceTable'

const rows = [
  ['Local connection', 'Inspect adapters, IP settings, the gateway, DHCP information, and available Wi-Fi details.'],
  ['Names and addresses', 'Check DNS resolution, public addresses, saved lookups, and resolver behavior.'],
  ['Routes and access', 'Investigate routing, packet-size limits, IPv6 connectivity, and network sign-in pages.'],
  ['Traffic and services', 'Inspect active connections, listening ports, service reachability, and traffic counters.'],
  ['Connection quality', 'Measure latency, speed, sustained packet loss, and extra delay under load.'],
  ['Network controls', 'Inspect available VPN, proxy, firewall, and encrypted-traffic inspection evidence.'],
]

export default function ND300Diagnostics() {
  return <ReferenceTable id="diagnostics" title="What it checks"
    introduction="User mode runs eight core checks. Technician mode adds 25 deeper checks across these areas. Use --fast to skip the speed test."
    headings={['Area', 'What you can learn']} rows={rows}
    note="A warning helps narrow the investigation; it does not prove a cause. Unavailable results can reflect hardware, permissions, or blocked requests."
    docs="/docs/nd300/diagnostics" linkText="Explore the full diagnostic coverage" />
}
