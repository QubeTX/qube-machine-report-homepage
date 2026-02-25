import { useState } from 'react'

/* ── Sub-components ────────────────────────────────────────────── */

const Badge = ({ children }) => (
  <span style={{
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--fg-dim)',
    border: '1px solid var(--fg-dim)',
    padding: '2px 8px',
    borderRadius: '4px',
    display: 'inline-block',
    marginBottom: '2rem'
  }}>
    {children}
  </span>
)

const SectionHeading = ({ children, id }) => (
  <h2 id={id} style={{
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    textTransform: 'uppercase',
    transform: 'scaleX(1.1)',
    marginBottom: '2rem',
    textAlign: 'center',
    lineHeight: '1.1'
  }}>
    {children}
  </h2>
)

const SubHeading = ({ children }) => (
  <h3 style={{
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
    textTransform: 'uppercase',
    marginBottom: '1.5rem',
    marginTop: '3rem',
    paddingBottom: '0.75rem',
    borderBottom: '1px solid #222',
    lineHeight: '1.2'
  }}>
    {children}
  </h3>
)

const PlatformHeading = ({ children }) => (
  <h4 style={{
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    color: 'var(--accent-signal)',
    marginBottom: '1rem',
    marginTop: '2rem',
    letterSpacing: '0.05em'
  }}>
    {children}
  </h4>
)

const Paragraph = ({ children, dim }) => (
  <p style={{
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
    lineHeight: '1.5',
    color: dim ? 'var(--fg-dim)' : '#ccc',
    marginBottom: '1.25rem',
    fontStyle: dim ? 'normal' : undefined
  }}>
    {children}
  </p>
)

const MonoParagraph = ({ children }) => (
  <p style={{
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    lineHeight: '1.6',
    color: 'var(--fg-dim)',
    marginBottom: '1.25rem'
  }}>
    {children}
  </p>
)

const Tip = ({ children }) => (
  <div style={{
    borderLeft: '3px solid var(--accent-signal)',
    background: '#0f0f0f',
    padding: '1rem 1.5rem',
    marginTop: '1rem',
    marginBottom: '1.5rem',
    borderRadius: '0 4px 4px 0'
  }}>
    <span style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '0.65rem',
      color: 'var(--accent-signal)',
      textTransform: 'uppercase',
      display: 'block',
      marginBottom: '0.5rem',
      letterSpacing: '0.05em'
    }}>
      Shortcut
    </span>
    <p style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '0.75rem',
      lineHeight: '1.6',
      color: 'var(--fg-dim)',
      margin: 0
    }}>
      {children}
    </p>
  </div>
)

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
        top: '0.75rem',
        right: '0.75rem',
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

const CodeBlock = ({ children, copyText }) => (
  <div style={{
    background: '#000',
    border: '1px solid #333',
    borderRadius: '4px',
    padding: '1.25rem',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    lineHeight: '1.6',
    color: 'var(--fg-bone)',
    marginBottom: '1.25rem',
    overflowX: 'auto',
    position: 'relative',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-all'
  }}>
    {copyText && <CopyButton text={copyText} />}
    {children}
  </div>
)

const InlineCode = ({ children }) => (
  <code style={{
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8em',
    background: '#111',
    border: '1px solid #222',
    padding: '1px 5px',
    borderRadius: '3px',
    color: 'var(--fg-bone)'
  }}>
    {children}
  </code>
)

const Bold = ({ children }) => (
  <strong style={{ color: 'var(--fg-bone)', fontWeight: '600' }}>{children}</strong>
)

