import { addUnit } from '../../shared';

/**
 * @description 判断是否是渐变颜色
 * @param color
 * @returns { Boolean }
 */
export function isLinearGradient(color: string) {
  return !!(color && color.indexOf('gradient') > -1);
}

/**
 * @description 判断是否roud为 0
 * @param num
 * @returns { Boolean }
 */
export function isRound(num?: string | number) {
  return addUnit(num) !== '0rpx' && addUnit(num) !== 'auto';
}
