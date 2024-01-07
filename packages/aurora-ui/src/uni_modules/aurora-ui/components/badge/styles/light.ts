import { Theme } from '../../../hooks/use-theme';
import { commonLight } from '../../../design/common';
import type { ThemeCommonVars } from '../../../design/common';

export const self = (vars: ThemeCommonVars) => {
  const {
    borderRadiusLarge,
    borderRadiusMedium,
    borderRadiusSmall,
    borderRadiusMini,
    fontSizeMini,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    textColor2,
    primaryColor,
    baseColor,
    infoColor,
    successColor,
    warningColor,
    errorColor,
    fontWeight,
    buttonColor2,
    fontWeightStrong,
  } = vars;
  return {
    paddingMini: '4rpx 12rpx',
    paddingSmall: '6rpx 20rpx',
    paddingMedium: '8rpx 28rpx',
    paddingLarge: '10rpx 36rpx',

    // borderRadius
    borderRadiusMini: borderRadiusMini,
    borderRadiusSmall: borderRadiusMedium,
    borderRadiusMedium: borderRadiusSmall,
    borderRadiusLarge: borderRadiusLarge,
    // fontSize
    fontSizeMini,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    // secondary
    colorOpacitySecondary: '0.16',
    colorOpacitySecondaryPressed: '0.28',
    colorSecondary: buttonColor2,
    // fontWeight
    fontWeight,
    fontWeightStrong,
    // primary
    colorPrimary: primaryColor,
    colorDisabledPrimary: primaryColor,
    textColorPrimary: baseColor,
    textColorPressedPrimary: baseColor,
    textColorDisabledPrimary: baseColor,
    textColorTextPrimary: primaryColor,
    textColorTextDisabledPrimary: textColor2,
    textColorGhostPrimary: primaryColor,
    textColorGhostDisabledPrimary: primaryColor,
    // info
    colorInfo: infoColor,
    colorDisabledInfo: infoColor,
    textColorInfo: baseColor,
    textColorPressedInfo: baseColor,
    textColorDisabledInfo: baseColor,
    textColorTextInfo: infoColor,
    textColorTextDisabledInfo: textColor2,
    textColorGhostInfo: infoColor,
    textColorGhostDisabledInfo: infoColor,
    // success
    colorSuccess: successColor,
    colorDisabledSuccess: successColor,
    textColorSuccess: baseColor,
    textColorPressedSuccess: baseColor,
    textColorDisabledSuccess: baseColor,
    textColorTextSuccess: successColor,
    textColorTextDisabledSuccess: textColor2,
    textColorGhostSuccess: successColor,
    textColorGhostDisabledSuccess: successColor,
    // warning
    colorWarning: warningColor,
    colorDisabledWarning: warningColor,
    textColorWarning: baseColor,
    textColorPressedWarning: baseColor,
    textColorDisabledWarning: baseColor,
    textColorTextWarning: warningColor,
    textColorTextDisabledWarning: textColor2,
    textColorGhostWarning: warningColor,
    textColorGhostDisabledWarning: warningColor,
    // error
    colorError: errorColor,
    colorDisabledError: errorColor,
    textColorError: baseColor,
    textColorPressedError: baseColor,
    textColorDisabledError: baseColor,
    textColorTextError: errorColor,
    textColorTextDisabledError: textColor2,
    textColorGhostError: errorColor,
    textColorGhostDisabledError: errorColor,
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
