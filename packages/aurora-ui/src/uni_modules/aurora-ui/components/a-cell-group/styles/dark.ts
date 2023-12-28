import { commonDark } from '../../../design/common';
import type { CellGroupTheme } from './light';
import { self } from './light';

const cellGroupDark: CellGroupTheme = {
  name: 'CellGroup',
  common: commonDark,
  self(vars) {
    const commonSelf = self(vars);
    return commonSelf;
  },
};

export default cellGroupDark;
