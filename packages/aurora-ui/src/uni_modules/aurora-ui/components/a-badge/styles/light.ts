import { Theme } from '../../../hooks/use-theme';
import { commonLight } from '../../../design/common';
import type { ThemeCommonVars } from '../../../design/common';

export const self = (vars: ThemeCommonVars) => {
  const { primaryColor, baseColor, infoColor, successColor, warningColor, errorColor } = vars;
  return {
    paddingMini: '0rpx 8rpx',
    paddingSmall: '0rpx 8rpx',
    paddingMedium: '0rpx 10rpx',
    paddingLarge: '2rpx 14rpx',
    // dot
    paddingDotMini: '7rpx',
    paddingDotSmall: '8rpx',
    paddingDotMedium: '10rpx',
    paddingDotLarge: '12rpx',
    // borderRadius
    borderRadius: '100px',
    // fontSize
    fontSizeMini: '11px',
    fontSizeSmall: '12px',
    fontSizeMedium: '14px',
    fontSizeLarge: '16px',
    // secondary
    colorOpacitySecondary: '0.16',
    colorOpacitySecondaryPressed: '0.28',
    // primary
    colorPrimary: primaryColor,
    textColorPrimary: baseColor,
    // info
    colorInfo: infoColor,
    textColorInfo: baseColor,
    // success
    colorSuccess: successColor,
    textColorSuccess: baseColor,
    // warning
    colorWarning: warningColor,
    textColorWarning: baseColor,
    // error
    colorError: errorColor,
    textColorError: baseColor,
  };
};

export type BadgeThemeVars = ReturnType<typeof self>;

const badgeLight: Theme<'Badge', BadgeThemeVars> = {
  name: 'Badge',
  common: commonLight,
  self,
};

export default badgeLight;
export type BadgeTheme = typeof badgeLight;
