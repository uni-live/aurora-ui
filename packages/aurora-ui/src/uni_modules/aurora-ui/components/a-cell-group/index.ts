import { withInstall } from '../../shared';

import aCellGroup from './a-cell-group.vue';

const ACellGroup = withInstall(aCellGroup);

export { ACellGroup };

export default ACellGroup;

export * from './cell-group';

export * from './styles';
