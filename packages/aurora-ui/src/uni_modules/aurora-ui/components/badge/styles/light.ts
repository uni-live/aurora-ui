import { Theme } from '../../../hooks/use-theme';
import { commonLight } from '../../../design/common';
import type { ThemeCommonVars } from '../../../design/common';

export const self = (_: ThemeCommonVars) => {
  return {};
};

export type BadgeThemeVars = ReturnType<typeof self>;

const badgeLight: Theme<'Badge', BadgeThemeVars> = {
  name: 'Badge',
  common: commonLight,
  self,
};

export default badgeLight;
export type BadgeTheme = typeof badgeLight;
