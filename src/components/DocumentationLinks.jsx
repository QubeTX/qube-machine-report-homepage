import BodySection from './BodySection'
import GuideLink from './GuideLink'

export default function DocumentationLinks({ product, links }) {
  return <BodySection compact label={`${product} guides`}>
    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.3, marginBottom: '1rem' }}>Keep exploring</h2>
    <ul style={{ listStyle: 'none', display: 'grid', gap: '0.75rem' }}>
      {links.map(link => <li key={link.href} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', alignItems: 'center', gap: '0 2rem' }}>
        <GuideLink href={link.href} style={{ width: 'fit-content' }}>{link.title}</GuideLink>
        <p style={{ color: 'var(--body-muted)', lineHeight: 1.6, maxWidth: '65ch' }}>{link.description}</p>
      </li>)}
    </ul>
  </BodySection>
}
