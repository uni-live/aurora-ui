<script lang="ts">
  export default {
    name: 'a-loading',
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
  import { loadingProps } from './loading';
  import { addStyle, addUnit } from '../../shared';
  import { TinyColor } from '@ctrl/tinycolor';
  import { useNamespace } from '../../hooks/use-namespace';

  const props = defineProps(loadingProps);

  const ns = useNamespace('loading');

  const mergeStyle = computed(() => {
    const color = new TinyColor(props.color);
    let otherBorderColor;
    const lightColor = darken(color, 90);
    if (props.mode === 'circle') {
      otherBorderColor = props.inactiveColor ? props.inactiveColor : lightColor;
    } else {
      otherBorderColor = 'transparent';
    }

    let style: CSSProperties = {
      color: props.color,
      width: addUnit(props.size),
      height: addUnit(props.size),
      borderBottomColor: otherBorderColor,
      borderLeftColor: otherBorderColor,
      borderRightColor: otherBorderColor,
      'animation-duration': `${props.duration}ms`,
      'animation-timing-function':
        props.mode === 'semicircle' || props.mode === 'circle' ? props.timingFunction : '',
    };

    if (props.color) {
      style['borderTopColor'] = props.color;
    }

    return {
      ...style,
      ...addStyle(props.customStyle),
    };
  });

  const mergeClass = computed(() => {
    return [ns.b(), ns.m(props.mode), props.customClass];
  });

  function darken(color: TinyColor, amount = 80) {
    return color.mix('#ffffff', amount).toString();
  }
</script>

<template>
  <view :class="mergeClass" :style="mergeStyle">
    <block v-if="mode === 'spinner'">
      <view v-for="index in 12" :key="index" :class="ns.e('dot')"> </view>
    </block>
  </view>
</template>

<style scoped lang="scss">
  @use './loading.scss' as *;
</style>
