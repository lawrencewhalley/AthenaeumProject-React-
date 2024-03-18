import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {

    https: {

      key: './video-project-privateKey.key',
      cert: './video-project.crt',
    }
  },

  plugins: [react()],
})
