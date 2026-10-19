import CommandExamples from './CommandExamples'

export default function SD300Commands() {
  return <CommandExamples product="SD-300" docs="/docs/sd300/commands"
    note="The app and terminal dashboard share their monitoring core and can run independently. Hardware, permissions, and drivers determine which readings are available."
    rows={[
      { command: 'sd300 gui', description: 'Open the desktop app or bring its window forward.' },
      { command: 'sd300 --user', description: 'Open the terminal monitor with plain-language status. Press q to quit.' },
      { command: 'sd300 --tech', description: 'Open detailed readings in the terminal.' },
      { command: 'sd300 install', description: 'Install or repair the complete product through the managed command-line channel.' },
      { command: 'sd300 uninstall', description: 'Remove SD-300 using its verified installation records.' },
    ]} />
}
