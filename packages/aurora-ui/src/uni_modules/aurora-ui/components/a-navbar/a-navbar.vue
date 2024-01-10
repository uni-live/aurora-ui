<script lang="ts">
  /**
   * navbar 自定义导航栏
   * @description 该组件一般用于在特殊情况下，需要自定义导航栏的时候用到，一般建议使用uni-app带的导航栏。
   * @tutorial https://xxx/components/navbar.html
   *
   * @property {String}	          customClass	            定义需要用到的外部calss样式
   * @property {Object | String}	customStyle	            定义需要用到的外部style样式
   * @property {Object}	          theme	                  自定义主题
   * @property {Object}	          themeOverrides	        主题变量
   * @property {Object}	          builtinThemeOverrides	  组件主题变量
   * @property {String | Number}	value		                显示的内容 (默认 '')
   * @property {String}	          size		                标签尺寸，large，medium，small，mini (默认 'medium')
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
    name: 'a-navbar',
    inheritAttrs: false,
    // #ifdef MP-WEIXIN
    options: {
      virtualHost: true,
    },
    // #endif
  };
</script>
<script setup lang="ts">
  import { navbarProps, navbarEmits } from './navbar';
  import { addUnit, getPx, sys, addStyle } from '../../shared';
  import { computed } from 'vue';
  import { useNamespace } from '../../hooks/use-namespace';
  import { useTheme } from '../../hooks/use-theme';
  import { navbarLight } from './styles';
  import AStatusBar from '../a-status-bar/a-status-bar.vue';

  const props = defineProps(navbarProps);
  const emit = defineEmits(navbarEmits);
  const ns = useNamespace('navbar');
  const themeRef = useTheme('Badge', navbarLight, props);

  const bgColor = computed(() => {
    const { self } = themeRef.value;
    return bgColor || self.bgColor;
  });

  const mergeClass = computed(() => {
    const { customClass } = props;
    return [ns.b(), customClass];
  });
  const mergeStyle = computed(() => {
    const { self } = themeRef.value;
    const { height } = self;

    const cssVars = ns.cssVarBlock({
      'placeholder-height': addUnit(
        (getPx(props.height) as number) + (sys().statusBarHeight as number),
        'px',
      ),
      'content-height': addUnit(props.height) || height,
      'bg-color': bgColor,
    });

    return [cssVars, addStyle(props.customStyle)];
  });

  function leftClick() {
    emit('leftClick');
    props.autoBack && uni.navigateBack();
  }

  function rightClick() {
    emit('rightClick');
  }
</script>

<template>
  <view :class="mergeClass" :style="mergeStyle">
    <view :class="[ns.e('placeholder')]" v-if="fixed && placeholder"></view>
    <view :class="[fixed && ns.m('fixed')]">
      <a-status-bar v-if="safeAreaInsetTop" :bgColor="bgColor"></a-status-bar>
      <view :class="[ns.e('content'), border && ns.m('border')]">
        <view
          :class="[ns.e('content__left')]"
          :hover-class="ns.em('content__left', 'hover')"
          hover-start-time="150"
          @tap="leftClick"
        >
          <slot name="left">
            <a-icon
              v-if="leftIcon"
              :name="leftIcon"
              :size="leftIconSize"
              :color="leftIconColor"
            ></a-icon>
            <text
              v-if="leftText"
              :style="{
                color: leftIconColor,
              }"
              :class="ns.e('content__left__text')"
              >{{ leftText }}</text
            >
          </slot>
        </view>
        <slot name="center">
          <text
            :class="[ns.e('content__title')]"
            :style="[
              {
                width: addUnit(titleWidth),
              },
              addStyle(titleStyle),
            ]"
            >{{ title }}</text
          >
        </slot>
        <view
          :class="[ns.e('content__right')]"
          v-if="$slots.right || rightIcon || rightText"
          @tap="rightClick"
        >
          <slot name="right">
            <a-icon v-if="rightIcon" :name="rightIcon" size="20"></a-icon>
            <text v-if="rightText" :class="ns.e('content__right__text')">{{ rightText }}</text>
          </slot>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
  @use './navbar.scss' as *;
</style>
