import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    cssMinify: true,
    minify: 'esbuild',
    rollupOptions: isSsrBuild ? {} : {
      output: {
        manualChunks: {
          'vendor-router': ['react-router-dom', 'react-helmet-async'],
          'vendor-motion': ['motion'],
        }
      }
    }
  },
  ssr: {
    // Externalize dependencies that shouldn't be bundled for SSR
    noExternal: ['react-helmet-async', 'lucide-react'],
  },
}))
