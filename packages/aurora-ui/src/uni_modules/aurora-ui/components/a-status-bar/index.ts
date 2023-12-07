import { withInstall } from '../../shared';

import aStatusBar from './a-status-bar.vue';

export * from './props';

const AStatusBar = withInstall(aStatusBar);

export { AStatusBar };

export default AStatusBar;
