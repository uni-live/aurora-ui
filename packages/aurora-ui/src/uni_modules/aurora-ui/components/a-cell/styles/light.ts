import { Theme } from '../../../hooks/use-theme';
import { commonLight } from '../../../design/common';
import type { ThemeCommonVars } from '../../../design/common';

export const self = (vars: ThemeCommonVars) => {
  const { textColor1, textColor2, textColor3, textColor4 } = vars;
  return {
    padding: '20rpx 30rpx',
    fontSize: '30rpx',
    lineHeight: '44rpx',
    color: textColor1,
    iconSize: '32rpx',
    titleFontSize: '30rpx',
    titleLineHeight: '44rpx',
    titleColor: textColor1,
    labelFontSize: '24rpx',
    labelColor: textColor3,
    labelLineHeight: '36rpx',
    labelMarginTop: '10rpx',
    valueFontSize: '28rpx',
    valueColor: textColor2,
    rightIconColor: textColor3,
    disabledRightIconColor: textColor4,
    clickableColor: textColor4,
    disabledColor: textColor4,
    leftIconWrapMarginRight: '8rpx',
    rightIconWrapMarginLeft: '8rpx',
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
