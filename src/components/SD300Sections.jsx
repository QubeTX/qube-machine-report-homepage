import { useState } from 'react'

const SectionRow = ({ num, section, userMode, techMode, isEven }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr 1.5fr 1.5fr',
        gap: '1rem',
        padding: '1rem 1.5rem',
        background: isHovered ? '#151515' : isEven ? '#0c0c0c' : 'transparent',
        borderBottom: '1px solid #1a1a1a',
        transition: 'background 0.2s ease',
        cursor: 'default'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        color: isHovered ? 'var(--accent-signal)' : 'var(--fg-dim)',
        transition: 'color 0.2s ease',
        whiteSpace: 'nowrap',
        minWidth: '1.5rem'
      }}>
        {num}
      </span>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        color: isHovered ? 'var(--accent-signal)' : 'var(--fg-bone)',
        transition: 'color 0.2s ease',
        whiteSpace: 'nowrap'
      }}>
        {section}
      </span>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        color: '#888'
      }}>
        {userMode}
      </span>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        color: '#888'
      }}>
        {techMode}
      </span>
    </div>
  )
}

export default function SD300Sections() {
  const sections = [
    { num: '1', section: 'Overview', userMode: 'System health dashboard', techMode: 'Identity, gauges, top processes' },
    { num: '2', section: 'CPU', userMode: 'Load status, sparkline', techMode: 'Per-core bars, frequency, process table' },
    { num: '3', section: 'Memory', userMode: 'Usage summary, top consumers', techMode: 'RAM/Swap sparklines, process table' },
    { num: '4', section: 'Disk', userMode: 'Drive health, space usage', techMode: 'Mount table, filesystem details' },
    { num: '5', section: 'GPU', userMode: 'Card status, utilization', techMode: 'VRAM, driver, utilization sparkline' },
    { num: '6', section: 'Network', userMode: 'Connection status, speed', techMode: 'Interface table, throughput sparklines' },
    { num: '7', section: 'Processes', userMode: 'Running apps in plain language', techMode: 'Sortable process table with scroll' },
    { num: '8', section: 'Thermals', userMode: 'Temperature, fans, battery', techMode: 'Sensor table, fan RPM, battery details' },
    { num: '9', section: 'Drivers', userMode: 'Device health overview', techMode: 'Driver versions, dates, service status' }
  ]

  return (
    <section style={{
      padding: '6rem 2rem',
      borderTop: '1px solid #222',
      borderBottom: '1px solid #222'
    }}>
      <div style={{
        maxWidth: '900px',
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
          Diagnostic Sections
        </h2>

        <div style={{
          border: '1px solid #333',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr 1.5fr 1.5fr',
            gap: '1rem',
            padding: '0.75rem 1.5rem',
            background: '#111',
            borderBottom: '1px solid #333'
          }}>
            {['#', 'Section', 'User Mode', 'Technician Mode'].map((header) => (
              <span key={header} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--fg-dim)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {header}
              </span>
            ))}
          </div>

          {/* Rows */}
          {sections.map((s, index) => (
            <SectionRow
              key={s.num}
              num={s.num}
              section={s.section}
              userMode={s.userMode}
              techMode={s.techMode}
              isEven={index % 2 === 0}
            />
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
          Live Updates — Fast metrics refresh every 1s • Slow metrics every 5s • Drivers on-demand (press r)
        </p>
      </div>
    </section>
  )
}
