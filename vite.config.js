import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './src'),
      '@views' : path.resolve(__dirname, './src/views'),
      '@assets' : path.resolve(__dirname, './src/assets'),
      '@components' : path.resolve(__dirname, './src/views/components'),
      '@styles' : path.resolve(__dirname, '.src/styles/sass/_index.sass')
    }
  }
})
