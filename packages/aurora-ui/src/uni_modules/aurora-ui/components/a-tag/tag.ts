import type { ExtractPropTypes } from 'vue';
import { buildProps, definePropType } from '../../shared';
import Tag from './a-tag.vue';
import { TagTheme } from './styles';

import commProps from '../../common/props';

export const tagProps = buildProps({
  /**
   * @description 公共props
   */
  ...commProps<TagTheme>(),
  /**
   * @description 内置close组件自定义class
   * @property {String}
   * @default ''
   */
  closeIconCustomClass: {
    type: String,
    default: '',
  },
  /**
   * @description 内置loading组件自定义样式
   * @property {Object,String}
   * @default {}
   */
  closeIconCustomStyle: {
    type: [Object, String],
    default() {
      return {};
    },
  },
  /**
   * @description 内置icon组件自定义class
   * @property {String}
   * @default ''
   */
  iconCustomClass: {
    type: String,
    default: '',
  },
  /**
   * @description 内置icon组件自定义style
   * @property {Object,String}
   * @default {}
   */
  iconCustomStyle: {
    type: [Object, String],
    default() {
      return {};
    },
  },
  /**
   * @description 标签的预置样式，info，primary，danger，warning，success
   * @property {String}
   * @default 'primary'
   */
  type: {
    type: definePropType<'primary' | 'success' | 'warning' | 'error' | 'info'>(String),
    default: 'primary',
  },
  /**
   * @description 标签尺寸，large，medium，small，mini
   * @property {String}
   * @default 'medium'
   */
  size: {
    type: definePropType<'large' | 'medium' | 'small' | 'mini'>(String),
    default: 'medium',
  },
  /**
   * @description 标签是否文本类型
   * @property {Boolean}
   * @default false
   */
  text: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 标签是否镂空
   * @property {Boolean}
   * @default false
   */
  plain: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 是否可关闭
   * @property {Boolean}
   * @default false
   */
  closable: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 关闭图标
   * @property {String}
   * @default 'close'
   */
  closeIcon: {
    type: String,
    default: 'close',
  },
  /**
   * @description close图标大小
   * @property {Number}
   * @default 15
   */
  closeIconSize: {
    type: [Number, String],
  },
  /**
   * @description 按住后多久出现点击态，单位毫秒
   * @property {Number}
   * @default 0
   */
  hoverStartTime: {
    type: Number,
    default: 0,
  },
  /**
   * @description 手指松开后点击态保留时间，单位毫秒
   * @property {Number}
   * @default 200
   */
  hoverStayTime: {
    type: Number,
    default: 200,
  },
  /**
   * @description 标签图标
   * @property {String}
   * @default ''
   */
  icon: {
    type: String,
    default: '',
  },
  /**
   * @description 标签图标
   * @property {String}
   * @default ''
   */
  iconColor: {
    type: String,
    default: '',
  },
  /**
   * @description 标签大小
   * @property {Number, String}
   * @default 15
   */
  iconSize: {
    type: [Number, String],
  },
  /**
   * @description 标签颜色，支持传入linear-gradient渐变色
   * @property {String}
   * @default ''
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * @description 圆角大小
   * @property {String, Number}
   * @default
   */
  round: {
    type: [String, Number],
  },
  /**
   * @description 是否开启点击反馈
   * @property {Boolean}
   * @default false
   */
  clickable: {
    type: Boolean,
    default: false,
  },
});

export type TagProps = ExtractPropTypes<typeof tagProps>;

export const tagEmits = {
  close: () => true,
};
export type tagEmits = typeof tagEmits;

export type TagInstance = InstanceType<typeof Tag>;
