import { useLanguage } from '@/lib/language'
import { useEffect, useRef, useState } from 'react'
import { BookOpen, Code2, ExternalLink, GitBranch, Layers3, Monitor, ScanLine, X } from 'lucide-react'
import { cases } from '../data/cases'
import { useProjects, type Project } from '../lib/projects'
import ProjectArt from './ProjectArt'
import FigmaScreen, { coffeePrototype } from './FigmaScreen'

function ProjectFlow({ project, compact = false }: { project: Project; compact?: boolean }) {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)
  const details = cases[project.slug]
  if (!details) return <div className="flow"><p>{t(project.description)}</p></div>
  const current = details.steps[active]
  return <div className={'flow' + (compact ? ' flow-compact' : '')}>
    <div className="flow-heading"><GitBranch size={18}/><strong>{t(details.headline)}</strong></div>
    <div className="step-list" role="group" aria-label={t(project.title) + ' ' + t("төслийн алхмууд")}>
      {details.steps.map((step, i) => <button type="button" key={step.title} aria-pressed={i === active}
        className={i === active ? 'step active' : 'step'} onClick={() => setActive(i)}>
        <span>{String(i+1).padStart(2,'0')}</span>{t(step.title)}
      </button>)}
    </div>
    <div className="step-detail" aria-live="polite"><p>{t(current.body)}</p>
      {current.file && <a href={(details.codeRoot || project.source_url + '/blob/main/') + current.file} target="_blank" rel="noreferrer"><Code2 size={14}/>{t("Код үзэх")}</a>}
    </div>
  </div>
}

function CaseDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const { t } = useLanguage()
  const dialog = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const node = dialog.current
    const previousOverflow = document.body.style.overflow
    node?.showModal()
    document.body.style.overflow = 'hidden'
    return () => { node?.close(); document.body.style.overflow = previousOverflow }
  }, [])
  return <dialog ref={dialog} className="case-dialog" aria-labelledby="case-title" onCancel={onClose}
    onClick={event => { if (event.target === event.currentTarget) onClose() }}>
    <div className="dialog-body">
      <div className="dialog-top"><span className="meta">{t(project.category)}</span>
        <button autoFocus className="icon-button" aria-label={t("Дэлгэрэнгүй цонх хаах")} onClick={onClose}><X size={19}/></button></div>
      <h2 id="case-title">{t(project.title)}</h2><p className="dialog-desc">{t(project.description)}</p>
      {project.slug === 'figma-profile' ? <div className="dialog-fig"><FigmaScreen interactive/><p>{t("Утасны дэлгэц дотор доош гүйлгэж кофены төрлүүдийг үзээрэй.")}</p></div> : project.live_url ? (
        <iframe className="project-preview" src={project.live_url} title={t(project.title) + ' ' + t("— сайтын үзүүлэн")}/>
      ) : <ProjectArt project={project}/>}
      <ProjectFlow key={project.slug} project={project}/>
      <div className="dialog-links">
        {project.slug === 'figma-profile' && <a className="button primary" href={coffeePrototype} target="_blank" rel="noreferrer"><Monitor size={16}/>{t("Прототип нээх")}</a>}
        {project.live_url && <a className="button primary" href={project.live_url} target="_blank" rel="noreferrer"><Monitor size={16}/>{t("Сайт нээх")}</a>}
        <a className="button outline" href={project.source_url} target="_blank" rel="noreferrer"><ExternalLink size={16}/>{project.slug === 'figma-profile' ? t("Figma дээр үзэх") : t("GitHub дээр үзэх")}</a>
        {project.slug === 'web231' && <a className="button outline" href="https://github.com/B23FA1882/web231_midterm" target="_blank" rel="noreferrer"><GitBranch size={15}/>{t("WEB231 репозитор")}</a>}
      </div>
    </div>
  </dialog>
}

export default function Projects() {
  const { t } = useLanguage()
  const projects = useProjects()
  const [inside, setInside] = useState(false)
  const [selected, setSelected] = useState<Project | null>(null)
  return <section className="work-section section wrap" id="work" aria-labelledby="work-title">
    <div className="section-top">
      <div><span className="section-label"><span className="label-line"/>{t("БҮТЭЭЛҮҮД")}</span><h2 id="work-title"><em>{t("Бүтээлүүд.")}</em></h2></div>
      <div className="view-toggle" role="group" aria-label={t("Бүтээлүүдийн харагдац")}>
        <button aria-pressed={!inside} onClick={() => setInside(false)}><Monitor size={16}/>{t("Гадаад төрх")}</button>
        <button aria-pressed={inside} onClick={() => setInside(true)}><ScanLine size={16}/>{t("Дотор нь")}</button>
      </div>
    </div>
    <div className="projects-grid">
      {projects.map(project => <article className="project" key={project.slug}>
        {inside ? <div className="flow-cover"><ProjectFlow project={project} compact/></div> :
          <button className="cover-button" aria-label={t(project.title) + ' ' + t("дэлгэрэнгүй")} onClick={() => setSelected(project)}>
            <ProjectArt project={project}/><span className="cover-icon"><BookOpen size={17}/></span>
          </button>}
        <div className="project-info">
          <span className="meta">{t(project.category)}</span>
          <h3><button onClick={() => setSelected(project)}>{t(project.title)}</button></h3>
          <p>{t(project.description)}</p>
          <div className="project-foot">
            <div className="tags">{project.tags.map(tag => <span key={tag}>{t(tag)}</span>)}</div>
            <a className="source-link" href={project.source_url} target="_blank" rel="noreferrer" aria-label={t(project.title) + ' ' + t("эх сурвалж")}><ExternalLink size={16}/><span>{project.slug === 'figma-profile' ? 'Figma' : 'GitHub'}</span></a>
          </div>
        </div>
      </article>)}
    </div>
    {projects.length === 0 && <p className="empty"><Layers3 size={22}/>{t("Одоогоор нийтлэгдсэн бүтээл алга.")}</p>}
    {selected && <CaseDialog project={selected} onClose={() => setSelected(null)}/>}
  </section>
}
