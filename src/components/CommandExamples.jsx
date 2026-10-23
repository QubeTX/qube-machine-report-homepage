import useMediaQuery from '../hooks/useMediaQuery'
import BodySection from './BodySection'
import CopyCommand from './CopyCommand'
import GuideLink from './GuideLink'

export default function CommandExamples({ rows, note, docs }) {
  const mobile = useMediaQuery('(max-width: 767px)')
  return <BodySection id="commands" title="Common commands" introduction={note} width="960px">
    <dl>
      {rows.map(({ command, description }) => <div key={command} style={{ display: 'grid', gridTemplateColumns: mobile ? 'minmax(0, 1fr) auto' : 'minmax(0, 1fr) minmax(0, 1.7fr) auto', gap: '0.5rem 1.5rem', alignItems: 'center', padding: '1rem 0', borderTop: '1px solid var(--line)' }}>
        <dt style={{ minWidth: 0 }}><code style={{ fontSize: '0.9375rem', overflowWrap: 'anywhere', userSelect: 'all' }}>{command}</code></dt>
        <dd style={{ color: 'var(--body-muted)', lineHeight: 1.6, gridColumn: mobile ? '1 / -1' : undefined, gridRow: mobile ? 2 : undefined }}>{description}</dd>
        <dd style={{ gridColumn: mobile ? 2 : undefined, gridRow: mobile ? 1 : undefined }}><CopyCommand compact command={command} /></dd>
      </div>)}
    </dl>
    <GuideLink href={docs} style={{ marginTop: '1rem' }}>All commands and options</GuideLink>
  </BodySection>
}
