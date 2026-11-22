import { useState, type CSSProperties } from 'react'
import { cn } from '@/lib/utils'
import { Aperture, Camera, MapPin } from 'lucide-react'

function NameLine({ word, second = false }: { word: string; second?: boolean }) {
  return <span aria-hidden="true" className={cn('name-row', second && 'name-accent')}>
    {Array.from(word, (letter, i) => <span key={i} style={{ '--delay': (i * 24 + (second ? 100 : 0)) + 'ms' } as CSSProperties}>{letter}</span>)}
  </span>
}

export default function PortfolioHero() {
  const [color, setColor] = useState(false)
  return <section className="hero wrap" aria-labelledby="hero-title">
    <div className="hero-top flex items-center justify-between">
      <span className="folio-label"><i/>ХУВИЙН ПОРТФОЛИО</span>
      <span className="year-label">SWE334 <span>/</span> 2026</span>
    </div>
    <div className="name-stage">
      <h1 id="hero-title" aria-label="Өнөрсайханы Баясгалан">
        <NameLine word="UNURSAIKHAN"/><NameLine word="BAYASGALAN" second/>
      </h1>
      <button className={cn('portrait', color && 'in-color')} onClick={() => setColor(!color)}
        aria-label="Хөргийг өнгөтөөр харах" aria-pressed={color} title="Хөргийн өнгө солих">
        <img src="/images/bayasgalan.webp" width="470" height="643" fetchPriority="high" alt="Ө. Баясгалангийн хөрөг"/>
        <span className="photo-symbol">{color ? <Aperture size={15}/> : <Camera size={15}/>}</span>
      </button>
    </div>
    <div className="hero-bottom">
      <span className="location"><MapPin size={15} aria-hidden="true"/> Монгол, Улаанбаатар</span>
      <div className="hero-intro">
        <p className="role">Мэдээллийн системийн менежментийн оюутан</p>
        <p className="tagline">Би өгөгдлийг цэгцэлж, хүнд хэрэглэхэд эвтэйхэн веб систем бүтээдэг.</p>
      </div>
      <a className="work-jump" href="#work"><span className="scroll-mark" aria-hidden="true"/>Бүтээлүүд үзэх</a>
    </div>
  </section>
}
