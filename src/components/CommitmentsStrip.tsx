import { useId } from 'react'
import './CommitmentsStrip.css'

type Commitment = {
  number: string
  title: string
  description: string
}

type CommitmentsStripProps = {
  items: readonly Commitment[]
  eyebrow?: string
  heading?: string
}

export function CommitmentsStrip({
  items,
  eyebrow = "L'ESPRIT ÉCRIN D'AZUR",
  heading = "L'excellence dans l'attention, la sérénité dans la gestion.",
}: CommitmentsStripProps) {
  const headingId = useId()

  return (
    <section className="commitments-strip" aria-labelledby={headingId}>
      <div className="commitments-strip-inner">
        <header className="commitments-strip-intro">
          <p className="commitments-strip-eyebrow">{eyebrow}</p>
          <h2 id={headingId} className="commitments-strip-heading">{heading}</h2>
        </header>
        <ol className="commitments-strip-grid">
          {items.map(({ number, title, description }) => (
            <li key={number} className="commitments-strip-item">
              <span className="commitments-strip-number" aria-hidden="true">{number} /</span>
              <h3 className="commitments-strip-title">{title}</h3>
              <p className="commitments-strip-description">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
