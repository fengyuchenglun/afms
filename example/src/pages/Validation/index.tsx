import React from 'react';
import { Form, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { FormRender } from '../../../../es';
import { FormConfigProps } from '../../../../es/types';

const FormItem = Form.Item;

const formConfig: FormConfigProps = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 12,
  },
  fields: [
    {
      field: 'input',
      id: 'name',
      formItem: {
        label: 'Name',
      },
      decorator: {
        rules: [{
          required: true,
          message: 'Please input your name',
        }],
      },
    },
    {
      field: 'input',
      id: 'mobile',
      formItem: {
        label: 'Mobile',
      },
      decorator: {
        rules: [
          {
            validator: (rule, value, callback) => {
              if (value && !(/^1(3|4|5|6|7|8|9)\d{9}$/.test(value.trim()))) {
                callback('Please input correct phone number');
                return;
              }
              callback();
            },
          },
        ],
      },
    },
    {
      field: 'input',
      id: 'password',
      type: 'password',
      formItem: {
        label: 'Password',
      },
    },
    {
      field: 'radio',
      id: 'sex',
      formItem: {
        label: 'Sex',
      },
      config: {
        options: [{
          label: 'Male',
          value: 0,
        }, {
          label: 'Female',
          value: 1,
        }],
      },
    },
    {
      field: 'select',
      id: 'company',
      formItem: {
        label: 'Company',
      },
      decorator: {
        rules: [{
          required: true,
          message: 'Please select your company',
        }],
      },
      config: {
        placeholder: 'Please select',
        options: [{ label: 'Alibaba', value: 'alibaba' }, { label: 'Alipay', value: 'Alipay' }, { label: 'Baidu', value: 'baidu' }],
        style: { width: '330px' },
      },
    },
  ],
};

let formRef: React.Component<FormComponentProps>;

const Validation: React.FC = () => {
  function handleSubmit() {
    const { form } = formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log(values);
    });
  }
  return (
    <div>
      <FormRender
        config={formConfig}
        wrappedComponentRef={(c: React.Component<FormComponentProps>) => {
          formRef = c;
        }}
      />
      <FormItem wrapperCol={{ span: 18, offset: 3 }}>
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </FormItem>
    </div>
  );
};

Validation.propTypes = {
};

export default Validation;
