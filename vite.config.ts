import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';

import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), svgr(), eslint()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
