import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { destinations } from '../data/destinations'
import { PhotoCredit } from './PhotoCredit'
import './DestinationsPreview.css'

function DestinationCard({ destination }: { destination: (typeof destinations)[number] }) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <figure className="destinations-preview-card">
      <Link to={destination.path} className="destinations-preview-card-link">
        <div className="destinations-preview-image">
          {imageFailed ? (
            <p className="destinations-preview-placeholder">Vue de {destination.city} à venir</p>
          ) : (
            <img
              src={destination.image}
              alt={destination.alt}
              width={destination.width}
              height={destination.height}
              style={{ objectPosition: destination.position }}
              loading="lazy"
              decoding="async"
              onError={() => setImageFailed(true)}
            />
          )}
        </div>
        <div className="destinations-preview-overlay">
          <h3 className="destinations-preview-city">{destination.city}</h3>
          <p className="destinations-preview-caption">{destination.description}</p>
          <span className="destinations-preview-discover">Découvrir {destination.city}</span>
        </div>
      </Link>
      <figcaption>
        {!imageFailed && (
          <PhotoCredit
            place={destination.city}
            photographer={destination.photographer}
            photographerUrl={destination.photographerUrl}
            originalUrl={destination.originalUrl}
            source="Pexels"
            license="Licence Pexels"
            licenseUrl="https://www.pexels.com/license/"
          />
        )}
      </figcaption>
    </figure>
  )
}

export function DestinationsPreview() {
  const headingId = useId()

  return (
    <section className="destinations-preview" aria-labelledby={headingId}>
      <div className="destinations-preview-inner">
        <header className="destinations-preview-intro">
          <p className="destinations-preview-eyebrow">NOS DESTINATIONS</p>
          <h2 id={headingId} className="destinations-preview-heading">La Côte d'Azur, notre territoire d'inspiration.</h2>
          <p className="destinations-preview-description">
            De Nice à Cannes, en passant par Antibes et Villefranche-sur-Mer, Écrin d'Azur souhaite accompagner les propriétaires dans la valorisation de leurs biens et l'organisation de leurs locations saisonnières.
          </p>
        </header>
        <ul className="destinations-preview-grid">
          {destinations.map((destination) => (
            <li key={destination.city}><DestinationCard destination={destination} /></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
