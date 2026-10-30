import { useEffect } from 'react'

export function usePageMetadata(title: string, description: string) {
  useEffect(() => {
    const previousTitle = document.title
    const existingDescription = document.head.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousDescription = existingDescription?.getAttribute('content')
    const meta = existingDescription ?? document.createElement('meta')

    document.title = title
    meta.setAttribute('name', 'description')
    meta.setAttribute('content', description)
    if (!existingDescription) document.head.appendChild(meta)

    return () => {
      document.title = previousTitle
      if (!existingDescription) meta.remove()
      else if (previousDescription === null || previousDescription === undefined) meta.removeAttribute('content')
      else meta.setAttribute('content', previousDescription)
    }
  }, [title, description])
}
