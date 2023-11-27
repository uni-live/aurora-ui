import { createContext, useContext, type InstanceReturns } from '../../hooks';
import type { ComponentInternalInstance, InjectionKey } from 'vue';

export interface GridProviderContextProps extends Omit<InstanceReturns, 'instances'> {
  col: number;
  border: boolean;
  instances: ComponentInternalInstance[];
  click?: (name: string) => void;
}

const key: InjectionKey<GridProviderContextProps> = Symbol();

export function createGridProviderContext(context: GridProviderContextProps) {
  return createContext<GridProviderContextProps>(key, context);
}

export function useGridProviderContext() {
  return useContext<GridProviderContextProps>(key);
}
