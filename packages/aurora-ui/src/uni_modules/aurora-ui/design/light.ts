import type { BuiltInGlobalTheme } from './interface';

import { commonLight } from './common';
import buttonLight from '../components/a-button/styles/light';
import iconLight from '../components/a-icon/styles/light';
import gridLight from '../components/a-grid/styles/light';
import gridItemLight from '../components/a-grid-item/styles/light';
import statusBarLight from '../components/a-status-bar/styles/light';
import loadingLight from '../components/a-loading/styles/light';
import imageLight from '../components/a-image/styles/light';

export const lightTheme: BuiltInGlobalTheme = {
  name: 'light',
  common: commonLight,
  Button: buttonLight,
  Icon: iconLight,
  Grid: gridLight,
  GridItem: gridItemLight,
  StatusBar: statusBarLight,
  Loading: loadingLight,
  Image: imageLight,
};
