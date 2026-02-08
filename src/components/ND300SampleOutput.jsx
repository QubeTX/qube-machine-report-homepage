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
    row('Speed Test',        'OK',   '↓ 487 Mbps ↑ 92 Mbps'),
    row('Port Connectivity', 'WARN', '443 OK, 8080 timeout'),
    botBorder,
    '',
    '  8 diagnostics completed — 7 OK, 1 Warn, 0 Fail',
  ].join('\n')

  return (
    <section style={{
      padding: '6rem 2rem',
      borderBottom: '1px solid #222'
    }}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          textTransform: 'uppercase',
          marginBottom: '3rem',
          transform: 'scaleX(1.1)',
          textAlign: 'center',
          transformOrigin: 'center'
        }}>
          Sample Output
        </h2>

        <div style={{
          position: 'relative',
          width: '100%'
        }}>
          <span style={{
            position: 'absolute',
            top: '-10px',
            left: '10px',
            background: 'var(--bg-void)',
            padding: '0 10px',
            fontSize: '0.7rem',
            color: 'var(--fg-dim)',
            fontFamily: 'var(--font-mono)',
            zIndex: 1
          }}>
            SAMPLE OUTPUT // ND-300
          </span>

          <div style={{
            background: '#000',
            border: '1px solid #333',
            borderRadius: '4px',
            padding: '2rem',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}>
            <pre style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.6rem, 1.5vw, 0.8rem)',
              lineHeight: '1.4',
              color: 'var(--fg-bone)',
              margin: 0,
              whiteSpace: 'pre',
              tabSize: 4
            }}>
              {sampleOutput}
            </pre>
          </div>
        </div>

        <p style={{
          fontFamily: 'var(--font-mono)',
          letterSpacing: '-0.5px',
          fontSize: '0.7rem',
          marginTop: '2rem',
          color: '#555',
          textAlign: 'center'
        }}>
          Unicode box-drawing output • Use --ascii for ASCII fallback • Use --json for machine-readable format
        </p>
      </div>
    </section>
  )
}
