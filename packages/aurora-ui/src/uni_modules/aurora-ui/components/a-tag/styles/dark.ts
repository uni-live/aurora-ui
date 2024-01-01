import { commonDark } from '../../../design/common';
import type { TagTheme } from './light';
import { self } from './light';

const tagDark: TagTheme = {
  name: 'Tag',
  common: commonDark,
  self(vars) {
    const commonSelf = self(vars);
    commonSelf.colorOpacitySecondary = '0.16';
    commonSelf.colorOpacitySecondaryPressed = '0.12';
    return commonSelf;
  },
};

export default tagDark;
