/**
 *
 * FormRenderCore
 *
 */

import React, { ComponentType } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Row, Col } from 'antd';
import { ConfigConsumer } from 'antd/es/config-provider/context';
import { FormItemProps } from 'antd/lib/form';
import { ConfigConsumerProps } from 'antd/lib/config-provider';
import { EDIT } from '../utils/consts';
import { defaultFormConfig } from '../form-render';
import internalFields from './fields';
import { FormRenderCoreProps, FieldProps, FormConfigProps, ComponentFieldType } from '../types';

const fieldsMap: ComponentFieldType = {};

function extendFieldConfig(item: FieldProps, props: FormRenderCoreProps) {
  const config = item.config || {};
  const customOnChange = config.onChange;
  return {
    ...config,
    // 托管所有组件的 onChange 事件
    onChange: (...arg: any[]) => {
      if (props.onChange) {
        props.onChange(item, ...arg);
      }
      if (customOnChange) {
        customOnChange(props.form, ...arg);
      }
    },
  };
};

function mergeFormItemConfig(config: FormConfigProps, formItem?: FormItemProps): FormItemProps {
  const {
    labelCol, wrapperCol, colon, labelAlign,
  } = config;
  return {
    labelCol,
    wrapperCol,
    colon,
    labelAlign,
    ...formItem,
  };
}

class FormRenderCore extends React.PureComponent<FormRenderCoreProps> {
  static defaultProps = {}
  static propTypes = {}
  static registerFormField = (name: string, field: ComponentType) => {
    fieldsMap[name] = field;
  }
  static registerFormFields = (fields: ComponentFieldType = {}) => {
    Object.keys(fields).forEach((name: string) => {
      fieldsMap[name] = fields[name];
    });
  }
  getFormItems = () => {
    const { config = defaultFormConfig, form, data } = this.props;
    const { status, fields = [], emptyContent } = config;
    const validFields = fields.filter((item: FieldProps) => item.status !== 'none');
    const formItems = validFields.map((item: FieldProps) => {
      const { field, id } = item;
      if (!field) {
        throw new Error('You should be configure field option.');
      }
      // 扩展 Field 配置，如 form, status, onChange 等属性
      const fieldProps: FieldProps = {
        form,
        // 全局设置组件的状态，可被组件覆盖
        status,
        // 全局设置组件 value 为 null 的展示方式
        emptyContent,
        // 根据传入的 Data 自动填充表单数据
        value: data && data[id] !== undefined ? data[id] : undefined,
        ...item,
        // 合并 Form 里面的配置，如 labelCol, wrapperCol 等
        formItem: mergeFormItemConfig(config, item.formItem),
      };
      fieldProps.config = extendFieldConfig(item, this.props);
      // 内置组件
      if (typeof field === 'string') {
        const TargetComponent = fieldsMap[field];
        if (!TargetComponent) {
          throw new Error(`Field '${field} is not exsit, check the field name or custom your field.'`);
        }
        return <TargetComponent key={id} {...fieldProps} />;
      }
      // 自定义组件
      const CustomField = field;
      return <CustomField key={id} {...fieldProps} />;
    });
    return formItems;
  };
  setMultiColumnLayout = (formItems: Array<React.ReactElement>) => {
    const { config = defaultFormConfig } = this.props;
    const { gutter = 0, column = 1 } = config;
    const spanUnit = 24 / column;
    // 使用多列布局，Row Col 来控制
    return (
      <Row gutter={gutter}>
        {React.Children.map(formItems, (child) => {
          const { colSpan = 1 } = child.props;
          const span = Math.min(24, spanUnit * colSpan);
          return <Col {...{ xs: 24, sm: Math.min(24, span * 2), md: span }}>{child}</Col>;
        })}
      </Row>
    );
  };
  render() {
    const {
      config = defaultFormConfig, style, className, needWrapFormRenderCore,
    } = this.props;
    const { layout = 'horizontal', status = EDIT, hideRequiredMark } = config;
    const formItems = this.getFormItems();
    const renderContent = layout === 'multi-column' ? this.setMultiColumnLayout(formItems) : formItems;
    // 正常不希望加一层 div 包裹，主要针对需要对 FormRenderCore 进行布局处理的情况，可以添加 className 或 style 进行控制
    // 内部对于直接使用 FormRender 的情况，配置 needWrapFormRenderCore 为 false，因为只有一个表单，可以直接在 FormRender 进行布局处理
    return (
      needWrapFormRenderCore ?
        <ConfigConsumer>
          {
            (({ getPrefixCls }: ConfigConsumerProps) => {
              const prefixCls = getPrefixCls('form');
              return (
                <div
                  className={classNames(
                    'afms-form-render-core',
                    `afms-form-render-core-${status}`,
                    {
                      [`${prefixCls}-horizontal`]: layout === 'horizontal',
                      [`${prefixCls}-vertical`]: layout === 'vertical',
                      [`${prefixCls}-inline`]: layout === 'inline',
                      [`${prefixCls}-hide-required-mark`]: hideRequiredMark,
                    },
                    className)}
                    style={style}
                >
                  {renderContent}
                </div>
              );
            })
          }
        </ConfigConsumer>
      : renderContent
    );
  }
}

FormRenderCore.registerFormFields(internalFields);

FormRenderCore.defaultProps = {
  form: {},
  config: {
    status: EDIT,
    fields: [],
  },
  data: null,
  className: '',
  style: {},
  onChange: () => {},
  needWrapFormRenderCore: true,
};

FormRenderCore.propTypes = {
  form: PropTypes.object,
  config: PropTypes.object,
  data: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  needWrapFormRenderCore: PropTypes.bool,
};

export default FormRenderCore;
