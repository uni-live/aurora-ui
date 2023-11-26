import type { ExtractPropTypes } from 'vue';
import { buildProps } from '../../shared';

export const gridItemProps = buildProps({
  customClass: {
    type: String,
    default: '',
  },
  customStyle: {
    type: Object,
    default() {
      return {};
    },
  },
  // 宫格的name
  name: {
    type: [String, Number, null],
    default: null,
  },
  // 背景颜色
  bgColor: {
    type: String,
    default: 'transparent',
  },
});

export type GridItemProps = ExtractPropTypes<typeof gridItemProps>;
