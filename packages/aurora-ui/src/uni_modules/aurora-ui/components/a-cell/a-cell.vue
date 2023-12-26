<script lang="ts">
  export default {
    name: 'a-cel',
    inheritAttrs: false,
    // #ifdef MP-WEIXIN
    options: {
      virtualHost: true,
    },
    // #endif
  };
</script>
<script setup lang="ts">
  import { computed } from 'vue';

  import AIcon from '../a-icon/a-icon.vue';
  import ALine from '../a-line/a-line.vue';

  import { cellProps, cellEmits } from './cell';
  import { useNamespace } from '../../hooks/use-namespace';
  import { useTheme } from '../../hooks/use-theme';
  import { cellLight } from './styles';

  const props = defineProps(cellProps);

  const emit = defineEmits(cellEmits);

  const ns = useNamespace('cell');

  const themeRef = useTheme('Cell', cellLight, props);

  const mergeStyle = computed(() => {
    const { self } = themeRef.value;
    const style = ns.cssVarBlock({
      padding: self.padding,
      'font-size': self.fontSize,
      color: self.color,
      'icon-size': self.iconSize,
      'left-icon-margin-right': self.leftIconWrapMarginRight,
      'right-icon-margin-left': self.rightIconWrapMarginLeft,
      'title-font-size': self.titleFontSize,
      'title-line-height': self.titleLineHeight,
      'title-color': self.titleColor,
      'value-font-size': self.valueFontSize,
      'line-height': self.lineHeight,
      'value-color': self.valueColor,
      'clickable-color': self.clickableColor,
      'disabled-color': self.disabledColor,
    });

    return [style, props.customStyle];
  });

  function handleClick() {}
</script>
<template>
  <view
    :class="[ns.b(), customClass]"
    :style="mergeStyle"
    :hover-class="!disabled && (clickable || isLink) ? 'u-cell--clickable' : ''"
    :hover-stay-time="250"
    @tap="handleClick"
  >
    <view
      class="u-cell__body"
      :class="[center && 'u-cell--center', size === 'large' && 'u-cell__body--large']"
    >
      <view class="u-cell__body__content">
        <view class="u-cell__left-icon-wrap" v-if="$slots.icon || icon">
          <slot name="icon" v-if="$slots.icon"> </slot>
          <u-icon
            v-else
            :name="icon"
            :custom-style="iconStyle"
            :size="size === 'large' ? 22 : 18"
          ></u-icon>
        </view>
        <view class="u-cell__title">
          <slot name="title">
            <text
              v-if="title"
              class="u-cell__title-text"
              :style="[titleTextStyle]"
              :class="[
                disabled && 'u-cell--disabled',
                size === 'large' && 'u-cell__title-text--large',
              ]"
              >{{ title }}</text
            >
          </slot>
          <slot name="label">
            <text
              class="u-cell__label"
              v-if="label"
              :class="[disabled && 'u-cell--disabled', size === 'large' && 'u-cell__label--large']"
              >{{ label }}</text
            >
          </slot>
        </view>
      </view>
      <slot name="value">
        <text
          class="u-cell__value"
          :class="[disabled && 'u-cell--disabled', size === 'large' && 'u-cell__value--large']"
          v-if="!$u.test.empty(value)"
          >{{ value }}</text
        >
      </slot>
      <view
        class="u-cell__right-icon-wrap"
        v-if="$slots['right-icon'] || isLink"
        :class="[`u-cell__right-icon-wrap--${arrowDirection}`]"
      >
        <slot name="right-icon" v-if="$slots['right-icon']"> </slot>
        <a-icon
          v-else
          :name="rightIcon"
          :custom-style="rightIconStyle"
          :color="disabled ? '#c8c9cc' : 'info'"
          :size="size === 'large' ? 18 : 16"
        ></a-icon>
      </view>
    </view>
    <a-line v-if="border"></a-line>
  </view>
</template>

<style lang="scss" scoped>
  @use './cell.scss' as *;
</style>
