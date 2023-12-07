<template>
  <view :style="[style]" class="a-status-bar">
    <slot />
  </view>
</template>
<script lang="ts">
  export default {
    // #ifdef MP-WEIXIN
    options: {
      virtualHost: true,
    },
    // #endif
  };
</script>

<script setup lang="ts">
  import { computed, type CSSProperties } from 'vue';
  import { statusBarProps } from './props';
  import { addStyle, addUnit, deepMerge, sys } from '../../shared';

  const props = defineProps(statusBarProps);

  const style = computed(() => {
    const style: CSSProperties = {};
    // 状态栏高度，由于某些安卓和微信开发工具无法识别css的顶部状态栏变量，所以使用js获取的方式
    style.height = addUnit(sys().statusBarHeight, 'px');
    style.backgroundColor = props.bgColor;
    return deepMerge(style, addStyle(props.customStyle));
  });
</script>

<style lang="scss" scoped>
  .a-status-bar {
    // nvue会默认100%，如果nvue下，显式写100%的话，会导致宽度不为100%而异常
    /* #ifndef APP-NVUE */
    width: 100%;
    /* #endif */
  }
</style>
