<template>
  <view
    :hover-class="ns.is('active')"
    :hover-stay-time="200"
    @tap="handleClick"
    :class="mergeClass"
    :style="[mergeStyle]"
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
  import { computed, unref, getCurrentInstance, onMounted } from 'vue';

  import { gridItemProps, gridItemEmits } from './grid-item';
  import { addStyle, deepMerge } from '../../shared';
  import { useGridProviderContext } from '../a-grid/provider';
  import { useNamespace } from '../../hooks/use-namespace';
  import { useTheme } from '../../hooks/use-theme';
  import { gridItemLight } from './styles';
  import { changeColor } from 'seemly';

  const props = defineProps(gridItemProps);

  const emit = defineEmits(gridItemEmits);

  const ns = useNamespace('grid-item');

  const { col, border, click, instances, add } = useGridProviderContext();

  const instance = getCurrentInstance();

  const themeRef = useTheme('GridItem', gridItemLight, props);

  const mergeClass = computed(() => {
    return [ns.b(), ns.is('border-right'), ns.is('border-bottom'), props.customClass];
  });

  const width = computed(() => {
    return 100 / Number(col) + '%';
  });

  const mergeStyle = computed(() => {
    const { self } = themeRef.value;

    const mergeBgcolr = props.bgColor || self.backgroundColor;

    const style = ns.cssVarBlock({
      'background-color': mergeBgcolr,
      width: width.value || self.width,
      'border-color': self.borderColor,
      'color-pressed': changeColor(mergeBgcolr, {
        alpha: Number(self.colorPressed),
      }),
    });

    if (border) {
      unref(instances)?.map((child, index) => {
        if (instance?.uid === child.uid) {
          const len = unref(instances)?.length;
          // 贴近右边屏幕边沿的child，并且最后一个（比如只有横向2个的时候），无需右边框
          if ((index + 1) % col !== 0 && index + 1 !== len) {
            style[ns.cssVarBlockName('border-right-width')] = self.borderRightWidth;
          } else {
            style[ns.cssVarBlockName('border-right-width')] = '0rpx';
          }
          // 总的宫格数量对列数取余的值
          // 如果取余后，值为0，则意味着要将最后一排的宫格，都不需要下边框
          const lessNum = len % col === 0 ? col : len % col;
          // 最下面的一排child，无需下边框
          if (index < len - lessNum) {
            style[ns.cssVarBlockName('border-bottom-width')] = self.borderBottomWidth;
          } else {
            style[ns.cssVarBlockName('border-bottom-width')] = '0rpx';
          }
        }
      });
    }

    return deepMerge(style, addStyle(props.customStyle));
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
