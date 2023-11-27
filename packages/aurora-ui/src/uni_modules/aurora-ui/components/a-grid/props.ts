import type { ExtractPropTypes } from 'vue';
import { buildProps } from '../../shared';

export const gridProps = buildProps({
  customClass: {
    type: String,
    default: '',
  },
  customStyle: {
    type: [Object, String],
    default() {
      return {};
    },
  },
  // 分成几列
  col: {
    type: Number,
    default: 3,
  },

  // 是否显示边框
  border: {
    type: Boolean,
    default: false,
  },
  // 宫格对齐方式，表现为数量少的时候，靠左，居中，还是靠右
  align: {
    type: String,
    default: 'left',
  },
});

export type GridProps = ExtractPropTypes<typeof gridProps>;
