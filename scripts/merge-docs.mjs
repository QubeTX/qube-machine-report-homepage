import { cp, access } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const source = fileURLToPath(new URL('../docs-site/dist/', import.meta.url))
const destination = fileURLToPath(new URL('../dist/docs/', import.meta.url))
await access(new URL('../docs-site/dist/index.html', import.meta.url))
await cp(source, destination, { recursive: true, errorOnExist: true, force: false })
console.log('Merged the static documentation into dist/docs.')
