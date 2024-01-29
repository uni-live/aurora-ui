<script>
  /**
   * FormItem 表单
   * @description 此组件一般用于表单场景，可以配置Input输入框，Select弹出框，进行表单验证等。
   * @tutorial https://www.xxx.com/components/form.html
   * @property {String}	              customClass	            定义需要用到的外部calss样式
   * @property {Object | String}	    customStyle	            定义需要用到的外部style样式
   * @property {Object}	              theme	                  自定义主题
   * @property {Object}	              themeOverrides	        主题变量
   * @property {String}			          label			              input的label提示语
   * @property {String}			          prop			              绑定的值
   * @property {String | Boolean}	    borderBottom	          是否显示表单域的下划线边框
   * @property {String}			          rightIcon		            右侧图标
   * @property {String}			          leftIcon		            左侧图标
   * @property {Boolean}			        required		            是否显示左边的必填星号，只作显示用，具体校验必填的逻辑，请在rules中配置 (默认 false )
   *
   * @example <a-form-item label="姓名" prop="userInfo.name" borderBottom ref="item1"></a-form-item>
   */

  export default {
    name: 'a-form-item',
    inheritAttrs: false,
    // #ifdef MP-WEIXIN
    options: {
      virtualHost: true,
    },
    // #endif
  };
</script>

<script setup lang="ts">
  import { useTheme } from '../../hooks/use-theme';
  import { useNamespace } from '../../hooks/use-namespace';
  import { formItemEmits, formItemProps } from './form-item';
  import formItemLight from './styles/light';
  import { computed, onMounted, getCurrentInstance } from 'vue';
  import { addStyle } from 'shared';
  import { useFormProviderContext } from '../a-form/provider';

  const props = defineProps(formItemProps);
  const emit = defineEmits(formItemEmits);

  const ns = useNamespace('form-item');
  const themeRef = useTheme('Cell', formItemLight, props);
  const context = useFormProviderContext();

  const instance = getCurrentInstance();

  const mergeClass = computed(() => {
    return [ns.b(), props.customClass];
  });

  const mergeStyle = computed(() => {
    const { self } = themeRef.value;
    const style = ns.cssVarBlock({});

    return [style, addStyle(props.customStyle)];
  });

  onMounted(() => {
    if (!context) return console.error('u-form-item需要结合u-form组件使用');

    context.add(instance!);
  });
</script>

<template>
  <div :class="mergeClass" :style="mergeStyle"> </div>
</template>

<style lang="scss" scoped></style>
