import DetailRows from './DetailRows'

const rows = [
  { title: 'Share a report', description: 'Save a Markdown copy when support needs the details. Normal runs save no file. Review computer, user, and network information before sharing a saved report.', href: '/docs/tr300/examples#save-a-report-for-support', linkText: 'Save a report for support' },
  { title: 'Use it in a script', description: 'Read structured JSON from standard output for your own scripts and workflows. The command does not create a report file.', href: '/docs/tr300/advanced', linkText: 'Work with JSON' },
  { title: 'Start with a quick summary', description: 'See hardware first in a local terminal, or the machine name, connection address and battery first over SSH. The summary fits the window and leaves room for your prompt.', href: '/docs/tr300/shell-integration', linkText: 'Manage the startup summary' },
]

export default function TR300Capabilities() {
  return <DetailRows id="capabilities" title="Put the report to work" rows={rows} />
}
