import { commonDark } from '../../../design/common';
import type { GridTheme } from './light';
import { self } from './light';

const gridDark: GridTheme = {
  name: 'Grid',
  common: commonDark,
  self(vars) {
    const commonSelf = self(vars);
    return commonSelf;
  },
};

export default gridDark;
