import { commonDark } from '../../../design/common';
import type { GridItemTheme } from './light';
import { self } from './light';

const gridItemDark: GridItemTheme = {
  name: 'GridItem',
  common: commonDark,
  self(vars) {
    const commonSelf = self(vars);
    return commonSelf;
  },
};

export default gridItemDark;
