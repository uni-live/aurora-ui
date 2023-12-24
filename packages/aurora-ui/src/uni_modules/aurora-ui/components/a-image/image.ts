import type { ExtractPropTypes } from 'vue';
import { buildProps, definePropType, isString } from '../../shared';
import Image from './a-image.vue';
import { ImageTheme } from './styles/light';
import { ExtractThemeOverrides } from '../../hooks/use-theme';

export const imageProps = buildProps({
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
   * @description 自定义主题
   * @property {Object}
   * @default
   */
  theme: {
    type: definePropType<ImageTheme>(Object),
  },
  /**
   * @description 主题覆盖
   * @property {Object}
   * @default
   */
  themeOverrides: {
    type: definePropType<ExtractThemeOverrides<ImageTheme>>(Object),
  },
  /**
   * @description 主题覆盖
   * @property {Object}
   * @default
   */
  builtinThemeOverrides: {
    type: definePropType<ExtractThemeOverrides<ImageTheme>>(Object),
  },
  /**
   * @description 图片地址
   * @property {String}
   * @default ''
   */
  src: {
    type: String,
    default: '',
  },
  /**
   * @description 裁剪模式
   * @property {String}
   * @default 'aspectFill'
   */
  mode: {
    type: String,
    default: 'aspectFill',
  },
  /**
   * @description 宽度，单位任意
   * @property {String,Number}
   * @default '300'
   */
  width: {
    type: [String, Number],
    default: '300',
  },
  /**
   * @description 高度，单位任意
   * @property {String,Number}
   * @default '225'
   */
  height: {
    type: [String, Number],
    default: '225',
  },
  /**
   * @description 图片形状，circle-圆形，square-方形
   * @property {String,Number}
   * @default 'square'
   */
  shape: {
    type: String,
    default: 'square',
  },
  /**
   * @description 圆角，单位任意
   * @property {String,Number}
   * @default 0
   */
  radius: {
    type: [String, Number],
    default: '6rpx',
  },
  /**
   * @description 是否懒加载，微信小程序、App、百度小程序、字节跳动小程序
   * @property {Boolean}
   * @default true
   */
  lazyLoad: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 开启长按图片显示识别微信小程序码菜单
   * @property {Boolean}
   * @default true
   */
  showMenuByLongpress: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 是否显示加载中的图标或者自定义的slot
   * @property {Boolean}
   * @default true
   */
  showLoading: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 是否显示加载错误的图标或者自定义的slot
   * @property {Boolean}
   * @default true
   */
  showError: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 是否需要淡入效果
   * @property {Boolean}
   * @default true
   */
  fade: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 只支持网络资源，只对微信小程序有效
   * @property {Boolean}
   * @default false
   */
  webp: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 过渡时间，单位ms
   * @property {Number}
   * @default 500
   */
  duration: {
    type: Number,
    default: 500,
  },
  /**
   * @description 背景颜色，用于深色页面加载图片时，为了和背景色融合
   * @property {String}
   * @default 'f3f4f6'
   */
  bgColor: {
    type: String,
    default: '#f3f4f6',
  },
  /**
   * @description 加载loading图标,只支持本ui库下图标
   * @property {String}
   * @default
   */
  loadingIcon: {
    type: String,
    default: 'photo',
  },
  /**
   * @description 加载error图标,只支持本ui库下图标
   * @property {String}
   * @default
   */
  errorIcon: {
    type: String,
    default: 'error-circle',
  },
  /**
   * @description 加载图标的大小
   * @property {String}
   * @default
   */
  iconSize: {
    type: [String, Number],
    default: '46rpx',
  },
  /**
   * @description 加载图标的颜色
   * @property {String}
   * @default
   */
  iconColor: {
    type: String,
  },
});

export type ImageProps = ExtractPropTypes<typeof imageProps>;

export const imageEmits = {
  click: () => true,
  error: (_: any) => true,
  load: (arg: string) => isString(arg),
};
export type ImageEmits = typeof imageEmits;

export type ImageInstance = InstanceType<typeof Image>;
