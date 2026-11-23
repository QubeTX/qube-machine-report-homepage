export function ToolkitNotes({ textStyle }) {
  return <>
    <p style={{ maxWidth: '60ch', fontSize: '1rem', lineHeight: 1.65, color: '#b8b8b8', marginBottom: '1rem' }}><span style={textStyle}>Official installers, portable archives, and matching docs. Download this ZIP on a connected computer, then transfer it to the computer you want to check.</span></p>
    <p style={{ maxWidth: '60ch', fontSize: '1rem', lineHeight: 1.6, color: '#b8b8b8' }}><span style={textStyle}>Internet tests and self-updates still need connectivity.</span></p>
  </>
}

export function ToolkitSnapshot({ textStyle }) {
  return <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--fg-dim)', marginTop: '1.5rem', maxWidth: '65ch' }}>
    <span style={textStyle}>Snapshot: October 11, 2026</span><br />
    <span style={textStyle}>TR-300 4.4.0 · ND-300 4.0.1 · SD-300 4.1.0</span><br />
    <span style={textStyle}>Windows x64 · macOS Intel / Apple Silicon</span><br />
    <span style={textStyle}>Linux x64 GNU / musl and ARM64 GNU</span>
  </p>
}
