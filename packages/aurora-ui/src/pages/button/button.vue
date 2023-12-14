<template>
  <view class="u-page">
    <view class="u-demo-block">
      <view class="u-demo-block__title">按钮类型</view>
      <view class="u-demo-block__content">
        <view class="u-page__button-item">
          <a-button text="主要按钮" size="large" type="primary"></a-button>
        </view>
        <view class="u-page__button-item">
          <a-button text="信息按钮" size="large" type="info" @click="handleClick"></a-button>
        </view>
        <view class="u-page__button-item">
          <a-button text="成功按钮" size="large" type="success"></a-button>
        </view>
        <view class="u-page__button-item">
          <a-button text="危险按钮" size="large" type="danger"></a-button>
        </view>

        <view class="u-page__button-item">
          <a-button text="警告按钮" size="large" type="warning"></a-button>
        </view>
      </view>
    </view>
    <view class="u-demo-block">
      <view class="u-demo-block__title">镂空按钮</view>
      <view class="u-demo-block__content">
        <view class="u-page__button-item">
          <a-button text="镂空按钮" size="large" type="info" plain></a-button>
        </view>
        <view class="u-page__button-item">
          <a-button text="镂空按钮" size="large" type="success" plain></a-button>
        </view>
        <view class="u-page__button-item">
          <a-button text="镂空按钮" size="large" type="danger" plain></a-button>
        </view>
        <view class="u-page__button-item">
          <a-button text="镂空按钮" size="large" type="primary" plain></a-button>
        </view>
        <view class="u-page__button-item">
          <a-button text="镂空按钮" size="large" type="warning" plain></a-button>
        </view>
      </view>
    </view>

    <view class="u-demo-block">
      <view class="u-demo-block__title">禁用按钮</view>
      <view class="u-demo-block__content">
        <view class="u-page__button-item">
          <a-button disabled text="禁用按钮" size="large" type="info"></a-button>
        </view>
        <view class="u-page__button-item">
          <a-button disabled text="禁用按钮" size="large" type="success"></a-button>
        </view>
        <view class="u-page__button-item">
          <a-button disabled text="禁用按钮" size="large" type="danger"></a-button>
        </view>
        <view class="u-page__button-item">
          <a-button disabled text="禁用按钮" size="large" type="primary"></a-button>
        </view>
        <view class="u-page__button-item">
          <a-button disabled text="禁用按钮" size="large" type="warning"></a-button>
        </view>
        <view class="u-page__button-item">
          <a-button disabled text="禁用按钮" size="large" type="warning" plain></a-button>
        </view>
      </view>
    </view>

    <view class="u-demo-block">
      <view class="u-demo-block__title">加载中</view>
      <view class="u-demo-block__content">
        <view class="u-page__button-item">
          <a-button loadingText="加载中" size="large" loadingMode="circle" type="success" plain
            >加载中</a-button
          >
        </view>
        <view class="u-page__button-item">
          <a-button
            class="button-layout__item"
            loadingText="加载中"
            size="large"
            loading
            plain
            type="danger"
            >加载中</a-button
          >
        </view>
      </view>
    </view>
    <view class="u-demo-block">
      <view class="u-demo-block__title">按钮图标&按钮形状</view>
      <view class="u-demo-block__content">
        <view class="u-page__button-item">
          <a-button text="按钮图标" size="large" icon="map" plain type="warning"></a-button>
        </view>
        <view class="u-page__button-item">
          <a-button text="按钮图标" size="large" icon="map" type="info"></a-button>
        </view>
      </view>
    </view>
    <view class="u-demo-block">
      <view class="u-demo-block__title">自定义颜色</view>
      <view class="u-demo-block__content">
        <view class="u-page__button-item">
          <a-button
            text="渐变色按钮"
            size="large"
            color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
            disabled
          ></a-button>
        </view>
        <view class="u-page__button-item">
          <a-button
            text="渐变色按钮"
            size="large"
            color="linear-gradient(to right, rgb(220, 194, 11), rgb(4, 151, 99))"
            disabled
          ></a-button>
        </view>
        <view class="u-page__button-item">
          <a-button text="青绿色按钮" size="large" color="rgba(10, 185, 156, 1)"></a-button>
        </view>
        <view class="u-page__button-item">
          <a-button text="自定义颜色按钮" size="large" color="#626aef"></a-button>
        </view>
        <view class="u-page__button-item">
          <a-button text="自定义颜色镂空按钮" size="large" color="#626aef" plain></a-button>
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
        <a-button text="超大尺寸" size="large" type="success"></a-button>
      </view>
      <view class="u-demo-block__content">
        <view class="u-page__button-item">
          <a-button text="普通尺寸" size="default" type="danger"></a-button>
        </view>
        <view class="u-page__button-item">
          <a-button text="小型尺寸" size="small" type="primary"></a-button>
        </view>
        <view class="u-page__button-item">
          <a-button
            class="button-layout__item"
            text="超小尺寸"
            size="mini"
            type="warning"
          ></a-button>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
  import AButton from '@/uni_modules/aurora-ui/components/a-button/a-button.vue';

  function handleClick() {
    console.log('click');
  }
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
