import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',     // 👈 this simulates a browser
    globals: true,            // allows using describe, it, expect without imports
    setupFiles: './vitest.setup.js', // optional: for jest-dom
  },
})
