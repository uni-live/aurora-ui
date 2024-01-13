<script lang="ts">
  /**
   * button 按钮
   * @description Button 按钮
   * @tutorial https://www.uviewui.com/components/button.html
   *
   * @property {String}	              customClass	            定义需要用到的外部calss样式
   * @property {Object | String}	    customStyle	            定义需要用到的外部style样式
   * @property {Object}	              theme	                  自定义主题
   * @property {Object}	              themeOverrides	        主题变量
   * @property {Object}	              builtinThemeOverrides	  组件主题变量
   * @property {String}			          type					          按钮的预置样式，info，primary，error，warning，success (默认 'info' )
   * @property {String}			          size					          按钮尺寸，large，normal，mini （默认 normal）
   * @property {String}			          shape					          按钮形状，circle（两边为半圆），square（带圆角） （默认 'square' ）
   * @property {Boolean}			        plain					          按钮是否镂空，背景色透明 （默认 false）
   * @property {Boolean}			        disabled				        是否禁用 （默认 false）
   * @property {Boolean}			        loading					        按钮名称前是否带 loading 图标(App-nvue 平台，在 ios 上为雪花，Android上为圆圈) （默认 false）
   * @property {String | Number}	    loadingText				      加载中提示文字
   * @property {String}			          loadingMode				      加载状态图标类型 （默认 'spinner' ）
   * @property {String | Number}	    loadingSize				      加载图标大小 （默认 15 ）
   * @property {String}			          openType				        开放能力，具体请看uniapp稳定关于button组件部分说明
   * @property {String}			          formType				        用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
   * @property {String}			          appParameter			      打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 （注：只微信小程序、QQ小程序有效）
   * @property {Boolean}			        hoverStopPropagation	  指定是否阻止本节点的祖先节点出现点击态，微信小程序有效（默认 true ）
   * @property {String}			          lang					          指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文（默认 en ）
   * @property {String}			          sessionFrom				      会话来源，openType="contact"时有效
   * @property {String}			          sendMessageTitle		    会话内消息卡片标题，openType="contact"时有效
   * @property {String}			          sendMessagePath			    会话内消息卡片点击跳转小程序路径，openType="contact"时有效
   * @property {String}			          sendMessageImg			    会话内消息卡片图片，openType="contact"时有效
   * @property {Boolean}			        showMessageCard			    是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，openType="contact"时有效（默认false）
   * @property {String}			          dataName				        额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
   * @property {String | Number}	    throttleTime			      节流，一定时间内只能触发一次 （默认 0 )
   * @property {String | Number}	    hoverStartTime			    按住后多久出现点击态，单位毫秒 （默认 0 )
   * @property {String | Number}	    hoverStayTime			      手指松开后点击态保留时间，单位毫秒 （默认 200 )
   * @property {String | Number}	    text					          按钮文字，之所以通过props传入，是因为slot传入的话（注：nvue中无法控制文字的样式）
   * @property {String}			          icon					          按钮图标
   * @property {String}			          iconColor				        按钮图标颜色
   * @property {String}			          color					          按钮颜色，支持传入linear-gradient渐变色
   *
   * @event {Function}	click			非禁止并且非加载中，才能点击
   * @event {Function}	getphonenumber	open-type="getPhoneNumber"时有效
   * @event {Function}	getuserinfo		用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo
   * @event {Function}	error			当使用开放能力时，发生错误的回调
   * @event {Function}	opensetting		在打开授权设置页并关闭后回调
   * @event {Function}	launchapp		打开 APP 成功的回调
   * @example <a-button>月落</a-button>
   */
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
