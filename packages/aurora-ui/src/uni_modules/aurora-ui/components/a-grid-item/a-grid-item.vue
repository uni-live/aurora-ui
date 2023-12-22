<template>
  <view
    hover-class="a-grid-item--hover-class"
    :hover-stay-time="200"
    @tap="handleClick"
    :class="['a-grid-item', customClass, classnames]"
    :style="[itemStyle]"
  >
    <slot></slot>
  </view>
</template>
<script lang="ts">
  export default {
    name: 'a-grid-item',
    inheritAttrs: false,
    // #ifdef MP-WEIXIN
    options: {
      virtualHost: true,
    },
    // #endif
  };
</script>
<script setup lang="ts">
  import { computed, unref, getCurrentInstance, onMounted, watch } from 'vue';

  import { gridItemProps, gridItemEmits } from './grid-item';
  import { addStyle, deepMerge } from '../../shared';
  import { useGridProviderContext } from '../a-grid/provider';

  const props = defineProps(gridItemProps);

  const emit = defineEmits(gridItemEmits);

  const { col, border, click, instances, add } = useGridProviderContext();

  const instance = getCurrentInstance();

  const width = computed(() => {
    return 100 / Number(col) + '%';
  });

  const itemStyle = computed(() => {
    const style = {
      background: props.bgColor,
      width: width.value,
    };
    return deepMerge(style, addStyle(props.customStyle));
  });

  const classnames = computed(() => {
    let classes: string[] | string = [];
    if (border) {
      unref(instances)?.map((child, index) => {
        if (instance?.uid === child.uid) {
          const len = unref(instances)?.length;
          // 贴近右边屏幕边沿的child，并且最后一个（比如只有横向2个的时候），无需右边框
          if ((index + 1) % col !== 0 && index + 1 !== len) {
            (classes as string[]).push('a-border-right');
          }
          // 总的宫格数量对列数取余的值
          // 如果取余后，值为0，则意味着要将最后一排的宫格，都不需要下边框
          const lessNum = len % col === 0 ? col : len % col;
          // 最下面的一排child，无需下边框
          if (index < len - lessNum) {
            (classes as string[]).push('a-border-bottom');
          }
        }
      });
      // 支付宝，头条小程序无法动态绑定一个数组类名，否则解析出来的结果会带有","，而导致失效
      // #ifdef MP-ALIPAY || MP-TOUTIAO
      classes = classes.join(' ');
      // #endif
    }

    return classes;
  });

  onMounted(() => {
    add(instance!);
  });

  function handleClick() {
    let key = props.name;

    // 如果没有设置name属性，历遍父组件的children数组，判断当前的元素是否和本实例相等，找出当前组件的索引
    if (unref(instances)) {
      key = unref(instances)?.findIndex((child) => child.uid === instance?.uid);
    }
    // 调用父组件方法，发出事件
    click && click(key);
    emit('click', key);
  }
</script>

<style lang="scss" scoped>
  @use './grid-item.scss' as *;
</style>
