import { commonDark } from '../../../design/common';
import type { BadgeTheme } from './light';
import { self } from './light';

const badgeDark: BadgeTheme = {
  name: 'Badge',
  common: commonDark,
  self(vars) {
    const commonSelf = self(vars);
    commonSelf.colorOpacitySecondary = '0.16';
    commonSelf.colorOpacitySecondaryPressed = '0.12';
    return commonSelf;
  },
};

export default badgeDark;
