import { defineConfig } from 'vite';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'uikit',
      // the proper extensions will be added
      fileName: 'uikit',
      formats: ['es'],
    },
    rollupOptions: {
      plugins: [
        visualizer({
          emitFile: true,
          filename: 'stats.html',
        }),
      ],
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
});
