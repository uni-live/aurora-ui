import type { ExtractPropTypes } from 'vue';
import { buildProps, definePropType } from '../../shared';
import Form from './a-form.vue';
import commonProps from '../../common/props';
import { FormTheme } from './styles/light';
import { FormAction } from './types';
import { Fn } from 'types';

export const formProps = buildProps({
  /**
    /**
   * @description 公共props
   */
  ...commonProps<FormTheme>(),
  /**
   * @description 当前form的需要验证字段的集合
   * @property {Object}
   * @default {}
   */
  model: {
    type: Object,
    default: () => ({}),
  },
  /**
   * @description 表单默认值，只有初始化以及重置时生效
   * @property {Object}
   * @default {}
   */
  initialValues: {
    type: Object,
    default: () => ({}),
  },
  /**
   * @description 设置表单组件禁用
   * @property {Boolean}
   * @default {}
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 验证规则
   * @property {Object, Function, Array}
   * @default {}
   */
  rules: {
    type: [Object, Function, Array],
    default: () => ({}),
  },
  /**
   * @description 有错误时的提示方式，message-提示信息，toast-进行toast提示，border-bottom-下边框呈现红色，none-无提示
   * @property {String}
   * @default 'message'
   */
  errorType: {
    type: definePropType<'message' | 'toast' | 'border-bottom' | 'none'>(String),
    default: 'message',
  },
  /**
   * @description 是否显示表单域的下划线边框
   * @property {Boolean}
   * @default true
   */
  borderBottom: {
    type: Boolean,
    default: true,
  },
  /**
   * @description label的位置，left-左边，top-上边
   * @property {String}
   * @default 'left'
   */
  labelPosition: {
    type: String,
    default: 'left',
  },
  /**
   * @description  label的宽度，单位px
   * @property {String, Number}
   * @default 45
   */
  labelWidth: {
    type: [String, Number],
    default: 45,
  },
  /**
   * @description  lable字体的对齐方式
   * @property {String}
   * @default 'left'
   */
  labelAlign: {
    type: String,
    default: 'left',
  },
  /**
   * @description  lable的样式，对象形式
   * @property {String, Object}
   * @default {}
   */
  labelStyle: {
    type: [Object, String],
    default() {
      return {};
    },
  },
});

export interface ExtendFormProps extends FormProps {
  transformDateFunc: (
    key: string,
    value: any,
    formModel: Record<string, any>,
    props: ExtendFormProps,
  ) => any;
  resetFunc: Fn;
  submitFunc: (formModel: Record<string, any>) => Promise<any>;
}

export type FormProps = ExtractPropTypes<typeof formProps>;

export const formEmits = {
  register: (_: FormAction) => true,
  'update:model': (_: Record<string, any>) => true,
  submit: (_: Record<string, any>) => true,
  reset: () => true,
};
export type FormEmits = typeof formEmits;

export type FormInstance = InstanceType<typeof Form>;
