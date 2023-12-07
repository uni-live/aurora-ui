<template>
  <view :class="['a-navbar', customClass]" :style="addStyle(customStyle)">
    <view
      class="a-navbar__placeholder"
      v-if="fixed && placeholder"
      :style="placeholderStyle"
    ></view>
    <view :class="[fixed && 'a-navbar--fixed']">
      <a-status-bar v-if="safeAreaInsetTop" :bgColor="bgColor"></a-status-bar>
      <view
        class="a-navbar__content"
        :class="[border && 'a-border-bottom']"
        :style="{
          height: addUnit(height),
          backgroundColor: bgColor,
        }"
      >
        <view
          class="a-navbar__content__left"
          hover-class="a-navbar__content__left--hover"
          hover-start-time="150"
          @tap="leftClick"
        >
          <slot name="left">
            <a-icon
              v-if="leftIcon"
              :name="leftIcon"
              :size="leftIconSize"
              :color="leftIconColor"
            ></a-icon>
            <text
              v-if="leftText"
              :style="{
                color: leftIconColor,
              }"
              class="a-navbar__content__left__text"
              >{{ leftText }}</text
            >
          </slot>
        </view>
        <slot name="center">
          <text
            class="a-line-1 a-navbar__content__title"
            :style="[
              {
                width: addUnit(titleWidth),
              },
              addStyle(titleStyle),
            ]"
            >{{ title }}</text
          >
        </slot>
        <view
          class="a-navbar__content__right"
          v-if="$slots.right || rightIcon || rightText"
          @tap="rightClick"
        >
          <slot name="right">
            <a-icon v-if="rightIcon" :name="rightIcon" size="20"></a-icon>
            <text v-if="rightText" class="a-navbar__content__right__text">{{ rightText }}</text>
          </slot>
        </view>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
  export default {
    // #ifdef MP-WEIXIN
    // 将自定义节点设置成虚拟的，更加接近Vue组件的表现，能更好的使用flex属性
    options: {
      virtualHost: true,
    },
    // #endif
  };
</script>
<script setup lang="ts">
  import { navbarProps } from './props';
  import { addUnit, getPx, sys, addStyle } from '../../shared';
  import { computed, type CSSProperties } from 'vue';

  const props = defineProps(navbarProps);
  const emit = defineEmits<{
    leftClick: [];
    rightClick: [];
  }>();

  const placeholderStyle = computed<CSSProperties>(() => {
    return {
      height: addUnit((getPx(props.height) as number) + (sys().statusBarHeight as number), 'px'),
    };
  });

  function leftClick() {
    emit('leftClick');
    if (props.autoBack) {
      uni.navigateBack();
    }
  }

  function rightClick() {
    emit('rightClick');
  }
</script>

<style lang="scss" scoped>
  .a-navbar {
    &--fixed {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 11;
    }

    &__content {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 44px;
      background-color: getCssVar('color-primary');
      position: relative;
      justify-content: center;

      &__left,
      &__right {
        padding: 0 13px;
        position: absolute;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      &__left {
        left: 0;

        &--hover {
          opacity: 0.7;
        }

        &__text {
          font-size: 15px;
          margin-left: 3px;
        }
      }

      &__title {
        text-align: center;
        font-size: 16px;
        color: getCssVar('text-color', 'primary');
      }

      &__right {
        right: 0;

        &__text {
          font-size: 15px;
          margin-left: 3px;
        }
      }
    }
  }
</style>
