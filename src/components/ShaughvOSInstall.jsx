import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TabButton = ({ children, active, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      style={{
        background: active ? 'var(--accent-signal)' : 'transparent',
        border: `2px solid ${active ? 'var(--accent-signal)' : 'var(--fg-bone)'}`,
        color: active ? 'var(--bg-void)' : isHovered ? 'var(--accent-signal)' : 'var(--fg-bone)',
        fontFamily: 'var(--font-mono)',
        fontWeight: '700',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        borderRadius: '6px',
        textTransform: 'uppercase',
        transition: 'all 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
        borderColor: isHovered && !active ? 'var(--accent-signal)' : active ? 'var(--accent-signal)' : 'var(--fg-bone)',
        transform: isHovered && !active ? 'translateY(-2px)' : 'none',
        boxShadow: isHovered && !active ? '0 4px 12px rgba(255, 0, 212, 0.15)' : 'none',
        fontSize: '0.75rem'
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  )
}

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        background: copied ? 'var(--accent-signal)' : 'var(--fg-bone)',
        color: 'var(--bg-void)',
        border: 'none',
        padding: '4px 8px',
        borderRadius: '2px',
        fontSize: '0.6rem',
        fontFamily: 'var(--font-mono)',
        cursor: 'pointer',
        opacity: isHovered || copied ? 1 : 0.5,
        transition: 'all 0.2s ease',
        textTransform: 'uppercase'
      }}
    >
      {copied ? 'COPIED!' : 'COPY'}
    </button>
  )
}

const DownloadLink = ({ children, href }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        color: isHovered ? 'var(--accent-signal)' : 'var(--fg-bone)',
        textDecoration: 'none',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        fontWeight: '700',
        borderBottom: `1px solid ${isHovered ? 'var(--accent-signal)' : 'var(--fg-bone)'}`,
        paddingBottom: '1px',
        transition: 'all 0.2s ease'
      }}
    >
      {children}
    </a>
  )
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640)
  useState(() => {
    const handler = () => setIsMobile(window.innerWidth <= 640)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  })
  return isMobile
}

const ImageRow = ({ image, hardware, flash, downloadUrl, isoUrl, isEven }) => {
  const [isHovered, setIsHovered] = useState(false)
  const isMobile = useIsMobile()

  const downloadLinks = isoUrl ? (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
      <DownloadLink href={downloadUrl}>IMG.XZ</DownloadLink>
      <DownloadLink href={isoUrl}>ISO</DownloadLink>
    </div>
  ) : (
    <DownloadLink href={downloadUrl}>IMG.XZ</DownloadLink>
  )

  if (isMobile) {
    return (
      <div
        style={{
          padding: '1rem 1.5rem',
          background: isEven ? '#0c0c0c' : 'transparent',
          borderBottom: '1px solid #1a1a1a',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--fg-bone)', fontWeight: '700' }}>
            {image}
          </span>
          {downloadLinks}
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#888' }}>
          {hardware}
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#666', marginTop: '0.25rem' }}>
          {flash}
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1.5fr 1.5fr 0.8fr',
        gap: '1rem',
        padding: '1rem 1.5rem',
        background: isHovered ? '#151515' : isEven ? '#0c0c0c' : 'transparent',
        borderBottom: '1px solid #1a1a1a',
        transition: 'background 0.2s ease',
        cursor: 'default',
        alignItems: 'center'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: isHovered ? 'var(--accent-signal)' : 'var(--fg-bone)', transition: 'color 0.2s ease', fontWeight: '700' }}>
        {image}
      </span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#888' }}>
        {hardware}
      </span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#666' }}>
        {flash}
      </span>
      {downloadLinks}
    </div>
  )
}

