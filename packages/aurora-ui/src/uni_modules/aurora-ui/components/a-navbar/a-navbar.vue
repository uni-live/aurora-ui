<template>
  <view class="a-navbar">
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
            <u-icon v-if="rightIcon" :name="rightIcon" size="20"></u-icon>
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
  /**
   * Navbar 自定义导航栏
   * @description 此组件一般用于在特殊情况下，需要自定义导航栏的时候用到，一般建议使用uni-app带的导航栏。
   * @tutorial https://www.uviewui.com/components/navbar.html
   * @property {Boolean}			safeAreaInsetTop	是否开启顶部安全区适配  （默认 true ）
   * @property {Boolean}			placeholder			固定在顶部时，是否生成一个等高元素，以防止塌陷 （默认 false ）
   * @property {Boolean}			fixed				导航栏是否固定在顶部 （默认 false ）
   * @property {Boolean}			border				导航栏底部是否显示下边框 （默认 false ）
   * @property {String}			leftIcon			左边返回图标的名称，只能为uView自带的图标 （默认 'arrow-left' ）
   * @property {String}			leftText			左边的提示文字
   * @property {String}			rightText			右边的提示文字
   * @property {String}			rightIcon			右边返回图标的名称，只能为uView自带的图标
   * @property {String}			title				导航栏标题，如设置为空字符，将会隐藏标题占位区域
   * @property {String}			bgColor				导航栏背景设置 （默认 '#ffffff' ）
   * @property {String | Number}	titleWidth			导航栏标题的最大宽度，内容超出会以省略号隐藏 （默认 '400rpx' ）
   * @property {String | Number}	height				导航栏高度(不包括状态栏高度在内，内部自动加上)（默认 '44px' ）
   * @property {String | Number}	leftIconSize		左侧返回图标的大小（默认 20px ）
   * @property {String | Number}	leftIconColor		左侧返回图标的颜色（默认 #303133 ）
   * @property {Boolean}	        autoBack			点击左侧区域(返回图标)，是否自动返回上一页（默认 false ）
   * @property {Object | String}	titleStyle			标题的样式，对象或字符串
   * @event {Function} leftClick		点击左侧区域
   * @event {Function} rightClick		点击右侧区域
   * @example <u-navbar title="剑未配妥，出门已是江湖" left-text="返回" right-text="帮助" @click-left="onClickBack" @click-right="onClickRight"></u-navbar>
   */

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
    // 如果配置了autoBack，自动返回上一页
    emit('leftClick');
    if (props.autoBack) {
      uni.navigateBack();
    }
  }
  // 点击右侧区域
  function rightClick() {
    emit('rightClick');
  }
  // export default {
  //   name: 'u-navbar',
  //   mixins: [uni.$u.mpMixin, uni.$u.mixin, props],
  //   data() {
  //     return {};
  //   },
  //   methods: {
  //     // 点击左侧区域

  //   },
  // };
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
      background-color: #9acafc;
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
        color: $u-main-color;
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
