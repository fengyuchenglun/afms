import React from 'react';
import { Form, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { FormRender } from 'afms';
import { FormConfigProps } from 'afms/es/types';

const FormItem = Form.Item;

const formConfig: FormConfigProps = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 10,
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
    },
    {
      field: 'input',
      type: 'textarea',
      id: 'testarea',
      formItem: {
        label: 'Textarea',
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
    },
    {
      field: 'datepicker',
      id: 'rangedatepicker',
      type: 'range',
      formItem: {
        label: 'RangeDatePicker',
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
        style: { width: '330px' },
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
    },
  ],
};

let formRef: React.Component<FormComponentProps>;

const BasicForm: React.FC = () => {
  function handleSubmit() {
    const { form } = formRef.props;
    form.validateFields((error) => {
      if (!error) {
        console.log(form.getFieldsValue());
      }
    });
  }
  function handleReset() {
    const { form } = formRef.props;
    form.resetFields();
  }
  return (
    <div>
      <FormRender
        config={formConfig}
        wrappedComponentRef={(c: React.Component<FormComponentProps>) => {
          formRef = c;
        }}
      />
      <FormItem wrapperCol={{ span: 18, offset: 4 }}>
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
        <Button onClick={handleReset} style={{ marginLeft: '10px' }}>
          Reset
        </Button>
      </FormItem>
    </div>
  );
};

BasicForm.propTypes = {
};

export default BasicForm;
