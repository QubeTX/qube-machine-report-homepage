import ProductHero from './ProductHero'
import { productHeroes } from './productHeroes'
import useGitHubVersion from '../hooks/useGitHubVersion'

export default function Hero() {
  const version = useGitHubVersion('QubeTX/qube-machine-report', '4.5.1')
  return <ProductHero {...productHeroes['/']} repository="QubeTX/qube-machine-report" version={version} docs="/docs/tr300" />
}
