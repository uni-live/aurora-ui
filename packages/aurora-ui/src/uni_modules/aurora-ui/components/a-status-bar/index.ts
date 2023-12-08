import { withInstall } from '../../shared';

import aStatusBar from './a-status-bar.vue';

export * from './status-bar';

const AStatusBar = withInstall(aStatusBar);

export { AStatusBar };

export default AStatusBar;
