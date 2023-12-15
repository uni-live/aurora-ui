import type { ExtractPropTypes } from 'vue';
import { buildProps, definePropType } from '../../shared';
import Button from './a-button.vue';

export const buttonProps = buildProps({
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
   * @description 按钮的预置样式，info，primary，danger，warning，success
   * @property {String}
   * @default 'primary'
   */
  type: {
    type: definePropType<'primary' | 'success' | 'warning' | 'danger' | 'info'>(String),
    default: 'primary',
  },
  /**
   * @description 按钮尺寸，large，default，small，mini
   * @property {String}
   * @default 'default'
   */
  size: {
    type: definePropType<'large' | 'default' | 'small' | 'mini'>(String),
    default: 'default',
  },
  /**
   * @description 按钮是否镂空
   * @property {Boolean}
   * @default false
   */
  plain: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 是否禁止状态
   * @property {Boolean}
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 是否加载中
   * @property {Boolean}
   * @default false
   */
  loading: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 加载状态图标类型
   * @property {String}
   * @default 'spinner'
   */
  loadingMode: {
    type: definePropType<'spinner' | 'circle' | 'semicircle'>(String),
    default: 'spinner',
  },
  /**
   * @description 加载图标大小
   * @property {Number}
   * @default 15
   */
  loadingSize: {
    type: [Number, String],
    default: '30rpx',
  },
  /**
   * @description 开放能力，具体请看uniapp稳定关于button组件部分说明
   * https://uniapp.dcloud.io/component/button
   * @property {String}
   * @default ''
   */
  openType: {
    type: String,
    default: '',
  },
  /**
   * @description 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
   * 取值为submit（提交表单），reset（重置表单）
   * @property {String}
   * @default ''
   */
  formType: {
    type: String,
    default: '',
  },
  /**
   * @description 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
   * 只微信小程序、QQ小程序有效
   * @property {String}
   * @default ''
   */
  appParameter: {
    type: String,
    default: '',
  },
  /**
   * @description 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效
   * @property {Boolean}
   * @default true
   */
  hoverStopPropagation: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。只微信小程序有效
   * @property {String}
   * @default 'en'
   */
  lang: {
    type: String,
    default: 'en',
  },
  /**
   * @description 会话来源，open-type="contact"时有效。只微信小程序有效
   * @property {String}
   * @default ''
   */
  sessionFrom: {
    type: String,
    default: '',
  },
  /**
   * @description 会话内消息卡片标题，open-type="contact"时有效
   * 默认当前标题，只微信小程序有效
   * @property {String}
   * @default ''
   */
  sendMessageTitle: {
    type: String,
    default: '',
  },
  /**
   * @description 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
   * 默认当前分享路径，只微信小程序有效
   * @property {String}
   * @default ''
   */
  sendMessagePath: {
    type: String,
    default: '',
  },
  /**
   * @description 会话内消息卡片图片，open-type="contact"时有效
   * 默认当前页面截图，只微信小程序有效
   * @property {String}
   * @default ''
   */
  sendMessageImg: {
    type: String,
    default: '',
  },
  /**
   * @description 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，
   * 用户点击后可以快速发送小程序消息，open-type="contact"时有效
   * @property {Boolean}
   * @default false
   */
  showMessageCard: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
   * @property {String}
   * @default ''
   */
  dataName: {
    type: String,
    default: '',
  },
  /**
   * @description 节流，一定时间内只能触发一次
   * @property {Number}
   * @default 0
   */
  throttleTime: {
    type: Number,
    default: 0,
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
   * @description 按钮文字
   * @property {String}
   * @default ''
   */
  text: {
    type: String,
    default: '',
  },
  /**
   * @description 按钮图标
   * @property {String}
   * @default ''
   */
  icon: {
    type: String,
    default: '',
  },
  /**
   * @description 按钮图标
   * @property {String}
   * @default ''
   */
  iconColor: {
    type: String,
    default: '',
  },
  /**
   * @description 按钮颜色，支持传入linear-gradient渐变色
   * @property {String}
   * @default ''
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * @description dark 模式, 意味着自动设置 color 为 dark 模式的颜色
   * @property {Boolean}
   * @default false
   */
  dark: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 圆角大小
   * @property {String, Number}
   * @default '16rpx'
   */
  round: {
    type: [String, Number],
    default: '16rpx',
  },
});

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

export const buttonEmits = {
  click: () => true,
  getphonenumber: (_: any) => true,
  getuserinfo: (_: any) => true,
  error: (_: any) => true,
  opensetting: (_: any) => true,
  launchapp: (_: any) => true,
};
export type ButtonEmits = typeof buttonEmits;

export type ButtonInstance = InstanceType<typeof Button>;
