import { commonDark } from '../../../design/common';
import type { ImageTheme } from './light';
import { self } from './light';

const imageDark: ImageTheme = {
  name: 'Image',
  common: commonDark,
  self(vars) {
    const commonSelf = self(vars);
    return commonSelf;
  },
};

export default imageDark;
