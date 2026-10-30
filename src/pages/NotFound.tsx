import { Link } from 'react-router-dom'
import { PageTitle } from '../components/PageTitle'

export function NotFound() {
  return (
    <>
      <PageTitle title="Page introuvable" />
      <Link to="/" className="mt-6 inline-block underline underline-offset-4">Retour à l’accueil</Link>
    </>
  )
}
