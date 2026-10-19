import ProductHero from './ProductHero'
import useGitHubVersion from '../hooks/useGitHubVersion'

export default function SD300Hero() {
  const version = useGitHubVersion('QubeTX/qube-system-diagnostics', '4.1.0')
  return <ProductHero product="SD-300" category="System diagnostics" artwork="/sd300-monochrome.svg" repository="QubeTX/qube-system-diagnostics" version={version} docs="/docs/sd300"
    description={<>A live view of your system’s health.<br />In your terminal or a desktop app.</>} />
}
