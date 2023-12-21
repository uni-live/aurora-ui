import type { ExtractPropTypes } from 'vue';
import { buildProps, definePropType, isNumber, isString } from '../../shared';
import Grid from './a-grid.vue';
import { GridTheme } from './styles';
import { ExtractThemeOverrides } from '../../hooks/use-theme';

export const gridProps = buildProps({
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
   * @description 自定义样式
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
    type: definePropType<GridTheme>(Object),
  },
  /**
   * @description 主题覆盖
   * @property {Object}
   * @default
   */
  themeOverrides: {
    type: definePropType<ExtractThemeOverrides<GridTheme>>(Object),
  },
  /**
   * @description 主题覆盖
   * @property {Object}
   * @default
   */
  builtinThemeOverrides: {
    type: definePropType<ExtractThemeOverrides<GridTheme>>(Object),
  },
  /**
   * @description 分成几列
   * @property {Number}
   * @default 3
   */
  col: {
    type: Number,
    default: 3,
  },
  /**
   * @description 是否显示边框
   * @property {Boolean}
   * @default false
   */
  border: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 宫格对齐方式，表现为数量少的时候，靠左，居中，还是靠右
   * @property {String}
   * @default 'left'
   */
  align: {
    type: definePropType<'center' | 'flex-start' | 'flex-end'>(String),
    default: 'center',
  },
});

export type GridProps = ExtractPropTypes<typeof gridProps>;

export const gridEmits = {
  click: (name: string | number) => isString(name) || isNumber(name),
};
export type GridEmits = typeof gridEmits;

export type GridInstance = InstanceType<typeof Grid>;
