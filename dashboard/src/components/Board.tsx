import type { Prospect, Snapshot, Stage } from '../lib/types'
import {
  STAGES,
  STAGE_LABEL,
  STAGE_NEXT_ACTION,
  byStage,
  daysBetween,
  ownerOf,
} from '../lib/pipeline'
import { Stat, TrackBadge } from './primitives'

/** Anything untouched this long in a pre-send stage is drifting, not moving. */
export const STALE_DAYS = 4

function Card({
  prospect,
  now,
  onOpen,
}: {
  prospect: Prospect
  now: Date
  onOpen: (slug: string) => void
}) {
  const idle = daysBetween(prospect.lastActivity, now)
  const stale = prospect.stage !== 'sent' && idle !== null && idle >= STALE_DAYS

  return (
    <button className="card" onClick={() => onOpen(prospect.slug)}>
      <div className="card-name">{prospect.company}</div>
      {prospect.location || prospect.descriptor ? (
        <div className="card-loc">
          {[prospect.location, prospect.descriptor].filter(Boolean).join(' · ')}
        </div>
      ) : null}
      <div className="card-foot">
        <TrackBadge track={prospect.track} />
        <span
          className={`card-idle${stale ? ' is-stale' : ''}`}
          title={`Last touched ${prospect.lastActivity ?? 'never'}`}
        >
          {idle === null ? '—' : `${idle}d`}
        </span>
      </div>
    </button>
  )
}

export function Board({
  snapshot,
  now,
  onOpen,
}: {
  snapshot: Snapshot
  now: Date
  onOpen: (slug: string) => void
}) {
  const groups = byStage(snapshot.prospects)
  const active = snapshot.prospects.filter((p) => p.stage !== 'dismissed')

  const needsKevin = active.filter((p) => ownerOf(p) === 'Kevin')
  const stalled = active.filter((p) => {
    if (p.stage === 'sent') return false
    const idle = daysBetween(p.lastActivity, now)
    return idle !== null && idle >= STALE_DAYS
  })
  const sentCount = groups.sent.length

  // Stages beyond the standard five (e.g. `dismissed`) still deserve a column.
  const extraStages = (Object.keys(groups) as Stage[]).filter(
    (s) => !STAGES.includes(s) && groups[s].length > 0,
  )

  return (
    <>
      <div className="statbar">
        <Stat value={active.length} label="Active prospects" note={`${snapshot.prospectCount} total`} />
        <Stat
          value={needsKevin.length}
          label="Waiting on you"
          note="drafted + approved"
          tone={needsKevin.length ? 'var(--warn)' : undefined}
        />
        <Stat
          value={stalled.length}
          label="Stalled"
          note={`no movement in ${STALE_DAYS}+ days`}
          tone={stalled.length ? 'var(--warn)' : undefined}
        />
        <Stat value={sentCount} label="Sent" note="outreach out the door" />
      </div>

      <div className="board">
        {[...STAGES, ...extraStages].map((stage) => (
          <section
            key={stage}
            className="column"
            style={{ ['--stage-color' as string]: `var(--stage-${stage}, var(--border))` }}
          >
            <header className="column-head">
              <div className="column-title">
                <span>{STAGE_LABEL[stage] ?? stage}</span>
                <span className="column-count">{groups[stage].length}</span>
              </div>
              <div className="column-sub">{STAGE_NEXT_ACTION[stage] ?? ''}</div>
            </header>
            <div className="column-body">
              {groups[stage].length === 0 ? (
                <div className="empty">Nothing here.</div>
              ) : (
                groups[stage].map((p) => (
                  <Card key={p.slug} prospect={p} now={now} onOpen={onOpen} />
                ))
              )}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
