import { useId } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../data/services'
import './ServicesOverview.css'

export function ServicesOverview() {
  const headingId = useId()

  return (
    <section className="services-overview" aria-labelledby={headingId}>
      <div className="services-overview-inner">
        <header className="services-overview-intro">
          <p className="services-overview-eyebrow">NOTRE SAVOIR-FAIRE</p>
          <h2 id={headingId} className="services-overview-heading">Une gestion d'exception, pensée dans les moindres détails.</h2>
          <p className="services-overview-description">
            Écrin d'Azur propose une approche exigeante de la conciergerie, associant valorisation immobilière, accompagnement des voyageurs et coordination opérationnelle. Chaque prestation s'inscrit dans une démarche personnalisée, au service de votre propriété et de sa mise en location.
          </p>
        </header>
        <ol className="services-overview-grid">
          {services.map(({ number, title, description }) => (
            <li key={number} className="services-overview-item">
              <span className="services-overview-number" aria-hidden="true">{number} /</span>
              <h3 className="services-overview-title">{title}</h3>
              <p className="services-overview-item-description">{description}</p>
              <Link to="/notre-expertise" className="services-overview-service-link" aria-label={`En savoir plus : ${title}`}>
                <span>En savoir plus</span>
              </Link>
            </li>
          ))}
        </ol>
        <div className="services-overview-more">
          <Link to="/notre-expertise" className="services-overview-link">Découvrir toute notre expertise</Link>
        </div>
      </div>
    </section>
  )
}
