import { withInstall } from '../../shared';

import aTransition from './a-transition.vue';

const ATransition = withInstall(aTransition);

export { ATransition };

export default ATransition;

export * from './transition';
export * from './useTransition';
