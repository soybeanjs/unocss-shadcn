import { themes } from './theme';
import type { ThemeConfigColor } from './types';
import { generateCSSVars } from './generate';

export const builtinColors = themes.map(theme => theme.name) as ThemeConfigColor[];
export const builtinColorMap = themes.reduce(
  (acc, theme) => {
    acc[theme.name as ThemeConfigColor] = theme.cssVars.light.primary;
    return acc;
  },
  {} as Record<ThemeConfigColor, string>
);
export const builtinRadiuses = [0, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1] as const;

export { generateCSSVars };
