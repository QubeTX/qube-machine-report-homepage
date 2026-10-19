import ProductHero from './ProductHero'

export default function ExecutablesHero() {
  return <ProductHero product="Offline toolkit" category="Offline downloads"
    description={<>Three tools. One download.<br />Ready for Windows, macOS, and Linux.</>}
    download="https://github.com/QubeTX/qube-reports-executables/releases/latest/download/qubetx-offline-bundle.zip" docs="#tools"
    afterActions={<p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--fg-dim)', marginTop: '1.5rem', maxWidth: '65ch' }}>Snapshot: October 11, 2026<br />TR-300 4.4.0 · ND-300 4.0.1 · SD-300 4.1.0<br />Windows x64 · macOS Intel / Apple Silicon<br />Linux x64 GNU / musl and ARM64 GNU</p>}>
    <p style={{ maxWidth: '60ch', fontSize: '1rem', lineHeight: 1.65, color: '#b8b8b8', marginBottom: '1rem' }}>Official installers, portable archives, and matching docs. Download this ZIP on a connected computer, then transfer it to the computer you want to check.</p>
    <p style={{ maxWidth: '60ch', fontSize: '1rem', lineHeight: 1.6, color: '#b8b8b8', marginBottom: '1.5rem' }}>Internet tests and self-updates still need connectivity.</p>
  </ProductHero>
}
