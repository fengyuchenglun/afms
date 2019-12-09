import React, { useState, useMemo } from 'react';
import { Form, Button, Radio } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { FormRender } from '../../../../es';
import { FormConfigProps, FormLayout } from '../../../../es/types';
import { RadioChangeEvent } from 'antd/lib/radio';
import './index.scss';

const FormItem = Form.Item;

const baseFormConfig: FormConfigProps = {
  fields: [
    {
      field: 'input',
      id: 'input',
      formItem: {
        label: 'Input',
      },
    },
    {
      field: 'select',
      id: 'select',
      formItem: {
        label: 'Select',
      },
      config: {
        placeholder: 'Please Select',
        options: [{ label: 'Apples', value: 'Apples' }, { label: 'Nails', value: 'Nails' }, { label: 'Bananas', value: 'Bananas' }],
        style: { width: '210px' },
      },
    },
  ],
};

const horizontalFormConfig: FormConfigProps = {
  layout: 'horizontal',
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 16,
  },
  ...baseFormConfig,
};

const inlineFormConfig: FormConfigProps = {
  layout: 'inline',
  ...baseFormConfig,
};

const verticalFormConfig: FormConfigProps = {
  layout: 'vertical',
  ...baseFormConfig,
};

const multiColumnFormConfig: FormConfigProps = {
  layout: 'multi-column',
  column: 2,
  gutter: 50,
  labelCol: {
    span: 6,
    style: {
      maxWidth: '180px',
    },
  },
  wrapperCol: {
    span: 18,
  },
  fields: [
    {
      field: 'input',
      id: 'input',
      formItem: {
        label: 'Input',
      },
    },
    {
      field: 'input',
      type: 'inputNumber',
      id: 'inputNumber',
      formItem: {
        label: 'InputNumber',
      },
      config: {
        style: {
          width: '100%',
        },
      },
    },
    {
      field: 'radio',
      id: 'radio',
      defaultValue: 'Apples',
      formItem: {
        label: 'Radio',
      },
      config: {
        options: [{ label: 'Apples', value: 'Apples' }, { label: 'Nails', value: 'Nails' }, { label: 'Bananas', value: 'Bananas' }],
      },
    },
    {
      field: 'checkbox',
      id: 'checkbox',
      defaultValue: ['Apples', 'Bananas'],
      formItem: {
        label: 'checkbox',
      },
      config: {
        options: [{ label: 'Apples', value: 'Apples' }, { label: 'Nails', value: 'Nails' }, { label: 'Bananas', value: 'Bananas' }],
      },
    },
    {
      field: 'datepicker',
      id: 'datepicker',
      formItem: {
        label: 'DatePicker',
      },
      config: {
        style: {
          width: '100%',
        },
      },
    },
    {
      field: 'datepicker',
      id: 'rangedatepicker',
      type: 'range',
      formItem: {
        label: 'RangeDatePicker',
      },
      config: {
        style: {
          width: '100%',
        },
      },
    },
    {
      field: 'select',
      id: 'select',
      formItem: {
        label: 'Select',
      },
      config: {
        placeholder: 'Please Select',
        options: [{ label: 'Apples', value: 'Apples' }, { label: 'Nails', value: 'Nails' }, { label: 'Bananas', value: 'Bananas' }],
      },
    },
    {
      field: 'switch',
      id: 'switch',
      formItem: {
        label: 'Switch',
      },
      decorator: {
        valuePropName: 'checked',
      },
    },
    {
      field: 'rate',
      id: 'rate',
      defaultValue: 2,
      formItem: {
        label: 'Rate',
      },
    }
  ],
};

const FormLayoutPage: React.FC = () => {
  return (
    <div>
      <div className="panel" style={{ paddingBottom: '24px' }}>
        <h1 className="panel-title">Inline</h1>
        <FormRender
          config={inlineFormConfig}
        />
      </div>
      <div className="panel">
        <h1 className="panel-title">Vertical</h1>
        <FormRender
          config={verticalFormConfig}
        />
      </div>
      <div className="panel">
        <h1 className="panel-title">Horizontal</h1>
        <FormRender
          config={horizontalFormConfig}
        />
      </div>
      <div className="panel">
        <h1 className="panel-title">MultiColumn</h1>
        <FormRender
          config={multiColumnFormConfig}
        />
      </div>
    </div>
  );
};

FormLayoutPage.propTypes = {
};

export default FormLayoutPage;
