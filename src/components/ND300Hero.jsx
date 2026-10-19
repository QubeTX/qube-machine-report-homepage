import ProductHero from './ProductHero'
import useGitHubVersion from '../hooks/useGitHubVersion'

export default function ND300Hero() {
  const version = useGitHubVersion('QubeTX/qube-network-diagnostics', '4.0.1')
  return <ProductHero product="ND-300" category="Network diagnostics" artwork="/nd300-monochrome.svg" repository="QubeTX/qube-network-diagnostics" version={version} docs="/docs/nd300"
    description={<>Find and fix network problems<br />on Windows, macOS, and Linux.</>} />
}
