<script setup lang="ts">
  import { useNamespace } from '../../hooks/use-namespace';
  import { useTheme } from '../../hooks/use-theme';
  import { lineLight } from './styles';
  import { lineProps } from './line';
  import { computed } from 'vue';
  import { addUnit } from '../../shared';

  const props = defineProps(lineProps);

  const ns = useNamespace('line');

  const themeRef = useTheme('Line', lineLight, props);

  const mergeStyle = computed(() => {
    const { self } = themeRef.value;
    const style = ns.cssVarBlock({
      'border-color': props.color || self.borderColor,
      'border-width': self.borderWidth,
      'border-style': props.dashed ? 'dashed' : 'solid',
      width: addUnit(props.length) || self.length,
      transform: props.direction == 'row' ? 'scaleY(0.5)' : 'scaleX(0.5)',
    });

    return [style, props.customStyle];
  });
</script>
<template>
  <view :class="[ns.b(), customClass]" :style="mergeStyle"> </view>
</template>
<style lang="scss" scoped>
  @use './line.scss' as *;
</style>
