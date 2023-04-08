import { defineConfig } from 'vite';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import packageJson from './package.json';

const externals = [
  ...Object.keys(packageJson.peerDependencies),
  ...Object.keys(packageJson.devDependencies),
];
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui',
      fileName: (format) => `[name].${format === 'cjs' ? '' : 'm'}js`,
      formats: ['es', 'cjs'],
    },
    minify: false,
    rollupOptions: {
      external: externals,
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        globals: {
          react: 'React',
        },
      },
    },
  },
});
