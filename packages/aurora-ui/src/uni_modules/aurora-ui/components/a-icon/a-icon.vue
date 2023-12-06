<template>
  <view ref="qqq" :class="['a-icon', customClass]">
    <image class="a-icon__img" v-if="isImg" :src="name" :mode="imgMode" :style="imgStyle"></image>
    <text
      v-else
      class="a-icon__icon"
      :class="uClasses"
      :style="iconStyle"
      :hover-class="hoverClass"
      >{{ icon }}</text
    >
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

<script lang="ts" setup>
  import { computed, type CSSProperties } from 'vue';

  import { iconProps } from './props';
  import { addUnit, addStyle } from '../../shared';

  import icons from './icons';

  /**
   * icon 图标
   * @description 基于字体的图标集，包含了大多数常见场景的图标。
   * @tutorial https://www.uviewui.com/components/icon.html
   * @property {String}			name			图标名称，见示例图标集
   * @property {String}			color			图标颜色,可接受主题色 （默认 color['u-content-color'] ）
   * @property {String | Number}	size			图标字体大小，单位px （默认 '16px' ）
   * @property {Boolean}			bold			是否显示粗体 （默认 false ）
   * @property {String}			hoverClass		图标按下去的样式类，用法同uni的view组件的hoverClass参数，详情见官网
   * @property {String}			customPrefix	自定义扩展前缀，方便用户扩展自己的图标库 （默认 'aicon' ）
   * @property {String}			imgMode			图片的mode
   * @property {String | Number}	width			显示图片小图标时的宽度
   * @property {String | Number}	height			显示图片小图标时的高度
   * @property {Object}			customStyle		icon的样式，对象形式
   * @example <a-icon name="photo" color="#2979ff" size="28"></a-icon>
   */

  const props = defineProps(iconProps);

  const uClasses = computed(() => {
    let classes: any = [];
    // // uView的自定义图标类名为u-iconfont
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
    return icons['aicon-' + props.name] || props.name;
  });
</script>

<style lang="scss" scoped>
  @import '../../design/shared.scss';
  @import '../../iconfont.css';

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
