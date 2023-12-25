import { Theme } from '../../../hooks/use-theme';
import { commonLight } from '../../../design/common';
import type { ThemeCommonVars } from '../../../design/common';

export const self = (vars: ThemeCommonVars) => {
  const { borderWidth, borderStyle, borderColor } = vars;
  return {
    borderWidth,
    borderStyle,
    length: '100%',
    transform: '',
    borderColor,
  };
};

export type LineThemeVars = ReturnType<typeof self>;

const lineLight: Theme<'Line', LineThemeVars> = {
  name: 'Line',
  common: commonLight,
  self,
};

export default lineLight;
export type LineTheme = typeof lineLight;
