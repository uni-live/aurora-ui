import { createInjectionKey } from '../../shared/create-injection-key';

export interface FormContext {
  setFormModel: (key: string, value: any) => void;
}

export const formProviderInjectionKey = createInjectionKey<FormContext>('form-context');
