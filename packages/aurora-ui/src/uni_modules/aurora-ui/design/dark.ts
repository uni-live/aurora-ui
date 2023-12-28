import type { BuiltInGlobalTheme } from './interface';

import commonDark from './common/dark';
import buttonDark from '../components/a-button/styles/dark';
import iconDark from '../components/a-icon/styles/dark';
import gridDark from '../components/a-grid/styles/dark';
import gridItemDark from '../components/a-grid-item/styles/dark';
import statusBarDark from '../components/a-status-bar/styles/dark';
import loadingDark from '../components/a-loading/styles/dark';
import imageDark from '../components/a-image/styles/dark';
import cellDark from '../components/a-cell/styles/dark';
import cellGroupDark from '../components/a-cell-group/styles/dark';
import lineDark from '../components/a-line/styles/dark';

export const darkTheme: BuiltInGlobalTheme = {
  name: 'dark',
  common: commonDark,
  Button: buttonDark,
  Icon: iconDark,
  Grid: gridDark,
  GridItem: gridItemDark,
  StatusBar: statusBarDark,
  Loading: loadingDark,
  Image: imageDark,
  Cell: cellDark,
  CellGroup: cellGroupDark,
  Line: lineDark,
};
