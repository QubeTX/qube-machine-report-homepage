export default function ShaughvOSPitch() {
  return (
    <section style={{
      padding: 'clamp(6rem, 12vw, 10rem) 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      borderBottom: '1px solid #222'
    }}>
      <div style={{ maxWidth: '900px' }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'var(--accent-signal)',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          marginBottom: '3rem'
        }}>
          What is shaughvOS?
        </p>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
          fontStyle: 'italic',
          fontWeight: '400',
          lineHeight: '1.3',
          color: 'var(--fg-bone)',
          marginBottom: '3rem'
        }}>
          A complete operating system that fits on a USB drive. Boot it on anything — a Raspberry Pi, an old laptop, a failing machine — and get a beautiful, ready-to-use desktop with professional diagnostic tools built in.
        </h2>

        <div style={{
          width: '60px',
          height: '1px',
          background: 'var(--accent-signal)',
          margin: '0 auto 3rem'
        }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
          gap: 'clamp(2rem, 4vw, 4rem)',
          textAlign: 'left'
        }}>
          <div style={{ padding: '2rem 0' }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              color: 'var(--accent-signal)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              display: 'block',
              marginBottom: '1.5rem'
            }}>
              For Everyone
            </span>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              fontStyle: 'italic',
              lineHeight: '1.5',
              color: '#bbb'
            }}>
              Your computer isn't working. You don't know why. Plug in shaughvOS, boot up, and it tells you exactly what's wrong — in plain language. Check your internet speed. See what's using all your memory. Find out why everything is slow. No expertise needed.
            </p>
          </div>

          <div style={{ padding: '2rem 0' }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              color: 'var(--accent-signal)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              display: 'block',
              marginBottom: '1.5rem'
            }}>
              For Technicians
            </span>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              fontStyle: 'italic',
              lineHeight: '1.5',
              color: '#bbb'
            }}>
              Need a full diagnostic workstation? shaughvOS ships with 25 network checks, real-time system monitoring, machine reports with CPU and memory graphs, bufferbloat grading, and TLS inspection. Boot from USB, diagnose, move on.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
