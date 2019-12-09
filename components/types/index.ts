import { FormItemProps } from 'antd/lib/form';
import { GetFieldDecoratorOptions, WrappedFormUtils, FormProps, FormComponentProps } from 'antd/lib/form/Form';
import React, { ComponentType, ComponentClass, FunctionComponent } from 'react';
import { Gutter } from 'antd/lib/grid/row';

export type FormLayout = 'horizontal' | 'vertical' | 'inline' | 'multi-column';
export type FieldStatus = 'edit' | 'preview' | 'disabled' | 'readonly' | 'none';

export interface ComponentStatus {
  (): React.ReactNode | null
};

export interface OptionItem {
  label: any;
  value: any;
};

export interface ComponentFieldType {
  [key: string]: ComponentType;
}

export interface FieldProps {
  // 表单元素名称（input, radio, checkbox, etc）或 自定义表单组件
  field?: string | ComponentClass<FieldProps, any> | FunctionComponent<FieldProps>;
  // 组件ID
  id: string;
  // 组件扩展类型
  type?: string;
  // 组件值
  value?: any;
  // 组件默认值
  defaultValue?: any;
  // 组件状态（编辑、展示、只读、禁用）
  status?: FieldStatus;
  // Form.Item 配置
  // https://ant.design/components/form-cn/#FormItem
  formItem?: FormItemProps;
  // 校验器配置
  // https://ant.design/components/form-cn/#getFieldDecorator(id,-options)-%E5%8F%82%E6%95%B0
  decorator?: GetFieldDecoratorOptions;
  // 组件配置
  config?: {
    [propName: string]: any;
  };
  // 表单实例
  form?: WrappedFormUtils;
  // 列合并
  colSpan?: number;
  // 组件 value 为 null 的展示方式
  emptyContent?: string | ComponentClass<FieldProps, any> | FunctionComponent<FieldProps>;
  // 定制展示渲染
  previewRender?: (field: FieldProps) => React.ReactNode | null;
  disabledRender?: (field: FieldProps) => React.ReactNode | null;
  readonlyRender?: (field: FieldProps) => React.ReactNode | null;
}

type ProtoExntends<T, U> = U & {
  [P in Exclude<keyof T, keyof U>]?: T[P];
};

export type FormConfigProps = ProtoExntends<FormProps, {
  // 表单元素状态
  status?: FieldStatus;
  fields?: Array<FieldProps>;
  // 列数，多列布局专属
  column?: number;
  // 列间隔，多列布局专属
  gutter?: Gutter;
  layout?: FormLayout;
  emptyContent?: string | ComponentClass<FieldProps, any> | FunctionComponent<FieldProps>;
}>


export interface FormRenderProps extends FormComponentProps {
  // 表单配置
  config?: FormConfigProps;
  // 表单数据
  data?: {
    [propName: string]: any;
  };
  // 全局监听表单元素的 onChange 事件
  onChange?: (field: FieldProps, ...arg: any[]) => void,
  // 孩子元素
  children?: any;
  className?: string;
  style?: React.CSSProperties;
  needWrapFormRenderCore?: boolean;
}

export type FormRenderCoreProps = ProtoExntends<FormRenderProps, {
  form?: WrappedFormUtils;
}>
