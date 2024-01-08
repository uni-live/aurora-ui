import { Theme } from '../../../hooks/use-theme';
import { commonLight } from '../../../design/common';
import type { ThemeCommonVars } from '../../../design/common';

export const self = (vars: ThemeCommonVars) => {
  const {
    fontSizeMini,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    primaryColor,
    baseColor,
    infoColor,
    successColor,
    warningColor,
    errorColor,
    buttonColor2,
  } = vars;
  return {
    paddingMini: '4rpx 12rpx',
    paddingSmall: '6rpx 20rpx',
    paddingMedium: '8rpx 28rpx',
    paddingLarge: '10rpx 36rpx',
    // borderRadius
    borderRadius: '100px',
    // fontSize
    fontSizeMini,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    // secondary
    colorOpacitySecondary: '0.16',
    colorOpacitySecondaryPressed: '0.28',
    colorSecondary: buttonColor2,
    // primary
    colorPrimary: primaryColor,
    textColorPrimary: baseColor,
    textColorTextPrimary: primaryColor,
    // info
    colorInfo: infoColor,
    textColorInfo: baseColor,
    textColorTextInfo: infoColor,
    // success
    colorSuccess: successColor,
    textColorSuccess: baseColor,
    textColorTextSuccess: successColor,
    // warning
    colorWarning: warningColor,
    textColorWarning: baseColor,
    textColorTextWarning: warningColor,
    // error
    colorError: errorColor,
    textColorError: baseColor,
    textColorTextError: errorColor,
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
