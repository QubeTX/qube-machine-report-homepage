import ProductHero from './ProductHero'
import { productHeroes } from './productHeroes'
import useGitHubVersion from '../hooks/useGitHubVersion'

export default function ND300Hero() {
  const version = useGitHubVersion('QubeTX/qube-network-diagnostics', '4.0.2')
  return <ProductHero {...productHeroes['/nd300']} repository="QubeTX/qube-network-diagnostics" version={version} docs="/docs/nd300" />
}
