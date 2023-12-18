<template>
  <view class="u-page">
    <view class="u-demo-block">
      <view class="u-demo-block__title">按钮类型</view>
      <view class="u-demo-block__content">
        <view class="u-page__button-item">
          <a-button size="large" type="primary">主要按钮</a-button>
        </view>
        <view class="u-page__button-item">
          <a-button size="large" type="info">信息按钮</a-button>
        </view>
        <view class="u-page__button-item">
          <a-button size="large" type="success">成功按钮</a-button>
        </view>
        <view class="u-page__button-item">
          <a-button size="large" type="error">危险按钮</a-button>
        </view>

        <view class="u-page__button-item">
          <a-button size="large" type="warning">警告按钮</a-button>
        </view>
      </view>
    </view>
    <view class="u-demo-block">
      <view class="u-demo-block__title">text按钮</view>
      <view class="u-demo-block__content">
        <view class="u-page__button-item">
          <a-button size="large" type="info" text>镂空按钮</a-button>
        </view>
        <view class="u-page__button-item">
          <a-button size="large" type="success" text>镂空按钮</a-button>
        </view>
        <view class="u-page__button-item">
          <a-button size="large" type="error" text>镂空按钮</a-button>
        </view>
        <view class="u-page__button-item">
          <a-button size="large" type="primary" text>镂空按钮</a-button>
        </view>
        <view class="u-page__button-item">
          <a-button size="large" type="warning" text>镂空按钮</a-button>
        </view>
      </view>
    </view>
    <view class="u-demo-block">
      <view class="u-demo-block__title">镂空按钮</view>
      <view class="u-demo-block__content">
        <view class="u-page__button-item">
          <a-button size="large" type="info" plain>镂空按钮</a-button>
        </view>
        <view class="u-page__button-item">
          <a-button size="large" type="success" plain>镂空按钮</a-button>
        </view>
        <view class="u-page__button-item">
          <a-button size="large" type="error" plain>镂空按钮</a-button>
        </view>
        <view class="u-page__button-item">
          <a-button size="large" type="primary" plain>镂空按钮</a-button>
        </view>
        <view class="u-page__button-item">
          <a-button size="large" type="warning" plain>镂空按钮</a-button>
        </view>
      </view>
    </view>

    <view class="u-demo-block">
      <view class="u-demo-block__title">禁用按钮</view>
      <view class="u-demo-block__content">
        <view class="u-page__button-item">
          <a-button disabled size="large" type="info">禁用按钮</a-button>
        </view>
        <view class="u-page__button-item">
          <a-button disabled size="large" type="success">禁用按钮</a-button>
        </view>
        <view class="u-page__button-item">
          <a-button disabled size="large" type="error">禁用按钮</a-button>
        </view>
        <view class="u-page__button-item">
          <a-button disabled size="large" type="primary">禁用按钮</a-button>
        </view>
        <view class="u-page__button-item">
          <a-button disabled size="large" type="warning">禁用按钮</a-button>
        </view>
        <view class="u-page__button-item">
          <a-button disabled size="large" type="warning" plain>禁用按钮</a-button>
        </view>
      </view>
    </view>

    <view class="u-demo-block">
      <view class="u-demo-block__title">加载中</view>
      <view class="u-demo-block__content">
        <view class="u-page__button-item">
          <a-button class="button-layout__item" size="large" loading type="warning" plain
            >加载中</a-button
          >
        </view>
        <view class="u-page__button-item">
          <a-button class="button-layout__item" size="large" loading type="warning"
            >加载中</a-button
          >
        </view>
      </view>
    </view>
    <view class="u-demo-block">
      <view class="u-demo-block__title">按钮图标&按钮形状</view>
      <view class="u-demo-block__content">
        <view class="u-page__button-item">
          <a-button size="large" plain type="warning" icon="map">按钮图标</a-button>
        </view>
        <view class="u-page__button-item">
          <a-button size="large" type="info" icon="map">按钮图标</a-button>
        </view>
      </view>
    </view>
    <view class="u-demo-block">
      <view class="u-demo-block__title">自定义颜色</view>
      <view class="u-demo-block__content">
        <view class="u-page__button-item">
          <a-button
            size="large"
            color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
            >渐变色按钮</a-button
          >
        </view>
        <view class="u-page__button-item">
          <a-button
            size="large"
            color="linear-gradient(to right, rgb(220, 194, 11), rgb(4, 151, 99))"
            >渐变色按钮</a-button
          >
        </view>
        <view class="u-page__button-item">
          <a-button size="large" color="rgba(10, 185, 156, 1)">青绿色按钮</a-button>
        </view>
        <view class="u-page__button-item">
          <a-button size="large" color="#626aef">自定义颜色按钮</a-button>
        </view>
        <view class="u-page__button-item">
          <a-button size="large" color="#626aef" plain>自定义颜色镂空按钮</a-button>
        </view>
      </view>
    </view>

    <view class="u-demo-block">
      <view class="u-demo-block__title">自定义大小</view>
      <view
        class="u-demo-block__content"
        style="
          padding-bottom: 15px;
          flex-direction: column;
          align-items: stretch;
          flex-wrap: nowrap;
        "
      >
        <a-button customStyle="width: 100%" size="large" type="success">超大尺寸</a-button>
      </view>
      <view class="u-demo-block__content">
        <view class="u-page__button-item">
          <a-button size="medium" type="error">普通尺寸</a-button>
        </view>
        <view class="u-page__button-item">
          <a-button size="small" type="primary">小型尺寸</a-button>
        </view>
        <view class="u-page__button-item">
          <a-button class="button-layout__item" size="mini" type="warning">超小尺寸</a-button>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
  import AButton from '@/uni_modules/aurora-ui/components/a-button/a-button.vue';
</script>

<style lang="scss">
  @use '@/uni_modules/aurora-ui/design/shared.scss' as *;

  .u-page {
    background-color: getCssVar('bg-color');
    padding: 20rpx 20rpx;
    &__button-item {
      margin: 0 0 15px 0;
    }
  }

  .u-demo-block__title {
    margin-bottom: 20rpx;
  }

  .u-demo-block__content {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
</style>
