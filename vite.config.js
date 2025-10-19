import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/crc-educational-site/', // Change this to your GitHub repo name
  build: {
    outDir: 'dist',
  },
})