export default function ShaughvOSInstall() {
  const [selectedTab, setSelectedTab] = useState('images')
  const isMobile = useIsMobile()

  const images = [
    {
      image: 'Native PC / USB',
      hardware: 'PCs, laptops, Intel Macs (x86_64)',
      flash: 'Etcher/Rufus to USB, or boot ISO',
      downloadUrl: 'https://github.com/RealEmmettS/shaughvOS/releases/latest/download/shaughvOS_NativePC-x86_64.img.xz',
      isoUrl: 'https://github.com/RealEmmettS/shaughvOS/releases/latest/download/shaughvOS_NativePC-x86_64_Installer.iso'
    },
    {
      image: 'Raspberry Pi 5',
      hardware: 'RPi 5 (ARM 64-bit)',
      flash: 'Balena Etcher or dd to microSD',
      downloadUrl: 'https://github.com/RealEmmettS/shaughvOS/releases/latest/download/shaughvOS_RPi5-aarch64.img.xz'
    },
    {
      image: 'Raspberry Pi 2/3/4',
      hardware: 'RPi 2, 3, 3B+, 4, 4B (ARM 64-bit)',
      flash: 'Balena Etcher or dd to microSD',
      downloadUrl: 'https://github.com/RealEmmettS/shaughvOS/releases/latest/download/shaughvOS_RPi234-aarch64.img.xz'
    },
    {
      image: 'Virtual Machine',
      hardware: 'VirtualBox, VMware, UTM, QEMU',
      flash: 'Raw disk image or boot ISO installer',
      downloadUrl: 'https://github.com/RealEmmettS/shaughvOS/releases/latest/download/shaughvOS_VM-x86_64.img.xz',
      isoUrl: 'https://github.com/RealEmmettS/shaughvOS/releases/latest/download/shaughvOS_VM-x86_64_Installer.iso'
    }
  ]

  const debianCommand = 'sudo bash -c "$(curl -sSfL https://raw.githubusercontent.com/RealEmmettS/shaughvOS/master/.build/images/shaughvos-installer)"'

  return (
    <section id="install" style={{
      padding: '6rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          transform: 'scaleX(1.1)',
          textAlign: 'center'
        }}
      >
        Get Started
      </h2>

      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1rem, 2vw, 1.3rem)',
          fontStyle: 'italic',
          color: '#aaa',
          textAlign: 'center',
          marginBottom: '3rem',
          maxWidth: '600px'
        }}
      >
        Download a pre-built image for your hardware, or install on an existing Debian system.
      </p>

      <div style={{
        display: 'flex',
        gap: '0.75rem',
        marginBottom: '3rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <TabButton
          active={selectedTab === 'images'}
          onClick={() => setSelectedTab('images')}
        >
          Pre-Built Images
        </TabButton>
        <TabButton
          active={selectedTab === 'debian'}
          onClick={() => setSelectedTab('debian')}
        >
          Existing Debian
        </TabButton>
      </div>

      <div style={{ width: '100%', maxWidth: '900px' }}>
        <AnimatePresence mode="wait">
          {selectedTab === 'images' ? (
            <motion.div
              key="images"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{
                border: '1px solid #333',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                {/* Header */}
                {!isMobile ? (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 1.5fr 1.5fr 0.8fr',
                    gap: '1rem',
                    padding: '0.75rem 1.5rem',
                    background: '#111',
                    borderBottom: '1px solid #333'
                  }}>
                    {['Image', 'Hardware', 'How to Flash', ''].map((header) => (
                      <span key={header || 'dl'} style={{
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
                ) : (
                  <div style={{
                    padding: '0.5rem 1.5rem',
                    background: '#111',
                    borderBottom: '1px solid #333'
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--fg-dim)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      PRE-BUILT IMAGES
                    </span>
                  </div>
                )}

                {images.map((img, index) => (
                  <ImageRow
                    key={img.image}
                    {...img}
                    isEven={index % 2 === 0}
                  />
                ))}
              </div>

              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                marginTop: '1.5rem',
                color: '#555',
                textAlign: 'center'
              }}>
                All images and SHA256 checksums available on the{' '}
                <a href="https://github.com/RealEmmettS/shaughvOS/releases/latest" target="_blank" rel="noopener noreferrer" style={{ color: '#555', textDecoration: 'underline' }}>
                  Releases
                </a>{' '}page.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="debian"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div style={{
                background: '#000',
                border: '1px solid #333',
                borderRadius: '4px',
                padding: '2rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '10px',
                  background: 'var(--bg-void)',
                  padding: '0 10px',
                  fontSize: '0.7rem',
                  color: 'var(--fg-dim)'
                }}>
                  TERMINAL // DEBIAN 12+
                </span>

                <CopyButton text={debianCommand} />

                <div style={{ marginBottom: '0.75rem' }}>
                  <span style={{ display: 'block', color: '#666', marginBottom: '0.25rem' }}>
                    # Install on a running Debian 12 (Bookworm) or later system
                  </span>
                  <span style={{ display: 'block', color: 'var(--fg-bone)', wordBreak: 'break-all' }}>
                    <span style={{ color: 'var(--accent-signal)' }}>$ </span>
                    {debianCommand}
                  </span>
                </div>

                <div>
                  <span style={{ display: 'block', color: '#666' }}>
                    # Reboot after installation completes
                  </span>
                </div>
              </div>

              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                marginTop: '1.5rem',
                color: '#555',
                textAlign: 'center'
              }}>
                Requires a running Debian 12+ system with internet access
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p style={{
        fontFamily: 'var(--font-mono)',
        letterSpacing: '-0.5px',
        fontSize: '0.7rem',
        marginTop: '3rem',
        color: '#555',
        textAlign: 'center'
      }}>
        GPLv2 License (DietPi foundation) &bull; PolyForm Noncommercial License (QubeTX diagnostic tools)
      </p>
    </section>
  )
}
