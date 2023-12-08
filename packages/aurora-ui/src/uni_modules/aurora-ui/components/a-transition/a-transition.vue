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
    name: 'a-transition',
    inheritAttrs: false,
    // #ifdef MP-WEIXIN
    options: {
      virtualHost: true,
    },
    // #endif
  };
</script>
<script lang="ts" setup>
  import { computed, watch } from 'vue';
  import { transitionProps, transitionEmits } from './transition';
  import { useTransition } from './useTransition';
  import { addStyle } from '../../shared';

  const props = defineProps(transitionProps);

  const emit = defineEmits(transitionEmits);

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
./transition
