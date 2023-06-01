import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), svgr(), eslint()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
