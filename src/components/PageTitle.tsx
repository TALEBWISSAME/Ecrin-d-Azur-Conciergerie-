import { useEffect } from 'react'

export function PageTitle({ title }: { title: string }) {
  useEffect(() => {
    document.title = `${title} | Écrin d’Azur`
  }, [title])

  return <h1 className="font-heading">{title}</h1>
}
