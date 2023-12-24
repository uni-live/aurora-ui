import { commonDark } from '../../../design/common';
import type { LoadingTheme } from './light';
import { self } from './light';

const gridDark: LoadingTheme = {
  name: 'Loading',
  common: commonDark,
  self(vars) {
    const commonSelf = self(vars);
    return commonSelf;
  },
};

export default gridDark;
