import type { ExtractPropTypes } from 'vue';
import { buildProps, definePropType } from '../../shared';
import StatusBar from './a-status-bar.vue';
import { StatusBarTheme } from './styles';
import { ExtractThemeOverrides } from '../../hooks/use-theme';

export const statusBarProps = buildProps({
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
    type: definePropType<StatusBarTheme>(Object),
  },
  /**
   * @description 主题覆盖
   * @property {Object}
   * @default
   */
  themeOverrides: {
    type: definePropType<ExtractThemeOverrides<StatusBarTheme>>(Object),
  },
  /**
   * @description 主题覆盖
   * @property {Object}
   * @default
   */
  builtinThemeOverrides: {
    type: definePropType<ExtractThemeOverrides<StatusBarTheme>>(Object),
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

export type StatusBarProps = ExtractPropTypes<typeof statusBarProps>;

export type StatusBarInstance = InstanceType<typeof StatusBar>;
