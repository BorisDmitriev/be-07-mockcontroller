import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

import { Low } from "lowdb"
import { JSONFile } from "lowdb/node"


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const file = join(__dirname, "..", "data", "db.json")

const adapter = new JSONFile(file)
const defaultData = { content: [] }

const db = new Low(adapter, defaultData)
await db.read()

export function getAllNotes(req, res) {
    const notes = db.data.content
    res.json(notes)
}