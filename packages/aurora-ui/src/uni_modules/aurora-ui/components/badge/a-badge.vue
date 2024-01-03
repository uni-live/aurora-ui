<script lang="ts">
  /**
   * badge 徽标数
   * @description 该组件一般用于图标右上角显示未读的消息数量，提示用户点击，有圆点和圆包含文字两种形式。
   * @tutorial https://xxx/components/badge.html
   *
   * @property {String}	          customClass	            定义需要用到的外部calss样式
   * @property {Object | String}	customStyle	            定义需要用到的外部style样式
   * @property {Object}	          theme	                  自定义主题
   * @property {Object}	          themeOverrides	        主题变量
   * @property {Object}	          builtinThemeOverrides	  组件主题变量
   * @property {String | Number}	value		                显示的内容 (默认 '')
   * @property {Boolean}			    isDot		                是否显示圆点 (默认 false)
   * @property {String | Number}	max		                  最大值，超过最大值会显示 '{max}+' (默认 999)
   * @property {String}			      type	                  主题类型，error|warning|success|primary (默认 'error' )
   * @property {String}			      bgColor	                按钮颜色，支持传入linear-gradient渐变色
   * @property {String}	          color		                字体颜色
   * @property {String}			      shape		                徽标形状，circle-四角均为圆角，horn-左下角为直角 (默认 'circle' )
   * @property {String}			      numberType	            设置数字的显示方式，overflow|ellipsis|limit （默认 'overflow'）
   * @property {Array}	          offset		              设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效 (默认 [])
   * @property {Boolean}	        absolute		            是否绝对定位 （默认 false）
   *
   * @example <a-badge color="red"></a-badge>
   */
  export default {
    name: 'a-badge',
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
  import { badgeLight } from './styles';
  import { badgeProps } from './badge';
  import { computed } from 'vue';
  import { addStyle } from '../../shared';

  const props = defineProps(badgeProps);

  const ns = useNamespace('badge');

  const themeRef = useTheme('Badge', badgeLight, props);

  const mergeStyle = computed(() => {
    const { self } = themeRef.value;

    const style = ns.cssVarBlock({});

    return [style, addStyle(props.customStyle)];
  });

  const mergeClass = computed(() => {
    const dot = props.isDot ? ns.m('dot') : ns.m('not-dot');
    const shape = props.shape === 'horn' && ns.m('horn');

    return [ns.b(), dot, shape, props.customClass];
  });

  const showValue = computed(() => {
    switch (props.numberType) {
      case 'overflow':
        return Number(props.value) > Number(props.max) ? props.max + '+' : props.value;
      case 'ellipsis':
        return Number(props.value) > Number(props.max) ? '...' : props.value;
      case 'limit':
        return Number(props.value) > 999
          ? Number(props.value) >= 9999
            ? Math.floor((Number(props.value) / 1e4) * 100) / 100 + 'w'
            : Math.floor((Number(props.value) / 1e3) * 100) / 100 + 'k'
          : props.value;
      default:
        return Number(props.value);
    }
  });
</script>
<template>
  <text :class="mergeClass" :style="mergeStyle">{{ isDot ? '' : showValue }}</text>
</template>
<style lang="scss" scoped>
  @use './badge.scss' as *;
</style>
