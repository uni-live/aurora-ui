import type { ExtractPropTypes } from 'vue';
import { buildProps } from '../../shared';
import CellGroup from './a-cell-group.vue';
import { CellGroupTheme } from './styles';
import commProps from '../../common/props';

export const cellGroupProps = buildProps({
  ...commProps<CellGroupTheme>(),
  /**
   * @description 分组标题
   * @property {String,Number}
   * @default ''
   */
  title: {
    type: [String, Number],
    default: '',
  },
  /**
   * @description 是否显示外边框
   * @property {Boolean}
   * @default true
   */
  border: {
    type: Boolean,
    default: true,
  },
});

export type CellGroupProps = ExtractPropTypes<typeof cellGroupProps>;

export type CellGroupInstance = InstanceType<typeof CellGroup>;
