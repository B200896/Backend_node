import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/jokes': {
        target: 'http://localhost:4000',
        // changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/jokes/, '/jokes'),
      },
    },
  },
});
