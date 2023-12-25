import type { ExtractPropTypes } from 'vue';
import { buildProps, definePropType } from '../../shared';
import Line from './a-line.vue';
import { LineTheme } from './styles/light';
import commonProps from '../../common/props';

export const lineProps = buildProps({
  /**
   * @description 公共props
   */
  ...commonProps<LineTheme>(),
  /**
   * @description 线条的颜色
   * @property {String}
   */
  color: {
    type: String,
  },
  /**
   * @description 长度
   * @property {String, Number}
   */
  length: {
    type: [String, Number],
  },
  /**
   * @description 线条的方向
   * @property {String, Number}
   * @default 'row'
   */
  direction: {
    type: definePropType<'row' | 'col'>(String),
    default: 'row',
  },
  /**
   * @description 是否虚线
   * @property {Boolean}
   * @default false
   */
  dashed: {
    type: Boolean,
    default: false,
  },
});

export type LineProps = ExtractPropTypes<typeof lineProps>;

export type LineInstance = InstanceType<typeof Line>;
