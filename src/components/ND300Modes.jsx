import CapabilityGrid from './CapabilityGrid'

export default function ND300Modes() {
  return <CapabilityGrid items={[
    { label: 'User mode', title: 'Check a connection', description: 'Start with eight core checks for your adapters, DNS, gateway, and internet connection. Skip the speed test when you only need connectivity checks.' },
    { label: 'Technician mode', title: 'Trace the problem', description: 'Add 25 deeper checks for routing, Wi-Fi, firewalls, connection quality, and more. Results help narrow a problem; a warning alone does not prove its cause.' },
    { label: 'Recovery tools', title: 'Repair with context', description: 'Inspect failed checks and proposed repairs before changing your network settings. DNS changes include rollback; managed networks may need their existing configuration.' },
  ]} />
}
