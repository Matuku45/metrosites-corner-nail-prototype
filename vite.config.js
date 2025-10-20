import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  // Backend URL based on environment
  const API_BASE_URL =
    mode === 'production'
      ? 'https://shuttle-booking-system.fly.dev'
      : 'http://localhost:3000';

  return {
    plugins: [react(),tailwindcss()],
    server: {
      host: true,
      port: 5173,
      strictPort: false,
      open: true,
      cors: true,
      watch: { usePolling: true },
      proxy: {
        '/api': { target: API_BASE_URL, changeOrigin: true },
        '/users': { target: API_BASE_URL, changeOrigin: true },
      },
    },
    preview: { host: true, port: 4173, open: true },
    define: { __API_BASE_URL__: JSON.stringify(API_BASE_URL) },
  };
});
