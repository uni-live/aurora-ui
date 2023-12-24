import { Theme } from '../../../hooks/use-theme';
import { commonLight } from '../../../design/common';
import type { ThemeCommonVars } from '../../../design/common';

export const self = (vars: ThemeCommonVars) => {
  const { borderColor, borderStyle, opacity3 } = vars;
  return {
    color: borderColor,
    szie: '48rpx',
    duration: 1200,
    function: 'ease-in-out',
    bordrStyle: borderStyle,
    semicircleWidth: '4rpx',
    semicircleRadius: '200rpx',
    circleWidth: '4rpx',
    circleRadius: '200rpx',
    dotTop: '0rpx',
    dotLeft: '0rpx',
    dotWidth: '100%',
    dotHeight: '100%',
    dotBeforeWidth: '4rpx',
    dotBeforeHeight: '25%',
    dotBeforeMargin: '0 auto',
    dotBeforeColor: 'currentColor',
    dotBeforeRadius: '40%',
    opacitySecondary: opacity3,
  };
};

export type LoadingThemeVars = ReturnType<typeof self>;

const loadingLight: Theme<'Loading', LoadingThemeVars> = {
  name: 'Loading',
  common: commonLight,
  self,
};

export default loadingLight;
export type LoadingTheme = typeof loadingLight;
