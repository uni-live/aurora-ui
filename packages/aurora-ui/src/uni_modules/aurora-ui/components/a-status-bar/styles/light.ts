import { Theme } from '../../../hooks/use-theme';
import { commonLight } from '../../../design/common';
import type { ThemeCommonVars } from '../../../design/common';

export const self = (_: ThemeCommonVars) => {
  return {
    backgroundColor: 'transparent',
  };
};

export type StatusBarThemeVars = ReturnType<typeof self>;

const statusBarLight: Theme<'StatusBar', StatusBarThemeVars> = {
  name: 'StatusBar',
  common: commonLight,
  self,
};

export default statusBarLight;
export type StatusBarTheme = typeof statusBarLight;
