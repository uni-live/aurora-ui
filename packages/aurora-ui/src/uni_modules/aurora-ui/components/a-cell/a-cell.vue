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
  import { computed, useSlots } from 'vue';

  import AIcon from '../a-icon/a-icon.vue';
  import ALine from '../a-line/a-line.vue';

  import { cellProps, cellEmits } from './cell';
  import { useNamespace } from '../../hooks/use-namespace';
  import { useTheme } from '../../hooks/use-theme';
  import { cellLight } from './styles';
  import { addStyle } from '../../shared/add';

  const props = defineProps(cellProps);
  const emit = defineEmits(cellEmits);
  const slots = useSlots();

  const ns = useNamespace('cell');

  const themeRef = useTheme('Cell', cellLight, props);

  const selfRef = computed(() => themeRef.value.self);

  const mergeStyle = computed(() => {
    const self = selfRef.value;
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

  const hoverClass = computed(() => {
    const { disabled, clickable } = props;
    return !disabled && clickable ? ns.e('clickable') : '';
  });

  const hasLeftIcon = computed(() => {
    return slots?.icon || props.icon;
  });

  const hasRightIcon = computed(() => {
    return props.isLink && (slots?.['right-icon'] || props.rightIcon);
  });

  const titleTextStyle = computed(() => {
    return addStyle(props.titleStyle);
  });

  function handleClick() {
    emit('click');
  }
</script>
<template>
  <view
    :class="[ns.b(), customClass]"
    :style="mergeStyle"
    :hover-class="hoverClass"
    :hover-stay-time="250"
    @tap="handleClick"
  >
    <view :class="[ns.e('body'), center && ns.m('center')]">
      <view :class="ns.e('body__content')">
        <view :class="ns.e('left-icon-wrap')" v-if="hasLeftIcon">
          <slot name="icon" v-if="$slots.icon"> </slot>
          <a-icon v-else :name="icon" :custom-style="iconStyle" :size="selfRef.iconSize"></a-icon>
        </view>
        <view :class="ns.e('title')">
          <slot name="title">
            <text
              v-if="title"
              :style="[titleTextStyle]"
              :class="[ns.e('title-text'), disabled && ns.m('disabled')]"
              >{{ title }}</text
            >
          </slot>
          <slot name="label">
            <text v-if="label" :class="[ns.e('label'), disabled && ns.m('disabled')]">{{
              label
            }}</text>
          </slot>
        </view>
      </view>
      <slot name="value">
        <text v-if="value" :class="[ns.e('value'), disabled && ns.m('disabled')]">{{ value }}</text>
      </slot>
      <view
        v-if="hasRightIcon"
        :class="[ns.e('right-icon-wrap'), ns.em('right-icon-wrap', arrowDirection)]"
      >
        <slot name="right-icon" v-if="slots?.['right-icon']"> </slot>
        <a-icon
          v-else
          :name="rightIcon"
          :custom-style="rightIconStyle"
          :color="disabled ? selfRef.disabledRightIconColor : selfRef.rightIconColor"
          :size="selfRef.iconSize"
        ></a-icon>
      </view>
    </view>
    <a-line v-if="border"></a-line>
  </view>
</template>

<style lang="scss" scoped>
  @use './cell.scss' as *;
</style>
