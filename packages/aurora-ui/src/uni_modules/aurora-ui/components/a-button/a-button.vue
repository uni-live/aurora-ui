<script lang="ts">
  export default {
    name: 'a-button',
    inheritAttrs: false,
    // #ifdef MP-WEIXIN
    options: {
      virtualHost: true,
    },
    // #endif
  };
</script>

<script setup lang="ts">
  import { buttonEmits, buttonProps } from './button';
  import { computed, type CSSProperties } from 'vue';
  import { addStyle, addUnit, createKey, createPressedColor, merge } from '../../shared';
  import { useNamespace, useTheme } from '../../hooks';
  import AIcon from '../a-icon/a-icon.vue';
  import ALoading from '../a-loading/a-loading.vue';
  import { buttonLight } from './styles';
  import { changeColor } from 'seemly';
  import { isLinearGradient, isRound } from './utils';

  const props = defineProps(buttonProps);

  const emit = defineEmits(buttonEmits);

  const ns = useNamespace('button');

  const themeRef = useTheme('Button', buttonLight, props);

  const cssVarsRef = computed(() => {
    const theme = themeRef.value;
    const { self } = theme;

    const { text, type, color, plain, size, round } = props;

    const isLinear = isLinearGradient(color);

    let colorProps = ns.cssVarBlock({
      color: 'initial',
      'color-pressed': 'initial',
      'color-disabled': 'initial',
      'text-color': 'initial',
      'text-color-pressed': 'initial',
      'text-color-disabled': 'initial',
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
        'color-disabled': self.colorSecondary,
        'text-color': mergedTextColor,
        'text-color-pressed': mergedTextColor,
        'text-color-disabled': mergedTextColor,
      });
    } else if (plain && !isLinear) {
      colorProps = ns.cssVarBlock({
        color: '#0000',
        'color-pressed': '#0000',
        'color-disabled': '#0000',
        'text-color': color || self[createKey('textColorGhost', type)],
        'text-color-pressed': color
          ? createPressedColor(color)
          : self[createKey('textColorGhostPressed', type)],
        'text-color-disabled': color || self[createKey('textColorGhostDisabled', type)],
      });
    } else {
      colorProps = ns.cssVarBlock({
        color: color || self[createKey('color', type)],
        'color-pressed': color
          ? isLinear
            ? 'initial'
            : createPressedColor(color)
          : self[createKey('colorPressed', type)],
        'color-disabled': color
          ? isLinear
            ? 'initial'
            : color
          : self[createKey('colorDisabled', type)],
        'text-color': color ? self.textColorPrimary : self[createKey('textColor', type)],
        'text-color-pressed': color
          ? self.textColorPressedPrimary
          : self[createKey('textColorPressed', type)],
        'text-color-disabled': color
          ? self.textColorDisabledPrimary
          : self[createKey('textColorDisabled', type)],
      });
    }

    // border
    let borderCssVar = ns.cssVarBlock({
      border: 'initial',
      'border-pressed': 'initial',
      'border-disabled': 'initial',
    });

    if (text || isLinear) {
      borderCssVar = ns.cssVarBlock({
        border: 'none',
        'border-pressed': 'none',
        'border-disabled': 'none',
      });
    } else {
      const borderColor = color || self[createKey('borderColor', type)];
      const borderPressed = color
        ? createPressedColor(color)
        : self[createKey('borderColorPressed', type)];
      const borderDisabled = color || self[createKey('borderColorDisabled', type)];

      borderCssVar = ns.cssVarBlock({
        border: `${self[createKey('borderWidth', type)]} ${
          self[createKey('borderStyle', type)]
        } ${borderColor}`,
        'border-pressed': `${self[createKey('borderWidthPressed', type)]} ${
          self[createKey('borderStylePressed', type)]
        } ${borderPressed}`,

        'border-disabled': `${self[createKey('borderWidthDisabled', type)]} ${
          self[createKey('borderStyleDisabled', type)]
        } ${borderDisabled}`,
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
      [ns.cssVarBlockName('opacity-disabled')]: self.opacityDisabled,
      ...colorProps,
      ...borderCssVar,
      ...sizeCssVar,
    };
  });

  const buttonClass = computed(() => {
    const isLinear = isLinearGradient(props.color);
    const classes = [
      ns.b(),
      ns.m(props.type),
      ns.m(props.size),
      ns.is('disabled', props.disabled),
      ns.is('loading', props.loading),
      ns.is('plain', props.plain),
      ns.is('linear', isLinear),
    ];

    return classes;
  });

  const mergeLoadingClass = computed(() => {
    return props.loadingCustomClass;
  });

  const mergeLoadingStyle = computed(() => {
    const { size } = props;
    const { self } = themeRef.value;

    const { [createKey('iconMargin', size)]: iconMargin } = self as any;

    const style: CSSProperties = {
      marginRight: iconMargin,
    };

    return merge(style, addStyle(props.loadingCustomStyle));
  });

  const loadingColor = computed(() => {
    const { color, type } = props;
    const { self } = themeRef.value;
    return props.plain
      ? color || self[createKey('textColorGhost', type)]
      : color
      ? self.textColorPrimary
      : self[createKey('textColor', type)];
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

  const getphonenumber = (res) => {
    emit('getphonenumber', res);
  };

  const getuserinfo = (res) => {
    emit('getuserinfo', res);
  };

  const error = (res) => {
    emit('error', res);
  };

  const opensetting = (res) => {
    emit('opensetting', res);
  };

  const launchapp = (res) => {
    emit('launchapp', res);
  };

  function handleClick() {
    emit('click');
  }
</script>

<template>
  <button
    :hover-start-time="hoverStartTime"
    :hover-stay-time="hoverStayTime"
    :form-type="formType"
    :open-type="openType"
    :app-parameter="appParameter"
    :hover-stop-propagation="hoverStopPropagation"
    :send-message-title="sendMessageTitle"
    :send-message-path="sendMessagePath"
    :lang="lang"
    :data-name="dataName"
    :session-from="sessionFrom"
    :send-message-img="sendMessageImg"
    :show-message-card="showMessageCard"
    @getphonenumber="getphonenumber"
    @getuserinfo="getuserinfo"
    @error="error"
    @opensetting="opensetting"
    @launchapp="launchapp"
    :hover-class="!disabled && !loading ? ns.is('active') : ''"
    :style="[cssVarsRef, addStyle(customStyle)]"
    @tap="handleClick"
    :class="[ns.b(), ...buttonClass, customClass]"
  >
    <template v-if="loading">
      <a-loading
        :custom-class="mergeLoadingClass"
        :custom-style="mergeLoadingStyle"
        :size="loadingSize"
        :color="loadingColor"
      ></a-loading>
    </template>
    <template v-else>
      <a-icon
        v-if="icon"
        :custom-class="mergeIconClass"
        :custom-style="mergeIconStyle"
        :name="icon"
        :color="mergeIconColor"
        :size="mergeIconSize"
      ></a-icon>
    </template>
    <slot>
      <text>{{ text }}</text>
    </slot>
  </button>
</template>
<style scoped lang="scss">
  @use './button.scss' as *;
</style>
