import { defineConfig, Options } from 'tsup';

const baseConfig: Options = {
  entry: ['src'],
  clean: true,
  target: 'esnext',
  minify: false,
  external: ['react'],
  splitting: true,
  treeshake: true,
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
