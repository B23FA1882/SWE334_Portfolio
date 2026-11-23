import { LanguageProvider } from './lib/language'
import { createRoot } from 'react-dom/client'
import '@fontsource/barlow-condensed/latin-800.css'
import '@fontsource-variable/inter'
import App from './App'
import './styles.css'
import './figma.css'

createRoot(document.getElementById('root')!).render(<LanguageProvider><App /></LanguageProvider>)
