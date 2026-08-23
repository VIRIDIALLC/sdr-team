import { Fragment, useMemo, useState } from 'react'
import type { Snapshot } from '../lib/types'
import { AGENTS, allActivity } from '../lib/pipeline'

const PAGE = 80

export function Activity({
  snapshot,
  onOpen,
}: {
  snapshot: Snapshot
  onOpen: (slug: string) => void
}) {
  const [actorFilter, setActorFilter] = useState<string>('all')
  const [limit, setLimit] = useState(PAGE)

  const entries = useMemo(() => allActivity(snapshot), [snapshot])
  const filtered = useMemo(
    () => (actorFilter === 'all' ? entries : entries.filter((e) => e.actor === actorFilter)),
    [entries, actorFilter],
  )
  const shown = filtered.slice(0, limit)

  let lastDate = ''

  return (
    <>
      <div className="tabs" style={{ marginBottom: 16, display: 'inline-flex' }}>
        <button
          className="tab"
          aria-selected={actorFilter === 'all'}
          onClick={() => {
            setActorFilter('all')
            setLimit(PAGE)
          }}
        >
          Everyone
        </button>
        {AGENTS.map((agent) => (
          <button
            key={agent.name}
            className="tab"
            aria-selected={actorFilter === agent.name}
            onClick={() => {
              setActorFilter(agent.name)
              setLimit(PAGE)
            }}
          >
            {agent.name}
          </button>
        ))}
      </div>

      <div className="feed">
        {shown.length === 0 ? <div className="empty" style={{ padding: 16 }}>No activity.</div> : null}
        {shown.map((entry, i) => {
          const isNewDay = entry.date !== lastDate
          lastDate = entry.date
          return (
            <Fragment key={`${entry.slug}-${entry.date}-${i}`}>
              {isNewDay ? <div className="feed-day">{entry.date}</div> : null}
              <button className="feed-row" onClick={() => onOpen(entry.slug)}>
                <span className="feed-actor" title={entry.actorRaw}>
                  {entry.actor}
                </span>
                <span>
                  <span className="feed-company">{entry.company}</span>
                  <div className="feed-text">{entry.text}</div>
                </span>
              </button>
            </Fragment>
          )
        })}
      </div>

      {limit < filtered.length ? (
        <button
          className="tab"
          style={{ marginTop: 14, border: '1px solid var(--border)' }}
          onClick={() => setLimit((n) => n + PAGE)}
        >
          Show more ({filtered.length - limit} older)
        </button>
      ) : null}
    </>
  )
}
