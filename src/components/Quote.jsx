export default function Quote() {
  return (
    <section style={{
      padding: '6rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderTop: '1px solid #222',
      borderBottom: '1px solid #222'
    }}>
      <div style={{
        maxWidth: '700px',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: 'var(--fg-dim)',
          marginBottom: '2rem'
        }}>
          ON SYSTEM ADMINISTRATION
        </h3>

        <blockquote style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
          lineHeight: '1.4',
          color: 'var(--fg-bone)',
          fontStyle: 'italic',
          margin: 0
        }}>
          "Technology is dominated by two types of people: those who understand what they do not manage, and those who manage what they do not understand."
        </blockquote>

        <cite style={{
          display: 'block',
          marginTop: '1.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          color: 'var(--accent-signal)',
          fontStyle: 'normal'
        }}>
          — Brian W. Kernighan
        </cite>
      </div>
    </section>
  )
}
