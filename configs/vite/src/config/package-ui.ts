import { readPackageJSON } from 'pkg-types';
import { defineConfig, mergeConfig, type UserConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { commonConfig } from './common';

interface DefineOptions {
  overrides?: UserConfig;
  options?: {};
}

function definePackageUIConfig(defineOptions: DefineOptions = {}) {
  const { overrides = {} } = defineOptions;
  const root = process.cwd();
  return defineConfig(async () => {
    const { dependencies = {}, peerDependencies = {} } = await readPackageJSON(root);

    const packageConfig: UserConfig = {
      build: {
        lib: {
          entry: 'src/index.ts',
          formats: ['es'],
          fileName: () => 'index.mjs',
        },
        rollupOptions: {
          external: [...Object.keys(dependencies), ...Object.keys(peerDependencies)],
        },
      },
      plugins: [
        dts({
          entryRoot: 'src',
          logLevel: 'error',
        }),
      ],
    };
    const mergedConfig = mergeConfig(commonConfig, packageConfig);

    return mergeConfig(mergedConfig, overrides);
  });
}

export { definePackageUIConfig };
