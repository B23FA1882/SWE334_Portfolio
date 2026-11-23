import { Braces, Database, UsersRound } from 'lucide-react'

const skills = [
  { icon: Braces, name: 'Веб хөгжүүлэлт', level: 80, values: 'React, JavaScript, HTML, CSS' },
  { icon: Database, name: 'Өгөгдөл ба шинжилгээ', level: 75, values: 'MS SQL, PostgreSQL, Power BI, EViews' },
  { icon: UsersRound, name: 'Баг ба харилцаа', level: 80, values: 'Багаар ажиллах, асуудал шийдвэрлэх' },
]
const education = [
  { years: '2008–2020', school: '47-р сургууль, Улаанбаатар', program: 'Бүрэн дунд боловсрол', grade: '95/100' },
  { years: '2020–2022', school: 'Монгол Улсын Их Сургууль', program: 'Хүрээлэн буй орчин судлал' },
  { years: '2023–2026', school: 'Санхүү Эдийн Засгийн Их Сургууль', program: 'Мэдээллийн системийн менежмент (шилжсэн)', grade: '3.4/4.0' },
]

const experience = [
  ['2022', 'Redpath Mongolia', 'Хүний нөөцийн бүртгэл, мэдээлэл'],
  ['2025', 'Програмчлалын дадлага', 'MS SQL өгөгдлийн сан, CV бүртгэлийн програм'],
]

export default function About() {
  return <section className="about-section" id="about" aria-labelledby="about-title">
    <div className="wrap about-grid">
      <div className="about-intro">
        <span className="section-label"><span className="label-line"/>ABOUT ME</span>
        <h2 id="about-title">Миний <em>тухай.</em></h2>
        <p className="about-lead">Сайн уу, би Өнөрсайханы Баясгалан.</p>
        <p>Би СЭЗИС-д мэдээллийн системийн менежментээр дөрөвдүгээр курст суралцдаг. Хүний нөөцийн бүртгэл дээр ажиллаж, дадлагаараа CV бүртгэх програм хийхдээ мэдээллийг зөв зохион байгуулах нь хэрэглэгчийн ажлыг хэрхэн хөнгөвчилдгийг ойлгосон.</p>
        <p>Хичээлээс гадуур White Hats клубийн гишүүн, Cups клубийн гишүүн. Чөлөөт цагаараа сагсан бөмбөг тоглож, сур харвах дуртай.</p>
        <h3 className="journey-title">Боловсрол</h3>
        <ol className="journey">
          {education.map(({ years, school, program, grade }) => (
            <li key={school}>
              <span>{years}</span>
              <div>
                <strong>{school}</strong>
                <p>{program}</p>
                {grade && <p>Голч дүн: {grade}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="about-detail">
        <div className="skills-heading">
          <h3>Ур чадвар</h3>
          <span>Өөрийн үнэлгээ</span>
        </div>
        <div className="skill-list">
          {skills.map(({ icon: Icon, name, values, level }) => (
            <div className="skill-row" key={name}>
              <Icon size={19} aria-hidden="true"/>
              <div>
                <div className="skill-rating"><strong>{name}</strong><span>{level}%</span></div>
                <p>{values}</p>
                <div className="skill-track" aria-hidden="true"><span style={{ width: level + '%' }}/></div>
              </div>
            </div>
          ))}
        </div>
        <h3 className="journey-title">Ажлын туршлага</h3>
        <ol className="journey">{experience.map(([year,title,detail]) => <li key={title}><span>{year}</span><div><strong>{title}</strong><p>{detail}</p></div></li>)}</ol>
        <h3 className="journey-title">Хэл</h3>
        <p>Англи хэл · IELTS 7.5</p>
      </div>
    </div>
  </section>
}
