import { Plus } from 'lucide-react'
const repo = 'https://github.com/B23FA1882/SWE334_Portfolio/blob/main/'
const questions = [
  ['«Дотор нь» товч юу өөрчилдөг вэ?', 'Projects компонентын inside төлөв картын нүүрийг удирдана. Дотор талыг нээхэд төсөл бүрийн алхам харагдана. Нэг картын алхмыг солиход зөвхөн тэр картын тайлбар шинэчлэгддэг.', 'src/components/Projects.tsx'],
  ['Бүтээлүүдийн мэдээлэл хаанаас ирдэг вэ?', 'useProjects эхлээд хамт ирсэн нийтэд нээлттэй хувилбарыг харуулна. Дараа нь Supabase-аас нийтлэгдсэн мөрүүдийг дарааллаар уншина. Сүлжээ тасарсан үед эхний хувилбараар үргэлжлүүлэн үзэж болно.', 'src/lib/projects.ts'],
  ['Зочны эрхийг хэрхэн хязгаарласан бэ?', 'PostgreSQL дээр зочинд зөвхөн SELECT эрх олгосон. Row Level Security дүрэм published утга үнэн мөрүүдийг л буцаана. Сайтын браузерт нийтэд ашиглах publishable key очдог.', 'supabase/migrations/20261123010000_portfolio_projects.sql'],
  ['Гар утас болон гарын товчоор хэрхэн ашиглах вэ?', '720 пиксел болон түүнээс бага өргөнд картууд нэг баганад орж, цэс товч руу шилжинэ. Tab-аар үйлдэл бүрт очиж, Escape-аар цэс эсвэл төслийн цонхыг хааж болно. Хөдөлгөөн багасгах тохиргоотой үед нэрийн анимэйшн алгасагдана.', 'src/styles.css'],
]
export default function BehindSite() {
  return <section id="process" className="process-section wrap" aria-labelledby="process-title">
    <div><span className="section-label"><span className="label-line"/>BUILD NOTES</span><h2 id="process-title">Сайтын <em>цаана.</em></h2></div>
    <div className="questions">{questions.map(([q,a,file]) => <details key={q}><summary>{q}<Plus size={19}/></summary><div><p>{a}</p><a href={repo + file} target="_blank" rel="noreferrer">Холбогдох код үзэх</a></div></details>)}</div>
  </section>
}
