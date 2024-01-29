<script>
  /**
   * Form 表单
   * @description 此组件一般用于表单场景，可以配置Input输入框，Select弹出框，进行表单验证等。
   * @tutorial https://www.xxx.com/components/form.html
   * @property {String}	                    customClass	    定义需要用到的外部calss样式
   * @property {Object | String}	          customStyle	    定义需要用到的外部style样式
   * @property {Object}	                    theme	          自定义主题
   * @property {Object}	                    themeOverrides	主题变量
   * @property {Object}						          model			      当前form的需要验证字段的集合
   * @property {Object}						          initialValues	  表单默认值，只有初始化以及重置时生效
   * @property {Object | Function | Array}	rules			      验证规则
   * @property {Boolean}						        disabled	      设置表单组件禁用   ( 默认 false ）
   * @property {String}						          errorType		    错误的提示方式，见上方说明 ( 默认 message )
   * @property {Boolean}						        borderBottom	  是否显示表单域的下划线边框   ( 默认 true ）
   * @property {String}						          labelPosition	  表单域提示文字的位置，left-左侧，top-上方 ( 默认 'left' ）
   * @property {String | Number}				    labelWidth		  提示文字的宽度，单位px  ( 默认 45 ）
   * @property {String}						          labelAlign		  lable字体的对齐方式   ( 默认 ‘left' ）
   * @property {Object}						          labelStyle		  lable的样式，对象形式
   *
   * @example <a-form labelPosition="left" :model="model1" :rules="rules" ref="form"></a-form>
   */

  export default {
    name: 'a-form',
    inheritAttrs: false,
    // #ifdef MP-WEIXIN
    options: {
      virtualHost: true,
    },
    // #endif
  };
</script>
<script setup lang="ts">
  import { ExtendFormProps, formEmits, formProps } from './form';
  import { useNamespace } from '../../hooks/use-namespace';
  import { ref, watchEffect, onMounted, unref, computed, defineExpose } from 'vue';
  import { FormAction } from './types';
  import { deepMerge } from '../../shared/deep-merge';
  import { useInstance } from '../../hooks/use-instance';
  import { createFormProviderContext } from './provider';
  import { useAsyncValidator } from './use-async-validator';
  import { useFormEvents } from './use-form-events';
  import { useFormValues } from './use-form-values';
  import { addStyle } from 'shared/add';

  const props = defineProps(formProps);
  const emit = defineEmits(formEmits);

  const ns = useNamespace('form');
  const instance = useInstance();

  const formModel = ref<Record<string, any>>({});
  const propsRef = ref<ExtendFormProps>();

  const getProps = computed(() => {
    return { ...props, ...(unref(propsRef) || {}) } as ExtendFormProps;
  });

  const mergeStyle = computed(() => {
    const style = ns.cssVarBlock({});

    return [style, addStyle(props.customStyle)];
  });

  const mergeClass = computed(() => {
    return [ns.b(), props.customClass];
  });

  const { handleFormValues } = useFormValues({ props: getProps, formModel });
  const formValidator = useAsyncValidator(getProps, formModel);
  const { handleSubmit, reset, setFieldsValue, getFieldsValue } = useFormEvents({
    emit,
    props: getProps,
    formModel,
    formValidator,
    handleFormValues,
  });

  const { setRules, validate, validateFields, clearValidate } = formValidator;

  watchEffect(() => {
    emit('update:model', formModel);
  });

  function setFormModel(key: string, value: any) {
    setFieldsValue({ [key]: value });
  }

  async function setProps(formProps: Partial<ExtendFormProps>) {
    propsRef.value = deepMerge(unref(propsRef) || {}, formProps) as ExtendFormProps;
  }

  const formAction: FormAction = {
    setProps,
    clearValidate,
    validateFields,
    validate,
    reset,
    setRules,
    getFieldsValue,
    setFieldsValue,
    submit: handleSubmit,
  };

  onMounted(() => {
    emit('register', formAction);
  });

  createFormProviderContext({
    ...instance,
    instances: instance.instances.value,
    disabled: props.disabled,
    setFormModel,
  });

  defineExpose(formAction);
</script>
<template>
  <view :class="mergeClass" :style="mergeStyle">
    <slot />
  </view>
</template>

<style lang="scss" scoped></style>
