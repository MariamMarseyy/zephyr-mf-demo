import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button/index.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 5173,
  },
  build: {
    target: 'esnext',
  },
});
