import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { PhotoCredit } from './PhotoCredit'
import './PropertyInvitation.css'

export function PropertyInvitation() {
  const headingId = useId()
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <section className="property-invitation" aria-labelledby={headingId}>
      <div className="property-invitation-inner">
        <div className="property-invitation-content">
          <p className="property-invitation-eyebrow">VOTRE PROPRIÉTÉ, NOTRE ENGAGEMENT</p>
          <h2 id={headingId} className="property-invitation-heading">Chaque lieu mérite une attention singulière.</h2>
          <p className="property-invitation-description">
            Derrière chaque propriété se trouve une histoire, un caractère et un potentiel à révéler. Écrin d'Azur souhaite accompagner les propriétaires dans la mise en valeur de leur bien et l'organisation de leurs locations saisonnières, avec une approche attentive, personnalisée et respectueuse de leurs attentes.
          </p>
          <div className="property-invitation-project">
            <h3 className="property-invitation-subheading">Et si votre propriété devenait notre prochain écrin ?</h3>
            <p className="property-invitation-description">
              Appartement de caractère, résidence de vacances ou villa méditerranéenne : échangeons sur votre projet et imaginons un accompagnement adapté à votre bien.
            </p>
            <Link to="/confier-mon-bien" className="property-invitation-button">Présenter mon bien</Link>
          </div>
        </div>
        <figure className="property-invitation-visual">
          <div className="property-invitation-image">
            {imageFailed ? (
              <p className="property-invitation-placeholder">Photographie d'ambiance à venir</p>
            ) : (
              <img
                src="/images/property-inspiration.jpg"
                alt="Salon lumineux aux grandes fenêtres cintrées, photographié en Espagne."
                width="1600"
                height="919"
                loading="lazy"
                decoding="async"
                onError={() => setImageFailed(true)}
              />
            )}
          </div>
          {!imageFailed && (
            <figcaption>
              <p className="property-invitation-disclaimer">Photographie d'inspiration, non représentative d'un bien actuellement accompagné.</p>
              <PhotoCredit
                place="Intérieur d'inspiration méditerranéenne"
                photographer="VJ VON ART"
                photographerUrl="https://www.pexels.com/@vj-von-art-50613973/"
                originalUrl="https://www.pexels.com/photo/a-cozy-couch-in-the-living-room-8069319/"
                source="Pexels"
                license="Licence Pexels"
                licenseUrl="https://www.pexels.com/license/"
              />
            </figcaption>
          )}
        </figure>
      </div>
    </section>
  )
}
