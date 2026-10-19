import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { bodyBake } from './vite-plugin-bodybake';
export default defineConfig({
  base: '/works/orion-results/',
  server: { host: '127.0.0.1' },
  preview: { host: '127.0.0.1' },
  plugins: [tailwindcss(), react(), bodyBake()],
});
