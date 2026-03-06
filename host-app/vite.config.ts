/// <reference types="node" />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const remoteUrl = 'https://msargsyan925-gmail-com-1-remote-app-zephyr-mf-dem-007d76a97-ze.zephyrcloud.app';

  return {
    plugins: [
      react(),
      federation({
        name: 'host_app',
        remotes: {
          remote_app: `${remoteUrl}/assets/remoteEntry.js`,
        },
        shared: ['react', 'react-dom'],
      }),
    ],
    server: {
      port: 5174,
    },
    build: {
      target: 'esnext',
    },
  };
});
