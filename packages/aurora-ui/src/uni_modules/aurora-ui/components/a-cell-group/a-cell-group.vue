<script lang="ts">
  /**
   * cellGroup  单元格
   * @description cell单元格一般用于一组列表的情况，比如个人中心页，设置页等。
   * @tutorial
   *
   * @property {String}	            customClass	            定义需要用到的外部calss样式
   * @property {Object | String}	  customStyle	            定义需要用到的外部style样式
   * @property {Object}	            theme	                  自定义主题
   * @property {Object}	            themeOverrides	        主题变量
   * @property {Object}	            builtinThemeOverrides	  组件主题变量
   * @property {String}	            title		                分组标题
   * @property {Boolean}	          border		              是否显示外边框 (默认 true )
   *
   * @event
   * @example <a-cell-group title="设置喜好" />
   */
  export default {
    name: 'a-cell-group',
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
  import { cellGroupProps } from './cell-group';
  import { addStyle } from '../../shared';
  import { useTheme } from '../../hooks/use-theme';
  import { cellGroupLight } from './styles';
  import { useNamespace } from '../../hooks/use-namespace';
  import ALine from '../a-line/a-line.vue';

  const props = defineProps(cellGroupProps);
  const ns = useNamespace('cell-group');
  const themeRef = useTheme('CellGroup', cellGroupLight, props);

  const mergeStyle = computed(() => {
    const { self } = themeRef.value;
    const style = ns.cssVarBlock({
      padding: self.padding,
      'font-size': self.fontSize,
      'line-height': self.lineHeight,
      color: self.textColor,
    });

    return [style, addStyle(props.customStyle)];
  });

  const mergeClass = computed(() => {
    return [ns.b(), props.customClass];
  });
</script>

<template>
  <view :class="mergeClass" :style="mergeStyle">
    <view v-if="title" :class="[ns.e('title')]">
      <slot name="title">
        <text :class="[ns.e('title__text')]">{{ title }}</text>
      </slot>
    </view>
    <view :class="[ns.e('wrapper')]">
      <a-line v-if="border"></a-line>
      <slot />
    </view>
  </view>
</template>

<style lang="scss" scoped>
  @use './cell-group.scss' as *;
</style>
