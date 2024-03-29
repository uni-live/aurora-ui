import type { ExtractPropTypes } from 'vue';
import { buildProps } from '../../shared';
import Navbar from './a-navbar.vue';
import commonProps from '../../common/props';
import { NavbarTheme } from './styles';

export const navbarProps = buildProps({
  /**
   * @description 公共props
   */
  ...commonProps<NavbarTheme>(),
  /**
   * @description 是否开启顶部安全区适配
   * @property {Boolean}
   * @default true
   */
  safeAreaInsetTop: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 固定在顶部时，是否生成一个等高元素，以防止塌陷
   * @property {Boolean}
   * @default false
   */
  placeholder: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 是否固定在顶部
   * @property {Boolean}
   * @default true
   */
  fixed: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 是否显示下边框
   * @property {Boolean}
   * @default false
   */
  border: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 左边的图标
   * @property {String}
   * @default 'arrow-left'
   */
  leftIcon: {
    type: String,
    default: 'arrow-left',
  },
  /**
   * @description 左边的提示文字
   * @property {String}
   * @default ''
   */
  leftText: {
    type: String,
    default: '',
  },
  /**
   * @description 边的提示文字
   * @property {String}
   * @default ''
   */
  rightText: {
    type: String,
    default: '',
  },
  /**
   * @description 右边的图标
   * @property {String}
   * @default ''
   */
  rightIcon: {
    type: String,
    default: '',
  },
  /**
   * @description 标题
   * @property {String, Number}
   * @default ''
   */
  title: {
    type: [String, Number],
    default: '',
  },
  /**
   * @description 背景颜色
   * @property {String}
   */
  bgColor: {
    type: String,
  },
  /**
   * @description 标题的宽度
   * @property {String,Number}
   */
  titleWidth: {
    type: [String, Number],
  },
  /**
   * @description 导航栏高度
   * @property {String,Number}
   */
  height: {
    type: [String, Number],
  },
  /**
   * @description 左侧返回图标的大小
   * @property {String,Number}
   */
  leftIconSize: {
    type: [String, Number],
  },
  /**
   * @description 左侧返回图标的颜色
   * @property {String}
   * @default 20
   */
  leftIconColor: {
    type: String,
    default: 20,
  },
  /**
   * @description 点击左侧区域(返回图标)，是否自动返回上一页
   * @property {Boolean}
   * @default false
   */
  autoBack: {
    type: Boolean,
    default: false,
  },
  /**
   * @description  标题的样式，对象或字符串
   * @property {String, Object}
   * @default ''
   */
  titleStyle: {
    type: [String, Object],
    default: '',
  },
});

export type NavbarProps = ExtractPropTypes<typeof navbarProps>;

export const navbarEmits = {
  leftClick: () => true,
  rightClick: () => true,
};
export type NavbarEmits = typeof navbarEmits;

export type NavbarInstance = InstanceType<typeof Navbar>;
