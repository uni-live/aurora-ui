import { commonDark } from '../../../design/common';
import type { CellTheme } from './light';
import { self } from './light';

const cellDark: CellTheme = {
  name: 'Cell',
  common: commonDark,
  self(vars) {
    const commonSelf = self(vars);
    return commonSelf;
  },
};

export default cellDark;
