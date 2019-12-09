/**
 *
 * BaseField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import { EDIT, PREVIEW, DISABLED, READONLY } from '../utils/consts';
import { FieldProps, ComponentStatus } from '../types';

const FormItem = Form.Item;

class BaseField extends React.PureComponent<FieldProps, any> {
  static defaultProps = {}
  static propTypes = {}
  // 获取UI组件
  getComponent: ComponentStatus;
  // 获取 Field Decorator
  getFieldDecorator = () => {
    const {
      id, value, defaultValue, form, decorator,
    } = this.props;
    if (!form) {
      throw new TypeError('form object is required');
    }
    const { getFieldDecorator } = form;
    return getFieldDecorator(id, {
      initialValue: value === undefined ? defaultValue : value,
      ...decorator,
    });
  }
  // 只读态
  getReadOnlyStatus: ComponentStatus = () => null;
  // 禁用态
  getDisabledStatus: ComponentStatus = () => {
    const fieldDecorator = this.getFieldDecorator();
    const component = React.cloneElement(this.getComponent() as React.ReactElement, { disabled: true });
    return fieldDecorator(component);
  }
  // 展示态
  getPreviewStatus: ComponentStatus = () => {
    const { value, emptyContent } = this.props;
    if (value === null || value === undefined) return emptyContent;
    return <span className="afms-plain-text">{String(value)}</span>;
  };
  // 编辑态
  getEditStatus: ComponentStatus = () => {
    const fieldDecorator = this.getFieldDecorator();
    const component = this.getComponent();
    return fieldDecorator(component);
  };
  getContent = () => {
    const { status, previewRender, disabledRender, readonlyRender } = this.props;

    switch (status) {
      case EDIT:
        return this.getEditStatus();
      case PREVIEW:
        if (typeof previewRender === 'function') {
          return previewRender(this.props);
        }
        return this.getPreviewStatus();
      case DISABLED:
        if (typeof disabledRender === 'function') {
          return disabledRender(this.props);
        }
        return this.getDisabledStatus();
      case READONLY:
          if (typeof readonlyRender === 'function') {
            return readonlyRender(this.props);
          }
        return this.getReadOnlyStatus();
      default:
        return null;
    }
  };
  render() {
    const { formItem = {}, status, config = {} } = this.props;
    return (
      <FormItem {...formItem} required={status === PREVIEW ? false : formItem.required}>
        <div className="afms-form-item-container">
          {this.getContent()}
          {config.extra && <span className="afms-form-item-extra">{config.extra}</span>}
        </div>
      </FormItem>
    );
  }
}

BaseField.defaultProps = {
  type: '',
  status: EDIT,
  defaultValue: undefined,
  value: undefined,
  formItem: {},
  decorator: {},
  config: {},
  form: {},
  previewRender: undefined,
};

BaseField.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  status: PropTypes.string,
  formItem: PropTypes.object,
  decorator: PropTypes.object,
  config: PropTypes.object,
  form: PropTypes.object,
  previewRender: PropTypes.func,
};

export default BaseField;
