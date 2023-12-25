import { Theme } from '../../../hooks/use-theme';
import { commonLight } from '../../../design/common';
import type { ThemeCommonVars } from '../../../design/common';

export const self = (vars: ThemeCommonVars) => {
  return {
    justifyContentL: 'center',
  };
};

export type CellThemeVars = ReturnType<typeof self>;

const cellLight: Theme<'Cell', CellThemeVars> = {
  name: 'Cell',
  common: commonLight,
  self,
};

export default cellLight;
export type CellTheme = typeof cellLight;
