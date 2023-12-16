import { ThemeCommonVars } from 'design/common';
import { ButtonTheme } from '../a-button/styles';
import { ExtractThemeOverrides } from 'hooks/use-theme';

export interface GlobalThemeWithoutCommon {
  Button?: ButtonTheme;
}

export interface GlobalTheme extends GlobalThemeWithoutCommon {
  name: string;
  common?: ThemeCommonVars;
}

export interface DateLocale {
  name: string;
  locale: any;
}

export interface CustomThemeCommonVars {}

export type GlobalThemeOverrides = {
  common?: Partial<ThemeCommonVars & CustomThemeCommonVars>;
} & {
  [key in keyof GlobalThemeWithoutCommon]?: ExtractThemeOverrides<GlobalThemeWithoutCommon[key]>;
};
