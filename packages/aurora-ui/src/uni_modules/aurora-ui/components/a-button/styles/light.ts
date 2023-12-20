import { Theme } from '../../../hooks/use-theme';
import { commonLight } from '../../../design/common';
import type { ThemeCommonVars } from '../../../design/common';

export const self = (vars: ThemeCommonVars) => {
  const {
    heightMini,
    heightSmall,
    heightMedium,
    heightLarge,
    borderRadiusLarge,
    borderRadiusMedium,
    borderRadiusSmall,
    borderRadiusMini,
    fontSizeMini,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    opacityDisabled,
    textColor2,
    primaryColorPressed,
    borderStyle,
    borderWidth,
    primaryColor,
    baseColor,
    infoColor,
    infoColorPressed,
    successColor,
    successColorPressed,
    warningColor,
    warningColorPressed,
    errorColor,
    errorColorPressed,
    fontWeight,
    buttonColor2,
    buttonColor2Pressed,
    fontWeightStrong,
  } = vars;
  return {
    paddingMini: '0 12rpx',
    paddingSmall: '0 20rpx',
    paddingMedium: '0 28rpx',
    paddingLarge: '0 36rpx',
    paddingRoundMini: '0 20rpx',
    paddingRoundSmall: '0 28rpx',
    paddingRoundMedium: '0 36rpx',
    paddingRoundLarge: '0 44rpx',
    iconMarginMini: '2rpx',
    iconMarginSmall: '4rpx',
    iconMarginMedium: '6rpx',
    iconMarginLarge: '8rpx',
    iconSizeMini: '24rpx',
    iconSizeSmall: '28rpx',
    iconSizeMedium: '32rpx',
    iconSizeLarge: '36rpx',
    // height
    heightMini,
    heightSmall,
    heightMedium,
    heightLarge,
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
    // opacity
    opacityDisabled,
    // secondary
    colorOpacitySecondary: '0.16',
    colorOpacitySecondaryPressed: '0.28',
    colorSecondary: buttonColor2,
    colorSecondaryPressed: buttonColor2Pressed,
    // fontWeight
    fontWeight,
    fontWeightStrong,
    // primary
    colorPrimary: primaryColor,
    colorPressedPrimary: primaryColorPressed,
    colorDisabledPrimary: primaryColor,
    textColorPrimary: baseColor,
    textColorPressedPrimary: baseColor,
    textColorDisabledPrimary: baseColor,
    textColorTextPrimary: primaryColor,
    textColorTextPressedPrimary: primaryColorPressed,
    textColorTextDisabledPrimary: textColor2,
    textColorGhostPrimary: primaryColor,
    textColorGhostPressedPrimary: primaryColorPressed,
    textColorGhostDisabledPrimary: primaryColor,
    borderWidthPrimary: borderWidth,
    borderStylePrimary: borderStyle,
    borderColorPrimary: primaryColor,
    borderWidthPressedPrimary: borderWidth,
    borderStylePressedPrimary: borderStyle,
    borderColorPressedPrimary: primaryColorPressed,
    borderWidthDisabledPrimary: borderWidth,
    borderStyleDisabledPrimary: borderStyle,
    borderColorDisabledPrimary: primaryColor,
    // info
    colorInfo: infoColor,
    colorPressedInfo: infoColorPressed,
    colorDisabledInfo: infoColor,
    textColorInfo: baseColor,
    textColorPressedInfo: baseColor,
    textColorDisabledInfo: baseColor,
    textColorTextInfo: infoColor,
    textColorTextPressedInfo: infoColorPressed,
    textColorTextDisabledInfo: textColor2,
    textColorGhostInfo: infoColor,
    textColorGhostPressedInfo: infoColorPressed,
    textColorGhostDisabledInfo: infoColor,
    borderWidthInfo: borderWidth,
    borderStyleInfo: borderStyle,
    borderColorInfo: infoColor,
    borderWidthPressedInfo: borderWidth,
    borderStylePressedInfo: borderStyle,
    borderColorPressedInfo: infoColorPressed,
    borderWidthDisabledInfo: borderWidth,
    borderStyleDisabledInfo: borderStyle,
    borderColorDisabledInfo: infoColor,
    // success
    colorSuccess: successColor,
    colorPressedSuccess: successColorPressed,
    colorDisabledSuccess: successColor,
    textColorSuccess: baseColor,
    textColorPressedSuccess: baseColor,
    textColorDisabledSuccess: baseColor,
    textColorTextSuccess: successColor,
    textColorTextPressedSuccess: successColorPressed,
    textColorTextDisabledSuccess: textColor2,
    textColorGhostSuccess: successColor,
    textColorGhostPressedSuccess: successColorPressed,
    textColorGhostDisabledSuccess: successColor,
    borderWidthSuccess: borderWidth,
    borderStyleSuccess: borderStyle,
    borderColorSuccess: successColor,
    borderWidthPressedSuccess: borderWidth,
    borderStylePressedSuccess: borderStyle,
    borderColorPressedSuccess: successColorPressed,
    borderWidthDisabledSuccess: borderWidth,
    borderStyleDisabledSuccess: borderStyle,
    borderColorDisabledSuccess: successColor,
    // warning
    colorWarning: warningColor,
    colorPressedWarning: warningColorPressed,
    colorDisabledWarning: warningColor,
    textColorWarning: baseColor,
    textColorPressedWarning: baseColor,
    textColorDisabledWarning: baseColor,
    textColorTextWarning: warningColor,
    textColorTextPressedWarning: warningColorPressed,
    textColorTextDisabledWarning: textColor2,
    textColorGhostWarning: warningColor,
    textColorGhostPressedWarning: warningColorPressed,
    textColorGhostDisabledWarning: warningColor,
    borderWidthWarning: borderWidth,
    borderStyleWarning: borderStyle,
    borderColorWarning: warningColor,
    borderWidthPressedWarning: borderWidth,
    borderStylePressedWarning: borderStyle,
    borderColorPressedWarning: warningColorPressed,
    borderWidthDisabledWarning: borderWidth,
    borderStyleDisabledWarning: borderStyle,
    borderColorDisabledWarning: warningColor,
    // error
    colorError: errorColor,
    colorPressedError: errorColorPressed,
    colorDisabledError: errorColor,
    textColorError: baseColor,
    textColorPressedError: baseColor,
    textColorDisabledError: baseColor,
    textColorTextError: errorColor,
    textColorTextPressedError: errorColorPressed,
    textColorTextDisabledError: textColor2,
    textColorGhostError: errorColor,
    textColorGhostPressedError: errorColorPressed,
    textColorGhostDisabledError: errorColor,
    borderWidthError: borderWidth,
    borderStyleError: borderStyle,
    borderColorError: errorColor,
    borderWidthPressedError: borderWidth,
    borderStylePressedError: borderStyle,
    borderColorPressedError: errorColorPressed,
    borderWidthDisabledError: borderWidth,
    borderStyleDisabledError: borderStyle,
    borderColorDisabledError: errorColor,
  };
};

export type ButtonThemeVars = ReturnType<typeof self>;

const buttonLight: Theme<'Button', ButtonThemeVars> = {
  name: 'Button',
  common: commonLight,
  self,
};

export default buttonLight;
export type ButtonTheme = typeof buttonLight;
