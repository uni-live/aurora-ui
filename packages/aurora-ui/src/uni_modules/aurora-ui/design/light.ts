import { commonLight } from './common';
import buttonLight from '../components/a-button/styles/light';
import iconLight from '../components/a-icon/styles/light';
import gridLight from '../components/a-grid/styles/light';
import gridItemLight from '../components/a-grid-item/styles/light';

import type { BuiltInGlobalTheme } from './interface';

export const lightTheme: BuiltInGlobalTheme = {
  name: 'light',
  common: commonLight,
  Button: buttonLight,
  Icon: iconLight,
  Grid: gridLight,
  GridItem: gridItemLight,
};
