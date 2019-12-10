import React from 'react';
import { Form, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { FormRender } from 'afms';
import { FormConfigProps } from 'afms/es/types';
import PriceInputField from 'components/fields/PriceInputField';

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
    },
    {
      field: 'input',
      id: 'mobile',
      formItem: {
        label: 'Mobile',
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
      field: PriceInputField,
      id: 'income',
      formItem: {
        label: 'Income',
      },
      config: {},
    },
  ],
};

let formRef: React.Component<FormComponentProps>;

const CustomFormField: React.FC = () => {
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

CustomFormField.propTypes = {
};

export default CustomFormField;
