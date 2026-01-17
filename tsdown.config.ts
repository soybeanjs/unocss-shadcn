import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  external: ['unocss'],
  platform: 'neutral',
  clean: true,
  dts: true,
  sourcemap: false,
  minify: true
});
