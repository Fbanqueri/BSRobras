import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Ensure CSS is properly handled
    }
  },
  ssr: {
    // Externalize dependencies that shouldn't be bundled for SSR
    noExternal: ['react-helmet-async', 'lucide-react'],
  },
})
