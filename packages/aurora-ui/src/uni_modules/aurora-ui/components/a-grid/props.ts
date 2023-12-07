import type { ExtractPropTypes } from 'vue';
import { buildProps } from '../../shared';

export const gridProps = buildProps({
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
   * @description 分成几列
   * @property {Number}
   * @default 3
   */
  col: {
    type: Number,
    default: 3,
  },
  /**
   * @description 是否显示边框
   * @property {Boolean}
   * @default false
   */
  border: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 宫格对齐方式，表现为数量少的时候，靠左，居中，还是靠右
   * @property {String}
   * @default 'left'
   */
  align: {
    type: String,
    default: 'left',
  },
});

export type GridProps = ExtractPropTypes<typeof gridProps>;
