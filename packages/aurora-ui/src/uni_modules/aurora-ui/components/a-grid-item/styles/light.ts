import { Theme } from '../../../hooks/use-theme';
import { commonLight } from '../../../design/common';
import type { ThemeCommonVars } from '../../../design/common';

export const self = (vars: ThemeCommonVars) => {
  const { baseColor, borderColor } = vars;
  return {
    backgroundColor: baseColor,
    width: 'auto',
    borderColor: borderColor,
    colorPressed: '0.28',
    borderRightWidth: '1rpx',
    borderBottomWidth: '1rpx',
  };
};

export type GridItemThemeVars = ReturnType<typeof self>;

const gridItemLight: Theme<'GridItem', GridItemThemeVars> = {
  name: 'GridItem',
  common: commonLight,
  self,
};

export default gridItemLight;
export type GridItemTheme = typeof gridItemLight;