const StyledTable = ({ headers, rows }) => {
  const [hoveredRow, setHoveredRow] = useState(-1)

  return (
    <div style={{
      overflowX: 'auto',
      marginBottom: '2rem',
      border: '1px solid #1a1a1a',
      borderRadius: '4px'
    }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        minWidth: '500px'
      }}>
        <thead>
          <tr style={{ background: '#111' }}>
            {headers.map((h, i) => (
              <th key={i} style={{
                padding: '0.75rem 1rem',
                textAlign: 'left',
                color: 'var(--fg-bone)',
                fontWeight: '600',
                textTransform: 'uppercase',
                fontSize: '0.65rem',
                letterSpacing: '0.05em',
                borderBottom: '1px solid #222'
              }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              style={{
                background: hoveredRow === ri ? '#0f0f0f' : 'transparent',
                transition: 'background 0.15s ease'
              }}
              onMouseEnter={() => setHoveredRow(ri)}
              onMouseLeave={() => setHoveredRow(-1)}
            >
              {row.map((cell, ci) => (
                <td key={ci} style={{
                  padding: '0.6rem 1rem',
                  borderBottom: ri < rows.length - 1 ? '1px solid #1a1a1a' : 'none',
                  color: ci === 0 ? 'var(--fg-bone)' : 'var(--fg-dim)',
                  verticalAlign: 'top',
                  lineHeight: '1.5'
                }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const NumberedStep = ({ number, children }) => (
  <div style={{
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
    alignItems: 'flex-start'
  }}>
    <span style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '0.7rem',
      color: 'var(--accent-signal)',
      minWidth: '1.5rem',
      paddingTop: '0.15rem',
      fontWeight: '700'
    }}>
      {number}.
    </span>
    <div style={{
      fontFamily: 'var(--font-serif)',
      fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
      lineHeight: '1.5',
      color: '#ccc',
      flex: 1
    }}>
      {children}
    </div>
  </div>
)

const TroubleshootCard = ({ title, children }) => (
  <div style={{
    background: '#0f0f0f',
    border: '1px solid #1a1a1a',
    borderRadius: '4px',
    padding: '1.5rem',
    marginBottom: '1.5rem'
  }}>
    <h4 style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '0.8rem',
      color: 'var(--fg-bone)',
      marginBottom: '1rem',
      lineHeight: '1.4'
    }}>
      {title}
    </h4>
    <div style={{
      fontFamily: 'var(--font-serif)',
      fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
      lineHeight: '1.5',
      color: '#aaa'
    }}>
      {children}
    </div>
  </div>
)

const HorizontalRule = () => (
  <hr style={{
    border: 'none',
    borderTop: '1px solid #222',
    margin: '3rem 0'
  }} />
)

/* ── Main Content ──────────────────────────────────────────────── */

export default function InstallGuideContent() {
  return (
    <>
      {/* ── Section: Overview ──────────────────────────────────── */}
      <section id="quick-start" style={{
        padding: '6rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderBottom: '1px solid #222'
      }}>
        <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
          <Badge>USER INSTALL GUIDE</Badge>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            lineHeight: '1.4',
            color: 'var(--fg-bone)',
            fontStyle: 'italic',
            margin: '0 0 2rem 0'
          }}>
            This guide helps you install the Qube TX tools on your computer.
            No internet connection required — everything you need is already in the download folder.
          </p>

          <MonoParagraph>
            Three tools are available:
          </MonoParagraph>

          <StyledTable
            headers={['Tool', 'What It Does', 'Version']}
            rows={[
              [<Bold>TR300</Bold>, 'Machine reporting', 'v3.6.0'],
              [<Bold>ND300</Bold>, 'Network diagnostics', 'v2.6.0'],
              [<Bold>SD300</Bold>, 'System diagnostics', 'v1.2.1']
            ]}
          />

          <HorizontalRule />

          <SubHeading>Quick Start</SubHeading>

          <MonoParagraph>
            If you already know your setup, grab the right file:
          </MonoParagraph>

          <StyledTable
            headers={['I have a...', 'Grab this file']}
            rows={[
              ['Mac (2021 or newer, Apple chip)', <InlineCode>*-aarch64-apple-darwin.dmg</InlineCode>],
              ['Mac (older, Intel chip)', <InlineCode>*-x86_64-apple-darwin.dmg</InlineCode>],
              ['Windows PC (any)', <InlineCode>*-x86_64-pc-windows-msvc.msi</InlineCode>],
              ['Linux PC (most distros)', <InlineCode>*-x86_64-unknown-linux-gnu.tar.xz</InlineCode>]
            ]}
          />

          <MonoParagraph>
            Not sure? Keep reading — Step 1 will walk you through it.
          </MonoParagraph>
        </div>
      </section>

      {/* ── Section: Step 1 — Identify Your Computer ───────────── */}
      <section id="step-1" style={{
        padding: '6rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderBottom: '1px solid #222'
      }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <Badge>STEP 1</Badge>
          <SectionHeading>Figure Out Your Computer</SectionHeading>

          <Paragraph>
            You need to know two things: <Bold>your operating system</Bold> (Mac, Windows, or Linux)
            and <Bold>what type of processor</Bold> (the chip inside your computer that runs programs).
            Different processors need different versions of the same tool — kind of like how a car manual
            is different for automatic vs. manual transmission, even though it's the same car model.
          </Paragraph>

          {/* Mac */}
          <PlatformHeading>Mac</PlatformHeading>

          <NumberedStep number={1}>
            Click the <Bold>Apple menu</Bold> () in the top-left corner of your screen.
          </NumberedStep>
          <NumberedStep number={2}>
            Click <Bold>"About This Mac"</Bold>.
          </NumberedStep>
          <NumberedStep number={3}>
            Look for one of the following:
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Bold>"Chip: Apple M1"</Bold> (or M2, M3, M4) — this means you have an <Bold>Apple Silicon</Bold> Mac.
                These are Apple's own processors, used in Macs from late 2020 onward.
              </li>
              <li>
                <Bold>"Processor: Intel"</Bold> — this means you have an <Bold>Intel</Bold> Mac.
                These are older Macs (generally 2020 and earlier) that use Intel's processors.
              </li>
            </ul>
          </NumberedStep>

          <Tip>
            If you bought your Mac in <strong>2021 or later</strong>, you almost certainly have Apple Silicon.
            If you bought it <strong>2019 or earlier</strong>, it's Intel.
            2020 models could be either — check "About This Mac" to be sure.
          </Tip>

          {/* Windows */}
          <PlatformHeading>Windows</PlatformHeading>

          <NumberedStep number={1}>
            Open <Bold>Settings</Bold> (press the Windows key, then type "Settings").
          </NumberedStep>
          <NumberedStep number={2}>
            Go to <Bold>System</Bold> → <Bold>About</Bold>.
          </NumberedStep>
          <NumberedStep number={3}>
            Look at <Bold>"System type"</Bold>:
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Bold>"64-bit operating system, x64-based processor"</Bold> — the most common type. Use the standard Windows files.
              </li>
              <li>
                <Bold>"64-bit operating system, ARM-based processor"</Bold> — a newer ARM-based laptop.
                The standard Windows files still work fine — Windows automatically translates the program.
              </li>
            </ul>
          </NumberedStep>

          <Tip>
            Unless you specifically bought a Surface Pro X or a Snapdragon-powered laptop,
            you're almost certainly x64. Either way, the same Windows file works for both.
          </Tip>

          {/* Linux */}
          <PlatformHeading>Linux</PlatformHeading>

          <NumberedStep number={1}>
            Open a <Bold>Terminal</Bold>.
          </NumberedStep>
          <NumberedStep number={2}>
            Type <InlineCode>uname -m</InlineCode> and press Enter.
          </NumberedStep>
          <NumberedStep number={3}>
            You'll see one of:
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <InlineCode>x86_64</InlineCode> — standard Intel or AMD processor.
                This is what most desktops, laptops, and cloud servers use.
              </li>
              <li>
                <InlineCode>aarch64</InlineCode> — ARM processor.
                Common on Raspberry Pi boards, AWS Graviton, and Oracle Ampere instances.
              </li>
            </ul>
          </NumberedStep>

          <Tip>
            If you're on a regular desktop or laptop, it's x86_64.
            If you're on a Raspberry Pi or you specifically set up an ARM cloud server, it's aarch64.
          </Tip>
        </div>
      </section>

      {/* ── Section: Step 2 — Pick the Right File ──────────────── */}
      <section id="step-2" style={{
        padding: '6rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderBottom: '1px solid #222'
      }}>
        <div style={{ maxWidth: '900px', width: '100%' }}>
          <Badge>STEP 2</Badge>
          <SectionHeading>Pick the Right File</SectionHeading>

          <div style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
            <Paragraph>
              Find your tool in the tables below, then match your computer type to the correct file.
            </Paragraph>

            <SubHeading>About the File Types</SubHeading>

            <div style={{ marginBottom: '2rem' }}>
              <MonoParagraph>
                <InlineCode>.dmg</InlineCode> (Mac) — a "disk image" file. Double-click it and it opens like a virtual USB drive.
              </MonoParagraph>
              <MonoParagraph>
                <InlineCode>.msi</InlineCode> (Windows) — a standard Windows installer. Double-click and follow the prompts.
              </MonoParagraph>
              <MonoParagraph>
                <InlineCode>.zip</InlineCode> (Windows) — a compressed folder. Right-click and "Extract All" to unpack it.
              </MonoParagraph>
              <MonoParagraph>
                <InlineCode>.tar.xz</InlineCode> (Linux) — a compressed archive. Unpack it with the <InlineCode>tar</InlineCode> command.
              </MonoParagraph>
            </div>
          </div>

          {/* TR300 Table */}
          <SubHeading>TR300 — Machine Report Tool (v3.6.0)</SubHeading>
          <MonoParagraph>
            All files are inside the <InlineCode>TR300-qube-machine-report/</InlineCode> folder.
          </MonoParagraph>

          <StyledTable
            headers={['Your Computer', 'File to Download', 'Folder']}
            rows={[
              [<><Bold>Mac</Bold> — Apple M1/M2/M3/M4</>, <InlineCode>tr300-aarch64-apple-darwin.dmg</InlineCode>, 'macos/'],
              [<><Bold>Mac</Bold> — Intel processor</>, <InlineCode>tr300-x86_64-apple-darwin.dmg</InlineCode>, 'macos/'],
              [<><Bold>Windows</Bold> — installer (recommended)</>, <InlineCode>tr-300-x86_64-pc-windows-msvc.msi</InlineCode>, 'windows/'],
              [<><Bold>Windows</Bold> — portable (no install)</>, <InlineCode>tr-300-x86_64-pc-windows-msvc.zip</InlineCode>, 'windows/'],
              [<><Bold>Linux</Bold> — Ubuntu, Fedora, Debian, etc.</>, <InlineCode>tr-300-x86_64-unknown-linux-gnu.tar.xz</InlineCode>, 'linux/'],
              [<><Bold>Linux</Bold> — Raspberry Pi / ARM server</>, <InlineCode>tr-300-aarch64-unknown-linux-gnu.tar.xz</InlineCode>, 'linux/'],
              [<><Bold>Linux</Bold> — Alpine / Docker</>, <InlineCode>tr-300-x86_64-unknown-linux-musl.tar.xz</InlineCode>, 'linux/']
            ]}
          />

          {/* ND300 Table */}
          <SubHeading>ND300 — Network Diagnostics Tool (v2.6.0)</SubHeading>
          <MonoParagraph>
            All files are inside the <InlineCode>ND300-qube-network-diagnostics/</InlineCode> folder.
          </MonoParagraph>

          <StyledTable
            headers={['Your Computer', 'File to Download', 'Folder']}
            rows={[
              [<><Bold>Mac</Bold> — Apple M1/M2/M3/M4</>, <InlineCode>nd300-aarch64-apple-darwin.dmg</InlineCode>, 'macos/'],
              [<><Bold>Mac</Bold> — Intel processor</>, <InlineCode>nd300-x86_64-apple-darwin.dmg</InlineCode>, 'macos/'],
              [<><Bold>Windows</Bold> — installer (recommended)</>, <InlineCode>nd-300-x86_64-pc-windows-msvc.msi</InlineCode>, 'windows/'],
              [<><Bold>Windows</Bold> — portable (no install)</>, <InlineCode>nd-300-x86_64-pc-windows-msvc.zip</InlineCode>, 'windows/'],
              [<><Bold>Linux</Bold> — Ubuntu, Fedora, Debian, etc.</>, <InlineCode>nd-300-x86_64-unknown-linux-gnu.tar.xz</InlineCode>, 'linux/'],
              [<><Bold>Linux</Bold> — Raspberry Pi / ARM server</>, <InlineCode>nd-300-aarch64-unknown-linux-gnu.tar.xz</InlineCode>, 'linux/'],
              [<><Bold>Linux</Bold> — Alpine / Docker</>, <InlineCode>nd-300-x86_64-unknown-linux-musl.tar.xz</InlineCode>, 'linux/']
            ]}
          />

          {/* SD300 Table */}
          <SubHeading>SD300 — System Diagnostics Tool (v1.2.1)</SubHeading>
          <MonoParagraph>
            All files are inside the <InlineCode>SD300-qube-system-diagnostics/</InlineCode> folder.
          </MonoParagraph>

          <StyledTable
            headers={['Your Computer', 'File to Download', 'Folder']}
            rows={[
              [<><Bold>Mac</Bold> — Apple M1/M2/M3/M4</>, <InlineCode>sd300-aarch64-apple-darwin.dmg</InlineCode>, 'macos/'],
              [<><Bold>Mac</Bold> — Intel processor</>, <InlineCode>sd300-x86_64-apple-darwin.dmg</InlineCode>, 'macos/'],
              [<><Bold>Windows</Bold> — installer (recommended)</>, <InlineCode>sd-300-x86_64-pc-windows-msvc.msi</InlineCode>, 'windows/'],
              [<><Bold>Windows</Bold> — portable (no install)</>, <InlineCode>sd-300-x86_64-pc-windows-msvc.zip</InlineCode>, 'windows/'],
              [<><Bold>Linux</Bold> — Ubuntu, Fedora, Debian, etc.</>, <InlineCode>sd-300-x86_64-unknown-linux-gnu.tar.xz</InlineCode>, 'linux/'],
              [<><Bold>Linux</Bold> — Raspberry Pi / ARM server</>, <InlineCode>sd-300-aarch64-unknown-linux-gnu.tar.xz</InlineCode>, 'linux/'],
              [<><Bold>Linux</Bold> — Alpine / Docker</>, <InlineCode>sd-300-x86_64-unknown-linux-musl.tar.xz</InlineCode>, 'linux/']
            ]}
          />
        </div>
      </section>

      {/* ── Section: Step 3 — Install It ───────────────────────── */}
      <section id="step-3" style={{
        padding: '6rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderBottom: '1px solid #222'
      }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <Badge>STEP 3</Badge>
          <SectionHeading>Install It</SectionHeading>

          <Paragraph>
            Follow the instructions for your operating system below.
            The steps are the same for all three tools (TR300, ND300, and SD300) —
            just use the file you picked in Step 2.
          </Paragraph>

          {/* Mac Install */}
          <PlatformHeading>Mac</PlatformHeading>

          <NumberedStep number={1}>
            <Bold>Double-click</Bold> the <InlineCode>.dmg</InlineCode> file. A small window (disk image) will open showing the tool inside.
          </NumberedStep>
          <NumberedStep number={2}>
            <Bold>Copy the tool</Bold> to your Desktop: drag the file from the disk image window to your Desktop (or any folder you'd like to keep it in).
          </NumberedStep>
          <NumberedStep number={3}>
            <Bold>First time running it:</Bold> Since these tools aren't from the Mac App Store, macOS will show a security warning.
            To get past it:
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
              <li style={{ marginBottom: '0.3rem', paddingLeft: '1rem' }}>
                — <Bold>Right-click</Bold> (or Control-click) the tool on your Desktop.
              </li>
              <li style={{ marginBottom: '0.3rem', paddingLeft: '1rem' }}>
                — Click <Bold>"Open"</Bold> from the menu.
              </li>
              <li style={{ marginBottom: '0.3rem', paddingLeft: '1rem' }}>
                — In the dialog that appears, click <Bold>"Open"</Bold> again to confirm.
              </li>
              <li style={{ paddingLeft: '1rem' }}>
                — You only need to do this once per tool.
              </li>
            </ul>
          </NumberedStep>
          <NumberedStep number={4}>
            <Bold>Run the tool:</Bold> Open Terminal and type:
          </NumberedStep>

          <CodeBlock copyText="~/Desktop/tr300">
            <span style={{ color: 'var(--accent-signal)' }}>$ </span>~/Desktop/tr300
          </CodeBlock>

          <MonoParagraph>
            Replace <InlineCode>tr300</InlineCode> with <InlineCode>nd300</InlineCode> or <InlineCode>sd300</InlineCode> depending on which tool you're using.
          </MonoParagraph>

          <NumberedStep number={5}>
            <Bold>Eject the disk image</Bold> when you're done: right-click the disk image on your Desktop and choose <Bold>"Eject"</Bold>.
          </NumberedStep>

          {/* Windows Installer */}
          <PlatformHeading>Windows — Installer (.msi)</PlatformHeading>

          <NumberedStep number={1}>
            <Bold>Double-click</Bold> the <InlineCode>.msi</InlineCode> file.
          </NumberedStep>
          <NumberedStep number={2}>
            <Bold>Follow the installation wizard.</Bold> Click "Next" through the prompts and then "Install".
            The tool will be installed and added to your system automatically.
          </NumberedStep>
          <NumberedStep number={3}>
            <Bold>Run the tool:</Bold> Open Command Prompt (press Windows key, type <InlineCode>cmd</InlineCode>, press Enter) and type:
          </NumberedStep>

          <CodeBlock copyText="tr300">
            <span style={{ color: 'var(--accent-signal)' }}>&gt; </span>tr300
          </CodeBlock>

          <Tip>
            If you see a "Windows protected your PC" warning, click <strong>"More info"</strong>, then
            click <strong>"Run anyway"</strong>. This appears because the installer isn't from the Microsoft Store — it's safe to proceed.
          </Tip>

          {/* Windows Portable */}
          <PlatformHeading>Windows — Portable (.zip)</PlatformHeading>

          <NumberedStep number={1}>
            <Bold>Right-click</Bold> the <InlineCode>.zip</InlineCode> file and choose <Bold>"Extract All..."</Bold>, then click <Bold>"Extract"</Bold>.
          </NumberedStep>
          <NumberedStep number={2}>
            <Bold>Open the extracted folder.</Bold> You'll see a file
            called <InlineCode>tr300.exe</InlineCode> (or <InlineCode>nd300.exe</InlineCode> / <InlineCode>sd300.exe</InlineCode>).
          </NumberedStep>
          <NumberedStep number={3}>
            <Bold>Run it:</Bold> Open Command Prompt in that folder (type <InlineCode>cmd</InlineCode> in the folder's address bar and press Enter), then type:
          </NumberedStep>

          <CodeBlock copyText=".\\tr300.exe">
            <span style={{ color: 'var(--accent-signal)' }}>&gt; </span>.\tr300.exe
          </CodeBlock>

          {/* Linux */}
          <PlatformHeading>Linux</PlatformHeading>

          <NumberedStep number={1}>
            <Bold>Extract the archive.</Bold> Open a terminal in the folder where you saved the file, then run:
          </NumberedStep>

          <CodeBlock copyText="tar -xf tr-300-x86_64-unknown-linux-gnu.tar.xz">
            <span style={{ color: 'var(--accent-signal)' }}>$ </span>tar -xf tr-300-x86_64-unknown-linux-gnu.tar.xz
          </CodeBlock>

          <MonoParagraph>
            Use the exact filename you downloaded — it will differ based on your architecture.
          </MonoParagraph>

          <NumberedStep number={2}>
            <Bold>Make it executable and run it:</Bold>
          </NumberedStep>

          <CodeBlock copyText={"chmod +x tr300\n./tr300"}>
            <span style={{ color: 'var(--accent-signal)' }}>$ </span>chmod +x tr300{'\n'}
            <span style={{ color: 'var(--accent-signal)' }}>$ </span>./tr300
          </CodeBlock>

          <NumberedStep number={3}>
            <Bold>Optional — install it system-wide</Bold> so you can run it from anywhere:
          </NumberedStep>

          <CodeBlock copyText={"sudo cp tr300 /usr/local/bin/\ntr300"}>
            <span style={{ color: 'var(--accent-signal)' }}>$ </span>sudo cp tr300 /usr/local/bin/{'\n'}
            <span style={{ color: 'var(--accent-signal)' }}>$ </span>tr300
          </CodeBlock>

          <MonoParagraph>
            Replace <InlineCode>tr300</InlineCode> with <InlineCode>nd300</InlineCode> or <InlineCode>sd300</InlineCode> depending on which tool you're using.
          </MonoParagraph>
        </div>
      </section>

      {/* ── Section: Troubleshooting ───────────────────────────── */}
      <section id="troubleshooting" style={{
        padding: '6rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderBottom: '1px solid #222'
      }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <Badge>TROUBLESHOOTING</Badge>
          <SectionHeading>Common Issues</SectionHeading>

          <TroubleshootCard title={'Mac: "macOS cannot verify that this app is free from malware"'}>
            <p style={{ marginBottom: '0.75rem' }}>
              This appears because the tools are signed by a developer but not submitted to Apple's review service. It's safe to proceed.
            </p>
            <p style={{ marginBottom: '0.75rem' }}>
              <Bold>Fix:</Bold> Right-click the tool → click <Bold>"Open"</Bold> → click <Bold>"Open"</Bold> again in the dialog. You only need to do this once.
            </p>
            <p style={{ marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--fg-dim)' }}>
              Alternative fix (Terminal):
            </p>
            <CodeBlock copyText="xattr -d com.apple.quarantine ~/Desktop/tr300">
              <span style={{ color: 'var(--accent-signal)' }}>$ </span>xattr -d com.apple.quarantine ~/Desktop/tr300
            </CodeBlock>
          </TroubleshootCard>

          <TroubleshootCard title={'Windows: "Windows protected your PC" (SmartScreen)'}>
            <p style={{ marginBottom: '0.75rem' }}>
              This appears because the installer is from an independent developer, not the Microsoft Store.
            </p>
            <p>
              <Bold>Fix:</Bold> Click <Bold>"More info"</Bold> → click <Bold>"Run anyway"</Bold>.
            </p>
          </TroubleshootCard>

          <TroubleshootCard title={'Linux: "Permission denied"'}>
            <p style={{ marginBottom: '0.75rem' }}>
              This means the file isn't marked as executable yet.
            </p>
            <p style={{ marginBottom: '0.75rem' }}>
              <Bold>Fix:</Bold> Run the following command, then try again:
            </p>
            <CodeBlock copyText="chmod +x tr300">
              <span style={{ color: 'var(--accent-signal)' }}>$ </span>chmod +x tr300
            </CodeBlock>
          </TroubleshootCard>

          <TroubleshootCard title="Windows on ARM Laptop (Surface Pro X, Snapdragon, etc.)">
            <p>
              The standard Windows files work on ARM laptops too — Windows automatically translates them.
              Just use the regular Windows <InlineCode>.msi</InlineCode> or <InlineCode>.zip</InlineCode> file from the tables above.
            </p>
          </TroubleshootCard>

          <TroubleshootCard title={'"I don\'t know which file to pick"'}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <Bold>Mac users:</Bold> If your Mac was made in 2021 or later, it almost certainly has an Apple chip (M1/M2/M3/M4). Use the first Mac option. Older Macs use Intel — use the second.
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Bold>Windows users:</Bold> Almost all Windows PCs use the same file. Just grab the <InlineCode>.msi</InlineCode> (installer) option.
              </li>
              <li>
                <Bold>Linux users:</Bold> If you're not sure, try the first Linux option (<InlineCode>x86_64-unknown-linux-gnu</InlineCode>). It works on the vast majority of Linux desktops and servers.
              </li>
            </ul>
          </TroubleshootCard>
        </div>
      </section>

      {/* ── Section: Need More Help ────────────────────────────── */}
      <section style={{
        padding: '6rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        borderBottom: '1px solid #222'
      }}>
        <div style={{ maxWidth: '600px' }}>
          <SectionHeading>Need More Help?</SectionHeading>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            color: '#aaa',
            fontStyle: 'italic',
            marginBottom: '1.5rem',
            lineHeight: '1.5'
          }}>
            For detailed technical documentation — including SHA256 checksum verification,
            code signing details, and platform support notes — see the README.md included
            in the download folder.
          </p>

          <MonoParagraph>
            Source: <a
              href="https://github.com/QubeTX/qube-reports-executables"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--fg-dim)', textDecoration: 'none' }}
            >
              github.com/QubeTX/qube-reports-executables
            </a>
          </MonoParagraph>
        </div>
      </section>
    </>
  )
}
