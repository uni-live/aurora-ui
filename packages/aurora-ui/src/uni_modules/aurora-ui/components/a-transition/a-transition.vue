<template>
  <view
    v-if="inited"
    class="a-transition"
    ref="a-transition"
    @tap="handleClick"
    :class="classes"
    :style="[mergeStyle]"
    @touchmove="noop"
  >
    <slot />
  </view>
</template>

<script lang="ts" setup>
  import { computed, watch } from 'vue';
  import { transitionProps } from './props';
  import { useTransition } from './useTransition';
  import { addStyle } from '../../shared';
  /**
   * transition  动画组件
   * @description
   * @tutorial
   * @property {String}			show			是否展示组件 （默认 false ）
   * @property {String}			mode			使用的动画模式 （默认 'fade' ）
   * @property {String | Number}	duration		动画的执行时间，单位ms （默认 '300' ）
   * @property {String}			timingFunction	使用的动画过渡函数 （默认 'ease-out' ）
   * @property {Object}			customStyle		自定义样式
   * @event {Function} before-enter	进入前触发
   * @event {Function} enter			进入中触发
   * @event {Function} after-enter	进入后触发
   * @event {Function} before-leave	离开前触发
   * @event {Function} leave			离开中触发
   * @event {Function} after-leave	离开后触发
   * @example
   */

  const emit = defineEmits<{
    beforeEnter: [];
    enter: [];
    afterEnter: [];
    beforeLeave: [];
    leave: [];
    afterLeave: [];
    click: [];
  }>();

  const props = defineProps(transitionProps);

  const { inited, classes, handleEnter, handleLeave } = useTransition(props, emit);

  const mergeStyle = computed(() => {
    return {
      transitionDuration: `${props.duration}ms`,
      transitionTimingFunction: props.timingFunction,
      ...addStyle(props.customStyle),
    };
  });

  watch(
    () => props.show,
    (newVal) => {
      newVal ? handleEnter() : handleLeave();
    },
    { immediate: true },
  );

  function handleClick() {
    emit('click');
  }

  function noop(e) {
    e && typeof e.stopPropagation === 'function' && e.stopPropagation();
  }
</script>

<style lang="scss" scoped>
  @import '../../design/shared.scss';
  @import './vue.ani-style.scss';

  .a-transition {
  }
</style>
