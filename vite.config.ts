import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/AIpiao/',
  plugins: [react()],
  server: {
    open: '/AIpiao/',
  },
  preview: {
    open: '/AIpiao/',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
