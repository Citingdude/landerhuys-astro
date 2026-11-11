import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://landerhuys.be',
  output: 'static',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
