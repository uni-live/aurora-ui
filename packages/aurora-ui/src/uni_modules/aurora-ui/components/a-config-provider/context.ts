import { createInjectionKey } from '../../shared/create-injection-key/create-injection-key';
import { ConfigProviderContextProps } from './interface';

export const configProviderInjectionKey =
  createInjectionKey<ConfigProviderContextProps>('a-config-provider');
