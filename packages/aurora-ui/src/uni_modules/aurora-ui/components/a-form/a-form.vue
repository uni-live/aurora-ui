<script>
  /**
   * Form 表单
   * @description 此组件一般用于表单场景，可以配置Input输入框，Select弹出框，进行表单验证等。
   * @tutorial https://www.xxx.com/components/form.html
   * @property {Object}						          model			    当前form的需要验证字段的集合
   * @property {Object | Function | Array}	rules			    验证规则
   * @property {String}						          errorType		  错误的提示方式，见上方说明 ( 默认 message )
   * @property {Boolean}						        borderBottom	是否显示表单域的下划线边框   ( 默认 true ）
   * @property {String}						          labelPosition	表单域提示文字的位置，left-左侧，top-上方 ( 默认 'left' ）
   * @property {String | Number}				    labelWidth		提示文字的宽度，单位px  ( 默认 45 ）
   * @property {String}						          labelAlign		lable字体的对齐方式   ( 默认 ‘left' ）
   * @property {Object}						          labelStyle		lable的样式，对象形式
   *
   * @example <a-form labelPosition="left" :model="model1" :rules="rules" ref="form1"></a-form>
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
  import { ExtendFormProps, FormProps, formEmits, formProps } from './form';
  import { useNamespace } from '../../hooks/use-namespace';
  import { useTheme } from '../../hooks/use-theme';
  import { formLight } from './styles';
  import { provide, ref, watchEffect, onMounted, unref, computed } from 'vue';
  import { formProviderInjectionKey } from './context';
  import { cloneDeep } from 'lodash-es';
  // @ts-ignore
  import Schema from 'async-validator';
  import { FormAction } from './types';
  import { deepMerge } from '../../shared/deep-merge';
import { useInstance } from '../../hooks/use-instance';
import { createFormProviderContext } from './provider';

  const props = defineProps(formProps);
  const emit = defineEmits(formEmits);
  
  const ns = useNamespace('form');
  const themeRef = useTheme('Form', formLight, props);
  const instance = useInstance();

  const formModel = ref<Record<string, any>>({});
  const formRules = ref({});
  const validatorRef = ref({});
  const originalModel = ref({});
  const propsRef = ref<ExtendFormProps>();

  const getProps = computed(() => {
    return { ...props, ...(unref(propsRef) || {}) } as ExtendFormProps;
  });

  createFormProviderContext({
    ...instance,
    instances: instance.instances.value
  });

  watchEffect(() => {
    setRules();
  });

  watchEffect(() => {
    if (!originalModel.value) {
      originalModel.value = cloneDeep(props.model);
    }
  });

  watchEffect(() => {
    emit('update:model', formModel);
  });

  const setRules = () => {};

  const clearValidate = () => {};

  const validateField = () => {};

  const validate = async () => {
    return Promise.reject({});
  };

  const reset = () => {};

  const getFieldsValue = () => {
    return {};
  };

  function setFormModel(key: string, value: any) {
    formModel[key] = value;
  }

  const setFieldsValue = (values: any) => {
    console.log(values);
  };

  const submit = async () => {
    try {
      const values = await validate();

      emit('submit', values);
    } catch (error) {
      throw new Error(error);
    }
  };

  async function setProps(formProps: Partial<ExtendFormProps>) {
    propsRef.value = deepMerge(unref(propsRef) || {}, formProps) as ExtendFormProps;
  }

  const formAction: FormAction = {
    setProps,
    clearValidate,
    validateField,
    validate,
    reset,
    setRules,
    getFieldsValue,
    setFieldsValue,
    submit,
  };

  onMounted(() => {
    emit('register', formAction);
  });

  provide(formProviderInjectionKey, {
    setFormModel,
  });
</script>
<template>
  <view>
    <slot />
  </view>
</template>

<style lang="scss" scoped></style>
