import type { ExtractPropTypes } from 'vue';
import { buildProps } from '../../shared';

export const statusBarProps = buildProps({
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
  bgColor: {
    type: String,
    default: 'transparent',
  },
});

export type StatusBarProps = ExtractPropTypes<typeof statusBarProps>;
