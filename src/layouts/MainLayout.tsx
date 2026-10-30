import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { destinations } from '../data/destinations'

export function MainLayout() {
  const { pathname } = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  const previousPath = useRef(pathname)
  const isFullWidth = pathname === '/' || destinations.some(({ path }) => path === pathname.replace(/\/+$/, ''))

  useEffect(() => {
    if (previousPath.current !== pathname) {
      window.scrollTo(0, 0)
      mainRef.current?.focus()
      previousPath.current = pathname
    }
  }, [pathname])

  return (
    <div className="flex min-h-svh flex-col">
      <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:z-10 focus:bg-bleu focus:p-4 focus:text-ivoire">Aller au contenu</a>
      <Navbar key={pathname} />
      <main id="contenu" ref={mainRef} tabIndex={-1} className={isFullWidth ? 'w-full flex-1 outline-none' : 'mx-auto w-full max-w-7xl flex-1 px-6 py-16 outline-none sm:py-24'}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
