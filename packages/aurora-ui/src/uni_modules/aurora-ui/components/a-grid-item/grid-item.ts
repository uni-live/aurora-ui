import type { ExtractPropTypes } from 'vue';
import { buildProps, definePropType, isNumber, isString } from '../../shared';
import GridItem from './a-grid-item.vue';
import { GridItemTheme } from './styles/light';
import { ExtractThemeOverrides } from '../../hooks/use-theme';

export const gridItemProps = buildProps({
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
    type: definePropType<GridItemTheme>(Object),
  },
  /**
   * @description 主题覆盖
   * @property {Object}
   * @default
   */
  themeOverrides: {
    type: definePropType<ExtractThemeOverrides<GridItemTheme>>(Object),
  },
  /**
   * @description 主题覆盖
   * @property {Object}
   * @default
   */
  builtinThemeOverrides: {
    type: definePropType<ExtractThemeOverrides<GridItemTheme>>(Object),
  },
  /**
   * @description 宫格的name
   * @property {String, Number}
   * @default ''
   */
  name: {
    type: [String, Number],
    default: '',
  },
  /**
   * @description 背景颜色
   * @property {String}
   * @default 'transparent'
   */
  bgColor: {
    type: String,
    default: 'transparent',
  },
});

export type GridItemProps = ExtractPropTypes<typeof gridItemProps>;

export const gridItemEmits = {
  click: (name: string | number) => isString(name) || isNumber(name),
};
export type GridItemEmits = typeof gridItemEmits;

export type GridItemInstance = InstanceType<typeof GridItem>;
