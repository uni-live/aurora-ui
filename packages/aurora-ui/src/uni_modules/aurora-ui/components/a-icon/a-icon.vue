<template>
  <view :class="['a-icon', customClass]">
    <image class="a-icon__img" v-if="isImg" :src="name" :mode="mode" :style="imgStyle"></image>
    <text
      v-else
      class="a-icon__icon"
      :class="aClasses"
      :style="iconStyle"
      :hover-class="hoverClass"
      >{{ icon }}</text
    >
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
  import { computed, type CSSProperties } from 'vue';

  import { iconProps } from './props';
  import { addUnit, addStyle } from '../../shared';
  import icons from './icons';

  const props = defineProps(iconProps);

  const aClasses = computed(() => {
    let classes: any = [];
    if (props.customPrefix == 'aicon') {
      classes.push('a-iconfont');
    } else {
      classes.push(props.customPrefix);
    }
    // 主题色，通过类配置
    if (props.color) classes.push('a-icon__icon--' + props.color);
    // 阿里，头条，百度小程序通过数组绑定类名时，无法直接使用[a, b, c]的形式，否则无法识别
    // 故需将其拆成一个字符串的形式，通过空格隔开各个类名
    //#ifdef MP-ALIPAY || MP-TOUTIAO || MP-BAIDU
    classes = classes.join(' ');
    //#endif
    return classes;
  });

  const iconStyle = computed(() => {
    let style: CSSProperties = {
      fontSize: addUnit(props.size),
      lineHeight: addUnit(props.size),
      fontWeight: props.bold ? 'bold' : 'normal',
      color: props.color,
    };

    const customStyle = addStyle(props.customStyle);

    return [style, customStyle];
  });

  const isImg = computed(() => {
    return props.name.indexOf('/') !== -1;
  });

  const imgStyle = computed(() => {
    let style: CSSProperties = {};
    // 如果设置width和height属性，则优先使用，否则使用size属性
    style.width = props.width ? addUnit(props.width) : addUnit(props.size);
    style.height = props.height ? addUnit(props.height) : addUnit(props.size);

    const customStyle = addStyle(props.customStyle);
    return [style, addStyle(customStyle)];
  });

  // 通过图标名，查找对应的图标
  const icon = computed(() => {
    // 如果内置的图标中找不到对应的图标，就直接返回name值，因为用户可能传入的是unicode代码
    return icons[props.customPrefix + '-' + props.name] || props.name;
  });
</script>

<style lang="scss" scoped>
  @import '../../design/shared.scss';
  @import './iconfont.css';

  .a-icon {
    display: flex;
    align-items: center;

    &__icon {
      font-family: aicon-iconfont;
      position: relative;

      &--primary {
        color: getCssVar('color-primary');
      }

      &--success {
        color: getCssVar('color-success');
      }

      &--error {
        color: getCssVar('color-error');
      }

      &--warning {
        color: getCssVar('color-warning');
      }

      &--info {
        color: getCssVar('color-info');
      }
    }

    &__img {
      height: auto;
      will-change: transform;
    }
  }
</style>
