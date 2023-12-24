<template>
  <view class="u-demo-block">
    <text class="u-demo-block__title">基本案例</text>
    <view class="u-demo-block__content">
      <view class="u-page__image-item">
        <a-image :showLoading="true" :src="src" width="80px" height="80px"></a-image>
      </view>
    </view>
  </view>
  <view class="u-demo-block">
    <text class="u-demo-block__title">自定义形状</text>
    <view class="u-demo-block__content">
      <view class="u-page__image-item">
        <a-image shape="circle" :src="src" width="80px" height="80px"></a-image>
      </view>
    </view>
  </view>
  <view class="u-demo-block">
    <text class="u-demo-block__title">自定义圆角</text>
    <view class="u-demo-block__content">
      <view class="u-page__image-item">
        <a-image :radius="20" :src="src" width="80px" height="80px"></a-image>
      </view>
    </view>
  </view>
  <view class="u-demo-block">
    <text class="u-demo-block__title">图片模式(widthFit)</text>
    <view class="u-demo-block__content">
      <view class="u-page__image-item">
        <a-image :src="src" width="80px" height="80px" mode="widthFit"></a-image>
      </view>
    </view>
  </view>
  <view class="u-demo-block">
    <text class="u-demo-block__title">自定义图片加载样式</text>
    <view class="u-demo-block__content">
      <view class="u-page__image-item">
        <a-image
          :src="src1"
          width="80px"
          height="80px"
          mode="widthFit"
          iconColor="#1060c9"
          bgColor="#fefefe"
          :iconSize="80"
          loadingIcon="star"
        >
        </a-image>
      </view>
    </view>
  </view>
  <view class="u-demo-block">
    <text class="u-demo-block__title">自定义图片加载插槽</text>
    <view class="u-demo-block__content">
      <view class="u-page__image-item">
        <a-image :src="src1" width="80px" height="80px" mode="widthFit">
          <template v-slot:loading>
            <a-loading></a-loading>
          </template>
        </a-image>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { onLoad } from '@dcloudio/uni-app';
  import AImage from '@/uni_modules/aurora-ui/components/a-image/a-image.vue';
  import ALoading from '@/uni_modules/aurora-ui/components/a-loading/a-loading.vue';

  const src = ref('https://cdn.uviewui.com/uview/album/1.jpg');
  const src1 = ref('');

  onLoad(() => {
    setTimeout(() => {
      src1.value = src.value;
    }, 300000);
  });
</script>

<style lang="scss"></style>
