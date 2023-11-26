<template>
  <view
    class="a-grid-item"
    hover-class="a-grid-item--hover-class"
    :hover-stay-time="200"
    @tap="handleClick"
    :class="classesRef"
    :style="[itemStyle]"
  >
    <slot />
  </view>
</template>

<script setup lang="ts">
  /**
   * gridItem 提示
   * @description 宫格组件一般用于同时展示多个同类项目的场景，可以给宫格的项目设置徽标组件(badge)，或者图标等，也可以扩展为左右滑动的轮播形式。搭配u-grid使用
   * @tutorial https://www.uviewui.com/components/grid.html
   * @property {String | Number}	name		宫格的name ( 默认 null )
   * @property {String}			bgColor		宫格的背景颜色 （默认 'transparent' ）
   * @property {Object}			customStyle	自定义样式，对象形式
   * @event {Function} click 点击宫格触发
   * @example <u-grid-item></u-grid-item>
   */

  import { ref, computed, watch, unref } from 'vue';

  import { gridItemProps } from './props';
  import { addStyle, deepMerge } from '../../shared';
  import { useGridProviderContext } from '../a-grid/provider';

  const props = defineProps(gridItemProps);
  const emit = defineEmits<{
    click: [string];
  }>();

  const { col, border, click, items } = useGridProviderContext();

  const classesRef = ref<string[] | string>([]);

  const width = computed(() => {
    return 100 / Number(col) + '%';
  });

  watch(
    () => items.value,
    () => {
      gridItemClasses();
    },
  );

  const itemStyle = computed(() => {
    const style = {
      background: props.bgColor,
      width: width.value,
    };
    return deepMerge(style, addStyle(props.customStyle));
  });

  const gridItemClasses = async () => {
    if (border) {
      let classes: string[] | string = [];
      unref(items)?.map((child, index) => {
        if (this === child) {
          const len = unref(items)?.length;
          // 贴近右边屏幕边沿的child，并且最后一个（比如只有横向2个的时候），无需右边框
          if ((index + 1) % col !== 0 && index + 1 !== len) {
            (classes as string[]).push('u-border-right');
          }
          // 总的宫格数量对列数取余的值
          // 如果取余后，值为0，则意味着要将最后一排的宫格，都不需要下边框
          const lessNum = len % col === 0 ? col : len % col;
          // 最下面的一排child，无需下边框
          if (index < len - lessNum) {
            (classes as string[]).push('u-border-bottom');
          }
        }
      });
      // 支付宝，头条小程序无法动态绑定一个数组类名，否则解析出来的结果会带有","，而导致失效
      // #ifdef MP-ALIPAY || MP-TOUTIAO
      classes = classes.join(' ');
      // #endif
      classesRef.value = classes;
    }
  };

  function handleClick() {
    let name = props.name;
    // 如果没有设置name属性，历遍父组件的children数组，判断当前的元素是否和本实例this相等，找出当前组件的索引
    if (unref(items) && this.name === null) {
      name = unref(items)?.findIndex((child) => child === this);
    }
    // 调用父组件方法，发出事件
    click && click(name);
    emit('click', name);
  }
</script>

<style lang="scss" scoped>
  $u-grid-item-hover-class-opcatiy: 0.5 !default;
  $u-grid-item-margin-top: 1rpx !default;
  $u-grid-item-border-right-width: 0.5px !default;
  $u-grid-item-border-bottom-width: 0.5px !default;
  $u-grid-item-border-right-color: $u-border-color !default;
  $u-grid-item-border-bottom-color: $u-border-color !default;
  .a-grid-item {
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    /* #ifndef APP-NVUE */
    box-sizing: border-box;
    display: flex;
    /* #endif */

    /* #ifdef MP */
    position: relative;
    float: left;
    /* #endif */

    /* #ifdef MP-WEIXIN */
    margin-top: $u-grid-item-margin-top;
    /* #endif */

    &--hover-class {
      opacity: $u-grid-item-hover-class-opcatiy;
    }
  }
</style>
