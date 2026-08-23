import { useEffect } from 'react'
import type { Prospect } from '../lib/types'
import { STAGE_NEXT_ACTION, daysBetween, formatDays, ownerOf } from '../lib/pipeline'
import { StageBadge, TrackBadge } from './primitives'

const DOC_ORDER = ['brief', 'enrichment', 'outreach', 'quote', 'reply'] as const

function Field({ label, value }: { label: string; value: string | null }) {
  if (!value) return null
  return (
    <div>
      <div className="field-label">{label}</div>
      <div className="field-value">{value}</div>
    </div>
  )
}

export function ProspectDetail({
  prospect,
  now,
  onClose,
}: {
  prospect: Prospect
  now: Date
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const owner = ownerOf(prospect)

  return (
    <>
      <div className="scrim" onClick={onClose} />
      <aside className="drawer" role="dialog" aria-label={prospect.company}>
        <div className="drawer-head">
          <button className="drawer-close" onClick={onClose} aria-label="Close">
            ×
          </button>
          <div className="drawer-title">{prospect.company}</div>
          {prospect.location || prospect.descriptor ? (
            <div className="field-value">
              {[prospect.location, prospect.descriptor].filter(Boolean).join(' · ')}
            </div>
          ) : null}
          <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
            <StageBadge stage={prospect.stage} />
            <TrackBadge track={prospect.track} />
            {prospect.quoteStage !== 'none' ? (
              <span className="badge" style={{ color: 'var(--text-muted)' }}>
                quote: {prospect.quoteStage}
              </span>
            ) : null}
          </div>
        </div>

        <div className="drawer-body">
          <div>
            <div className="field-label">Next action</div>
            <div className="field-value">
              {STAGE_NEXT_ACTION[prospect.stage] ?? 'No rule for this stage.'}
              {owner ? ` — ${owner}.` : ''}
            </div>
            <div className="field-value" style={{ color: 'var(--text-faint)', marginTop: 3 }}>
              Last touched {prospect.lastActivity ?? 'never'} (
              {formatDays(daysBetween(prospect.lastActivity, now))} ago) · first seen{' '}
              {prospect.firstSeen ?? '—'}
            </div>
          </div>

          <div>
            <div className="field-label">Files on disk</div>
            <div className="doc-chips">
              {DOC_ORDER.map((doc) => (
                <span key={doc} className={`chip${prospect.hasDoc[doc] ? ' is-present' : ''}`}>
                  {doc}.md
                </span>
              ))}
            </div>
            <div className="field-value" style={{ color: 'var(--text-faint)', marginTop: 6 }}>
              prospects/{prospect.slug}/
            </div>
          </div>

          {(['reply', 'outreach', 'quote'] as const).map((doc) =>
            prospect.docs[doc] ? (
              <details key={doc} className="doc-view" open={doc === 'reply'}>
                <summary>{doc}.md</summary>
                <pre>{prospect.docs[doc]}</pre>
              </details>
            ) : null,
          )}

          <Field label="Why they fit" value={prospect.whyTheyFit} />
          <Field label="Website status" value={prospect.websiteStatus} />
          <Field label="Ad activity" value={prospect.adActivity} />
          <Field label="Response-time signal" value={prospect.responseTime} />
          <Field label="Source" value={prospect.source} />

          <div>
            <div className="field-label">History</div>
            <div className="timeline">
              {prospect.log.length === 0 ? (
                <div className="empty">No log entries.</div>
              ) : (
                [...prospect.log].reverse().map((entry, i) => (
                  <div className="timeline-item" key={`${entry.date}-${i}`}>
                    <div className="timeline-meta">
                      {entry.date} · <span className="timeline-actor">{entry.actorRaw}</span>
                    </div>
                    <div className="timeline-text">{entry.text}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
