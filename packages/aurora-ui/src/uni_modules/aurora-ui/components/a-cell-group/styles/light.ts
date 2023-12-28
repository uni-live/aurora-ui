import { Theme } from '../../../hooks/use-theme';
import { commonLight } from '../../../design/common';
import type { ThemeCommonVars } from '../../../design/common';

export const self = (vars: ThemeCommonVars) => {
  const { textColor1 } = vars;
  return {
    padding: '32rpx 32rpx 16rpx',
    fontSize: '30rpx',
    lineHeight: '32rpx',
    textColor: textColor1,
  };
};

export type CellGroupThemeVars = ReturnType<typeof self>;

const cellGroupLight: Theme<'CellGroup', CellGroupThemeVars> = {
  name: 'CellGroup',
  common: commonLight,
  self,
};

export default cellGroupLight;
export type CellGroupTheme = typeof cellGroupLight;
