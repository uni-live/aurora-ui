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
  import { addStyle } from '../../shared/add';
  import { useConfigPrivate } from './use-config-provider';

  const props = defineProps(configProviderProps);

  useConfigPrivate(props);

  const customStyle = computed(() => {
    return [addStyle(props.customStyle)];
  });
</script>

<template>
  <view :class="[customClass]" :style="customStyle">
    <slot></slot>
  </view>
</template>
