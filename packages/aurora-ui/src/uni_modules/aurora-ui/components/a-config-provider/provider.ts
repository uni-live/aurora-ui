import { createContext, useContext } from '../../hooks';
import type { InjectionKey } from 'vue';
import { GlobalTheme, DateLocale, GlobalThemeOverrides } from './interface';

export interface ConfigProviderContextProps {
  mergedThemeRef?: GlobalTheme;
  mergedNamespaceRef?: string;
  mergedLocaleRef?: DateLocale;
  mergedThemeOverridesRef?: GlobalThemeOverrides;
}

const key: InjectionKey<ConfigProviderContextProps> = Symbol();

export function createConfigProviderContext(context: ConfigProviderContextProps) {
  return createContext<ConfigProviderContextProps>(key, context);
}

export function useConfigProviderContext() {
  return useContext<ConfigProviderContextProps>(key);
}
