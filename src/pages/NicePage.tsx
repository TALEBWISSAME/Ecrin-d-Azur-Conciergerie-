import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { PhotoCredit } from '../components/PhotoCredit'
import type { Destination } from '../data/destinations'
import './NicePage.css'

const plannedServices = [
  {
    title: 'Valorisation du logement',
    description: "Une réflexion sur la présentation de votre logement et de son annonce, afin de mettre en lumière son caractère et ses atouts, selon les besoins identifiés ensemble.",
  },
  {
    title: 'Accueil des voyageurs',
    description: "Un accompagnement à définir autour des échanges avec les voyageurs et de la préparation des arrivées, en tenant compte de l'organisation souhaitée pour chaque séjour.",
  },
  {
    title: "Coordination de l'entretien",
    description: "Une coordination à envisager pour la préparation des espaces et le suivi des besoins d'entretien, selon les modalités convenues et les intervenants disponibles.",
  },
  {
    title: 'Suivi des réservations',
    description: "Un suivi du calendrier et de l'organisation des réservations pourra être étudié avec vous, en fonction de votre projet et des outils utilisés.",
  },
] as const

export function NicePage({ destination }: { destination: Destination }) {
  useEffect(() => {
    document.title = 'Conciergerie à Nice | Écrin d’Azur'
  }, [])

  return (
    <article className="nice-page">
      <Hero
        eyebrow="ÉCRIN D'AZUR · NICE"
        title="Votre conciergerie à Nice, une attention à chaque détail."
        imageSrc={destination.image}
        imageWidth={destination.width}
        imageHeight={destination.height}
      />
      <PhotoCredit place="Nice, vue sur le littoral" photographer={destination.photographer} photographerUrl={destination.photographerUrl}
        originalUrl={destination.originalUrl} source="Pexels" license="Licence Pexels" licenseUrl="https://www.pexels.com/license/" />

      <section className="nice-page-presentation nice-page-inner" aria-labelledby="nice-presentation">
        <h2 id="nice-presentation">Nice, une destination au caractère unique.</h2>
        <p>Entre la baie des Anges, les ruelles du Vieux-Nice et les collines qui dominent la Méditerranée, Nice possède un art de vivre singulier. Écrin d'Azur souhaite accompagner les propriétaires de locations saisonnières dans la mise en valeur de leur logement et la préparation de chaque séjour, avec une approche personnalisée et exigeante.</p>
      </section>

      <section className="nice-page-services nice-page-inner" aria-labelledby="nice-services">
        <h2 id="nice-services">Un accompagnement pensé pour votre propriété.</h2>
        <p className="nice-page-services-intro">Les prestations envisagées seront précisées avec vous selon les besoins de votre bien. Leur périmètre et leurs modalités restent à convenir avant tout engagement.</p>
        <ol className="nice-page-services-grid">
          {plannedServices.map(({ title, description }, index) => (
            <li key={title}>
              <span className="nice-page-service-number" aria-hidden="true">{String(index + 1).padStart(2, '0')} /</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="nice-page-contact" aria-labelledby="nice-contact">
        <div className="nice-page-inner">
          <h2 id="nice-contact">Vous possédez un bien à Nice ? Parlons-en.</h2>
          <p>Présentez-nous votre propriété et échangeons sur les possibilités d'un accompagnement adapté à votre projet.</p>
          <Link to="/confier-mon-bien" className="nice-page-contact-button">Confier mon bien</Link>
        </div>
      </section>
    </article>
  )
}
