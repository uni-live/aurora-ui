<template>
  <a-transition mode="fade" :show="show" :duration="fade ? duration : 0">
    <view class="a-image" @tap="handleClick" :style="[wrapStyle, backgroundStyle]">
      <image
        v-if="!isError"
        :src="src"
        :mode="mode"
        @error="handleError"
        @load="handleLoad"
        :show-menu-by-longpress="showMenuByLongpress"
        :lazy-load="lazyLoad"
        class="a-image__image"
        :style="imageStyle"
      ></image>
      <view v-if="showLoading && loading" class="a-image__loading" :style="loadingStyle">
        <slot name="loading">
          <a-icon name="photo" :width="width" :height="height"></a-icon>
        </slot>
      </view>
      <view v-if="showError && isError && !loading" class="a-image__error" :style="errorStyle">
        <slot name="error">
          <a-icon name="error-circle" :width="width" :height="height"></a-icon>
        </slot>
      </view>
    </view>
  </a-transition>
</template>
<script lang="ts">
  export default {
    // #ifdef MP-WEIXIN
    options: {
      virtualHost: true,
    },
    // #endif
  };
</script>
<script lang="ts" setup>
  import { ref, onMounted, watch, computed, type CSSProperties } from 'vue';
  import { imageProps } from './props';
  import { addStyle, addUnit, deepMerge } from '../../shared';
  import { ATransition } from '../a-transition';

  const props = defineProps(imageProps);

  const emit = defineEmits<{
    click: [];
    error: [any];
    load: [string];
  }>();

  // 图片是否加载错误，如果是，则显示错误占位图
  const isError = ref(false);
  // 初始化组件时，默认为加载中状态
  const loading = ref(true);
  // 图片加载完成时，去掉背景颜色，因为如果是png图片，就会显示灰色的背景
  const backgroundStyle = ref({});
  // 用于fade模式的控制组件显示与否
  const show = ref(false);

  const imageStyle = computed<CSSProperties>(() => {
    return {
      borderRadius: props.shape == 'circle' ? '10000px' : addUnit(props.radius),
      width: addUnit(props.width),
      height: addUnit(props.height),
    };
  });

  const loadingStyle = computed<CSSProperties>(() => {
    return {
      borderRadius: props.shape == 'circle' ? '50%' : addUnit(props.radius),
      backgroundColor: props.bgColor,
      width: addUnit(props.width),
      height: addUnit(props.height),
    };
  });

  const errorStyle = computed<CSSProperties>(() => {
    return {
      borderRadius: props.shape == 'circle' ? '50%' : addUnit(props.radius),
      width: addUnit(props.width),
      height: addUnit(props.height),
    };
  });

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
    let style: CSSProperties = {};
    // 通过调用addUnit()方法，如果有单位，如百分比，px单位等，直接返回，如果是纯粹的数值，则加上rpx单位
    style.width = addUnit(props.width);
    style.height = addUnit(props.height);
    // 如果是显示圆形，设置一个很多的半径值即可
    style.borderRadius = props.shape == 'circle' ? '10000px' : addUnit(props.radius);
    // 如果设置圆角，必须要有hidden，否则可能圆角无效
    style.overflow = props.radius ? 'hidden' : 'visible';

    return deepMerge(style, addStyle(props.customStyle));
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

<style lang="scss" scoped>
  @import '../../design/shared.scss';

  .a-image {
    position: relative;
    transition: opacity 0.5s ease-in-out;

    &__image {
      width: 100%;
      height: 100%;
    }

    &__loading,
    &__error {
      position: absolute;
      top: 0rpx;
      left: 0rpx;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: getCssVar('bg-color');
      color: getCssVar('text-color', 'primary');
      font-size: 46rpx;
    }
  }
</style>
