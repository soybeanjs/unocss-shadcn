import { defineConfig } from 'tsdown';
import pkg from './package.json' with { type: 'json' };

export default defineConfig({
  entry: ['src/index.ts'],
  external: [...Object.keys(pkg.dependencies)],
  platform: 'neutral',
  clean: true,
  dts: true,
  sourcemap: false,
  minify: true
});
