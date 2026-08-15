import type { Stage, Track } from '../lib/types'
import { STAGE_LABEL, TRACK_LABEL } from '../lib/pipeline'

export function StageBadge({ stage }: { stage: Stage }) {
  return (
    <span className="badge" style={{ color: `var(--stage-${stage}, var(--text-muted))` }}>
      <span className="badge-dot" />
      {STAGE_LABEL[stage] ?? stage}
    </span>
  )
}

export function TrackBadge({ track }: { track: Track }) {
  return (
    <span className="badge" style={{ color: `var(--track-${track}, var(--text-muted))` }}>
      {TRACK_LABEL[track] ?? track}
    </span>
  )
}

export function Stat({
  value,
  label,
  note,
  tone,
}: {
  value: string | number
  label: string
  note?: string
  tone?: string
}) {
  return (
    <div className="stat">
      <div className="stat-value" style={tone ? { color: tone } : undefined}>
        {value}
      </div>
      <div className="stat-label">{label}</div>
      {note ? <div className="stat-note">{note}</div> : null}
    </div>
  )
}
