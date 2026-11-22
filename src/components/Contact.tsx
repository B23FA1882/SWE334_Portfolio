import { useEffect, useRef, useState } from 'react'
import { Check, Copy, Github, Mail } from 'lucide-react'
const email = 'B23FA1882@ufe.edu.mn'

export default function Contact() {
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
        <div><span className="section-label"><span className="label-line"/>CONTACT</span><h2>Холбоо <em>барья.</em></h2><p>Төсөл, дадлага, хамтын ажиллагааны талаар над руу бичээрэй.</p></div>
        <div className="contact-links">
          <div className="contact-email"><a href={'mailto:' + email}><Mail size={20}/>{email}</a>
            <button className="copy-button" onClick={copyEmail} aria-label="Имэйл хаяг хуулах">{copyStatus.startsWith('Имэйл') ? <Check size={16}/> : <Copy size={16}/>}</button>
          </div>
          <a className="contact-git" href="https://github.com/B23FA1882" target="_blank" rel="noreferrer"><Github size={19}/>GitHub · B23FA1882</a>
          <span className="copy-feedback" role="status">{copyStatus}</span>
        </div>
      </div>
      <div className="colophon"><span>© 2026 Ө. Баясгалан</span><a href="#top">Эхлэл рүү буцах</a></div>
    </div>
  </footer>
}
