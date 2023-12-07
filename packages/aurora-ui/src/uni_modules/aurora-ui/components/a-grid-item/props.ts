import type { ExtractPropTypes } from 'vue';
import { buildProps } from '../../shared';

export const gridItemProps = buildProps({
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
   * @description 宫格的name
   * @property {String, Number}
   * @default ''
   */
  name: {
    type: [String, Number],
    default: '',
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

export type GridItemProps = ExtractPropTypes<typeof gridItemProps>;
