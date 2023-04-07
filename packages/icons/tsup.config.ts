import { defineConfig, Options } from 'tsup';

const baseConfig: Options = {
  entry: ['src'],
  clean: true,
  target: 'esnext',
  // will be minified at the consuming app
  minify: false,
  external: ['react'],
  splitting: false,
  outExtension() {
    return {
      js: `.js`,
    };
  },
};
export default defineConfig([
  {
    ...baseConfig,
    format: ['esm'],
    outDir: 'dist/esm',
  },
  {
    ...baseConfig,
    format: ['cjs'],
    outDir: 'dist/cjs',
  },
]);
