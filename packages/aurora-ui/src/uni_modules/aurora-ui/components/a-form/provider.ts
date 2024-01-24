import { createContext, useContext, type InstanceReturns } from '../../hooks';
import type { ComponentInternalInstance, InjectionKey } from 'vue';

export interface FormProviderContextProps extends Omit<InstanceReturns, 'instances'> {
  instances: ComponentInternalInstance[];
  disabled: boolean;
  setFormModel: (key: string, value: any) => void;
}

const key: InjectionKey<FormProviderContextProps> = Symbol('form');

export function createFormProviderContext(context: FormProviderContextProps) {
  return createContext<FormProviderContextProps>(key, context);
}

export function useFormProviderContext() {
  return useContext<FormProviderContextProps>(key);
}
