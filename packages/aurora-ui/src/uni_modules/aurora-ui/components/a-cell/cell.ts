import type { ExtractPropTypes } from 'vue';
import { buildProps, definePropType } from '../../shared';
import Cell from './a-cell.vue';
import { CellTheme } from './styles';

import commProps from '../../common/props';

export const cellProps = buildProps({
  /**
   * @description 公共props
   */
  ...commProps<CellTheme>(),
  /**
   * @description 标题
   * @property {String,Number}
   * @default
   */
  title: {
    type: [String, Number],
    default: '',
  },
  /**
   * @description 标题下方的描述信息
   * @property {String,Number}
   * @default ''
   */
  label: {
    type: [String, Number],
    default: '',
  },
  /**
   * @description 右侧的内容
   * @property {String,Number}
   * @default ''
   */
  value: {
    type: [String, Number],
    default: '',
  },
  /**
   * @description 左侧图标名称，或者图片链接(本地文件建议使用绝对地址)
   * @property {String}
   * @default ''
   */
  icon: {
    type: String,
    default: '',
  },
  /**
   * @description 是否禁用
   * @property {Boolean}
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 是否显示下边框
   * @property {Boolean}
   * @default true
   */
  border: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 内容是否垂直居中(主要是针对右侧的value部分)
   * @property {Boolean}
   * @default false
   */
  center: {
    type: Boolean,
    default: false,
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
  /**
   * @description 是否展示右侧箭头
   * @property {Boolean}
   * @default false
   */
  isLink: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 右侧的图标箭头
   * @property {String}
   * @default 'arrow-right'
   */
  rightIcon: {
    type: String,
    default: 'arrow-right',
  },
  /**
   * @description 右侧箭头的方向
   * @property {String}
   * @default 'right'
   */
  arrowDirection: {
    type: definePropType<'right' | 'left' | 'up' | 'down'>(String),
    default: 'right',
  },
  /**
   * @description 左侧图标样式
   * @property {Object,String}
   * @default
   */
  iconStyle: {
    type: [Object, String],
  },
  /**
   * @description 右侧箭头图标的样式
   * @property {Object,String}
   * @default
   */
  rightIconStyle: {
    type: [Object, String],
  },
  /**
   * @description 标题的样式
   * @property {Object,String}
   * @default
   */
  titleStyle: {
    type: [Object, String],
    default: {},
  },
});

export type CellProps = ExtractPropTypes<typeof cellProps>;

export const cellEmits = {
  click: () => true,
};
export type CellEmits = typeof cellEmits;

export type CellInstance = InstanceType<typeof Cell>;
