export default function WB300SampleOutput() {
  // Mock of the WB-300 TUI — a header, a worktree list with agent badges,
  // dirty / ahead-behind markers, and a collision warning, then a status bar.
  const W = 74
  const top = '┌' + '─'.repeat(W - 2) + '┐'
  const mid = '├' + '─'.repeat(W - 2) + '┤'
  const bot = '└' + '─'.repeat(W - 2) + '┘'
  const pad = (s, w) => s + ' '.repeat(Math.max(0, w - s.length))
  const line = (s) => '│ ' + pad(s, W - 4) + ' │'

  const sampleOutput = [
    top,
    line('WB-300  ●live   repo: acme-api   branches: 14 local / 9 remote'),
    mid,
    line(' WORKTREES                          STATUS        AGENT'),
    line('─'.repeat(W - 4)),
    line(' main                               clean         —'),
    line(' emmett/wb-0608         (you)       ●3 ~2  ↑1     ● claude  pid 48213'),
    line(' feat/login-rework                  ●1     ↑2 ↓1  ● codex   pid 51077'),
    line('⚠feat/api-pagination               ●5            ● claude  pid 52910'),
    line('⚠fix/rate-limit-headers            ~4            build     pid 53344'),
    line(' chore/bump-deps                    clean  ↓3     —  (ready to remove)'),
    mid,
    line('⚠ COLLISION  src/router.rs  touched by feat/api-pagination + fix/rate-limit'),
    line('  HIGH-RISK  Cargo.lock     touched by chore/bump-deps + feat/login-rework'),
    bot,
    '',
    '  6 worktrees — 4 active, 1 ready to remove • 2 collisions • fetched 2m ago',
    '  [Tab] switch  [j/k] move  [f] fetch  [x] remove  [:] palette  [?] help',
  ].join('\n')

  return (
    <section style={{
      padding: '6rem 2rem',
      borderBottom: '1px solid #222'
    }}>
      <div style={{
        maxWidth: '760px',
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
          The Cockpit
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
            LIVE TUI // WB-300
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
          ● live agent badge • ~ changed • ↑↓ ahead/behind • ⚠ collision • all updating live
        </p>
      </div>
    </section>
  )
}
