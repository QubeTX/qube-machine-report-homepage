import CapabilityGrid from './CapabilityGrid'

export default function Features() {
  return <CapabilityGrid items={[
    { label: 'For everyday checks', title: 'Know your machine', description: 'See your processor, memory, storage, and connection in one terminal report. Unavailable facts are left out instead of guessed.' },
    { label: 'For support and automation', title: 'Use the result', description: 'Save a Markdown report when you need to share it, or use JSON in a script. Normal runs and the optional startup summary save no file.' },
  ]} />
}
