<script setup lang="ts">
  import AGrid from '@/uni_modules/aurora-ui/components/a-grid/a-grid.vue';
</script>

<template>
  <a-grid :col="4" border>
    <a-grid-item customStyle="padding-top: 10px; padding-bottom: 10px">
      <a-icon name="photo" :size="46"></a-icon>
      <view class="grid-text">图片</view>
    </a-grid-item>
    <a-grid-item customStyle="padding-top: 10px; padding-bottom: 10px">
      <a-icon name="lock" :size="46"></a-icon>
      <view class="grid-text">锁头</view>
    </a-grid-item>
    <a-grid-item customStyle="padding-top: 10px; padding-bottom: 10px">
      <a-icon name="hourglass" :size="46"></a-icon>
      <view class="grid-text">沙漏</view>
    </a-grid-item>
    <a-grid-item customStyle="padding-top: 10px; padding-bottom: 10px">
      <a-icon name="lock" :size="46"></a-icon>
      <view class="grid-text">锁头</view>
    </a-grid-item>
    <a-grid-item customStyle="padding-top: 10px; padding-bottom: 10px">
      <a-icon name="hourglass" :size="46"></a-icon>
      <view class="grid-text">沙漏</view>
    </a-grid-item>
    <a-grid-item customStyle="padding-top: 10px; padding-bottom: 10px">
      <a-icon name="lock" :size="46"></a-icon>
      <view class="grid-text">锁头</view>
    </a-grid-item>
    <a-grid-item customStyle="padding-top: 10px; padding-bottom: 10px">
      <a-icon name="hourglass" :size="46"></a-icon>
      <view class="grid-text">沙漏</view>
    </a-grid-item>
    <a-grid-item customStyle="padding-top: 10px; padding-bottom: 10px">
      <a-icon name="hourglass" :size="46"></a-icon>
      <view class="grid-text">沙漏</view>
    </a-grid-item>
  </a-grid>
</template>
<style scoped lang="scss">
  .grid-text {
    font-size: 14px;
    color: #909399;
  }
</style>
