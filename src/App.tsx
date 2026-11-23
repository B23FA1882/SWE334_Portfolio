import Header from './components/Header'
import PortfolioHero from './components/ui/portfolio-hero'
import Projects from './components/Projects'
import About from './components/About'
import BehindSite from './components/BehindSite'
import Contact from './components/Contact'

export default function App() {
  return <div id="top">
    <a className="skip-link" href="#main">Үндсэн хэсэг рүү очих</a>
    <Header/>
    <main id="main">
      <PortfolioHero/>
      <About/>
      <Projects/>
      <BehindSite/>
    </main>
    <Contact/>
  </div>
}
