import { defineStore } from 'pinia';
import { store } from '.';
import { reactive } from 'vue';

import { type UseConfigPrivateProps, useConfigPrivate, buttonLight } from '@/uni_modules/aurora-ui';

export const useConfig = defineStore('confog', () => {
  const props = reactive<UseConfigPrivateProps>({
    namespace: '',
    theme: void 0,
  });

  useConfigPrivate(props);

  function changeNS(ns: string) {
    props.namespace = ns;
  }

  function changeTheme() {
    props.theme = {
      ...buttonLight,
      common: {
        ...buttonLight.common,
        primaryColor: 'red',
      },
    };
  }

  return { changeNS, changeTheme };
});

export function useConfigStore() {
  return useConfig(store);
}
