import { Theme } from '../../../hooks/use-theme';
import { commonLight } from '../../../design/common';
import type { ThemeCommonVars } from '../../../design/common';

export const self = (vars: ThemeCommonVars) => {
  const { baseColor, borderRadiusMedium, iconColor } = vars;
  return {
    width: '300rpx',
    height: '225rpx',
    bgColor: baseColor,
    borderRadius: borderRadiusMedium,
    iconColor: iconColor,
    iconSize: '46rpx',
  };
};

export type ImageThemeVars = ReturnType<typeof self>;

const imageLight: Theme<'Image', ImageThemeVars> = {
  name: 'Image',
  common: commonLight,
  self,
};

export default imageLight;
export type ImageTheme = typeof imageLight;
