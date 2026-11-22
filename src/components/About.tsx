import { Braces, Database, UsersRound } from 'lucide-react'

const skills = [
  { icon: Braces, name: 'Веб хөгжүүлэлт', values: 'React, JavaScript, HTML, CSS' },
  { icon: Database, name: 'Өгөгдөл ба шинжилгээ', values: 'MS SQL, PostgreSQL, Power BI, EViews' },
  { icon: UsersRound, name: 'Баг ба харилцаа', values: 'Багаар ажиллах, асуудал шийдвэрлэх, англи хэл · IELTS 7.5' },
]
const journey = [
  ['2022', 'Redpath Mongolia', 'Хүний нөөцийн бүртгэл, мэдээлэл'],
  ['2023–2026', 'Санхүү эдийн засгийн их сургууль', 'Мэдээллийн системийн менежмент'],
  ['2025', 'Програмчлалын дадлага', 'MS SQL өгөгдлийн сан, CV бүртгэлийн програм'],
]

export default function About() {
  return <section className="about-section" id="about" aria-labelledby="about-title">
    <div className="wrap about-grid">
      <div className="about-intro">
        <span className="section-label"><span className="label-line"/>ABOUT ME</span>
        <h2 id="about-title">Миний <em>тухай.</em></h2>
        <p className="about-lead">Сайн уу, би Баясгалан.</p>
        <p>Би СЭЗИС-д мэдээллийн системийн менежментээр дөрөвдүгээр курст суралцдаг. Хүний нөөцийн бүртгэл дээр ажиллаж, дадлагаараа CV бүртгэх програм хийхдээ мэдээллийг зөв зохион байгуулах нь хэрэглэгчийн ажлыг хэрхэн хөнгөвчилдгийг харсан.</p>
        <p>Хичээлээс гадуур White Hats клубийн итгэмжлэгдсэн гишүүн, Cups клубийн дэд тэргүүнээр ажилладаг. Чөлөөт цагаараа сагсан бөмбөг тоглож, сур харвах дуртай.</p>
      </div>
      <div className="about-detail">
        <h3>Ур чадвар</h3>
        <div className="skill-list">{skills.map(({icon: Icon,name,values}) => <div className="skill-row" key={name}><Icon size={19}/><div><strong>{name}</strong><p>{values}</p></div></div>)}</div>
        <h3 className="journey-title">Туршлага ба боловсрол</h3>
        <ol className="journey">{journey.map(([year,title,detail]) => <li key={title}><span>{year}</span><div><strong>{title}</strong><p>{detail}</p></div></li>)}</ol>
      </div>
    </div>
  </section>
}
