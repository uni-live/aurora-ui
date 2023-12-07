import type { ExtractPropTypes } from 'vue';
import { buildProps } from '../../shared';

export const transitionProps = buildProps({
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
   * @description 自定义样式
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
   * @description 是否展示组件
   * @property {Boolean}
   * @default false
   */
  show: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 动画模式
   * @property {String}
   * @default 'fade'
   */
  mode: {
    type: String,
    default: 'fade',
  },
  /**
   * @description 动画的执行时间，单位ms
   * @property {Number}
   * @default 300
   */
  duration: {
    type: Number,
    default: 300,
  },
  /**
   * @description 使用的动画过渡函数
   * @property {String}
   * @default 'ease-out'
   */
  timingFunction: {
    type: String,
    default: 'ease-out',
  },
});

export type TransitionProps = ExtractPropTypes<typeof transitionProps>;
