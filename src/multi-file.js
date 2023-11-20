import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { pkgUp } from 'pkg-up'

class MultiFile {
  #folder
  dirname
  writerMap = new Map()

  constructor (folder = 'data') {
    this.#folder = folder
    this.dirname = dirname(fileURLToPath(import.meta.url))
  }

  async read () {
    const data = {}
    const packageFile = await pkgUp()
    const rootDir = dirname(packageFile)
    const dataDir = join(rootDir, this.#folder)

    const files = await fs.readdir(this.dataDir)

    for (const file of files) {
      if (file.endsWith('.json')) {
        const fileDir = join(dataDir, file)
        const dataStr = await fs.readFile(fileDir, 'utf-8')
        data[basename(file, '.json')] = JSON.parse(dataStr || '[]')
      }
    }

    return data
  }

  async write (data) {
    debugger
    // split data using something like Object.keys(data)
    // and write to multiples files
  }
}