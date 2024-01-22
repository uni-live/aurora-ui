import { ref, watchEffect } from "vue";
import { ExtendFormProps } from "./form";
// @ts-ignore
import Schema from 'async-validator';
import { useFormProviderContext } from './provider'

export function useAsyncValidator(props: ExtendFormProps, formModel: Record<string, any>) {
  const formRules = ref();

  const { instances } = useFormProviderContext()

  watchEffect(() => {
      setRules(props.rules);
  })

  function setRules(rules) {
    if (Object.keys(rules).length === 0) return;
				if (Object.keys(formModel).length === 0) {
					console.error('设置rules，model必须设置！如果已经设置，请刷新页面。');
					return;
				};
				formRules.value = rules;
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

  return {
    formRules,
    validator,
    setRules,
  };
}