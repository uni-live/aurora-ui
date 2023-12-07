<template>
  <view
    v-if="inited"
    :class="['a-transition', classes, customClass]"
    ref="a-transition"
    @tap="handleClick"
    :style="[mergeStyle]"
    @touchmove="noop"
  >
    <slot />
  </view>
</template>
<script lang="ts">
  export default {
    // #ifdef MP-WEIXIN
    options: {
      virtualHost: true,
    },
    // #endif
  };
</script>
<script lang="ts" setup>
  import { computed, watch } from 'vue';
  import { transitionProps } from './props';
  import { useTransition } from './useTransition';
  import { addStyle } from '../../shared';

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
