import BodySection from './BodySection'
import GuideLink from './GuideLink'

export default function ReferenceTable({ id, title, introduction, headings, rows, width, docs, linkText, note, codeLabels = false }) {
  return <BodySection id={id} title={title} introduction={introduction} width={width}>
    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', lineHeight: 1.6 }}>
      <thead><tr>{headings.map(heading => <th key={heading} scope="col" style={{ padding: '0 0.75rem 0.75rem 0', borderBottom: '1px solid #444', fontSize: '0.875rem', fontWeight: 500, color: 'var(--fg-dim)' }}>{heading}</th>)}</tr></thead>
      <tbody>{rows.map(([label, description]) => <tr key={label}>
        <th scope="row" style={{ width: '28%', minWidth: '6rem', padding: '1rem 1.5rem 1rem 0', borderBottom: '1px solid var(--line)', verticalAlign: 'top', fontWeight: 500 }}>{codeLabels ? <kbd style={{ fontSize: '0.9375rem' }}>{label}</kbd> : label}</th>
        <td style={{ padding: '1rem 0', borderBottom: '1px solid var(--line)', verticalAlign: 'top', color: 'var(--body-muted)' }}>{description}</td>
      </tr>)}</tbody>
    </table>
    {note && <p style={{ color: 'var(--body-muted)', lineHeight: 1.65, maxWidth: '65ch', marginTop: '1.5rem' }}>{note}</p>}
    {docs && <GuideLink href={docs} style={{ marginTop: '1rem' }}>{linkText}</GuideLink>}
  </BodySection>
}
