import type { ExtractPropTypes } from 'vue';
import { buildProps, definePropType } from '../../shared';
import ConfigProvider from './a-config-provider.vue';
import type { DateLocale, GlobalTheme } from './interface';

export const configProviderProps = buildProps({
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
   * @description 国际化
   * @property {DateLocale}
   * @default
   */
  locale: {
    type: definePropType<DateLocale>(Object),
  },
  /**
   * @description 主题配置
   * @property {GlobalTheme}
   * @default
   */
  theme: {
    type: definePropType<GlobalTheme>(Object),
  },
  /**
   * @description 对后代组件生效的主题变量覆盖，为 null 时会清除全部覆盖变量，为 undefined 时会继承上级 n-config-provider
   * @property {Object}
   * @default {}
   */
  themeOverrides: {
    type: Object,
  },
  /**
   * @description 全局组件类名称前缀 (需要配合 $namespace 使用)
   * @property {String}
   * @default 'a'
   */
  namespace: {
    type: String,
    default() {
      return 'a';
    },
  },
});

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;

export type ConfigProviderInstance = InstanceType<typeof ConfigProvider>;
