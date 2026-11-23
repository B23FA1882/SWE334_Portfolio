import { useLanguage } from '@/lib/language'
import { useState, type CSSProperties } from 'react'
import { cn } from '@/lib/utils'
import { Aperture, Camera, MapPin } from 'lucide-react'

const careers = [
  { title: 'Business Analyst', description: 'Хэрэглэгчид юу хэрэгтэйг судалж, түүнийгээ системийн шаардлага болгохыг сонирхдог.' },
  { title: 'Data Analyst', description: 'Өгөгдөлд дүн шинжилгээ хийж, үр дүнг нь ойлгомжтой графикаар харуулахыг сонирхдог.' },
  { title: 'IT Auditor', description: 'Системд хэн ямар эрхээр ханддаг, тэр эрхийг хэрхэн хянадагийг судлахыг сонирхдог.' },
]

function NameLine({ word, second = false }: { word: string; second?: boolean }) {
  return <span aria-hidden="true" className={cn('name-row', second && 'name-accent')}>
    {Array.from(word, (letter, i) => <span key={i} style={{ '--delay': (i * 24 + (second ? 100 : 0)) + 'ms' } as CSSProperties}>{letter}</span>)}
  </span>
}

export default function PortfolioHero() {
  const { t } = useLanguage()
  const [color, setColor] = useState(false)
  const [career, setCareer] = useState<(typeof careers)[number] | null>(null)
  return <section className="hero wrap" aria-labelledby="hero-title">
    <div className="flex items-center">
      <span className="folio-label"><i/>{t("Хувийн портфолио")}</span>
    </div>
    <div className="name-stage">
      <h1 id="hero-title" aria-label={t("Өнөрсайханы Баясгалан")}>
        <NameLine word="UNURSAIKHAN"/><NameLine word="BAYASGALAN" second/>
      </h1>
      <button className={cn('portrait', color && 'in-color')} onClick={() => setColor(!color)}
        aria-label={t("Хөргийг өнгөтөөр харах")} aria-pressed={color} title={t("Хөргийн өнгө солих")}>
        <img src="/images/bayasgalan.webp" width="470" height="643" fetchPriority="high" alt={t("Ө. Баясгалангийн хөрөг")}/>
        <span className="photo-symbol">{color ? <Aperture size={15}/> : <Camera size={15}/>}</span>
      </button>
    </div>
    <div className="hero-bottom">
      <span className="location"><MapPin size={15} aria-hidden="true"/> {t("Монгол, Улаанбаатар")}</span>
      <div className="hero-intro">
        <p className="role">{t("Мэдээллийн системийн менежментийн оюутан")}</p>
        <div className="career-options" role="group" aria-label={t("Сонирхож буй мэргэжлийн чиглэлүүд")}>
          {careers.map(option => (
            <button key={option.title} type="button" lang="en" aria-pressed={career === option}
              aria-controls="career-description" onClick={() => setCareer(career === option ? null : option)}>
              {option.title}
            </button>
          ))}
        </div>
        <p id="career-description" className="career-description" aria-live="polite">{career && t(career.description)}</p>
      </div>
      <a className="work-jump" href="#work"><span className="scroll-mark" aria-hidden="true"/>{t("Бүтээлүүд үзэх")}</a>
    </div>
  </section>
}
