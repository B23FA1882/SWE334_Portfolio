import { Archive, CodeXml, Figma } from 'lucide-react'
import FigmaScreen from './FigmaScreen'
import type { Project } from '../lib/projects'

export default function ProjectArt({ project }: { project: Project }) {
  if (project.slug === 'greenroom') return <div className="art art-plant" role="img" aria-label="GREENROOM төслийн өөрийн зурсан гурван тасалгааны ургамал">
    <div className="plant-wordmark" aria-hidden="true">Greenroom<span>.</span></div>
    <div className="plant-shelf">
      {['snake','monstera','fern'].map(form => <img key={form} className={'plant-' + form} src={'/images/plant-' + form + '.svg'} alt="" loading="lazy"/>)}
    </div>
    <div className="shelf-plinth" aria-hidden="true"/>
  </div>
  if (project.slug === 'ism-museum') return <div className="art art-museum" role="img" aria-label="ISM Digital Museum дахь тэнхимийн багш нарын хамт олны гэрэл зураг">
    <img src="/images/ism-team.webp" width="940" height="563" loading="lazy" alt=""/>
    <div className="museum-wordmark" aria-hidden="true"><small>ISM DIGITAL MUSEUM</small>Ideas live<br/><em>forever.</em></div>
  </div>
  if (project.slug === 'web231') return <div className="art art-drive" role="img" aria-label="Drive. төслийн эх нүүрэнд ашигласан автомашины зураг">
    <img src="/projects/drive/images/hero.webp" loading="lazy" alt=""/>
    <div className="drive-wordmark" aria-hidden="true"><small>TEST</small>DRIVE.<small>FOR EVERYONE</small></div>
  </div>
  if (project.slug === 'figma-profile') return <div className="art art-figma">
    <div className="figma-caption" aria-hidden="true"><Figma size={20}/><span>Mobile UI</span></div>
    <div className="phone-shell"><FigmaScreen/></div>
  </div>
  return <div className="art art-archive" role="img" aria-label={project.title + ' — репозиторийн хавтасны дүрслэл'}>
    <span className="archive-folder" aria-hidden="true"><Archive size={19}/><b>{project.title}</b><CodeXml size={35}/></span>
  </div>
}
