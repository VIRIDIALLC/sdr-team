/**
 * Reads prospects/<slug>/ markdown and emits a single JSON snapshot the UI consumes.
 *
 * The markdown in prospects/ is the source of truth — this script never writes to it.
 * Run standalone (`npm run data`) or let the dev server regenerate on change.
 */
import { readFileSync, readdirSync, existsSync, writeFileSync, mkdirSync, statSync } from 'node:fs'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
export const REPO_ROOT = resolve(HERE, '../..')
const PROSPECTS_DIR = join(REPO_ROOT, 'prospects')
const OUT_FILE = resolve(HERE, '../src/generated/pipeline.json')

/** Agents whose names appear as log actors. Order matters — first match in the actor string wins. */
const KNOWN_ACTORS = ['Rupika', 'Montague', 'Elly', 'Sage', 'Nova', 'Kevin']

const OPTIONAL_DOCS = ['brief', 'enrichment', 'outreach', 'quote', 'reply']

/**
 * Docs whose full text ships to the client. These are the ones Kevin reads at the
 * approval gate; brief.md is already parsed into fields and enrichment.md is long
 * working notes, so neither is worth the payload.
 */
const EMBEDDED_DOCS = ['outreach', 'quote', 'reply']

/** `- 2026-08-11 (Montague): sourced from ...` */
const LOG_LINE = /^-\s+(\d{4}-\d{2}-\d{2})\s*\(([^)]*)\)\s*:?\s*(.*)$/

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return {}
  const fields = {}
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*:\s*(.*)$/)
    if (kv) fields[kv[1]] = kv[2].trim().replace(/^["']|["']$/g, '')
  }
  return fields
}

/**
 * Log entries wrap across lines in the real files, so a non-`-` line continues the
 * previous entry rather than starting a new one.
 */
function parseLog(raw) {
  const body = raw.replace(/^---\r?\n[\s\S]*?\r?\n---/, '')
  const entries = []
  for (const line of body.split(/\r?\n/)) {
    const match = line.trim().match(LOG_LINE)
    if (match) {
      const [, date, actorRaw, text] = match
      entries.push({ date, actorRaw: actorRaw.trim(), actor: normalizeActor(actorRaw), text: text.trim() })
    } else if (entries.length && line.trim()) {
      const last = entries[entries.length - 1]
      last.text = `${last.text} ${line.trim()}`.trim()
    }
  }
  return entries
}

function normalizeActor(actorRaw) {
  const found = KNOWN_ACTORS.find((name) => new RegExp(`\\b${name}\\b`, 'i').test(actorRaw))
  return found ?? actorRaw.trim()
}

/**
 * Pull `**Label:** value` pairs out of brief.md without a markdown dependency.
 * Values routinely wrap across several lines, so a field runs until the next
 * `**Label:**`, a heading, or a bullet list.
 */
function parseBriefFields(raw) {
  const fields = {}
  let current = null
  let buffer = []

  const flush = () => {
    if (current) fields[current] = buffer.join(' ').replace(/\s+/g, ' ').trim()
    current = null
    buffer = []
  }

  for (const line of raw.split(/\r?\n/)) {
    const start = line.match(/^\*\*([^:*]+):\*\*\s*(.*)$/)
    if (start) {
      flush()
      current = start[1].trim().toLowerCase()
      buffer = start[2] ? [start[2].trim()] : []
      continue
    }
    if (!current) continue
    // A heading or a bullet ends the value; a blank line does not (values wrap).
    if (/^\s*#/.test(line) || /^\s*[-*]\s/.test(line)) {
      flush()
      continue
    }
    if (line.trim()) buffer.push(line.trim())
  }
  flush()

  return fields
}

/** A city/state tail, e.g. "Phoenix metro, AZ". Two capitals rules out ", Inc". */
const LOCATION_RE = /,\s*[A-Z]{2}\b/
const DASH_RE = /\s+(?:—|–|--)\s+/

/** Split off top-level parenthetical groups, tolerating nesting and stray brackets. */
function splitParenSegments(value) {
  const segments = []
  let head = ''
  let current = ''
  let depth = 0

  for (const ch of value) {
    if (ch === '(') {
      if (depth === 0) {
        depth = 1
        current = ''
      } else {
        depth += 1
        current += ch
      }
    } else if (ch === ')') {
      if (depth === 1) {
        depth = 0
        if (current.trim()) segments.push(current.trim())
        current = ''
      } else if (depth > 1) {
        depth -= 1
        current += ch
      }
      // depth === 0 here means an unmatched ')' — drop it.
    } else if (depth === 0) {
      head += ch
    } else {
      current += ch
    }
  }
  if (depth > 0 && current.trim()) segments.push(current.trim())

  return { head: head.trim(), segments }
}

