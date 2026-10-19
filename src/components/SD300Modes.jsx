import CapabilityGrid from './CapabilityGrid'

export default function SD300Modes() {
  return <CapabilityGrid items={[
    { label: 'User mode', title: 'Plain language', description: 'Read everyday descriptions of system activity, with clear status labels alongside the readings.' },
    { label: 'Technician mode', title: 'Explore the detail', description: 'Inspect processor, memory, disk, graphics, network, process, thermal, and driver information. Missing or unsupported readings are identified.' },
  ]} />
}
