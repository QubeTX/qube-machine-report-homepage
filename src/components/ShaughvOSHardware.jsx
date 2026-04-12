import { useState } from 'react'

const HardwareRow = ({ target, arch, image, notes, isEven, i }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr 0.8fr 1.5fr',
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
        color: isHovered ? 'var(--accent-signal)' : 'var(--fg-bone)',
        transition: 'color 0.2s ease'
      }}>
        {target}
      </span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#888' }}>
        {arch}
      </span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#888' }}>
        {image}
      </span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#666' }}>
        {notes}
      </span>
    </div>
  )
}

export default function ShaughvOSHardware() {
  const hardware = [
    { target: 'Raspberry Pi 2/3/4', arch: 'aarch64', image: 'RPi234', notes: '1–8 GB RAM. Shared boot firmware.' },
    { target: 'Raspberry Pi 5', arch: 'aarch64', image: 'RPi5', notes: '4–8 GB RAM. Separate bootloader.' },
    { target: 'PCs / Laptops', arch: 'x86_64', image: 'NativePC', notes: 'Dual-boot or dedicated USB boot.' },
    { target: 'Intel Macs', arch: 'x86_64', image: 'NativePC', notes: 'USB boot via Startup Manager (hold Option).' },
    { target: 'Apple Silicon Macs', arch: 'aarch64', image: 'VM', notes: 'Via UTM or Parallels only (no native boot).' },
    { target: 'Virtual Machines', arch: 'x86_64 / aarch64', image: 'VM', notes: 'VirtualBox, VMware, UTM, QEMU, Parallels.' }
  ]

  return (
    <section style={{
      padding: '6rem 2rem',
      borderBottom: '1px solid #222',
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            transform: 'scaleX(1.1)',
            textAlign: 'center',
            transformOrigin: 'center'
          }}
        >
          Hardware
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            fontStyle: 'italic',
            color: '#aaa',
            textAlign: 'center',
            marginBottom: '3rem'
          }}
        >
          shaughvOS runs on almost anything with a processor.
        </p>

        <div style={{
          border: '1px solid #333',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr 0.8fr 1.5fr',
            gap: '1rem',
            padding: '0.75rem 1.5rem',
            background: '#111',
            borderBottom: '1px solid #333'
          }}>
            {['Target', 'Architecture', 'Image', 'Notes'].map((header) => (
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

          {hardware.map((h, index) => (
            <HardwareRow
              key={h.target}
              {...h}
              isEven={index % 2 === 0}
              i={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
