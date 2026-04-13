import { useState } from 'react'

const FeatureRow = ({ index, title, description, i }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        borderBottom: '1px solid #222',
        padding: '2rem 0',
        transition: 'background 0.2s ease',
        background: isHovered ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
        cursor: 'default',
        gap: '1.5rem'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        color: isHovered ? 'var(--accent-signal)' : 'var(--fg-dim)',
        transition: 'color 0.2s ease',
        flexShrink: 0,
        width: '2rem'
      }}>
        {index}
      </span>

      <div style={{ flex: 1 }}>
        <h4 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
          textTransform: 'uppercase',
          transform: 'scaleX(1.1)',
          transformOrigin: 'left',
          marginBottom: '0.5rem',
          color: 'var(--fg-bone)'
        }}>
          {title}
        </h4>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          textTransform: 'uppercase',
          lineHeight: '1.4',
          color: 'var(--fg-dim)'
        }}>
          {description}
        </div>
      </div>
    </div>
  )
}

export default function ShaughvOSFeatures() {
  const features = [
    { title: 'Runs on Anything', description: 'Raspberry Pi 2 through 5, PCs, laptops, Intel Macs, virtual machines. Boot from a USB on a machine with a failing hard drive — it still works.' },
    { title: 'Try Before You Install', description: 'The installer ISO boots a full shaughvOS live desktop in RAM. Explore everything — the Xfce desktop, diagnostic tools, terminal — before committing. Click "Install" when you\'re ready.' },
    { title: 'Built-in Diagnostics', description: 'The QubeTX 300 Series comes pre-installed: TR-300 machine reports, ND-300 network diagnostics, SD-300 system monitoring, and SpeedQX speed tests.' },
    { title: 'Developer Tools Included', description: 'Node.js, npm, and Claude Code CLI come pre-installed. Start coding, automating, or building right out of the box — no setup required.' },
    { title: 'Beautiful Dark Theme', description: 'Dracula-themed Xfce desktop with Makira sans-serif for the UI, IBM Plex Mono for the terminal, custom wallpaper, and Papirus icons.' },
    { title: 'Instant System Report', description: 'TR-300 runs automatically every time you open a terminal. CPU, memory, disk, network — your machine\'s health at a glance, without lifting a finger.' },
    { title: 'Network Troubleshooting', description: '8 checks for everyday users — is my WiFi working? Is DNS resolving? How fast is my connection? 25 deep diagnostics for technicians — routing tables, TLS inspection, bufferbloat grading.' },
    { title: 'Real-Time Monitoring', description: 'SD-300 interactive TUI with 9 monitoring sections: CPU, memory, disk I/O, network throughput, processes, temperatures, and more. All in real time.' },
    { title: 'Desktop or Console', description: 'Switch between a full graphical desktop and a raw terminal with a single command. Desktop on. Desktop off. That simple.' },
    { title: 'Calamares Installer', description: 'The industry-standard Linux installer used by Manjaro, KDE Neon, and 20+ distros. Handles partitioning, filesystem creation, and GRUB installation — dynamically configured for your hardware.' },
    { title: 'Lightweight Foundation', description: 'Built on DietPi and Debian. Minimal footprint, maximum capability. The entire OS runs comfortably on a Raspberry Pi with 1GB of RAM.' },
    { title: 'Always Up to Date', description: 'OTA updates pull from the master branch automatically. New features and fixes arrive without reinstalling — your diagnostic OS stays current.' }
  ]

  return (
    <section style={{
      padding: '6rem 2rem',
      borderTop: '1px solid #222',
      borderBottom: '1px solid #222',
      overflow: 'hidden',
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
            marginBottom: '3rem',
            transform: 'scaleX(1.1)',
            textAlign: 'center',
            transformOrigin: 'center'
          }}
        >
          Features
        </h2>

        <div style={{ borderTop: '1px solid #222' }}>
          {features.map((f, i) => (
            <FeatureRow
              key={f.title}
              index={String(i + 1).padStart(2, '0')}
              title={f.title}
              description={f.description}
              i={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
