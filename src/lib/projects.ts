import { useEffect, useState } from 'react'
import snapshot from '../data/projects.json'
import { publicConfig } from './public-config'

export type Project = (typeof snapshot)[number]
const columns = 'slug,title,category,description,tags,source_url,live_url,sort_order'

function isProject(value: unknown): value is Project {
  if (!value || typeof value !== 'object') return false
  const p = value as Record<string, unknown>
  return ['slug', 'title', 'category', 'description'].every(key => typeof p[key] === 'string')
    && typeof p.sort_order === 'number'
    && Array.isArray(p.tags) && p.tags.every(tag => typeof tag === 'string')
    && typeof p.source_url === 'string' && p.source_url.startsWith('https://')
    && (p.live_url === null || p.live_url === '/projects/drive/' || (typeof p.live_url === 'string' && p.live_url.startsWith('https://')))
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(snapshot)

  useEffect(() => {
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 6500)
    const url = import.meta.env.VITE_SUPABASE_URL || publicConfig.url
    const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || publicConfig.publishableKey

    async function refresh() {
      try {
        const endpoint = new URL('/rest/v1/portfolio_projects', url)
        endpoint.search = new URLSearchParams({ select: columns, published: 'eq.true', order: 'sort_order.asc,slug.asc' }).toString()
        const response = await fetch(endpoint, { headers: { apikey: key }, signal: controller.signal })
        if (!response.ok) return
        const rows: unknown = await response.json()
        if (Array.isArray(rows) && rows.every(isProject) && !controller.signal.aborted) setProjects(rows)
      } catch {
        // The bundled public edition remains readable during a network outage.
      } finally {
        window.clearTimeout(timeout)
      }
    }

    void refresh()
    return () => {
      window.clearTimeout(timeout)
      controller.abort()
    }
  }, [])

  return projects
}
