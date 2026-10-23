import CommandExamples from './CommandExamples'

export default function ND300Commands() {
  return <CommandExamples docs="/docs/nd300/commands"
    note={<>Speed tests use internet data. Quick allows up to 5 GB of test data and Deep up to 20 GB, excluding network overhead and transfers already in progress. Read the <a href="/docs/nd300/speedqx">test limits and optional M-Lab publication consent</a> before testing.</>}
    rows={[
      { command: 'nd300 --fast', description: 'Check connectivity without running a speed test.' },
      { command: 'nd300 --tech --fast', description: 'Collect deeper diagnostics, still without a speed test.' },
      { command: 'speedqx', description: 'Run a bounded Quick speed test. Partial and single-source results are labeled.' },
      { command: 'speedqx --deep', description: 'Run the longer speed profile, with a five-minute limit.' },
      { command: 'nd300 --fast --json', description: 'Print structured diagnostics without running the speed test.' },
      { command: 'nd300 --help', description: 'See options and recovery commands before requesting a change.' },
    ]} />
}
