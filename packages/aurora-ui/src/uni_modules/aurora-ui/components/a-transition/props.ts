import type { ExtractPropTypes } from 'vue';
import { buildProps } from '../../shared';

export const transitionProps = buildProps({
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
  // 是否展示组件
  show: {
    type: Boolean,
    default: false,
  },
  // 使用的动画模式
  mode: {
    type: String,
    default: 'fade',
  },
  // 动画的执行时间，单位ms
  duration: {
    type: [String, Number],
    default: '300',
  },
  // 使用的动画过渡函数
  timingFunction: {
    type: String,
    default: 'ease-out',
  },
});

export type TransitionProps = ExtractPropTypes<typeof transitionProps>;
