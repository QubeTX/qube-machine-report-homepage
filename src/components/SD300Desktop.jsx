import SD300Screenshots from './SD300Screenshots'

export default function SD300Desktop() {
  return (
    <section style={{
      padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 4rem)',
      borderBottom: '1px solid #222',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            textTransform: 'uppercase',
              transformOrigin: 'center',
            margin: '1rem 0 1.25rem 0'
          }}>
            Live Monitoring, Two Ways
          </h2>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
            fontStyle: 'italic',
            lineHeight: '1.4',
            color: '#aaa',
            maxWidth: '620px',
            margin: '0 auto'
          }}>
            Choose a desktop window or a terminal dashboard. Both use the same
            monitoring core, with live readings, searchable detail, and explanations
            of what can and cannot be observed.
          </p>
        </div>

        <SD300Screenshots />

        <p style={{
          fontFamily: 'var(--font-mono)',
          letterSpacing: '-0.5px',
          fontSize: '1rem',
          marginTop: '2rem',
          color: 'var(--fg-dim)',
          textAlign: 'center'
        }}>
          Both views update and uninstall together. Open the app with <span style={{ color: 'var(--fg-bone)' }}>sd300 gui</span> • Linux runs the app without a tray
        </p>
      </div>
    </section>
  )
}
