import type { ExtractPropTypes } from 'vue';
import { buildProps } from '../../shared';
import Icon from './a-icon.vue';

export const iconProps = buildProps({
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
   * @description 图标类名
   * @property {String}
   * @default ''
   */
  name: {
    type: String,
    default: '',
  },
  /**
   * @description 图标颜色
   * @property {String}
   * @default ''
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * @description 字体大小，单位rpx
   * @property {String,Number}
   * @default '32rpx'
   */
  size: {
    type: [String, Number],
    default: '32rpx',
  },
  /**
   * @description 触摸图标时的类名
   * @property {String}
   * @default ''
   */
  hoverClass: {
    type: String,
    default: '',
  },
  /**
   * @description 是否显示粗体
   * @property {Boolean}
   * @default false
   */
  bold: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 自定义扩展前缀，方便用户扩展自己的图标库
   * @property {String}
   * @default 'aicon'
   */
  customPrefix: {
    type: String,
    default: 'aicon',
  },
  /**
   * @description 图片的mode
   * @property {String}
   * @default 'scaleToFill'
   */
  mode: {
    type: String,
    default: 'scaleToFill',
  },
  /**
   * @description 用于显示图片时，图片的宽度
   * @property {String,Number}
   * @default ''
   */
  width: {
    type: [String, Number],
    default: '',
  },
  /**
   * @description 用于显示图片时，图片的高度
   * @property {String,Number}
   * @default ''
   */
  height: {
    type: [String, Number],
    default: '',
  },
});

export type IconProps = ExtractPropTypes<typeof iconProps>;

export type IconInstance = InstanceType<typeof Icon>;
