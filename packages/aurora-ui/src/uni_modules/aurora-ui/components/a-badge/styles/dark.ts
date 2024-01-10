import { commonDark } from '../../../design/common';
import type { BadgeTheme } from './light';
import { self } from './light';

const badgeDark: BadgeTheme = {
  name: 'Badge',
  common: commonDark,
  self(vars) {
    const commonSelf = self(vars);
    return commonSelf;
  },
};

export default badgeDark;
