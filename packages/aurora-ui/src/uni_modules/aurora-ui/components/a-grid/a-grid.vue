<template>
  <view :class="['a-grid', customClass]" :style="[gridStyle]">
    <slot></slot>
  </view>
</template>
<script lang="ts">
  export default {
    // #ifdef MP-WEIXIN
    // 将自定义节点设置成虚拟的，更加接近Vue组件的表现，能更好的使用flex属性
    options: {
      virtualHost: true,
    },
    // #endif
  };
</script>
<script setup lang="ts">
  import { computed, type CSSProperties } from 'vue';

  import { gridProps } from './props';
  import { deepMerge, addStyle } from '../../shared';
  import { createGridProviderContext } from './provider';
  import { useInstance } from '../../hooks';

  const props = defineProps(gridProps);
  const emit = defineEmits<{
    click: [string | number];
  }>();

  const instance = useInstance();

  createGridProviderContext({
    col: props.col,
    border: props.border,
    click: handleClick,
    ...instance,
    instances: instance.instances.value,
  });

  const gridStyle = computed(() => {
    let style: CSSProperties = {};
    switch (props.align) {
      case 'left':
        style.justifyContent = 'flex-start';
        break;
      case 'center':
        style.justifyContent = 'center';
        break;
      case 'right':
        style.justifyContent = 'flex-end';
        break;
      default:
        style.justifyContent = 'flex-start';
    }
    return deepMerge(style, addStyle(props.customStyle));
  });

  function handleClick(name: string | number) {
    emit('click', name);
  }
</script>

<style lang="scss" scoped>
  .a-grid {
    /* #ifdef MP */
    width: 100%;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    display: block;
    /* #endif */
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
</style>
