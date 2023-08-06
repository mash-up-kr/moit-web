import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  cacheDir: './.vite',
  server: {
    proxy: {
      '/api': {
        target:
          'http://moit-backend-eb-env.eba-qtcnkjjy.ap-northeast-2.elasticbeanstalk.com',
        secure: false,
      },
    },
  },
});
