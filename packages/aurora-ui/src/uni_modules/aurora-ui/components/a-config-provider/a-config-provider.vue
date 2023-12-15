<script lang="ts">
  export default {
    name: 'a-config-provider',
    inheritAttrs: false,
    // #ifdef MP-WEIXIN
    options: {
      virtualHost: true,
    },
    // #endif
  };
</script>

<script setup lang="ts">
  import { computed } from 'vue';
  import { configProviderProps } from './config-provider';
  import { useConfigProviderContext, createConfigProviderContext } from './provider';
  import { addStyle } from '../../shared';

  const props = defineProps(configProviderProps);

  const AConfigProvider = useConfigProviderContext();

  const mergedThemeRef = computed(() => {
    const { theme } = props;

    if (theme === null) return void 0;

    const inheritedTheme = AConfigProvider?.mergedThemeRef;

    return theme === void 0
      ? inheritedTheme
      : inheritedTheme === void 0
      ? theme
      : Object.assign({}, inheritedTheme, theme);
  });

  const mergedNamespaceRef = computed(() => {
    const { namespace } = props;
    return namespace === void 0 ? AConfigProvider?.mergedNamespaceRef : namespace;
  });

  const mergedLocaleRef = computed(() => {
    const { locale } = props;
    if (locale === null) return void 0;
    return locale === void 0 ? AConfigProvider?.mergedLocaleRef : locale;
  });

  const customStyle = computed(() => {
    return [addStyle(props.customStyle)];
  });

  createConfigProviderContext({
    mergedLocaleRef: mergedLocaleRef.value,
    mergedNamespaceRef: mergedNamespaceRef.value,
    mergedThemeRef: mergedThemeRef.value,
  });
</script>

<template>
  <view :style="customStyle">
    <slot></slot>
  </view>
</template>
