<script setup lang="ts">
  import { iconList } from './data';

  function handleClipboard(name: string) {
    uni.setClipboardData({
      data: name,
      success: () => {},
    });
  }
</script>

<template>
  <a-grid :col="3" border>
    <a-grid-item
      v-for="(item, index) in iconList"
      :key="index"
      customStyle="height: 200rpx; padding: 20rpx"
      @click="handleClipboard(item.name)"
    >
      <a-icon :name="item.name" color="primary" :size="50" />
      <view class="grid-text">{{ item.name }}</view>
    </a-grid-item>
  </a-grid>
  <view> </view>
</template>
<style lang="scss" scoped>
  .grid-text {
    font-size: 14px;
    color: #909399;
    margin-top: 30rpx;
  }
</style>
