import { Theme } from '../../../hooks/use-theme';
import { commonLight } from '../../../design/common';
import type { ThemeCommonVars } from '../../../design/common';

export const self = (vars: ThemeCommonVars) => {
  const { baseColor, primaryColor } = vars;
  return {
    height: '88rpx',
    bgColor: baseColor,
    titleWidth: '400rpx',
    iconSize: 20,
    iconColor: primaryColor,
  };
};

export type NavbarThemeVars = ReturnType<typeof self>;

const navbarLight: Theme<'Navbar', NavbarThemeVars> = {
  name: 'Navbar',
  common: commonLight,
  self,
};

export default navbarLight;
export type NavbarTheme = typeof navbarLight;
