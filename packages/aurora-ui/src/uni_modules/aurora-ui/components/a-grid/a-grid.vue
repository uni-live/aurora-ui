<script lang="ts">
  export default {
    name: 'a-grid',
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

  import { gridProps, gridEmits } from './grid';
  import { deepMerge, addStyle } from '../../shared';
  import { createGridProviderContext } from './provider';
  import { useInstance } from '../../hooks/use-instance';
  import { useTheme } from '../../hooks/use-theme';
  import { gridLight } from './styles';
  import { useNamespace } from '../../hooks/use-namespace';

  const props = defineProps(gridProps);

  const emit = defineEmits(gridEmits);

  const instance = useInstance();

  const ns = useNamespace('grid');

  const themeRef = useTheme('Grid', gridLight, props);

  createGridProviderContext({
    col: props.col,
    border: props.border,
    click: handleClick,
    ...instance,
    instances: instance.instances.value,
  });

  const gridStyle = computed(() => {
    const { self } = themeRef.value;

    const style = ns.cssVarBlock({
      'justify-content': props.align || self.justifyContentL,
    });

    return deepMerge(style, addStyle(props.customStyle));
  });

  function handleClick(name: string | number) {
    emit('click', name);
  }
</script>

<template>
  <view :class="[ns.b(), customClass]" :style="[gridStyle]">
    <slot></slot>
  </view>
</template>

<style lang="scss" scoped>
  @use './grid.scss' as *;
</style>
