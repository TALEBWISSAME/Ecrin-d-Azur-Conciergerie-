import './PhotoCredit.css'

type PhotoCreditProps = {
  place: string
  photographer: string
  photographerUrl?: string
  originalUrl: string
  source: string
  license: string
  licenseUrl?: string
  edits?: string
}

export function PhotoCredit({
  place,
  photographer,
  photographerUrl,
  originalUrl,
  source,
  license,
  licenseUrl,
  edits,
}: PhotoCreditProps) {
  return (
    <aside className="photo-credit" aria-label="Crédits photographiques">
      <p className="photo-credit-inner">
        {place}
        {' · Photo : '}
        {photographerUrl ? <a href={photographerUrl}>{photographer}</a> : photographer}
        {' · '}
        {licenseUrl ? <a href={licenseUrl}>{license}</a> : license}
        {' · Source : '}
        <a href={originalUrl}>{source}</a>
        {edits && <> · {edits}</>}
      </p>
    </aside>
  )
}
