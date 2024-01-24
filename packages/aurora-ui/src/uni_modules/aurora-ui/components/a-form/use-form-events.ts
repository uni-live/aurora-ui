import type { ComputedRef } from 'vue';
import { unref, toRaw } from 'vue';
import { isFunction, set } from 'lodash-es';
import { EmitType } from './types';
import { ExtendFormProps } from './form';
import { Fn } from '../../types';
import { AsyncValidatorAction } from './use-async-validator';

interface UseFormActionContext {
  emit: EmitType;
  props: ComputedRef<ExtendFormProps>;
  formModel: Record<string, any>;
  formValidator: AsyncValidatorAction;
  handleFormValues: Fn;
}

export function useFormEvents({
  emit,
  props,
  formModel,
  formValidator,
  handleFormValues,
}: UseFormActionContext) {
  async function reset(): Promise<void> {
    const { resetFunc } = unref(props);
    resetFunc && isFunction(resetFunc) && (await resetFunc());

    formValidator.clearValidate();
    emit('reset', toRaw(formModel));
    handleSubmit();
  }

  /**
   * @description: Set form value
   */
  async function setFieldsValue(values: Record<string, any>): Promise<void> {
    const validKeys: string[] = [];
    Object.keys(values).forEach((key) => {
      let value = values[key];
      set(formModel, key, value);
      validKeys.push(key);
    });
    // 验证字段
    formValidator.validateFields(validKeys);
  }

  /**
   * @description: Form submission
   */
  async function handleSubmit(e?: Event): Promise<void> {
    e && e.preventDefault();
    const { submitFunc } = unref(props);
    if (submitFunc && isFunction(submitFunc)) {
      await submitFunc(formModel);
      return;
    }
    try {
      const values = await formValidator.validate();
      const res = handleFormValues(values);
      emit('submit', res);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * 获取表单数据
   * @returns
   */
  function getFieldsValue() {
    return formModel.value;
  }

  return {
    handleSubmit,
    reset,
    setFieldsValue,
    getFieldsValue,
  };
}
