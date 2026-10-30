import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-sauge bg-bleu text-ivoire">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="font-heading text-3xl font-medium leading-tight tracking-[0.035em]">Écrin d’Azur</Link>
        <p className="text-sm">Conciergerie · Provence-Alpes-Côte d’Azur</p>
      </div>
    </footer>
  )
}
