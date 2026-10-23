import SD300Screenshots from './SD300Screenshots'
import BodySection from './BodySection'

export default function SD300Desktop() {
  return (
    <BodySection id="screenshots" title="Live monitoring, two ways"
      introduction="Choose a desktop window or a terminal dashboard. Both use the same monitoring core, with live readings, searchable detail, and explanations of what can and cannot be observed.">
        <SD300Screenshots />
        <p style={{ color: 'var(--body-muted)', fontSize: '1rem', lineHeight: 1.65, maxWidth: '65ch' }}>
          Both views update and uninstall together. Open the app with <code>sd300 gui</code>. Linux runs the app without a tray.
        </p>
    </BodySection>
  )
}
