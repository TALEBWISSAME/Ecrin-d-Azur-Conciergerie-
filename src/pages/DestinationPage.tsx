import { Link } from 'react-router-dom'
import type { Destination } from '../data/destinations'
import type { DestinationDetails } from '../data/destinationDetails'
import { Hero } from '../components/Hero'
import { PhotoCredit } from '../components/PhotoCredit'
import { usePageMetadata } from '../hooks/usePageMetadata'
// Reuse the validated Nice styles without changing the Nice page or its CSS.
import './NicePage.css'

type DestinationPageProps = {
  destination: Destination
  details: DestinationDetails
}

export function DestinationPage({ destination, details }: DestinationPageProps) {
  usePageMetadata(details.seoTitle, details.metaDescription)
  const sectionId = destination.path.slice(1)

  return (
    <article className="nice-page">
      <Hero
        eyebrow={details.eyebrow}
        title={details.heroTitle}
        imageSrc={destination.image}
        imageWidth={destination.width}
        imageHeight={destination.height}
      />
      <PhotoCredit
        place={destination.city}
        photographer={destination.photographer}
        photographerUrl={destination.photographerUrl}
        originalUrl={destination.originalUrl}
        source="Pexels"
        license="Licence Pexels"
        licenseUrl="https://www.pexels.com/license/"
      />

      <section className="nice-page-presentation nice-page-inner" aria-labelledby={`${sectionId}-presentation`}>
        <h2 id={`${sectionId}-presentation`}>{details.presentationTitle}</h2>
        <p>{details.presentation}</p>
      </section>

      <section className="nice-page-services nice-page-inner" aria-labelledby={`${sectionId}-services`}>
        <h2 id={`${sectionId}-services`}>{details.servicesTitle}</h2>
        <p className="nice-page-services-intro">Les prestations envisagées seront précisées avec vous selon les besoins de votre bien. Leur périmètre et leurs modalités restent à convenir avant tout engagement.</p>
        <ol className="nice-page-services-grid">
          {details.services.map(({ title, description }, index) => (
            <li key={title}>
              <span className="nice-page-service-number" aria-hidden="true">{String(index + 1).padStart(2, '0')} /</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="nice-page-contact" aria-labelledby={`${sectionId}-contact`}>
        <div className="nice-page-inner">
          <h2 id={`${sectionId}-contact`}>{details.contactTitle}</h2>
          <p>{details.contactText}</p>
          <Link to="/confier-mon-bien" className="nice-page-contact-button">Confier mon bien</Link>
        </div>
      </section>
    </article>
  )
}
