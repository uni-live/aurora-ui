import { ref, nextTick } from 'vue';
import type { TransitionProps } from './props';
import { sleep } from 'shared/sleep';

export function useTransition(props: TransitionProps, emit) {
  const status = ref('');
  const inited = ref(false);
  const display = ref(false);
  const classes = ref('');
  const transitionEnded = ref(false);

  // 定义类名，通过给元素动态切换类名，赋予元素一定的css动画样式
  const getClassNames = (name) => ({
    enter: `u-${name}-enter u-${name}-enter-active`,
    'enter-to': `u-${name}-enter-to u-${name}-enter-active`,
    leave: `u-${name}-leave u-${name}-leave-active`,
    'leave-to': `u-${name}-leave-to u-${name}-leave-active`,
  });

  // vue版本的组件进场处理
  function handleEnter() {
    // 动画进入时的类名
    const classNames = getClassNames(props.mode);
    // 定义状态和发出动画进入前事件
    status.value = 'enter';
    emit('beforeEnter');
    inited.value = true;
    display.value = true;
    classes.value = classNames.enter;
    nextTick(async () => {
      // #ifdef H5
      await sleep(20);
      // #endif
      // 标识动画尚未结束
      emit('enter');
      transitionEnded.value = false;
      // 组件动画进入后触发的事件
      emit('afterEnter');
      // 赋予组件enter-to类名
      classes.value = classNames['enter-to'];
    });
  }

  // 动画离场处理
  function handleLeave() {
    // 如果不是展示状态，无需执行逻辑
    if (!display.value) return;
    const classNames = getClassNames(props.mode);
    // 标记离开状态和发出事件
    status.value = 'leave';
    emit('beforeLeave');
    // 获得类名
    classes.value = classNames.leave;

    nextTick(() => {
      // 动画正在离场的状态
      transitionEnded.value = false;
      emit('leave');
      // 组件执行动画，到了执行的执行时间后，执行一些额外处理
      setTimeout(onTransitionEnd, Number(props.duration));
      classes.value = classNames['leave-to'];
    });
  }

  // 完成过渡后触发
  function onTransitionEnd() {
    // 如果已经是结束的状态，无需再处理
    if (transitionEnded.value) return;
    transitionEnded.value = true;
    // 发出组件动画执行后的事件
    emit(status.value === 'leave' ? 'afterLeave' : 'afterEnter');
    if (!props.show && display.value) {
      display.value = false;
      inited.value = false;
    }
  }

  return {
    handleEnter,
    handleLeave,
    onTransitionEnd,
    status,
    inited,
    display,
    classes,
    transitionEnded,
  };
}
