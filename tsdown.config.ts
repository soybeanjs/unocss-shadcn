import { defineConfig } from 'tsdown';
import pkg from './package.json' with { type: 'json' };

export default defineConfig({
  entry: ['src/index.ts', 'src/shared.ts'],
  external: [...Object.keys(pkg.dependencies), '@unocss/core'],
  platform: 'neutral',
  clean: true,
  dts: true,
  sourcemap: false,
  minify: true,
  fixedExtension: false
});
