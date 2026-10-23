import BodySection from './BodySection'
import GuideLink from './GuideLink'
import useMediaQuery from '../hooks/useMediaQuery'

export default function DetailRows({ id, title, introduction, rows }) {
  const mobile = useMediaQuery('(max-width: 767px)')
  return <BodySection id={id} title={title} introduction={introduction}>
    <div>
      {rows.map(row => <article key={row.title} style={{ display: 'grid', gridTemplateColumns: mobile ? 'minmax(0, 1fr)' : 'minmax(0, 1fr) minmax(0, 2fr)', gap: '0.75rem 2rem', padding: '1.5rem 0', borderTop: '1px solid var(--line)' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.4 }}>{row.title}</h3>
        <div>
          <p style={{ color: 'var(--body-muted)', lineHeight: 1.65, maxWidth: '65ch', textWrap: 'pretty' }}>{row.description}</p>
          {row.href && <GuideLink href={row.href} style={{ marginTop: '0.5rem' }}>{row.linkText}</GuideLink>}
        </div>
      </article>)}
    </div>
  </BodySection>
}
