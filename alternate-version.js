import React, { useState, useEffect } from 'react';

const customStyles = {
  root: {
    '--bg': '#080808',
    '--fg': '#BEBEB6',
    '--fg-dim': '#666660',
    '--accent': '#FF4DA6',
    '--font-display': '"Arial Black", "Impact", sans-serif',
    '--font-serif': '"Times New Roman", Times, serif',
    '--font-mono': '"Courier New", Courier, monospace',
    '--font-ui': '"Helvetica Neue", Helvetica, Arial, sans-serif'
  }
};

const Button = ({ children, onClick, variant = 'default', ...props }) => {
  const baseStyle = {
    background: 'transparent',
    border: '1px solid var(--fg)',
    color: 'var(--fg)',
    fontFamily: 'var(--font-ui)',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    padding: '0.5rem 1.2rem',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '40px'
  };

  const primaryStyle = {
    ...baseStyle,
    backgroundColor: 'var(--accent)',
    borderColor: 'var(--accent)',
    color: 'var(--bg)',
    fontWeight: '700'
  };

  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle = variant === 'primary' 
    ? { backgroundColor: '#fff', borderColor: '#fff', color: '#000' }
    : { borderColor: 'var(--accent)', color: 'var(--accent)' };

  return (
    <button
      style={{
        ...(variant === 'primary' ? primaryStyle : baseStyle),
        ...(isHovered ? hoverStyle : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const CodeBlock = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        fontFamily: 'var(--font-mono)',
        background: '#111',
        color: 'var(--fg)',
        padding: '1rem',
        borderRadius: '4px',
        marginTop: '1rem',
        fontSize: '0.85rem',
        border: '1px solid #222',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <span>{children}</span>
      <span
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '0.6rem',
          background: 'var(--fg)',
          color: 'var(--bg)',
          padding: '2px 6px',
          borderRadius: '2px',
          opacity: isHovered ? '1' : '0.5',
          cursor: 'pointer',
          transition: 'opacity 0.2s ease'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigator.clipboard.writeText(children)}
      >
        COPY
      </span>
    </div>
  );
};

const InstallCard = ({ title, description, command }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '150px'
    }}
  >
    <h3
      style={{
        fontFamily: 'var(--font-ui)',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: 'var(--fg-dim)',
        marginBottom: '1rem'
      }}
    >
      {title}
    </h3>
    <div
      style={{
        fontFamily: 'var(--font-ui)',
        fontSize: '0.65rem',
        textTransform: 'uppercase',
        lineHeight: '1.4',
        color: 'var(--fg-dim)'
      }}
      dangerouslySetInnerHTML={{ __html: description }}
    />
    <CodeBlock>{command}</CodeBlock>
  </div>
);

const DemoRow = ({ title, description, onViewLive }) => (
  <div
    style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      borderBottom: '1px solid #222',
      padding: '2rem 0'
    }}
  >
    <div>
      <h4
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2rem',
          textTransform: 'uppercase',
          transform: 'scaleX(1.1)',
          marginBottom: '0.5rem',
          color: 'var(--fg)'
        }}
      >
        {title}
      </h4>
      <div
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '0.65rem',
          textTransform: 'uppercase',
          lineHeight: '1.4',
          color: 'var(--fg-dim)'
        }}
      >
        {description}
      </div>
    </div>
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button onClick={onViewLive}>VIEW LIVE</Button>
    </div>
  </div>
);

const SizeBadge = ({ children, active = false }) => (
  <span
    style={{
      border: active ? '1px solid var(--accent)' : '1px solid var(--fg-dim)',
      color: active ? 'var(--bg)' : 'var(--fg-dim)',
      fontSize: '0.6rem',
      padding: '2px 4px',
      borderRadius: '2px',
      fontFamily: 'var(--font-ui)',
      background: active ? 'var(--accent)' : 'transparent',
      fontWeight: active ? 'bold' : 'normal'
    }}
  >
    {children}
  </span>
);

