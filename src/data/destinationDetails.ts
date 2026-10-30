import type { Destination } from './destinations'

export type DestinationDetails = {
  eyebrow: string
  heroTitle: string
  presentationTitle: string
  presentation: string
  servicesTitle: string
  services: readonly { title: string; description: string }[]
  contactTitle: string
  contactText: string
  seoTitle: string
  metaDescription: string
}

export const destinationDetails: Record<Exclude<Destination['path'], '/conciergerie-nice'>, DestinationDetails> = {
  '/conciergerie-cannes': {
    eyebrow: "ÉCRIN D'AZUR · CANNES",
    heroTitle: 'Votre conciergerie à Cannes, entre élégance et sérénité.',
    presentationTitle: 'Cannes, une destination au rayonnement singulier.',
    presentation: "De la Croisette aux ruelles du Suquet, Cannes associe élégance balnéaire, patrimoine et art de vivre méditerranéen. Écrin d'Azur souhaite accompagner les propriétaires dans la mise en valeur de leurs logements et l'organisation de leurs locations saisonnières, avec une approche personnalisée, attentive aux particularités de chaque propriété.",
    servicesTitle: 'Une attention particulière pour votre propriété à Cannes.',
    services: [
      { title: 'Valorisation et présentation du logement', description: "Une réflexion pourra être menée sur la présentation de votre logement à Cannes et de son annonce, en respectant son caractère et vos attentes." },
      { title: 'Accueil et accompagnement des voyageurs', description: "Les échanges avant le séjour et l'organisation des arrivées pourront être préparés avec vous, selon les modalités d'accueil retenues." },
      { title: "Coordination de l'entretien", description: "La préparation du logement et les besoins d'entretien pourront être étudiés, selon les intervenants disponibles et le fonctionnement convenu." },
      { title: 'Suivi des réservations', description: "Un suivi du calendrier et de l'organisation des réservations pourra être envisagé pour votre activité saisonnière, en fonction des outils utilisés." },
    ],
    contactTitle: 'Vous possédez un bien à Cannes ? Parlons-en.',
    contactText: 'Présentez-nous votre propriété et échangeons sur un accompagnement adapté à votre projet.',
    seoTitle: 'Conciergerie à Cannes | Écrin d’Azur',
    metaDescription: "Votre projet de location saisonnière à Cannes : découvrez l'approche Écrin d'Azur et échangeons sur la valorisation et l'accompagnement de votre propriété.",
  },
  '/conciergerie-antibes': {
    eyebrow: "ÉCRIN D'AZUR · ANTIBES",
    heroTitle: "Votre conciergerie à Antibes, l'art de recevoir avec distinction.",
    presentationTitle: 'Antibes, entre patrimoine et douceur méditerranéenne.',
    presentation: "Entre les remparts de la vieille ville, le port Vauban et les paysages du cap d'Antibes, la destination séduit par son caractère authentique et son cadre privilégié. Écrin d'Azur souhaite proposer aux propriétaires une approche de la conciergerie fondée sur l'attention aux détails, la mise en valeur de leur bien et la préparation soignée des séjours.",
    servicesTitle: 'Un accompagnement adapté à votre bien à Antibes.',
    services: [
      { title: 'Valorisation et présentation du logement', description: "La présentation de votre bien à Antibes pourra être pensée pour mettre en lumière son identité, ses espaces et les informations utiles aux futurs voyageurs." },
      { title: 'Accueil et accompagnement des voyageurs', description: "La préparation des arrivées et des échanges avec les voyageurs pourra être définie ensemble, selon les particularités de votre logement." },
      { title: "Coordination de l'entretien", description: "Les besoins de préparation des espaces et de coordination de l'entretien pourront être précisés avec vous, selon les modalités convenues." },
      { title: 'Suivi des réservations', description: "L'organisation du calendrier de votre location à Antibes pourra faire l'objet d'un accompagnement à définir, selon votre projet et vos outils." },
    ],
    contactTitle: 'Votre propriété se situe à Antibes ? Échangeons.',
    contactText: "Parlons de votre logement et des possibilités d'un accompagnement personnalisé.",
    seoTitle: 'Conciergerie à Antibes | Écrin d’Azur',
    metaDescription: "Vous possédez un logement à Antibes ? Écrin d'Azur vous invite à imaginer un accompagnement personnalisé pour sa mise en valeur et vos locations saisonnières.",
  },
  '/conciergerie-villefranche-sur-mer': {
    eyebrow: "ÉCRIN D'AZUR · VILLEFRANCHE-SUR-MER",
    heroTitle: 'Votre conciergerie à Villefranche-sur-Mer, une approche sur mesure.',
    presentationTitle: 'Villefranche-sur-Mer, un écrin au bord de la Méditerranée.',
    presentation: "Avec sa rade emblématique, ses façades colorées et ses ruelles pleines de caractère, Villefranche-sur-Mer offre un cadre singulier aux séjours sur la Côte d'Azur. Écrin d'Azur souhaite accompagner les propriétaires dans la valorisation de leurs biens et la coordination des locations saisonnières, en privilégiant une relation attentive et un accompagnement adapté à chaque propriété.",
    servicesTitle: 'Une attention sur mesure pour votre propriété.',
    services: [
      { title: 'Valorisation et présentation du logement', description: "Une présentation attentive de votre propriété à Villefranche-sur-Mer pourra être envisagée pour exprimer son caractère et préparer une annonce fidèle à ses atouts." },
      { title: 'Accueil et accompagnement des voyageurs', description: "Les informations à partager avant le séjour et les modalités d'arrivée pourront être préparées avec vous pour votre projet de location." },
      { title: "Coordination de l'entretien", description: "Les besoins liés à la préparation des espaces et au suivi de l'entretien pourront être définis selon votre propriété et les intervenants disponibles." },
      { title: 'Suivi des réservations', description: "Un accompagnement dans le suivi du calendrier et des réservations pourra être étudié, en respectant votre organisation et les modalités convenues." },
    ],
    contactTitle: 'Vous possédez un bien à Villefranche-sur-Mer ?',
    contactText: 'Échangeons sur votre projet et imaginons un accompagnement adapté à votre propriété.',
    seoTitle: 'Conciergerie à Villefranche-sur-Mer | Écrin d’Azur',
    metaDescription: "Votre propriété à Villefranche-sur-Mer mérite une approche sur mesure. Découvrez l'esprit Écrin d'Azur et échangeons sur votre projet de location saisonnière.",
  },
}
