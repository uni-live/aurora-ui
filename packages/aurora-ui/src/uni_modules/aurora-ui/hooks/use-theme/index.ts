import type { GlobalTheme } from '../../components/a-config-provider';
import type { ExtractThemeOverrides, MergedTheme, Theme, UseThemeProps } from './interface';
import { ComputedRef, computed, inject } from 'vue';
import { merge } from '../../shared';
import { configProviderInjectionKey } from '../../components/a-config-provider/context';

export * from './interface';

export function useTheme<N, T, R>(
  resolveId: Exclude<keyof GlobalTheme, 'common' | 'name'>,
  defaultTheme: Theme<N, T, R>,
  props: UseThemeProps<Theme<N, T, R>>,
): ComputedRef<MergedTheme<Theme<N, T, R>>> {
  const AConfigProvider = inject(configProviderInjectionKey);

  const mergedThemeRef = computed(() => {
    const {
      theme: { common: selfCommon, self, peers = {} } = {},
      themeOverrides: selfOverrides = {} as ExtractThemeOverrides<Theme<N, T, R>>,
      builtinThemeOverrides: builtinOverrides = {} as ExtractThemeOverrides<Theme<N, T, R>>,
    } = props;
    const { common: selfCommonOverrides, peers: peersOverrides } = selfOverrides;
    const {
      common: globalCommon = undefined,
      [resolveId]: {
        common: globalSelfCommon = undefined,
        self: globalSelf = undefined,
        peers: globalPeers = {},
      } = {},
    } = AConfigProvider?.mergedThemeRef?.value || {};
    const { common: globalCommonOverrides = undefined, [resolveId]: globalSelfOverrides = {} } =
      AConfigProvider?.mergedThemeOverridesRef?.value || {};
    const { common: globalSelfCommonOverrides, peers: globalPeersOverrides = {} } =
      globalSelfOverrides;
    const mergedCommon = merge(
      {},
      selfCommon || globalSelfCommon || globalCommon || defaultTheme.common,
      globalCommonOverrides,
      globalSelfCommonOverrides,
      selfCommonOverrides,
    );
    const mergedSelf = merge(
      // {}, executed every time, no need for empty obj
      (self || globalSelf || defaultTheme.self)?.(mergedCommon) as T,
      builtinOverrides,
      globalSelfOverrides,
      selfOverrides,
    );
    return {
      common: mergedCommon,
      self: mergedSelf,
      peers: merge({}, defaultTheme.peers, globalPeers, peers), // 关联组件主题
      peerOverrides: merge({}, builtinOverrides.peers, globalPeersOverrides, peersOverrides), // 关联组件主题覆盖
    };
  });

  return mergedThemeRef;
}
