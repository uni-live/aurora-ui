import { createContext, useContext, type InstanceReturns } from '../../hooks';
import type {  ComponentInternalInstance, InjectionKey } from 'vue';

export interface FormProviderContextProps extends Omit<InstanceReturns, 'instances'> {
  instances: ComponentInternalInstance[];
}

const key: InjectionKey<FormProviderContextProps> = Symbol('form');

export function createFormProviderContext(context: FormProviderContextProps) {
  return createContext<FormProviderContextProps>(key, context);
}

export function useFormProviderContext() {
  return useContext<FormProviderContextProps>(key);
}
