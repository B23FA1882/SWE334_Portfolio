import { useEffect } from 'react'
import Lenis from 'lenis'
import { useLanguage } from '@/lib/language'
import Header from './components/Header'
import PortfolioHero from './components/ui/portfolio-hero'
import Projects from './components/Projects'
import About from './components/About'
import BehindSite from './components/BehindSite'
import Contact from './components/Contact'

export default function App() {
  const { t } = useLanguage()
  useEffect(() => {
    const motion = window.matchMedia('(any-pointer: fine) and (prefers-reduced-motion: no-preference)')
    let scroll: Lenis | undefined
    function updateScroll() {
      scroll?.destroy()
      scroll = motion.matches ? new Lenis({ autoRaf: true, lerp: 0.14 }) : undefined
    }
    // Let native anchor navigation, keyboard input and dialog clicks interrupt wheel inertia.
    function interruptScroll() {
      if (scroll?.isScrolling === 'smooth') {
        scroll.stop()
        scroll.start()
      }
    }
    updateScroll()
    motion.addEventListener('change', updateScroll)
    window.addEventListener('pointerdown', interruptScroll, true)
    window.addEventListener('keydown', interruptScroll, true)
    return () => {
      scroll?.destroy()
      motion.removeEventListener('change', updateScroll)
      window.removeEventListener('pointerdown', interruptScroll, true)
      window.removeEventListener('keydown', interruptScroll, true)
    }
  }, [])

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
