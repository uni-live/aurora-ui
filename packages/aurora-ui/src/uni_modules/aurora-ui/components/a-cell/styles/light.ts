import { Theme } from '../../../hooks/use-theme';
import { commonLight } from '../../../design/common';
import type { ThemeCommonVars } from '../../../design/common';
import { changeColor } from 'seemly';

export const self = (vars: ThemeCommonVars) => {
  const { baseColor, textColor3, opacity3 } = vars;
  return {
    padding: '20rpx 30rpx',
    fontSize: '30rpx',
    lineHeight: '48rpx',
    color: baseColor,
    iconSize: '32rpx',
    titleFontSize: '30rpx',
    titleLineHeight: '44rpx',
    titleColor: baseColor,
    labelFontSize: '24rpx',
    labelColor: textColor3,
    labelLineHeight: '36rpx',
    labelMarginTop: '10rpx',
    valueFontSize: '28rpx',
    valueColor: baseColor,
    clickableColor: changeColor(baseColor, {
      alpha: Number(opacity3),
    }),
    disabledColor: changeColor(baseColor, {
      alpha: Number(opacity3),
    }),
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
