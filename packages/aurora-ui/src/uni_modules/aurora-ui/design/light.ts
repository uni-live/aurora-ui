import { commonLight } from './common';
import buttonLight from '../components/a-button/styles/light';
import iconLight from '../components/a-icon/styles/light';

import type { BuiltInGlobalTheme } from './interface';

export const lightTheme: BuiltInGlobalTheme = {
  name: 'light',
  common: commonLight,
  Button: buttonLight,
  Icon: iconLight,
};
