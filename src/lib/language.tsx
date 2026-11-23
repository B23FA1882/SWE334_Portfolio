import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import english from '../data/english.json'

type Language = 'mn' | 'en'
const storageKey = 'ub-portfolio-language'
const translations: Readonly<Record<string, string>> = english
const original = (text: string) => text
const inEnglish = (text: string) => translations[text] ?? text

const LanguageContext = createContext<{
  language: Language
  setLanguage: (language: Language) => void
  t: (text: string) => string
} | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try { return localStorage.getItem(storageKey) === 'en' ? 'en' : 'mn' }
    catch { return 'mn' }
  })
  const t = language === 'en' ? inEnglish : original

  useEffect(() => {
    document.documentElement.lang = language
    document.title = t('Ө. Баясгалан — Хувийн портфолио')
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('Өнөрсайханы Баясгалангийн портфолио. Мэдээллийн систем, веб хөгжүүлэлт, интерфэйс дизайны бүтээлүүд.'))
    try { localStorage.setItem(storageKey, language) } catch { /* Storage can be disabled. */ }
  }, [language, t])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('LanguageProvider is required')
  return context
}
