import { defineStore } from 'pinia';
import { store } from '.';
import { reactive, ref } from 'vue';

import {
  type UseConfigPrivateProps,
  useConfigPrivate,
  lightTheme,
  darkTheme,
} from '@/uni_modules/aurora-ui';

export const useConfig = defineStore('confog', () => {
  const isDark = ref(false);

  const props = reactive<UseConfigPrivateProps>({
    theme: lightTheme,
  });

  useConfigPrivate(props);

  function changeNS(ns: string) {
    props.namespace = ns;
  }

  /**
   * @description 切换主题
   */
  function changeTheme() {
    isDark.value = !isDark.value;
    props.theme = isDark.value ? darkTheme : lightTheme;
  }

  return { changeNS, changeTheme };
});

export function useConfigStore() {
  return useConfig(store);
}
