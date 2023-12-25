import { commonDark } from '../../../design/common';
import type { LineTheme } from './light';
import { self } from './light';

const lineDark: LineTheme = {
  name: 'Line',
  common: commonDark,
  self(vars) {
    const commonSelf = self(vars);
    return commonSelf;
  },
};

export default lineDark;
