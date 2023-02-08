import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src'],
  clean: true,
  format: ['esm'],
  target: 'esnext',
  minify: true,
  external: ['react'],
});
