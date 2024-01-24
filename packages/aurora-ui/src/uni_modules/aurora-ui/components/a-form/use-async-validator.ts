import { Ref, ref, unref, watchEffect } from 'vue';
import { ExtendFormProps } from './form';
import Schema, { Rules, ValidateError } from 'async-validator';
import { useFormProviderContext } from './provider';
import { get, isArray, isEmpty } from 'lodash-es';

export interface AsyncValidatorAction {
  formRules: Ref;
  validateFields: (keys: string[], callback?: (errors: ValidateError[]) => void) => void;
  setRules: (rules: Rules) => void;
  validate: () => Promise<void>;
  clearValidate: () => void;
}

export function useAsyncValidator(props: Ref<ExtendFormProps>, formModel: Record<string, any>) {
  const formRules = ref();

  const { instances } = useFormProviderContext();

  watchEffect(() => {
    setRules(props.value.rules);
  });

  function setRules(rules) {
    if (Object.keys(rules).length === 0) return;

    formRules.value = rules;
  }

  /**
   * @description 验证某个表单字段
   * @param keys
   * @returns
   */
  async function validateFields(
    keys: string[],
    callback?: (errors: ValidateError[]) => void,
    event = null,
  ) {
    // $nextTick是必须的，否则model的变更，可能会延后于此方法的执行
    // 校验错误信息，返回给回调方法，用于存放所有form-item的错误信息
    const errorsRes: ValidateError[] = [];
    // 如果为字符串，转为数组
    instances.map((child) => {
      // 用于存放form-item的错误信息
      const childErrors: ValidateError[] = [];
      const prop = child.props.prop as string;
      if (keys.includes(prop)) {
        // 获取对应的属性，通过类似'a.b.c'的形式
        const propertyVal = get(formModel, prop);
        // 属性链数组
        const propertyChain = prop.split('.');
        const propertyName = propertyChain[propertyChain.length - 1];

        const rule = unref(formRules)[prop];
        // 如果不存在对应的规则，直接返回，否则校验器会报错
        if (!rule) return;
        // rule规则可为数组形式，也可为对象形式，此处拼接成为数组
        const rules = [].concat(rule);

        // 对rules数组进行校验
        for (let i = 0; i < rules.length; i++) {
          const ruleItem = rules[i] as any;
          // 将u-form-item的触发器转为数组形式
          const trigger = [].concat(ruleItem?.trigger);
          // 如果是有传入触发事件，但是此form-item却没有配置此触发器的话，不执行校验操作
          if (event && !trigger.includes(event)) continue;
          // 实例化校验对象，传入构造规则
          const validator = new Schema({
            [propertyName]: ruleItem,
          });
          validator.validate(
            {
              [propertyName]: propertyVal,
            },
            (errors, fields) => {
              if (isArray(errors)) {
                errorsRes.push(...errors!);
                childErrors.push(...errors);
              }
              child.exposed?.setMessage(childErrors[0]?.message ?? null);
            },
          );
        }
      }
    });
    // 执行回调函数
    typeof callback === 'function' && callback(errorsRes);
  }

  /**
   * @description: 验证全部表单字段
   */
  async function validate() {
    if (isEmpty(formRules)) return;

    return new Promise<any>((resolve, reject) => {
      // $nextTick是必须的，否则model的变更，可能会延后于validate方法
      // 获取所有form-item的prop，交给validateField方法进行校验
      const formItemProps = instances.map((item) => item.props.prop as string);
      validateFields(formItemProps, (errors) => {
        if (errors.length) {
          //TODO 如果错误提示方式为toast，则进行提示
          // props.errorType === 'toast' && uni.$u.toast(errors[0].message)
          reject(errors);
        } else {
          resolve(true);
        }
      });
    });
  }

  /**
   * @description 清除验证
   */
  async function clearValidate() {
    instances.map((child) => {
      // 如果u-form-item的prop在props数组中，则清除对应的校验结果信息
      child.exposed?.setMessage(null);
    });
  }

  return {
    formRules,
    validateFields,
    setRules,
    validate,
    clearValidate,
  };
}
