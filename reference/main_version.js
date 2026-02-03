import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const customStyles = {
  fontImport: `@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Cormorant+Garamond:ital,wght@0,400;1,400&family=JetBrains+Mono:wght@400;500&display=swap');`,
  root: `
    :root {
      --bg-void: #0a0a0a;
      --fg-bone: #dcdcdc;
      --fg-dim: #666666;
      --accent-signal: #ff00d4; 
      --border-width: 1.5px;
      --font-display: 'Archivo Black', sans-serif;
      --font-serif: 'Cormorant Garamond', serif;
      --font-mono: 'JetBrains Mono', monospace;
      --gap-grid: 1px;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      background-color: var(--bg-void);
      color: var(--fg-bone);
      font-family: var(--font-mono);
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    @keyframes pulse {
      0%, 100% { height: 20%; border-color: #333; }
      50% { height: 100%; border-color: var(--fg-bone); }
    }
  `
};

const Bar = ({ delay, baseHeight, enhanced }) => {
  const barStyle = {
    width: '40px',
    background: enhanced ? '#222' : '#1a1a1a',
    border: `1px solid ${enhanced ? '#666' : '#444'}`,
    borderRadius: '20px',
    animation: `pulse 2s infinite ease-in-out`,
    animationDelay: delay,
    height: baseHeight
  };
  
  return <div style={barStyle}></div>;
};

