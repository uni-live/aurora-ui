<script setup lang="ts">
  import ABadge from '@/uni_modules/aurora-ui/components/a-badge/a-badge.vue';
</script>
<template>
  <view class="u-page">
    <view class="u-demo-block">
      <text class="u-demo-block__title">直角边形状</text>
      <view class="u-demo-block__content">
        <view class="u-page__tag-item">
          <a-badge :value="1500" shape="horn"></a-badge>
        </view>
      </view>
    </view>
    <view class="u-demo-block">
      <text class="u-demo-block__title">徽标数显示方式</text>
      <view class="u-demo-block__content">
        <view class="u-page__tag-item">
          <a-badge :value="5132" numberType="ellipsis"></a-badge>
        </view>
        <view class="u-page__tag-item">
          <a-badge :value="1011" numberType="overflow"></a-badge>
        </view>
        <view class="u-page__tag-item">
          <a-badge :value="1500" numberType="limit"></a-badge>
        </view>

        <view class="u-page__tag-item">
          <a-badge :value="45187" numberType="limit"></a-badge>
        </view>
      </view>
    </view>
    <view class="u-demo-block">
      <text class="u-demo-block__title">显示圆点</text>
      <view class="u-demo-block__content">
        <view class="u-page__tag-item">
          <a-badge :value="1011" isDot> </a-badge>
        </view>
      </view>
    </view>
    <view class="u-demo-block">
      <text class="u-demo-block__title">自定义主题</text>
      <view class="u-demo-block__content">
        <view class="u-page__tag-item">
          <a-badge :value="9" type="error"> </a-badge>
        </view>
        <view class="u-page__tag-item">
          <a-badge :value="9" type="warning"> </a-badge>
        </view>
        <view class="u-page__tag-item">
          <a-badge :value="9" type="success"> </a-badge>
        </view>
        <view class="u-page__tag-item">
          <a-badge :value="9" type="primary"> </a-badge>
        </view>
        <view class="u-page__tag-item">
          <a-badge
            :value="9"
            bgColor="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
          >
          </a-badge>
        </view>
      </view>
    </view>
    <view class="u-demo-block">
      <text class="u-demo-block__title">尺寸</text>
      <view class="u-demo-block__content">
        <view class="u-page__tag-item">
          <a-badge :value="9" size="mini" type="error"> </a-badge>
        </view>
        <view class="u-page__tag-item">
          <a-badge :value="1532" size="small" type="warning"> </a-badge>
        </view>
        <view class="u-page__tag-item">
          <a-badge :value="12" size="medium" type="success"> </a-badge>
        </view>
        <view class="u-page__tag-item">
          <a-badge :value="999" size="large" type="primary"> </a-badge>
        </view>

        <view class="u-page__tag-item">
          <a-badge :value="9" size="mini" isDot type="error"> </a-badge>
        </view>
        <view class="u-page__tag-item">
          <a-badge :value="1532" size="small" isDot type="warning"> </a-badge>
        </view>
        <view class="u-page__tag-item">
          <a-badge :value="12" size="medium" isDot type="success"> </a-badge>
        </view>
        <view class="u-page__tag-item">
          <a-badge :value="999" size="large" isDot type="primary"> </a-badge>
        </view>
      </view>
    </view>
  </view>
</template>
<style lang="scss" scoped>
  .box {
    justify-content: space-between;
  }

  .u-page__tag-item {
    margin-right: 40px;
    margin-top: 10px;
  }

  .badge-box {
    width: 45px;
    height: 45px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    background-color: #e6e6e6;
  }

  .u-demo-block__content {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
</style>
