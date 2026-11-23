import ProductHero from './ProductHero'
import { ToolkitNotes, ToolkitSnapshot } from './OfflineToolkitDetails'
import { productHeroes } from './productHeroes'

export default function ExecutablesHero() {
  return <ProductHero {...productHeroes['/executables']}
    download="https://github.com/QubeTX/qube-reports-executables/releases/latest/download/qubetx-offline-bundle.zip" docs="#tools"
    afterActions={<ToolkitSnapshot />}>
    <ToolkitNotes />
  </ProductHero>
}
