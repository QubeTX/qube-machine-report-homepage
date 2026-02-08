import { useState } from 'react'

const DiagnosticRow = ({ num, diagnostic, description, isEven, isSeparator }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      {isSeparator && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr 2fr',
          gap: '1rem',
          padding: '0.5rem 1.5rem',
          background: '#111',
          borderBottom: '1px solid #333',
          borderTop: '1px solid #333'
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--fg-dim)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            gridColumn: '1 / -1'
          }}>
            DEEP DIAGNOSTICS (TECHNICIAN MODE)
          </span>
        </div>
      )}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr 2fr',
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
          minWidth: '2rem'
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
          {diagnostic}
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          color: '#888'
        }}>
          {description}
        </span>
      </div>
    </>
  )
}

export default function ND300Diagnostics() {
  const core = [
    { num: '1', diagnostic: 'Network Adapters', description: 'Active interface detection and status' },
    { num: '2', diagnostic: 'IP Configuration', description: 'IPv4/IPv6 address and subnet info' },
    { num: '3', diagnostic: 'Default Gateway', description: 'Gateway reachability and latency' },
    { num: '4', diagnostic: 'DNS Resolution', description: 'DNS server response and resolution test' },
    { num: '5', diagnostic: 'Public IP', description: 'External IP address and geolocation' },
    { num: '6', diagnostic: 'Latency', description: 'ICMP ping to multiple endpoints' },
    { num: '7', diagnostic: 'Speed Test', description: 'Download and upload throughput' },
    { num: '8', diagnostic: 'Port Connectivity', description: 'Common port reachability check' }
  ]

  const deep = [
    { num: '9', diagnostic: 'ARP Table', description: 'MAC address resolution cache' },
    { num: '10', diagnostic: 'Routing Table', description: 'System route entries and metrics' },
    { num: '11', diagnostic: 'Active Connections', description: 'Established TCP/UDP connections' },
    { num: '12', diagnostic: 'Listening Ports', description: 'Open ports and bound services' },
    { num: '13', diagnostic: 'DHCP Lease', description: 'DHCP server and lease information' },
    { num: '14', diagnostic: 'Protocol Stats', description: 'TCP/UDP/ICMP packet statistics' },
    { num: '15', diagnostic: 'Adapter Hardware', description: 'NIC hardware and driver details' },
    { num: '16', diagnostic: 'Proxy Detection', description: 'System proxy configuration' },
    { num: '17', diagnostic: 'VPN Detection', description: 'Active VPN tunnel detection' },
    { num: '18', diagnostic: 'Firewall Status', description: 'Firewall state and profile info' },
    { num: '19', diagnostic: 'DNS Cache', description: 'Local DNS resolver cache entries' },
    { num: '20', diagnostic: 'IPv6 Connectivity', description: 'IPv6 address and reachability test' },
    { num: '21', diagnostic: 'MTU Discovery', description: 'Path MTU and fragmentation check' },
    { num: '22', diagnostic: 'Connection States', description: 'TCP state distribution analysis' },
    { num: '23', diagnostic: 'Bufferbloat Detection', description: 'Latency under load grading (A+ to F)' },
    { num: '24', diagnostic: 'Reverse DNS', description: 'PTR record lookup for public IP' },
    { num: '25', diagnostic: 'TLS Inspection', description: 'Certificate chain and cipher validation' }
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
          Diagnostics
        </h2>

        <div style={{
          border: '1px solid #333',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr 2fr',
            gap: '1rem',
            padding: '0.75rem 1.5rem',
            background: '#111',
            borderBottom: '1px solid #333'
          }}>
            {['#', 'Diagnostic', 'Description'].map((header) => (
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

          {/* Core rows */}
          {core.map((d, index) => (
            <DiagnosticRow
              key={d.num}
              num={d.num}
              diagnostic={d.diagnostic}
              description={d.description}
              isEven={index % 2 === 0}
            />
          ))}

          {/* Deep rows with separator on first */}
          {deep.map((d, index) => (
            <DiagnosticRow
              key={d.num}
              num={d.num}
              diagnostic={d.diagnostic}
              description={d.description}
              isEven={(index + core.length) % 2 === 0}
              isSeparator={index === 0}
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
          User mode runs 1–8 • Technician mode runs all 25
        </p>
      </div>
    </section>
  )
}
