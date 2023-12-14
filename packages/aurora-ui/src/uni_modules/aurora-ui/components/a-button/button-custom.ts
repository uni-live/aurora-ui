import { computed, ref } from 'vue';
import { TinyColor } from '@ctrl/tinycolor';
import { useNamespace } from '../../hooks/use-namespace';
import type { ButtonProps } from './button';
import { onLoad } from '@dcloudio/uni-app';
import { addUnit } from '../../shared';

export function darken(color: TinyColor, amount = 20) {
  return color.mix('#141414', amount).toString();
}

export function useButtonCustomStyle(props: ButtonProps) {
  const ns = useNamespace('button');

  const hasDark = ref(false);

  onLoad(() => {
    const theme = uni.getSystemInfoSync().theme;
    hasDark.value = theme === 'dark';
  });

  return computed(() => {
    let styles: Record<string, string> = {};

    const buttonColor = props.color;

    if (buttonColor) {
      const color = new TinyColor(buttonColor);
      const activeBgColor = buttonColor;

      if (props.plain) {
        styles = ns.cssVarBlock({
          'bg-color': props.dark ? darken(color, 90) : color.tint(90).toString(),
          'text-color': buttonColor,
          'border-color': props.dark ? darken(color, 50) : color.tint(50).toString(),
          'active-bg-color': activeBgColor,
          'active-text-color': `var(${ns.cssVarName('color-white')})`,
          'active-border-color': activeBgColor,
        });
      } else {
        let textColor;
        const gradient =
          buttonColor.indexOf('gradient') !== -1 || buttonColor.indexOf('rgb') !== -1;

        if (gradient) {
          textColor = `var(${ns.cssVarName('color-white')})`;
        } else {
          textColor = color.isDark()
            ? `var(${ns.cssVarName('color-white')})`
            : `var(${ns.cssVarName('color-black')})`;
        }

        styles = ns.cssVarBlock({
          'bg-color': buttonColor,
          'text-color': textColor,
          'border-color': buttonColor,
          'active-bg-color': activeBgColor,
          'active-border-color': activeBgColor,
        });
      }
    }

    const gradient =
      props.color && (buttonColor.indexOf('gradient') !== -1 || buttonColor.indexOf('rgb') !== -1);

    styles = {
      ...styles,
      ...ns.cssVarBlock({
        'border-radius': addUnit(props.round),
        'border-width': props.plain && !gradient ? `var(${ns.cssVarName('border-width')})` : '0px',
      }),
    };

    return styles;
  });
}
