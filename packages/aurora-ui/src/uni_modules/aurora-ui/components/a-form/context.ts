import { createInjectionKey } from '../../shared/create-injection-key';

export interface FormContext {}

export const formProviderInjectionKey = createInjectionKey<FormContext>('form-context');
