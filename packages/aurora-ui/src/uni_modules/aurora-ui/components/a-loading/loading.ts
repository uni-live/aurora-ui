import type { ExtractPropTypes } from 'vue';
import { buildProps, definePropType } from '../../shared';
import Loading from './a-loading.vue';

export const loadingProps = buildProps({
  /**
   * @description 自定义class
   * @property {String}
   * @default ''
   */
  customClass: {
    type: String,
    default: '',
  },
  /**
   * @description 自定义style
   * @property {Object,String}
   * @default {}
   */
  customStyle: {
    type: [Object, String],
    default() {
      return {};
    },
  },
  /**
   * @description 颜色
   * @property {String}
   * @default ''
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * @description 模式选择，circle-圆形，spinner-花朵形，semicircle-半圆形
   * @property {String}
   * @default 'spinner'
   */
  mode: {
    type: definePropType<'circle' | 'spinner' | 'semicircle'>(String),
    default: 'spinner',
  },
  /**
   * @description 图标大小，单位默认rpx
   * @property {String, Number}
   * @default '48rpx'
   */
  size: {
    type: [String, Number],
    default: '48rpx',
  },
  /**
   * @description 动画模式
   * @property {String}
   * @default 'ease-in-out'
   */
  timingFunction: {
    type: definePropType<
      | 'ease'
      | 'ease-in'
      | 'ease-in-out'
      | 'ease-out'
      | 'linear'
      | 'step-end'
      | 'step-start'
      | '-moz-initial'
      | 'inherit'
      | 'initial'
      | 'revert'
      | 'revert-layer'
      | 'unset'
      | (string & {})
    >(String),
    default: 'ease-in-out',
  },
  /**
   * @description 动画执行周期时间
   * @property {Number}
   * @default 1200
   */
  duration: {
    type: Number,
    default: 1200,
  },
  /**
   * @description mode=circle时的暗边颜色
   * @property {String}
   * @default ''
   */
  inactiveColor: {
    type: String,
    default: '',
  },
});

export type LoadingProps = ExtractPropTypes<typeof loadingProps>;

export type LoadingInstance = InstanceType<typeof Loading>;
