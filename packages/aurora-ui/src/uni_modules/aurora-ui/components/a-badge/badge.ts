import type { ExtractPropTypes } from 'vue';
import { buildProps, definePropType } from '../../shared';
import Badge from './a-badge.vue';
import { BadgeTheme } from './styles/light';
import commonProps from '../../common/props';

export const badgeProps = buildProps({
  /**
   * @description 公共props
   */
  ...commonProps<BadgeTheme>(),
  /**
   * @description 显示的内容
   * @property {Boolean}
   * @default ''
   */
  value: {
    type: [Number, String],
    default: '',
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
   * @description 是否显示圆点
   * @property {Boolean}
   * @default false
   */
  isDot: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 最大值，超过最大值会显示 '{max}+'
   * @property {Boolean}
   * @default 999
   */
  max: {
    type: [Number, String],
    default: 999,
  },
  /**
   * @description 主题类型，error|warning|success|primary
   * @property {Boolean}
   * @default 'error'
   */
  type: {
    type: definePropType<'primary' | 'success' | 'warning' | 'error' | 'info'>(String),
    default: 'error',
  },
  /**
   * @description 按钮颜色，支持传入linear-gradient渐变色
   * @property {String}
   */
  bgColor: {
    type: String,
  },
  /**
   * @description 字体颜色
   * @property {String}
   */
  color: {
    type: String,
  },
  /**
   * @description 徽标形状，circle-四角均为圆角，horn-左下角为直角
   * @property {String}
   * @default 'circle'
   */
  shape: {
    type: definePropType<'circle' | 'horn'>(String),
    default: 'circle',
  },
  /**
   * @description
   * 设置数字的显示方式，overflow|ellipsis|limit
   * overflow会根据max字段判断，超出显示`${max}+`
   * ellipsis会根据max判断，超出显示`${max}...`
   * limit会依据1000作为判断条件，超出1000，显示`${value/1000}K`，比如2.2k、3.34w，最多保留2位小数
   * @property {String}
   * @default 'overflow'
   */
  numberType: {
    type: definePropType<'overflow' | 'ellipsis' | 'limit'>(String),
    default: 'overflow',
  },
  /**
   * @description 设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效
   * @property {Array}
   * @default []
   */
  offset: {
    type: definePropType<Array<string | number>>(Array),
    default: () => [],
  },
  /**
   * @description 是否绝对定位
   * @property {Boolean}
   * @default false
   */
  absolute: {
    type: Boolean,
    default: false,
  },
});

export type BadgeProps = ExtractPropTypes<typeof badgeProps>;

export type BadgeInstance = InstanceType<typeof Badge>;
