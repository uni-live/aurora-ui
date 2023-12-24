<script lang="ts">
  export default {
    name: 'a-status-bar',
    inheritAttrs: false,
    // #ifdef MP-WEIXIN
    options: {
      virtualHost: true,
    },
    // #endif
  };
</script>

<script setup lang="ts">
  import { computed, type CSSProperties } from 'vue';
  import { statusBarProps } from './status-bar';
  import { addStyle, addUnit, deepMerge, sys } from '../../shared';
  import { useNamespace } from '../../hooks/use-namespace';
  import { useTheme } from '../../hooks/use-theme';
  import { statusBarLight } from './styles';

  const props = defineProps(statusBarProps);

  const ns = useNamespace('status-bar');

  const themeRef = useTheme('StatusBar', statusBarLight, props);

  const style = computed(() => {
    const { self } = themeRef.value;
    const style: CSSProperties = ns.cssVarBlock({
      height: addUnit(sys().statusBarHeight, 'px'),
      'background-color': self.backgroundColor,
    });
    return deepMerge(style, addStyle(props.customStyle));
  });
</script>
<template>
  <view :style="[style]" :class="[ns.b()]">
    <slot />
  </view>
</template>

<style lang="scss" scoped>
  @use './status-bar.scss' as *;
</style>
