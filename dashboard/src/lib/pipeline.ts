/**
 * Derived views over the pipeline snapshot.
 *
 * The ownership rules here mirror the handoff contract in CLAUDE.md — if that
 * contract changes, change AGENTS and ownerOf together and the whole UI follows.
 */
import type { AgentName, LogEntry, Prospect, Snapshot, Stage, Track } from './types'

export const STAGES: Stage[] = ['found', 'enriched', 'drafted', 'approved', 'sent']

export const STAGE_LABEL: Record<Stage, string> = {
  found: 'Found',
  enriched: 'Enriched',
  drafted: 'Drafted',
  approved: 'Approved',
  sent: 'Sent',
  dismissed: 'Dismissed',
}

/** What has to happen next for a prospect sitting in this stage. */
export const STAGE_NEXT_ACTION: Record<Stage, string> = {
  found: 'Needs enrichment — contact info + why-they-fit',
  enriched: 'Needs an outreach draft',
  drafted: 'Waiting on Kevin to approve',
  approved: 'Approved — waiting to be sent',
  sent: 'Sent — waiting on a reply',
  dismissed: 'Removed from the pipeline',
}

export const TRACK_LABEL: Record<Track, string> = {
  package: 'Complete System',
  website: 'Website',
  ads: 'Ads',
}

export interface AgentDef {
  name: AgentName
  role: string
  /** Prospects this agent is expected to act on right now. */
  owns: (p: Prospect) => boolean
  /** Agents who produce work rather than consume a queue (Rupika) show output instead. */
  producesWork?: boolean
}

export const AGENTS: AgentDef[] = [
  {
    name: 'Rupika',
    role: 'Prospecting',
    owns: () => false,
    producesWork: true,
  },
  {
    name: 'Montague',
    role: 'Enrichment',
    owns: (p) => p.stage === 'found',
  },
  {
    name: 'Elly',
    role: 'Outreach drafting',
    owns: (p) => p.stage === 'enriched',
  },
  {
    name: 'Kevin',
    role: 'Approval gate',
    owns: (p) => p.stage === 'drafted' || p.stage === 'approved',
  },
  {
    name: 'Sage',
    role: 'Quoting',
    // A website-track prospect that has replied but has no quote yet.
    owns: (p) => p.track === 'website' && p.stage === 'sent' && p.hasDoc.reply && p.quoteStage === 'none',
  },
  {
    name: 'Nova',
    role: 'Magic Patterns build',
    owns: (p) => p.quoteStage === 'ready_to_build',
  },
]

export function ownerOf(p: Prospect): AgentName | null {
  return AGENTS.find((agent) => agent.owns(p))?.name ?? null
}

/* ---------- dates ---------- */

const DAY_MS = 86_400_000

export function daysBetween(from: string | null, to: Date): number | null {
  if (!from) return null
  const start = Date.parse(`${from}T00:00:00Z`)
  if (Number.isNaN(start)) return null
  const end = Date.UTC(to.getUTCFullYear(), to.getUTCMonth(), to.getUTCDate())
  return Math.max(0, Math.round((end - start) / DAY_MS))
}

export function formatDays(days: number | null): string {
  if (days === null) return '—'
  if (days === 0) return 'today'
  if (days === 1) return '1 day'
  return `${days} days`
}

/* ---------- aggregates ---------- */

export interface AgentStatus {
  def: AgentDef
  /** Prospects waiting on this agent right now. */
  queue: Prospect[]
  /** Longest anything has sat idle in the queue, in days. */
  oldestIdleDays: number | null
  /** Log entries authored by this agent, newest first. */
  actions: Array<LogEntry & { slug: string; company: string }>
  actionsLast7: number
  lastActive: string | null
}

export function buildAgentStatuses(snapshot: Snapshot, now: Date): AgentStatus[] {
  const actionsByAgent = new Map<string, Array<LogEntry & { slug: string; company: string }>>()
  for (const p of snapshot.prospects) {
    for (const entry of p.log) {
      const list = actionsByAgent.get(entry.actor) ?? []
      list.push({ ...entry, slug: p.slug, company: p.company })
      actionsByAgent.set(entry.actor, list)
    }
  }

  return AGENTS.map((def) => {
    const queue = snapshot.prospects
      .filter((p) => def.owns(p))
      .sort((a, b) => (a.lastActivity ?? '').localeCompare(b.lastActivity ?? ''))

    const actions = (actionsByAgent.get(def.name) ?? []).sort((a, b) => b.date.localeCompare(a.date))

    const idleDays = queue
      .map((p) => daysBetween(p.lastActivity, now))
      .filter((d): d is number => d !== null)

    return {
      def,
      queue,
      oldestIdleDays: idleDays.length ? Math.max(...idleDays) : null,
      actions,
      actionsLast7: actions.filter((a) => (daysBetween(a.date, now) ?? Infinity) <= 7).length,
      lastActive: actions[0]?.date ?? null,
    }
  })
}

export function byStage(prospects: Prospect[]): Record<Stage, Prospect[]> {
  const groups = Object.fromEntries(
    (Object.keys(STAGE_LABEL) as Stage[]).map((s) => [s, [] as Prospect[]]),
  ) as Record<Stage, Prospect[]>

  for (const p of prospects) {
    // An unrecognized stage value shouldn't silently vanish from the board.
    ;(groups[p.stage] ??= []).push(p)
  }
  for (const stage of Object.keys(groups) as Stage[]) {
    groups[stage].sort((a, b) => (b.lastActivity ?? '').localeCompare(a.lastActivity ?? ''))
  }
  return groups
}

export function allActivity(
  snapshot: Snapshot,
): Array<LogEntry & { slug: string; company: string }> {
  return snapshot.prospects
    .flatMap((p) => p.log.map((entry) => ({ ...entry, slug: p.slug, company: p.company })))
    .sort((a, b) => b.date.localeCompare(a.date))
}
