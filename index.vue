<script setup lang="ts">
  function handleClick() {
    uni.navigateTo({ url: '/pages/icon/icon' })
  }
</script>

<template>
  <view class="content">
    <view @click="handleClick">图标</view>
  </view>
</template>

<style lang="scss">
  .content {
    height: 100px;
    width: 100px;
  }
</style>
