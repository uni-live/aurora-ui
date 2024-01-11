<script setup lang="ts">
  function rightClick() {
    console.log('rightClick');
  }
  function leftClick() {
    console.log('leftClick');
  }
</script>

<template>
  <view class="u-page">
    <a-navbar title="导航栏" safeAreaInsetTop fixed placeholder :autoBack="true"> </a-navbar>
    <view class="u-page__item">
      <text class="u-page__item__title">基础功能</text>
      <a-navbar
        title="个人中心"
        :safeAreaInsetTop="false"
        :fixed="false"
        @rightClick="rightClick"
        @leftClick="leftClick"
      >
      </a-navbar>
    </view>
    <view class="u-page__item">
      <text class="u-page__item__title">自定义文本</text>
      <a-navbar
        :safeAreaInsetTop="false"
        title="个人中心"
        :fixed="false"
        left-text="返回"
        rightIcon="map"
      >
      </a-navbar>
    </view>
    <view class="u-page__item">
      <text class="u-page__item__title">自定义插槽</text>
      <a-navbar leftText="返回" :fixed="false" title="个人中心" :safeAreaInsetTop="false">
        <template #left>
          <view class="u-nav-slot">
            <a-icon name="arrow-left" size="19px"></a-icon>
            <a-line
              customStyle="margin: 0 8px"
              direction="col"
              :hairline="false"
              length="16px"
            ></a-line>
            <a-icon name="home" size="20px"></a-icon>
          </view>
        </template>
      </a-navbar>
    </view>
  </view>
</template>

<style scoped lang="scss">
  page {
    background-color: #f7f7f7;
  }
  .u-page {
    padding: 0;
    flex: 1;
    background-color: #f7f7f7;

    &__item {
      &__title {
        padding: 15px;
        font-size: 15px;

        &__slot-title {
          font-size: 14px;
        }
      }
    }
  }

  .u-nav-slot {
    border-color: #dadbde;
    border-style: solid;
    border-width: 0.5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 100px;
    padding: 3px 7px;
    opacity: 0.8;
  }
</style>
