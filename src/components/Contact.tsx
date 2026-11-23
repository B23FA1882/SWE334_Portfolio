import { useLanguage } from '@/lib/language'
import { useEffect, useRef, useState } from 'react'
import { Check, Copy, Download, Figma, Github, Mail } from 'lucide-react'
const email = 'B23FA1882@ufe.edu.mn'

export default function Contact() {
  const { t } = useLanguage()
  const [copyStatus, setCopyStatus] = useState('')
  const timer = useRef<number | undefined>(undefined)
  useEffect(() => () => window.clearTimeout(timer.current), [])
  async function copyEmail() {
    window.clearTimeout(timer.current)
    try {
      await navigator.clipboard.writeText(email)
      setCopyStatus('Имэйл хуулагдлаа.')
    } catch { setCopyStatus('Доорх имэйл хаягийг сонгоод хуулна уу.') }
    timer.current = window.setTimeout(() => setCopyStatus(''), 4000)
  }
  return <footer className="contact" id="contact">
    <div className="wrap">
      <div className="contact-inner">
        <div><span className="section-label"><span className="label-line"/>{t("ХОЛБОО БАРИХ")}</span><h2>{t("Холбоо")} <em>{t("барья.")}</em></h2><p>{t("Төсөл, дадлага, хамтын ажиллагааны талаар над руу бичээрэй.")}</p></div>
        <div className="contact-links">
          <div className="contact-email"><a href={'mailto:' + email}><Mail size={20}/>{email}</a>
            <button className="copy-button" onClick={copyEmail} aria-label={t("Имэйл хаяг хуулах")}>{copyStatus.startsWith('Имэйл') ? <Check size={16}/> : <Copy size={16}/>}</button>
          </div>
          <a className="contact-git" href="https://github.com/B23FA1882" target="_blank" rel="noreferrer"><Github size={19}/>GitHub · B23FA1882</a>
          <a className="contact-git" href="https://www.figma.com/design/OBLNtmdLxOlF87WkaLtqko/Untitled?node-id=1-788" target="_blank" rel="noreferrer"><Figma size={19}/>{t("Figma · Миний дизайн")}</a>
          <a className="contact-git" href="/downloads/U-Bayasgalan-CV.pdf" download="U-Bayasgalan-CV.pdf"><Download size={19} aria-hidden="true"/>{t("CV татах (PDF)")}</a>
          <span className="copy-feedback" role="status">{t(copyStatus)}</span>
        </div>
      </div>
      <div className="colophon"><span>{t("© 2026 Ө. Баясгалан")}</span><a href="#top">{t("Эхлэл рүү буцах")}</a></div>
    </div>
  </footer>
}
