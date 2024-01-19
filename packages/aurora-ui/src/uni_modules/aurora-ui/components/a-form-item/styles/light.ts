import { Theme } from '../../../hooks/use-theme';
import { commonLight } from '../../../design/common';
import type { ThemeCommonVars } from '../../../design/common';

export const self = (_: ThemeCommonVars) => {
  return {};
};

export type FormItemThemeVars = ReturnType<typeof self>;

const formItemLight: Theme<'FormItem', FormItemThemeVars> = {
  name: 'FormItem',
  common: commonLight,
  self,
};

export default formItemLight;
export type FormItemTheme = typeof formItemLight;
