<template>
  <view class="u-page">
    <view class="u-demo-block">
      <text class="u-demo-block__title">基本案列</text>
      <view class="u-demo-block__content">
        <view class="u-page__loading-item">
          <a-loading></a-loading>
        </view>
      </view>
    </view>
    <view class="u-demo-block">
      <text class="u-demo-block__title">半圆loading</text>
      <view class="u-demo-block__content">
        <view class="u-page__loading-item">
          <a-loading mode="semicircle"></a-loading>
        </view>
      </view>
    </view>
    <view class="u-demo-block">
      <text class="u-demo-block__title">圆形loading</text>
      <view class="u-demo-block__content">
        <view class="u-page__loading-item">
          <a-loading mode="circle"></a-loading>
        </view>
      </view>
    </view>
    <view class="u-demo-block">
      <text class="u-demo-block__title">自定义动画</text>
      <view class="u-demo-block__content">
        <view class="u-page__loading-item">
          <a-loading mode="circle" timingFunction="linear"></a-loading>
        </view>
      </view>
    </view>
    <view class="u-demo-block">
      <text class="u-demo-block__title">自定义颜色</text>
      <view class="u-demo-block__content">
        <view class="u-page__loading-item">
          <a-loading color="#19be6b"></a-loading>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup></script>

<style lang="scss">
  .u-page {
    &__loading-item {
      margin-top: 5px;
    }
  }

  .u-demo-block__content {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
</style>
