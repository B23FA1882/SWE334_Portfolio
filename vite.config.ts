import { fileURLToPath } from 'node:url'
import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  plugins: [
    react(),
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
