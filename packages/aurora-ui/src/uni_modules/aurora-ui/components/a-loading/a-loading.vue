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
  import { computed } from 'vue';
  import { loadingProps } from './loading';
  import { addStyle, addUnit } from '../../shared';
  import { useNamespace } from '../../hooks/use-namespace';
  import { useTheme } from '../../hooks/use-theme';
  import loadingLight from './styles/light';
  import { changeColor } from 'seemly';

  const props = defineProps(loadingProps);

  const ns = useNamespace('loading');

  const themeRef = useTheme('Loading', loadingLight, props);

  const mergeStyle = computed(() => {
    const { self } = themeRef.value;

    const mergeColor = props.color || self.color;

    let borderColor;
    if (props.mode === 'circle') {
      const lightColor = changeColor(mergeColor, {
        alpha: Number(self.opacitySecondary),
      });
      borderColor = props.inactiveColor ? props.inactiveColor : lightColor;
    } else {
      borderColor = 'transparent';
    }

    const styleVars = ns.cssVarBlock({
      width: addUnit(props.size) || self.szie,
      height: addUnit(props.size) || self.szie,
      color: mergeColor,
      'inactive-color': borderColor,
      duration: `${props.duration || self.duration}ms`,
      function:
        props.mode === 'semicircle' || props.mode === 'circle'
          ? props.timingFunction || self.function
          : '',
      style: self.bordrStyle,
      'semicircle-width': self.semicircleWidth,
      'semicircle-radius': self.semicircleRadius,
      'circle-width': self.circleWidth,
      'circle-radius': self.circleRadius,
      'dot-top': self.dotTop,
      'dot-left': self.dotLeft,
      'dot-width': self.dotWidth,
      'dot-height': self.dotHeight,
      'dot-before-width': self.dotBeforeWidth,
      'dot-before-height': self.dotBeforeHeight,
      'dot-before-color': self.dotBeforeColor,
      'dot-before-radius': self.dotBeforeRadius,
      'dot-before-margin': self.dotBeforeMargin,
    });

    return {
      ...styleVars,
      ...addStyle(props.customStyle),
    };
  });

  const mergeClass = computed(() => {
    return [ns.b(), ns.m(props.mode), props.customClass];
  });

  const hasSpinner = computed(() => {
    return props.mode === 'spinner';
  });
</script>

<template>
  <view :class="mergeClass" :style="mergeStyle">
    <block v-if="hasSpinner">
      <view v-for="index in 12" :key="index" :class="ns.e('dot')"> </view>
    </block>
  </view>
</template>

<style scoped lang="scss">
  @use './loading.scss' as *;
</style>
