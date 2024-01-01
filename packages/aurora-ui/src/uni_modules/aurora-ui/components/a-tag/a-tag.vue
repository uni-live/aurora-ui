<script lang="ts">
  /**
   * tag 按钮
   * @description Tag 标签
   * @tutorial https://xxx/tag.html
   *
   * @property {Object}	            theme	                  自定义主题
   * @property {Object}	            themeOverrides	        主题变量
   * @property {Object}	            builtinThemeOverrides	  组件主题变量
   * @property {String}	            customClass	            定义需要用到的外部calss样式
   * @property {Object | String}	  customStyle	            定义需要用到的外部style样式
   * @property {String}	            iconCustomClass	        定义图标需要用到的外部calss样式
   * @property {Object | String}	  iconCustomStyle	        定义图表需要用到的外部style样式
   * @property {String}	            closeIconCustomClass	  定义关闭图标需要用到的外部calss样式
   * @property {Object | String}	  closeIconCustomStyle	  定义关闭图标需要用到的外部style样式
   * @property {String}			        color					          标签自定义颜色，支持传入linear-gradient渐变色 (默认 '' )
   * @property {String}			        type					          标签的预置样式，info，primary，danger，warning，success (默认 'primary' )
   * @property {String}			        size					          标签尺寸，large，medium，small，mini（默认 'medium'）
   * @property {Boolean}			      plain					          标签是否镂空，背景色透明 （默认 false）
   * @property {Boolean}			      text					          标签是否文本类型，背景色透明 （默认 false）
   * @property {String}	            icon				            图标（默认 ''）
   * @property {String}	            iconColor				        图标颜色（默认 ''）
   * @property {String | Number}		iconSize				        图标大小（默认 'medium' ）
   * @property {Boolean}			      closable					      标签是否可关闭（默认 false）
   * @property {String}	            closeIcon				        关闭图标（默认 false）
   * @property {String | Number}		closeIconSize				    关闭图标大小（默认 'medium' ）
   * @property {String | Number}	  hoverStartTime			    按住后多久出现点击态，单位毫秒 （默认 0 )
   * @property {String | Number}	  hoverStayTime			      手指松开后点击态保留时间，单位毫秒 （默认 200 )
   * @property {String | Number}	  round					          圆角大小
   *
   * @event {Function}	close			非禁止并且非加载中，才能点击
   * @example <u-tag>月落</u-tag>
   */
  export default {
    name: 'a-tag',
    inheritAttrs: false,
    // #ifdef MP-WEIXIN
    options: {
      virtualHost: true,
    },
    // #endif
  };
</script>

