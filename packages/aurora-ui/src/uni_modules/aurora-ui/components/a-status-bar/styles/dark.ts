import { commonDark } from '../../../design/common';
import type { StatusBarTheme } from './light';
import { self } from './light';

const statusBarDark: StatusBarTheme = {
  name: 'StatusBar',
  common: commonDark,
  self(vars) {
    const commonSelf = self(vars);
    return commonSelf;
  },
};

export default statusBarDark;
