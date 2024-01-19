import { commonDark } from '../../../design/common';
import type {  FormItemTheme } from './light';
import { self } from './light';

const formDark: FormItemTheme = {
  name: 'FormItem',
  common: commonDark,
  self(vars) {
    const commonSelf = self(vars);
    return commonSelf;
  },
};

export default formDark;
