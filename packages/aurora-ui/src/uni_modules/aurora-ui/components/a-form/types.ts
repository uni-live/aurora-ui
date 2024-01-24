import { FormProps } from './form';

export type EmitType = (event: any, ...args: any[]) => void;

export interface FormAction {
  clearValidate: () => void;
  validateFields: (keys: string[]) => any;
  validate: () => Promise<any>;
  reset: () => void;
  setRules: (rules: any) => void;
  getFieldsValue: () => Record<string, any>;
  setFieldsValue: (values: Record<string, any>) => void;
  setProps: (formProps: Partial<FormProps>) => void;
  submit: () => Promise<any>;
}
