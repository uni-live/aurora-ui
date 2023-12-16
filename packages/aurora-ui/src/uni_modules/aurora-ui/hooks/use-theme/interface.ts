import type { ThemeCommonVars } from 'design/common';

export interface Theme<N, T = Record<string, unknown>, R = any> {
  name: N;
  common?: ThemeCommonVars;
  peers?: R;
  self?: (vars: ThemeCommonVars) => T;
}

export type UseThemeProps<T> = Readonly<{
  theme?: T | undefined;
  themeOverrides?: ExtractThemeOverrides<T>;
  builtinThemeOverrides?: ExtractThemeOverrides<T>;
}>;

export type ExtractThemeOverrides<T> = Partial<ExtractThemeVars<T>> &
  ExtractPeerOverrides<T> & { common?: ThemeCommonVars };

export type ExtractThemeVars<T> = T extends Theme<unknown, infer U, unknown>
  ? unknown extends U // self is undefined, ThemeVars is unknown
    ? Record<string, unknown>
    : U
  : Record<string, unknown>;

export type ExtractPeerOverrides<T> = T extends Theme<unknown, unknown, infer V>
  ? {
      peers?: {
        [k in keyof V]?: ExtractThemeOverrides<V[k]>;
      };
    }
  : T;

export type MergedTheme<T> = T extends Theme<unknown, infer V, infer W>
  ? {
      common: ThemeCommonVars;
      self: V;
      peers: W;
      peerOverrides: ExtractMergedPeerOverrides<T>;
    }
  : T;

export type ExtractMergedPeerOverrides<T> = T extends Theme<unknown, unknown, infer V>
  ? {
      [k in keyof V]?: ExtractPeerOverrides<V[k]>;
    }
  : T;
