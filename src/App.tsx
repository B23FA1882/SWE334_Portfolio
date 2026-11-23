import { useLanguage } from '@/lib/language'
import Header from './components/Header'
import PortfolioHero from './components/ui/portfolio-hero'
import Projects from './components/Projects'
import About from './components/About'
import BehindSite from './components/BehindSite'
import Contact from './components/Contact'

export default function App() {
  const { t } = useLanguage()
  return <div id="top">
    <a className="skip-link" href="#main">{t("Үндсэн хэсэг рүү очих")}</a>
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
