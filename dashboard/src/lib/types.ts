export type Stage = 'found' | 'enriched' | 'drafted' | 'approved' | 'sent' | 'dismissed'
export type Track = 'package' | 'website' | 'ads'
export type QuoteStage = 'none' | 'quoted' | 'needs_kevin' | 'ready_to_build' | 'closed'
export type AgentName = 'Rupika' | 'Montague' | 'Elly' | 'Sage' | 'Nova' | 'Kevin'

export interface LogEntry {
  date: string
  /** Actor exactly as written in status.md, e.g. "Kevin, via KIREEK". */
  actorRaw: string
  /** Normalized to a known agent name where one is recognizable. */
  actor: string
  text: string
}

export interface Prospect {
  slug: string
  company: string
  location: string | null
  /** Trade or alias pulled from brief.md, e.g. "Landscaping" — often absent. */
  descriptor: string | null
  stage: Stage
  track: Track
  quoteStage: QuoteStage
  whyTheyFit: string | null
  websiteStatus: string | null
  adActivity: string | null
  responseTime: string | null
  source: string | null
  firstSeen: string | null
  lastActivity: string | null
  log: LogEntry[]
  docs: Partial<Record<'brief' | 'enrichment' | 'outreach' | 'quote' | 'reply', string>>
  hasDoc: Record<'brief' | 'enrichment' | 'outreach' | 'quote' | 'reply', boolean>
}

export interface Snapshot {
  generatedAt: string
  prospectCount: number
  prospects: Prospect[]
}
