import { defineConfig } from 'vite';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui',
      // the proper extensions will be added
      fileName: 'ui',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      plugins: [],
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
});
