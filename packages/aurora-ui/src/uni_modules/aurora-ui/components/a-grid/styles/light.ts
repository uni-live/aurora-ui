import { Theme } from '../../../hooks/use-theme';
import { commonLight } from '../../../design/common';
import type { ThemeCommonVars } from '../../../design/common';

export const self = (vars: ThemeCommonVars) => {
  return {
    justifyContentL: 'center',
  };
};

export type GridThemeVars = ReturnType<typeof self>;

const gridLight: Theme<'Grid', GridThemeVars> = {
  name: 'Grid',
  common: commonLight,
  self,
};

export default gridLight;
export type GridTheme = typeof gridLight;
