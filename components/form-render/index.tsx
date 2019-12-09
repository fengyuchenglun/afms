/**
 *
 * FormRender
 *
 */

import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'omit.js';
import { Form } from 'antd';
import { EDIT } from '../utils/consts';
import FormRenderCore from '../form-render-core';
import FormConfig from './form-config';
import { FormRenderProps, FormConfigProps } from '../types';
import { FormProps } from 'antd/lib/form';

export const defaultFormConfig: FormConfigProps = {
  status: EDIT,
  fields: [],
};

function mergeFormConfig(rootConfig: FormConfigProps, childConfig: FormConfigProps = {}): FormConfigProps {
  const {
    status, emptyContent, labelCol, wrapperCol, colon, labelAlign,
  } = rootConfig;
  return {
    status,
    emptyContent,
    labelCol,
    wrapperCol,
    colon,
    labelAlign,
    ...childConfig,
  };
}

class FormRender extends React.PureComponent<FormRenderProps> {
  static defaultProps = {}
  static propTypes = {}
  static FormConfig = FormConfig
  renderFormItems() {
    const {
      children, form, data, config = defaultFormConfig,
    } = this.props;
    const childrenArray = React.Children.toArray(children);
    // 主要针对 FormRender 下面可随意组合 FormRenderCore，透传配置下去
    // 这里会存在一个问题，如果 FormRenderCore 不是 FormRender 的直接孩子的话，配置（主要是 form 对象）会透传失败
    // 透传失败的话，就会收集不了表单元素的值，所以不建议 FormRenderCore 外面再被包 Div 或被封装成组件，如果确实要的话，则需要手动透传配置下去
    return childrenArray.map((child: React.ReactElement) =>
      cloneElement(child, {
        form,
        // 表单配置透传，可被覆盖
        config: mergeFormConfig(config, child.props.config),
        // 表单数据透传，可被覆盖
        data: Object.assign({}, data, child.props && child.props.data),
      })
    );
  }
  render() {
    const { config = defaultFormConfig, style, className } = this.props;
    const { fields, layout = 'horizontal', status = EDIT } = config;
    // 剔除掉无关的 Form 配置
    const formProps: FormProps = omit(config, [
      'status', 'fields', 'gutter', 'column', 'layout', 'emptyContent',
    ]);
    // 剔除掉无关的 FormRenderCore 配置
    // 这里的 style className 只是控制最外层 Form，FormRenderCore 有自己单独的 style className 来控制
    const formRenderCoreProps: FormRenderProps = omit(this.props, [
      'children', 'style', 'className',
    ]);
    return (
      <Form
        // 快捷设置 style className，会覆盖 config 设置的值
        style={style}
        className={classNames('afms-form-render', `afms-form-render-${status}`, className)}
        {...formProps}
        // 针对多列布局做适配，多列布局使用 form 默认的 horizontal
        layout={layout === 'multi-column' ? 'horizontal' : layout}
      >
        {/* 如果 FormRender 自带表单元素，则默认渲染一个 FormRenderCore */}
        {
          (Array.isArray(fields) && fields.length > 0) &&
            <FormRenderCore
              needWrapFormRenderCore={false}
              {...formRenderCoreProps}
            />
        }
        {/* 自由渲染 FormRenderCore 或其他任何元素 */}
        {this.renderFormItems()}
      </Form>
    );
  }
}

FormRender.defaultProps = {
  config: {
    status: EDIT,
    fields: [],
  },
  children: null,
  data: null,
  className: null,
  style: {},
  onChange: () => {},
};

FormRender.propTypes = {
  form: PropTypes.object.isRequired,
  config: PropTypes.object,
  children: PropTypes.any,
  data: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
};

export default Form.create<FormRenderProps>()(FormRender);
