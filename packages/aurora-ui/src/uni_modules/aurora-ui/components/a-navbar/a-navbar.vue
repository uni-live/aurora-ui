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
    name: 'a-navbar',
    inheritAttrs: false,
    // #ifdef MP-WEIXIN
    options: {
      virtualHost: true,
    },
    // #endif
  };
</script>
<script setup lang="ts">
  import { navbarProps, navbarEmits } from './navbar';
  import { addUnit, getPx, sys, addStyle } from '../../shared';
  import { computed, type CSSProperties } from 'vue';
  import { AStatusBar } from '../a-status-bar';

  const props = defineProps(navbarProps);

  const emit = defineEmits(navbarEmits);

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

<style lang="scss" scoped></style>
./navbar
