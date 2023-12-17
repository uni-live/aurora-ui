import { commonDark } from '../../../design';
import type { ButtonTheme } from './light';
import { self } from './light';

const buttonDark: ButtonTheme = {
  name: 'Button',
  common: commonDark,
  self(vars) {
    const commonSelf = self(vars);
    commonSelf.colorOpacitySecondary = '0.16';
    commonSelf.colorOpacitySecondaryPressed = '0.12';
    return commonSelf;
  },
};

export default buttonDark;
