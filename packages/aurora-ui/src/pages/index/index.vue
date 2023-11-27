<script setup lang="ts">
  function handleClick() {
    uni.navigateTo({ url: '/pages/icon/icon' });
  }

  function handleClickGrid() {
    uni.navigateTo({ url: '/pages/grid/grid' });
  }
</script>

<template>
  <view class="content">
    <view @click="handleClick">图标</view>
    <view @click="handleClickGrid">网格</view>
  </view>
</template>

<style lang="scss">
  .content {
    height: 100px;
    width: 100px;
  }
</style>
