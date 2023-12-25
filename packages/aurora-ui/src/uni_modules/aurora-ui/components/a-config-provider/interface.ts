import { ThemeCommonVars } from 'design/common';
import { ButtonTheme } from '../a-button/styles';
import { ExtractThemeOverrides } from 'hooks/use-theme';
import { ComputedRef, Ref } from 'vue';
import { ConfigProviderProps } from './config-provider';
import { IconTheme } from '../a-icon/styles/light';
import { GridTheme } from '../a-grid/styles/light';
import { GridItemTheme } from '../a-grid-item/styles/light';
import { StatusBarTheme } from '../a-status-bar/styles/light';
import { LoadingTheme } from '../a-loading/styles/light';
import { ImageTheme } from '../a-image/styles/light';
import { CellTheme } from '../a-cell/styles/light';
import { LineTheme } from '../a-line/styles/light';

export interface GlobalThemeWithoutCommon {
  Button?: ButtonTheme;
  Icon?: IconTheme;
  Grid?: GridTheme;
  GridItem?: GridItemTheme;
  StatusBar?: StatusBarTheme;
  Loading?: LoadingTheme;
  Image?: ImageTheme;
  Cell?: CellTheme;
  Line?: LineTheme;
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

export interface ConfigProviderContextProps {
  mergedThemeRef?: ComputedRef<GlobalTheme | undefined> | Ref<GlobalTheme | undefined>;
  mergedNamespaceRef?: ComputedRef<string | undefined> | Ref<string | undefined>;
  mergedLocaleRef?: ComputedRef<DateLocale | undefined> | Ref<DateLocale | undefined>;
  mergedThemeOverridesRef?:
    | ComputedRef<GlobalThemeOverrides | undefined>
    | Ref<GlobalThemeOverrides | undefined>;
}

export type UseConfigPrivateProps = Omit<ConfigProviderProps, 'customClass' | 'customStyle'>;
