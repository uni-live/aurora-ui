import { createContext, useContext } from '../../hooks';
import type { InjectionKey, Ref } from 'vue';

export interface GridProviderContextProps {
  col: number;
  border: boolean;
  items: Ref<any>;
  click?: (name: string) => void;
}

const key: InjectionKey<GridProviderContextProps> = Symbol();

export function createGridProviderContext(context: GridProviderContextProps) {
  return createContext<GridProviderContextProps>(key, context);
}

export function useGridProviderContext() {
  return useContext<GridProviderContextProps>(key);
}
