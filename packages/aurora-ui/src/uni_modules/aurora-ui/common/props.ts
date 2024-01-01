import { ExtractThemeOverrides } from '../hooks/use-theme';
import { definePropType } from '../shared/prop';

export default function <T>() {
  return {
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
      type: definePropType<T>(Object),
    },
    /**
     * @description 主题变量
     * @property {Object}
     * @default
     */
    themeOverrides: {
      type: definePropType<ExtractThemeOverrides<T>>(Object),
    },
    /**
     * @description 组件主题变量
     * @property {Object}
     * @default
     */
    builtinThemeOverrides: {
      type: definePropType<ExtractThemeOverrides<T>>(Object),
    },
  };
}
