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
          A custom, lightweight operating system built on a Debian foundation — pre-configured and ready to use out of the box. Boot it on a Raspberry Pi, an old laptop, a virtual machine, or run it live from a USB drive without installing.
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
              For Everyday Users
            </span>
            <ul style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
              fontStyle: 'italic',
              lineHeight: '1.6',
              color: '#bbb',
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}>
              <li><strong style={{ color: 'var(--fg-bone)' }}>A beautiful, fast desktop</strong> — boots into a polished Xfce desktop with the Dracula dark theme, custom fonts, and a clean taskbar. No bloatware, no clutter.</li>
              <li><strong style={{ color: 'var(--fg-bone)' }}>Try before you install</strong> — boot the installer ISO to get a full live desktop you can explore. If you like it, click "Install" and it's on your disk in minutes.</li>
              <li><strong style={{ color: 'var(--fg-bone)' }}>Developer tools included</strong> — Node.js, npm, and Claude Code CLI come pre-installed, so you can start coding right away.</li>
              <li><strong style={{ color: 'var(--fg-bone)' }}>Easy mode switching</strong> — type <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85em', color: 'var(--fg-bone)' }}>desktop on</code> for the graphical desktop or <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85em', color: 'var(--fg-bone)' }}>desktop off</code> for a minimal console.</li>
            </ul>
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
              For Technicians & IT Professionals
            </span>
            <ul style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
              fontStyle: 'italic',
              lineHeight: '1.6',
              color: '#bbb',
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}>
              <li><strong style={{ color: 'var(--fg-bone)' }}>Instant system diagnostics</strong> — three professional-grade QubeTX tools run automatically on every login, giving you CPU, memory, disk, and network status at a glance.</li>
              <li><strong style={{ color: 'var(--fg-bone)' }}>Network troubleshooting</strong> — 17 deep diagnostic checks including DNS resolution, gateway reachability, packet loss, MTU testing, and quad-provider speed testing with bufferbloat grading.</li>
              <li><strong style={{ color: 'var(--fg-bone)' }}>Portable diagnostic toolkit</strong> — boot from a USB drive on any x86_64 machine to diagnose problems without touching the existing OS.</li>
              <li><strong style={{ color: 'var(--fg-bone)' }}>Headless server ready</strong> — switch to console mode for a minimal-footprint server. Perfect for Raspberry Pi home labs, media servers, or IoT projects.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
