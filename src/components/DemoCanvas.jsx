const Bar = ({ delay, baseHeight, enhanced }) => {
  return (
    <div style={{
      width: '40px',
      background: enhanced ? '#222' : '#1a1a1a',
      border: `1px solid ${enhanced ? '#666' : '#444'}`,
      borderRadius: '20px',
      animation: 'pulse 2s infinite ease-in-out',
      animationDelay: delay,
      height: baseHeight
    }} />
  )
}

export default function DemoCanvas() {
  return (
    <div style={{
      width: '100%',
      height: '60vh',
      borderTop: '1px solid #222',
      borderBottom: '1px solid #222',
      position: 'relative',
      overflow: 'hidden',
      background: '#080808',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        display: 'flex',
        gap: '20px',
        height: '300px',
        alignItems: 'center'
      }}>
        <Bar delay="0s" baseHeight="20%" />
        <Bar delay="0.2s" baseHeight="60%" />
        <Bar delay="0.4s" baseHeight="90%" enhanced />
        <Bar delay="0.6s" baseHeight="40%" />
        <Bar delay="0.8s" baseHeight="20%" />
      </div>

      <div style={{
        position: 'absolute',
        bottom: '20px',
        zIndex: 10,
        textAlign: 'center',
        pointerEvents: 'none'
      }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          letterSpacing: '-0.5px',
          fontSize: '0.7rem',
          color: 'var(--fg-dim)'
        }}>
          LIVE SYSTEM VISUALIZATION
        </p>
      </div>
    </div>
  )
}
