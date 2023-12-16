import { withInstall } from '../../shared';

import aConfigProvider from './a-config-provider.vue';

const AConfigProvider = withInstall(aConfigProvider);

export { AConfigProvider };

export default AConfigProvider;

export * from './config-provider';

export * from './interface';

export * from './provider';
