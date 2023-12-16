import { commonLight } from './common';
import { buttonLight } from '../components/a-button/styles';

import type { BuiltInGlobalTheme } from './interface';

export const lightTheme: BuiltInGlobalTheme = {
  name: 'light',
  common: commonLight,
  Button: buttonLight,
};
