<script setup lang="ts"></script>
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
          <a-badge :value="1011" numberType="overflow" isDot> </a-badge>
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
      </view>
    </view>
    <view class="u-demo-block">
      <text class="u-demo-block__title">反转色</text>
      <view class="u-demo-block__content">
        <view class="u-page__tag-item">
          <a-badge :value="9" type="error" inverted> </a-badge>
        </view>
        <view class="u-page__tag-item">
          <a-badge :value="1532" inverted type="warning"> </a-badge>
        </view>
        <view class="u-page__tag-item">
          <a-badge :value="12" inverted type="success"> </a-badge>
        </view>
        <view class="u-page__tag-item">
          <a-badge :value="999" inverted type="primary"> </a-badge>
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
