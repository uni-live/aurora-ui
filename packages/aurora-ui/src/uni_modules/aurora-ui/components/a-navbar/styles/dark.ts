import { commonDark } from '../../../design/common';
import type { NavbarTheme } from './light';
import { self } from './light';

const navbarDark: NavbarTheme = {
  name: 'Navbar',
  common: commonDark,
  self(vars) {
    const commonSelf = self(vars);
    return commonSelf;
  },
};

export default navbarDark;
