import ProductHero from './ProductHero'
import useGitHubVersion from '../hooks/useGitHubVersion'

export default function Hero() {
  const version = useGitHubVersion('QubeTX/qube-machine-report', '4.4.0')
  return <ProductHero product="TR-300" category="Machine report" artwork="" repository="QubeTX/qube-machine-report" version={version} docs="/docs/tr300"
    description={<>Know your machine in seconds.<br />Clean, readable system reports on any OS.</>} />
}
