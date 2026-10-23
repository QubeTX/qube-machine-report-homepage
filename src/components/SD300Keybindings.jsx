import ReferenceTable from './ReferenceTable'

const rows = [
  ['1-9', 'Open a monitoring section.'],
  ['/', 'Filter the current inventory.'],
  ['Enter', 'Inspect the selected row.'],
  ['Space', 'Pause the displayed view; press again to return to the newest reading. Collection continues.'],
  ['?', 'Open keyboard help.'],
  ['q', 'Quit to the terminal.'],
]

export default function SD300Keybindings() {
  return <ReferenceTable id="keyboard" title="Move through the terminal"
    width="960px" headings={['Key', 'Action']} rows={rows} codeLabels
    docs="/docs/sd300/terminal#keyboard-reference" linkText="All terminal controls" />
}
