import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
    tailwindcss()
  ],
  
  // Build optimization
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    
    rollupOptions: {
      output: {
        // Better chunking strategy
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react'
            }
            if (id.includes('react-icons')) {
              return 'vendor-icons'
            }
            return 'vendor-other'
          }
        },
        // Optimized file names for caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // Fix: Handle potentially undefined name
          const fileName = assetInfo.name || 'asset'
          const info = fileName.split('.')
          const ext = info[info.length - 1]
          
          // Check file types safely
          if (/\.(webp|png|jpe?g|svg|gif|ico)$/i.test(fileName)) {
            return `assets/images/[name]-[hash].${ext}`
          }
          if (/\.(css)$/i.test(fileName)) {
            return `assets/css/[name]-[hash].${ext}`
          }
          if (/\.(woff|woff2|eot|ttf|otf)$/i.test(fileName)) {
            return `assets/fonts/[name]-[hash].${ext}`
          }
          return `assets/[name]-[hash].${ext}`
        }
      }
    },
    
    // Chunk size warning
    chunkSizeWarningLimit: 800,
    
    // Disable sourcemaps for better performance
    sourcemap: false,
  },
  
  // Dependency optimization
  optimizeDeps: {
    include: [
      'react', 
      'react-dom',
      'react/jsx-runtime',
      'react-icons/fa'
    ],
    force: true,
    esbuildOptions: {
      target: 'esnext',
    }
  },
  
  // CSS optimization
  css: {
    devSourcemap: false,
  },
  
  // Preview options
  preview: {
    port: 4173,
    host: true
  }
})