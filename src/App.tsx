import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { sitePages } from './data/navigation'
import { Accueil } from './pages/Accueil'
import { Expertise } from './pages/Expertise'
import { Proprietes } from './pages/Proprietes'
import { Destinations } from './pages/Destinations'
import { Maison } from './pages/Maison'
import { Simulateur } from './pages/Simulateur'
import { ConfierBien } from './pages/ConfierBien'
import { NotFound } from './pages/NotFound'
import { destinations } from './data/destinations'
import { DestinationPage } from './pages/DestinationPage'
import { NicePage } from './pages/NicePage'
import { destinationDetails } from './data/destinationDetails'

const pageComponents = [Accueil, Expertise, Proprietes, Destinations, Maison, Simulateur, ConfierBien]

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {sitePages.map((page, index) => {
            const Page = pageComponents[index]
            return <Route key={page.path} path={page.path} element={<Page />} />
          })}
          {destinations.map((destination) => (
            <Route key={destination.path} path={destination.path} element={destination.path === '/conciergerie-nice' ? <NicePage destination={destination} /> : <DestinationPage key={destination.path} destination={destination} details={destinationDetails[destination.path]} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
