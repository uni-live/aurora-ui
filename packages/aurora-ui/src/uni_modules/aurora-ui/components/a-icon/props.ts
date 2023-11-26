import type { ExtractPropTypes } from 'vue';
import { buildProps } from '../../shared';

export const iconProps = buildProps({
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
  // 图标类名
  name: {
    type: String,
    default: '',
  },
  // 图标颜色，可接受主题色
  color: {
    type: String,
    default: '',
  },
  // 字体大小，单位px
  size: {
    type: [String, Number],
    default: '16px',
  },
  // 触摸图标时的类名
  hoverClass: {
    type: String,
    default: '',
  },
  // 是否显示粗体
  bold: {
    type: Boolean,
    default: false,
  },
  // 自定义扩展前缀，方便用户扩展自己的图标库
  customPrefix: {
    type: String,
    default: 'aicon',
  },
  // 图片的mode
  imgMode: {
    type: String,
    default: '',
  },
  // 用于显示图片小图标时，图片的宽度
  width: {
    type: [String, Number],
    default: '',
  },
  // 用于显示图片小图标时，图片的高度
  height: {
    type: [String, Number],
    default: '',
  },
});

export type IconProps = ExtractPropTypes<typeof iconProps>;
