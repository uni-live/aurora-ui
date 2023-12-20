import { commonDark } from '../../../design/common';
import type { IconTheme } from './light';
import { self } from './light';

const iconDark: IconTheme = {
  name: 'Icon',
  common: commonDark,
  self(vars) {
    const commonSelf = self(vars);
    return commonSelf;
  },
};

export default iconDark;
