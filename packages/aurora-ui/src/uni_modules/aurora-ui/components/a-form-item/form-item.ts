import type { ExtractPropTypes } from 'vue';
import { buildProps, definePropType } from '../../shared';
import FormItem from './a-form-item.vue';
import commonProps from '../../common/props';
import { FormItemTheme } from './styles/light';
import { Fn } from 'types';

export const formItemProps = buildProps({
  /**
    /**
   * @description 公共props
   */
  ...commonProps<FormItemTheme>(),
  /**
   * @description input的label提示语
   * @property {String}
   * @default ''
   */
  label: {
    type: String,
    default: '',
  },
  /**
   * @description 绑定的值
   * @property {String}
   * @default ''
   */
  prop: {
    type: String,
    default: '',
  },
  /**
   * @description 是否显示表单域的下划线边框
   * @property {Boolean}
   * @default
   */
  borderBottom: {
    type: Boolean,
    default: false,
  },
  /**
   * @description label的位置，left-左边，top-上边
   * @property {String}
   * @default {}
   */
  labelPosition: {
    type: definePropType<'left' | 'top'>(String),
    default: 'left',
  },
  /**
   * @description 右侧图标
   * @property {String}
   * @default ''
   */
  rightIcon: {
    type: String,
    default: '',
  },
  /**
   * @description 左侧图标
   * @property {String}
   * @default ''
   */
  leftIcon: {
    type: String,
    default: '',
  },
  /**
   * @description 是否显示左边的必填星号，只作显示用，具体校验必填的逻辑，请在rules中配置
   * @property {Boolean}
   * @default false
   */
  required: {
    type: Boolean,
    default: false,
  },
});

export interface ExtendFormItemProps extends FormItemProps {
  transformDateFunc: (
    key: string,
    value: any,
    formModel: Record<string, any>,
    props: ExtendFormItemProps,
  ) => any;
  resetFunc: Fn;
  submitFunc: (formModel: Record<string, any>) => Promise<any>;
}

export type FormItemProps = ExtractPropTypes<typeof formItemProps>;

export const formItemEmits = {
  'update:model': (_: Record<string, any>) => true,
  submit: (_: Record<string, any>) => true,
  reset: () => true,
};
export type FormItemEmits = typeof formItemEmits;

export type FormItemInstance = InstanceType<typeof FormItem>;
