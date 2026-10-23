import ReferenceTable from './ReferenceTable'

const rows = [
  ['Windows', 'Official installers support x64 Windows. Sensor and device detail depends on hardware, drivers, and permissions.'],
  ['macOS', 'Supports Apple Silicon and Intel Macs. Readings that macOS or the hardware does not expose remain identified as unavailable.'],
  ['Linux', 'Supports the documented x64 and ARM64 GNU systems, with an x64 musl terminal build. The desktop app needs a graphical session and runs without a tray.'],
]

export default function SD300Platform() {
  return <ReferenceTable id="platforms" title="Platform support" headings={['Platform', 'Support and limits']} rows={rows}
    docs="/docs/sd300/installation" linkText="Platform requirements and installation" />
}
