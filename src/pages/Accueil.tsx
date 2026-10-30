import { useEffect } from 'react'
import { Hero } from '../components/Hero'
import { PhotoCredit } from '../components/PhotoCredit'
import { CommitmentsStrip } from '../components/CommitmentsStrip'
import { commitments } from '../data/commitments'
import { ServicesOverview } from '../components/ServicesOverview'
import { PropertyInvitation } from '../components/PropertyInvitation'
import { DestinationsPreview } from '../components/DestinationsPreview'

export function Accueil() {
  useEffect(() => {
    document.title = 'Accueil | Écrin d’Azur'
  }, [])

  return (
    <>
      <Hero
        eyebrow="ÉCRIN D'AZUR · CONCIERGERIE PRIVÉE"
        title="L'art de prendre soin de votre propriété."
        description="Un accompagnement personnalisé pour valoriser votre bien, simplifier votre location saisonnière et offrir une expérience soignée à vos voyageurs."
        primaryLink={{ label: 'Confier mon bien', to: '/confier-mon-bien' }}
        secondaryLink={{ label: 'Découvrir nos services', to: '/notre-expertise' }}
      />
      <PhotoCredit
        place="Villefranche-sur-Mer, vue sur la rade"
        photographer="Hajni"
        photographerUrl="https://www.pexels.com/@hajni-133428291/"
        originalUrl="https://www.pexels.com/fr-fr/photo/superbe-vue-aerienne-de-la-baie-de-villefranche-sur-mer-32793962/"
        source="Pexels"
        license="Licence Pexels"
        licenseUrl="https://www.pexels.com/license/"
      />
      <CommitmentsStrip items={commitments} />
      <ServicesOverview />
      <PropertyInvitation />
      <DestinationsPreview />
    </>
  )
}
