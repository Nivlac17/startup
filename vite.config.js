import { defineConfig } from 'vite';

console.log('VITE CONFIG LOADED');

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },

      '/ws': {
        target: 'ws://localhost:4000',
        ws: true,
        changeOrigin: true,
      },
    },
  },
});