/** "Phoenix, AZ (11035 N 23rd Dr); serves Glendale" -> "Phoenix, AZ" */
function cleanLocation(text) {
  const out = text.split(/[;(]/)[0].trim().replace(/[,\s]+$/, '')
  return out || null
}

/**
 * brief.md's Company line has no single format. Seen in the wild:
 *   "AAA Landscape -- Phoenix metro, AZ (Landscaping)"
 *   "Krasiva Windows and Doors (Phoenix, AZ (2432 W Peoria Ave))"
 *   "AMS Landscaping (Arizona Maintenance Services) (Phoenix, AZ (...); services ...)"
 *   "A+Weed and Pest Control"
 * so pull the name, the location and a descriptor out independently.
 */
function splitCompany(value) {
  if (!value) return { company: null, location: null, descriptor: null }

  const { head, segments } = splitParenSegments(value)
  let company = head
  let location = null

  // Prefer a location that follows an em/double dash in the head.
  const parts = head.split(DASH_RE)
  if (parts.length > 1) {
    const tail = parts[parts.length - 1].trim()
    if (LOCATION_RE.test(tail)) {
      company = parts.slice(0, -1).join(' — ').trim()
      location = cleanLocation(tail)
    }
  }

  const rest = [...segments]
  if (!location) {
    const index = rest.findIndex((segment) => LOCATION_RE.test(segment))
    if (index !== -1) {
      location = cleanLocation(rest[index])
      rest.splice(index, 1)
    }
  }

  // Whatever's left that reads as a trade or an alias rather than a street address.
  const descriptor = rest.find((segment) => segment.length <= 60 && !/^\d/.test(segment)) ?? null

  return { company: company || null, location, descriptor }
}

function titleCaseSlug(slug) {
  return slug
    .split('-')
    .map((part) => (part.length <= 2 ? part.toUpperCase() : part[0].toUpperCase() + part.slice(1)))
    .join(' ')
}

function readIfExists(path) {
  return existsSync(path) ? readFileSync(path, 'utf8') : null
}

function readProspect(slug) {
  const dir = join(PROSPECTS_DIR, slug)
  const statusRaw = readIfExists(join(dir, 'status.md'))
  if (statusRaw === null) return null

  const front = parseFrontmatter(statusRaw)
  const log = parseLog(statusRaw)

  const briefRaw = readIfExists(join(dir, 'brief.md'))
  const brief = briefRaw ? parseBriefFields(briefRaw) : {}
  const { company, location, descriptor } = splitCompany(brief['company'])

  const docs = {}
  const present = {}
  for (const name of OPTIONAL_DOCS) {
    const body = readIfExists(join(dir, `${name}.md`))
    present[name] = body !== null
    if (body !== null && EMBEDDED_DOCS.includes(name)) docs[name] = body
  }

  const dates = log.map((entry) => entry.date).sort()

  return {
    slug,
    company: company ?? titleCaseSlug(slug),
    location,
    descriptor,
    stage: front.stage ?? 'found',
    track: front.track ?? 'package',
    quoteStage: front.quote_stage ?? 'none',
    whyTheyFit: brief['why they fit'] ?? null,
    websiteStatus: brief['website status'] ?? null,
    adActivity: brief['ad activity status'] ?? null,
    responseTime: brief['response-time signal'] ?? null,
    source: brief['source (how they were found)'] ?? brief['source'] ?? null,
    firstSeen: dates[0] ?? null,
    lastActivity: dates[dates.length - 1] ?? null,
    log,
    docs,
    hasDoc: present,
  }
}

export function buildSnapshot() {
  if (!existsSync(PROSPECTS_DIR)) {
    throw new Error(`prospects/ not found at ${PROSPECTS_DIR}`)
  }

  const slugs = readdirSync(PROSPECTS_DIR)
    // `_template`, `_criteria.md` etc. are config, not prospects.
    .filter((name) => !name.startsWith('_') && !name.startsWith('.'))
    .filter((name) => statSync(join(PROSPECTS_DIR, name)).isDirectory())
    .sort()

  const prospects = slugs.map(readProspect).filter(Boolean)

  return {
    // Snapshot time, so the UI can show how stale the data is.
    generatedAt: new Date().toISOString(),
    prospectCount: prospects.length,
    prospects,
  }
}

export function writeSnapshot() {
  const snapshot = buildSnapshot()
  mkdirSync(dirname(OUT_FILE), { recursive: true })
  writeFileSync(OUT_FILE, `${JSON.stringify(snapshot, null, 2)}\n`)
  return snapshot
}

// Only write to disk when invoked directly, so the Vite plugin can import buildSnapshot().
if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  const snapshot = writeSnapshot()
  const logCount = snapshot.prospects.reduce((sum, p) => sum + p.log.length, 0)
  console.log(`wrote ${snapshot.prospectCount} prospects / ${logCount} log entries -> ${OUT_FILE}`)
}
