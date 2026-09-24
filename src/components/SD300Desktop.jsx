import { useState } from 'react'
import SD300Screenshots from './SD300Screenshots'

const FeatureCard = ({ label, title, body }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        border: '1px solid #333',
        borderRadius: '4px',
        padding: '1.75rem',
        background: isHovered ? '#101010' : '#0c0c0c',
        transition: 'background 0.2s ease, transform 0.2s ease, border-color 0.2s ease',
        transform: isHovered ? 'translateY(-2px)' : 'none',
        borderColor: isHovered ? 'var(--accent-signal)' : '#333',
        minWidth: 0
      }}
    >
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        color: 'var(--fg-dim)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        {label}
      </span>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.3rem, 3vw, 1.7rem)',
        textTransform: 'uppercase',
        transform: 'scaleX(1.05)',
        transformOrigin: 'left',
        color: 'var(--fg-bone)',
        margin: '0.75rem 0 0.75rem 0',
        lineHeight: '1.1'
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        fontSize: '1rem',
        lineHeight: '1.5',
        color: '#aaa',
        margin: 0
      }}>
        {body}
      </p>
    </div>
  )
}

export default function SD300Desktop() {
  const features = [
    {
      label: 'One product',
      title: 'Terminal + App',
      body: 'The recommended installers include the terminal tool and a clickable app with the SD-300 icon: in the Windows Start menu, macOS Applications folder, or Linux application menu. Both update and uninstall together, then run independently.'
    },
    {
      label: 'Same truth',
      title: 'All Nine Sections',
      body: 'Overview, CPU, Memory, Disk, GPU, Network, Processes, Thermals, and Drivers use the same collectors in User or Technician mode. Live activity updates every second; slower hardware checks show their own freshness and availability.'
    },
    {
      label: 'Always in reach',
      title: 'Tray & Glance',
      body: 'On Windows and macOS, optional tray monitoring keeps a live system summary in reach. With it enabled, choose whether closing the window keeps monitoring in the background or quits. The terminal stays independent.'
    },
    {
      label: 'One click',
      title: 'Update From The App',
      body: 'Update now, right from the app or its tray, runs the very same trusted update the terminal performs: it closes, updates the whole product, and reopens when it is finished.'
    }
  ]

  return (
    <section style={{
      padding: '6rem 2rem',
      borderBottom: '1px solid #222',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            textTransform: 'uppercase',
            transform: 'scaleX(1.1)',
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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '1.5rem'
        }}>
          {features.map((f) => (
            <FeatureCard key={f.title} label={f.label} title={f.title} body={f.body} />
          ))}
        </div>

        <p style={{
          fontFamily: 'var(--font-mono)',
          letterSpacing: '-0.5px',
          fontSize: '0.7rem',
          marginTop: '2rem',
          color: '#555',
          textAlign: 'center'
        }}>
          Launch or focus the app any time with <span style={{ color: 'var(--fg-bone)' }}>sd300 gui</span> • Linux runs the app without a tray
        </p>
      </div>
    </section>
  )
}