const App = () => {
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
      }

      body {
        background-color: var(--bg);
        color: var(--fg);
        font-family: var(--font-ui);
        overflow-x: hidden;
        width: 100vw;
      }

      @keyframes drift {
        0% { transform: translateX(0); }
        50% { transform: translateX(-10px); }
        100% { transform: translateX(0); }
      }

      .drift-animation {
        animation: drift 4s infinite ease-in-out;
      }
    `;
    document.head.appendChild(styleElement);
    return () => document.head.removeChild(styleElement);
  }, []);

  const handleViewDemo = (demoName) => {
    console.log(`Viewing demo: ${demoName}`);
  };

  const handleInstallCLI = () => {
    console.log('Install CLI clicked');
  };

  const handleReadDocs = () => {
    console.log('Read Docs clicked');
  };

  const handleEnterprise = () => {
    console.log('Enterprise clicked');
  };

  const handleContactSales = () => {
    console.log('Contact Sales clicked');
  };

  return (
    <div style={customStyles.root}>
      <div
        className="drift-animation"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'var(--accent)',
          position: 'absolute',
          top: '2rem',
          right: '2rem',
          zIndex: 1000
        }}
      >
        SYS_READY // V.3.0.1
      </div>

      {/* Hero Section */}
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '800px',
            height: '300px',
            border: '4px solid var(--fg)',
            borderRadius: '150px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 40px',
            margin: '6rem 0',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              width: '20%',
              height: '100%',
              background: 'transparent',
              borderLeft: '4px solid var(--fg)',
              borderRight: '4px solid var(--fg)',
              borderRadius: '50%',
              transform: 'scaleY(1.2)'
            }}
          />
          <div
            style={{
              width: '20%',
              height: '100%',
              background: 'transparent',
              borderLeft: '4px solid var(--fg)',
              borderRight: '4px solid var(--fg)',
              borderRadius: '50%',
              transform: 'scaleY(1.2)'
            }}
          />
          <div
            style={{
              width: '20%',
              height: '100%',
              background: 'transparent',
              borderLeft: '4px solid var(--fg)',
              borderRight: '4px solid var(--fg)',
              borderRadius: '50%',
              transform: 'scaleY(1.2)'
            }}
          />
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(4rem, 15vw, 18rem)',
            lineHeight: '0.8',
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            transform: 'scaleX(1.3)',
            transformOrigin: 'center',
            marginBottom: '2rem',
            color: 'var(--fg)',
            textAlign: 'center',
            width: '100%'
          }}
        >
          TR-300
        </h1>

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.5rem, 3vw, 3rem)',
            fontWeight: '400',
            textAlign: 'center',
            color: 'var(--fg)',
            letterSpacing: '-0.02em',
            marginBottom: '4rem'
          }}
        >
          The Engine for Next-Generation<br />Computational Logistics.
        </h2>

        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '2rem' }}>
          <Button variant="primary" onClick={handleInstallCLI}>
            INSTALL CLI
          </Button>
          <Button onClick={handleReadDocs}>READ DOCS</Button>
          <Button onClick={handleEnterprise}>ENTERPRISE</Button>
        </div>
      </div>

      {/* Installation Section */}
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <section style={{ marginBottom: '12rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              width: '100%',
              maxWidth: '1200px',
              borderTop: '1px solid #222',
              paddingTop: '2rem'
            }}
          >
            <InstallCard
              title="ENVIRONMENT // MACOS"
              description="INTEL / SILICON NATIVE<br />REQUIRES HOMEBREW 4.0+"
              command="brew install tr-300-core"
            />
            <InstallCard
              title="ENVIRONMENT // LINUX"
              description="DEBIAN / FEDORA / ARCH<br />KERNEL 5.15+ OPTIMIZED"
              command="curl -sL tr-300.sh | bash"
            />
            <InstallCard
              title="ENVIRONMENT // WINDOWS"
              description="POWERSHELL ADMIN<br />WSL2 COMPATIBLE"
              command="iwr use.tr300.dev | iex"
            />
          </div>
        </section>
      </div>

      {/* Enterprise Section */}
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <section style={{ marginBottom: '12rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              maxWidth: '600px',
              textAlign: 'center',
              marginBottom: '4rem'
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--fg-dim)',
                marginBottom: '1rem'
              }}
            >
              FOR ENTERPRISE SCALE
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
                lineHeight: '1.2',
                color: 'var(--fg)'
              }}
            >
              "Deployment velocity isn't a luxury. It's the baseline for survival in a fragmented infrastructure."
            </p>
            <div style={{ marginTop: '2rem' }}>
              <Button onClick={handleContactSales}>CONTACT SALES</Button>
            </div>
          </div>
        </section>
      </div>

      {/* Demonstrations Section */}
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <section style={{ marginBottom: '12rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h3
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--fg-dim)',
              marginBottom: '1rem'
            }}
          >
            SYSTEM DEMONSTRATIONS
          </h3>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ borderTop: '1px solid #222', width: '100%' }}>
              <DemoRow
                title="PIPELINE A"
                description="Automated CI/CD Orchestration"
                onViewLive={() => handleViewDemo('Pipeline A')}
              />
            </div>
            <DemoRow
              title="CLUSTER SYNC"
              description="Real-time Node Balancing"
              onViewLive={() => handleViewDemo('Cluster Sync')}
            />
            <DemoRow
              title="DATA SHARDING"
              description="Zero-latency distribution"
              onViewLive={() => handleViewDemo('Data Sharding')}
            />
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          padding: '4rem 2rem',
          marginTop: 'auto',
          borderTop: '1px solid #111'
        }}
      >
        <div
          style={{
            maxWidth: '200px',
            fontFamily: 'var(--font-ui)',
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            lineHeight: '1.4',
            color: 'var(--fg-dim)'
          }}
        >
          TECHNICAL PRODUCT<br />
          DEVELOPMENT CO.<br />
          TR-300 SERIES<br />
          SAN FRANCISCO / TOKYO
        </div>

        <div style={{ display: 'flex', gap: '4px' }}>
          <SizeBadge>V1</SizeBadge>
          <SizeBadge>V2</SizeBadge>
          <SizeBadge>V3</SizeBadge>
          <SizeBadge active>V4</SizeBadge>
          <SizeBadge>LTS</SizeBadge>
        </div>

        <div
          style={{
            maxWidth: '200px',
            textAlign: 'right',
            fontFamily: 'var(--font-ui)',
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            lineHeight: '1.4',
            color: 'var(--fg-dim)'
          }}
        >
          ©2024 TR-SYSTEMS<br />
          OPEN SOURCE LICENSE<br />
          MIT / APACHE 2.0<br />
          BUILD 99402
        </div>
      </footer>
    </div>
  );
};

export default App;