import { useLanguage } from '@/lib/language'
import { useEffect, useRef, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

const nav = [
  ['#about', 'Миний тухай'], ['#work', 'Бүтээлүүд'], ['#contact', 'Холбоо барих'],
]
function initialTheme() {
  try { return localStorage.getItem('ub-portfolio-theme') === 'light' ? 'light' : 'dark' }
  catch { return 'dark' }
}

export default function Header() {
  const { t, language, setLanguage } = useLanguage()
  const [theme, setTheme] = useState(initialTheme)
  const [open, setOpen] = useState(false)
  const menu = useRef<HTMLElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#131411' : '#f4f4ea')
    try { localStorage.setItem('ub-portfolio-theme', theme) } catch { /* Storage may be disabled. */ }
  }, [theme])

  useEffect(() => {
    if (!open) return
    function keyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') { setOpen(false); trigger.current?.focus() }
    }
    function pointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !menu.current?.contains(event.target)) setOpen(false)
    }
    function resize() { if (window.innerWidth > 720) setOpen(false) }
    window.addEventListener('keydown', keyDown)
    window.addEventListener('pointerdown', pointerDown)
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('keydown', keyDown)
      window.removeEventListener('pointerdown', pointerDown)
      window.removeEventListener('resize', resize)
    }
  }, [open])

  return <header className="masthead" ref={menu}>
    <div className="wrap mast-inner">
      <a className="brand" href="#top" aria-label={t("Ө. Баясгалан, нүүр")} onClick={() => setOpen(false)}>
        <span className="monogram" aria-hidden="true">ub<span>.</span></span>
        <span className="brand-rule"/><span className="brand-text">{t("Ө. Баясгалан")}</span>
      </a>
      <nav className="desktop-nav" aria-label={t("Үндсэн цэс")}>
        {nav.map(([to,label]) => <a href={to} key={to}>{t(label)}</a>)}
      </nav>
      <div className="nav-tools">
        <button className="theme-toggle" type="button" aria-label={theme === 'dark' ? t("Гэрэлтэй горимд шилжих") : t("Бараан горимд шилжих")} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <Sun size={18}/> : <Moon size={17}/>}
        </button>
        <div className="language-switch" role="group" aria-label={t('Хуудасны хэл')}>
          {(['mn', 'en'] as const).map(code => (
            <button key={code} type="button" lang={code} aria-label={code === 'mn' ? 'Монгол' : 'English'}
              aria-pressed={language === code} onClick={() => setLanguage(code)}>
              {code.toUpperCase()}
            </button>
          ))}
        </div>
        <button className="mobile-menu" ref={trigger} aria-label={open ? t("Цэс хаах") : t("Цэс нээх")} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {open ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </div>
    </div>
    {open && <nav id="mobile-nav" className="mobile-nav" aria-label={t("Гар утасны цэс")}>
      {nav.map(([to,label]) => <a key={to} href={to} onClick={() => setOpen(false)}>{t(label)}</a>)}
    </nav>}
  </header>
}
