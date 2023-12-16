import { commonDark } from './common';
import { buttonDark } from '../components/a-button/styles';

import type { BuiltInGlobalTheme } from './interface';

export const darkTheme: BuiltInGlobalTheme = {
  name: 'dark',
  common: commonDark,
  Button: buttonDark,
};
