import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { sitePages } from '../data/navigation'
import { BrandLogo } from './BrandLogo'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  return (
    <header className="border-b border-sable bg-ivoire">
      <nav aria-label="Navigation principale" className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6">
        <Link to="/" aria-label="Écrin d’Azur — Accueil" onClick={() => setOpen(false)} className="shrink-0">
          <BrandLogo />
        </Link>
        <button ref={toggleRef} type="button" aria-expanded={open} aria-controls="main-menu"
          onClick={() => setOpen(!open)}
          className="min-h-11 rounded border border-bleu px-4 py-2 font-nav text-sm font-normal xl:hidden">
          {open ? 'Fermer' : 'Menu'}
        </button>
        <ul id="main-menu"
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setOpen(false)
              toggleRef.current?.focus()
            }
          }}
          className={`${open ? 'flex' : 'hidden'} w-full flex-col gap-1 xl:flex xl:w-auto xl:flex-row xl:items-center xl:gap-[clamp(14px,1.6vw,28px)]`}>
          {sitePages.map(({ path, title }) => (
            <li key={path}>
              <NavLink to={path} end={path === '/'} onClick={() => setOpen(false)}
                className={`menu-link ${path === '/confier-mon-bien' ? 'menu-cta' : ''}`}>
                <span className={`menu-link-label ${path === '/confier-mon-bien' ? 'menu-cta-label' : ''}`}>{title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
