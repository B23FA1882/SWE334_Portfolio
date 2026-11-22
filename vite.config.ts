import { fileURLToPath } from 'node:url'
import process from 'node:process'
import { defineConfig } from 'vite'
import { publicConfig } from './src/lib/public-config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  plugins: [
    react(),
    {
      name: 'verify-deployed-catalog',
      apply: 'build',
      async buildStart() {
        const hostname = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VITE_VERCEL_PROJECT_PRODUCTION_URL
        if (!hostname) throw new Error('The deployment does not report its production hostname.')
        const origin = 'https://' + hostname
        const endpoint = new URL('/rest/v1/portfolio_projects', publicConfig.url)
        endpoint.search = 'select=slug&published=eq.true'
        const response = await fetch(endpoint, {
          signal: AbortSignal.timeout(15000),
          headers: {
            apikey: publicConfig.publishableKey,
            Referer: origin + '/',
            'User-Agent': 'SWE334-Portfolio-Catalog-Check/1.0 (+' + origin + '/)',
          },
        })
        if (!response.ok) throw new Error('Catalog check failed with HTTP ' + response.status)
        const projects = await response.json() as { slug: string }[]
        if (!['greenroom','ism-museum','web231','figma-profile'].every(slug => projects.some(p => p.slug === slug))) {
          throw new Error('A required portfolio project is missing')
        }
      },
    },
    tailwindcss(),
    {
      name: 'drive-demo-entry',
      configureServer(server) {
        server.middlewares.use((request, _response, next) => {
          if (request.url?.split('?')[0] === '/projects/drive/') {
            request.url = request.url.replace('/projects/drive/', '/projects/drive/index.html')
          }
          next()
        })
      },
    },
    {
      name: 'portfolio-canonical',
      transformIndexHtml() {
        const hostname = process.env.VERCEL_PROJECT_PRODUCTION_URL
        return hostname ? [{ tag: 'link', attrs: { rel: 'canonical', href: 'https://' + hostname + '/' }, injectTo: 'head' as const }] : []
      },
    },
  ],
})
