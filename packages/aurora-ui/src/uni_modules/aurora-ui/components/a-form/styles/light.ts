import { Theme } from '../../../hooks/use-theme';
import { commonLight } from '../../../design/common';
import type { ThemeCommonVars } from '../../../design/common';

export const self = (_: ThemeCommonVars) => {
  return {};
};

export type FormThemeVars = ReturnType<typeof self>;

const formLight: Theme<'Form', FormThemeVars> = {
  name: 'Form',
  common: commonLight,
  self,
};

export default formLight;
export type FormTheme = typeof formLight;
