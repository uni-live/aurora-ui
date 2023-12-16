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
  import { computed } from 'vue';
  import { addStyle, createKey, createPressedColor } from '../../shared';
  import { useNamespace, useTheme } from '../../hooks';
  import AIcon from '../a-icon/a-icon.vue';
  import ALoading from '../a-loading/a-loading.vue';
  import { useButtonCustomStyle } from './button-custom';
  import { buttonLight } from './styles';
  import { changeColor } from 'seemly';

  const props = defineProps(buttonProps);

  const emit = defineEmits(buttonEmits);

  const ns = useNamespace('button');

  const buttonStyle = useButtonCustomStyle(props);

  const themeRef = useTheme('Button', buttonLight, props);

  const cssVarsRef = computed(() => {
    const theme = themeRef.value;
    const { self } = theme;

    const { text, type, color, plain, size, round } = props;

    let colorProps = ns.cssVarBlock({
      color: 'initial',
      'color-pressed': 'initial',
      'color-disabled': 'initial',
      'text-color': 'initial',
      'text-color-pressed': 'initial',
      'text-color-disabled': 'initial',
    });

    if (text) {
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
    } else if (plain) {
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
        'color-pressed': color ? createPressedColor(color) : self[createKey('colorPressed', type)],
        'color-disabled': color || self[createKey('colorDisabled', type)],
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

    if (text) {
      borderCssVar = ns.cssVarBlock({
        border: 'none',
        'border-pressed': 'none',
        'border-disabled': 'none',
      });
    } else {
      borderCssVar = ns.cssVarBlock({
        border: self[createKey('border', type)],
        'border-pressed': self[createKey('borderPressed', type)],
        'border-disabled': self[createKey('borderDisabled', type)],
      });
    }

    // size
    const {
      [createKey('height', size)]: height,
      [createKey('fontSize', size)]: fontSize,
      [createKey('padding', size)]: padding,
      [createKey('paddingRound', size)]: paddingRound,
      [createKey('iconSize', size)]: iconSize,
      [createKey('borderRadius', size)]: borderRadius,
      [createKey('iconMargin', size)]: iconMargin,
    } = self as any;

    const sizeCssVar = ns.cssVarBlock({
      width: 'initial',
      height: height,
      'font-size': fontSize,
      padding: round ? paddingRound : padding,
      'icon-size': iconSize,
      'icon-margin': iconMargin,
      'border-radius': borderRadius,
    });
    return {
      [ns.cssVarBlockName('opacity-disabled')]: self.opacityDisabled,
      ...colorProps,
      ...borderCssVar,
      ...sizeCssVar,
    };
  });

  const loadingColor = computed(() => {
    if (props.plain) {
      // 如果有设置color值，则用color值，否则使用type主题颜色
      return props.color ? props.color : `var(${ns.cssVarName('button-text-color')})`;
    }

    return '';
  });

  const buttonClass = computed(() => {
    const classes = [
      ns.b(),
      ns.m(props.type),
      ns.m(props.size),
      ns.is('disabled', props.disabled),
      ns.is('loading', props.loading),
      ns.is('plain', props.plain),
    ];

    return classes;
  });

  const mergeIconColor = computed(() => {
    // 如果是镂空状态，设置了color就用color值，否则使用主题颜色，
    if (props.iconColor) return props.iconColor;

    return props.plain
      ? props.color
        ? props.color
        : `var(${ns.cssVarName('button-text-color')})`
      : `var(${ns.cssVarName('button-text-color')})`;
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
    :style="[buttonStyle, cssVarsRef, addStyle(customStyle)]"
    @tap="handleClick"
    :class="[ns.b(), ...buttonClass, customClass]"
  >
    <template v-if="loading">
      <a-loading
        :custom-style="{ marginRight: '2px' }"
        :mode="loadingMode"
        :size="loadingSize"
        :color="loadingColor"
      ></a-loading>
    </template>
    <template v-else>
      <a-icon
        v-if="icon"
        :name="icon"
        :color="mergeIconColor"
        :customStyle="{ marginRight: '2px' }"
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