const TagButton = ({ children, active, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const buttonStyle = {
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
    position: 'relative',
    borderColor: isHovered && !active ? 'var(--accent-signal)' : active ? 'var(--accent-signal)' : 'var(--fg-bone)',
    transform: isHovered && !active ? 'translateY(-2px)' : 'none',
    boxShadow: isHovered && !active ? '0 4px 12px rgba(255, 0, 212, 0.15)' : 'none'
  };
  
  return (
    <button 
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

const GridCell = ({ label, title, description, linkText }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const cellStyle = {
    padding: '4rem',
    borderRight: '1px solid #222',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '50vh',
    transition: 'background 0.3s ease',
    background: isHovered ? '#0f0f0f' : 'transparent'
  };
  
  const labelStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    color: 'var(--fg-dim)',
    marginBottom: '2rem',
    border: '1px solid var(--fg-dim)',
    display: 'inline-block',
    padding: '2px 8px',
    borderRadius: '4px',
    alignSelf: 'flex-start'
  };
  
  const titleStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: '3rem',
    transform: 'scaleX(1.1)',
    marginBottom: '1.5rem',
    textTransform: 'uppercase'
  };
  
  const descStyle = {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.5rem',
    lineHeight: '1.3',
    color: '#aaa'
  };
  
  const linkStyle = {
    fontFamily: 'var(--font-mono)',
    letterSpacing: '-0.5px',
    fontSize: '0.7rem',
    marginTop: '2rem',
    color: 'var(--accent-signal)'
  };
  
  return (
    <div 
      style={cellStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <span style={labelStyle}>{label}</span>
      </div>
      <div>
        <h2 style={titleStyle} dangerouslySetInnerHTML={{ __html: title }}></h2>
        <p style={descStyle}>{description}</p>
      </div>
      <div style={linkStyle}>
        {linkText}
      </div>
    </div>
  );
};

const HomePage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('mac');
  
  const platformCode = {
    mac: (
      <>
        <span className="code-line" style={{ display: 'block', marginBottom: '0.5rem', color: '#666' }}># Install via Homebrew</span>
        <span className="code-line code-command" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--fg-bone)' }}>
          <span style={{ color: 'var(--accent-signal)' }}>$ </span>brew tap tr-300/core
        </span>
        <span className="code-line code-command" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--fg-bone)' }}>
          <span style={{ color: 'var(--accent-signal)' }}>$ </span>brew install tr-300-cli
        </span>
        <span className="code-line code-command" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--fg-bone)' }}>
          <span style={{ color: 'var(--accent-signal)' }}>$ </span>tr300 init --global
        </span>
      </>
    ),
    win: (
      <>
        <span className="code-line" style={{ display: 'block', marginBottom: '0.5rem', color: '#666' }}># Install via Winget</span>
        <span className="code-line code-command" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--fg-bone)' }}>
          <span style={{ color: 'var(--accent-signal)' }}>$ </span>winget install tr-300
        </span>
        <span className="code-line code-command" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--fg-bone)' }}>
          <span style={{ color: 'var(--accent-signal)' }}>$ </span>tr300.exe --setup
        </span>
      </>
    ),
    linux: (
      <>
        <span className="code-line" style={{ display: 'block', marginBottom: '0.5rem', color: '#666' }}># Install via Curl</span>
        <span className="code-line code-command" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--fg-bone)' }}>
          <span style={{ color: 'var(--accent-signal)' }}>$ </span>curl -sL https://tr300.io/install | bash
        </span>
        <span className="code-line code-command" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--fg-bone)' }}>
          <span style={{ color: 'var(--accent-signal)' }}>$ </span>sudo tr300d start
        </span>
      </>
    ),
    docker: (
      <>
        <span className="code-line" style={{ display: 'block', marginBottom: '0.5rem', color: '#666' }}># Pull Image</span>
        <span className="code-line code-command" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--fg-bone)' }}>
          <span style={{ color: 'var(--accent-signal)' }}>$ </span>docker pull tr300/server:latest
        </span>
        <span className="code-line code-command" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--fg-bone)' }}>
          <span style={{ color: 'var(--accent-signal)' }}>$ </span>docker run -d -p 8080:80 tr300/server
        </span>
      </>
    )
  };
  
  const headerStyle = {
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '2rem',
    position: 'relative',
    borderBottom: '1px solid #222'
  };
  
  const metaCornersStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    fontSize: '0.65rem',
    color: 'var(--fg-dim)',
    lineHeight: '1.4'
  };
  
  const metaBlockStyle = {
    maxWidth: '200px'
  };
  
  const heroCenterStyle = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative'
  };
  
  const logoConstructStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2rem',
    opacity: 0.9
  };
  
  const logoShapeStyle = {
    width: '80px',
    height: '160px',
    border: '12px solid var(--fg-bone)',
    borderRadius: '100px',
    margin: '0 -15px',
    background: 'transparent',
    position: 'relative',
    mixBlendMode: 'exclusion'
  };
  
  const heroTitleStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(4rem, 15vw, 12rem)',
    lineHeight: '0.8',
    transform: 'scaleX(1.3)',
    letterSpacing: '-2px',
    marginBottom: '2rem',
    color: 'var(--fg-bone)',
    mixBlendMode: 'lighten'
  };
  
  const heroTaglineStyle = {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
    fontStyle: 'italic',
    color: 'var(--fg-bone)',
    marginTop: '2rem',
    fontWeight: '400'
  };
  
  const gridSectionStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    borderBottom: '1px solid #222'
  };
  
  const demoCanvasStyle = {
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
  };
  
  const barContainerStyle = {
    display: 'flex',
    gap: '20px',
    height: '300px',
    alignItems: 'center'
  };
  
  const installSectionStyle = {
    padding: '6rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };
  
  const installHeaderStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: '4rem',
    textTransform: 'uppercase',
    marginBottom: '3rem',
    transform: 'scaleX(1.1)',
    textAlign: 'center'
  };
  
  const platformSelectorStyle = {
    display: 'flex',
    gap: '1rem',
    marginBottom: '3rem'
  };
  
  const terminalWindowStyle = {
    width: '100%',
    maxWidth: '800px',
    background: '#000',
    border: '1px solid #333',
    borderRadius: '4px',
    padding: '2rem',
    fontFamily: 'var(--font-mono)',
    position: 'relative'
  };
  
  const terminalBeforeStyle = {
    position: 'absolute',
    top: '-10px',
    left: '10px',
    background: 'var(--bg-void)',
    padding: '0 10px',
    fontSize: '0.7rem',
    color: 'var(--fg-dim)'
  };
  
  const footerStyle = {
    padding: '4rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: '1px solid #222',
    fontSize: '0.75rem',
    color: 'var(--fg-dim)'
  };
  
  const footerColStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  };
  
  return (
    <>
      <header style={headerStyle}>
        <div style={metaCornersStyle}>
          <div style={metaBlockStyle}>
            SYSTEM ARCHITECTURE<br />
            TR-300 SERIES<br />
            BUILD: 2024.09.A
          </div>
          
          <div style={{ ...metaBlockStyle, textAlign: 'right' }}>
            HIGH PERFORMANCE SYSTEM<br />
            OPERATING SYSTEM<br />
            SHAUGHNESSY V DEV INC.
          </div>
        </div>

        <div style={heroCenterStyle}>
          <div style={logoConstructStyle}>
            <div style={logoShapeStyle}></div>
            <div style={logoShapeStyle}></div>
            <div style={logoShapeStyle}></div>
          </div>
          <h1 style={heroTitleStyle}>TR-300</h1>
          <h2 style={heroTaglineStyle}>Your Infrastructure's<br />Favorite Infrastructure.</h2>
        </div>

        <div style={{ ...metaCornersStyle, alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', gap: '1rem', margin: 0, transform: 'scale(0.8)', transformOrigin: 'bottom left' }}>
            <div className="tag-btn">V 1.0</div>
            <div className="tag-btn">V 2.0</div>
            <div className="tag-btn active" style={{ background: 'var(--accent-signal)', borderColor: 'var(--accent-signal)', color: 'var(--bg-void)' }}>V 3.0</div>
          </div>
          <div style={{ ...metaBlockStyle, textAlign: 'right' }}>
            SCROLL TO INITIALIZE<br />
            ↓
          </div>
        </div>
      </header>

      <section style={gridSectionStyle}>
        <GridCell 
          label="01 // END USER"
          title="Zero Latency<br />Control"
          description="Designed for the command line purist. The TR-300 eliminates GUI overhead, providing direct neural-like access to your system's core. Raw power, no interpretative layer."
          linkText="> READ DOCUMENTATION"
        />
        <div style={{ borderRight: 'none' }}>
          <GridCell 
            label="02 // ENTERPRISE"
            title="Scalable<br />Orchestration"
            description="Deploy across thousands of nodes with a single binary. Our atomic architecture ensures stability at scale, self-healing protocols, and encrypted telemetry by default."
            linkText="> CONTACT SALES"
          />
        </div>
      </section>

      <div style={demoCanvasStyle}>
        <div style={barContainerStyle}>
          <Bar delay="0s" baseHeight="20%" />
          <Bar delay="0.2s" baseHeight="60%" />
          <Bar delay="0.4s" baseHeight="90%" enhanced={true} />
          <Bar delay="0.6s" baseHeight="40%" />
          <Bar delay="0.8s" baseHeight="20%" />
        </div>
        <div style={{ position: 'absolute', bottom: '20px', zIndex: 10, textAlign: 'center', pointerEvents: 'none' }}>
          <p style={{ fontFamily: 'var(--font-mono)', letterSpacing: '-0.5px', fontSize: '0.7rem' }}>LIVE THREAD VISUALIZATION</p>
        </div>
      </div>

      <section id="install" style={installSectionStyle}>
        <h2 style={installHeaderStyle}>Initialize</h2>
        
        <div style={platformSelectorStyle}>
          <TagButton active={selectedPlatform === 'mac'} onClick={() => setSelectedPlatform('mac')}>
            macOS
          </TagButton>
          <TagButton active={selectedPlatform === 'win'} onClick={() => setSelectedPlatform('win')}>
            Windows
          </TagButton>
          <TagButton active={selectedPlatform === 'linux'} onClick={() => setSelectedPlatform('linux')}>
            Linux
          </TagButton>
          <TagButton active={selectedPlatform === 'docker'} onClick={() => setSelectedPlatform('docker')}>
            Docker
          </TagButton>
        </div>

        <div style={terminalWindowStyle}>
          <span style={terminalBeforeStyle}>BASH // V.3.0.1</span>
          {platformCode[selectedPlatform]}
        </div>

        <p style={{ fontFamily: 'var(--font-mono)', letterSpacing: '-0.5px', fontSize: '0.7rem', marginTop: '2rem', color: '#555' }}>
          SHA256: 8f4b...3a1c
        </p>
      </section>

      <footer style={footerStyle}>
        <div style={footerColStyle}>
          <span style={{ textTransform: 'uppercase', color: 'var(--fg-bone)' }}>TR-300 SYSTEMS</span>
          <span>FRISCO, TEXAS</span>
        </div>
        <div style={{ ...footerColStyle, textAlign: 'right' }}>
          <span>PRIVACY PROTOCOL</span>
          <span>TERMS OF SERVICE</span>
          <span style={{ color: 'var(--accent-signal)' }}>STATUS: OPERATIONAL</span>
        </div>
      </footer>
    </>
  );
};

const App = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = customStyles.fontImport + customStyles.root;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;