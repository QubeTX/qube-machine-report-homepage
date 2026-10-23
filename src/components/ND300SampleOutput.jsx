import SampleReport from './SampleReport'

export default function ND300SampleOutput() {
  // Unicode box-drawing table generator
  const W = 62
  const C1 = 22 // Category column
  const C2 = 10 // Status column
  const C3 = W - C1 - C2 - 4 // Details column (minus 4 for borders)

  const pad = (s, w) => s + ' '.repeat(Math.max(0, w - s.length))
  const topBorder = '┌' + '─'.repeat(C1) + '┬' + '─'.repeat(C2) + '┬' + '─'.repeat(C3) + '┐'
  const midBorder = '├' + '─'.repeat(C1) + '┼' + '─'.repeat(C2) + '┼' + '─'.repeat(C3) + '┤'
  const botBorder = '└' + '─'.repeat(C1) + '┴' + '─'.repeat(C2) + '┴' + '─'.repeat(C3) + '┘'
  const row = (cat, status, details) =>
    '│' + pad(' ' + cat, C1) + '│' + pad(' ' + status, C2) + '│' + pad(' ' + details, C3) + '│'
  const headerRow = row('Category', 'Status', 'Details')

  const titleW = C1 + C2 + C3 + 2
  const titleTop = '┌' + '─'.repeat(titleW) + '┐'
  const titleMid = '├' + '─'.repeat(C1) + '┬' + '─'.repeat(C2) + '┬' + '─'.repeat(C3) + '┤'
  const titleBot = '└' + '─'.repeat(titleW) + '┘'
  const titleRow = (s) => '│' + pad(' ' + s, titleW) + '│'

  const sampleOutput = [
    titleTop,
    titleRow('ND-300 Network Diagnostic'),
    titleRow(''),
    titleMid,
    headerRow,
    midBorder,
    row('Network Adapters',  'OK',   'Ethernet (1Gbps)'),
    row('IP Configuration',  'OK',   '192.168.1.42/24'),
    row('Default Gateway',   'OK',   '192.168.1.1 (1.2ms)'),
    row('DNS Resolution',    'OK',   '1.1.1.1 (12ms)'),
    row('Public IP',         'OK',   '203.0.113.47 (US)'),
    row('Latency',           'OK',   'Avg 14ms to 4 hosts'),
    row('Speed Test',        'OK',   '↓ 487 ↑ 92 Mbps (14ms)'),
    row('Port Connectivity', 'WARN', '443 OK, 8080 timeout'),
    botBorder,
    '',
    '  8 diagnostics completed — 7 OK, 1 Warn, 0 Fail',
  ].join('\n')

  return <SampleReport product="ND-300" output={sampleOutput} note="Illustrative report. Your checks and results depend on the connection and options you choose." />
}
