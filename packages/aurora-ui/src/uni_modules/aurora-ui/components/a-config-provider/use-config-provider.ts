import { computed, UnwrapNestedRefs, provide, inject } from 'vue';
import { configProviderInjectionKey } from './context';
import { UseConfigPrivateProps } from './interface';

export function useConfigPrivate(config: UnwrapNestedRefs<UseConfigPrivateProps>) {
  const AConfigProvider = inject(configProviderInjectionKey);

  const mergedThemeRef = computed(() => {
    const { theme } = config;

    if (theme === null) return void 0;

    const inheritedTheme = AConfigProvider?.mergedThemeRef?.value;

    return theme === void 0
      ? inheritedTheme
      : inheritedTheme === void 0
      ? theme
      : Object.assign({}, inheritedTheme, theme);
  });

  const mergedNamespaceRef = computed(() => {
    const { namespace } = config;

    return namespace === void 0 ? AConfigProvider?.mergedNamespaceRef?.value : namespace;
  });

  const mergedLocaleRef = computed(() => {
    const { locale } = config;
    if (locale === null) return void 0;
    return locale === void 0 ? AConfigProvider?.mergedLocaleRef?.value : locale;
  });

  provide(configProviderInjectionKey, {
    mergedLocaleRef: mergedLocaleRef,
    mergedNamespaceRef: mergedNamespaceRef,
    mergedThemeRef: mergedThemeRef,
  });
}
