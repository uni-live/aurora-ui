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
  import { addStyle, addUnit } from '../../shared';
  import { useNamespace } from '../../hooks';
  import { AIcon } from '../a-icon';
  import { ALoading } from '../a-loading';
  import { useButtonCustomStyle } from './button-custom';

  const props = defineProps(buttonProps);

  const emit = defineEmits(buttonEmits);

  const ns = useNamespace('button');

  const buttonStyle = useButtonCustomStyle(props);

  const baseColor = computed(() => {
    let style: CSSProperties = {
      borderRadius: addUnit(props.round),
    };

    if (props.disabled) {
      style.opacity = 0.5;
    } else {
      delete style.opacity;
    }

    if (props.color) {
      if (props.color.indexOf('gradient') !== -1) {
        // 如果自定义的颜色为渐变色，不显示边框，以及通过backgroundImage设置渐变色
        style.border = 0;
        if (!props.plain) {
          style.backgroundImage = props.color;
        }
      } else {
        // 非渐变色，则设置边框相关的属性
        style.borderColor = props.color;
        style.borderWidth = '1px';
        style.borderStyle = 'solid';
      }
    }

    return style;
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
    :style="[baseColor, buttonStyle, addStyle(customStyle)]"
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
