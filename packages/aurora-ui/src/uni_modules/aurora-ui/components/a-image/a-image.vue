<script lang="ts">
  export default {
    name: 'a-image',
    inheritAttrs: false,
    // #ifdef MP-WEIXIN
    options: {
      virtualHost: true,
    },
    // #endif
  };
</script>
<script lang="ts" setup>
  import { ref, onMounted, watch, computed } from 'vue';
  import { imageProps, imageEmits } from './image';
  import { addStyle, addUnit, deepMerge } from '../../shared';
  import { ATransition } from '../a-transition';
  import { useNamespace } from '../../hooks/use-namespace';
  import { useTheme } from '../../hooks/use-theme';
  import { imageLight } from './styles';
  import AIcon from '../a-icon/a-icon.vue';

  const props = defineProps(imageProps);

  const emit = defineEmits(imageEmits);
  const ns = useNamespace('image');
  const themeRef = useTheme('Image', imageLight, props);

  // 图片是否加载错误，如果是，则显示错误占位图
  const isError = ref(false);
  // 初始化组件时，默认为加载中状态
  const loading = ref(true);
  // 图片加载完成时，去掉背景颜色，因为如果是png图片，就会显示灰色的背景
  const backgroundStyle = ref({});
  // 用于fade模式的控制组件显示与否
  const show = ref(false);

  const hasError = computed(() => props.showError && isError && !loading);

  onMounted(() => {
    show.value = true;
  });

  watch(
    () => props.src,
    (n) => {
      if (!n) {
        // 如果传入null或者''，或者false，或者undefined，标记为错误状态
        isError.value = true;
      } else {
        isError.value = false;
        loading.value = true;
      }
    },
    {
      immediate: true,
    },
  );

  const wrapStyle = computed(() => {
    const { self } = themeRef.value;

    const style = ns.cssVarBlock({
      width: addUnit(props.width) || self.width,
      height: addUnit(props.height) || self.height,
      // 如果是显示圆形，设置一个很多的半径值即可
      'border-radius':
        props.shape == 'circle' ? '100%' : addUnit(props.radius) || self.borderRadius,
      // 如果设置圆角，必须要有hidden，否则可能圆角无效
      overflow: props.radius ? 'hidden' : 'visible',
      'bg-color': props.bgColor || self.bgColor,
    });

    return deepMerge(style, addStyle(props.customStyle));
  });

  const mergeIconColor = computed(() => {
    const { self } = themeRef.value;
    return props.iconColor || self.iconColor;
  });

  const mergeIconSize = computed(() => {
    const { self } = themeRef.value;
    return props.iconSize || self.iconSize;
  });

  function handleClick() {
    emit('click');
  }

  // 图片加载失败
  function handleError(err) {
    loading.value = false;
    isError.value = true;
    emit('error', err);
  }
  // 图片加载完成，标记loading结束
  function handleLoad(event) {
    loading.value = false;
    isError.value = false;
    emit('load', event);
    removeBgColor();
  }
  // 移除图片的背景色
  function removeBgColor() {
    // 淡入动画过渡完成后，将背景设置为透明色，否则png图片会看到灰色的背景
    backgroundStyle.value = {
      backgroundColor: 'transparent',
    };
  }
</script>
<template>
  <a-transition mode="fade" :show="show" :duration="fade ? duration : 0">
    <view :class="[ns.b()]" @tap="handleClick" :style="[wrapStyle, backgroundStyle]">
      <image
        v-if="!isError"
        :src="src"
        :mode="mode"
        @error="handleError"
        @load="handleLoad"
        :show-menu-by-longpress="showMenuByLongpress"
        :lazy-load="lazyLoad"
        :class="ns.e('image')"
      ></image>
      <view v-if="showLoading && loading" :class="ns.e('loading')">
        <slot name="loading">
          <AIcon :name="loadingIcon" :color="mergeIconColor" :size="mergeIconSize"></AIcon>
        </slot>
      </view>
      <view v-if="hasError" :class="ns.e('error')">
        <slot name="error">
          <a-icon :name="errorIcon" :color="mergeIconColor" :size="mergeIconSize"></a-icon>
        </slot>
      </view>
    </view>
  </a-transition>
</template>

<style lang="scss" scoped>
  @use './image.scss' as *;
</style>
