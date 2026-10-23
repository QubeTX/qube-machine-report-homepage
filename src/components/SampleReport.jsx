import BodySection from './BodySection'

export default function SampleReport({ product, output, note }) {
  return <BodySection id="example" title="See the report" introduction={note} width="760px">
      <div style={{ minWidth: 0, border: '1px solid #444', background: '#080808' }}>
        <p style={{ padding: '0.9rem 1.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--fg-dim)', borderBottom: '1px solid var(--line)' }}>{product} / Sample output</p>
        <div tabIndex={0} role="region" aria-label="Sample terminal output; scroll horizontally to read" style={{ padding: 'clamp(1rem, 3vw, 2rem)', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9375rem', lineHeight: 1.5, color: 'var(--fg-bone)', whiteSpace: 'pre', width: 'max-content', margin: '0 auto', tabSize: 4 }}>{output}</pre>
        </div>
      </div>
  </BodySection>
}
