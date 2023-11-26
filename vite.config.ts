import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export const _resolve = (p: string) => resolve(__dirname, '.', p);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': _resolve('./src'),
    },
  },
});
