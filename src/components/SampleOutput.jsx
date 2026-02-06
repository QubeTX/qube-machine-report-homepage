export default function SampleOutput() {
  const W = 52
  const L = 14 // left column width (including borders)
  const R = W - L - 1 // right column width (excluding final border)

  const pad = (s, w) => s + ' '.repeat(Math.max(0, w - s.length))
  const hr = (l, m, r) => l + '='.repeat(L - 2) + m + '='.repeat(R - 1) + r
  const hrFull = (l, r) => l + '='.repeat(W - 2) + r
  const row = (k, v) => '| ' + pad(k, L - 3) + '| ' + pad(v, R - 2) + '|'
  const fullRow = (s) => '| ' + pad(s, W - 4) + ' |'
  const bar = (pct, label) => {
    const barW = 28
    const filled = Math.round(barW * pct / 100)
    const b = '#'.repeat(filled) + '.'.repeat(barW - filled)
    return fullRow(b + ' ' + label)
  }

  const sampleOutput = [
    hrFull('+', '+'),
    fullRow(''),
    fullRow('          QUBETX DEVELOPER TOOLS'),
    fullRow('           TR-300 MACHINE REPORT'),
    hr('+', '+', '+'),
    row('OS',         'Windows 11 24H2'),
    row('KERNEL',     'Windows 10.0.26200'),
    row('UPTIME',     '3 days, 14 hours, 22 min'),
    row('SHELL',      'PowerShell 7.5.0'),
    hr('+', '+', '+'),
    row('CPU',        'AMD Ryzen 9 7950X (32) @ 4.5 GHz'),
    row('GPU',        'NVIDIA GeForce RTX 5070'),
    row('MEMORY',     '47.82 GiB / 62.70 GiB (76%)'),
    hr('+', '+', '+'),
    row('DISK (C:)',  '847.2 GB / 1.8 TB (45%)'),
    row('DISK (D:)',  '3.2 TB / 7.3 TB (44%)'),
    hr('+', '+', '+'),
    row('NET (eth0)', 'DN 142.5 MB/s  UP 23.1 MB/s'),
    row('PACKETS',    'DN 847,291     UP 412,847'),
    hrFull('+', '+'),
    bar(71, 'CPU 71%'),
    bar(76, 'MEM 76%'),
    bar(45, 'DSK 45%'),
    hrFull('+', '+'),
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
            SAMPLE OUTPUT // TR-300
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
          ASCII table output • Use --json for machine-readable format
        </p>
      </div>
    </section>
  )
}
