import { Theme } from '../../../hooks/use-theme';
import { commonLight } from '../../../design/common';
import type { ThemeCommonVars } from '../../../design/common';

export const self = (_: ThemeCommonVars) => {
  return {};
};

export type NavbarThemeVars = ReturnType<typeof self>;

const navbarLight: Theme<'Navbar', NavbarThemeVars> = {
  name: 'Navbar',
  common: commonLight,
  self,
};

export default navbarLight;
export type NavbarTheme = typeof navbarLight;
