import { unref } from 'vue';
import type { Ref, ComputedRef } from 'vue';
import { isEmpty, isObject, isString, set } from 'lodash-es';
import { ExtendFormProps } from './form';

interface FormValuesContext {
  getProps: ComputedRef<ExtendFormProps>;
  formModel: Ref<Record<string, any>>;
}
export function useFormValues({ formModel, getProps }: FormValuesContext) {
  function handleFormValues(values: Record<string, any>) {
    if (!isObject(values)) {
      return {};
    }
    const res: Record<string, any> = {};
    for (const item of Object.entries(values)) {
      let [, value] = item;
      const [key] = item;

      if (!key) continue;

      const transformDateFunc = unref(getProps).transformDateFunc;
      if (!isEmpty(value) && transformDateFunc) {
        value = transformDateFunc?.(key, value, formModel, getProps.value);
      }
      if (isString(value)) {
        value = value.trim();
      }
      set(res, key, value);
    }
    return res;
  }

  return { handleFormValues };
}
