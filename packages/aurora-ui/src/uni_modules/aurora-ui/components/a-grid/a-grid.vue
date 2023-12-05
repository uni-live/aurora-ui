<template>
  <view class="a-grid" :style="[gridStyle]">
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
  /**
   * grid 宫格布局
   * @description 宫格组件一般用于同时展示多个同类项目的场景，可以给宫格的项目设置徽标组件(badge)，或者图标等，也可以扩展为左右滑动的轮播形式。
   * @tutorial https://www.uviewui.com/components/grid.html
   * @property {String | Number}	col			宫格的列数（默认 3 ）
   * @property {Boolean}			border		是否显示宫格的边框（默认 false ）
   * @property {String}			align		宫格对齐方式，表现为数量少的时候，靠左，居中，还是靠右 （默认 'left' ）
   * @property {Object}			customStyle	定义需要用到的外部样式
   * @event {Function} click 点击宫格触发
   * @example <u-grid :col="3" @click="click"></u-grid>
   */
  import { computed, type CSSProperties } from 'vue';

  import { gridProps } from './props';
  import { deepMerge, addStyle } from '../../shared';
  import { createGridProviderContext } from './provider';
  import { useInstance } from '../../hooks';

  const props = defineProps(gridProps);
  const emit = defineEmits<{
    click: [string];
  }>();

  const instance = useInstance();

  createGridProviderContext({
    col: props.col,
    border: props.border,
    click: handleClick,
    ...instance,
    instances: instance.instances.value,
  });

  // 宫格对齐方式
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

  function handleClick(name: string) {
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
