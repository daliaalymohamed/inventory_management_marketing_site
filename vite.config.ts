import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative asset paths, so the build works both at
  // https://<user>.github.io/<repo>/ and on a custom domain.
  base: './',
})
