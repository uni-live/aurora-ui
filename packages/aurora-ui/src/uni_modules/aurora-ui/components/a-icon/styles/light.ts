import { Theme } from '../../../hooks/use-theme';
import { commonLight } from '../../../design/common';
import type { ThemeCommonVars } from '../../../design/common';

export const self = (_: ThemeCommonVars) => {
  return {};
};

export type IconThemeVars = ReturnType<typeof self>;

const iconLight: Theme<'Icon', IconThemeVars> = {
  name: 'Icon',
  common: commonLight,
  self,
};

export default iconLight;
export type IconTheme = typeof iconLight;
