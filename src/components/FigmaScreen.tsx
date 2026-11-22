import { useId, useState } from 'react'

const assets = '/images/figma/'
const fields = [
  ['Нэр', 'Баясгалан'], ['Овог', 'Өнөрсайхан'], ['Хүйс', 'Эрэгтэй'],
  ['Утасны дугаар', '•••• ••••'], ['Цахим шуудан', 'B23FA1882@ufe.edu.mn'],
  ['Нууц үг', '***********'],
]

function Asset({ name, left, top, width, height }: { name: string; left: number; top: number; width: number; height: number }) {
  return <image href={assets + name} x={left} y={top} width={width} height={height}/>
}

/** Vector layout of the selected Figma frame; SVG keeps all original layers in proportion. */
export default function FigmaScreen({ interactive = false }: { interactive?: boolean }) {
  const id = useId()
  const [updated, setUpdated] = useState(false)
  return <svg className="figma-screen" viewBox="0 0 375 812" role={interactive ? 'group' : 'img'} aria-label="Хэрэглэгчийн мэдээлэл. Зургаан талбар ба доод цэстэй гар утасны Figma дэлгэц">
    <defs>
      <clipPath id={id + '-fields'}><rect x="20" y="108" width="335" height="612"/></clipPath>
      <linearGradient id={id + '-inset'} x2="0" y2="1" gradientUnits="objectBoundingBox">
        <stop offset="0" stopColor="#bababa"/><stop offset=".14" stopColor="white"/><stop offset="1" stopColor="white"/>
      </linearGradient>
    </defs>
    <rect width="375" height="812" fill="#f6f6f6"/>
    <rect width="375" height="44" fill="white"/>
    <Asset name="Notch.svg" left={78} top={-2} width={219} height={30}/>
    <text x="32" y="29" className="fig-status">9:41</text>
    <Asset name="IOsIconSmallMobileSignal.svg" left={295} top={15} width={20} height={16}/>
    <Asset name="IOsIconSmallWifi.svg" left={317} top={15} width={16} height={16}/>
    <Asset name="OutlineBorder.svg" left={336} top={17} width={22} height={11.333}/>
    <Asset name="Node.svg" left={359} top={21} width={1.328} height={4}/>
    <Asset name="Charge.svg" left={338} top={19} width={18} height={7.333}/>
    <rect x="0" y="40" width="375" height="48" fill="#9c6f44" fillOpacity=".1"/>
    <Asset name="IOsIcon24ThreeLineMenu.svg" left={8} top={44} width={40} height={36}/>
    <text x="187" y="70" textAnchor="middle" className="fig-title">Хэрэглэгчийн мэдээлэл</text>
    <Asset name="Image28.png" left={336} top={52} width={23} height={23}/>
    {interactive ? <foreignObject x="20" y="108" width="335" height="612">
      <form className="fig-form" aria-label="Figma загварын жишээ маягт" onChange={() => setUpdated(false)} onSubmit={event => { event.preventDefault(); setUpdated(true) }}>
        {fields.map(([label, value], index) => <label key={label}>
          <span>{label}</span>
          <input aria-label={label} defaultValue={value} readOnly={index > 1} autoComplete="off" spellCheck={false}/>
        </label>)}
        <button type="submit">Мэдээллээ шинэчлэх</button>
        <p role="status">{updated ? 'Жишээ мэдээлэл энэ цонхонд шинэчлэгдлээ.' : ''}</p>
      </form>
    </foreignObject> : <g clipPath={'url(#' + id + '-fields)'}>
      {fields.map(([label,value], i) => <g key={label} transform={'translate(20,' + (108 + 102 * i) + ')'}>
        <text x="20" y="17" className="fig-label">{label}</text>
        <rect x="0" y="26" width="335" height="51" rx="8" fill={'url(#' + id + '-inset)'}/>
        <text x="20" y="58" className="fig-value">{value}</text>
      </g>)}
    </g>}
    <rect x="0" y="758" width="375" height="54" fill="#d7975b"/>
    <Asset name="Ellipse1.svg" left={282} top={725} width={84} height={84}/>
    <Asset name="HomeWhitePic.png" left={39} top={767} width={35} height={35}/>
    <Asset name="ShopWhitePic.png" left={127} top={767} width={35} height={35}/>
    <Asset name="HeartWhitePic.png" left={220} top={767} width={35} height={35}/>
    <Asset name="UserBlackPic.png" left={304} top={747} width={40} height={40}/>
  </svg>
}
