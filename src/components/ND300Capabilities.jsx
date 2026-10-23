import DetailRows from './DetailRows'

const rows = [
  { title: 'SpeedQX, included', description: 'Test internet speed on its own with Quick or Deep measurement. Tests transfer data; configure a lower limit for a metered connection. Optional M-Lab comparisons require consent to publish measurements and your IP address.', href: '/docs/nd300/speedqx', linkText: 'Speed test limits and privacy' },
  { title: 'DNS and network recovery', description: 'Review failed checks and proposed repairs before changing network settings. DNS changes include rollback, and repair actions can interrupt your connection. Managed networks may need to keep their existing configuration.', href: '/docs/nd300/recovery', linkText: 'Understand DNS changes and recovery' },
]

export default function ND300Capabilities() {
  return <DetailRows id="capabilities" title="Take the next step" rows={rows} />
}
