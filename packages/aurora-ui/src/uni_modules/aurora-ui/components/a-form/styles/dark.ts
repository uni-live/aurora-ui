import { commonDark } from '../../../design/common';
import type { FormTheme } from './light';
import { self } from './light';

const formDark: FormTheme = {
  name: 'Form',
  common: commonDark,
  self(vars) {
    const commonSelf = self(vars);
    return commonSelf;
  },
};

export default formDark;
