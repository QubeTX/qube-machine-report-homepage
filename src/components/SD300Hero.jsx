import ProductHero from './ProductHero'
import { productHeroes } from './productHeroes'
import useGitHubVersion from '../hooks/useGitHubVersion'

export default function SD300Hero() {
  const version = useGitHubVersion('QubeTX/qube-system-diagnostics', '4.1.0')
  return <ProductHero {...productHeroes['/sd300']} repository="QubeTX/qube-system-diagnostics" version={version} docs="/docs/sd300" />
}
