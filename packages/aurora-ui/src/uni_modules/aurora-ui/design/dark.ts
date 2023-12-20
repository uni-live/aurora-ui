import commonDark from './common/dark';
import buttonDark from '../components/a-button/styles/dark';
import iconDark from '../components/a-icon/styles/dark';

import type { BuiltInGlobalTheme } from './interface';

export const darkTheme: BuiltInGlobalTheme = {
  name: 'dark',
  common: commonDark,
  Button: buttonDark,
  Icon: iconDark,
};
