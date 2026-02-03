export default function SampleOutput() {
  const sampleOutput = `┌┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┐
├┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┤
│                    QUBETX                         │
│             TR-300 MACHINE REPORT                 │
├──────────────┬────────────────────────────────────┤
│ OS           │ Windows 11 24H2                    │
│ KERNEL       │ Windows 10.0.26200                 │
│ UPTIME       │ 3 days, 14 hours, 22 min           │
│ SHELL        │ PowerShell 7.5.0                   │
├──────────────┼────────────────────────────────────┤
│ CPU          │ AMD Ryzen 9 7950X (32) @ 4.50 GHz  │
│ GPU          │ NVIDIA GeForce RTX 4090            │
│ MEMORY       │ 47.82 GiB / 62.70 GiB (76%)        │
├──────────────┼────────────────────────────────────┤
│ DISK (C:)    │ 847.2 GB / 1.8 TB (45%)            │
│ DISK (D:)    │ 3.2 TB / 7.3 TB (44%)              │
├──────────────┼────────────────────────────────────┤
│ NET (eth0)   │ ↓ 142.5 MB/s  ↑ 23.1 MB/s          │
│ PACKETS      │ ↓ 847,291     ↑ 412,847            │
├──────────────┴────────────────────────────────────┤
│ █████████████████████░░░░░░░ CPU 71%              │
│ ██████████████████████████░░ MEM 76%              │
│ █████████████░░░░░░░░░░░░░░░ DSK 45%              │
└───────────────────────────────────────────────────┘`

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
          Unicode box-drawing • Use --ascii for legacy terminals
        </p>
      </div>
    </section>
  )
}
