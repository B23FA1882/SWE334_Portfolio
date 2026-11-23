import { useLanguage } from '@/lib/language'
import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'

const root = '/images/coffee/'
const products = [
  { name: 'БРАЗИЛ', image: 'brazil', roast: 'Дундаж', node: '1-1226' },
  { name: 'КАФЕЙНГҮЙ', image: 'decaf', roast: 'Дундаж', node: '1-1262' },
  { name: 'ЗЭРЛЭГ МУУР', image: 'wildcat', roast: 'Гүн', node: '1-1352' },
  { name: 'КЕНЯА', image: 'kenya', roast: 'Дундаж', node: '1-1244' },
]
const prototype = 'https://www.figma.com/proto/OBLNtmdLxOlF87WkaLtqko/Untitled?page-id=0%3A1&scaling=scale-down&starting-point-node-id=1-788&node-id='
export const coffeePrototype = prototype + '1-788'

function icon(name: string, width: number, height = width) {
  return <img alt="" src={root + name} width={width} height={height} draggable={false}/>
}

export default function FigmaScreen({ interactive = false }: { interactive?: boolean }) {
  const { t } = useLanguage()
  const wrapper = useRef<HTMLDivElement>(null)
  const scroller = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [query, setQuery] = useState('')
  const [slide, setSlide] = useState(0)
  const banners = ['banner', 'banner-second', 'banner-third']
  const matches = (name: string) => name.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase())
  const filtered = products.filter(p => matches(t(p.name)))
  useLayoutEffect(() => {
    const frame = wrapper.current
    if (!frame) return
    const resize = () => setScale(frame.clientWidth / 375)
    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(frame)
    return () => observer.disconnect()
  }, [])

  function jump(node: string, label: string, content: ReactNode) {
    return interactive
      ? <a href={prototype + node} target="_blank" rel="noreferrer" aria-label={label}>{content}</a>
      : <span>{content}</span>
  }

  return <div className="figma-screen" ref={wrapper} role={interactive ? 'group' : 'img'} aria-label={t("Кофены дэлгүүрийн нүүр дэлгэц")}>
    <div className="coffee-stage" style={{ transform: 'scale(' + scale + ')' }}>
      <div className="coffee-status" aria-hidden="true"><b>9:41</b>{icon('notch.svg',219,30)}
        <span>{icon('signal.svg',20,16)}{icon('wifi.svg',16)}<i className="coffee-battery">{icon('battery-outline.svg',22,12)}{icon('battery-tip.svg',2,4)}{icon('battery-fill.svg',18,8)}</i></span>
      </div>
      <div className="coffee-nav">{jump('1-820',t("Цэс нээх"),icon('menu.svg',40,36))}<span>{t("Тавтай морил")}</span>{jump('1-1738',t("Мэдэгдэл үзэх"),icon('bell.webp',23))}</div>
      <div className="coffee-search">
        {interactive ? <input aria-label={t("Кофе хайх")} placeholder={t("Хайх зүйл, нэр, түлхүүр үгийг бичнэ үү.")} value={query} onChange={e => {setQuery(e.target.value); scroller.current?.scrollTo(0,0)}}/> : <span>{t("Хайх зүйл, нэр, түлхүүр үгийг бичнэ үү.")}</span>}
        {icon('search.webp',20)}
      </div>
      <div className="coffee-scroll" ref={scroller} tabIndex={interactive ? 0 : undefined} aria-label={interactive ? t("Кофены бүтээгдэхүүнүүдийг гүйлгэж үзэх") : undefined}>
        <div className="coffee-content">
          {interactive ? <button className="coffee-banner" aria-label={t("Дараагийн кофены зураг")} onClick={() => setSlide((slide + 1) % banners.length)}>{icon(banners[slide] + '.webp',326,144)}</button> : <div className="coffee-banner">{icon('banner.webp',326,144)}</div>}
          {filtered.length > 0 && <><strong className="coffee-heading">{t("Алдартай бүтээгдэхүүн")}</strong><div className="coffee-grid">
            {filtered.map(p => <div className="coffee-product" key={p.image}>
              {icon(p.image + '.webp',160)}<span className="coffee-like">{jump('1-953',t("Зүрхэлсэн бүтээгдэхүүн"),icon('heart.webp',20))}</span>
              <b>{t(p.name)}</b><span>{t(p.roast)} {t("хууралттай")}</span><span>{t("100% Арабика")}</span>
              <div className="coffee-buy">{jump(p.node,t(p.name) + ' ' + t("кофег үзэх"),t("Худалдаж авах"))}</div>
            </div>)}
          </div></>}
          {matches(t("ПЕРУ")) && <><strong className="coffee-heading">{t("Өнөөдрийн санал болгох")}</strong>
            <div className="coffee-offer">{icon('peru.webp',140)}<div><b>{t("ПЕРУ")}</b><span>{t("Дундаж хууралттай")}</span><span>Arabica</span><span><del>30000₮</del> <em>28000₮</em></span></div>{jump('1-1316',t("Перу кофег үзэх"),icon('add.webp',35))}</div></>}
          {!query.trim() && <><strong className="coffee-heading">{t("Сүүлд үзсэн бүтээгдэхүүн")}</strong><div className="coffee-more">{jump('1-1012',t("Бүтээгдэхүүн үзэх"),t("Нэмж харах"))}</div>
            {[['decaf',t("КАФЕЙНГҮЙ"),t("3 өдрийн өмнө")],['tanzania',t("ТАНЗАНИА"),t("3 сарын өмнө")]].map(([photo,name,date]) => <div className="coffee-recent" key={photo}>{icon(photo + '.webp',94,80)}<b>{name}</b><small>{date}</small></div>)}</>}
          {filtered.length === 0 && !matches(t("ПЕРУ")) && <p className="coffee-empty">{t("Бүтээгдэхүүн олдсонгүй.")}</p>}
        </div>
      </div>
      <div className="coffee-tabs"><span className="coffee-home">{interactive ? <button aria-label={t("Нүүрийн эхэнд очих")} onClick={() => {setQuery('');scroller.current?.scrollTo(0,0)}}>{icon('home.webp',40)}</button> : icon('home.webp',40)}</span>
        {jump('1-1639',t("Сагс үзэх"),icon('cart.webp',35))}{jump('1-915',t("Зүрхэлсэн бүтээгдэхүүн үзэх"),icon('heart.webp',35))}{jump('1-881',t("Профайл үзэх"),icon('profile.webp',35))}
      </div>
    </div>
  </div>
}
