import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/_tests_/setup.ts'
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        secure: false,
        changeOrigin: true
      }
    }
  }
})

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '0.0.0.0', // Use 0.0.0.0 to listen on all IPs in production
//     port: 3001,
//     https: true, // Ensure it's set to false unless explicitly required
//     proxy: {
//             '/api': {
//               target: 'https://github-actions-ci-cd-setup-lzts.onrender.com',
//               secure: false,
//               changeOrigin: true }
//   },
//   build: {
//     outDir: 'dist',
    
//   },
// }});