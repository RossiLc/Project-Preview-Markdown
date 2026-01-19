import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    // In Docker build, output to default dist/; otherwise output to backend/public
    outDir: process.env.DOCKER_BUILD ? 'dist' : path.resolve(__dirname, '../backend/public'),
    emptyOutDir: true
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      },
      '/markdown': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
})
