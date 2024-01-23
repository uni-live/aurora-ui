import type { ComputedRef } from 'vue';
import { unref, toRaw } from 'vue';
import { isFunction } from 'lodash-es';
import { EmitType } from './types';
import { ExtendFormProps } from './form';
import { Fn } from '../../types';

interface UseFormActionContext {
  emit: EmitType;
  getProps: ComputedRef<ExtendFormProps>;
  formModel: Record<string, any>;
  handleFormValues: Fn;
}
export function useFormEvents({
  emit,
  getProps,
  formModel,
  handleFormValues,
}: UseFormActionContext) {
  async function resetFields(): Promise<void> {
    const { resetFunc } = unref(getProps);
    resetFunc && isFunction(resetFunc) && (await resetFunc());

    clearValidate();
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
      formModel[key] = value;
      validKeys.push(key);
    });
    validateFields(validKeys).catch((_) => {});
  }

  /**
   * @description 验证某个表单字段
   * @param keys
   * @returns
   */
  async function validateFields(keys?: string[]) {
    return {};
  }

  /**
   * @description: 验证全部表单字段
   */
  async function validate() {
    return {};
  }

  /**
   * @description 清除验证
   */
  async function clearValidate() {}

  /**
   * @description: Form submission
   */
  async function handleSubmit(e?: Event): Promise<void> {
    e && e.preventDefault();
    const { submitFunc } = unref(getProps);
    if (submitFunc && isFunction(submitFunc)) {
      await submitFunc(formModel);
      return;
    }
    try {
      const values = await validate();
      const res = handleFormValues(values);
      emit('submit', res);
    } catch (error) {
      throw new Error(error);
    }
  }



  return {
    handleSubmit,
    clearValidate,
    validate,
    validateFields,
    resetFields,
    setFieldsValue,
  };
}
