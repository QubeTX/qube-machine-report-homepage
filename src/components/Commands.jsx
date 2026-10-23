import CommandExamples from './CommandExamples'

export default function Commands() {
  return <CommandExamples docs="/docs/tr300/commands"
    note={<>The <code>report</code> command accepts the same options as <code>tr300</code>. Reports can include computer, user, and network information. Review saved output before sharing it.</>}
    rows={[
      { command: 'tr300', description: 'Print a system report without saving a file.' },
      { command: 'tr300 --fast', description: 'Get a quick summary that skips slower checks.' },
      { command: 'tr300 --report', description: 'Save a Markdown report in Downloads. The output shows its location.' },
      { command: 'tr300 --json', description: 'Print structured data for another program.' },
      { command: 'tr300 --ascii', description: 'Use plain text characters for table borders in older terminals.' },
      { command: 'tr300 --help', description: 'Read the full command help.' },
    ]} />
}
