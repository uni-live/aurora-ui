<script lang="ts">
  /**
   * line 线条
   * @description 此组件一般用于显示一根线条，用于分隔内容块，有横向和竖向两种模式，且能设置0.5px线条，使用也很简单
   * @tutorial https://www.uviewui.com/components/line.html
   * @property {String}			      color		      线条的颜色 ( 默认 '#d6d7d9' )
   * @property {String | Number}	length		    长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带px单位的值等 ( 默认 '100%' )
   * @property {String}			      direction	    线条的方向，row-横向，col-竖向 (默认 'row' )
   * @property {Boolean}			    hairline	    是否显示细线条 (默认 true )
   * @property {String | Number}	margin		    线条与上下左右元素的间距，字符串形式，如"30px"  (默认 0 )
   * @property {Boolean}			    dashed		    是否虚线，true-虚线，false-实线 (默认 false )
   * @property {Object}			      customStyle	  定义需要用到的外部样式
   * @example <u-line color="red"></u-line>
   */
  export default {
    name: 'a-line',
    inheritAttrs: false,
    // #ifdef MP-WEIXIN
    options: {
      virtualHost: true,
    },
    // #endif
  };
</script>

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

  const mergeClass = computed(() => [ns.b(), ns.e(props.direction), props.customClass]);
</script>
<template>
  <view :class="mergeClass" :style="mergeStyle"> </view>
</template>
<style lang="scss" scoped>
  @use './line.scss' as *;
</style>
