import CommandExamples from './CommandExamples'

export default function Commands() {
  return <CommandExamples product="TR-300" docs="/docs/tr300/commands"
    note="Reports can include computer, user, and network information. Review saved output before sharing it."
    rows={[
      { command: 'tr300', description: 'Print a system report. The report command does the same thing; neither saves a file by default.' },
      { command: 'tr300 --fast', description: 'Get a quick summary that skips slower checks.' },
      { command: 'tr300 --report', description: 'Save a Markdown report in Downloads. The output shows its location.' },
      { command: 'tr300 --json', description: 'Print structured data for another program.' },
    ]} />
}
