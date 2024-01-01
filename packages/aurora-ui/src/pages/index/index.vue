<script setup lang="ts">
  function handleClickGrid() {
    uni.navigateTo({ url: '/pages/grid/grid' });
  }

  function handleClickImage() {
    uni.navigateTo({ url: '/pages/image/image' });
  }

  function handleClickButton() {
    uni.navigateTo({ url: '/pages/button/button' });
  }

  function handleClick(c: string) {
    uni.navigateTo({ url: `/pages/${c}/${c}` });
  }
</script>

<template>
  <view class="content">
    <view @click="handleClick('icon')">图标</view>
    <view @click="handleClickGrid">网格</view>
    <view @click="handleClickImage">图片</view>
    <view @click="handleClickButton">按钮</view>
    <view @click="handleClick('loading')">加载动画</view>
    <view @click="handleClick('cell')">cell</view>
  </view>
</template>

<style lang="scss">
  .content {
    height: 100px;
    width: 100px;
  }
</style>