<script setup lang="ts">
  import { tagEmits, tagProps } from './tag';
  import { computed, useSlots, type CSSProperties } from 'vue';
  import { addStyle, addUnit, createKey, createPressedColor, merge } from '../../shared';
  import { useNamespace, useTheme } from '../../hooks';
  import { tagLight } from './styles';
  import { changeColor } from 'seemly';
  import { isLinearGradient, isRound } from './utils';
  import AIcon from '../../components/a-icon/a-icon.vue';

  const props = defineProps(tagProps);
  const emit = defineEmits(tagEmits);
  const slots = useSlots();

  const ns = useNamespace('tag');

  const themeRef = useTheme('Tag', tagLight, props);

  const cssVarsRef = computed(() => {
    const theme = themeRef.value;
    const { self } = theme;

    const { text, type, color, plain, size, round } = props;

    const isLinear = isLinearGradient(color);

    let colorProps = ns.cssVarBlock({
      color: 'initial',
      'color-pressed': 'initial',
      'text-color': 'initial',
      'text-color-pressed': 'initial',
    });

    if (text && !isLinear) {
      const typeTextColor = self[createKey('color', type)];
      const mergedTextColor = color || typeTextColor;
      colorProps = ns.cssVarBlock({
        color: changeColor(mergedTextColor, {
          alpha: Number(self.colorOpacitySecondary),
        }),
        'color-pressed': changeColor(mergedTextColor, {
          alpha: Number(self.colorOpacitySecondaryPressed),
        }),
        'text-color': mergedTextColor,
        'text-color-pressed': mergedTextColor,
      });
    } else if (plain && !isLinear) {
      colorProps = ns.cssVarBlock({
        color: '#0000',
        'color-pressed': '#0000',
        'text-color': color || self[createKey('textColorGhost', type)],
        'text-color-pressed': color
          ? createPressedColor(color)
          : self[createKey('textColorGhostPressed', type)],
      });
    } else {
      colorProps = ns.cssVarBlock({
        color: color || self[createKey('color', type)],
        'color-pressed': color
          ? isLinear
            ? 'initial'
            : createPressedColor(color)
          : self[createKey('colorPressed', type)],
        'text-color': color ? self.textColorPrimary : self[createKey('textColor', type)],
        'text-color-pressed': color
          ? self.textColorPressedPrimary
          : self[createKey('textColorPressed', type)],
      });
    }

    // border
    let borderCssVar = ns.cssVarBlock({
      border: 'initial',
      'border-pressed': 'initial',
    });

    if (text || isLinear) {
      borderCssVar = ns.cssVarBlock({
        border: 'none',
        'border-pressed': 'none',
      });
    } else {
      const borderColor = color || self[createKey('borderColor', type)];
      const borderPressed = color
        ? createPressedColor(color)
        : self[createKey('borderColorPressed', type)];

      borderCssVar = ns.cssVarBlock({
        border: `${self[createKey('borderWidth', type)]} ${
          self[createKey('borderStyle', type)]
        } ${borderColor}`,
        'border-pressed': `${self[createKey('borderWidthPressed', type)]} ${
          self[createKey('borderStylePressed', type)]
        } ${borderPressed}`,
      });
    }

    // size
    const {
      [createKey('height', size)]: height,
      [createKey('fontSize', size)]: fontSize,
      [createKey('padding', size)]: padding,
      [createKey('paddingRound', size)]: paddingRound,
      [createKey('borderRadius', size)]: borderRadius,
    } = self as any;

    const sizeCssVar = ns.cssVarBlock({
      width: 'initial',
      height: height,
      padding: isRound(round) ? paddingRound : padding,
      'font-size': fontSize,
      'border-radius': isRound(round) ? addUnit(round) : borderRadius,
    });
    return {
      ...colorProps,
      ...borderCssVar,
      ...sizeCssVar,
    };
  });

  const mergeClass = computed(() => {
    const isLinear = isLinearGradient(props.color);
    const classes = [
      ns.b(),
      ns.m(props.type),
      ns.m(props.size),
      ns.is('closable', props.closable),
      ns.is('plain', props.plain),
      ns.is('linear', isLinear),
    ];

    return [ns.b(), ...classes, props.customClass];
  });

  const mergeCloseIconClass = computed(() => {
    return props.closeIconCustomClass;
  });

  const mergeCloseIconStyle = computed(() => {
    const { size } = props;
    const { self } = themeRef.value;

    const { [createKey('iconMargin', size)]: iconMargin } = self as any;

    const style: CSSProperties = {
      marginLeft: iconMargin,
    };

    return merge(style, addStyle(props.closeIconCustomStyle));
  });

  const closeIconColor = computed(() => {
    const { color, type } = props;
    const { self } = themeRef.value;
    return props.plain
      ? color || self[createKey('textColorGhost', type)]
      : color
      ? self.textColorPrimary
      : self[createKey('textColor', type)];
  });

  const mergeCloseIconSize = computed(() => {
    const { self } = themeRef.value;
    const { closeIconSize, size } = props;

    const { [createKey('closeIconSize', size)]: themeIconSize } = self;

    return closeIconSize || themeIconSize;
  });

  const mergeIconClass = computed(() => {
    return props.iconCustomClass;
  });

  const mergeIconStyle = computed(() => {
    const { size } = props;
    const { self } = themeRef.value;

    const { [createKey('iconMargin', size)]: iconMargin } = self as any;

    const style: CSSProperties = {
      marginRight: iconMargin,
    };
    return merge(style, addStyle(props.iconCustomStyle));
  });

  const mergeIconColor = computed(() => {
    return props.iconColor || 'inherit';
  });

  const mergeIconSize = computed(() => {
    const { self } = themeRef.value;
    const { iconSize, size } = props;

    const { [createKey('iconSize', size)]: themeIconSize } = self as any;

    return iconSize || themeIconSize;
  });

  const hasIcon = computed(() => {
    return props.icon || slots?.icon;
  });

  const hasClose = computed(() => {
    return props.closable && (slots?.close || props.closeIcon);
  });

  function handleClick() {
    emit('close');
  }
</script>

<template>
  <view
    :class="mergeClass"
    :style="[cssVarsRef, addStyle(customStyle)]"
    :hover-start-time="hoverStartTime"
    :hover-stay-time="hoverStayTime"
    @tap="handleClick"
  >
    <slot name="icon" v-if="hasIcon">
      <a-icon
        :custom-class="mergeIconClass"
        :custom-style="mergeIconStyle"
        :name="icon"
        :color="mergeIconColor"
        :size="mergeIconSize"
      ></a-icon>
    </slot>
    <slot>
      <text>{{ text }}</text>
    </slot>

    <slot name="close" v-if="hasClose">
      <a-icon
        :custom-class="mergeCloseIconClass"
        :custom-style="mergeCloseIconStyle"
        :name="closeIcon"
        :color="closeIconColor"
        :size="mergeCloseIconSize"
      ></a-icon>
    </slot>
  </view>
</template>
<style scoped lang="scss">
  @use './tag.scss' as *;
</style>
