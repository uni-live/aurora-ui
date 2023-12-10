import type { ExtractPropTypes } from 'vue';
import { buildProps, definePropType } from '../../shared';
import Button from './a-button.vue';

/**
 * button 按钮
 * @description Button 按钮
 * @tutorial https://www.uviewui.com/components/button.html
 *
 * @property {String}			type					按钮的预置样式，info，primary，error，warning，success (默认 'info' )
 * @property {String}			size					按钮尺寸，large，normal，mini （默认 normal）
 * @property {String}			shape					按钮形状，circle（两边为半圆），square（带圆角） （默认 'square' ）
 * @property {Boolean}			plain					按钮是否镂空，背景色透明 （默认 false）
 * @property {Boolean}			disabled				是否禁用 （默认 false）
 * @property {Boolean}			loading					按钮名称前是否带 loading 图标(App-nvue 平台，在 ios 上为雪花，Android上为圆圈) （默认 false）
 * @property {String}			loadingMode				加载状态图标类型 （默认 'spinner' ）
 * @property {String | Number}	loadingSize				加载图标大小 （默认 15 ）
 * @property {String}			openType				开放能力，具体请看uniapp稳定关于button组件部分说明
 * @property {String}			formType				用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
 * @property {String}			appParameter			打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 （注：只微信小程序、QQ小程序有效）
 * @property {Boolean}			hoverStopPropagation	指定是否阻止本节点的祖先节点出现点击态，微信小程序有效（默认 true ）
 * @property {String}			lang					指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文（默认 en ）
 * @property {String}			sessionFrom				会话来源，openType="contact"时有效
 * @property {String}			sendMessageTitle		会话内消息卡片标题，openType="contact"时有效
 * @property {String}			sendMessagePath			会话内消息卡片点击跳转小程序路径，openType="contact"时有效
 * @property {String}			sendMessageImg			会话内消息卡片图片，openType="contact"时有效
 * @property {Boolean}			showMessageCard			是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，openType="contact"时有效（默认false）
 * @property {String}			dataName				额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
 * @property {String | Number}	throttleTime			节流，一定时间内只能触发一次 （默认 0 )
 * @property {String | Number}	hoverStartTime			按住后多久出现点击态，单位毫秒 （默认 0 )
 * @property {String | Number}	hoverStayTime			手指松开后点击态保留时间，单位毫秒 （默认 200 )
 * @property {String | Number}	text					按钮文字，之所以通过props传入，是因为slot传入的话（注：nvue中无法控制文字的样式）
 * @property {String}			icon					按钮图标
 * @property {String}			iconColor				按钮图标颜色
 * @property {String}			color					按钮颜色，支持传入linear-gradient渐变色
 * @property {Object}			customStyle				定义需要用到的外部样式
 *
 * @event {Function}	click			非禁止并且非加载中，才能点击
 * @event {Function}	getphonenumber	open-type="getPhoneNumber"时有效
 * @event {Function}	getuserinfo		用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo
 * @event {Function}	error			当使用开放能力时，发生错误的回调
 * @event {Function}	opensetting		在打开授权设置页并关闭后回调
 * @event {Function}	launchapp		打开 APP 成功的回调
 * @example <u-button>月落</u-button>
 */

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
