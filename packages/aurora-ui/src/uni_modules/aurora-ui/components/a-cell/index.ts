import { withInstall } from '../../shared';

import aCell from './a-cell.vue';

const ACell = withInstall(aCell);

export { ACell };

export default ACell;

export * from './cell';

export * from './styles';
