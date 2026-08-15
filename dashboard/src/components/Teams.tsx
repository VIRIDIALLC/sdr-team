import type { Snapshot } from '../lib/types'
import { type AgentStatus, buildAgentStatuses, daysBetween, formatDays } from '../lib/pipeline'
import { Stat, TrackBadge } from './primitives'

/** A queue this deep means the agent is behind, not just busy. */
const BACKED_UP = 5

function AgentPanel({
  status,
  now,
  onOpen,
}: {
  status: AgentStatus
  now: Date
  onOpen: (slug: string) => void
}) {
  const { def, queue, actions, actionsLast7, lastActive, oldestIdleDays } = status
  const idleSinceActive = daysBetween(lastActive, now)

  const queueClass =
    queue.length === 0 ? ' is-clear' : queue.length >= BACKED_UP ? ' is-backed-up' : ''

  return (
    <section className="agent">
      <header className="agent-head">
        <div>
          <div className="agent-name">{def.name}</div>
          <div className="agent-role">{def.role}</div>
        </div>
        <div>
          {/* Rupika has no inbound queue — her signal is output, not backlog. */}
          <div className={def.producesWork ? 'agent-queue-num' : `agent-queue-num${queueClass}`}>
            {def.producesWork ? actionsLast7 : queue.length}
          </div>
          <div className="agent-queue-label">
            {def.producesWork ? 'logged this week' : 'waiting on them'}
          </div>
        </div>
      </header>

      <div className="agent-meters">
        <div>
          <div className="meter-value">{actionsLast7}</div>
          <div className="meter-label">actions / 7d</div>
        </div>
        <div>
          <div className="meter-value">{actions.length}</div>
          <div className="meter-label">all time</div>
        </div>
        <div>
          <div className="meter-value">{formatDays(idleSinceActive)}</div>
          <div className="meter-label">since last action</div>
        </div>
      </div>

      {def.producesWork ? (
        <div>
          <div className="section-title">Recent finds</div>
          <div className="agent-list">
            {actions.length === 0 ? (
              <div className="empty">No logged activity yet.</div>
            ) : (
              actions.slice(0, 6).map((action, i) => (
                <button
                  key={`${action.slug}-${action.date}-${i}`}
                  className="queue-row"
                  onClick={() => onOpen(action.slug)}
                >
                  <span className="queue-row-name">{action.company}</span>
                  <span className="queue-row-idle">{action.date.slice(5)}</span>
                </button>
              ))
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="section-title">
            Queue
            {oldestIdleDays !== null ? ` — oldest waiting ${formatDays(oldestIdleDays)}` : ''}
          </div>
          <div className="agent-list">
            {queue.length === 0 ? (
              <div className="empty">Clear. Nothing waiting.</div>
            ) : (
              queue.slice(0, 8).map((p) => (
                <button key={p.slug} className="queue-row" onClick={() => onOpen(p.slug)}>
                  <span className="queue-row-name">{p.company}</span>
                  <span className="queue-row-idle">
                    <TrackBadge track={p.track} />{' '}
                    {formatDays(daysBetween(p.lastActivity, now))}
                  </span>
                </button>
              ))
            )}
            {queue.length > 8 ? (
              <div className="empty">+ {queue.length - 8} more</div>
            ) : null}
          </div>
        </div>
      )}
    </section>
  )
}

export function Teams({
  snapshot,
  now,
  onOpen,
}: {
  snapshot: Snapshot
  now: Date
  onOpen: (slug: string) => void
}) {
  const statuses = buildAgentStatuses(snapshot, now)
  const totalQueued = statuses.reduce((sum, s) => sum + s.queue.length, 0)
  const totalLast7 = statuses.reduce((sum, s) => sum + s.actionsLast7, 0)
  const backedUp = statuses.filter((s) => s.queue.length >= BACKED_UP)

  return (
    <>
      <div className="statbar">
        <Stat value={totalQueued} label="Items in a queue" note="across the whole team" />
        <Stat value={totalLast7} label="Actions this week" note="last 7 days of logs" />
        <Stat
          value={backedUp.length}
          label="Agents backed up"
          note={backedUp.map((s) => s.def.name).join(', ') || 'everyone keeping pace'}
          tone={backedUp.length ? 'var(--warn)' : undefined}
        />
        <Stat
          value={statuses.filter((s) => s.queue.length === 0 && !s.def.producesWork).length}
          label="Queues clear"
          note={`of ${statuses.filter((s) => !s.def.producesWork).length} handoff points`}
        />
      </div>

      <div className="teams">
        {statuses.map((status) => (
          <AgentPanel key={status.def.name} status={status} now={now} onOpen={onOpen} />
        ))}
      </div>
    </>
  )
}
