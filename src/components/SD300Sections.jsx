import ReferenceTable from './ReferenceTable'

const rows = [
  ['Overview', 'See the main readings, findings, and system context together.'],
  ['CPU', 'Inspect processor activity, with per-core detail in Technician mode.'],
  ['Memory', 'Check memory use and the programs using it.'],
  ['Disk', 'Read drive health, free space, and available storage details.'],
  ['GPU', 'Inspect graphics activity, graphics memory, and driver information.'],
  ['Network', 'Watch connections, interfaces, and current transfer activity.'],
  ['Processes', 'Find running programs with sorting, filtering, and detailed inspection.'],
  ['Thermals', 'Check available temperatures, fans, battery, and power readings.'],
  ['Drivers', 'Review device health, driver versions, and services.'],
]

export default function SD300Sections() {
  return <ReferenceTable id="monitoring" title="Find the reading you need"
    introduction="Nine monitoring sections work in both modes. Start with the overview, then open the area you want to inspect."
    headings={['Section', 'What it shows']} rows={rows}
    note="Unavailable or unsupported does not mean zero or healthy. Hardware, drivers, and permissions determine which readings the computer can provide."
    docs="/docs/sd300/snapshots" linkText="Understand readings and save a snapshot" />
}
