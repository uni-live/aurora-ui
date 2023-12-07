import type { ExtractPropTypes } from 'vue';
import { buildProps } from '../../shared';

export const statusBarProps = buildProps({
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
   * @description 背景颜色
   * @property {String}
   * @default 'transparent'
   */
  bgColor: {
    type: String,
    default: 'transparent',
  },
});

export type StatusBarProps = ExtractPropTypes<typeof statusBarProps>;
