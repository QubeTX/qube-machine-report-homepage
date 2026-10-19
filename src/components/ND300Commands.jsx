import CommandExamples from './CommandExamples'

export default function ND300Commands() {
  return <CommandExamples product="ND-300" docs="/docs/nd300/commands"
    note="Speed tests use internet data. Review test limits and the optional M-Lab publication consent in the SpeedQX guide before running a comparison."
    rows={[
      { command: 'nd300 --fast', description: 'Check connectivity without running a speed test.' },
      { command: 'nd300 --tech --fast', description: 'Collect deeper diagnostics, still without a speed test.' },
      { command: 'speedqx', description: 'Run a bounded Quick speed test. Partial and single-source results are labeled.' },
      { command: 'nd300 --help', description: 'See options and recovery commands before requesting a change.' },
    ]} />
}
