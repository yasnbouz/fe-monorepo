import { defineConfig } from 'vite';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

function renderFileName(chunkInfo) {
  if (chunkInfo.name !== 'index') return '_internal/[name].mjs';
  return '[name].mjs';
}
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui',
      fileName: 'ui',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react'],
      output: {
        chunkFileNames: renderFileName,
        entryFileNames: renderFileName,
        preserveModules: true,
        preserveModulesRoot: 'src',
        globals: {
          react: 'React',
        },
      },
    },
  },
});
